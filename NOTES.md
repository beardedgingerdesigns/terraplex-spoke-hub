# Terraplex Hub — Working Notes

## Recent decisions

### 2026-04-19 — Hub v0.2.0: spoke schema refinement

Following Pyro Ag dry run, five schema fixes applied before Phase 2 migration:

- `identity.tagline` now optional (most dealers have one headline, not two)
- `identity.accentColor` (string) replaced with `identity.accent` (object with `primary`/`secondary`/`mode`) to accommodate gradient and dual-color dealer brand systems (Pyro Ag uses gradient `#ea580c → #dc2626`; Great River has two equal-weight colors)
- `formFields` changed from enum (`basic`/`qualified`) to object (`{ base, extraFields[] }`) to accommodate dealer form variations (Pyro Ag's Interest dropdown)
- `referenceSites` (optional array) added to top-level spoke config
- `story.founded` and `story.ownerBio` made optional; only `notableFacts` remains required in `story`

Why: surfaced during paper dry-run of Pyro Ag migration. Fixing on paper before Phase 2 avoids migrating four live dealers against a schema we'd then refactor.

No real spokes exist yet, so breaking changes are safe. `hub.json` version bumped `0.1.0 → 0.2.0`. `schemaVersion` stays at `1` (directory structure unchanged).

`HUB-CLAUDE.md` scanned for literal references to `accentColor`, `"basic"`, `"qualified"` — none found. Left untouched.

### Earlier (2026-04-19) — v0.1.0

- Initial hub scaffold created. Migrated `[HUB]`-tagged content from the manager app's `site-template-CLAUDE.md` into structured files per Phase 1 briefing. Preserved product specs, archetype descriptions, positioning language, and terminology verbatim.
- Worked from `site-template-CLAUDE.md` directly; neither `site-template-CLAUDE-marked.md` nor `terraplex-platform-thesis.md` existed in the manager app repo at the time of migration. Used the briefing's ground rules to judge hub-vs-platform-vs-spoke placement.
- Asset URL strategy: all Terraplex shared URLs are consolidated in `assets.json`. Every other file in the hub references assets by logical name (e.g. `heroVideo`, `r32SpecSheet`) — no raw URLs anywhere else.

## Open questions

- **I-19 product image** — currently reuses `heroPoster` URL. Briefing confirms this is intentional, not a bug, but worth revisiting with the owner when a dedicated I-19 product image exists.
- **Typography override for `field` archetype** — briefing notes `field` permits a display serif. Hub has no specific font recommendation yet; left to dealer/Claude decision during onboarding.

## Follow-ups

- Phase 2 — migrate the 4 existing dealer site repos (`pyro-ag`, `black-knight`, `new-heights`, `great-river`) to reference this hub via a `spoke.config.json` file. That will also validate the `spoke.schema.json`.
- Phase 2 — decide fate of `data/site-template-CLAUDE.md` in the manager app (likely deprecated in favor of hub + spoke + platform scaffolder).
- When the hub gets its first content bump, document the version-bump + dealer-upgrade flow in `HUB-CLAUDE.md` (currently just a warning).
