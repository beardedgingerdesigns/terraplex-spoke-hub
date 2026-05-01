# Terraplex Industry Knowledge

Persistent, growing knowledge on the ag spraying drone industry — captured by scheduled research routines, consumed by dealer chat sessions and design-foundation runs to ground product/competitor/pricing/regulatory claims in cited current facts.

Three routines maintain this directory:

- **Daily digest** (Mon–Sun, 6 AM Chicago) — scans the prior 24 hours of news; writes a digest file when notable items are found, skips when nothing notable.
- **Monthly intelligence pass** (1st of month, 6 AM Chicago) — refreshes 1–2 stale `manufacturers/*.md` profiles and writes a regulatory update.
- **Quarterly deep-dive** (1st of Jan/Apr/Jul/Oct, 6 AM Chicago) — pops the top topic from the queue below and writes a substantial analysis.

---

## Categories

- `digests/` — daily snapshots of notable industry developments (most recent file is what runtime consumers should read first).
- `manufacturers/` — per-manufacturer profiles with revision history (each refresh appends `## Revision YYYY-MM` rather than overwriting).
- `regulatory/` — FAA, USDA, state agriculture/aviation departments. Mix of standing-topic files (`faa-part-137.md`) and dated update rollups.
- `application/` — agronomic uses, ROI economics, spray methods, customer workflow analysis. Output of quarterly deep-dives.
- `dealer-economics/` — distribution, financing, training, dealer-manufacturer dynamics. Output of quarterly deep-dives.

Browsing convention: read `digests/` chronologically (newest first), `manufacturers/<name>.md` when discussing a specific competitor, the rest topical.

---

## Entry schema

Every file uses YAML frontmatter and a fixed body structure.

### Frontmatter (required fields)

```yaml
---
title: "Hylio AG-272 launch and pricing positioning"
category: manufacturers                # one of: digests, manufacturers, regulatory, application, dealer-economics
publishedAt: 2026-05-01                # date the knowledge reflects (NOT the date you wrote the file if researching historical context)
sources:
  - url: https://hylio.com/ag-272
    accessedAt: 2026-05-01
  - url: https://uavcoach.com/hylio-ag272-review/
    accessedAt: 2026-05-01
relevantTo: [product, pricing, dealers]   # filter tags for runtime consumers
tags: [hylio, competitor, product-launch] # descriptive tags for browse/search
---
```

`relevantTo` controlled vocabulary (use these exact values):
- `product` — affects how dealers describe their own product lineup
- `pricing` — affects MAP discussions, customer pricing comparisons
- `regulatory` — Part 137, state laws, USDA programs
- `dealers` — distribution economics, financing, training
- `customers` — end-user / farmer perspective and workflows
- `application` — agronomic methods, spray techniques

`category` is the literal subdir name. Pick exactly one.

### Body (required sections, in this order)

```markdown
## Summary
2–3 sentence factual summary. State the development; do not editorialize.

## Why this matters for Terraplex dealers
1–2 paragraphs on relevance — competitive positioning, pricing pressure, customer comparison points, regulatory implications. Stay concrete.

## Key facts
- Bullet list with specific verifiable data (specs, prices, dates, weights, ranges, regulatory thresholds)
- Each bullet should be cite-able to a `sources` URL above
- If a "fact" can't be cited, omit it

## Implications
- For dealer positioning copy
- For pricing conversations
- For onboarding scripts
- (Skip subsections that don't apply.)
```

### Manufacturer profile format (slight variation)

`manufacturers/<name>.md` files accumulate revisions instead of being overwritten:

```markdown
---
title: "DJI Agras"
category: manufacturers
publishedAt: 2026-05-01    # date of most recent revision
sources: [...]              # cumulative across revisions
relevantTo: [product, pricing, dealers]
tags: [dji, agras]
---

## Current state (as of 2026-05-01)
[brief summary — products, pricing, market position, recent moves]

## Revision history

### Revision 2026-05-01
- New T50 launched with [specs]; pricing in US ~$X
- Recall on T40 battery firmware — affects models manufactured before [date]

### Revision 2026-04-01
- ...
```

The monthly intelligence pass appends a new `### Revision YYYY-MM-DD` block; never deletes prior history.

---

## Curation gate (applies to every entry)

Save a file only if **all** of these are true:

