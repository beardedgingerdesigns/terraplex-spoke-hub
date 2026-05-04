---
referoScreenId: 56a7035b-3eaa-4c97-9dcc-69dfaa9de7bb
referoUrl: https://refero.design/pages/56a7035b-3eaa-4c97-9dcc-69dfaa9de7bb
section: contact
applicableArchetypes: [forge, tactical, terrain, clean, field, patriot]
savedAt: 2026-05-03
savedFor: library-audit
tags: [emergency-support, triage-chips, urgent-cta, dark-cinematic, single-cta-no-form, issue-router]
---

## Why this is library-worthy
A dedicated emergency-support contact that pre-classifies the visitor's issue with 3 chip-style triage buttons (Site Down / Site Broken / Can't Publish) and routes to a single saturated "Start Investigation" CTA — no form, no phone number, no FAQ. The page IS the triage. For a Terraplex dealer with high-stakes operational support — drone went down mid-spray, FAA airspace incident, Part 137 paperwork urgent — this is the right shape: classify the urgency, then escalate, no form-friction.

## What to take
- Dedicated `/emergency` (or `/urgent-support`) subpath, not blended into the main `/contact`. This is a separate page, not a section.
- Dark cinematic hero band fills the upper viewport — no header chrome other than the global nav. Background: dark navy with a subtle starfield + a curved horizon-glow at the bottom (suggests "earth from space" → urgency-at-scale tone). The decorative astronomy is optional; it's the dark-void register that matters.
- Massive centered headline ("Emergency Support" / "Urgent Operations Support"), serif-or-grotesque, ~96-120px on desktop, white-on-dark.
- 2-line centered subhead under the headline asking the diagnostic question ("Is your site down, broken, or can't publish?" → "Drone down? Spray-day weather change? Compliance blocker?").
- 3 small pill-style triage chips with a single icon + 2-3 word label — these are mutually-exclusive issue-classifiers, not multi-select. When clicked, they don't expand inline; they pre-populate the route taken by the CTA below.
- One MASSIVE saturated CTA below the chips (much bigger than a normal button — ~60% of the page width on mobile, glow-edge). The label is action-shaped ("Start Investigation" / "Open Ticket" / "Call Operations").
- Below the CTA: just the page footer. No FAQ, no support-channels grid, no "or for non-urgent issues see help center" link inline. The page is single-purpose by design.
- Cross-link to the non-urgent contact channels lives ONLY in the global header/footer, not on the page body — keeps the urgent-only frame intact.

## What NOT to take
- Don't blend this with the main `/contact` page or with the [search-led help center](./refero-00cda269-search-led-help-center.md) — co-locating non-urgent support channels collapses the urgency signal. Keep `/emergency` as its own subpath.
- Don't add a multi-step form, dropdowns, or required fields — every additional step is a friction tax on someone whose drone just crashed. The chip + CTA is the entire interaction.
- Don't show a phone number in the page body unless the dealer can actually staff it 24/7 with someone who knows GTEEX hardware. A phone number that goes to voicemail at 3am is worse than no phone number.
- Don't substitute a generic "Contact Us" page for this — the design move depends on the page being purpose-built for triage. If the dealer can't commit a separate routing path, don't ship the pattern.
- Don't import the dark cinematic register into a non-urgent contact context — that's the point of the visual; pulling it elsewhere dilutes the urgency tone.

## Adaptation notes (cross-archetype)
- FORGE: native fit — dark navy with ember-glow CTA, ember-glow horizon, white type. The astronomy decorative element becomes a single ember spark at the bottom-center. See [FORGE archetype](../../../archetypes/forge.md).
- TACTICAL: pure black background, single hairline corner-bracket frame around the hero, white type, white-fill black-text CTA. Drop the astronomy — TACTICAL prefers geometric precision over cinematic decoration. See [TACTICAL archetype](../../../archetypes/tactical.md).
- TERRAIN: dark charcoal background with subtle contour-line pattern overlay (very subtle topo lines), cream type, brand-accent CTA. The contour-pattern replaces the starfield. See [TERRAIN archetype](../../../archetypes/terrain.md).
- CLEAN: invert — light cream/white page background, charcoal type, saturated brand-color CTA at full size. The decorative element drops entirely (CLEAN's restraint forbids the cinematic backdrop). The urgency comes from the headline scale + CTA scale alone.
- FIELD: cream page background, deep amber CTA, charcoal type. The decorative element becomes a single horizontal hairline dividing the hero from the page below — replaces the cinematic horizon. See [FIELD archetype](../../../archetypes/field.md).
- PATRIOT: cream page background, deep navy CTA with cream type, single small star or shield-mark below the CTA (replaces astronomy). The barn-red triage chips alternate (1 navy, 2 barn-red, 3 navy). See [PATRIOT archetype](../../../archetypes/patriot.md).
- For the dealer's standard `/contact` page, pair this with the [two-card decision pivot](./refero-376ca585-two-card-decision-pivot.md) (sales vs support) and link to `/emergency` from the support card — keeps the urgency signal intact while still surfacing the path. For dealers offering scheduled (non-urgent) support, the [calendar-led rep card](./refero-701496e7-calendar-led-rep-card.md) is the complementary booking surface.

## Source brief
Framer's `/emergency/` — Framer needs to handle "site is broken in production" support distinctly from billing or feature questions, because the cost of latency is different. The dark cinematic hero + chip triage + single CTA is purpose-built to respect that asymmetry. For a Terraplex dealer running spray operations under [Part 137](../../../content/compliance-program.md), the same shape applies — drone-down or weather-call urgency is structurally different from "I want to know about service tiers."
