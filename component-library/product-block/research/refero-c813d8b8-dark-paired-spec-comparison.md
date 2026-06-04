---
referoScreenId: c813d8b8-a8d4-491b-a2f3-1f16205a4ed1
referoUrl: https://refero.design/pages/c813d8b8-a8d4-491b-a2f3-1f16205a4ed1
section: product-block
applicableArchetypes: [forge, tactical, clean, terrain]
incompatibleArchetypes: [field, patriot]
savedAt: 2026-05-01
savedFor: iron-ridge-aerial
tags: [paired-comparison, spec-rows, dark-mode, category-labels, due-diligence]
---

## Why this is library-worthy
A two-column paired-product spec comparison page where category labels run down a left rail and each spec category opens onto two value cells aligned horizontally — so the eye can compare like-for-like on every dimension without scrolling sideways. Identical product photography at the top (same orientation, same lighting, same shadow length on both units) is what sells the equivalence; once one photo drifts, the page reads as upsell instead of due-diligence. Directly applicable to any dealer pitching two SKUs side-by-side (R-32 vs I-19, light-payload vs heavy-payload tractors, residential vs commercial inverters).

## What to take
- Three-column grid: narrow left rail of category labels (Finish, Capacity, Size and Weight, Display, Chip, Camera, Video, Battery, Connectivity), then two equal-width spec columns for the two products. Category label sits in the same row as the first line of its block, top-aligned.
- Identical product photo at the top of each column: same lens distance, same lighting setup, same backdrop, same product orientation. The two units differ only by silhouette and label.
- Within each spec category, value text wraps as a short paragraph or stacked bullet list — NOT a flat single-line cell. Lets each value carry the unit and a 5–10 word qualifier ("48MP main, 24mm, ƒ/1.78 aperture") instead of a stripped number.
- Category labels are display-sans (heavier weight than body), product spec values are body sans (lighter weight). The weight inversion makes the left rail scannable without bolding every value.
- Hairline horizontal rule between every spec category — 1px, --ink-foundry-equivalent. No vertical rules between the two product columns; the column gap alone separates them.
- Numeric values use tabular-nums + monospace so decimals and units line up between the two columns. Critical for the "compare on weight, range, payload" read.
- Tabbed selector at the very top to swap the second product (compare Pro vs Pro Max, swap to compare Pro vs base) — useful when a dealer has 3+ SKUs and wants the same skeleton to handle multiple pairings.

## What NOT to take
- Apple's literal copy density (every spec listed) is appropriate for a $1500 phone purchase. For a $40K+ dealer drone, trim to the 8–12 specs that actually drive a self-selection decision (payload, tank, swath, flight time, charge time, autonomy class, support tier) — don't import the kitchen-sink list verbatim.
- The pure-black (#000) ground is fine for Apple's brand; FORGE/TACTICAL should soften to stone-950 / #0B0B0C to avoid the harsh-on-monitor read on a B2B landing where users dwell.
- Don't import the iOS-specific category names (Face ID, MagSafe, Apple Card). Categories must be re-authored from the dealer's actual spec sheet — the structure travels, the labels don't.
- FIELD's warm-cream paper aesthetic doesn't carry this much spec density without feeling clinical against the rest of the page. If FIELD needs paired comparison, use 2–3 hero specs per product in a short side-by-side card pair, not the full category-rail structure.
- PATRIOT's flag-stripe rhythm collides with the clinical hairline-rule grid; the comparison block would either dominate the page or get drowned by the surrounding stripes.

## Adaptation notes (cross-archetype)
- FORGE: invert to dark ground (#0B0B0C) with white-90 spec text and a single accent (crimson, ember) on the category labels OR on a single "Tucker's pick" rosette in the column header — never both. Photographs of the two drones lit with identical warm-tungsten rim light.
- TACTICAL: tighten to monospace-only values, add corner-bracket frames around each product photo, drop the photo and replace with technical line-drawing if the dealer has CAD. Use sharper hairline rules (0.5px) and a strict 8-unit baseline grid.
- CLEAN: white ground, charcoal text, single brand-accent on category labels. Photos shot on white seamless. Add a small "differs in" badge on the rows where the two products diverge — helps a buyer skip past the parity rows.
- TERRAIN: place the comparison block on the "light band" of the alternating cadence; the dense spec rail itself becomes a topographic-stripe element between the dark hero and the dark services band.

## Source brief
Apple's iPhone 14 Pro vs iPhone 14 Pro Max spec comparison page. Standard CPG-spec-compare pattern at maximal polish. The library-worthy artifact is the three-column structure (label rail + two value columns) plus the identical-photo-treatment rule, not Apple's specific category vocabulary or copy density.
