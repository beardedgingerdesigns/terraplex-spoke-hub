# Variance Strategy v1

*Draft v0.1 — April 21, 2026*
*Location: `hubs/terraplex/design/variance-strategy.md`*

This document describes how dealer site variance grows over time without blocking Phase 3 propagation work. It's forward-looking and deliberately non-blocking: nothing in here changes the four existing dealers; nothing here depends on Phase 3 landing first; and nothing here is urgent.

The document is Terraplex-hub-specific. A second manufacturer's hub could adopt, adapt, or reject the approach — variance philosophy is plausibly per-brand. Terraplex's dealer network benefits from distinctiveness; a different manufacturer might prefer uniformity for brand consistency.

---

## 1. The "templated" observation

Phase 2.x completed with all four Terraplex dealer sites migrated to hub v0.3.0. Viewed side by side as of April 2026, they feel templated despite using four different archetypes (FORGE, TACTICAL, TERRAIN, CLEAN) and four different accent colors.

The visible pattern: every site opens with a full-viewport hero treatment, transitions through an About section, presents R-32 and I-19 as alternating product blocks (image + stats + copy), presents services as a card grid, and closes with a contact section above a footer. Archetype-level differences shift the visual skin (dark vs light, geometric vs organic, corner brackets vs contour lines), but the structural rhythm is the same everywhere. A visitor to two dealer sites recognizes them as variations of a template.

This is not a problem for any single dealer. It is a problem for the dealer network — the aspirational positioning is that these are independently-branded, distinctive sites, not a family of template variants. "Colors and archetypes" is a shallow variance floor; real variance requires that different dealers make different component-level choices.

The observation is specifically about level 2 and level 3 of this three-level model:

- **Level 1 — Information architecture.** What sections exist on the site. Every dealer has hero, about, products, services, contact, footer in some form. This is mostly correct and shouldn't change — those sections serve real conversion goals.
- **Level 2 — Component vocabulary.** How a section renders. "Product section" can be a stat-card grid, exploded-diagram, comparison table, orbital-stats layout, or many others. Currently all four dealers draw from a narrow corner of this vocabulary.
- **Level 3 — Section treatment.** Within a chosen component, specific rendering choices. Card count, layout direction, accent placement, density. Currently dealers of the same archetype produce near-identical treatments.

