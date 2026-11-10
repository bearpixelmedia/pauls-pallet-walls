# Changelog

## v1.0.0 — 2026-11-10

- Source recovered from live deployment `dpl_4r2BsvH6mSXt5N4c1m5Ea5N4YLU8`
  (production for www.craftedwalls.com, built 2026-11-05 from commit
  `3255013` on branch `cursor/pauls-pallet-walls-site-13eb`).
- Full Next.js app now on the main line: pages, components, `/api/quote`,
  `/api/subscribe`, lib helpers, brand assets, and base64 image sidecars
  (decoded at install/build by `scripts/decode-images.cjs`).
- Version set to 1.0.0. One-off GitHub Actions ingest workflows
  (pointed at expired temporary file hosts) left out; they remain in the
  history of the original branch.
- Secrets stay in Vercel. See `.env.example` for variable names.
