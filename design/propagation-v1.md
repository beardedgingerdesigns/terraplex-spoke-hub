# Phase 3 — Propagation Design v1

*Draft v0.1 — April 21, 2026*
*Location: `hubs/terraplex/design/propagation-v1.md`*

This document specifies how Phase 3 hub-to-spoke content propagation works for the Terraplex hub. It's a design document, not an implementation spec — it decides behaviors and tradeoffs; subsequent Claude Code briefings will implement them.

The document is Terraplex-specific in that it encodes Terraplex's propagation policy (hub-compliant defaults, reconciling rather than regenerative, etc.). A second manufacturer's hub could adopt this design, adapt it, or replace it. The design lives in the hub repo because the policy is hub-owned.

---

## 1. Problem statement

Phase 2.x surfaced two distinct failure modes that propagation must replace.

**Failure mode A — expensive manual rollout.** When Terraplex mandated a Coverage disclaimer on R-32 and I-19 product sections, it was rolled out manually to Black Knight, New Heights, and Great River as three separate editing sessions. Phase 2.5's working-tree cleanup found those three rollouts uncommitted in the working trees of each dealer repo. The cost was real — three sessions of identical work — and the completion was fragile (if Phase 2.5 hadn't happened, the rollouts might still be uncommitted). The failure mode is: hub-mandated content changes require per-dealer human effort that doesn't scale.

**Failure mode B — silent drift.** Phase 2.1b's cross-dealer audit found that Black Knight, New Heights, and Great River each render the I-19 product block differently, and all three differ from the hub canonical. Black Knight is missing the 31 MPH stat and renames the radar card. New Heights splits the tank into two cards and moves the radar card to chip badges. Great River substitutes entirely different stats and uses "19 gallon" where the hub says 20. Three dealers, three different treatments, none matches canonical, and nothing in the current workflow surfaces this as a problem. The failure mode is: dealer sites diverge from hub canonical over time without any mechanism noticing.

Both failures have the same root cause: no systematic mechanism for hub-to-spoke sync. Propagation exists to solve both. The design constraint is that solving them must not introduce a third failure mode — automation that silently overwrites legitimate dealer variance.

**What success looks like.** When Terraplex updates a product spec, the change reaches every dealer site within one propagation run. When Great River legitimately diverges from hub defaults, that divergence persists across propagation runs. When the system can't decide whether a drift is legitimate or unintentional, it surfaces the case for human review rather than silently choosing.

---

## 2. Data vs. treatment — the core distinction

Propagation works because the hub and the dealer sites are responsible for different things. The hub owns data; dealer sites own treatment.

**Data is factual or policy content the hub has authoritatively defined.** The R-32 has a 32-gallon tank. The Coverage disclaimer reads "Coverage depends on rate, terrain, weather conditions, and mission profile." The official product name is "R-32 by Revolution Drones." The canonical CTA label is "Request Pricing." These are facts the hub decides; dealer sites should reflect them accurately.

**Treatment is how data is rendered on a specific dealer's page.** Whether the 32-gallon tank is a big-number stat card, a bullet in a feature list, or a chip badge is treatment. Whether the R-32 section uses a stat-card grid (Pyro Ag), a circular concentric image (Black Knight), an asymmetric 12-column layout (New Heights), or an equal-column card (Great River) is treatment. Whether the Coverage disclaimer appears in a footer legal strip or beneath each product section is treatment. These are dealer-specific editorial choices; the hub doesn't prescribe them.

The rule is one-directional: **propagation updates data; propagation never alters treatment.** If the data changes (a new spec number, an updated disclaimer), propagation reaches every dealer that displays that data in any treatment. If a dealer's treatment differs from other dealers, propagation leaves the treatment alone.

**Five test cases that calibrate the line:**

1. R-32 tank says "32 Gallon." Hub updates to "34 Gallon." → Data change. Propagation updates every dealer's rendering of the number, regardless of whether the dealer uses a stat card, a bullet, or a chip.

2. Black Knight's I-19 stat strip has 3 cards; hub canonical has 4 cards. → Treatment difference. Propagation does not add a fourth card.

3. Black Knight's 3 cards contain accurate I-19 data in their current positions. → Data-correct. Propagation does nothing.

4. Black Knight's 3 cards contain outdated I-19 numbers (e.g. an old tank capacity). → Data drift within acceptable treatment. Propagation updates the numbers, leaves the 3-card structure intact.

