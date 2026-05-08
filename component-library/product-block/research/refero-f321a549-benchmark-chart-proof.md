---
referoScreenId: f321a549-a16b-4f14-831b-13e55f8fa8cb
referoUrl: https://refero.design/pages/f321a549-a16b-4f14-831b-13e55f8fa8cb
section: product-block
applicableArchetypes: [tactical, clean, terrain, forge]
incompatibleArchetypes: [field, patriot]
savedAt: 2026-05-08
savedFor: library-audit
tags: [chart-as-proof, scatter-plot, benchmark, evidence-based, axis-labels, methodology-callout, defensible-claim, quantitative-product-block]
---

## Why this is library-worthy
A product-block where the central credibility move is a **labeled performance chart** — typically a scatter plot or 2-axis grid plotting the product's measurable advantage against named competitors, with a paragraph-length methodology callout to the right. Nothing else in the library proves the product through a quantitative chart: [head-to-head-comparison](./refero-a1142f19-head-to-head-comparison.md) and [spec-comparison-grid](./refero-713b66c0-spec-comparison-grid.md) prove through tabular comparison; [spec-sheet-product-block](./refero-27715bc5-spec-sheet-product-block.md) proves through documentation. This pattern is the right pick when the dealer can defend a measurable claim ("Y% more acres/hour at $X/acre", "Z% fewer compliance violations across N customers") and wants the chart to be the page's main argument. Forge/tactical-leaning by default; closes a sparse-archetype gap in the [product-block section](../../README.md).

## What to take
- One framing line above the chart in the form `<superlative claim> at <comparison axis>` (e.g. "Highest accuracy at every price point") on the left, with a smaller subline naming the benchmark below it ("State of the art across several benchmarks"). Both align flush-left over the chart's left edge — no centering, the chart inherits the alignment.
- The chart panel itself is a **contained grid card** with hairline rules forming a faint dot/grid background (not a full-bleed band). Both axes labeled in small all-caps gray (`ACCURACY (Y)` / `COST LEVEL (X)` is the prototypical pair for ag — substitute `ACRES/HOUR` × `$/ACRE`, `THROUGHPUT` × `OPERATING COST`, `COVERAGE-UNIFORMITY` × `PASS-COUNT`). Axis ticks are minimal — no numeric scale needed if the dealer's claim is relative.
- **Highlight one data point in the brand accent color**; all other competitor points stay in neutral charcoal/gray with small text labels (named, not numbered). The single accent point is the move — readers see the win before reading.
- Right-rail methodology callout (~30% of width) with three or four short paragraphs: data-source, methodology, evaluation cohort, exclusions. Use a smaller body size and a slightly muted color so it reads as supporting evidence rather than competing for attention with the chart. End with a hyperlinked "[benchmark]" or "[methodology]" deep-link if there's a real document behind the claim.
- Below the chart, a thin tab strip with 3–5 alternate benchmark labels (e.g. `WLB-Search / BrowseComp-Search / BrowseComp / DeeperResearch-Bench / HLE-General`) lets the reader switch axes without leaving the page; default tab is the strongest claim. Each tab swaps both the chart's data points and the right-rail methodology paragraph.
- A small legend pill below the chart names the highlighted dot ("Parallel") and "Others" — keeps the cognitive load low, no fishing for which dot is whose.
- **Stop the band before saturation.** A single chart panel + headline + methodology sub-paragraph + tab strip is the whole pattern. Don't add a CTA inside the band; the next page section handles that. Resist filling the right rail with multiple charts.

## What NOT to take
- Don't drop in an axes-and-numbers chart on a FIELD page — FIELD's [archetype rules](../../../archetypes/field.md) prefer organic photography and warm material registers over data-grid surfaces. A single quantitative claim band would feel grafted on.
- Don't take this for PATRIOT either — the chart-as-proof register reads cold/technical and clashes with [PATRIOT's](../../../archetypes/patriot.md) flag-graphics-and-stripes vocabulary.
- Don't use the pattern when the dealer can't defend the data behind the chart with a real benchmark, named cohort, or third-party source. The pattern's credibility comes entirely from the methodology callout — without that, it reads as marketing-deck filler.
- Don't put the chart full-bleed across the page — the contained grid card is the move; full-bleed makes the chart feel like a hero, not a proof element.
- Don't add a CTA inside the chart panel. Buyers should leave the band quietly impressed; the conversion happens elsewhere.

## Adaptation notes (cross-archetype)
- **TACTICAL**: pure-black band, brand-yellow accent point, monospace axis labels, hairline grid in `#1a1a1a`. The chart card itself can be subtle dark-on-dark with a 1px stroke.
- **CLEAN**: white card on `gray-50` band, brand-blue accent point, `Inter`-style sans labels, hairline grid in `gray-200`. Native fit — the Refero source itself is clean-archetype.
- **TERRAIN**: the contour-line motif from [topographic-layered-bg](../../hero/research/refero-ae84b62a-topographic-layered-bg.md) translates well as the chart's grid backdrop — light contour-derived rules instead of square dots.
- **FORGE**: dark band, ember-orange accent point, glow halo on the highlighted dot, dark-grid hairlines. Pair with [dark-feature-bands](./refero-eb12db31-dark-feature-bands.md) above for cohesive dark-archetype rhythm.

## Source brief
Parallel.ai's web-search-API landing page. Core argument is "highest accuracy at every price point" — the chart plots Parallel's product against competing AI search APIs across multiple benchmarks. The methodology callout cites a published evaluation, named the benchmark cohort, and links to the long-form report. The pattern is genuinely transferable to any dealer making a quantitative claim about GTEEX-vs-competitor performance, fleet operating economics, or compliance-track-record.
