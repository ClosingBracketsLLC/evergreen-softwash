# Evergreen Softwash — Website

Marketing site for Evergreen Softwash: luxury soft washing, pressure washing, and concierge
detailing (vehicles, aircraft, watercraft) across greater Puget Sound.

Built with [Astro](https://astro.build) — fully static output, one ~19 KB JS bundle
(Lenis smooth scroll + nav toggle + scroll reveal), WebP-only responsive images,
inlined critical CSS, preloaded fonts, an RSS feed, and complete structured data.
See [CONTENT_STRATEGY.md](CONTENT_STRATEGY.md) for the SEO plan.

> **Judging performance?** Use `npm run build && npm run preview`, not `npm run dev`.
> The dev server ships ~1.8 MB of Vite/dev-toolbar JavaScript and unoptimized images
> that never reach production. The production build's initial load is ~500 KB.

## Commands

```sh
npm install       # install dependencies
npm run dev       # dev server at localhost:4321
npm run build     # production build to ./dist
npm run preview   # serve the production build locally
```

## Where things live

| Path | Purpose |
|---|---|
| `src/config/site.ts` | **Single source of truth**: business name, phone, email, hours, service areas, socials, form endpoint |
| `src/data/services.ts` | The five services — copy, features, process, pricing tiers, FAQs. Edits here update the services index, each service page, cards, footer, and schema |
| `src/data/{faqs,testimonials,images}.ts` | General FAQs, testimonials, image registry |
| `src/content/blog/*.md` | Journal articles (add a `.md` file to publish) |
| `src/components/` | Reusable UI (cards, pricing, FAQ accordion, CTA band, waterline motif…) |
| `src/layouts/Base.astro` | Shared shell: SEO head, OG tags, JSON-LD, header/footer |
| `src/assets/photos/` | AI-generated marketing photography (optimized at build) |
| `assets/Evergreen_Softwash_Brand/` | Original brand kit (logos, fonts, colors) |

## Before launch — placeholders to replace

1. **Web3Forms access key** — get one at [web3forms.com](https://web3forms.com) (enter the email that should receive leads; no account needed) and paste it into `web3formsKey` in `src/config/site.ts`. Submissions fail until this is set. Spam defenses already wired: honeypot (`botcheck`) + Web3Forms server-side filtering; if spam volume ever appears, add their captcha integration on top.
2. **Domain** — `astro.config.mjs` (`site`) and `public/robots.txt` use the bare `evergreensoftwash.com` (primary on Render; www 301s to it).
3. **Social URLs** — `src/config/site.ts` (`social`).
4. **Service areas / city** — `src/config/site.ts` if the business bases anywhere other than Gig Harbor, WA.
5. **Mailboxes** — phone `(509) 272-2633` and the `@evergreensoftwash.com` addresses (`info`, `support`, `sales`, `admin`, `billing`) are set in `src/config/site.ts`; the mailboxes themselves still need to be created once the domain has email hosting (e.g. Cloudflare Email Routing or Google Workspace).

## Brand

- Display font: Bebas Neue · Body: Bahnschrift (falls back to self-hosted Barlow)
- Green `#004224` · Blue `#00729D` · Ice `#C4F9FF`
- Signature motif: the "waterline" — a thin ice-blue rule carrying a single droplet
