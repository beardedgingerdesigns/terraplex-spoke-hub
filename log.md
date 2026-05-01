# Log

Append-only chronological record of ingests, queries, and lints. Each entry starts with `## [YYYY-MM-DD] <operation> | <title>` so the log is parseable with `grep "^## \[" log.md`.

**Rule:** never edit prior entries. Re-classifying a past ingest = appending a new note that references it, not rewriting history.

**Operation types:** `ingest`, `query`, `lint`, `manual` (for hub edits made directly by Justin), `migration` (for one-shot rewrites of structure).

---

## [2026-05-01] manual-import | Reference materials from /reference into wiki

Pulled curated content from the manager-app's gitignored `reference/` directory into the wiki:

- **New**: [research/manufacturers/terraplex.md](research/manufacturers/terraplex.md) — full Terraplex Ag parent brand profile (the exclusive GTEEX Revolution distributor, 49-location dealer network, Sam Welton compliance program). The parent brand had no profile before; this fills the gap.
- **New**: [content/compliance-program.md](content/compliance-program.md) — Sam Welton bio, Part 137 / 107 services, $449 prep course details. Hub-canonical compliance content for dealer sites to reference.
- **New**: [research/dealer-economics/competitor-distributors.md](research/dealer-economics/competitor-distributors.md) — structural profiles of Agri Spray Drones, Bestway Ag, and Rantizo as direct comparison anchors for dealer chat sessions.
- **Augmented**: [products/r-32.md](products/r-32.md) and [products/i-19.md](products/i-19.md) added headline-spec tables, the canonical 5-benefit frame ("Reduce Input Losses / Lower Operating Costs / Tough or Unmatched Terrain Access / Multi-role Functionality / Sustainable Operations"), and the customer FAQ from terraplexag.com/drones.
- **Augmented**: [content/positioning.md](content/positioning.md) added the canonical brand-language section ("Built in the Americas, for the American Farmer", "Farmer-owned agricultural drone reseller", "We use the drones we sell", etc.) plus the brand-structure clarification (Terraplex = distributor, GTEEX = OEM).
- **Augmented**: [research/manufacturers/dji-agras.md](research/manufacturers/dji-agras.md) added Revision 2026-05-01b with full T-series lineup including new T100/T70P/T25P, 300K global drones / 500M hectares scale claim, 30K jobs claim, DJI Care service tiers, grain/commercial crop split.
- **New `raw/manual-import/` namespace** holds 13 source snapshots: 4 competitor homepages + 7 terraplex-corporate sub-pages + 2 sell-sheet PDFs converted to markdown. New [raw/manual-import/README.md](raw/manual-import/README.md) documents the namespace's rules.

Skipped per editorial decision:
- 7 meeting transcripts (Black Knight, New Heights, Great River, Truss-ag, Terraplex monthly check-ins, Revolution Drone kickoff, Terraplex review) — sensitive content, not library-worthy as raw transcripts.
- 3 onboarding questionnaires (Truss Services filled, Wiemer Ag Service partial, New Heights blank template) — duplicate of `spoke/` schema; Wiemer is a planned future onboarding (skip until live).

## [2026-05-01] migration | Adopted LLM Wiki pattern at hub level

Added `index.md`, `log.md`, `synthesis/`, `raw/` namespaces. Augmented [HUB-CLAUDE.md](HUB-CLAUDE.md) with wiki-operations section. Created `Hub lint — weekly` routine. Updated existing routine prompts (digest, intelligence, deep-dive, curator) to write index/log entries on every ingest. See [docs/llm-wiki.md](https://github.com/beardedgingerdesigns/terraplex-site-builder/blob/main/docs/llm-wiki.md) for the pattern source.

## [2026-05-01] ingest | Library audit 2026-05-01
PR #3. 3 new component-library research notes from gap-analysis exploration:
- [hero/research/refero-ae84b62a-topographic-layered-bg.md](component-library/hero/research/refero-ae84b62a-topographic-layered-bg.md)
- [hero/research/refero-f619e700-centered-screenshot-trio.md](component-library/hero/research/refero-f619e700-centered-screenshot-trio.md)
- [product-block/research/refero-4bcd783f-alternating-pastel-stripes.md](component-library/product-block/research/refero-4bcd783f-alternating-pastel-stripes.md)

Sources: Refero (3 screens). Run by `Component-library curator` routine.

## [2026-05-01] ingest | Monthly intelligence pass 2026-04
PR #2. Created [research/manufacturers/dji-agras.md](research/manufacturers/dji-agras.md) and [research/manufacturers/hylio.md](research/manufacturers/hylio.md) (first-time profiles), plus [research/regulatory/2026-04-update.md](research/regulatory/2026-04-update.md) covering 5 federal items (USDA NPG-Ag launch, FAA Part 108 status, DJI Ninth Circuit appeal). Sources: enterprise.dji.com, hylio.com, AgWeb, AgFunder. Note: 3 of the WebFetch calls returned 403 from publishers; agent fell back to WebSearch for cached snippets — all within allowlist.

## [2026-05-01] ingest | Industry digest 2026-05-01
PR #1. 2 items in [research/digests/2026-05-01.md](research/digests/2026-05-01.md):
- Hylio raises $2M on StartEngine to scale Texas production to 5,000+ drones/year
- DJI puts $1.5B figure on 2026 US sales impact from FCC covered-list ruling; Ninth Circuit appeal Case 26-1029 active

Sources: AgFunder News (×3 articles). Single-domain — flagged as a yellow-flag for future digests; prompt updated to require 2+ distinct domains for significant items.

## [2026-04-30 and prior] migration | Hub baseline content
Pre-existing hub content (archetypes, content/, guidelines/, products/, design/, spoke/) was authored across April 2026 prior to log discipline. See [git log](https://github.com/beardedgingerdesigns/terraplex-spoke-hub/commits/main) for granular history. Earliest commit on record: `bf4b1a8 chore: initial Terraplex hub scaffold (v0.1.0)`.
