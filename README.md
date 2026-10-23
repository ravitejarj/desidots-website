# DesiDots website

A fast, static website for DesiDots (home page + the legal pages). Built with **Astro 5**, **Tailwind CSS 4**, TypeScript and the Plus Jakarta Sans font. White background, orange theme. No tracking scripts, no cookies.

This folder is separate from the app. The app is in `DesiDots v4`.

## Run it on your computer
```
npm install --legacy-peer-deps
npm run dev          # opens http://localhost:4321 with live reload
```
Needs Node 20.3 or newer (you have 20.20). When you upgrade to Node 22 you can also upgrade Astro (`npm i astro@latest`).

## Where things are
| What | Where |
|---|---|
| Home page text and sections | `src/pages/index.astro` |
| Header / footer | `src/components/Header.astro`, `Footer.astro` |
| Legal pages (Markdown, edit the text here) | `src/content/legal/*.md` |
| Colours and fonts | `src/styles/global.css` (brand orange = `--color-brand-600`) |
| Logo, favicon, share image | `public/` |
| Page title / description / share card | `src/layouts/Base.astro` |

The legal pages here (Terms, Privacy, Refunds, Shipping, Delete account, Contact) are the ones that get published. The Vendor Agreement is kept out of the website, in the app folder (`DesiDots v4/legal`). A lawyer's review is still recommended; no document can promise you will never have a dispute.

## The safety lock (important)
`npm run build` **refuses to build** if a draft note is ever left in the legal pages: `[DECIDE ...]`, `[EFFECTIVE DATE]`, `DRAFT:`. (Right now there are none.) That stops an unfinished policy from going live by accident. It prints each leftover note.
- Finish the notes, then `npm run build` works and makes the `dist/` folder.
- For a private preview with drafts: `npm run build:preview`.
- While you edit, `npm run dev` shows a yellow DRAFT banner on any page that still has notes.

## Put it online (free) and connect desidots.com (GoDaddy)
Use **Cloudflare Pages** (free) or Netlify. Steps for Cloudflare Pages:
1. Put this folder in a private GitHub repository (or upload with the Pages "direct upload").
2. Cloudflare dashboard > Workers and Pages > Create > Pages > connect the repository.
3. Build command: `npm run build`  Output folder: `dist`  Node version: 20 or 22. (Environment variable `NPM_FLAGS=--legacy-peer-deps` if install complains.)
4. After it deploys, open Custom domains and add `www.desidots.com`. Cloudflare shows a CNAME record to add.
5. In GoDaddy > DNS for desidots.com: add that CNAME for `www`. **Do not delete the existing Zoho MX/TXT records** (they run your email). In GoDaddy, forward the bare domain `desidots.com` to `https://www.desidots.com`.
6. Wait up to an hour. Then open https://www.desidots.com.

## Before going live: checklist
- [x] Legal pages written (no draft notes left); a lawyer's review is still recommended
- [ ] Business name/address final (footer: `src/components/Footer.astro`; text in `src/layouts/Base.astro`; legal pages)
- [ ] Replace the "Coming soon" store badges with real links once the apps are published (`src/pages/index.astro`)
- [ ] Add real app screenshots in place of the drawn phone (`src/components/PhoneMock.astro`)
- [ ] Add your Instagram link to the footer when the page exists
- [ ] Put the website address in Stripe (Settings > Business details) and in the Google Play and App Store listings; the privacy policy page is `https://www.desidots.com/privacy/` and the account deletion page is `https://www.desidots.com/delete-account/`
