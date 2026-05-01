# Manual-import raw snapshots

Parallel namespace to `raw/<domain>/<date>-<slug>.md` (the routine-fetched layer). This namespace holds **human-curated reference materials** that were imported manually rather than fetched by a scheduled routine.

## Different rules from the routine namespace

| Property | `raw/<domain>/...` (routine-fetched) | `raw/manual-import/...` (this namespace) |
|---|---|---|
| Source | WebFetch from a routine | Local file in `/reference/` (manager-app), one-shot human curation, or other manual capture |
| Date in filename | The fetch date (UTC) | The date the source was originally created or captured (may be different from the import date) |
| `fetchedBy` frontmatter | Routine name (e.g., "Industry digest — daily") | `manual-import` or the originating session |
| Immutability rule | Yes — never edit after creation | Yes — never edit after creation |
| Lint treatment | Walks for orphans; cited by `localCopy` | Same |

## Layout

```
raw/manual-import/
├── README.md                              # this file
├── competitors/
│   ├── agri-spray-drones/<date>-<slug>.md
│   ├── bestway-drones/...
│   ├── dji-agriculture/...
│   ├── rantizo/...
│   └── terraplex-corporate/<date>-<page>.md
└── gteex-terraplex/
    ├── <year>-r-32-sell-sheet.md
    └── <year>-i-19-sell-sheet.md
```

Subdirectory naming follows the source domain or originating brand, normalized to lowercase-with-dashes. The `gteex-terraplex/` subdirectory uses dashes instead of the colon in the original `/reference/gteex:terraplex/` to keep paths cross-platform-safe (colons are reserved on some filesystems).

## When to import vs. when to skip

The `/reference/` directory in the manager-app repo is gitignored — it accumulates source materials Justin captures via web scrapes, sell sheets, meeting transcripts, etc. **Importing** here means the material is referenced by at least one wiki entry's `sources[*].localCopy`. Materials that aren't cited shouldn't be imported — that's bloat.

Specifically, **do not** import without a citing wiki entry:
- Meeting transcripts (sensitive, ephemeral)
- Onboarding questionnaires that duplicate already-captured spoke configs
- Marketing assets (logos, hero photos) — these go through `assets.json`, not raw/

## Frontmatter schema

Same as `raw/README.md`'s schema with the `fetchedBy` field reflecting the import context:

```yaml
---
sourceUrl: https://terraplexag.com (or filesystem path if no URL)
domain: terraplexag.com (or "manual" if filesystem-only)
fetchedAt: 2026-05-01T...Z   # date of import to this repo
fetchedBy: manual-import
title: "<page title or document name>"
---

[markdown body — preserve original content; don't summarize or rewrite]
```

## Cross-references

- Routine-fetched namespace conventions: [raw/README.md](../README.md)
- Wiki entries that cite this namespace: search for `localCopy: raw/manual-import` across the wiki
