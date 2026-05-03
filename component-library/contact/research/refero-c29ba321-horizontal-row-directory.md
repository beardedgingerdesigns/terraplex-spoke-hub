---
referoScreenId: c29ba321-95e4-4ca6-a2fa-7ea5a210e508
referoUrl: https://refero.design/pages/c29ba321-95e4-4ca6-a2fa-7ea5a210e508
section: contact
applicableArchetypes: [clean, field, terrain, patriot, forge, tactical]
savedAt: 2026-05-03
savedFor: library-audit
tags: [horizontal-row-directory, multi-intent-routing, hairline-separators, no-card-chrome, directory-style-contact, scannable-list]
---

## Why this is library-worthy
A "phone-directory" contact page where each intent is a horizontal text row separated by hairline rules, NOT a card. Six rows in the source (Support / Partner / Careers / Enterprise / Partnerships / Community), each with bold title + 1-line description + right-aligned text-link CTA. Scales beyond the [two-card decision-pivot](./refero-376ca585-two-card-decision-pivot.md)'s binary intent-routing without falling into a card-grid wall. Right pick for a dealer with many distinct contact intents (sales, service, parts, careers, partnerships, dealership inquiries, training enrollment) where a 2-card pivot is too thin and a 6-card grid feels overwhelming.

## What to take
- Page opens with a tall left-aligned headline ("Contact Us"), grotesque, ~64-80px, with a 1-line subhead beneath ("Get in touch with the right people at [Dealer], we're here to help."). Top hairline rule below the subhead anchors the directory.
- Stack of 5–7 horizontal full-width rows, each ~80-100px tall:
  - Bold title (left-aligned, ~18-22px) — the intent label
  - 1–2-line description below title (regular weight, ~14-16px, neutral grey)
  - Right-aligned text-link CTA with a trailing arrow ("Tour the Help Center →" / "Discover Available Positions →")
  - Hairline rule below each row separates from the next
- No icons, no card backgrounds, no buttons. The horizontal-rule separators ARE the visual chrome. This restraint is what scales the pattern past 4 rows without becoming overwhelming.
- Below the directory: a "Follow Us" 5-tile social-link grid in the only card-chrome moment on the page — square outlined tiles each containing one social icon. This is the visual exception that punctuates the long row stack.
- Page closer is a dark cinematic band with the brand wordmark + a 1-line tagline + one large pill CTA — gives the page a saturated punctuation moment. Optional adoption.

## What NOT to take
- Don't add card backgrounds to the rows. The flat-with-rules treatment is the design move; cards collapse it into a generic 6-up grid that's been done elsewhere.
- Don't expand below 5 rows — at 4 or fewer intents, the [two-card decision pivot](./refero-376ca585-two-card-decision-pivot.md) is structurally tighter. Don't expand above 8 rows — past 8, scanning fatigue makes the page feel like a sitemap, not a contact page.
- Don't replace the right-aligned text-link with a button. The text-link is what keeps the row reading as "directory entry" rather than "card with CTA."
- Don't use this if any of the intents need form input on this page (e.g. "fill out our enterprise form here") — directory entries route OUT to dedicated pages or external surfaces. If a form needs to live inline, use [form-with-topic-checkboxes](./refero-23938dfd-form-with-topic-checkboxes.md) or [split-screen-trust-curtain](./refero-7c41e8a8-split-screen-trust-curtain.md) instead.
- Don't lean on the dark closer band for the CLEAN archetype — see adaptation notes.

## Adaptation notes (cross-archetype)
- CLEAN: native fit — white page, charcoal type, hairline rules in mid-grey. Drop the dark cinematic closer band entirely or replace with a light-tinted band; CLEAN's restraint doesn't tolerate the saturated cinematic moment. See [CLEAN archetype](../../../archetypes/clean.md).
- FIELD: cream page base, charcoal type, hairline rules in deep amber (warm-toned rules instead of grey). Closer band in deep terracotta. See [FIELD archetype](../../../archetypes/field.md).
- TERRAIN: cream page base, charcoal type, hairline rules become a hand-drawn topo curve (single contour line) — replaces the strict horizontal hairline with TERRAIN's contour-line motif. Closer band in deep charcoal with the alternating-band rhythm. See [TERRAIN archetype](../../../archetypes/terrain.md).
- PATRIOT: cream page base, deep navy type, hairline rules in barn-red (one-color-only restraint — don't alternate row-rule colors). Closer band in deep navy with cream wordmark + cream-fill barn-red-text CTA. See [PATRIOT archetype](../../../archetypes/patriot.md).
- FORGE: invert — near-black page, white type, hairline rules in ember-glow. Closer band in pure black with ember-glow CTA. The directory's flatness lets FORGE's dark register read as institutional rather than gatekept. See [FORGE archetype](../../../archetypes/forge.md).
- TACTICAL: pure black page, white type, hairline rules in mid-grey. Each row's right-aligned text-link CTA gets a tiny corner-bracket frame around the arrow. Closer band keeps the cinematic register native. See [TACTICAL archetype](../../../archetypes/tactical.md).
- For dealers with only 2 dominant intents (sales vs support), use the [two-card decision pivot](./refero-376ca585-two-card-decision-pivot.md) instead — the visual weight of two cards is more proportionate. For an `/emergency` urgent-issue path, link there from the directory's support row but keep the [emergency-triage-contact](./refero-56a7035b-emergency-triage-contact.md) page separate — directory + emergency triage compose cleanly.

## Source brief
Editor X's `/contact-us` — Wix's enterprise design platform routes contact across 6 distinct audiences (support customers, partners, prospective hires, enterprise prospects, partnership/affiliate leads, community members). The horizontal-row directory is the right shape because card-grid feels marketing-heavy and a single-form is too narrow. For a Terraplex dealer with multiple distinct inquiry paths (sales / service / parts / careers / dealership inquiries / training enrollment), the same scaffold scales without forcing the visitor to read 6 cards.