Variance at level 1 is rare and deliberate (Great River's "tendering equipment" section as an example). Variance at levels 2 and 3 is what's missing.

---

## 2. The goal

Produce a Terraplex dealer network where, by the time there are ten dealers, a visitor cannot identify the shared platform from visual inspection alone. Each dealer site reads as a bespoke production.

The constraint is that this must happen without:

- Abandoning the hub/spoke architecture (variance cannot undermine the consistency floor that lets propagation work)
- Requiring per-dealer bespoke creative work at generation time (would destroy the economics)
- Adding a runtime external dependency (would violate thesis architectural bet)
- Introducing component-level variance that varies silently per generation run (non-deterministic output is worse than templated output)

The productive path, committed in earlier discussion: archetypes prescribe a *set* of allowed treatments for each section type. Dealer spoke config picks from the archetype's set. Hub canonical specifies the data; archetype specifies the treatment vocabulary; spoke picks within vocabulary. Variance grows by authoring new treatments into archetype vocabularies, not by loosening the discipline.

---

## 3. The component library concept

Variance materials live in a curated internal library at `hubs/terraplex/component-library/`.

Each file in the library is a markdown spec of a treatment pattern. Each spec includes:

- Human-readable name and short description
- Allowed archetypes (which visual contexts this fits)
- Required data fields (what hub-owned data this treatment consumes)
- Example HTML + CSS showing the treatment rendered
- Usage notes (when to pick this vs. a sibling pattern)
- Provenance (where the inspiration came from — Refero URL, a reference site, internal iteration)

A sketch of the eventual tree:

```
hubs/terraplex/component-library/
├── README.md
├── hero/
│   ├── full-bleed-video.md         # FORGE, TACTICAL, CLEAN
│   ├── split-typographic.md        # TERRAIN, CLEAN
│   ├── field-photograph.md         # FIELD
│   └── flag-panel.md               # PATRIOT
├── product-block/
│   ├── stat-card-grid.md           # FORGE (Pyro Ag reference)
│   ├── circular-concentric.md      # TACTICAL (Black Knight reference)
│   ├── asymmetric-12col.md         # TERRAIN (New Heights reference)
│   ├── equal-column-cards.md       # CLEAN (Great River reference)
│   ├── exploded-diagram.md         # TACTICAL alt, FIELD alt (future)
│   ├── comparison-table.md         # CLEAN alt, PATRIOT alt (future)
│   └── orbital-stats.md            # FORGE alt, TACTICAL alt (future)
├── services/
│   ├── card-grid.md                # most archetypes (current default)
│   ├── accordion.md                # CLEAN, TERRAIN
│   ├── numbered-process.md         # TACTICAL, FIELD
│   └── two-column-prose.md         # FIELD, CLEAN
├── contact/
│   ├── two-column-split.md         # current universal default
│   ├── inline-form.md              # CLEAN
│   ├── full-page-form.md           # PATRIOT
│   └── map-embedded.md             # FIELD, TERRAIN
└── ...
```

Each section type gets a folder. Each folder starts with the treatment(s) currently in production (extracted from the four migrated dealers) and grows over time.

The library is the authoring surface for variance. When inspiration strikes — from Refero research, from a competitor site worth emulating, from a BGD internal experiment — the result is committed to the library. Generation consumes the library at that point on.

---

## 4. Seeding the library from existing dealers

v0.1 of the library doesn't need new authorship. The four migrated dealers already use four distinct treatments for product blocks, at least two distinct treatments for heroes, and close variants for services. Extracting what exists gives a free starting library.

Proposed seed content (estimated from Phase 2.x observations):

| Section | Variant | Extracted from |
|---|---|---|
| hero/full-bleed-video | | Pyro Ag, Black Knight, New Heights (similar treatments) |
| hero/split-typographic | | (Great River's treatment is close but not fully split) |
| product-block/stat-card-grid | | Pyro Ag |
| product-block/circular-concentric | | Black Knight |
| product-block/asymmetric-12col | | New Heights |
| product-block/equal-column-cards | | Great River |
| services/card-grid | | all four (with archetype-specific card styling) |
| contact/two-column-split | | all four (with treatment variations) |

That's seven unique treatments across three section types, documented in a day or two of extraction work. Enough to start the library without any new authorship. Subsequent variants come from future research or new-dealer onboarding moments.

A key implication: each existing dealer's rendered site becomes a canonical reference for one or more library entries. When a future dealer picks `product-block/circular-concentric`, "look at Black Knight for how this renders in production" becomes a literal statement, not a hand-wave.

---

## 5. Archetype-to-component mapping

Currently each archetype has a prose description of its visual identity. After variance strategy lands, each archetype also declares which treatment variants it permits for each section type.

Conceptually (the exact shape lives in the archetype files, not in this doc):

```
archetype FORGE permits:
  hero: full-bleed-video, split-typographic
  product-block: stat-card-grid, orbital-stats, exploded-diagram
  services: card-grid, numbered-process
  contact: two-column-split, inline-form

archetype TACTICAL permits:
  hero: full-bleed-video
  product-block: circular-concentric, exploded-diagram, comparison-table
  services: card-grid, numbered-process
  contact: two-column-split

archetype CLEAN permits:
  hero: full-bleed-video, split-typographic
  product-block: equal-column-cards, comparison-table
  services: card-grid, accordion, two-column-prose
  contact: two-column-split, inline-form

...
```

Three rules for how this catalog grows:

1. **Archetypes own their permission lists.** Adding a variant to an archetype is a deliberate editorial decision (does `numbered-process` fit the FIELD aesthetic?), not automatic. Editing happens in the archetype file itself.
2. **A variant can belong to multiple archetypes.** `full-bleed-video` fits FORGE, TACTICAL, TERRAIN, and CLEAN. No duplication — the variant spec is one file; multiple archetypes reference it.
3. **Each archetype has defaults per section.** If a dealer's spoke config doesn't specify a treatment, the archetype's default for that section applies. This preserves smooth onboarding — no dealer is forced to make every component choice at spoke creation time.

---

## 6. How spoke config changes

Variance adds an optional `components` block to `spoke.config.json`:

```json
{
  "hub": { "name": "terraplex", "version": "0.4.0" },
  "dealer": { ... },
  "identity": { "archetype": "forge", ... },
  "drones": [...],
  "services": [...],
  "story": { ... },
  "components": {
    "hero": "full-bleed-video",
    "productBlock": "stat-card-grid",
    "services": "card-grid",
    "contact": "two-column-split"
  },
  ...
}
```

Rules:

- `components` is optional at the top level. A spoke config without it uses the archetype's defaults.
- Each property within `components` is optional individually. A spoke can specify `productBlock` and let everything else default.
- Each value must be a variant that the spoke's archetype permits. Schema validation enforces this.
- Changing a `components` value is an editorial act — it changes how that dealer's site renders. Not something to change casually; worth a `CHANGELOG.md` entry when it happens.

The schema change is additive and backward-compatible: existing spoke configs without the `components` block remain valid, because all four existing dealers already use their archetype's eventual-default treatments.

---

## 7. The research workflow

Variance grows by authoring new variants into the library. The workflow is:

1. **A human (typically Justin) encounters an interesting pattern.** Sources: Refero browsing, a competitor site, a dribbble shot, a memory from prior client work, an idea during a dealer onboarding conversation.
2. **The pattern is evaluated against the archetype system.** Does this fit an existing archetype's aesthetic? Is it a new section-type altogether? Could multiple archetypes use this?
3. **If it passes evaluation, it gets authored into the library.** A new markdown file in the appropriate section folder, with name, description, archetypes, required fields, example HTML/CSS, and provenance.
4. **The corresponding archetype file(s) get updated to permit the new variant.** Editorial act — the archetype owner (currently Justin) decides.
5. **New dealers onboarded after this point can choose the new variant.** Existing dealers don't retroactively get it; their `components` block stays what it was unless explicitly changed.

**Refero's role is step 1, not step 3 or later.** Refero is a research tool, consulted by a human during variant authoring. Generation at propagation or dealer-scaffolding time reads only the committed library. Claude Code does not query Refero at runtime. This preserves the architectural constraints (deterministic generation, no runtime external dependency).

**The commitment Refero-use represents.** Any Refero-sourced pattern added to the library is a copy-and-adapt, not a direct embed. The variant file in the library should describe the pattern in BGD's own words, with HTML/CSS that BGD wrote (potentially inspired by what Refero showed). Refero is explicit inspiration; the library is original implementation.

---

## 8. Compatibility with Phase 3 propagation

Variance strategy and Phase 3 propagation are orthogonal. Neither depends on the other; neither interferes with the other.

**Propagation sees data, not treatment.** Phase 3 identifies hub-owned sections via markers, updates data fields within those sections per the reconciliation tags, and ignores treatment entirely. Whether Pyro Ag's R-32 block renders as a stat-card grid or an exploded diagram is invisible to propagation — as long as the data fields are identifiable within the marked range, propagation works the same way.

**Variance adds treatment diversity, not propagation complexity.** When Black Knight's spoke config eventually reads `"productBlock": "exploded-diagram"`, Black Knight's rendered HTML changes shape (regenerated once, at component-change time). But the hub-owned data fields within that HTML — spec values, CTA labels, benefits — are still identifiable via markers, still tagged for reconciliation per Section 5 of the propagation doc, still propagate the same way.

**The interaction worth naming.** Changing a dealer's component choice (via the spoke config's `components` block) is a regeneration event for that dealer's HTML within the chosen section. This is distinct from propagation, which is an update event on existing HTML. The two operations:

- Component-change (regeneration): "Black Knight wants to switch productBlock from circular-concentric to exploded-diagram." The manager app regenerates the R-32 and I-19 section HTML from the new variant template, inserts current hub data, commits. New CHANGELOG entry documenting the treatment change.
- Propagation (update): "Hub canonical R-32 tank updated from 32 to 34 gallons." The manager app finds the tank value in Black Knight's current HTML (whatever treatment), updates it, commits. New CHANGELOG entry documenting the data change.

Neither operation breaks the other. A dealer can have their component changed this week and have hub content propagated next week, in any order, any number of times.

---

## 9. Rollout path

Variance strategy is deliberately non-urgent. Phase 3 propagation is the priority; variance is the parallel track.

**Immediate (as time allows, not blocking anything):**
- Seed the library by extracting the treatments present on the four existing dealer sites
- Document the seeded variants with their example HTML/CSS copied from the current production sites
- Update archetype files to declare their default variant per section

**Near-term (when the next new dealer onboards):**
- The onboarding process starts using the `components` block in spoke config
- New dealer picks from archetype-permitted variants; if none feel right, that onboarding conversation surfaces a new variant that gets authored into the library
- Onboarding becomes the primary moment of library growth

**Medium-term (opportunistic, months):**
- Periodic library expansion from Refero research — dedicated authoring sessions, not tied to a specific dealer
- Existing dealers may be revisited with "want to try a different productBlock variant?" as a conversation. Opt-in, never forced.

**Long-term (v2 or later):**
- The library is large enough that "pick a variant" becomes a real design exercise with tradeoffs
- Possibly a browsable gallery UI in the manager app showing what each variant looks like rendered
- Possibly per-archetype variant suggestion scoring based on dealer attributes

v1 of the variance strategy only commits to the immediate and near-term work. Everything else is genuine future.

---

## 10. Open questions

Things that came up while drafting this doc that don't need answering yet.

- **When a variant is removed from the library.** If a variant is deprecated (e.g. the stat-card-grid pattern is replaced by a better version), what happens to dealers currently using it? Grandfathered indefinitely? Auto-migrated on next regeneration? Propagation is touch-data-not-treatment, so variance removal doesn't touch anything until the dealer explicitly changes `components`. The question is whether removal leaves a zombie reference in the archetype file or triggers cleanup.
- **Whether archetype boundaries are hard or soft.** A variant tagged as TACTICAL could arguably fit a FORGE dealer whose specific vibe is more geometric than most FORGE sites. Does the schema enforce archetype-permit-list strictly, or is there a "discouraged but allowed" tier? v1 enforces strictly; the soft alternative is worth considering once the library grows.
- **Whether variance affects propagation's "Tag C — variance-permitted" behavior.** The propagation doc says Tag C fields (stat card count, ordering) are dealer-owned. Once component choice is a spoke config field, is the dealer's component choice itself a kind of Tag D customization that propagation must never overwrite? Yes, trivially — propagation doesn't regenerate HTML structure, so component choice is preserved by not-touching. But it's worth naming this as a formal interaction.
- **Whether variance is exposed to dealers.** In the current chat-driven model, Justin picks component variants during onboarding. If a dealer portal ever exists, do dealers pick their own? That feels like a v3 question, but worth noting — dealer self-service on component choice would fundamentally change the library's role (from curator-managed to user-visible catalog).
- **Variance and the second manufacturer.** If manufacturer #2 arrives, do they inherit Terraplex's library? Absolutely not — it's hub-specific. But the concept of "component library per hub" generalizes. Whether the library mechanism itself (folder structure, variant file format) is platform-level or hub-specific is unresolved. Platform-level probably makes sense, but waits for evidence.
- **Refero account and usage cadence.** If Refero becomes a regular research source, is it a paid individual account, a BGD business line item, a shared resource if BGD grows? Administrative, not architectural — but worth naming.

---

## 11. What this doc is not

Explicit scope:

- Not a library authoring guide (the library's README.md will be that, when the library exists)
- Not an implementation spec (no code, no briefings, no data shapes that aren't already committed in prose)
- Not a product roadmap (no dates, no phase numbers beyond "immediate / near-term / medium-term / long-term")
- Not a Refero integration plan (Refero is a human research tool, not a system integration)
- Not binding on the four existing dealers until they explicitly opt in (this is a new-dealer-forward strategy)

---

*This document is v0.1. Expected revisions: the section-type list (hero, product-block, services, contact) will almost certainly need additions as the library grows; archetype-to-variant mappings (Section 5) will reshape as authoring happens; the rollout sequence (Section 9) will need concrete dates once the first new dealer onboards under this model.*
