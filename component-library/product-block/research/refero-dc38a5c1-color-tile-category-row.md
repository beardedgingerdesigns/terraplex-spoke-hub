---
referoScreenId: dc38a5c1-9d69-4962-94a2-093b5e54d3ed
referoUrl: https://refero.design/pages/dc38a5c1-9d69-4962-94a2-093b5e54d3ed
section: product-block
applicableArchetypes: [field, clean, terrain, patriot]
incompatibleArchetypes: [forge, tactical]
savedAt: 2026-05-02
savedFor: library-audit
tags: [color-tile-cards, category-row, cream-base, product-cutout, single-row-grid, breadth-at-a-glance]
---

## Why this is library-worthy
A product-block move that surfaces the entire product range in a single horizontal row of fully-saturated color-tile cards on a cream base — each tile is its own accent color, with a cutout product image, name, one-line descriptor, and price/link at the bottom. Variety travels through per-card color, not per-band stripe, so the page introduces breadth without committing to vertical alternating bands. Closes the [product-block × patriot](../../../archetypes/patriot.md) and [product-block × field](../../../archetypes/field.md) 1-only gaps with a structurally distinct alternative to the [alternating-pastel-stripes pattern](./refero-4bcd783f-alternating-pastel-stripes.md) — same archetypes, different page rhythm.

## What to take
- One full-bleed cream band (~#FAF7F0) holding a single section heading top-left ("The collections", or for a dealer "Our equipment", "What we sell"). Heading is bold sans-serif (~28–32px), no subhead — the cards explain themselves.
- Below the heading, a single horizontal row of 4 (or 3, never more than 4) equal-width product/category cards. Each card is a fully-tinted rounded rectangle (~20–24px corner radius, ~280–320px wide × ~400–440px tall on desktop) — card chrome IS the color block, no border, no shadow.
- Each card uses a DIFFERENT solid accent color. Source uses saturated blue / sage-green / teal / mustard-yellow; a dealer rotates through 4 archetype-aligned hues that share a saturation level so the row reads as a coordinated set rather than a rainbow.
- Card content stack (top→bottom, left-aligned, ~24–32px internal padding): bold one-word category title (white or near-white, ~24px), tiny one-line descriptor (~13px, white at ~85% opacity), then a generously-scaled cutout product image floated lower-center of the card (no environmental context, no shadow on backdrop — cutout sits on the card color), then a small "From [price]" or "View product" link in the bottom-left corner (~13px, white).
- Cutout product images are critical: every product photographed on a transparent background and dropped onto its tile color so each card reads as "the product, placed, in this color." A boxed product photo with its own background ruins the pattern.
- Optional anchor: between the cards-row and the next section, drop a small "View all" outline-pill CTA aligned right — purely informational, not the page's primary CTA.

## What NOT to take
- Don't import Dopper's literal saturated palette (cobalt blue, mustard yellow). The transferable move is "4 distinct accent colors at matched saturation," not those specific hues — for a dealer this becomes warm cream/amber/clay/sage (FIELD) or cream/navy/barn-red/cream (PATRIOT), not Dopper's cheerful e-commerce blue.
- Don't put 5+ cards in the row. The pattern relies on each card being scannable without horizontal scrolling; 5 cards collapse the cutout-product image to thumbnail size and the "breadth at a glance" affordance dies. If the dealer carries more than 4 SKUs, group them into 4 categories (drones / accessories / training / service) instead of one card per SKU.
- Don't combine this pattern with [alternating-pastel-stripes](./refero-4bcd783f-alternating-pastel-stripes.md) on the same page — both use color-as-variety, and stacking them reads as undifferentiated decoration. Pick one: this row is for "scan all our offerings"; alternating stripes is for "here's each capability in depth."
- Don't add a hover-flip, tilt, or animation on the cards. The cutout-on-color composition is the affordance; motion adds noise.
- Don't crop the cutout product image to fit the card. The cutout should overflow the card slightly at the bottom or right edge so it reads as object-on-color rather than thumbnail-in-frame. Source crops the bottle low so the cap pokes near the card edge.
- The cheerful-saturated card aesthetic conflicts with FORGE/TACTICAL's dark-dominant requirement. For dark archetypes the equivalent move (one focal product per band, dark surface) is the [dark feature bands product-block](./refero-eb12db31-dark-feature-bands.md) — don't try to invert this pattern to all-black tiles, the affordance doesn't survive the inversion.

## Adaptation notes (cross-archetype)
- FIELD: cream base (~#FAF5EC), 4 tiles in warm cream/amber/clay/sage rotation at matched ~70% saturation. Cutouts are warm-lit equipment shots (drone, controller, spreader add-on, accessories pack) photographed on white and dropped onto each tile color. Card title in cream/off-white. "View product" link in deeper amber. See [FIELD archetype](../../../archetypes/field.md).
- CLEAN: white or gray-50 base, 4 tiles in brand-tinted neutrals (navy, slate, teal, charcoal) — saturation kept low so the row reads corporate-precise rather than playful. Card title in white, link in lighter brand accent. See [CLEAN archetype](../../../archetypes/clean.md).
- TERRAIN: this slots in as a "light band" composition between two darker bands. Each tile uses a different topographic-derived hue (cream / clay / dusty sage / charcoal) at matched saturation. The row's bottom edge can carry a thin topographic divider line as the section break. See [TERRAIN archetype](../../../archetypes/terrain.md).
- PATRIOT: cream base, 4 tiles rotating cream / navy / barn-red / cream — three colors, not four, with the cream tile in position 1 and 4 acting as visual bookends. Card title on the cream tiles is deep-navy (so the cream tile retains the same readability move as the dark tiles). Cutouts of equipment photographed in late-afternoon light. The flag colors are present but at micro-scale per card, never as stripes or stars layered on top — chrome restraint is the same as in [manifesto-creed-hero](../../hero/research/refero-b86571f2-manifesto-creed-hero.md). See [PATRIOT archetype](../../../archetypes/patriot.md).
- FORGE / TACTICAL: skip — the saturated cheerful tile aesthetic conflicts with dark-dominant. Use [dark feature bands](./refero-eb12db31-dark-feature-bands.md) for the equivalent product-block treatment.

## Source brief
Dopper's homepage — a sustainable water-bottle brand with a 4-up "Collections" row directly under the hero (Insulated / Steel / Original / Accessories). The library-worthy move is the structural pattern (cream base + 4 single-color category-card row + cutout product images + per-tile color rotation), reusable for a Terraplex dealer surfacing the [R-32](../../../products/r-32.md) / [I-19](../../../products/i-19.md) / accessories / service-bundles range without committing to alternating bands or a dense grid.

Sibling notes: [alternating-pastel-stripes](./refero-4bcd783f-alternating-pastel-stripes.md) for the vertical-band rhythm alternative when each capability deserves a full-bleed feature; [dark feature bands](./refero-eb12db31-dark-feature-bands.md) for the dark-archetype counterpart. Pairs naturally with the [centered-screenshot-trio hero](../../hero/research/refero-f619e700-centered-screenshot-trio.md) above (light-hero with breadth) and the [photo-mosaic services](../../services/research/refero-2fdf9ace-photo-mosaic-services.md) below (light-band services overview).

Related: [products/r-32.md](../../../products/r-32.md), [products/i-19.md](../../../products/i-19.md).
