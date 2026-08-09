# Evergreen Softwash — SEO Content Strategy

A working plan for turning the website into the region's most-found exterior-care brand. Built
around one principle: **rank for the questions wealthy property owners actually ask, then
answer them more honestly than anyone else.**

---

## 1. Positioning & audience

| | |
|---|---|
| **Who we serve** | Owners of fine homes, collector vehicles, private aircraft, and vessels across greater Puget Sound |
| **What they search** | Problem-first ("moss on roof"), method-second ("soft washing vs pressure washing"), price-third ("house wash cost"), brand-last |
| **Tone** | Quiet luxury: knowledgeable, unhurried, zero scare tactics. We publish real prices — nobody else does. That *is* the strategy. |

## 2. Site architecture for search (already built)

```
/                       → head terms + brand ("soft washing Puget Sound")
/services/              → commercial intent hub ("pressure washing prices")
/services/soft-washing/         → "soft washing", "house wash", "roof cleaning"
/services/pressure-washing/     → "pressure washing driveway/patio"
/services/vehicle-detailing/    → "mobile car detailing", "ceramic coating"
/services/aircraft-detailing/   → "aircraft detailing", "jet wash brightwork"
/services/watercraft-detailing/ → "boat detailing", "hull oxidation removal"
/service-areas/         → local intent ("pressure washing Gig Harbor")
/blog/                  → informational intent feeding the money pages
/about/, /contact/      → trust + conversion
```

Every service page carries `Service` + `Offer` schema with real prices, `FAQPage` schema, and
breadcrumbs. The whole site emits `LocalBusiness` schema with `areaServed`.

## 3. Keyword clusters & the pages that own them

| Cluster | Primary keyword (intent) | Owning page | Supporting journal posts |
|---|---|---|---|
| Soft wash | soft washing near me (commercial) | /services/soft-washing/ | ✅ Soft washing vs. pressure washing |
| Roof | roof cleaning / moss removal (commercial) | /services/soft-washing/ | ✅ Moss on your roof (NW guide) |
| Hardscape | driveway pressure washing (commercial) | /services/pressure-washing/ | ▢ "Paver care calendar for NW estates" |
| Auto | mobile detailing / ceramic coating (commercial) | /services/vehicle-detailing/ | ▢ "Ceramic coating for daily drivers vs collectors" |
| Aviation | aircraft detailing (commercial, low volume/high value) | /services/aircraft-detailing/ | ▢ "What FBOs require before a detail crew touches your aircraft" |
| Marine | boat detailing / hull cleaning (commercial) | /services/watercraft-detailing/ | ✅ Is ceramic coating worth it on a boat? |
| Price | house washing cost (commercial-informational) | ✅ House wash cost guide → links to /services/ |
| Local | {service} + {city} (commercial-local) | /service-areas/ + GBP | ▢ City-specific pages (phase 2, see §6) |

## 4. Publishing cadence (first 6 months)

Two journal posts per month, alternating **problem posts** (moss, oxidation, algae, water
spots) and **decision posts** (costs, comparisons, timing). Every post must:

1. Target one query cluster from §3 and answer it completely.
2. Link to exactly one service page as primary CTA and 1–2 sibling posts.
3. Include one honest "when you don't need us" section — this is the trust signature that earns links and repeat visits.
4. Publish real numbers whenever possible. Transparency is the moat.

Backlog (in priority order): paver care calendar · ceramic for daily drivers ·
FBO requirements · "why your white vinyl turned green" · dock & pier washing ·
pre-listing exterior checklist (broker co-marketing piece) · cedar roof lifespan math ·
salt-air care for waterfront windows.

## 5. Local SEO (highest-leverage work outside the site)

- **Google Business Profile**: primary category *Pressure washing service*, secondary
  *Window cleaning* + *Boat detailing*. Weekly photo posts from real jobs (before/after
  pairs). Reply to every review within a day.
- **Reviews engine**: post-job email with direct GBP review link; goal 8–10/month.
- **Citations**: consistent NAP (from `src/config/site.ts`) on Yelp, Angi, Houzz, Nextdoor,
  BBB, chamber listings for Gig Harbor + Tacoma.
- **Niche authority**: listings/profiles at marina directories, FBO service directories, and
  concours/car-club sponsorships — low competition, exactly our buyer.

## 6. Phase 2 (after 90 days of data)

- Break out `/services/roof-cleaning/` as its own page if Search Console shows roof queries
  clustering (likely — it's the region's highest-volume term).
- City landing pages for the 4–5 areas with real inquiry volume (unique copy per city:
  landmarks, materials common to that housing stock, marina/airfield specifics — never
  templated paragraphs with swapped city names).
- Before/after gallery page once 20+ documented jobs exist (image SEO + conversion).
- Video: 60-second roof transformation clips for GBP/YouTube (feeds "roof cleaning near me").

## 7. Measurement

| Metric | Tool | Target (month 6) |
|---|---|---|
| Non-brand organic clicks | Search Console | 1,500/mo |
| "Near me"/local pack impressions | GBP insights | Top-3 pack for 3 core cities |
| Quote requests from organic | Form source tracking | 25/mo |
| Journal → service page click-through | Analytics | ≥ 30% |

Review this document quarterly; retire targets that hit page one and promote the next
cluster from the backlog.
