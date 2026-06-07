# [2026-05-09] migration | Hub coordination refactor

Restructured the hub's bookkeeping layer to eliminate the bot-PR conflict cascade documented in [the deferred decision](https://github.com/beardedgingerdesigns/terraplex-site-builder/blob/main/docs/wiki/decisions/deferred/2026-05-07-hub-coordination-refactor.md).

**What changed:**

- Split `index.md` Component-library + Daily-digests sections into per-section catalogs:
  - `component-library/index.md` (umbrella)
  - `component-library/{hero,product-block,services,contact}/index.md` (per-section)
  - `research/digests/index.md` (digest-only catalog)
- Global `index.md` shrunk to a "catalog of catalogs" for the bot-touched sections; manually-maintained sections (Hub root, Brand and content, Products, Archetypes, Guidelines, Design, Spoke, Manufacturer profiles, Dealer economics, Regulatory, Synthesis, Diagnostics, Raw sources) stay in the global file as before.
- `log.md` → `log/` directory. Old `log.md` frozen as `log/_archive.md` (2026-04-30 → 2026-05-07 entries; never edited again). New per-routine-per-day files in `log/<YYYY-MM-DD>-<routine>.md`.
- `WIKI-CLAUDE.md` wiki-operations section updated to reflect the new schema.

**Routine prompt updates** (in the manager-app repo at `docs/routines/`):
- Curator-pass writes new component-library notes to the appropriate per-section index, not global `index.md`.
- Industry-digest writes to `research/digests/index.md`, not global `index.md`.
- Hub-lint walks all index.md files (global + per-section), not just the global one.
- All routines write log entries to `log/<YYYY-MM-DD>-<routine>.md`, not appending to `log.md`.

**What did not change:**

- Research note files themselves (`component-library/<section>/research/refero-*.md`, `research/digests/*.md`) — same paths, same content. Dealer chat sessions and `design-foundation.js` continue listing these directories directly; no read-path change.
- Archetype recipes, products, content, guidelines, spoke schema — all untouched.
- Auto-PR workflow (`.github/workflows/auto-pr.yml`) — unchanged.

**Cron change** (out of scope for this commit, must be applied separately at claude.ai/code/routines): drop curator-pass cadence from 4×/day to 1×/day per the saturation signal the library has been emitting since 2026-05-04.

**Why this fixes the cascade:** parallel routines no longer co-touch `index.md` or `log.md`. Each writes only to its own per-section index and its own per-day log file. ~80% of the conflicts the 2026-05-07 cleanup session encountered were on those two files.

Branch `chore/hub-coordination-refactor`. Migration committed manually by Justin (no auto-PR — this is a structural change, not a routine run). Cross-references: [the deferred decision doc](https://github.com/beardedgingerdesigns/terraplex-site-builder/blob/main/docs/wiki/decisions/deferred/2026-05-07-hub-coordination-refactor.md), [WIKI-CLAUDE.md](../WIKI-CLAUDE.md), [_archive.md](_archive.md).
