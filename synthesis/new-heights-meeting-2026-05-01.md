---
title: "Synthesis: New Heights Ag monthly check-in 2026-05-01"
category: synthesis
publishedAt: 2026-05-01
participants: [Justin Lobaito (BGD), Josh Quessenberry (New Heights Ag)]
sourceType: gemini-meeting-transcript
sourceLocation: /reference/meeting-notes/ (gitignored, local-only)
relevantTo: [dealers, product, application]
tags: [new-heights, dealer-feedback, platform-features, trade-show, marketing-automation]
---

## What this is

Distilled outputs from a 28-minute monthly check-in between Justin (BGD) and Josh (New Heights Ag) on 2026-05-01. The raw transcript and Gemini AI summary are kept private (gitignored at `/reference/meeting-notes/`) — this synthesis captures the platform-actionable items only, with personal context, sensitive negotiations, and routine status check-ins omitted.

## Why this matters

Two major platform-feature ideas surfaced (Dealer Portal AI marketing-materials automation; Trade Show Support Packages) plus one process change (per-dealer trust authorizing direct-to-live deployment). Three industry signals worth tracking. New Heights becomes the first dealer attending a trade show under the Terraplex brand, which makes their experience the de facto pilot for the trade-show support feature.

## Decisions made (both parties aligned)

