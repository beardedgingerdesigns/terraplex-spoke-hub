---
referoScreenId: 6f85d84c-e80c-49b2-8113-f7c209eefcf8
referoUrl: https://refero.design/pages/6f85d84c-e80c-49b2-8113-f7c209eefcf8
section: services
applicableArchetypes: [field, clean, terrain, patriot, forge, tactical]
savedAt: 2026-05-03
savedFor: library-audit
tags: [use-case-grid, industry-vertical-grid, breadth-signal, light-pill-cards, no-photo-services, dense-grid]
---

## Why this is library-worthy
A 5x3 grid of small flat use-case cards — one per industry vertical the service applies to — with no photos, just an icon + 2-line title + 4-line description per cell. The opposite of the [audience-tabbed-services](./refero-fef890ec-audience-tabbed-services.md) (which surfaces 3–5 audiences via interactive tabs); this pattern shows ALL audiences at once in a dense flat grid, signaling "we serve every kind of operation in your industry" without making the visitor click. Right pick for a dealer whose moat is breadth-of-coverage across crop types, operation types, or customer-segments.

## What to take
- Above the grid: small page kicker ("Use cases" → "Who we serve"), centered, regular-weight grotesque, ~20–24px. One subhead line below it ("Build a custom [service] powered by your own knowledge and experience" → dealer equivalent). Both centered; very restrained.
- 5 rows × 3 columns = 15 use-case cells. Each cell: tonal-shifted background (e.g. light grey #F4F4F4 against white page), generous padding (~24px), small abstract icon top-left, 2-line bold title, 4-line description body. No CTAs in the cells, no images, no photos.
- Card cells are NOT linked individually — the grid is a breadth advertisement, not a routing surface. (If individual cells need to deep-link to per-vertical pages, that's a different design — the all-flat grid here is specifically about *signaling breadth*.)
- Generous gutters (~16-24px) between cells; cards are uniform height with deliberate ragged-text bottoms (don't pad short descriptions to match longer ones — the asymmetric whitespace is part of the editorial feel).
- Page footer: a massive overflowing wordmark of the brand at the bottom — uppercase, near-page-width, becomes the page's only display-typography moment. Replaces the trust-band logos most services pages would use. Optional adoption.

## What NOT to take
- Don't drop below 12 cells or above 18 cells. Below 12, the "we serve everyone" claim isn't visually evidenced. Above 18, the grid stops scanning as a list and starts scanning as a wall.
- Don't add photos to the cells — the no-photo restraint is what lets the grid scale to 15+ items without becoming visually overwhelming. Photos would force you back down to 6-8 cards.
- Don't add CTAs inside cells — that converts the grid from a breadth signal into a routing menu, which is the audience-tabbed services pattern's job. Pick one or the other, not both.
- Don't use this if the dealer only serves 4–6 customer types — the grid pattern needs density to earn its keep. With 4–6 types, use audience-tabbed instead.
- The pure-white page with light-grey cards would feel undercommitted on FORGE/TACTICAL without a dark-mode inversion (see adaptation notes).

## Adaptation notes (cross-archetype)
- FIELD: cream page base, slightly darker cream cards (#F0E9D9), terracotta icons, charcoal type. The massive bottom wordmark in deep amber. See [FIELD archetype](../../../archetypes/field.md).
- CLEAN: white page base, light-grey cards (native fit), brand-accent icons, charcoal type. Bottom wordmark in brand-accent.
- TERRAIN: cream page base, contour-line-pattern cards (very subtle topo lines as card background instead of flat grey), charcoal icons, charcoal type. Bottom wordmark in charcoal. See [TERRAIN archetype](../../../archetypes/terrain.md).
- PATRIOT: cream page base, slightly darker cream cards, navy icons, charcoal type. One row of cells gets a barn-red icon instead of navy (alternation kept at icon scale, not card scale). Bottom wordmark in deep navy. See [PATRIOT archetype](../../../archetypes/patriot.md).
- FORGE: invert — near-black page base, slightly lighter near-black cards (#1A1A1A on #0A0A0A), ember icons, white type. Bottom wordmark in ember-glow. See [FORGE archetype](../../../archetypes/forge.md).
- TACTICAL: pure-black page base, dark-grey cards (#141414 on #000), white icons, white type, hairline border on each card (#2A2A2A). Bottom wordmark in white. See [TACTICAL archetype](../../../archetypes/tactical.md).
- For a dealer carrying both a deep audience-segment menu *and* deep operational steps, pair this with [numbered-stepper-services](./refero-d030e2b2-numbered-stepper-services.md) — the stepper lives at the top (how it works), the dense grid lives in the middle (who we serve), and the recommender lives at the bottom (which tier you need). For audience switching with deeper per-audience content, use [audience-tabbed-services](./refero-fef890ec-audience-tabbed-services.md) instead.

## Source brief
Outchat's `/use-cases` — a custom-AI builder that markets itself by listing every professional vertical it can be trained for (Coaches, Lawyers, Accountants, Marketers, Designers, Authors, Educators, Researchers, Fitness, Chefs, Travel — 15 cells). The dense grid IS the value prop ("look how broadly we apply"). Same shape works for a Terraplex dealer who serves a wide mix of crop types (corn, soybeans, cotton, rice, vineyards, orchards, specialty, livestock, range, turf, forestry, etc.) and wants the breadth to be the credibility move rather than tabbing through 4 audience-types.
