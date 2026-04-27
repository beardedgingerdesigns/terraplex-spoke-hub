# Pricing Policy

> Authoritative rules for how dealer sites may display Revolution Drone pricing. Terraplex enforces **minimum advertised price (MAP)** — violations can jeopardize dealer status. Read this before adding any price, tier, or discount copy to a dealer site.

## The numbers (authoritative)

MSRP values are canonical in `products/r-32.json` and `products/i-19.json` under the `msrp` field. Do not duplicate them elsewhere in hub content; dealer sites should read them from those files.

| Product | Starting MSRP |
|---|---|
| R-32 Revolution Drone | `$72,000` |
| I-19 Revolution Drone | `$46,250` |

**Source:** Terraplex MAP policy. Confirmed by Jack Schroeder on 2026-03-30.

Both values are "Starting MSRP" — additional kits, configurations, and add-ons push the real transaction price higher. The disclaimer `"Additional configurations available — call for details."` should accompany the number wherever it appears publicly.

## Rules dealer sites must follow

1. **Advertise MSRP only.** Never publish an actual transaction price, dealer cost, discount percentage, or markup figure on a dealer site. This includes "special pricing," "limited-time offers," and "$X off MSRP" callouts. All of these are MAP violations.

2. **Do not expose kit-tier naming.** Terraplex's internal kit-tier taxonomy ("Kit 1," "Kit 2," etc.) is a dealer-facing B2B concept — it must not appear on public dealer sites. Public-facing copy says "Starting MSRP" and funnels configuration shoppers to phone or contact form.

3. **Upgrade paths go to the phone.** Keep a `Request Pricing` (or equivalent) CTA alongside any MSRP display. Anyone price-shopping for non-base configurations needs to talk to the dealer, not discover a configurator on the website.

4. **No dealer cost, margin, or sub-dealer pricing.** These are confidential business-to-business data. See `content/content-exclusions.md`.

5. **Don't surround MSRP with discount language.** Framing like "Normally $80k, now $72k" creates ambiguity about what the advertised price actually is and invites MAP scrutiny.

## Recommended treatment

On pages where price appears (product-spoke hero, catalog cards, etc.):

- Small labeled block: eyebrow text `Starting MSRP`, large numeric, muted disclaimer line.
- Primary CTA nearby: `Request Pricing` → contact form.
- Optional secondary CTA: `Download Spec Sheet`.

The hero is the right place to answer the price question — buyers land there intent-to-buy. Burying price behind a contact form wastes the visit and reads as evasion. Answering up front with MSRP + disclaimer is both compliant and credible.

## What to avoid, concretely

| Example | Status | Why |
|---|---|---|
| `"Starting MSRP $72,000"` | ✅ | Canonical MSRP, clearly labeled as a starting figure |
| `"Kit 1: $72,000"` | ❌ | Exposes internal tier naming |
| `"$72,000 (was $78,500)"` | ❌ | Discount framing, MAP violation |
| `"Call for our best price — better than MSRP"` | ❌ | Implies below-MAP pricing |
| `"Starting at $72,000 — additional configurations available"` | ✅ | MSRP with acknowledgement that real price varies |
| `"Dealer cost: $X / margin: Y%"` | ❌ | Confidential B2B data |

## Audit trail

- 2026-03-30 — MAP policy + kit-tier exposure rule confirmed with Jack Schroeder
- 2026-04-22 — First applied on Truss Services LLC dealer site (R-32 + I-19 subpage heroes). See Truss NOTES.md for implementation reasoning.
- 2026-04-23 — Canonicalized into hub v0.4.0. MSRP data moved to `products/r-32.json` + `products/i-19.json`, policy prose moved here.