1. **Drone product pages approved for immediate deployment to live.** The new R-32 / I-19 dedicated product pages with MSRP, request-pricing CTA, full spec sheet, "Why operators choose," and FAQ — built earlier this morning per [sites/new-heights/NOTES.md](https://github.com/beardedgingerdesigns/new-heights/blob/main/NOTES.md) entries — are signed off and pushing to live. Captures the user benefit Josh agreed with: "at least getting pricing on the websites as opposed to … gating it behind a contact form."
2. **Process change: direct-to-live deployment for New Heights.** Josh authorized Justin to skip the prior dev-site review step on future updates: "I would just go ahead and just push it out … I trust you 100% on what you're doing." This is **per-dealer trust calibration**, not a platform-wide policy change. Documented in [sites/new-heights/NOTES.md](https://github.com/beardedgingerdesigns/new-heights/blob/main/NOTES.md) "Recent decisions."

## Platform-wide ideas surfaced

### A. Dealer Portal Overhaul: AI Marketing Materials Automation

The biggest idea. Justin pitched and Josh enthusiastically engaged with the concept of an opt-in dealer-portal program where the platform auto-generates marketing materials for participating dealers using:
- The dealer's own brand context (already in the platform via their site)
- Revolution Drones / GTEEX brand assets
- Terraplex brand assets and approved content
- Optionally: a per-dealer monthly marketing budget that the system spends on auto-placed ads (digital billboards in the dealer's territory came up specifically — Josh has noticed them proliferating on rural Missouri intersections in the last 4–6 months)

Specific deliverables Josh wanted/imagined:
- Builder tool to generate spec sheets with the dealer's logo overlaid
- Digital banner ads (e.g., 600×300) sized for ad networks
- Print-ready files at correct sizes for trade-show signage
- Flyers / decals
- Co-branded materials that honor Terraplex + Revolution + dealer

This routes to → **[feature-gaps.md](../feature-gaps.md)** as a new major platform capability.

### B. Trade Show Support Packages

Josh signed up for the **Four State Farm Show** in Pittsburgh, Kansas (July 9–11, 2026) with a 10×20 booth in a prime location near the entrance. He's renting an R-32 from Terraplex (via Ryan) to display alongside his I-19 with a monitor playing R-32 footage. He explicitly asked for:
- A "spec sheet" for setting up 10×20 or 20×20 booths
- Best-practice booth layout templates ("a quick layout that … gives you just kind of a quick a quick layout that then you can just order all the individual pieces")
- Print-ready files at correct sizes for the signage Josh would need
- A package-style opt-in: "create packages or so to get like you know hey opt in to get a package for trade show 10×10 things like that"

Josh framed it as helping dealers (especially new ones) replicate booth-design patterns that already work — instead of every dealer reinventing booth layouts.

Justin committed to ~1 week of internal brainstorming on automated trade-show support mechanisms.

This routes to → **[feature-gaps.md](../feature-gaps.md)** as a separate platform capability (related to but distinct from the AI marketing materials work — the trade-show package layer is a templated kit, not generative).

### C. Per-dealer trust calibration (process / not feature)

Direct-to-live without dev-site review is a per-dealer trust decision. Worth tracking which dealers have opted into this so future onboarding sessions know whether to ask. Routes to → **[sites/new-heights/NOTES.md](https://github.com/beardedgingerdesigns/new-heights/blob/main/NOTES.md)** "Recent decisions" (already captured) and noted here as a model for future dealers.

## Industry signals captured

These are observational (Josh's first-hand view) — not citable to a published source, but worth tracking against future digests.

1. **Fertilizer prices "through the roof."** Josh: "fertilizer prices have just went through the roof and guys are not doing it." Some farmers in his territory (MO/AR) are skipping fertilization or skipping planting entirely this season out of fear of financial ruin if a non-yielding crop also requires expensive inputs. He cited the 38% Middle East fertilizer-supply figure (which he'd researched himself, source not named in the call). Cross-reference to [research/regulatory/2026-04-update.md](../research/regulatory/2026-04-update.md) and the broader supply context already captured in industry digests.
2. **Drone market not flooded yet** in MO/AR/OK/KS. Josh's wife worried the fertilizer slowdown might hurt his application services revenue; Josh's counter: "There's still going to be plenty of acres out there for people to do … there's not very many drone companies where I'm at. There's two guys that I know of." This is concrete competitive data for that geography.
3. **Digital billboards are a growing rural-marketing channel.** Josh observed "in the last four or 6 months … a lot of these towns, especially on the main intersections and highways and stuff, a lot of people are putting up these digital billboards." Worth tracking — this is the channel he'd want auto-placement on for the dealer-portal marketing-budget feature.

These don't yet warrant standalone wiki entries, but if they recur in future digests/meetings, they should be promoted to either `research/dealer-economics/` (channel research) or a dedicated regional-market entry.

## Tactical follow-ups (New Heights-specific)

1. **R-32 imagery refresh** — Russell is in Brazil; Charity confirmed new R-32 coverage by Sunday 2026-05-04. Apply to all sites once received.
2. **Trade show prep** — Justin commits to ~1 week of brainstorming on trade-show support packages, then follows up with Josh by ~2026-05-08 with concrete proposals for the July 9–11 Four State Farm Show.
3. **Marketing automation ideation** — Josh open to ongoing dialogue on the dealer-portal direction. Would benefit from seeing mockups before committing.

These are tracked in **[sites/new-heights/NOTES.md](https://github.com/beardedgingerdesigns/new-heights/blob/main/NOTES.md)** "Follow-ups."

## Routing summary

| Item | Where it landed |
|---|---|
| Drone pages deployment approval | Already deployed; documented in `sites/new-heights/NOTES.md` |
| Direct-to-live process change (per-dealer trust) | `sites/new-heights/NOTES.md` "Recent decisions" |
| Dealer Portal AI Marketing Materials Automation | `feature-gaps.md` (new platform gap) |
| Trade Show Support Packages | `feature-gaps.md` (new platform gap) |
| R-32 imagery refresh | `sites/new-heights/NOTES.md` "Follow-ups" |
| Pittsburgh trade show specifics | `sites/new-heights/NOTES.md` "Follow-ups" |
| Industry signals (fertilizer, drone-market saturation, digital billboards) | This synthesis (no promotion to standalone yet — observational, single-source) |

## Cross-references

- Parent brand context: [research/manufacturers/terraplex.md](../research/manufacturers/terraplex.md) — Terraplex's 49-location dealer network and exclusive Revolution Drones distribution model (which is why Josh's "I owe Terraplex and GTEX, without them I don't exist" framing matters)
- Brand positioning to use in marketing materials: [content/positioning.md](../content/positioning.md) — "Built in the Americas, for the American Farmer," "Farmer-owned agricultural drone reseller," etc.
- Compliance program (relevant to Josh's spraying-services positioning at the trade show): [content/compliance-program.md](../content/compliance-program.md)
- Competitive context (what Josh is competing against): [research/dealer-economics/competitor-distributors.md](../research/dealer-economics/competitor-distributors.md)

## Source disclosure

This synthesis was produced from a Gemini-recorded transcript at `/reference/meeting-notes/New Heights - Monthly Check In - 2026_05_01 10_30 CDT - Notes by Gemini.pdf` (gitignored, local only). Per the [hub's manual-import policy](../raw/manual-import/README.md), meeting transcripts are not imported into `raw/` — only the distilled, platform-actionable content lands in the wiki.
