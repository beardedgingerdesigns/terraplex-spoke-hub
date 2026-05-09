# log/ — append-only routine log

Per-routine-run log files. Each entry is a separate file so parallel routines don't collide on bookkeeping writes.

## Filename schema

```
log/<YYYY-MM-DD>-<routine>.md            # daily routines
log/<YYYY-MM>-<routine>.md               # monthly routines
log/<YYYY-Q><n>-<routine>.md             # quarterly routines
```

Where `<routine>` is one of:

- `digest`              — industry-digest-daily
- `library-audit`       — curator-pass-component-library
- `hub-lint`            — hub-lint-weekly
- `monthly-intelligence` — industry-intelligence-monthly
- `deep-dive`           — industry-deep-dive-quarterly
- `manual`              — human edits made directly by Justin
- `migration`           — one-shot rewrites of structure (rare)
- `synthesis`           — one-off cross-domain analyses filed back from chat sessions

If two runs of the same routine on the same date are needed (rare), suffix with `-pass2`, `-pass3`, etc.

## Body schema

Each file is a single markdown document. Header uses the same format the old `log.md` used:

```
# [<YYYY-MM-DD>] <operation> | <title>

Branch `<branch-name>`. <one to three sentences of context>.

PR auto-opened by `.github/workflows/auto-pr.yml`.
```

Front-matter is optional but `routine:` and `branch:` may be useful for tooling later.

## Reading the recent record

Routines reading "tail of log" should:

```
ls log/ | sort -r | head -20
```

Then read the most recent few files.

## Rule

Never edit a prior entry. Re-classifying a past routine run = appending a new file that references the old one, not rewriting history.

## Archive

[`_archive.md`](_archive.md) holds the original `log.md` chronological record from before the per-file split (2026-04-30 through 2026-05-07). Frozen — do not edit.
