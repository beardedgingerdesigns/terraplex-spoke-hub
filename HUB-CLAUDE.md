# HUB-CLAUDE.md — Terraplex Hub Session Instructions

Claude Code session guidance for editing this hub repo. Read this before changing anything.

## Working Memory Protocol

**At the start of every session:** read `NOTES.md` in this repo. It contains recent decisions, open questions, and follow-ups from prior sessions. Treat it as load-bearing context.

**Before finishing any non-trivial work:** update `NOTES.md`. Specifically:
- Add new entries under "Recent decisions" with the *why*, not just the *what*. Include the date.
- Move resolved items out of "Open questions" and "Follow-ups".
- Add anything surprising, anything you had to decide without clear guidance, or anything a future session would need to know.
- Keep it terse — bullet points, not prose.

## Architectural ground rules

These are inviolable. If a requested change would break one of these, stop and raise it rather than silently working around it.

1. **Structured data → JSON. Prose content → Markdown.** Do not mix them in a single file. `hub.json`, `assets.json`, `archetypes/_index.json`, `products/*.json`, and `spoke/*.json` are structured. Everything in `content/`, `guidelines/`, `archetypes/*.md`, and `products/*.md` is prose.
2. **Assets are referenced by logical name.** The only file in this hub that contains raw URLs is `assets.json`. Every other file — including archetype specs, product JSON, and design guidelines — references assets by their logical name (`heroVideo`, `r32SpecSheet`, etc.). If you are tempted to paste a URL anywhere outside `assets.json`, stop and add a logical-name entry to `assets.json` instead.
3. **The hub does not know about hosting, Netlify, or deployment.** That's the platform's concern. No references to form handlers, deploy tooling, CDN configuration, etc. belong in this repo.
4. **The hub does not know about any specific dealer.** Dealer-specific content, accent colors, owner stories, and business details live in the dealer's `spoke.config.json`, not here. The one exception: `archetypes/_index.json` tracks which dealer has claimed which archetype+accent combination, because the uniqueness rule is a hub-level concern.

## Version bumps are a deliberate act

Changes to this hub affect **every dealer site that upgrades to a new version**. Bumping `hub.json.version` is not automatic — it's a decision.

- Dealers pin to a specific `hub.version` in their `spoke.config.json`. They do not get updates until they deliberately bump.
- Increment `version` (semver) when dealer-facing content changes: new product spec, updated positioning language, new archetype, new asset.
- Increment `schemaVersion` only when the directory structure or JSON schemas change in a way that would break an existing spoke config. This is rare.
- When you make a substantive change, propose the version bump in the same commit — don't leave it for later.

## File authority map

Each file is authoritative for a specific domain. When the same topic appears in multiple places, the authoritative file wins.

| File | Authoritative for |
| --- | --- |
| `hub.json` | Hub identity and version |
| `assets.json` | All shared asset URLs (the only place URLs live) |
| `content/positioning.md` | Terraplex competitive narrative and value proposition language |
| `content/terminology.md` | Word-level rules (preferred terms, forbidden terms) |
| `content/reusable-language.md` | Quoted language from the Terraplex corporate site, safe to reuse verbatim |
| `content/content-exclusions.md` | What must never appear on a dealer site |
| `content/service-patterns.md` | Reusable service structures (Sam Welton contact, service tiers, Part 107 prep) |
| `products/r-32.json` + `r-32.md` | R-32 product data and official sell-sheet body copy |
| `products/i-19.json` + `i-19.md` | I-19 product data and official sell-sheet body copy |
| `archetypes/_index.json` | Archetype catalog + which dealer owns which archetype+accent combo |
| `archetypes/*.md` | Individual archetype design specifications |
| `guidelines/section-patterns.md` | Common dealer site section structure (Header, Hero, About, etc.) |
| `guidelines/design-do-dont.md` | Cross-archetype design rules |
| `guidelines/typography.md` | Terraplex typography defaults (system stack, per-archetype overrides) |
| `spoke/spoke.schema.json` | JSON Schema for per-dealer `spoke.config.json` |
| `spoke/questionnaire.json` | Onboarding field definitions and allowed values |
| `spoke/example.spoke.config.json` | Reference spoke config (shape demonstration only) |
| `feature-gaps.md` | Platform capability gaps and Terraplex editorial restrictions |

## When referencing an asset

Use the logical name from `assets.json`. Examples:

- In archetype/guidelines markdown: "Hero uses the shared `heroVideo` with `heroPoster` as fallback."
- In product JSON: `"productImage": "r32ProductImage"` inside `assetRefs`.
- In spoke config logo paths: the spoke's own dealer logo URL is a dealer concern — it does NOT need to be in `assets.json`. Only shared Terraplex assets do.

Never paste a `https://storage.googleapis.com/...` URL into anything that isn't `assets.json`. If you find one, move it.

## What this hub does not cover

- Per-dealer content, branding, or decisions (that's the spoke's concern — see `spoke/`)
- Netlify form wiring, platform-managed files, deploy logic (that's the platform's concern)
- Manager app UI or code (that's the manager app's concern)

If a request would add any of the above to this repo, push back — it belongs somewhere else.
