---
referoScreenId: a0808dc4-e922-4f87-ba34-c3d5fdb5e703
referoUrl: https://refero.design/pages/a0808dc4-e922-4f87-ba34-c3d5fdb5e703
section: contact
applicableArchetypes: [field, clean, terrain, patriot, forge, tactical]
savedAt: 2026-05-12
savedFor: terraplex-curator-pass
tags: [contact, quote-intake, multi-step-modal, progress-bar, radio-quiz, lead-classifier, SLA-pre-frame]
---

## Why this is library-worthy

A multi-step quote-intake quiz modal pre-classifies the inquiry before any contact details are collected — one question per step (radio list), thin progress bar, identity-header with SLA pre-frame ("Responds in 2 hours during business hours"). Structurally distinct from every existing contact pattern: it isn't a single form ([form-with-topic-checkboxes](refero-23938dfd-form-with-topic-checkboxes.md)), a static binary pivot ([two-card-decision-pivot](refero-376ca585-two-card-decision-pivot.md)), a static tile/row grid ([tile-grid-inquiry-routing](refero-c891061f-tile-grid-inquiry-routing.md) / [horizontal-row-directory](refero-c29ba321-horizontal-row-directory.md)), a chip classifier with a single CTA ([emergency-triage-contact](refero-56a7035b-emergency-triage-contact.md)), or a chat handoff. It's a progressive classifier that lets a dealer triage spray-day, demo, training, and fleet-share inquiries through the same surface without forcing a 12-field form. Right pick when the dealer's pain is "every quote request comes in as a one-line email and we waste 2 calls clarifying scope."

## What to take

- **Modal-on-business-profile pattern.** Quiz lives in a centered modal overlaid on a dimmed business / contact page — the page stays scrollable in the background so the visitor knows where they are. The modal is medium-large (~700px wide), white, with subtle shadow and rounded corners; a single `X` top-right closes it without losing page state.
- **Identity-header band with SLA pre-frame.** Top band: business name + brand mark + rating row + one line of operational reassurance: "Responds in 2 hours during business hours." Sets a response-time expectation BEFORE asking for any input. The SLA itself is the trust move — it pre-empts the unspoken "will anyone actually read this?" objection.
- **Thin saturated progress bar.** Single horizontal hairline progress bar (~25% filled on step 1 of N) directly below the identity-header band. Tells the user this isn't a 20-question survey — they can see the runway. Color is the dealer's accent.
- **One question per step, radio-list answers.** Step body is a single bold question ("What do you need designed?") + a vertical stack of 5–8 radio options (each a circular selector + label, generous vertical spacing). NO mixed input types per step — radios only, single-select. The list always ends with an "Other" option so the classifier never traps the visitor.
- **Back / Next footer, primary disabled until an option is selected.** Bottom-right footer with a ghost "Back" button left of a filled "Next" CTA; Next is disabled (greyed) until the visitor picks an option. No "Skip" affordance — the classifier only works if every step gets an answer.
- **Sequence the quiz so the cheap-to-answer questions come first.** Service type → region / ZIP → scope (acreage, fleet size, timeline) → contact info on the LAST step. Visitors who drop after Q1 still gave the dealer a directional signal (sales vs. support vs. training).
- **3–5 steps total, no more.** The progress bar's credibility breaks if it shows a near-empty bar after step 1 of 8. Real-world drone-dealer intakes can almost always be classified in 3–4 questions.

## What NOT to take

- **Do NOT collect contact info before classification.** Asking for email / phone on step 1 inverts the value of the pattern — it stops being a classifier and becomes a hostile gate. Email + phone go on the FINAL step only, after the visitor sees the funnel is short.
- **Do NOT mix free-text fields into mid-flow steps.** The radio rhythm is what makes the quiz feel fast; a textarea in the middle ("Tell us about your operation") collapses the perceived velocity.
- **Do NOT use this when one form would do.** A dealer with 3 inquiry types max — and a clear single-form contact page that converts — does not need this. Reach for [form-with-topic-checkboxes](refero-23938dfd-form-with-topic-checkboxes.md) or [two-card-decision-pivot](refero-376ca585-two-card-decision-pivot.md) first. The quiz pattern earns its complexity only when the dealer triages 5+ structurally distinct inquiry types (Part 137 spray-day, R-32 demo, I-19 demo, Part 107 cohort, fleet-share, warranty, parts, press) AND mis-routing currently costs real time.
- **Do NOT promise an SLA the dealer can't meet.** "Responds in 2 hours during business hours" is a contract. If the dealer is one person who flies spray runs all day, drop the SLA line entirely; reach for ["Launch chat" handoff with business-hours band](refero-45feb3a4-live-chat-handoff.md) instead.
- **Do NOT skip the progress bar.** Without it, the quiz feels open-ended and visitors abandon at step 1.

## Adaptation notes (cross-archetype)

- **FIELD** — Cream modal background, warm-brown radio outline, deep-soil accent for the progress bar and Next CTA. SLA line in the dealer's voice ("I'll get back to you before evening chores"). Real first-name in the identity-header band, not a logo.
- **CLEAN** — White modal on dimmed neutral overlay, hairline grey radio borders, mid-blue accent for progress bar + Next. SLA line is precise: "Replies within 2 business hours." Identity header is the company wordmark.
- **TERRAIN** — Modal background in muted topographic-cream tint; the progress bar accent is the rust-orange / contour-line accent; identity-header band may carry the small topo-contour glyph from a [TERRAIN hero](../../hero/research/refero-ae84b62a-topographic-layered-bg.md).
- **PATRIOT** — Modal background near-white, identity-header band carries the small flag / service-badge glyph, primary CTA in deep navy or barn-red. SLA line reads "We answer every quote within one business day" — patriotic register prefers plainspoken over precise.
- **FORGE** — Dark modal (contained dark band, NOT full-bleed) with light type, hex-accent progress bar (matches [emblem-program-hero](../../hero/research/refero-c1c2abcf-emblem-program-hero.md)), radio circles in faint outline. SLA line in monospace ("Response SLA: 2 business hours").
- **TACTICAL** — Same dark modal but tighter type, accent is the operational green/amber. The "Back / Next" footer can use chip-style buttons. SLA line is operational: "Avg. first response: 1h 47m (last 30 days)." If the dealer surfaces a real metric, this is the version that earns the saturation.

## Source brief

Yelp business-page quote-request flow for Molteg Landscaping and Design (Sayreville, NJ) — Yelp injects a multi-step request-a-quote modal on local-service business profiles to pre-classify scope before pushing the lead to the business owner. The same structural pattern is the right shape for a Terraplex dealer surface (sales / Part 137 / training / fleet-share / parts) — a regional dealer of GTEEX drones can absorb 5+ inquiry types without forcing all of them through a single form. Pairs naturally with [calendar-led-rep-card](refero-701496e7-calendar-led-rep-card.md) (final step links to the rep's calendar) and with the [CLEAN archetype](../../../archetypes/clean.md) / [TACTICAL archetype](../../../archetypes/tactical.md) for dealers whose moat is operational responsiveness.
