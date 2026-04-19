# Terraplex Hub — Working Notes

## Recent decisions

- **2026-04-19** — Initial hub scaffold created (v0.1.0). Migrated `[HUB]`-tagged content from the manager app's `site-template-CLAUDE.md` into structured files per Phase 1 briefing. Preserved product specs, archetype descriptions, positioning language, and terminology verbatim.
- **2026-04-19** — Worked from `site-template-CLAUDE.md` directly; neither `site-template-CLAUDE-marked.md` nor `terraplex-platform-thesis.md` existed in the manager app repo at the time of migration. Used the briefing's ground rules to judge hub-vs-platform-vs-spoke placement.
- **2026-04-19** — Asset URL strategy: all Terraplex shared URLs are consolidated in `assets.json`. Every other file in the hub references assets by logical name (e.g. `heroVideo`, `r32SpecSheet`) — no raw URLs anywhere else.

## Open questions

- **Pyro Ag accent color source of truth** — briefing and template both list `#ea580c` (Tailwind orange-600). Should be confirmed against Pyro Ag's actual site during Phase 2 migration.
- **I-19 product image** — currently reuses `heroPoster` URL. Briefing confirms this is intentional, not a bug, but worth revisiting with the owner when a dedicated I-19 product image exists.
- **Typography override for `field` archetype** — briefing notes `field` permits a display serif. Hub has no specific font recommendation yet; left to dealer/Claude decision during onboarding.

## Follow-ups

- Phase 2 — migrate the 4 existing dealer site repos (`pyro-ag`, `black-knight`, `new-heights`, `great-river`) to reference this hub via a `spoke.config.json` file. That will also validate the `spoke.schema.json`.
- Phase 2 — decide fate of `data/site-template-CLAUDE.md` in the manager app (likely deprecated in favor of hub + spoke + platform scaffolder).
- When the hub gets its first content bump, document the version-bump + dealer-upgrade flow in `HUB-CLAUDE.md` (currently just a warning).
