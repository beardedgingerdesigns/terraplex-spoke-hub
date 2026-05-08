---
referoScreenId: 29ece5fd-5151-408a-993b-827dbeff0f19
referoUrl: https://refero.design/pages/29ece5fd-5151-408a-993b-827dbeff0f19
section: services
applicableArchetypes: [clean, terrain, field, forge, tactical, patriot]
savedAt: 2026-05-08
savedFor: library-audit
tags: [roi-calculator, projection-output, single-big-number, two-column-input-output, methodology-disclaimer, value-justification, financial-justification]
---

## Why this is library-worthy
A two-column ROI projection page where the left half captures the buyer's current operating profile (4–5 quantitative inputs: industry/segment, scale, current volumes) and the right half **projects the dealer's product impact as deltas + one massive single-number ROI tile in the brand accent color**. Methodology disclaimer in fine print at the bottom. Different from the existing services calculators: [natural-language-calculator](./refero-28c45270-natural-language-calculator.md) is a sentence-shaped quote calculator (acres × crop × zip → price), and [maintenance-program-recommender](./refero-d928f889-maintenance-program-recommender.md) routes to a service-tier card. This one is the **financial-justification** flavor — buyers leave with a defensible number to take to their CFO/owner. Right pick for commercial fleet operators, Part 137 service businesses, and value-conscious owners deciding whether to convert from ground rigs.

## What to take
- Center the page on a single bold heading in 1–3 words ("Check your ROI" / "Estimate your spray ROI"). No subhead — the heading + the form labels do the work.
- Two-column body inside one large outlined card panel:
  - **Left column** ("Tell us where you are today"): industry/operation-type dropdown (`Row crop / Specialty crop / Custom-applicator / Fleet operator / Other`) + 3–5 numeric text inputs with single-line labels above each (`Number of operators`, `Annual acres treated`, `Annual ground-rig hours`, `Annual labor cost`). Inputs are spacious, default-filled with median values so the page never reads as empty. A short disclaimer line under the heading: "All fields required to get report card."
  - **Right column** ("This is what your <product/service> could look like tomorrow"): 3–5 line-item delta percentages stacked in a 2×2 or 2×3 grid (each: oversized colored percent + 1-line metric label below). Critically, **deltas can be negative-as-good** for cost metrics (`-7.3%` → "Cost per acre"). Then ONE massive saturated brand-color tile, bottom-right of the column, with a single oversized number + "Projected ROI" / "Projected savings" label. The accent-tile placement makes the page's whole argument readable in 2 seconds.
- Below the card, methodology disclaimer in muted small caps: "The above estimates are based on [benchmark source]. <X> are calculations based on [assumed comparison]. Of course, your performance may differ." Plus a footnote-style asterisk note flagging anything not covered. **The methodology paragraph is load-bearing** — without it the projection reads as marketing.
- **Vertical wordmark on the page's left margin** ("CX Accelerator" in the source; for Terraplex think "Spray ROI Calculator" / "Fleet Economics Tool" / "Part 137 Worksheet") — a small vertical sidebar identity that ties the calculator into a named program rather than an anonymous form.
- Inputs auto-recompute the right column on change (no submit button), so the buyer can spin the wheels until the ROI tile shows a number they believe.
- One quiet "Talk to a rep" / "Save report card" link sits below the card, NOT a primary button. The pattern is "give the buyer a defensible number, then let them come to you" — a hard CTA fights the page's restraint.

## What NOT to take
- Don't add chrome to the calculator (gradient backgrounds, illustrations, animated counters on the ROI tile). The pattern's credibility is the **stark restraint** — outlined card + flat percentages + one accent tile. Decoration reads as overselling.
- Don't omit the methodology disclaimer to make the page tidier. Every projected percentage needs to be traceable to a benchmark, customer cohort, or third-party study; without that, the calculator becomes a spec-sheet pretending to be a savings claim.
- Don't add a hard "Buy now" / "Schedule consultation" CTA inside the card — the calculator earns trust by NOT closing aggressively. The buyer screenshots the ROI tile and brings it to their decision-maker; that's the conversion.
- Don't use this for casual / discretionary purchases (single-acre hobby farmers, walk-in inquiries). The pattern serves buyers who need to defend a capital decision. For lower-stakes inquiries, the [natural-language-calculator](./refero-28c45270-natural-language-calculator.md) (sentence-shaped, conversational) or [maintenance-program-recommender](./refero-d928f889-maintenance-program-recommender.md) is the right pick.

## Adaptation notes (cross-archetype)
- **CLEAN**: white card on gray-50 band, brand-color ROI tile, `Inter`-style sans, hairline strokes. Native fit — the Refero source is clean-archetype with a green ROI tile.
- **FIELD**: cream card on warm-amber band, swap the brand-green accent tile for a deep-amber or ember tile, keep the typography flat. The financial-justification framing pairs naturally with FIELD's "earn-the-trust-then-let-them-come" register — pair upstream with [hands-on-craft-hero](../../hero/research/refero-be842c1e-hands-on-craft-hero.md) for the same restraint.
- **TERRAIN**: alternating-band base with the calculator card on a tonal-shift band; ROI tile in the contour-line accent. Methodology disclaimer in the contour-band footnote register.
- **FORGE**: dark band, ember-orange ROI tile with a faint glow, monospace digits in the percent deltas. Pair with [dark-industry-vertical](./refero-74b10c78-dark-industry-vertical.md) above for forge-native services rhythm.
- **TACTICAL**: pure-black band, brand-yellow ROI tile, monospace numerics throughout, 1px stroke on the card. The methodology callout reads especially well in TACTICAL's documentation register.
- **PATRIOT**: cream card on flag-stripe band, red-or-blue ROI tile, retain the flat data presentation — don't chrome it with stars/stripes inside the card itself.

## Source brief
Zendesk's "CX Accelerator" ROI calculator — captures industry + agent count + call/chat/email volumes on the left, projects 4 metric deltas + a single oversized percent ROI tile on the right, all anchored by a methodology disclaimer citing Zendesk Benchmark customer data. Terraplex translation is a "Spray Economics Worksheet" or "Fleet ROI Calculator" giving Part 137 operators a defensible number to bring to a banker or owner — with the methodology citation pointing to real Terraplex-network benchmark data once the [49-location dealer network](../../../research/manufacturers/terraplex.md) accumulates enough operating data.
