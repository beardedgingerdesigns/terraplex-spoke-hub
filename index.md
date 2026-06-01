# Index

Global content catalog for the Terraplex hub. Manually-maintained content (products, archetypes, guidelines, content rules, schema docs) is listed below directly. **Bot-touched sections** (component library, daily digests) live under per-section catalogs to keep parallel routines from co-touching this file. The lint routine verifies coverage across all index files.

---

## Hub root

- [README.md](README.md) — high-level overview of what this hub is and how it fits into the BGD platform
- [HUB-CLAUDE.md](HUB-CLAUDE.md) — Claude Code session instructions, architectural ground rules, file-authority map, wiki operations
- [NOTES.md](NOTES.md) — working memory: recent decisions, open questions, follow-ups
- [feature-gaps.md](feature-gaps.md) — platform capability gaps and editorial restrictions
- [hub.json](hub.json) — hub manifest (name, version, schemaVersion)
- [assets.json](assets.json) — URL manifest; the ONLY place raw URLs live in the hub
- [log/](log/) — append-only chronological record of ingests / queries / lints (one file per routine run; see [log/README.md](log/README.md))

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
- [guidelines/imagery-direction.md](guidelines/imagery-direction.md) — creative-director brief: how to pick imagery from `assets.json` pools (hero / product / lifestyle / logo); read before any image choice

## Design (architectural docs)

- [design/propagation-v1.md](design/propagation-v1.md) — propagation architecture: how hub edits roll out to dealer sites
- [design/variance-strategy.md](design/variance-strategy.md) — component-library + treatment-spec model for dealer site variance

## Spoke (per-dealer schema)

- [spoke/spoke.schema.json](spoke/spoke.schema.json) — JSON Schema for `spoke.config.json`
- [spoke/questionnaire.json](spoke/questionnaire.json) — onboarding field definitions and allowed values
- [spoke/example.spoke.config.json](spoke/example.spoke.config.json) — reference spoke config (shape demo)

## Component library (design references)

- [component-library/index.md](component-library/index.md) — umbrella catalog. Per-section indexes inside list every research note with a one-line takeaway:
  - [component-library/hero/index.md](component-library/hero/index.md) — opening section patterns
  - [component-library/product-block/index.md](component-library/product-block/index.md) — product / lineup / spec patterns
  - [component-library/services/index.md](component-library/services/index.md) — services / programs / process patterns
  - [component-library/contact/index.md](component-library/contact/index.md) — contact / support / triage patterns
- [component-library/README.md](component-library/README.md) — schema, namespaces, curation criteria

## Industry research

### Manufacturer profiles
- [research/manufacturers/terraplex.md](research/manufacturers/terraplex.md) — Terraplex Ag profile: parent brand, exclusive GTEEX Revolution distributor, 49-location dealer network, in-house compliance via Sam Welton (created 2026-05-01)
- [research/manufacturers/dji-agras.md](research/manufacturers/dji-agras.md) — DJI Agras profile: T-series lineup (T100/T70P/T50/T25/T30/T20/T10), FCC ruling, $1.5B exposure (last refreshed 2026-05-01)
- [research/manufacturers/hylio.md](research/manufacturers/hylio.md) — Hylio profile: AG-230/HYL-150 ARES, swarm throughput, $2M raise, Texas plant (last refreshed 2026-05-01)
- [research/manufacturers/xag.md](research/manufacturers/xag.md) — XAG profile: V40/P40/P100/P100 Pro/P150 lineup, Pegasus Robotics + Rantizo US channel, FCC Covered List exposure parallel to DJI (created 2026-06-01)
- [research/manufacturers/yamaha.md](research/manufacturers/yamaha.md) — Yamaha profile: R-MAX / FAZER heritage spray helicopters (2,800 global installed base), January 2025 Yamaha Agriculture US launch (Bay Area HQ, Robotics Plus + The Yield acquisitions), Prospr ground-autonomy pivot (created 2026-06-01)

### Dealer economics
- [research/dealer-economics/competitor-distributors.md](research/dealer-economics/competitor-distributors.md) — Agri Spray Drones, Bestway Ag, Rantizo: structural comparison vs Terraplex's distributor model

### Regulatory
- [research/regulatory/2026-04-update.md](research/regulatory/2026-04-update.md) — April 2026 regulatory roundup: USDA NPG-Ag launch, FAA Part 108 status, DJI appeal
- [research/regulatory/2026-05-update.md](research/regulatory/2026-05-update.md) — May 2026 regulatory roundup: FCC DA 26-454 firmware-waiver extension to 2029, FAA Section 2209 NPRM (Docket FAA-2026-4558, comments due July 6), DJI/Autel reconsideration window closed, Texas AG Drone Nerds CID, AUVSI XPONENTIAL policy alignment

### Daily digests
- [research/digests/index.md](research/digests/index.md) — daily industry digests catalog (newest-first; one-line summary per digest)

### Schema
- [research/README.md](research/README.md) — research-layer schema, source allowlist, curation gate, deep-dive topic queue

## Synthesis (query → file-back outputs)

- [synthesis/new-heights-meeting-2026-05-01.md](synthesis/new-heights-meeting-2026-05-01.md) — Distilled outputs from BGD ↔ New Heights Ag monthly check-in: 2 new platform-feature gaps surfaced (AI Marketing Materials Automation; Trade Show Support Packages), per-dealer direct-to-live trust, industry signals on fertilizer/marketing channels.

## Diagnostics

- [_diagnostic/2026-05-01-gh-probe.md](_diagnostic/2026-05-01-gh-probe.md) — one-shot probe documenting that the `gh` CLI is unavailable in the routine sandbox; explains why routines push branches and rely on `auto-pr.yml` rather than calling `gh pr create`

## Raw sources

Two namespaces, different rules. See [raw/README.md](raw/README.md) for routine-fetched snapshots and [raw/manual-import/README.md](raw/manual-import/README.md) for human-curated reference materials.

**Currently in `raw/manual-import/`** (cited by wiki entries):
- competitors/agri-spray-drones, bestway-drones, dji-agriculture, rantizo (1 homepage snapshot each)
- competitors/terraplex-corporate (7 page snapshots: homepage, drones, find-a-dealer, terraplex-difference, compliance, test-prep, contact)
- gteex-terraplex (R-32 + I-19 sell-sheet PDFs converted to markdown; **2026 I-19 operator manual V1.3** (55 pp) + **2026 I-19 technical manual V1.0** (308 pp) — both converted to structured markdown wiki entries; user-manual PDF committed, tech-manual PDF gitignored due to 36 MB size)
