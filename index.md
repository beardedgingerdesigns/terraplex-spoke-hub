# Index

Global content catalog for the Terraplex hub. Updated by every ingest. The lint routine verifies coverage (every wiki page is in the index; nothing in the index is missing on disk).

---

## Hub root

- [README.md](README.md) — high-level overview of what this hub is and how it fits into the BGD platform
- [HUB-CLAUDE.md](HUB-CLAUDE.md) — Claude Code session instructions, architectural ground rules, file-authority map, wiki operations
- [NOTES.md](NOTES.md) — working memory: recent decisions, open questions, follow-ups
- [feature-gaps.md](feature-gaps.md) — platform capability gaps and editorial restrictions
- [hub.json](hub.json) — hub manifest (name, version, schemaVersion)
- [assets.json](assets.json) — URL manifest; the ONLY place raw URLs live in the hub
- [log.md](log.md) — append-only chronological record of ingests / queries / lints

## Brand and content

- [content/positioning.md](content/positioning.md) — Terraplex competitive narrative and value-prop language
- [content/terminology.md](content/terminology.md) — word-level rules: preferred and forbidden terms
- [content/reusable-language.md](content/reusable-language.md) — quoted language from Terraplex corporate site, safe to reuse verbatim
- [content/content-exclusions.md](content/content-exclusions.md) — what must never appear on a dealer site
- [content/service-patterns.md](content/service-patterns.md) — reusable service structures (Sam Welton contact, service tiers, Part 107 prep)
- [content/pricing-policy.md](content/pricing-policy.md) — MAP policy, MSRP-only rule, kit-tier exposure rule
- [content/compliance-program.md](content/compliance-program.md) — Terraplex compliance program: Sam Welton, Part 137 services, Part 107 prep course

## Products

- [products/r-32.md](products/r-32.md) — R-32 official sell-sheet body copy
- [products/r-32.json](products/r-32.json) — R-32 structured product data
- [products/i-19.md](products/i-19.md) — I-19 official sell-sheet body copy
- [products/i-19.json](products/i-19.json) — I-19 structured product data

## Archetypes

- [archetypes/_index.json](archetypes/_index.json) — archetype catalog + which dealer owns which archetype+accent combo
- [archetypes/forge.md](archetypes/forge.md) — FORGE: dark, glow blobs, ember accents, full-bleed video hero
- [archetypes/tactical.md](archetypes/tactical.md) — TACTICAL: pure black, geometric precision, corner brackets, video hero
- [archetypes/terrain.md](archetypes/terrain.md) — TERRAIN: alternating light/dark bands, contour-line motifs
- [archetypes/clean.md](archetypes/clean.md) — CLEAN: white/gray-50 light theme, video hero with brand-tinted overlay
- [archetypes/field.md](archetypes/field.md) — FIELD: warm cream/amber palette, photographic hero (no video), organic shapes
- [archetypes/patriot.md](archetypes/patriot.md) — PATRIOT: flag-inspired graphics, diagonal stripes, star motifs

## Guidelines

- [guidelines/section-patterns.md](guidelines/section-patterns.md) — common dealer site section structure (Header, Hero, About, etc.)
- [guidelines/design-do-dont.md](guidelines/design-do-dont.md) — cross-archetype design rules
- [guidelines/typography.md](guidelines/typography.md) — Terraplex typography defaults (system stack, per-archetype overrides)

## Design (architectural docs)

- [design/propagation-v1.md](design/propagation-v1.md) — propagation architecture: how hub edits roll out to dealer sites
- [design/variance-strategy.md](design/variance-strategy.md) — component-library + treatment-spec model for dealer site variance

## Spoke (per-dealer schema)

- [spoke/spoke.schema.json](spoke/spoke.schema.json) — JSON Schema for `spoke.config.json`
- [spoke/questionnaire.json](spoke/questionnaire.json) — onboarding field definitions and allowed values
- [spoke/example.spoke.config.json](spoke/example.spoke.config.json) — reference spoke config (shape demo)

## Component library (design references)

- [component-library/README.md](component-library/README.md) — component-library schema, namespaces, curation criteria
- [component-library/hero/research/refero-ae84b62a-topographic-layered-bg.md](component-library/hero/research/refero-ae84b62a-topographic-layered-bg.md) — topographic-contour hero backdrop pattern (TERRAIN/FORGE/TACTICAL)
- [component-library/hero/research/refero-f619e700-centered-screenshot-trio.md](component-library/hero/research/refero-f619e700-centered-screenshot-trio.md) — centered light-hero with screenshot trio + benefit row (FIELD/CLEAN/TERRAIN)
- [component-library/product-block/research/refero-4bcd783f-alternating-pastel-stripes.md](component-library/product-block/research/refero-4bcd783f-alternating-pastel-stripes.md) — alternating full-bleed pastel stripes with ABABAB rhythm (CLEAN/TERRAIN/FIELD)

## Industry research

### Manufacturer profiles
- [research/manufacturers/terraplex.md](research/manufacturers/terraplex.md) — Terraplex Ag profile: parent brand, exclusive GTEEX Revolution distributor, 49-location dealer network, in-house compliance via Sam Welton (created 2026-05-01)
- [research/manufacturers/dji-agras.md](research/manufacturers/dji-agras.md) — DJI Agras profile: T-series lineup (T100/T70P/T50/T25/T30/T20/T10), FCC ruling, $1.5B exposure (last refreshed 2026-05-01)
- [research/manufacturers/hylio.md](research/manufacturers/hylio.md) — Hylio profile: AG-230/HYL-150 ARES, swarm throughput, $2M raise, Texas plant (last refreshed 2026-05-01)

### Dealer economics
- [research/dealer-economics/competitor-distributors.md](research/dealer-economics/competitor-distributors.md) — Agri Spray Drones, Bestway Ag, Rantizo: structural comparison vs Terraplex's distributor model

### Regulatory
- [research/regulatory/2026-04-update.md](research/regulatory/2026-04-update.md) — April 2026 regulatory roundup: USDA NPG-Ag launch, FAA Part 108 status, DJI appeal

### Daily digests
- [research/digests/2026-05-01.md](research/digests/2026-05-01.md) — Hylio $2M raise + DJI FCC $1.5B impact

### Schema
- [research/README.md](research/README.md) — research-layer schema, source allowlist, curation gate, deep-dive topic queue

## Synthesis (query → file-back outputs)

- [synthesis/new-heights-meeting-2026-05-01.md](synthesis/new-heights-meeting-2026-05-01.md) — Distilled outputs from BGD ↔ New Heights Ag monthly check-in: 2 new platform-feature gaps surfaced (AI Marketing Materials Automation; Trade Show Support Packages), per-dealer direct-to-live trust, industry signals on fertilizer/marketing channels.

## Raw sources

Two namespaces, different rules. See [raw/README.md](raw/README.md) for routine-fetched snapshots and [raw/manual-import/README.md](raw/manual-import/README.md) for human-curated reference materials.

**Currently in `raw/manual-import/`** (cited by wiki entries):
- competitors/agri-spray-drones, bestway-drones, dji-agriculture, rantizo (1 homepage snapshot each)
- competitors/terraplex-corporate (7 page snapshots: homepage, drones, find-a-dealer, terraplex-difference, compliance, test-prep, contact)
- gteex-terraplex (R-32 + I-19 sell-sheet PDFs converted to markdown)
