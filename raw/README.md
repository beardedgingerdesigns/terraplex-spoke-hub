# Raw sources

Preserved markdown snapshots of cited URLs. Insulates the wiki against citation rot when articles get paywalled, manufacturers rebuild their sites, or trade publications take stories down.

**Authoritative copy is the live URL.** This is a fallback for archival, comparison-over-time, and reading the original context after the link breaks.

---

## Immutability rule

**Never edit a raw file after creation.**

Re-snapshotting an article at a later date = create a new file with a new date prefix, not a rewrite.

This is the single non-negotiable rule for this directory. The point of `raw/` is that it's a faithful record of what the source said *at the time of fetch*. Editing it to "fix" something defeats the purpose.

---

## Naming convention

`raw/<domain>/<YYYY-MM-DD>-<short-slug>.md`

- `<domain>` matches the URL host with no www prefix. Examples: `agfundernews.com`, `enterprise.dji.com`, `hylio.com`, `reddit.com`.
- `<YYYY-MM-DD>` is the date the snapshot was fetched (the routine's run date).
- `<short-slug>` is 2–5 dash-separated words capturing the article's subject. Derived from the URL path or article title.

Examples:
- `raw/agfundernews.com/2026-05-01-hylio-startengine-2m-raise.md`
- `raw/enterprise.dji.com/2026-05-01-agras-product-page.md`
- `raw/faa.gov/2026-04-15-part-137-rule-update.md`

If the same URL is snapshotted multiple times (e.g., a manufacturer's product page checked monthly to catch silent updates), each snapshot gets its own dated file. The wiki entry usually cites the most recent.

---

## Per-snapshot frontmatter

```yaml
---
sourceUrl: https://agfundernews.com/ag-spray-drone-co-hylio-raises-2m-...
domain: agfundernews.com
fetchedAt: 2026-05-01T11:23:00Z   # ISO 8601 UTC
fetchedBy: Industry digest — daily   # routine name OR "manual" if Justin saved it
title: "Original article title from the page's <title> tag"
---

[markdown conversion of the article body, headings preserved]
```

---

## How wiki entries reference raw snapshots

In a wiki entry's `sources:` frontmatter, add a `localCopy:` field pointing at the raw file:

```yaml
sources:
  - url: https://agfundernews.com/ag-spray-drone-co-hylio-raises-2m-...
    accessedAt: 2026-05-01
    localCopy: raw/agfundernews.com/2026-05-01-hylio-startengine-2m-raise.md
```

The `localCopy` path is relative to the hub root. If the snapshot file goes missing or was never created, the wiki entry can omit `localCopy` — only the live URL is required.

---

## Two namespaces

This directory has **two parallel namespaces** with different rules:

| Path | Source | When to use |
|---|---|---|
| `raw/<domain>/<date>-<slug>.md` | Routine-fetched (digest, intelligence, deep-dive) | Routines populate this automatically |
| `raw/manual-import/<...>` | Human-curated reference materials | One-shot imports from local sources, archives, sell sheets — see [`raw/manual-import/README.md`](manual-import/README.md) |

Both namespaces share the same immutability rule and cite-via-`localCopy` mechanic. The split is about *who created the snapshot*, not how it's used.

## Routine integration

Every `WebFetch` call in the digest, intelligence, and deep-dive routines must:

1. **Save a snapshot to `raw/<domain>/<slug>.md` BEFORE writing the wiki entry**
2. **Reference the snapshot via `localCopy` in the wiki entry's `sources:`**
3. **Skip the re-fetch if the URL was already snapshotted today** (check by listing `raw/<domain>/<YYYY-MM-DD>-*` and grepping for the URL in frontmatter)

---

## Lint routine treatment

The `Hub lint — weekly` routine walks `raw/` to find:

- **Orphans**: snapshots no wiki entry cites. Candidates for removal if older than 90 days. Always reported, never auto-deleted (you might add a citation to a recent entry the lint hasn't seen yet).
- **Broken `localCopy` links**: wiki entries citing a `localCopy:` path that doesn't exist. Either the snapshot was deleted (recreate it from the live URL if reachable) or the path was typed wrong (fix the wiki entry).
- **Stale snapshots**: `raw/` files older than 12 months that haven't been refreshed; the wiki entry citing them is at risk of being out of date.

---

## Repo-size policy

Markdown conversions are typically 10–50 KB. At ~3 snapshots/day from the daily digest plus occasional intelligence-pass snapshots, this layer grows ~10 MB/year — well within reasonable git repo bounds for several years.

If size becomes an issue, the lint routine can suggest oldest-N orphan removals. Don't preemptively prune; raw/ is cheap insurance against link rot.
