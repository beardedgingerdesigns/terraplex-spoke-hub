# Imagery direction — building agent's creative-director brief

Read this when you're building or revising a dealer site and you need to choose imagery (hero shots, product cards, lifestyle blocks, logo placements). It applies platform-wide for the Terraplex hub.

## The brief

You are the creative director for this dealer's imagery. Don't reach for the same shot every time. Match image mood and composition to component intent. The goal is a site that feels considered — not templated. **Variety across dealers is the point.** If two dealer sites in the same archetype get the same hero shot, the system has failed at this job.

You have two pools to work from (and existing single assets as fallbacks):

| Pool                       | What's inside                                              |
| -------------------------- | ---------------------------------------------------------- |
| `i19Gallery`               | 9 I-19 shots — 8 in-field action + 1 studio isolation     |
| `gteexLogoIconVariants`    | 3 icon-only marks (color / BW / reverse)                  |
| `gteexLogoFullVariants`    | 3 horizontal lockups (color / BW / reverse)               |

Each entry carries semantic metadata — `description`, `subjects`, `composition`, `mood`, `bestFor`, `dominantColors`, `distinctive`. **The `distinctive` field is the most important one.** It's the editorial reason to pick this shot over its neighbors. Read it before you decide.

For logos, the metadata also carries `treatment` (`color | bw | reverse`) and `variant` (`icon | lockup`).

## Slot-by-slot direction

**Hero section.** Prefer wide action shots — strong horizontal composition, movement, open sky. Match `mood` to the dealer's archetype: `dynamic` / `open-sky` shots for `tactical` and `forge`; `warm` / `golden` / `productive` shots for `field` (especially the `farmhouse` variant) and `terrain`; `industrial` / `hard-edged` for `field` `industrial-farm` variant; clean compositions for `clean`. Check `spoke.config.json` → `identity.archetypeVariant` for archetypes with variants. The studio shot (`i19WideStudio`) is almost never a hero pick — it lives for product cards and spec pages.

**Product card / spec page hero.** The studio isolation (`i19WideStudio`) is usually right — only neutral-background option in the pool, so it isolates the product cleanly. **Exception:** if the surrounding section is dark-themed and the dealer's archetype calls for cinematic in-field imagery (especially `forge`, `tactical`), a contextual shot with strong negative-space framing can substitute. Don't substitute reflexively — confirm the context warrants it.

**Lifestyle / About section.** Action shots. Match mood to the brand voice: warm/golden-hour for `field/farmhouse`, harder/equipment-style framing for `field/industrial-farm` and `tactical`, balanced for `clean`. Avoid heroic-scale shots here — these are supporting context, not headlines.

**Detail / feature blocks.** Close-up technical shots — boom-arm details, nozzle close-ups, mechanical specifics. Pair the image with copy describing the feature it depicts (don't pair a "spray width" feature description with a wide-landscape shot — pair it with a shot where the spray plume is visible).

**Footer / CTA strip.** Small, calm shots; wide horizontal compositions often work well at reduced size. The studio shot can also work here if the footer is on a light background.

**Logo placement.**
- Primary header on a light background → `gteexLogoFullVariants` entry with `treatment: color`.
- Hero overlay or footer on dark background → `gteexLogoFullVariants` entry with `treatment: reverse` (white knockout).
- Print contexts, low-color-budget documents → `gteexLogoFullVariants` entry with `treatment: bw`.
- Favicon, button marks, tight square slots → `gteexLogoIconVariants` (pick treatment to match background).

## Variety heuristic (soft)

If you have access to recent dealer-build artifacts (via the manager-app session log, the `log/` directory, or by reading sibling dealer sites in `sites/`), check what shots other dealers got recently. Bias your picks away from the most-recently-used images. The I-19 pool only has 9 shots — if every site uses the same 3, the pool's wasted.

This is a soft heuristic — there's no hard rotation requirement. The goal is "feels different" not "different by counter."

## Anti-patterns to avoid

- **Don't use the studio shot in a hero** where the archetype calls for cinematic in-field imagery. The studio shot has a flat brown background — it kills any cinematic intent.
- **Don't pair a calm composition with a high-energy copy block.** Mismatched mood reads as careless to a buyer.
- **Don't reuse the same shot in two slots on the same page.** Even a beautiful image fatigues fast.
- **Don't pick from `i19Gallery` for a product card whose section copy is about the R-32.** Cross-product mismatch — read the section copy first to confirm subject.
- **Don't use logo `treatment: bw` on a web header.** It exists for print/document contexts only — on a web hero it reads as "broken brand."
- **Don't ignore `bestFor` hints.** They're written by the digest pass to save you from re-evaluating each pool. If a shot lists `bestFor: ["detail-feature"]`, it's not your hero.

## When the right shot doesn't exist

Tell the operator. Surface a one-line note in your session output: "No detail shot of the spray nozzle exists in the pool; using a wide shot instead. Worth adding one to `raw/i-19-images/`." Don't silently substitute and hope no one notices — gaps in the pool are the operator's job to fill, but only if they hear about them.

## Reading order during scaffolding

1. Read this file early — before you commit to a hero choice.
2. Read `assets.json` — the `assetPools` object is your menu.
3. Read the dealer's `spoke.config.json` (archetype, accent, story) — informs mood matching.
4. Read the relevant archetype's `archetypes/<name>.md` — informs composition tone.
5. Pick. Justify your pick in your scaffolding comments so a reviewer can audit the choice.

## Related

- Pool data: [../assets.json](../assets.json)
- Asset pipeline that populates the pools: [scripts/ingest-hub-assets.js](../../../scripts/ingest-hub-assets.js) in the manager-app repo
- Cross-archetype design rules: [design-do-dont.md](design-do-dont.md)
- Section structure conventions: [section-patterns.md](section-patterns.md)
