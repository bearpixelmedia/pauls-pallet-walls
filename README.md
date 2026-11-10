# Crafted Walls (Paul's Pallet Walls) — v1.0.0

Marketing and lead site for **Crafted Walls**: pallet wall packages (DIY kits) and professional pallet wall installs in Asheville and Western North Carolina.

**Live:** https://www.craftedwalls.com (Vercel project `pauls-pallet-walls`)

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Deployed on Vercel

## Local development

```bash
npm install      # also decodes base64 image sidecars in public/
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` home (hero, packages, construction, examples, how it works, FAQ, quote)
- `/services`, `/services/packages`, `/services/construction`, `/services/commercial`
- `/service-area`, `/thanks`
- `POST /api/quote` quote leads, `POST /api/subscribe` newsletter signups

## Environment

Copy `.env.example` to `.env.local`. Production values (`RESEND_API_KEY`,
`LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`) live in Vercel only, never in git.
With no lead env vars set, the APIs fall back to a prefilled `mailto:`.

## Images

Photos in `public/images/` are stored as `*.b64.part*` sidecars and decoded
by `scripts/decode-images.cjs` on `postinstall` / `prebuild`.

## History

Recovered on 2026-11-10 from the live production deployment (commit
`3255013` on `cursor/pauls-pallet-walls-site-13eb`). See CHANGELOG.md.
