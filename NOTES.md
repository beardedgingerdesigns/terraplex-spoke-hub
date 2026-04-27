# Terraplex Hub — Working Notes

## Recent decisions

### 2026-04-23 — Structural fix: hub symlinked into every spoke's cwd

- Problem surfaced when a Black Knight chat session asked for Kit 1 / MSRP pricing. Claude correctly couldn't find it — **because Claude running with `cwd: sites/black-knight/` can only read files at or below cwd, and the hub physically lives at `../../hubs/`** (outside the site's git scope). The site's CLAUDE.md says "hub at `hubs/terraplex/`" but from Claude's perspective that path didn't exist.
- Fix: created `sites/<id>/hubs` symlink → `../../hubs` in all 5 dealer sites (`black-knight`, `great-river`, `new-heights`, `pyro-ag`, `trussservicesllc-com-com`). Each site's `.gitignore` now excludes `hubs/` so the symlink isn't committed to the dealer's own git repo.
- Also wired `linkHubIntoSite(sitePath)` into `scaffolding.js` — called from `createSite()` and from `scaffoldFormHandler()` so new sites and re-scaffolds get the symlink automatically.
- Verified: `grep -r msrp hubs/terraplex/products/ hubs/terraplex/content/` run from within `sites/black-knight/` now finds the `msrp` field + pricing-policy content that was invisible before.
- Not a hub content change. Version stays at 0.4.0.

**Implication for Phase 3 propagation:** downstream build/render steps spawned from inside a spoke can now trust `hubs/terraplex/...` paths. Production deployments don't carry the symlink (symlinks aren't committed) — production builds would need their own hub-resolution mechanism (or build from the manager repo's vantage point).

### 2026-04-23 — Truss Services LLC migrated to hub (pinned to v0.4.0)

- Fifth dealer onto the hub pattern. Previously built pre-hub with ~450 lines of Terraplex canon inlined in its CLAUDE.md.
- Wrote `sites/trussservicesllc-com-com/spoke.config.json`, validated against schema (archetype: `patriot`, 6 services, both drones, 3 additional equipment types, 1 competitor drone). First dealer on `patriot` archetype — registered in `archetypes/_index.json` → `takenBy` as `{ dealer: "trussservicesllc-com-com", accent: "#C8102E" }`.
- Stripped inlined hub content from CLAUDE.md; replaced with the hub-referencing pattern. CLAUDE.md dropped from 567 → ~150 lines.
- Added `CHANGELOG.md` with pre-migration customizations rolled forward as permanent overrides (two-row header layout, logo white-bleed treatment, dual-contact Tom+James surfacing, "Ground Support" naming, dedicated Ground Support catalog route, tone-calibration split, etc.).
- Pinned directly to v0.4.0 (latest) — immediately picks up the new MSRP fields and `pricing-policy.md`, both of which Truss originally surfaced as a pre-hub one-off.

### 2026-04-23 — Hub v0.4.0: MSRP + MAP policy canonicalization

- Added `msrp` object to `products/r-32.json` (`$72,000`) and `products/i-19.json` (`$46,250`) with `amount`, `formatted`, `label`, `disclaimer`, `source`, `usage` fields. Source: Jack Schroeder confirmation 2026-03-30.
- Added `content/pricing-policy.md` with full MAP rules: advertise MSRP only, no actual transaction prices or discount framing, no dealer cost / margin / sub-dealer pricing, no kit-tier exposure on public sites. Recommended treatment + concrete examples of compliant / non-compliant copy.
- Registered the new file in `HUB-CLAUDE.md` content table.

Why: MSRP + MAP policy was previously only documented in Truss's per-site NOTES.md (decided during their 2026-04-22 build). Four other dealers pinned to v0.3.0 had no access to it — they'd have to rediscover the numbers and the policy each time. Moving it into hub canon makes it propagable via the normal spoke-version-bump flow.

`hub.version` `0.3.0` → `0.4.0`. `schemaVersion` stays at `1` (additive change — spokes on 0.3.0 still validate, just don't see the new content until they bump).

**Propagation status:** No spoke has been bumped yet. Spokes on v0.3.0 (Pyro Ag, Black Knight, New Heights, Great River per their CLAUDE.md hub pins) continue to work unchanged. To surface MSRP on a dealer site, bump that spoke's `spoke.config.json` hub pin and re-run propagation — the `msrp` field is then available to product-spoke scaffolding and product-block rendering.

### 2026-04-19 — Hub v0.3.0: services list refinement

- Added two canonical services: `Cover Crop Seeding`, `Pest Management` (both were in hub reference material, omitted from Phase 1 canonical list in error)
- Added conservative normalization table at `spoke/questionnaire.json` → `normalizations.services` for 10 common near-exact variants (e.g. `Replacement Parts` → `Parts`, `Agricultural Drone Sales` → `Drone Sales`, `Custom Application` → `Custom Spraying/Application`)
- Updated `spoke/spoke.schema.json` services enum to match the canonical list
- Pyro Ag services array re-extracted under the new rules in the same phase: grew from `["Drone Sales"]` to 6 entries; 2 candidates still flagged for human review (`Routine Maintenance`, `Quick Response`)

Why: Phase 2 canary surfaced a 1-for-9 HTML→canonical match rate on Pyro Ag. About half the gap was canonical-list omissions (fixed); the other half was wording-level variants that are unambiguous in context (handled by the normalization table). Semantic and fuzzy matches still flag — conservative naming preserved.

`hub.version` `0.2.0` → `0.3.0`. `schemaVersion` stays at `1` (additive change — existing spoke configs on 0.2.0 still validate).

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
