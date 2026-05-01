# Terraplex Component Library

This directory holds reusable design references for Terraplex dealer sites. Two namespaces, used differently:

## `<section>/research/refero-<id>-<slug>.md` — runtime research notes

Curated by Claude Code during chat / design-foundation runs when Refero surfaces a transferable takeaway. Cheap to author at runtime, used as references by future design turns — **not** as production templates. Flat namespace within each section: archetype applicability is frontmatter metadata, not directory structure, so patterns can cross-pollinate across archetypes.

## `<section>/<treatment-name>.md` — authored treatment specs (future)

Reserved for the variance-strategy v1 authoring layer (see [hubs/terraplex/design/variance-strategy.md](../design/variance-strategy.md) §3). Each spec describes a coherent treatment with example HTML / CSS, allowed-archetype list, and required-data fields. **Authored by a human (Justin) during dedicated authoring sessions. Runtime never writes here.**

The two namespaces coexist by convention: research notes live inside `research/` subfolders; treatment specs sit flat at the section root.

---

## Sections

Mirrors the section taxonomy in [variance-strategy.md §4](../design/variance-strategy.md):

- `hero/`
- `product-block/`
- `services/`
- `contact/`

If a future section type joins the variance vocabulary, add its directory here.

## Archetypes

Used as frontmatter values, not directory names. Current set (from [hubs/terraplex/archetypes/](../archetypes/)):

`field`, `forge`, `tactical`, `clean`, `terrain`, `patriot`

---

## Research note schema

Filename: `refero-<screenId>-<short-slug>.md` inside the appropriate `<section>/research/` directory. Slug is 1–4 dash-separated words capturing the takeaway (e.g. `refero-12345-warm-photography.md`).

Frontmatter:

```yaml
---
referoScreenId: 12345
referoUrl: https://refero.design/screens/12345
section: hero                                  # one of: hero, product-block, services, contact
applicableArchetypes: [field, terrain]         # archetypes this can plausibly inform
                                               # omit if you're unsure — Claude judges per-context
incompatibleArchetypes: [forge, tactical]      # archetypes whose anti-patterns this would violate
                                               # optional — only fill if you can name a specific conflict
savedAt: 2026-05-01
savedFor: prairie-aerial                       # the dealer whose research surfaced this
tags: [photography, warm-palette, no-motion]   # descriptive tags
---
```

Body sections (in order):

```markdown
## Why this is library-worthy
1–2 sentences on the specific transferable takeaway.

## What to take
- Bullet list of design moves — written archetype-neutrally so multiple archetypes can adapt them.

## What NOT to take
- Bullet list of moves that would violate one or more archetypes' anti-patterns.
- Reference incompatibleArchetypes here with specifics (e.g. "the autoplay video would violate FIELD's no-motion rule").

## Adaptation notes (cross-archetype)
- Brief notes on translating the takeaway across archetypes.
- Example: "FIELD: keep the photography composition, swap the cool palette for warm cream/amber."
- Skip this section if "What to take" already covers it.

## Source brief
One line on what the original dealer was building (context for future readers).
```

---

## Library-worthy criteria (gate for saves)

A Refero screen earns a research note only if:

- It offers a **specific, transferable design move** — a layout pattern, typography pairing, or interaction. Not "looks nice."
- The takeaway is **articulable in archetype-neutral terms.** "Split-typographic with bold serif + tinted gradient" travels. "FORGE-specific glow blob arrangement" doesn't.
- It's **not a near-duplicate.** Same `referoScreenId` already in the section's `research/` → skip. Very similar takeaway already covered → skip (or augment the existing note rather than create a new one).
- If you can name an archetype this would violate, **say so** in `incompatibleArchetypes`. Better to flag than omit.

If a screen is a near-miss or only "interesting," do not save — Refero quota is not the same as library quota. Cluttering the cache makes future read-first turns slower and noisier.

---

## How runtime uses this library

Both `server/routes/chat.js` and `server/services/design-foundation.js` instruct Claude to:

1. **Read first.** Before calling Refero, list the relevant `<section>/research/` directory.
2. **Threshold ≥4.** If 4+ entries exist in that section, read them all and filter by `applicableArchetypes` / `incompatibleArchetypes` / adaptation notes for the current dealer's archetype.
3. **Skip Refero when satisfied.** If the cache has applicable entries, do not call Refero. Two exceptions:
   - User explicitly asks for fresh exploration ("find me something different")
   - After reading, no entries have applicable takeaways for the current dealer's brief
4. **Save curated notes after Refero calls.** Only library-worthy screens (per criteria above), one note per screen, archetype-neutral language.

Cosmetic edits (color tweaks, copy changes, spacing) skip both the cache and Refero.
