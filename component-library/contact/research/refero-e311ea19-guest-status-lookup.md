---
referoScreenId: e311ea19-854b-4a6b-a156-a4ec99ee23a8
referoUrl: https://refero.design/pages/e311ea19-854b-4a6b-a156-a4ec99ee23a8
section: contact
applicableArchetypes: [field, clean, terrain, patriot, forge, tactical]
savedAt: 2026-06-05
savedFor: curator-pass
tags: [status-lookup, guest-lookup, two-field-form, single-purpose-page, helper-paragraph, recaptcha, support-page, order-tracking, repair-status]
---

## Why this is library-worthy

A single-purpose **lookup** page is structurally distinct from every other contact pattern in this section, all of which are **intake** surfaces (asking the visitor for new information). This Saint Laurent `/Order-GuestForm` shows how to design a minimal "check status" page — 2 fields, helper paragraph, one CTA — for visitors who already have a job/order/application in flight and only need to authenticate enough to access existing data.

## What to take

- **One job per page.** The body holds only the lookup form + helper paragraph — no upsell, no related-link rail, no chat widget, no FAQ. Single-purpose pages convert better when the visitor's intent is narrow.
- **Two fields, both required.** Email + order number (or equivalent: email + RMA number, email + application ID, phone + booking ID). No optional fields, no checkboxes, no marketing opt-in — the lookup-vs-intake split is enforced by field count.
- **Helper paragraph above the form, not below it.** 4–5 lines addressing the three predictable hesitations: (1) "where do I find this number?" (2) "what if I didn't get a confirmation email?" (3) "what if my recent purchase isn't showing yet?". Pre-empting these questions inside the form column reduces support tickets.
- **Underlined-input field style + explicit `* REQUIRED FIELD` micro-label** in the form-column header. Both fields carry `*` next to their label; the inline marker disambiguates without per-field repetition.
- **One solid-fill primary CTA, full form-column width.** Button label is the action ("CHECK ORDER STATUS"), not generic "Submit". No secondary "back" or "cancel" — the form is the page.
- **Bot-protection in the corner, not in the flow.** reCAPTCHA is placed bottom-right of the form column, visible but out of the visitor's primary axis. Bot risk is real for lookup surfaces (credential-stuffing variants); the page acknowledges this without making it a hurdle.
- **Hero header bar shows the page name only**, not a marketing banner. The visitor arrived from a confirmation email or a footer link with a specific task — no need to re-pitch the brand.

## What NOT to take

- **Don't graft a topic-routing form on top of this.** If the page also needs to handle "I want to ask a new question," route to a sibling intake page rather than expanding the field set — the two patterns serve opposite intents (verifying existing data vs. submitting new data).
- **Don't make this the only contact surface.** A lookup page complements but does not replace [the help-center](refero-00cda269-search-led-help-center.md), [the form-led contact](refero-23938dfd-form-with-topic-checkboxes.md), or [the row-directory](refero-c29ba321-horizontal-row-directory.md). It's a leaf page reached from those.
- **Don't show pricing, products, or related-articles modules below the form.** They re-introduce decisions the visitor already made.
- **Don't auto-submit on tab-out or autofill** — give the visitor explicit click affordance. Submission errors on auto-fill paths (wrong order from autofill cache, typo'd email) are the #1 lookup-page failure mode.

## Adaptation notes (cross-archetype)

- **FIELD / PATRIOT**: cream base, warm serif display heading ("Check Your Repair Status"), under-line inputs with hairline rule below, soft amber/red CTA. The helper paragraph reads as plain prose, not bullet copy.
- **CLEAN / TERRAIN**: the YSL all-caps Helvetica register lands natively. White or near-white background, monochrome inputs, single brand-accent CTA.
- **FORGE / TACTICAL**: invert to dark mode (charcoal or near-black background), uppercase label-and-input pairs, brand-color CTA. Field style shifts from underlined to outlined boxes for higher density.
- **All archetypes**: helper paragraph copy adapts to the lookup target (repair ticket, Part 137 application, training enrollment, parts order) — the layout doesn't change.

## Source brief

Saint Laurent's guest order-status lookup at `/Order-GuestForm?orderType=order` — visitors hit this from order confirmation emails or the footer's "Track Order" link to check shipping status without logging in. Pairs naturally with [the AI-assistant chat help](refero-de02c274-ai-assistant-help.md) as a follow-on fallback if the lookup returns nothing, and complements the [FIELD archetype](../../../archetypes/field.md)'s service-job tracking needs (R-32 repair status, Part 137 application review).
