# City Homes by Aashiyaanaa

A premium hospitality website for a curated collection of villas and city
apartments across Mumbai, Lonavala and Pawna Lake. Built with Next.js (App
Router) and TypeScript, styled with Tailwind CSS v4, and designed to deploy
to **Cloudflare Workers** — not Vercel.

## Brand note

`--color-brand-red` in `app/globals.css` is a placeholder (`#C6262E`). No
logo file was supplied when this project was built — sample the exact red
from the final City Homes by Aashiyaanaa logo and update that single value
before launch.

## Tech stack

- Next.js (App Router) + TypeScript, strict mode
- Tailwind CSS v4 (`@theme` design tokens in `app/globals.css`)
- Motion (restrained animation) + Lucide React (icons)
- Zod for shared client/server form validation
- Cloudflare Workers via the OpenNext Cloudflare adapter
- Cloudflare R2 for property imagery (via a custom Next.js image loader)
- Cloudflare Turnstile for form spam protection
- Resend for transactional enquiry emails

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in what you have; everything degrades gracefully
npm run dev
```

Open http://localhost:3000. Without R2/Turnstile/Resend configured, the app
still runs in full: images fall back to a generated placeholder route,
Turnstile is skipped in development, and email sends are silently skipped
(logged) instead of failing.

### Environment variables

See `.env.example` for the full list. Summary:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for sending enquiry emails |
| `CONTACT_RECIPIENT_EMAIL` | Inbox that receives contact/enquiry notifications |
| `TURNSTILE_SECRET_KEY` | Server-side Turnstile verification |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Client-side Turnstile widget key |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits-only WhatsApp number (with country code, no `+`) used for click-to-chat links |
| `NEXT_PUBLIC_R2_IMAGE_BASE_URL` | Public base URL for the R2 bucket (or a resizing Worker in front of it) serving property photography |

## Project structure

```
app/                     Routes (App Router)
  villas/[slug]          Villa detail route -> renders shared PropertyDetailPage
  apartments/[slug]      Apartment detail route -> renders shared PropertyDetailPage
  api/contact            Contact form submission (edge runtime)
  api/enquiry            Property enquiry submission (edge runtime)
  sitemap.ts / robots.ts Dynamic SEO routes
components/              Reusable UI (Header, PropertyCard, EnquiryForm, ...)
data/                    Property, testimonial and destination seed data
lib/                     Validation schemas, R2 image helpers, Resend/Turnstile clients
types/                   Shared TypeScript types (Property, etc.)
```

There is a **single** dynamic property detail template
(`components/PropertyDetailPage.tsx`) used by both `/villas/[slug]` and
`/apartments/[slug]` — property pages are never hand-duplicated.

## Pearl Apartment data — known TODO

`data/properties.ts` models Pearl Apartment by Aashiyaanaa with
`bathrooms: null`. The source material had inconsistent bathroom counts
across channels. **Confirm the true figure with the property owner before
production launch** — search the codebase for `TODO(product)` to find this
and update the value (and remove the "to be confirmed" UI state in
`PropertyFacts.tsx`) once confirmed.

## Cloudflare R2 setup (property images)

1. Create an R2 bucket, e.g. `city-homes-media`.
2. Upload property photography under keys matching `data/properties.ts`,
   e.g. `properties/pearl-apartment/hero.jpg`.
3. Either:
   - Enable public access on the bucket and put a custom domain in front of
     it (e.g. `images.cityhomesbyaashiyaanaa.com`), **or**
   - Put a small Cloudflare Image Resizing Worker in front of R2 that reads
     the `?width=&format=auto` query params emitted by
     `lib/imageLoader.ts` / `lib/images.ts` and returns AVIF/WebP variants.
4. Set `NEXT_PUBLIC_R2_IMAGE_BASE_URL` to that public URL.

Until this is configured, the app renders generated placeholder imagery via
`app/placeholder-images/[...path]/route.ts` — a dev convenience only, never
used once `NEXT_PUBLIC_R2_IMAGE_BASE_URL` is set.

## Resend setup (transactional email)

1. Create a Resend account and verify the sending domain
   (`cityhomesbyaashiyaanaa.com`).
2. Create an API key and set `RESEND_API_KEY`.
3. Set `CONTACT_RECIPIENT_EMAIL` to the inbox that should receive enquiries.
4. Update the `from` address in `lib/resend.ts` if your verified sending
   domain differs.

## Turnstile setup (spam protection)

1. Create a Turnstile widget in the Cloudflare dashboard for your domain.
2. Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (client) and `TURNSTILE_SECRET_KEY`
   (server — API routes only, never exposed to the client).
3. In development, if `NEXT_PUBLIC_TURNSTILE_SITE_KEY` /
   `TURNSTILE_SECRET_KEY` are unset, the widget is skipped and server-side
   verification is bypassed so the forms remain testable — this bypass is
   automatically disabled once `NODE_ENV=production`, so a deployed instance
   without a secret key will correctly reject submissions rather than
   silently accepting spam.

## Cloudflare Workers deployment

This project deploys via the
[OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare) — no
Vercel-specific runtime, Vercel Blob, or Vercel serverless functions are
used anywhere in the codebase. Both API routes explicitly set
`export const runtime = "edge"`.

```bash
npm install
npx wrangler login

# Build the OpenNext output and preview it locally against Workers runtime
npm run cf:preview

# Deploy
npm run cf:deploy
```

Before deploying:

1. Update `wrangler.jsonc`:
   - `name` — your Worker name.
   - `vars` — non-secret public values (`NEXT_PUBLIC_*`, `CONTACT_RECIPIENT_EMAIL`).
2. Add secrets (never commit these):
   ```bash
   npx wrangler secret put RESEND_API_KEY
   npx wrangler secret put TURNSTILE_SECRET_KEY
   ```
3. Point your custom domain at the Worker via the Cloudflare dashboard
   (Workers & Pages -> your Worker -> Triggers -> Custom Domains).

### Known Cloudflare compatibility notes

- Images use a **custom Next.js loader** (`lib/imageLoader.ts`) rather than
  the default Vercel-based optimizer, resolving directly to R2/your
  resizing Worker.
- Both `/api/contact` and `/api/enquiry` run on the `edge` runtime and use
  `fetch`-based clients only (Resend's SDK and Turnstile verification are
  both fetch-based) — no Node-only APIs.
- Property data is a bundled TypeScript module (`data/properties.ts`), not
  a filesystem read, so it works identically in the Workers runtime.

## Accessibility & performance notes

- Keyboard-accessible navigation, mobile menu (focus trap, Escape to close,
  body scroll lock) and gallery lightbox (arrow keys, Escape, focus
  management).
- `prefers-reduced-motion` is respected globally in `app/globals.css`.
- Forms use associated labels, `aria-invalid`, `role="alert"` for field and
  server errors, and honeypot fields for bot mitigation ahead of Turnstile.
- Map embeds are lazy-loaded (`loading="lazy"` on the iframe).
- Most components are server components by default; interactive pieces
  (menus, filters, forms, gallery, testimonials) are the only client
  components.

## Linting & type checking

```bash
npm run lint
npx tsc --noEmit
```
