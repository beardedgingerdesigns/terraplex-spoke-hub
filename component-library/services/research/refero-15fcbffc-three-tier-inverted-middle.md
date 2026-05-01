---
referoScreenId: 15fcbffc-bf73-4741-be85-e6e9635f179a
referoUrl: https://refero.design/pages/15fcbffc-bf73-4741-be85-e6e9635f179a
section: services
applicableArchetypes: [clean, terrain, field, forge, tactical]
incompatibleArchetypes: [patriot]
savedAt: 2026-05-01
savedFor: library-audit
tags: [tier-cards, pricing-grid, inverted-middle, comparison-table, monochrome]
---

## Why this is library-worthy
A three-card service-tier grid where the recommended middle card inverts color from the flanking two — light-light-dark or dark-dark-light — so the middle reads as "the one we mean" without bigger size, accent borders, or a "RECOMMENDED" sash. The inversion alone carries the hierarchy, which travels across nearly every palette.

## What to take
- Three equal-width cards in a single row. Same height, same internal padding (~32px), same content order: tier name → tier descriptor → price → primary CTA → checkmark feature list.
- The middle card is the ONLY differentiation: invert its background and text against the two flanking cards. Nothing else changes — same corner radius (~16px), same button shape, same feature-row treatment.
- A single small "POPULAR" pill badge in the middle card's header is the only chrome — no glow, no scale-up, no offset.
- Below the cards, an optional plans-and-features comparison table with checkmark / × marks. Rows grouped by feature category. The same three column order as the cards above so the eye keeps the same mental map.
- Optional FAQ accordion below the table (one question per row, single-line answers visible after expansion). Use only if the service tiers have real billing / cancellation questions worth surfacing.

## What NOT to take
- Don't enlarge the middle card or push it up out of the row — the inversion is the emphasis. Scaling adds noise without adding clarity.
- Don't import the bright-blue "POPULAR" pill literally — pick a single accent that fits the archetype (ember orange in FORGE, brand-navy in CLEAN). It's the smallest piece of chrome on the page; it shouldn't fight the inversion.
- The flag-color "stripes-and-stars" motif of PATRIOT clashes with monochrome-inversion logic. If a PATRIOT dealer needs tier cards, use color-coded tier accents (red/white/blue rim per card) rather than this inversion pattern.
- Don't leave the comparison table off if you have more than ~5 features per tier — the cards alone will run too long. Either trim the in-card lists or commit to the table.

## Adaptation notes (cross-archetype)
- CLEAN: native fit. Two white cards flanking a brand-navy or charcoal middle. Single brand accent on the middle CTA.
- FIELD: cream-cream-amber (or cream-cream-deep-clay). Use a warm earthy inversion rather than black. Replace SaaS checkmark icons with a hand-drawn tick to keep the warm-photographic feel.
- TERRAIN: alternate this with the [alternating-stripes pattern](../../product-block/research/refero-4bcd783f-alternating-pastel-stripes.md) elsewhere on the page — the inverted middle card here echoes the dark-band rhythm of the section below.
- FORGE: dark-dark-darker, with the middle going to near-black and flanking cards a half-shade lighter. Single ember-orange CTA on the middle card. Skip the FAQ accordion — adds copy without adding gravitas.
- TACTICAL: use the inversion logic but tighten geometry — sharper corner radius (~6px instead of 16px), monochrome black/white only, precision-sans on prices. Add corner brackets on the middle card if the rest of the page uses them.

## Source brief
Endless — a SaaS subscription page (Free / Pro / Team). Surfaces because the structural pattern (three-card tier grid + inverted middle + comparison table + FAQ) is reusable for dealer service tiers (basic operator / standard fleet / full-managed compliance) without dragging the SaaS aesthetic along for the ride.

Sibling notes: see [centered-screenshot-trio](../../hero/research/refero-f619e700-centered-screenshot-trio.md) for the matching light-hero pattern that often precedes a tier grid.

Related: [CLEAN archetype](../../../archetypes/clean.md), [FORGE archetype](../../../archetypes/forge.md).
