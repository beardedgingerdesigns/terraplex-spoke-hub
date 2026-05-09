# [2026-05-09] migration | Pre-refactor PR backlog cleanup

Consolidated 13 stale `chore/library-audit-*` and `chore/digest-*` PRs that accumulated from 2026-05-05 → 2026-05-08 under the old (pre-refactor) bookkeeping schema. Each had been opened against the legacy `index.md` Component-library section + global `log.md`, both of which were restructured in commit `eb3d3d5`. Rebasing each PR individually would have surfaced 13 separate index/log conflicts on files that no longer exist; cherry-picking the unique research-note content into a single consolidated commit was strictly cheaper.

Branch: `chore/backlog-cleanup-2026-05-09` (auto-PR via `.github/workflows/auto-pr.yml`).

## What was salvaged (10 unique files)

**9 component-library research notes** (cherry-picked from PRs #38, #39, #45, #46, #47):

| Section | Screen ID | Slug | Source PR |
|---|---|---|---|
| contact | 1835be20 | single-storefront-store-page | #45 (chosen over #38's `single-location-showroom` variant — newer date, more structurally explicit, better-generalized slug) |
| contact | 3acf3200 | client-services-strip-appointment | #46 |
| contact | 45feb3a4 | live-chat-handoff | #47 |
| product-block | 0dea72da | product-data-passport | #47 |
| product-block | 8f7c3944 | guided-product-finder | #38 |
| product-block | 96bb6cc1 | feature-card-mosaic | #46 |
| product-block | f321a549 | benchmark-chart-proof | #47 |
| services | 638171bd | events-roadshow-landing | #39 |
| services | a52e1484 | protection-plan-explainer | #46 |

**1 industry digest** (cherry-picked from PR #48):

- `research/digests/2026-05-08.md` — FCC parallel comment windows (DJI ET Docket 26-22 + Autel ET Docket 26-23 reply comments due Monday 2026-05-11 under DA 26-223; "Unleashing American Drone Dominance" docket DA 26-314 also active)

Each file added is the verbatim content from the source PR; the cherry-picks did not edit the research notes themselves.

## What was closed without merging

**No-op PRs (audited; no changes):** #41, #37, #34 — all explicitly self-titled as healthy-idle passes from parallel-curator races. No content to salvage.

**Pure duplicates of already-merged d030e2b2 variants:** #42, #33, #43 — these only added `refero-d030e2b2-numbered-process-shopper.md` / `numbered-step-process.md` / `numbered-stepper-services.md`, all three of which were merged into the canonical `refero-d030e2b2-numbered-process-shopper.md` on 2026-05-04 (logged in [`_archive.md`](_archive.md)).

## Library counts after cleanup

| Section | Notes (before) | Adds this cleanup | Notes (after) |
|---|---|---|---|
| hero          | 17 | 0 | 17 |
| product-block | 11 | 4 | 15 |
| services      | 14 | 2 | 16 |
| contact       | 13 | 3 | 16 |
| **TOTAL**     | 55 | 9 | 64 |

Per-section indexes updated. Global `index.md` unchanged (it doesn't enumerate research notes — points to per-section catalogs).

## Why this was a one-shot, not the routine

The curator-pass routine writes incremental adds. This was a structural backlog cleanup tied to the 2026-05-09 [hub coordination refactor](../../../docs/wiki/decisions/implemented/2026-05-07-hub-coordination-refactor.md) — the closing of 13 PRs is part of the same migration event. Logged here as `migration` rather than `ingest` for that reason.

## Cross-references

- [HUB coordination refactor migration log](2026-05-09-migration.md) — sibling commit that defined the new structure.
- [Implemented decision doc](https://github.com/beardedgingerdesigns/terraplex-site-builder/blob/main/docs/wiki/decisions/implemented/2026-05-07-hub-coordination-refactor.md).