5. Great River displays "19 Gallon" where the hub says "20 Gallon." → Data conflict with a documented rationale (Great River's supporting copy explains 18.5–19 gallon effective spray capacity). Propagation flags for human review because hub and dealer both have claims to accuracy.

**The edge case worth naming explicitly: hub canonical can be wrong.** If a dealer legitimately knows a spec number more precisely than the hub, the hub is the thing that should update, not the dealer site. Propagation's job is to surface this, not to silently overwrite it. Case 5 above is handled by flagging, not by updating.

---

## 3. Hub-owned section identification

Propagation needs to know which DOM nodes in a dealer's HTML it's allowed to touch. Three options considered.

**Option A — HTML comment markers.**
```html
<!-- hub-section: r-32-product, hub-version: 0.3.0 -->
<section class="bg-stone-950 ...">
  ...
</section>
<!-- /hub-section: r-32-product -->
```
Strengths: invisible in rendered output; works with any HTML structure; human-readable; no schema changes to existing HTML; can carry metadata (hub version at time of last propagation).
Weaknesses: comments can be stripped by aggressive HTML minifiers (Tailwind CDN deployment doesn't minify, so not a concern today); slightly awkward to query with DOM tooling.

**Option B — `data-hub-section` attributes on section elements.**
```html
<section data-hub-section="r-32-product" data-hub-version="0.3.0" class="bg-stone-950 ...">
  ...
</section>
```
Strengths: DOM-queryable with `document.querySelectorAll('[data-hub-section]')`; standard HTML5 data-attribute convention; survives minifiers; tooling-friendly.
Weaknesses: requires every hub-owned section to have a single wrapping element (some current dealer sections don't — they're a header + a div + siblings); retrofitting requires HTML structural changes across four dealers.

**Option C — prefixed section IDs.**
```html
<section id="hub-r32-product" class="...">
```
Strengths: minimal markup; works with anchor links dealers already use; no new convention.
Weaknesses: IDs must be unique and dealers already use IDs like `r-32` for anchor navigation; naming conflicts or requiring ID changes across existing sites; less metadata-carrying than the other two.

**Recommendation: Option A (HTML comment markers).**

Three reasons. First, it requires zero structural changes to existing dealer HTML — a retrofit briefing just adds comment pairs around existing sections. Phase 3's first implementation step is adding these markers to the four dealer repos; with Option A, that's an additive edit that touches no existing lines. Second, it can carry the `hub-version` at which the section was last propagated, which is useful for audit and for diff-ing against current hub state. Third, the Tailwind CDN-based static hosting doesn't strip comments, so the failure mode isn't live.

The format:
```html
<!-- hub-section: <section-id>, hub-version: <version-at-last-propagation> -->
   ...content propagation can touch...
<!-- /hub-section: <section-id> -->
```

Propagation reads markers, identifies hub-owned ranges, and operates only within those ranges. Everything outside markers is dealer-owned and invisible to propagation.

**The retrofit step** (first task in Phase 3 implementation): add markers to the existing four dealer sites. Scope: two markers per hub-owned section type present on each dealer's site. Zero semantic HTML changes. A self-contained Claude Code briefing, analogous to Phase 2.9's CHANGELOG scaffold.

---

## 4. The data payload per section

For each hub-owned section type, exactly which fields propagate. Fields not in this list are dealer-owned even if they appear inside a marker range.

| Section type | Propagating fields | Source in hub |
|---|---|---|
| `hero` | (none — hero is dealer-authored; marker exists for future propagation of any hub-mandated hero elements like the Authorized-Terraplex-Dealer eyebrow) | — |
| `r-32-product` | `officialName`, `tagline`, `dealerHeadline`, `dealerSubtitle`, spec stat values, spec labels, spec descriptions, CTA labels, CTA targets (spec sheet link), `additionalClaim`, body copy from `r-32.md`, Coverage disclaimer | `hubs/terraplex/products/r-32.json` + `r-32.md` |
| `i-19-product` | Same shape as r-32-product | `hubs/terraplex/products/i-19.json` + `i-19.md` |
| `coverage-disclaimer` | The disclaimer text itself (treated as its own section so it can be updated independently of product blocks) | `hubs/terraplex/content/reusable-language.md` |
| `services` | Service card title strings when they match canonical values from `questionnaire.json` (non-canonical service names on dealer pages are out of scope — not touched) | `hubs/terraplex/spoke/questionnaire.json` canonical list |
| `footer-authorization` | "Authorized Terraplex Dealer" exact phrasing | `hubs/terraplex/content/terminology.md` |

**Sections deliberately not yet in scope for v1 propagation:**
- Dealer testimonials (dealer-authored, hub has no canonical)
- About / owner story (dealer-authored)
- Why-choose sections (dealer-authored narrative)
- Contact info (spoke config authoritative, but propagation from spoke config to HTML is spoke→HTML sync, not hub→spoke sync — different operation, deferred)

**Why "Coverage disclaimer" is its own section type, not folded into product sections.** Phase 2.5 found that the disclaimer was manually rolled out to product sections but the rollout was already consistent across three dealers. Treating it as a dedicated propagation target means future disclaimer updates (or additional disclaimers Terraplex mandates) have a clean mechanism. It's cheap to model as its own type and expensive to model as embedded.

---

## 5. Reconciliation semantics

Every propagating field gets tagged with one of four behaviors.

**Tag A — authoritative-silent-update.** Hub is always right. Propagation updates the field in the dealer's HTML to match hub canonical without flagging. No CHANGELOG entry.
- Applies to: regulatory text (Coverage disclaimer), legal phrasing, terminology rules ("aerial application"), Coverage disclaimer wording.
- Rationale: no reasonable case where a dealer should disagree with the hub on these.

**Tag B — authoritative-update-with-CHANGELOG-entry.** Hub is authoritative, but the update is material enough to log. Propagation updates; CHANGELOG records what changed, when, and from what to what.
- Applies to: product names ("R-32 by Revolution Drones"), CTA labels, spec stat labels, benefits list content.
- Rationale: the dealer might have customized copy around these expecting them to stay put; a log entry lets them see what shifted.

**Tag C — variance-permitted-leave-alone.** Hub defines the field but accepts that dealers legitimately vary. Propagation does not touch it.
- Applies to: stat card count (3 cards vs 4 cards), stat emphasis (lead with upper bound vs full range), section ordering, inclusion of optional spec cards.
- Rationale: Phase 2.1b proved that structural variation on I-19 is systemic across three dealers, not a one-off. Forcing convergence would destroy current dealer implementations without editorial reason.

**Tag D — exception-skip.** The dealer has a documented CHANGELOG entry declaring this field or section as a managed customization. Propagation skips entirely.
- Applies to: anything in a dealer's `CHANGELOG.md` with `Type: customization`. Great River's card-based product layout and Brand Access section are the first anticipated cases.
- Rationale: overrides are affirmative and documented; propagation respects them.

**The tag assignment per field:**

| Field | Tag | Notes |
|---|---|---|
| Coverage disclaimer text | A | Regulatory-adjacent; single canonical |
| Product official name | B | Rarely changes, but log when it does |
| Product dealer-facing headline | B | Dealers may have styled these; log changes |
| Spec stat values (numbers) | B | The 20-vs-19-gallon case gets logged, surfaced for review |
| Spec stat labels | B | Label wording drift gets logged |
| Spec stat descriptions | B | Description text updates with log |
| Number of spec cards | C | Structural variance permitted |
| Order of spec cards | C | Dealer editorial choice |
| CTA labels | B | Log shifts |
| CTA targets (spec sheet URL) | B | Asset URLs can move; log when they do |
| Body copy paragraph | B | Whole-paragraph updates get logged |
| Benefits list content | B | Log changes |
| Benefits list display format | C | Some dealers show as chips, some as bullets |
| "Authorized Terraplex Dealer" phrasing | A | Terminology rule; no legitimate variance |
| Any field on a CHANGELOG-documented section | D | Exception overrides everything else |

**What happens on data conflict with a Tag B field.** When propagation finds that a dealer's HTML has a different value than the hub, and the field is Tag B, the default behavior is: update to hub canonical, log the change with before/after values. The human reviewing CHANGELOG entries can revert any specific one (via a follow-up edit) and add a CHANGELOG entry explaining the revert as a documented customization, promoting that field to Tag D for future runs. This is how Great River's 19-gallon case gets resolved: first propagation run logs the change, Justin reviews the CHANGELOG, decides Great River's number is more accurate, reverts that specific change, adds a Type: customization entry. Subsequent propagation runs skip.

**What happens when a Tag C field drifts to something that looks like a Tag B problem.** If Black Knight's I-19 stat strip is supposed to be variance-permitted (Tag C on card count), but then Terraplex adds a new required spec field to the hub, propagation can't add a card to Black Knight's 3-card layout. The new field isn't inserted; a flag is raised in the propagation report saying "Black Knight's I-19 doesn't have a slot for the new [field]; manual addition required." This is the system surfacing a case that automation can't safely handle.

---

## 6. Treatment preservation rules

Stated explicitly because subtle violations are the largest risk. Propagation will never:

- Change the number of DOM nodes inside a hub-section marker range
- Add new wrapper elements
- Remove wrapper elements
- Alter any CSS class on any element
- Alter any inline style
- Change the tag type of any element (`<div>` → `<section>`, etc.)
- Reorder sibling elements
- Change section ordering on the page
- Add or remove entire sections
- Modify any element outside a hub-section marker range, even by one character

Propagation will only:

- Modify text content within leaf text nodes that correspond to identified propagating fields
- Modify specific attribute values (like `href` for CTA targets) when the attribute is tagged as a propagating field

If propagation is about to make a change that would violate any "never" above, it aborts that change and flags it in the report. A dealer whose HTML structure has drifted so far from canonical that field identification is ambiguous gets flagged, not retrofitted.

**Net effect.** Black Knight's I-19 section retains its 3-card structure forever. New Heights' chip-badge radar treatment stays. Great River's card-based product columns stay. Pyro Ag's 4-card stat grid stays. The data inside each treatment stays accurate to hub canonical, subject to the exception tags in Section 5.

---

## 7. The interaction model

Three options considered.

**Option A — Headless apply, log everything.** Propagation runs, makes changes, commits to dealer repos. Human reviews CHANGELOG post-hoc.
Strengths: fastest; no gating on human attention.
Weaknesses: first dealer to get a propagation bug finds out via production; rollback requires git work per dealer; undermines the "affirmative overrides" principle from the thesis.

**Option B — Diff-and-approve.** Propagation produces a diff per dealer, shows it in the manager app chat, human approves per dealer or per section before commit.
Strengths: human-in-the-loop for every change; matches the conservative-by-default thesis stance; failures are caught before production.
Weaknesses: slower; requires the manager app to render diffs usefully.

**Option C — Staged branch with PR.** Propagation commits to a branch per dealer, opens a PR on GitHub, human reviews on GitHub before merge.
Strengths: leverages existing review tooling; async; reviewable by multiple people if BGD ever grows.
Weaknesses: most complex to build; requires Netlify to not auto-deploy branches; review overhead feels heavy for small content changes.

**Recommendation: Option B for v1.**

The thesis commits to conservative-by-default and affirmative-overrides. Option A violates both. Option C is over-engineered for a solo operator at four dealers. Option B produces the right UX: you ask the manager app to propagate a hub change, it tells you "here's what would change across these four dealers," you approve the ones that look right and flag the ones that need discussion.

**The chat UX (sketch, not final):**
```
You: propagate hub

Manager: Analyzing hub v0.3.0 → v0.4.0 changes across 4 dealers...

  pyro-ag: 2 changes (1 auto-apply, 1 review)
    [AUTO] Coverage disclaimer: no change
    [REVIEW] R-32 tank: "32 Gallon" → "34 Gallon"

  black-knight: 3 changes (2 auto-apply, 1 flag)
    [AUTO] R-32 tank: "32 Gallon" → "34 Gallon"
    [AUTO] Coverage disclaimer: no change
    [FLAG] I-19 structural: new spec field has no slot in 3-card layout

  new-heights: 1 change (1 auto-apply)
    [AUTO] R-32 tank: "32 Gallon" → "34 Gallon"

  great-river: 2 changes (1 auto-apply, 1 exception-skip)
    [AUTO] R-32 tank: "32 Gallon" → "34 Gallon"
    [SKIP] I-19 tank (CHANGELOG exception: Great River 19-gallon accuracy override)

Approve individually or in batch. Type 'approve pyro-ag', 'approve all auto', 'show flags', etc.
```

**Scope modifiers.** You can run propagation for one dealer (`propagate pyro-ag`), a subset (`propagate black-knight new-heights`), or all. The default propagates all dealers pinned to the previous hub version. Approval is per-change, per-dealer, or batch.

---

## 8. The command surface

**Invoked from:** the manager app chat. Not a CLI tool for v1 — the chat UI is where the design makes sense (interactive diff review, per-change approval). A CLI could be added in v2 if headless use cases emerge (CI, scheduled runs).

**Trigger points:**
- Manual invocation via chat command ("propagate", "propagate <dealer>", "propagate since v0.2.0")
- Suggested (but not automatic) when the manager app detects that the hub has advanced past the version any dealer is pinned to

**Not triggers for v1:**
- Not automatic on hub version bump (would run without human review)
- Not on git push hook (crosses the BGD/GitHub boundary awkwardly)
- Not scheduled (no operational reason yet)

Explicit non-trigger: when a dealer edit chat session concludes, the manager app does not propagate hub content to that dealer. Chat sessions are dealer-facing work; propagation is hub-facing work. Mixing them creates a class of bugs where spoke-edit prompts accidentally propagate.

---

## 9. CHANGELOG integration

Propagation reads and writes `sites/<dealer>/CHANGELOG.md`.

**Reading CHANGELOG before propagation.** Propagation parses each dealer's CHANGELOG for entries with `Type: customization`. Each customization entry names a section or field affected. Those sections/fields become Tag D (exception-skip) for this propagation run. This is how Great River's layout and Brand Access overrides persist — they're in CHANGELOG, propagation respects them.

**Writing CHANGELOG after propagation.** For every Tag B change (authoritative-update-with-log), propagation appends an entry:

```markdown
### 2026-05-03 — Propagation of hub v0.4.0 (R-32 tank update)

**Type:** propagation
**Section affected:** r-32-product
**Reason:** Hub canonical updated R-32 tank from "32 Gallon" to "34 Gallon"
**Added by:** Propagation run 2026-05-03 14:22 UTC (hub v0.3.0 → v0.4.0)

Fields updated:
- R-32 spec stat "Tank" value: "32 Gallon" → "34 Gallon"
- R-32 body copy reference to "32-gallon tank" → "34-gallon tank"
```

**New entry type.** Section 2.9 established `customization` as the only CHANGELOG entry type. Propagation introduces a second type: `propagation`. These are machine-written records of what propagation did on a specific run. Distinguishable from human-written `customization` entries by the `Type:` field and by structure.

**The hybrid case.** When a human reverts a propagation change and adds a `customization` entry to explain why, both entries exist in CHANGELOG — a `propagation` entry showing the automated change, and a subsequent `customization` entry showing the human override. The customization entry's `Section affected` field signals future propagation runs to Tag D this field.

---

## 10. Failure modes

Pre-committed rules for cases that can't be resolved automatically.

**Section marker missing.** A dealer's HTML doesn't have the expected hub-section markers. Propagation does not proceed on that dealer. The report lists "pyro-ag: no hub-section markers found, skipping." Resolution: run the retrofit-markers operation on that dealer first.

**Ambiguous field identification.** Propagation finds two text nodes that could both be the "Coverage disclaimer" within a product section. It does not guess. The report flags "black-knight: 2 candidate nodes for 'coverage-disclaimer' in r-32-product section; manual review." Resolution: human inspects the dealer's HTML and either disambiguates (e.g. by adding a more specific marker) or fixes the structural oddity.

**Downstream Netlify build fails after commit.** Propagation committed changes to a dealer repo, Netlify rebuilds, build fails. The live site continues showing the previous successful build (Netlify default behavior). Propagation writes a follow-up CHANGELOG entry noting the build failure and recommending inspection. No automatic revert — the commit stays in git history; the Netlify state shows the old version.

**Dealer repo has uncommitted working-tree changes.** Propagation refuses to proceed on a dealer with a dirty working tree (echoing the Phase 2.5 lesson). The report flags "new-heights: dirty working tree, skipping. Resolve or revert before re-running propagation."

**Hub version pin mismatch.** A dealer's `spoke.config.json` pins hub v0.2.0; current hub is v0.4.0. Propagation handles each intermediate version's changes in sequence (0.2.0 → 0.3.0 → 0.4.0), so dealers that skipped a version don't skip its content changes. If the sequence is long, the report summarizes ("pyro-ag: catching up from v0.2.0 to v0.4.0, 6 changes total").

**Propagation produces no changes.** A dealer is already up-to-date with hub canonical (either because they were recently propagated, or because they have Tag D entries for every field that would have changed). The report says "great-river: no changes required" and moves on. Not a failure; worth explicit acknowledgment in the report.

**Field exists in hub but target section is missing from dealer HTML.** The hub adds a new product to the lineup; a dealer doesn't have that product block yet. Propagation does not insert the section (would violate treatment-preservation). The report flags "all dealers: new 'r-45-product' section defined in hub; no dealer has implemented it." Resolution: dealer repos need explicit section-addition work, which is outside propagation's scope.

---

## 11. What v1 doesn't do

Explicit scope boundaries.

- **Not multi-hub.** v1 operates on the Terraplex hub only. If a second manufacturer hub is onboarded, its propagation logic is a separate implementation — possibly using this design as a template, possibly diverging.
- **Not automated.** Every propagation run is human-initiated and human-approved. No scheduled runs, no git hooks, no CI integration.
- **Not visual-regression-tested.** v1 commits changes and trusts the treatment-preservation rules. A visual-regression test layer (Playwright screenshot diffs) is a potential v2 addition, not a v1 requirement.
- **Not cross-dealer batch with automated rollback.** If propagation succeeds on 3 dealers and fails on 1, the 3 successful commits stay committed. No transactional semantics across dealer repos.
- **Not spoke→HTML sync.** v1 handles hub→spoke content propagation. A separate future operation handles spoke config → rendered HTML sync (when a dealer updates their phone number in `spoke.config.json`, that change reaching their HTML is a different pipeline).
- **Not component-variance-aware.** v1 assumes the component treatments present on each dealer's site today are fixed. The parallel variance strategy (see `variance-strategy.md`, forthcoming) specifies how dealers might later choose different treatments; v1 doesn't need to know about that yet.
- **Not dealer-driven.** Dealers don't trigger propagation on their own sites. BGD (or eventually Terraplex in the brand-pays model) invokes propagation. Dealer agency over their site is exercised through custom work, not through hub-sync triggers.

---

## 12. Open questions for follow-up

Things that surfaced during this design that don't need answering to ship v1, but should be decided before v2 or before meaningful scale.

- **Hub schema bumps alongside content changes.** When the hub bumps from v0.3.0 to v0.4.0 and the schema itself has changed (new required field, changed enum), does propagation handle schema migration? v1 answer is: no, schema bumps are a separate operation that happens before content propagation. But the mechanism isn't designed yet.
- **Interaction with the future component library.** When a dealer opts into a different treatment variant (e.g. Black Knight chooses "exploded-diagram" for product blocks), propagation needs to know that the data payload is the same but the markers may be in a different-shape section. How that surfaces in propagation needs design when the component library exists.
- **Retroactive propagation.** If a dealer hasn't been propagated in six months, running propagation applies every intermediate version's changes. v1 handles this via sequential application. Whether very old dealers ever need a "fresh baseline" regeneration option is an open question.
- **Bulk customization management.** Great River's CHANGELOG is expected to grow. At some scale, per-entry review becomes tedious. Whether CHANGELOG benefits from categorization, tagging, or a view layer is deferrable but worth tracking.
- **Cross-manufacturer pattern extraction.** When manufacturer #2 arrives and their propagation design closely mirrors this one, what gets factored into shared platform code vs. stays per-hub? Not a v1 question; worth noting so the answer isn't forced prematurely.
- **Auth and attribution.** Currently there's one operator (Justin). When propagation is run by someone else (future BGD hire, eventual Terraplex direct access), CHANGELOG's "Added by:" field needs to be meaningful. Auth model is a platform-level concern, not a propagation-specific one, but surfaces here.

---

## Implementation sequencing (for next design conversation, not this doc)

The subsequent Claude Code briefings that implement this design should probably happen in this order:

1. **Retrofit hub-section markers on the four existing dealer repos.** Self-contained operation, no behavior change, prepares for propagation. Analogous to Phase 2.9's CHANGELOG scaffold.
2. **Add the "propagation" CHANGELOG entry type to the hub's format documentation.** Small update to the per-dealer CHANGELOG templates.
3. **Build the field-identification and diff-generation core.** The manager app reads hub and dealer HTML, produces the "would change this, leave that alone" report. No commits yet. Read-only dry run.
4. **Build the diff-rendering UI in the chat interface.** Diff-and-approve UX per Section 7.
5. **Build the commit and CHANGELOG-writing logic.** Connects approval to actual file changes.
6. **Test against a no-op propagation** (current hub → current dealers, expecting zero changes) to verify the pipeline produces no false positives.
7. **Test against a contrived hub bump** (say, cosmetic Coverage disclaimer punctuation change) to verify propagation produces the expected small number of changes.
8. **First real propagation run.** Whatever the first genuine hub content change is after this infrastructure exists.

Each step is a separate briefing; none of them are this design document's scope.

---

*This document is v0.1 — a first substantive draft. Expected revisions: behaviors may shift once implementation surfaces edge cases; reconciliation tags (Section 5) may reweight once a real propagation run produces data; the interaction model (Section 7) may change based on how the diff UX actually feels in practice.*
