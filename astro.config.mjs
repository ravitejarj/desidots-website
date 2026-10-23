// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// The site is static, except the one contact-form endpoint (src/pages/api/contact.ts) which runs on the server.
export default defineConfig({
  site: 'https://www.desidots.com',
  integrations: [sitemap()],
  adapter: vercel(),
  // server-only settings for the contact form (set in Vercel > Settings > Environment Variables; see .env.example)
  env: {
    schema: {
      SMTP_HOST: envField.string({ context: 'server', access: 'secret', optional: true, default: 'smtp.zoho.com' }),
      SMTP_PORT: envField.number({ context: 'server', access: 'secret', optional: true, default: 465 }),
      SMTP_USER: envField.string({ context: 'server', access: 'secret', optional: true }),
      SMTP_PASS: envField.string({ context: 'server', access: 'secret', optional: true }),
      MAIL_TO: envField.string({ context: 'server', access: 'secret', optional: true, default: 'support@desidots.com' }),
    },
  },
  vite: { plugins: [tailwindcss()] },
  build: { format: 'directory' },
});
