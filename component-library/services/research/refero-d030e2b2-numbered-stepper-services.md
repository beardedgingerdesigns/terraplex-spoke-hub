---
referoScreenId: d030e2b2-0a14-4d80-ba20-50ce7b038d8d
referoUrl: https://refero.design/pages/d030e2b2-0a14-4d80-ba20-50ce7b038d8d
section: services
applicableArchetypes: [field, clean, terrain, patriot, forge, tactical]
savedAt: 2026-05-03
savedFor: library-audit
tags: [process-led, numbered-stepper, services-onboarding, three-step-flow, alternating-bands, shopper-recruitment]
---

## Why this is library-worthy
A process-led services page where the *first* below-hero block is a numbered 3-step horizontal stepper ("Create account → Set up → Start earning"), not capability cards. The page tells you *how it works* before it tells you *what we offer* — the right shape for a dealer whose service offering is operationally unfamiliar (book a spray, get FAA-compliant, drone shows up) and benefits from being demystified up-front.

## What to take
- Hero is a small editorial block with headline + sub + one CTA + one inset photo card. Deliberately light — the hero defers to the stepper.
- Below the hero, a single horizontal stepper band: 3 large numbered circles (1, 2, 3) connected by a hairline rule, each circle followed by a 3-word step title and a 2-line description underneath. No CTAs inside the stepper — it's a labeled flow, not an action grid.
- Below the stepper: an inline "find services in your area" search/zip-input + a logo grid of the brands/locations served. Validates the stepper's promise with concrete reach before the page goes deeper.
- Then a "How it works" 3-up photo card row on a tonal-shifted band (Instacart uses dark-green; the dealer would use their archetype's deep band). Each card: square photo + bold title + 1-sentence description. This expands the stepper visually with what each step *looks like* in practice.
- Then "Why [audience] choose us" — 4-card testimonial grid with avatar + city + 4-line quote.
- Then "X make it happen" callout band on the deep tonal band — overlapping quote cards on a photographic backdrop, no CTA.
- Then a dense FAQ accordion (8-10 questions, single column, full-width).
- Closer band: deep tonal band again with photo + headline + one CTA.
- Vertical rhythm: cream → cream → deep-band → cream → deep-band → cream → deep-band. Three deep-band moments, never two adjacent. The band rhythm carries the page.

## What NOT to take
- Don't substitute generic stock photos in the "How it works" 3-up — the photos must show real people doing each step in a recognizable environment, or the stepper feels like a placeholder.
- Don't expand the stepper beyond 3 steps. Four+ steps loses the "obviously simple" affordance that makes the stepper carry the page.
- Don't mix CTA buttons into the stepper itself — the stepper is a labeled flow, not an action grid. CTAs live in the hero, the closer band, and inline within the FAQ.
- Don't drop the band rhythm. If the page is all cream, the stepper's framing role collapses and the page reads as a long FAQ. The deep-band sections are what give the page its compose.

## Adaptation notes (cross-archetype)
- FIELD: native fit — Instacart's cream + deep-green is FIELD-adjacent. Use cream base, deep amber or terracotta for the band moments, charcoal type. See [FIELD archetype](../../../archetypes/field.md).
- CLEAN: white base, brand-color band moments (e.g. brand-blue for the 3 deep bands). Numbered circles in brand-fill white-text.
- TERRAIN: cream base, dark-charcoal band moments (this pattern *is* the alternating-band rhythm in services form). The stepper sits on a cream band; the "How it works" 3-up sits on a charcoal band; etc. See [TERRAIN archetype](../../../archetypes/terrain.md).
- PATRIOT: cream base, deep navy band moments, barn-red accents on the numbered circles only (1 in navy, 2 in barn-red, 3 in navy — flag-derived alternation kept at the digit-chrome scale). See [PATRIOT archetype](../../../archetypes/patriot.md).
- FORGE: invert — near-black base with ember-tinted band moments, numbered circles in ember-glow with white digits. The stepper's demystification job lands harder on FORGE because the dark register usually feels gatekept; a 3-step plain-language stepper softens it. See [FORGE archetype](../../../archetypes/forge.md).
- TACTICAL: pure black base, white band moments (inversion). Numbered circles as white-fill black-digit with corner-bracket frames. See [TACTICAL archetype](../../../archetypes/tactical.md).
- This pattern pairs well with the [audience-tabbed-services](./refero-fef890ec-audience-tabbed-services.md) — use the stepper for "how to engage us" then tab into "which kind of customer you are." Or pair with [maintenance-program-recommender](./refero-d928f889-maintenance-program-recommender.md) where the stepper is the educational frame and the recommender is the conversion tool that sits at the bottom of the page. For a dealer leading with capability rather than process, the [kicker-band-services](./refero-02ae136e-kicker-band-services.md) is the better fit.

## Source brief
Instacart's `/shoppers/` recruitment landing. Instacart needs to convert prospective shoppers who don't know how the gig works, so the page leads with a 3-step stepper to demystify the operational flow before showing earnings stats or testimonials. Same shape for a Terraplex dealer selling [service-tier maintenance programs](../../../content/service-patterns.md) or [Part 137 spray operations](../../../content/compliance-program.md) where the customer needs the operational shape demystified before they'll book.
