# Log

Append-only chronological record of ingests, queries, and lints. Each entry starts with `## [YYYY-MM-DD] <operation> | <title>` so the log is parseable with `grep "^## \[" log.md`.

**Rule:** never edit prior entries. Re-classifying a past ingest = appending a new note that references it, not rewriting history.

**Operation types:** `ingest`, `query`, `lint`, `manual` (for hub edits made directly by Justin), `migration` (for one-shot rewrites of structure).

---

## [2026-05-02] ingest | Library audit 2026-05-02
Branch `chore/library-audit-2026-05-02`. 2 notes added, 0 merged, 0 deleted, 1 broadened. New: [hero/refero-b86571f2-manifesto-creed-hero.md](component-library/hero/research/refero-b86571f2-manifesto-creed-hero.md) (manifesto headline → full-bleed creed photo → real-person pull quote → category cards; closes hero × patriot 0-gap), [product-block/refero-eb12db31-dark-feature-bands.md](component-library/product-block/research/refero-eb12db31-dark-feature-bands.md) (full-bleed all-black feature bands with one focal photo per band; closes product-block × forge and product-block × tactical 0-gaps and is the explicit dark-archetype counterpart to alternating-pastel-stripes). Broadened [hero/refero-f619e700-centered-screenshot-trio.md](component-library/hero/research/refero-f619e700-centered-screenshot-trio.md) to PATRIOT with restrained navy/barn-red prefix-accent adaptation. Refero usage: 5 searches, 2 inspections (1 search over the 2–3 budget; refined queries because initial broad searches returned mostly off-target settings/account screens). PR auto-opened by `.github/workflows/auto-pr.yml`.

## [2026-05-01] ingest | Library audit 2026-05-01 (pass 2)
Branch `chore/library-audit-2026-05-01-pass2` pushed to origin (PR creation deferred — no GitHub tooling available in this session). 3 notes added (services + contact, both previously empty), 0 merged, 0 deleted, 1 broadened. New: [services/refero-15fcbffc-three-tier-inverted-middle.md](component-library/services/research/refero-15fcbffc-three-tier-inverted-middle.md) (tier-card grid with inverted middle), [contact/refero-376ca585-two-card-decision-pivot.md](component-library/contact/research/refero-376ca585-two-card-decision-pivot.md) (intent-routing two-card pivot above offices grid), [contact/refero-23938dfd-form-with-topic-checkboxes.md](component-library/contact/research/refero-23938dfd-form-with-topic-checkboxes.md) (form-led contact with topic-checkbox preview). Broadened [product-block/refero-4bcd783f-alternating-pastel-stripes.md](component-library/product-block/research/refero-4bcd783f-alternating-pastel-stripes.md) to PATRIOT with three-color rotation adaptation. Refero usage: 2 searches, 3 inspections.

## [2026-05-01] synthesis | New Heights Ag monthly check-in 2026-05-01
Distilled BGD ↔ Josh Quessenberry monthly meeting (28-min Gemini transcript, kept private at /reference/). Filed [synthesis/new-heights-meeting-2026-05-01.md](synthesis/new-heights-meeting-2026-05-01.md) as the anchor doc. Routed: 2 new platform-capability gaps to [feature-gaps.md](feature-gaps.md) (Dealer Portal AI Marketing Materials Automation; Trade Show Support Packages). Per-dealer direct-to-live trust + R-32 imagery + Pittsburgh trade show follow-ups to [sites/new-heights/NOTES.md](https://github.com/beardedgingerdesigns/new-heights/blob/main/NOTES.md). Industry signals (fertilizer prices, drone-market saturation in MO/AR/OK/KS, digital billboards as emerging dealer marketing channel) captured in synthesis only — observational, single-source; promote if recurring.

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