1. **Specific verifiable fact** relevant to dealer operations — not opinion, not generic industry think-piece, not "this seems important."
2. **Cite-able**: every claim in `Key facts` has a corresponding URL in `sources`. Inline `[source: <url>]` allowed for clarity.
3. **Dealer-actionable**: the `Implications` section lists at least one concrete impact on a dealer's positioning copy, pricing conversations, onboarding scripts, or operations. If you can't articulate a dealer impact, the entry isn't library-worthy.
4. **Not a near-duplicate**: if a recent file in the same category covers the same fact, augment that file instead of creating a new one.

Vague entries pollute the library. The runtime consumers won't trust a noisy library, so the system fails. Prefer fewer, sharper entries.

---

## Source allowlist

Routines must scope their research to these sources. Anything outside this list requires explicit justification in the PR body.

### Trade publications
- AgFunder News (`https://agfundernews.com`)
- sUAS News (`https://www.suasnews.com`)
- AgWeb (`https://www.agweb.com`)
- Successful Farming (`https://www.agriculture.com`)
- Modern Agriculture / Modern Farmer (`https://modernfarmer.com`)

### Official sources
- FAA news releases (`https://www.faa.gov/newsroom`)
- USDA precision agriculture programs (`https://www.usda.gov`)
- State agriculture departments: Iowa, Texas, Nebraska, Kansas, Missouri (each state's `.gov` site)

### Manufacturer pages
- DJI Agras: `https://enterprise.dji.com/agras`
- XAG: `https://xa.com`
- Hylio: `https://hylio.com`
- Joyance: `https://joyance-tech.com`
- Yamaha agriculture: `https://yamaha-motor.com/agriculture`
- Terraplex: `https://terraplex.com` (self-aware monitoring — what does our own brand visibility look like?)

### Practitioner forums
- Reddit `r/PrecisionAgriculture`
- Reddit `r/Agriculture`

### Explicitly excluded
- Twitter/X — signal-to-noise ratio too low; quote-mining risks misrepresentation
- Generic news aggregators (Google News, Bing News) — content already surfaces via trade pubs above
- LinkedIn posts — opinion-heavy, hard to cite-verify

If you discover a high-signal source not on this list, propose adding it in the PR body so the user can update this README.

---

## Deep-dive topic queue

Each quarterly deep-dive pops the top topic, writes a substantial 800–1500 word analysis to the appropriate subdir (`application/` or `dealer-economics/`), and updates this list to remove that topic. Add new topics by editing this file directly.

1. **Cover crop seeding economics** — drone vs broadcast spreader vs aerial application, throughput per acre, cost per acre, when each wins
2. **Dealer financing models** — used drones, new drones, lease vs buy, manufacturer-backed programs, dealer cash flow implications
3. **Swarm operation tradeoffs** — single high-payload drone vs multi-drone fleets, throughput per dollar, operator skill requirements, regulatory implications
4. **Drone vs ground-rig spray window analysis** — when each wins, customer decision criteria, weather/terrain dependencies, ROI thresholds
5. **FAA Part 137 application trends** — how new operators are applying, success rates, common rejection reasons, timeline expectations
6. **State ag-drone regulations roundup** — Iowa, Texas, Nebraska, Kansas, Missouri specifics; differences that affect dealer territory choices
7. **Battery technology trends** — runtime, charging architecture, hot-swap workflows, swappable packs, cost-per-cycle economics
8. **Spray pattern accuracy** — drift control, weather sensitivity windows, computational guidance evolution, certification implications
9. **Customer ROI by farm size** — break-even analysis for 500 / 2,000 / 10,000 acre operations, treatment-frequency assumptions
10. **Insurance and liability landscape** — Part 137 carrier options, premium trends, exclusion patterns, claims data where available

---

## How runtime consumers use this directory

(Note: runtime hookup is deferred — will be added to `server/routes/chat.js` and `server/services/design-foundation.js` after 1–2 weeks of digest content exists. This section documents the future contract.)

### From a dealer chat session
Before writing customer-facing copy that references products, competitors, regulations, or pricing:
1. Read the most recent file in `digests/`.
2. If naming a specific competitor product, also read `manufacturers/<name>.md`.
3. Filter relevant entries by `relevantTo` and `category`.
4. Cite facts; do not invent specs, prices, or dates. If the research is silent, omit or hedge the claim.

### From design-foundation (onboarding)
Before generating `design.md` for a new dealer:
1. Read the most recent `digests/` entry to understand the current competitive/market landscape.
2. Use it to inform design directives — e.g., if Hylio is undercutting on price, design.md's anti-pattern section might flag pricing-prominence as a positioning trap.
