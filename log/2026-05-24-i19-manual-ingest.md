# [2026-05-24] ingest | I-19 operator + technical manuals (2026 V1.3 / V1.0)

Justin dropped two PDFs into `raw/`: `I-19_MANUAL_V1.3-2.pdf` (55 pp, internal Word title "KING-100 Manual" by Lance Gunderson, rebranded for the I-19 Independence Series) and `i-19-technical-manual.pdf` (308 pp, 36 MB, by Russell Hedrick — V1.0 dated 2026-03-17, modified 2026-05-20). Both moved into `raw/manual-import/gteex-terraplex/` and renamed to match the namespace's `<year>-<slug>` convention.

Two new structured markdown wiki entries created alongside the PDFs:
- [raw/manual-import/gteex-terraplex/2026-i-19-user-manual.md](../raw/manual-import/gteex-terraplex/2026-i-19-user-manual.md) — TOC, headline specs table, safety-critical operating envelope, flight/operation modes, RTK options, indicator-light reference, pesticide rules.
- [raw/manual-import/gteex-terraplex/2026-i-19-technical-manual.md](../raw/manual-import/gteex-terraplex/2026-i-19-technical-manual.md) — full TOC (power/powertrain/comms/spray/seeding/RC-software), battery + powertrain + plumbing specs, Service Report fields, repair-empowerment foreword (verbatim) and copyright/licensing constraint.

**Convention decisions made during this ingest:**
1. **PDFs > ~5 MB go in `.gitignore`.** The 36 MB technical manual PDF is gitignored at the repo root; the 1.4 MB user manual PDF is committed. Convention recorded in [raw/manual-import/README.md](../raw/manual-import/README.md). [`../.gitignore`](../.gitignore) updated.
2. **The structured wiki entry is the canonical raw record.** Verbatim 308-page text extraction wasn't viable to commit cleanly; the curated markdown captures TOC, specs, and editorially-significant passages (e.g. the right-to-repair foreword) instead. Companion `.txt` extracts were used only during ingest and not committed.

**Cross-references touched (5 files updated, 4 created):**
- Updated: [products/i-19.md](../products/i-19.md) — added "Operator and technical manuals" section with reuse warning, spec-discrepancy note (sell-sheet 20/26/40 vs engineering 19/25/38, marketing wins for customer copy), and extended Source PDFs list.
- Updated: [raw/manual-import/README.md](../raw/manual-import/README.md) — gteex-terraplex layout extended; added large-binary policy paragraph.
- Updated: [index.md](../index.md) — `Raw sources` inventory now lists the two new manuals + PDF-gitignore note.
- Updated: [.gitignore](../.gitignore) — entry for `raw/manual-import/gteex-terraplex/2026-i-19-technical-manual.pdf`.
- Updated: [NOTES.md](../NOTES.md) — recent-decisions entry referencing this ingest.
- Created (above): 2 wiki entries + this log file.

**Editorial flag worth recording (open question for future ingests):**
The marketing sell-sheet headlines (20 gal liquid / 26 gal solids / 40 ft swath) and the engineering manual numbers (19 gal / 25 gal / 38 ft measured, 50–54 ft effective) disagree. Per `content/pricing-policy.md` and the sell-sheet's "use verbatim" rule, dealers continue with marketing numbers — the engineering manual is for service/training only. No contradiction lint flag needed; rule is now documented in the i-19.md "Spec discrepancy note".

**Copyright caveat:** The technical manual's foreword explicitly limits reuse to "owners, users, Dealers, and Distributors." Dealer sites must NOT lift excerpts as marketing copy. The user-manual + tech-manual entries' `Cross-references` sections call this out; positioning/marketing copy still flows exclusively from the sell-sheet wiki entry.

## Follow-up review with Justin (same day): four dealer-site implications surfaced

After review of the ingest, four content beats emerged that affect **dealer-site I-19 product detail pages** (not homepages). Justin's call: file all four, route them to detail-page guidance. Three are platform-level (likely applies to R-32 as well).

1. **"Scout" mission profile sell-sheet claim is unsupported by the manuals.** Operator manual §7.4 enumerates only four operation modes (Route / AB Point / Manual / Enhanced Manual). No "Scout" mode. The FPV camera (§3.1) enables visual reconnaissance but is not a branded mode. Filed as an **open question in [NOTES.md](../NOTES.md)** for brand verification (Jack Schroeder). [products/i-19.md](../products/i-19.md)'s sell-sheet section left untouched (verbatim rule); new "Product detail page content" section flags the issue and recommends "FPV scouting view" framing or omission until verified.

2. **Service Reports — undocumented sellable feature.** Tech manual §6.11.6: every mission auto-generates a customer-ready post-mission report (total acreage, area sprayed, anti-collision area, obstacle area, flight time, total product, per-unit usage). Belongs on dealer detail pages as a "What you get with every flight" beat. Filed in both [products/i-19.md](../products/i-19.md) (definitive) and [products/r-32.md](../products/r-32.md) (likely platform-level, applies to R-32 too).

3. **Owner-maintainable / right-to-repair posture.** Tech manual foreword (verbatim): *"This manual is intended to give the power back to the farmers and Custom applicators to maintain and repair their equipment."* Sharper differentiator vs DJI's locked-down ecosystem than anything currently on dealer sites. Platform-level — pair with dealer parts/service capability on detail pages. Filed in both product MDs.

4. **IP65 / IP67 weather resistance.** Operator manual §2.5 + §3.1: IP65 overall, IP67 core module per IEC 60529. Currently absent from sell-sheet headlines and i-19.md spec table. Add to **detail-page** spec block (not homepage). Position as resistance, not invincibility — liquid damage is not warranty-covered. R-32 IP rating not yet documented; flagged in r-32.md as platform-likely but unverified until R-32 manuals are ingested.

**Files touched in this follow-up pass:**
- [products/i-19.md](../products/i-19.md) — new "Product detail page content (beyond the sell-sheet)" section with all four beats.
- [products/r-32.md](../products/r-32.md) — new equivalent section, framing #2/#3/#4 as platform-likely-but-unverified for R-32 (no Scout question here; R-32's third mission is "Heavy-lift").
- [NOTES.md](../NOTES.md) — 1 open question (Scout verification) + 4 follow-ups (Service Reports, right-to-repair, IP rating, R-32 manual ingest).
