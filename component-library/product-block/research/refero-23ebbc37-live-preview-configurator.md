---
referoScreenId: 23ebbc37-37f2-40ef-b384-01c38b2429e8
referoUrl: https://refero.design/pages/23ebbc37-37f2-40ef-b384-01c38b2429e8
section: product-block
applicableArchetypes: [clean, tactical, terrain, field, patriot, forge]
savedAt: 2026-05-03
savedFor: library-audit
tags: [configurator, build-your-own, live-preview-canvas, dimensional-callouts, right-rail-options, interactive-product-page, modular-product]
---

## Why this is library-worthy
A live-preview product configurator: large center canvas with the product render + CAD-style dimensional callouts updating in real time, paired with a right-rail of swatches + module-cards + add-on tiles. The first product-block pattern in the library where the product itself is *interactive* — not a static photo, render, or comparison table. Right pick for a dealer whose drone product is genuinely modular (R-32 base + tank size + payload + battery count + accessories) and where the customer's question is "what should I build" rather than "which model should I pick."

## What to take
- Page title + 2-line prose description above the canvas — sets context but stays brief; the canvas is the content.
- Live-preview canvas (left ~70% of width on desktop): white/cream background, large product render centered, low-contrast hairline dimensional callouts (width / depth / height) that update as the customer reconfigures. Subtle "Cover only" toggle in the upper-left of the canvas to strip back to wireframe view (helpful for technical buyers).
- Bottom-of-canvas chrome: 3 small action icons (edit / capture / save), running total price + family-pricing differential ("$X member price / $Y regular"), and one prominent pill CTA ("Summary" / "Build summary") — keeps the canvas's tools tight and contained.
- Right-rail (~30% of width): vertical stack of configuration sections separated by hairline rules:
  - Top section: color/cover swatches in a 5-up + "+N more" row, each tapping to switch the canvas in real time
  - Middle section: a single chevron-row picker for binary or short-list options (e.g. armrest style: Regular / Wide / None)
  - Bottom section: a 2x3 (or 2xN) grid of module-thumbnail cards — each shows a small render of the part, a label ("3-seat section" → "Spray tank — 30L"), and tap-to-toggle add/remove. Selected modules show a checkmark or filled icon.
- Disabled/unavailable modules render at half-opacity with a small "out of stock" or "incompatible with current build" badge — never hidden, always visible so the customer sees what's *not* possible.
- The page is a single screen — no scroll-to-the-end "buy now" section. The Summary CTA leads to a dedicated cart/quote screen.

## What NOT to take
- Don't lose the dimensional callouts when the customer reconfigures — recompute them. Static dimensions on a moving render makes the canvas feel like a marketing render, not a configurator.
- Don't add hero photography or lifestyle context inside the canvas — the configurator's job is technical-decision support, and lifestyle imagery undermines the precision frame.
- Don't ship this if the dealer's actual product configurations are <3 dimensions of choice. With only "pick R-32 or I-19," the [head-to-head-comparison](./refero-a1142f19-head-to-head-comparison.md) is structurally tighter. Configurator earns its keep at ≥3 axes of choice (model × tank × payload × battery × accessory bundle).
- Don't combine this pattern with the [spec-sheet product-block](./refero-27715bc5-spec-sheet-product-block.md) on the same page. The configurator's job is "design the build"; the spec sheet's job is "validate a fixed build." They live on different pages — the Summary CTA leads to a spec-sheet view of the configured result.
- Don't ship without a "save build" or "shareable build link" affordance — modular configurators where the customer can't preserve their work convert poorly. The capture/save icon in the canvas chrome is mandatory, not optional.

## Adaptation notes (cross-archetype)
- CLEAN: native fit — white canvas, neutral grey type, brand-accent CTA + selected-module checkmarks. The IKEA original is essentially a CLEAN treatment.
- TACTICAL: pure white canvas with single hairline corner-bracket frame around the canvas, charcoal type, dimensional callouts in pure black. Selected modules show filled square corner-marks instead of checkmarks. Right-rail dividers are crisp 1px black lines. See [TACTICAL archetype](../../../archetypes/tactical.md).
- FIELD: cream canvas, warm-amber dimensional callouts and selected-module ticks, charcoal type. Right-rail swatch chips have warm-amber border-rings when selected. See [FIELD archetype](../../../archetypes/field.md).
- TERRAIN: cream canvas with a very subtle topo-line grid underlay (replaces white pure-canvas), dimensional callouts as hand-drawn-style topo lines, charcoal type. Right-rail dividers as contour curves rather than straight rules. See [TERRAIN archetype](../../../archetypes/terrain.md).
- PATRIOT: cream canvas, deep navy dimensional callouts, deep navy type. Selected-module check-marks alternate navy/barn-red (kept at icon scale). Right-rail "Add" CTAs in navy-fill cream-text. See [PATRIOT archetype](../../../archetypes/patriot.md).
- FORGE: invert — near-black canvas, ember-glow dimensional callouts and selected-module ticks, white type. The ember accent on the live-preview makes each selection feel like a forge-glow validation. See [FORGE archetype](../../../archetypes/forge.md).
- For dealers showing the *result* of a configurator (the spec-sheet view of a finalized build), pair this configurator with the [spec-sheet product-block](./refero-27715bc5-spec-sheet-product-block.md) — Summary CTA leads to spec-sheet view. For dealers showing customers a curated set of pre-configured builds rather than full open-ended configuration, the [head-to-head-comparison](./refero-a1142f19-head-to-head-comparison.md) is the right tool — open configuration is the wrong fit when the dealer is opinionated about which builds to recommend.

## Source brief
IKEA's `/planners/vimle-planner` — IKEA's modular sofa configurator where the customer composes a sofa from interchangeable seat/storage/headrest modules. Same shape works for a [GTEEX R-32](../../../products/r-32.md) build configurator (frame + tank size + payload + battery count + landing gear + parts kit) where the dealer needs to support the "what should I build for my operation" purchase journey rather than "which model do I pick."
