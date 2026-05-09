# Component library — catalog

Design references for dealer site sections. Patterns are stored archetype-neutrally under each section's `research/` directory; per-section catalogs below list every entry with a one-line takeaway.

See [README.md](README.md) for the schema (frontmatter, body sections, library-worthy criteria, filename conventions).

## Sections

- [hero/index.md](hero/index.md) — opening section patterns
- [product-block/index.md](product-block/index.md) — product / lineup / spec patterns
- [services/index.md](services/index.md) — services / programs / process patterns
- [contact/index.md](contact/index.md) — contact / support / triage patterns

## How to use this catalog

- **Dealer chat sessions:** for each section you're designing, list `component-library/<section>/research/` directly. Filter notes by `applicableArchetypes` / `incompatibleArchetypes` for the dealer's archetype. Read matching notes as primary references before calling Refero.
- **Curator-pass routine:** read each per-section index for inventory; write new notes to `component-library/<section>/research/refero-<screenId>-<slug>.md`; append the new note's line to the appropriate per-section index.
- **Hub-lint:** verifies on-disk research notes match per-section index entries; flags orphans and broken refs.

## Conventions

- **One Refero screen, one note.** Same `referoScreenId` already saved in a section → skip (or merge if substantively distinct).
- **Archetype-neutral framing.** "What to take" is written so any archetype can adapt; `applicableArchetypes` lists which archetypes the pattern fits, `incompatibleArchetypes` lists where it breaks.
- **Cross-references encouraged.** Link to sibling notes, the relevant `archetypes/<id>.md`, and related sections that compose into a page rhythm.
