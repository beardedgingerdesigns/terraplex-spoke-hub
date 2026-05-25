# HUB-CLAUDE.md — Terraplex Hub Session Instructions

Claude Code session guidance for editing this hub repo. Read this before changing anything.

## Working Memory Protocol

**At the start of every session:** read `NOTES.md` in this repo. It contains recent decisions, open questions, and follow-ups from prior sessions. Treat it as load-bearing context.

**Before finishing any non-trivial work:** update `NOTES.md`. Specifically:
- Add new entries under "Recent decisions" with the *why*, not just the *what*. Include the date.
- Move resolved items out of "Open questions" and "Follow-ups".
- Add anything surprising, anything you had to decide without clear guidance, or anything a future session would need to know.
- Keep it terse — bullet points, not prose.

## Wiki operations

This hub is an LLM-maintained wiki. Three operations govern how content moves in and out. Read [`index.md`](index.md) for the global catalog (manually-maintained sections + pointers into per-section catalogs for bot-touched sections) and the [`log/`](log/) directory for the chronological record (one file per routine run; see [`log/README.md`](log/README.md)). The pattern is described in [docs/llm-wiki.md](https://github.com/beardedgingerdesigns/terraplex-site-builder/blob/main/docs/llm-wiki.md) (in the manager-app repo).

**Catalog layout:**

- [`index.md`](index.md) — global. Lists manually-maintained sections (products, archetypes, content, guidelines, spoke schema, manufacturer profiles, regulatory, etc.) directly. For bot-touched sections, points to the per-section catalogs below.
- [`component-library/index.md`](component-library/index.md) — design-references umbrella, with per-section indexes:
  - [`component-library/hero/index.md`](component-library/hero/index.md)
  - [`component-library/product-block/index.md`](component-library/product-block/index.md)
  - [`component-library/services/index.md`](component-library/services/index.md)
  - [`component-library/contact/index.md`](component-library/contact/index.md)
- [`research/digests/index.md`](research/digests/index.md) — daily industry digest catalog.

The split exists because parallel routines (curator-pass, industry-digest) used to co-touch the global `index.md`, causing PR conflicts on bookkeeping. Per-section catalogs let parallel routines write to disjoint files.

### Ingest

Adding new content — a research note, an archetype edit, a product update, a deep-dive analysis, a manual addition. Every ingest must:

1. **Write/update the content file(s)** per the file-authority map below
2. **Update the relevant catalog** with the new page (or revised one-line description):
   - New component-library research note → the section's `component-library/<section>/index.md`
   - New industry digest → `research/digests/index.md`
   - New manufacturer profile, regulatory page, deep-dive, or content/products/archetypes/guidelines edit → global `index.md`
3. **Write a log entry** to [`log/<YYYY-MM-DD>-<routine>.md`](log/README.md) (or `<YYYY-MM>-<routine>.md` / `<YYYY-Q><n>-<routine>.md` for monthly / quarterly routines). One file per routine run. Format inside the file: `# [YYYY-MM-DD] <operation> | <title>` followed by 1–3 sentences of context.
4. **Add at least one cross-reference where natural** — link to related archetypes, products, research, etc. via markdown links `[label](path)`. Wikilinks `[[label]]` are NOT used here (they don't render on GitHub).
5. **For sources cited via WebFetch/WebSearch:** save a snapshot to [`raw/<domain>/<YYYY-MM-DD>-<slug>.md`](raw/README.md) and reference it via `localCopy:` in the wiki entry's `sources:` frontmatter

### Query

Using the wiki to answer a question — typically during a dealer chat session, a design-foundation run, or a manual investigation. Read [`index.md`](index.md) first to find relevant top-level pages; for component-library questions, drill into the appropriate per-section index; for digest questions, drill into [`research/digests/index.md`](research/digests/index.md). Then read the actual content files.

When a synthesis is library-worthy (cross-domain, would inform multiple future sessions, not redundant with existing content), file it under [`synthesis/`](synthesis/) as a new page following the same ingest rules above. Examples of library-worthy syntheses: competitive positioning analyses, archetype-product matchup recommendations, decision frameworks that span multiple wiki domains. Most queries don't produce a library-worthy artifact — that's fine; only file when it's clearly valuable.

### Lint

Periodic health-check (weekly, via the `Hub lint — weekly` routine). Looks for:

- **Orphans**: pages no other page links to
- **Index gaps**: pages on disk but not in *any* index (global or per-section), or in an index but missing on disk
- **Stale claims**: pages with `publishedAt` frontmatter older than 90 days in `research/`, or facts newer digests have superseded
- **Contradictions**: pages claiming conflicting facts (especially across `products/`, `research/manufacturers/`, and `content/positioning.md`)
- **Missing cross-references**: pages that should link based on content overlap but don't
- **Suggested investigations**: knowledge gaps surfaced by reading across the hub
- **`raw/` orphans and broken `localCopy` links**

The lint walks the global `index.md` AND every per-section `index.md` (component-library/index.md, component-library/<section>/index.md, research/digests/index.md). Output is a PR. Auto-applied: index gaps, ≤10 cross-reference additions per run. Flagged for human review only: contradictions, stale claims, suggested investigations, orphan removals.

### `NOTES.md` vs `log/`

Different jobs:
- **[`NOTES.md`](NOTES.md)** — working memory: open questions, follow-ups, current decisions context. Edited freely; reorganized as needed.
- **[`log/`](log/)** — append-only directory; one file per routine run. Never reorganized; never edited retroactively. Re-classifying a past entry = adding a new file that references the old one. The pre-2026-05-09 chronological record (when the log was a single file) is frozen at [`log/_archive.md`](log/_archive.md).

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
| `assets.json` | All shared asset URLs AND image pools (the only place URLs live; pools managed by `scripts/ingest-hub-assets.js`) |
| `content/positioning.md` | Terraplex competitive narrative and value proposition language |
| `content/terminology.md` | Word-level rules (preferred terms, forbidden terms) |
| `content/reusable-language.md` | Quoted language from the Terraplex corporate site, safe to reuse verbatim |
| `content/content-exclusions.md` | What must never appear on a dealer site |
| `content/service-patterns.md` | Reusable service structures (Sam Welton contact, service tiers, Part 107 prep) |
| `content/pricing-policy.md` | MAP policy, MSRP-only rule, kit-tier exposure rule |
| `products/r-32.json` + `r-32.md` | R-32 product data and official sell-sheet body copy |
| `products/i-19.json` + `i-19.md` | I-19 product data and official sell-sheet body copy |
| `archetypes/_index.json` | Archetype catalog + which dealer owns which archetype+accent combo |
| `archetypes/*.md` | Individual archetype design specifications |
| `guidelines/section-patterns.md` | Common dealer site section structure (Header, Hero, About, etc.) |
| `guidelines/design-do-dont.md` | Cross-archetype design rules |
| `guidelines/typography.md` | Terraplex typography defaults (system stack, per-archetype overrides) |
| `guidelines/imagery-direction.md` | Creative-director brief for choosing imagery (hero/product/logo) from `assets.json` pools — read before picking any image |
| `spoke/spoke.schema.json` | JSON Schema for per-dealer `spoke.config.json` |
| `spoke/questionnaire.json` | Onboarding field definitions and allowed values |
| `spoke/example.spoke.config.json` | Reference spoke config (shape demonstration only) |
| `feature-gaps.md` | Platform capability gaps and Terraplex editorial restrictions |
| `index.md` | Global content catalog: lists manually-maintained sections directly + pointers to per-section catalogs for bot-touched sections |
| `component-library/index.md` | Design-references umbrella; lists per-section indexes (hero, product-block, services, contact) |
| `component-library/<section>/index.md` | Per-section catalog of research notes (one line per note with takeaway) |
| `research/digests/index.md` | Daily industry digest catalog (newest-first) |
| `log/<YYYY-MM-DD>-<routine>.md` | One log file per routine run; append-only directory |
| `log/_archive.md` | Frozen pre-2026-05-09 chronological record (legacy single-file log) |
| `raw/<domain>/<date>-<slug>.md` | Snapshots of cited URLs from routine fetches (immutable; see `raw/README.md`) |
| `raw/manual-import/<...>` | Human-curated reference materials (immutable; see `raw/manual-import/README.md`) |
| `synthesis/<slug>.md` | Cross-domain analyses filed back from chat sessions or manual investigation |
| `content/compliance-program.md` | Terraplex compliance program (Sam Welton, Part 137 / Part 107 services, prep course) |
| `research/manufacturers/terraplex.md` | Terraplex Ag parent brand profile (exclusive GTEEX Revolution distributor, 49-location dealer network) |
| `research/dealer-economics/competitor-distributors.md` | Comparative profiles of Agri Spray Drones, Bestway Ag, Rantizo |

## When referencing an asset

Use the logical name from `assets.json`. Examples:

- In archetype/guidelines markdown: "Hero uses the shared `heroVideo` with `heroPoster` as fallback."
- In product JSON: `"productImage": "r32ProductImage"` inside `assetRefs`.
- In spoke config logo paths: the spoke's own dealer logo URL is a dealer concern — it does NOT need to be in `assets.json`. Only shared Terraplex assets do.

Never paste a `https://storage.googleapis.com/...` URL into anything that isn't `assets.json`. If you find one, move it.

## When referencing an image pool

`assets.json` carries two kinds of entries: top-level **single assets** (one logical name → one URL, hand-curated, examples above) and **image pools** under `assetPools.<poolName>` (arrays of variants, populated by the ingest pipeline).

Pool entries are not picked deterministically per dealer. They're picked by **you, the building agent, at scaffolding time**, per the creative-director model. Before reaching for any image from a pool:

1. Read [`guidelines/imagery-direction.md`](guidelines/imagery-direction.md). It's the creative-director brief — covers slot-by-slot direction (hero / product card / lifestyle / detail / footer / logo), variety heuristics, and anti-patterns.
2. Read the pool entries' metadata (`description`, `composition`, `mood`, `bestFor`, `distinctive`). The `distinctive` field is the most important — it's the editorial reason to pick this variant over its neighbors.
3. Justify your pick in a scaffolding comment so a reviewer can audit the choice.

Pools are managed by `scripts/ingest-hub-assets.js` in the manager-app repo. The `sourceHash` field on pool entries is pipeline-managed — don't hand-edit. To add a new image to a pool, drop the file in `raw/<subdir>/` and run `npm run hub:ingest-assets`.

## What this hub does not cover

- Per-dealer content, branding, or decisions (that's the spoke's concern — see `spoke/`)
- Netlify form wiring, platform-managed files, deploy logic (that's the platform's concern)
- Manager app UI or code (that's the manager app's concern)

If a request would add any of the above to this repo, push back — it belongs somewhere else.
