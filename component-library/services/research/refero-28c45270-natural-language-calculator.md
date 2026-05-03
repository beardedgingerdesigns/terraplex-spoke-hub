---
referoScreenId: 28c45270-339b-4ce8-adc4-db44e5eba0d3
referoUrl: https://refero.design/pages/28c45270-339b-4ce8-adc4-db44e5eba0d3
section: services
applicableArchetypes: [field, clean, terrain, patriot, forge, tactical]
savedAt: 2026-05-03
savedFor: library-audit
tags: [natural-language-form, sentence-shaped-input, fill-in-the-blank, calculator-hero, conversational-form, single-screen-tool]
---

## Why this is library-worthy
A calculator that lives inside a *sentence* — "I want to hire a [position] in [country] with a salary of [currency] [amount]" with each bracketed span being an editable inline-link dropdown — instead of a stack of labeled form fields. Reframes a quote/cost-estimate tool as a written request, which is a structurally distinct alternative to the existing card-and-radio-button [maintenance-program-recommender](./refero-d928f889-maintenance-program-recommender.md) and the right interaction model for dealers whose customers are ranchers and farmers, not B2B procurement.

## What to take
- Single saturated brand-color hero band that fills the upper viewport. No photo, no gradient — just one solid color with the calculator centered.
- Above the sentence: a 1-line page title ("Employee Cost Calculator" → "Spray Cost Calculator" / "Maintenance Quote Calculator"), serif-or-grotesque, centered, white-on-saturated.
- Sentence laid out as flowing centered text on 3 lines, each editable span styled as an underlined link with a small pencil-edit icon, the link text colored differently (e.g. amber on orange) so the editable spans visually pop. Each span tap-opens a dropdown / typeable input inline.
- One pill CTA centered below the sentence ("Calculate" / "Get my quote") in a contrast color (white or cream on saturated). One small reset link to the right.
- One incidental decorative element (Deel uses a paper-airplane folded from a map) anchored to a corner — supplies vibe without competing with the sentence.
- Below the saturated hero band: a centered headline + 1-paragraph explanation on a white band ("[Service] anywhere in [region], hassle-free. We handle local rules, taxes, paperwork — fill out the calculator above for a detailed breakdown.").
- Then a deep-saturated band with: short closer headline + one outline CTA + a 4-up stat row ("150+ Countries / 8,000+ Customers / 200+ Legal experts / 120+ Currencies"). Stats validate the calculator's claim of comprehensive coverage.

## What NOT to take
- Don't add more than 4 editable spans in the sentence — beyond 4, the sentence stops scanning as English and starts feeling like a Mad Libs game.
- Don't show the calculation result inline on the same hero — the sentence is the input, the *result* lives below the fold or on a follow-up page. Keeping the hero as input-only preserves the conversational frame.
- Don't show a labeled-form fallback — if the sentence-input is the only form on the page, the dealer has to commit to it. Adding "or fill out our standard form" cancels the design move.
- Don't drop the saturated-color band. The sentence-shaped form depends on the saturated backdrop to read as a deliberate composition; on a white background it looks like a prototype.

## Adaptation notes (cross-archetype)
- FIELD: amber or terracotta saturated band, cream sentence text, charcoal CTA-fill cream-text, terracotta editable spans. See [FIELD archetype](../../../archetypes/field.md).
- CLEAN: brand-color saturated band, white sentence text, white-fill brand-text CTA. The most native fit — CLEAN's saturated-band-with-restrained-chrome is exactly this pattern.
- TERRAIN: charcoal saturated band, cream sentence text, contour-line decorative element instead of paper-airplane (a hand-drawn topo curve anchored to a corner). See [TERRAIN archetype](../../../archetypes/terrain.md).
- PATRIOT: deep navy saturated band, cream sentence text, barn-red editable spans, cream-fill navy-text CTA. The decorative corner element is a single small star or shield, not a flag. See [PATRIOT archetype](../../../archetypes/patriot.md).
- FORGE: near-black saturated band with subtle ember glow at edges, white sentence text, ember editable spans, ember-fill white-text CTA. Decorative element is an ember spark or glow blob.
- TACTICAL: pure black saturated band, white sentence text, white editable spans (subtle), white-fill black-text CTA. Decorative element is a single corner-bracket, not an illustration. See [TACTICAL archetype](../../../archetypes/tactical.md).
- The maintenance-program-recommender ([d928f889](./refero-d928f889-maintenance-program-recommender.md)) is the *card-and-radio-button* version of the same use case (interactive cost/tier estimator). Pick the natural-language calculator when the dealer's customers are casual / non-technical (farmers, ranchers); pick the recommender when the customers are operations buyers comparing tier matrices. Don't ship both on the same page — they overlap functionally.

## Source brief
Deel's `/employee-cost-calculator` — Deel needs to capture leads for international payroll, where the cost question is highly contextual (country + role + salary) and a multi-field form would feel bureaucratic. The sentence-shaped form converts the calculator into a request, which is the right tone for a transactional sale. For a Terraplex dealer offering spray-by-the-acre or maintenance-by-the-flight-hour, the same shape works: "I want [N] acres of [crop] sprayed in [zip code]" → quote.
