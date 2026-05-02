---
referoScreenId: eb12db31-8a73-45af-ba6a-569660b5e075
referoUrl: https://refero.design/pages/eb12db31-8a73-45af-ba6a-569660b5e075
section: product-block
applicableArchetypes: [forge, tactical, terrain]
incompatibleArchetypes: [field, patriot]
savedAt: 2026-05-02
savedFor: library-audit
tags: [dark-feature-bands, full-bleed-black, centered-headline, product-render, perks-grid, monochrome-cards]
---

## Why this is library-worthy
A dark-dominant product-block pattern that gives every feature its own full-bleed all-black band: short centered all-caps headline → one focal product render or lifestyle photo → optional short body + pill CTA. Section breaks are vertical white space alone — no rules, no gradients, no neutral spacers. Solves the long-standing gap of how to show 6–10 product capabilities on a dark archetype without falling back to a single dense feature grid. Counterpart to the [alternating-pastel-stripes pattern](./refero-4bcd783f-alternating-pastel-stripes.md) for light archetypes.

## What to take
- Each feature lives in its own full-bleed black band (~80–120px vertical padding above and below). The black is the spacer; no `<hr>`, no gradient transitions, no neutral break sections.
- Headline pattern is identical across bands: short all-caps statement (3–6 words) centered, white type, heavy sans-serif at ~28–36px ("UNLIMITED LOUNGE ACCESS", "EARN UP TO 4.75% AER"). Subhead is one or two centered lines in muted gray (~#BDBDBD), 14–16px.
- Each band has exactly ONE focal visual: a hero-style product render, a lifestyle photo with cinematic lighting, or a stylized device shot. The visual carries the band — no secondary illustrations, no icon clutter. Some bands center the visual; others go side-by-side text-left / image-right. Alternate the layout every 2–3 bands so the page has rhythm without drift.
- Mid-page, break the cadence with a "perks grid" — 4-column dark cards on the same black background, each card showing a brand logo / icon at top, label in white below, sub-label in muted gray. Cards have a 1px inner border in a near-black gray (~#1F1F1F) so they read as cards without competing with the band photos. Used for partner perks, feature lists, or supporting capabilities.
- Single CTA pattern: white pill button (~36–40px tall, white background, black label). Use it sparingly — only on the bands that genuinely warrant a click ("Get started", "Join Ultra"). Most bands have NO CTA; the dark cadence does the work.
- End the page with a multi-tier plan-comparison block: 4–5 stacked dark cards in a horizontal row, each with tier name → price → bullet feature list. The tiers themselves are the closing CTA; no separate "ready to buy?" banner.

## What NOT to take
- Don't import the literal high-saturation lifestyle photos (luxury cards, headphones, lounges). The transferable move is "one hero-style focal image per band, cinematically lit." For a Terraplex dealer this is drone hardware on a dark backdrop, an operator-at-controller shot with rim lighting, or an aerial spray-pattern photo at dusk.
- Don't add a CTA to every band. The pattern's restraint depends on the dark cadence — multiple CTAs per scroll fight the rhythm and turn the page into a sales loop.
- Don't soften the all-black background to charcoal across the page hoping it'll feel less heavy. The all-black IS the affordance; if it feels too heavy, the dark archetype isn't the right archetype — pick the alternating-pastel-stripes pattern instead.
- The cheerful luxury-finance positioning ("platinum-plated card", "lifestyle benefits") is brand-specific. Don't import the copy register; do import the headline-then-photo cadence.
- FIELD's warm-photographic, no-motion, cream-palette rules conflict directly with all-black bands. PATRIOT's flag-color motifs and cream-default backgrounds also conflict — for those archetypes use the [alternating-pastel-stripes pattern](./refero-4bcd783f-alternating-pastel-stripes.md) which is light-band-native.

## Adaptation notes (cross-archetype)
- FORGE: native fit. Push the focal photos toward ember-warm rim lighting (sunrise / dusk / forge-glow). Single ember-orange accent shows up only on the perks-grid icons or the plan-comparison "recommended" tier — everywhere else stays monochrome white-on-black. Pair with the [three-tier inverted-middle services pattern](../../services/research/refero-15fcbffc-three-tier-inverted-middle.md) where the inversion goes dark-dark-darker.
- TACTICAL: native fit with tighter geometry. Drop pill CTAs to sharper rectangles (~6px corner radius), use precision-sans for headlines (no decorative weight variation), and add corner brackets to the perks-grid cards. Lifestyle photos give way to studio-shot product renders on seamless black — no environmental context, just hardware. Single cyan or steel accent on the CTA only.
- TERRAIN: works as the "dark band" half of the alternating rhythm. Pair every 2–3 dark feature bands with a single cream-or-clay light band carrying a topographic divider, then return to dark. The dark-band feature pattern itself is exactly this note; the light-band counterpart is the [alternating-pastel-stripes pattern](./refero-4bcd783f-alternating-pastel-stripes.md) restricted to a single light insert.
- FIELD / PATRIOT: skip — this is dark-dominant by definition. See the alternating-pastel-stripes note for the light-archetype product-block.

## Source brief
Revolut's "/ultra-plan/" landing page — a premium-tier financial subscription product. The library-worthy move is the structural cadence (full-bleed black band per feature, centered headline, single focal image, no spacers, no per-band CTAs) — reusable for a Terraplex dealer showing 6–10 [R-32 capabilities](../../../products/r-32.md) or [I-19 capabilities](../../../products/i-19.md) on a [FORGE](../../../archetypes/forge.md) or [TACTICAL](../../../archetypes/tactical.md) site without dragging luxury-finance copy along for the ride.

Related: [FORGE archetype](../../../archetypes/forge.md), [TACTICAL archetype](../../../archetypes/tactical.md). Light-archetype counterpart: [alternating-pastel-stripes](./refero-4bcd783f-alternating-pastel-stripes.md).
