import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } from 'astro:env/server';

// Runs on the server (not part of the static pages). Sends the contact form to the DesiDots mailbox through Zoho SMTP.
// Settings come from environment variables (see .env.example): SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO.
export const prerender = false;

const ALLOWED_ORIGINS = new Set([
  'https://www.desidots.com',
  'https://desidots.com',
  'http://localhost:4321',
  'http://localhost:4399',
]);

// remove control characters and trim, so a field can never add extra mail headers
const clean = (value: unknown, max: number) => String(value ?? '').replace(/[\u0000-\u001f\u007f]+/g, ' ').trim().slice(0, max);
const EMAIL = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/;

// best-effort limit per visitor (each server instance keeps its own count)
const hits = new Map<string, number[]>();
const tooMany = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(t => now - t < 60 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
};

const reply = (wantsJson: boolean, ok: boolean, message: string, status = ok ? 200 : 400) =>
  wantsJson
    ? new Response(JSON.stringify({ ok, message }), { status, headers: { 'Content-Type': 'application/json' } })
    : new Response(null, { status: 303, headers: { Location: `/contact/?${ok ? 'sent=1' : 'error=1'}` } });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const origin = request.headers.get('origin');
  if (origin && !ALLOWED_ORIGINS.has(origin) && !origin.endsWith('.vercel.app')) return reply(wantsJson, false, 'Not allowed.', 403);

  let data: Record<string, unknown> = {};
  try {
    const type = request.headers.get('content-type') ?? '';
    data = type.includes('application/json') ? await request.json() : Object.fromEntries((await request.formData()).entries());
  } catch {
    return reply(wantsJson, false, 'We could not read your message. Please try again.');
  }

  // a hidden field that only robots fill in: pretend it worked
  if (clean(data.website, 200)) return reply(wantsJson, true, 'Thank you. Your message was sent.');

  const name = clean(data.name, 100);
  const email = clean(data.email, 200);
  const order = clean(data.order, 40);
  const message = String(data.message ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]+/g, ' ').trim().slice(0, 5000);

  if (name.length < 2) return reply(wantsJson, false, 'Please enter your name.');
  if (!EMAIL.test(email)) return reply(wantsJson, false, 'Please enter a valid email address.');
  if (message.length < 10) return reply(wantsJson, false, 'Please write a little more in your message (at least 10 characters).');
  if ((message.match(/https?:\/\//gi) ?? []).length > 3) return reply(wantsJson, false, 'Please remove some of the links from your message.');
  if (tooMany(clientAddress ?? 'unknown')) return reply(wantsJson, false, 'You have sent several messages. Please wait a while, or email support@desidots.com.', 429);

  const host = SMTP_HOST;
  const port = SMTP_PORT;
  const user = SMTP_USER;
  const pass = SMTP_PASS;
  const to = MAIL_TO;
  if (!user || !pass) {
    console.error('Contact form: SMTP_USER / SMTP_PASS are not set');
    return reply(wantsJson, false, 'The form is not available right now. Please email support@desidots.com.', 503);
  }

  try {
    const transport = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
    await transport.sendMail({
      from: { name: 'DesiDots website', address: user },
      to,
      replyTo: { name, address: email },
      subject: `Website message from ${name}${order ? ` (order ${order})` : ''}`,
      text: [`Name: ${name}`, `Email: ${email}`, ...(order ? [`Order number: ${order}`] : []), '', message, '', '--', 'Sent from the contact form at www.desidots.com. Reply to this email to answer the customer.'].join('\n'),
    });
  } catch (error) {
    console.error('Contact form: sending failed', error);
    return reply(wantsJson, false, 'We could not send your message. Please email support@desidots.com.', 502);
  }
  return reply(wantsJson, true, 'Thank you. Your message was sent. We reply within 2 business days.');
};

// any other method: not allowed
export const ALL: APIRoute = () => new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
