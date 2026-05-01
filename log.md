# Log

Append-only chronological record of ingests, queries, and lints. Each entry starts with `## [YYYY-MM-DD] <operation> | <title>` so the log is parseable with `grep "^## \[" log.md`.

**Rule:** never edit prior entries. Re-classifying a past ingest = appending a new note that references it, not rewriting history.

**Operation types:** `ingest`, `query`, `lint`, `manual` (for hub edits made directly by Justin), `migration` (for one-shot rewrites of structure).

---

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
