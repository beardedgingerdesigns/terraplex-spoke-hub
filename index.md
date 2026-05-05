# Index

Global content catalog for the Terraplex hub. Updated by every ingest. The lint routine verifies coverage (every wiki page is in the index; nothing in the index is missing on disk).

---

## Hub root

- [README.md](README.md) — high-level overview of what this hub is and how it fits into the BGD platform
- [HUB-CLAUDE.md](HUB-CLAUDE.md) — Claude Code session instructions, architectural ground rules, file-authority map, wiki operations
- [NOTES.md](NOTES.md) — working memory: recent decisions, open questions, follow-ups
- [feature-gaps.md](feature-gaps.md) — platform capability gaps and editorial restrictions
- [hub.json](hub.json) — hub manifest (name, version, schemaVersion)
- [assets.json](assets.json) — URL manifest; the ONLY place raw URLs live in the hub
- [log.md](log.md) — append-only chronological record of ingests / queries / lints

## Brand and content

- [content/positioning.md](content/positioning.md) — Terraplex competitive narrative and value-prop language
- [content/terminology.md](content/terminology.md) — word-level rules: preferred and forbidden terms
- [content/reusable-language.md](content/reusable-language.md) — quoted language from Terraplex corporate site, safe to reuse verbatim
- [content/content-exclusions.md](content/content-exclusions.md) — what must never appear on a dealer site
- [content/service-patterns.md](content/service-patterns.md) — reusable service structures (Sam Welton contact, service tiers, Part 107 prep)
- [content/pricing-policy.md](content/pricing-policy.md) — MAP policy, MSRP-only rule, kit-tier exposure rule
- [content/compliance-program.md](content/compliance-program.md) — Terraplex compliance program: Sam Welton, Part 137 services, Part 107 prep course

## Products

- [products/r-32.md](products/r-32.md) — R-32 official sell-sheet body copy
- [products/r-32.json](products/r-32.json) — R-32 structured product data
- [products/i-19.md](products/i-19.md) — I-19 official sell-sheet body copy
- [products/i-19.json](products/i-19.json) — I-19 structured product data

## Archetypes

- [archetypes/_index.json](archetypes/_index.json) — archetype catalog + which dealer owns which archetype+accent combo
- [archetypes/forge.md](archetypes/forge.md) — FORGE: dark, glow blobs, ember accents, full-bleed video hero
- [archetypes/tactical.md](archetypes/tactical.md) — TACTICAL: pure black, geometric precision, corner brackets, video hero
- [archetypes/terrain.md](archetypes/terrain.md) — TERRAIN: alternating light/dark bands, contour-line motifs
- [archetypes/clean.md](archetypes/clean.md) — CLEAN: white/gray-50 light theme, video hero with brand-tinted overlay
- [archetypes/field.md](archetypes/field.md) — FIELD: warm cream/amber palette, photographic hero (no video), organic shapes
- [archetypes/patriot.md](archetypes/patriot.md) — PATRIOT: flag-inspired graphics, diagonal stripes, star motifs

## Guidelines

- [guidelines/section-patterns.md](guidelines/section-patterns.md) — common dealer site section structure (Header, Hero, About, etc.)
- [guidelines/design-do-dont.md](guidelines/design-do-dont.md) — cross-archetype design rules
- [guidelines/typography.md](guidelines/typography.md) — Terraplex typography defaults (system stack, per-archetype overrides)

## Design (architectural docs)

- [design/propagation-v1.md](design/propagation-v1.md) — propagation architecture: how hub edits roll out to dealer sites
- [design/variance-strategy.md](design/variance-strategy.md) — component-library + treatment-spec model for dealer site variance

## Spoke (per-dealer schema)

- [spoke/spoke.schema.json](spoke/spoke.schema.json) — JSON Schema for `spoke.config.json`
- [spoke/questionnaire.json](spoke/questionnaire.json) — onboarding field definitions and allowed values
- [spoke/example.spoke.config.json](spoke/example.spoke.config.json) — reference spoke config (shape demo)

## Component library (design references)

- [component-library/README.md](component-library/README.md) — component-library schema, namespaces, curation criteria
- [component-library/hero/research/refero-ae84b62a-topographic-layered-bg.md](component-library/hero/research/refero-ae84b62a-topographic-layered-bg.md) — topographic-contour hero backdrop pattern (TERRAIN/FORGE/TACTICAL)
- [component-library/hero/research/refero-f619e700-centered-screenshot-trio.md](component-library/hero/research/refero-f619e700-centered-screenshot-trio.md) — centered light-hero with screenshot trio + benefit row (FIELD/CLEAN/TERRAIN/PATRIOT)
- [component-library/hero/research/refero-b86571f2-manifesto-creed-hero.md](component-library/hero/research/refero-b86571f2-manifesto-creed-hero.md) — manifesto-creed hero: declarative all-caps headline + full-bleed photograph + real-person pull quote + category cards (PATRIOT/FIELD/TERRAIN/CLEAN)
- [component-library/hero/research/refero-0945a36c-hardware-lineup-dark-hero.md](component-library/hero/research/refero-0945a36c-hardware-lineup-dark-hero.md) — dark studio-sweep hero band with multi-product hardware-lineup composition + lower-left category headline; light category-rail product cards below (FORGE/TACTICAL/TERRAIN)
- [component-library/hero/research/refero-be842c1e-hands-on-craft-hero.md](component-library/hero/research/refero-be842c1e-hands-on-craft-hero.md) — single adult mid-use with the product, warm-interior light, hands engaged not posed (FIELD/PATRIOT/TERRAIN/CLEAN)
- [component-library/hero/research/refero-7d15989d-form-in-hero-overlay.md](component-library/hero/research/refero-7d15989d-form-in-hero-overlay.md) — form-in-hero overlay panel collapses lead-capture into the hero band itself; full-bleed photographic right + saturated overlay-panel left with headline + offer pill + 3–5-field signup form + filled CTA (all 6 archetypes via per-archetype palette)
- [component-library/hero/research/refero-00b3b85b-named-people-credibility-hero.md](component-library/hero/research/refero-00b3b85b-named-people-credibility-hero.md) — named-people credibility hero: dark backdrop + avatar rail on a brand-glow shape + "Meet our people" 3-up named-card grid below; for dealer-network / compliance-team / operator-bench pages where the people ARE the credibility (all 6 archetypes via per-archetype palette)
- [component-library/hero/research/refero-d6176d7e-interactive-product-demo-hero.md](component-library/hero/research/refero-d6176d7e-interactive-product-demo-hero.md) — interactive product-demo hero: cinematic full-bleed photograph + working live UI panel (inputs + selectable rows + live metrics + interactive map + single in-panel CTA) embedded in the hero band; right pick when the dealer has a real interactive product surface (TACTICAL/CLEAN/TERRAIN/FORGE)
- [component-library/hero/research/refero-514d4658-split-prop-tile-hero.md](component-library/hero/research/refero-514d4658-split-prop-tile-hero.md) — split-hero with cream-on-left + saturated-color-tile on the right + single iconic vertical-specific prop cutout on the tile + display-serif audience-named headline + paired CTAs; for "for-[vertical]" landing pages (FIELD/CLEAN/PATRIOT/TERRAIN)
- [component-library/hero/research/refero-507672c5-video-poster-statement-hero.md](component-library/hero/research/refero-507672c5-video-poster-statement-hero.md) — video-poster statement hero: centered bold sans-serif statement on full-bleed cinematic landscape photograph + ONE play-button affordance + optional second statement-on-photo band + 3-icon credibility row + closing CTA; the lightest vision-led hero (FIELD/PATRIOT/TERRAIN/CLEAN)
- [component-library/hero/research/refero-a0978a05-trust-badge-two-tile-hero.md](component-library/hero/research/refero-a0978a05-trust-badge-two-tile-hero.md) — two-tile hero where the certification-badge pill (not the product) is the headline anchor: prop-photo tile + saturated brand-color tile with badge-pill + headline + one CTA; for dealers whose moat is authorization/certification (all 6 archetypes via per-archetype palette)
- [component-library/hero/research/refero-c1c2abcf-emblem-program-hero.md](component-library/hero/research/refero-c1c2abcf-emblem-program-hero.md) — emblem-led dark hero for credentialed dealer programs (compliance, certification, service tiers): contained dark band with program-name wordmark + paired ghost CTAs left and a centered hex emblem with faint radial halo right; no product render, no form (FORGE/TACTICAL/CLEAN/TERRAIN; incompatible with FIELD/PATRIOT)
- [component-library/hero/research/refero-ea86d249-3d-object-dark-hero.md](component-library/hero/research/refero-ea86d249-3d-object-dark-hero.md) — single 3D-rendered symbolic object centered on a contained dark hero band with monochrome logo wall directly below; capability-metaphor opener (FORGE/TACTICAL/TERRAIN/CLEAN; incompatible with FIELD/PATRIOT)
- [component-library/hero/research/refero-f4b01774-fullbleed-video-display-hero.md](component-library/hero/research/refero-f4b01774-fullbleed-video-display-hero.md) — full-bleed autoplay video hero with eyebrow tag + oversized display headline + circular animated scroll-down arrow; no CTA pill in the band (all 6 archetypes via per-archetype footage and typography)
- [component-library/hero/research/refero-43947e4f-mask-reveal-hero.md](component-library/hero/research/refero-43947e4f-mask-reveal-hero.md) — geometric cutout shape on a dark surface revealing a multi-cell collage of proof photographs inside the silhouette + paired stacked CTAs left (TACTICAL/FORGE/TERRAIN/CLEAN/PATRIOT; incompatible with FIELD)
- [component-library/hero/research/refero-14f39897-type-only-stats-hero.md](component-library/hero/research/refero-14f39897-type-only-stats-hero.md) — type-only display headline opening with inline 4-cell stats grid + delayed hero image below the type; restraint-as-affordance opener for dealers whose name / specialty IS the credibility move (all 6 archetypes)
- [component-library/hero/research/refero-d4c69c08-pdp-product-detail-hero.md](component-library/hero/research/refero-d4c69c08-pdp-product-detail-hero.md) — single-product PDP hero: white image-tile + thumbnail strip on left, all-caps DESCRIPTION + PRODUCT FEATURES + italic regulatory disclaimer + ADD TO CART on right; closes the dealer's actual buy-page hero gap that all six existing landing-page heroes leave open (all 6 archetypes via per-archetype palette + casing)
- [component-library/product-block/research/refero-4bcd783f-alternating-pastel-stripes.md](component-library/product-block/research/refero-4bcd783f-alternating-pastel-stripes.md) — alternating full-bleed pastel stripes with ABABAB rhythm (CLEAN/TERRAIN/FIELD/PATRIOT)
- [component-library/product-block/research/refero-eb12db31-dark-feature-bands.md](component-library/product-block/research/refero-eb12db31-dark-feature-bands.md) — full-bleed all-black feature bands with one focal photo per band, no neutral spacers; dark-archetype counterpart to the alternating-pastel-stripes pattern (FORGE/TACTICAL/TERRAIN)
- [component-library/product-block/research/refero-27715bc5-spec-sheet-product-block.md](component-library/product-block/research/refero-27715bc5-spec-sheet-product-block.md) — documentation-led spec-sheet product-block: line-art "In the box" grid + flat label/value spec rows + CAD-style dimensional drawing + single Buy CTA (all archetypes)
- [component-library/product-block/research/refero-a1142f19-head-to-head-comparison.md](component-library/product-block/research/refero-a1142f19-head-to-head-comparison.md) — head-to-head 2–3-model comparison with grouped three-column spec tables, cinematic photo interludes per spec category, and bottom pricing-combo cards (all archetypes; native fit when the dealer carries multiple GTEEX models)
- [component-library/product-block/research/refero-4b64522d-editorial-warm-feature-blocks.md](component-library/product-block/research/refero-4b64522d-editorial-warm-feature-blocks.md) — editorial / heritage product-block: asymmetric two-column blocks → small attribute-card row → irregular material swatch grid → text-only operational rows; the prose-led / vibe-led register that complements the spec-sheet (documentation) and head-to-head (decision) patterns (FIELD/PATRIOT/CLEAN/TERRAIN)
- [component-library/product-block/research/refero-4c2ed506-aerial-photo-spine.md](component-library/product-block/research/refero-4c2ed506-aerial-photo-spine.md) — single continuous full-bleed aerial-farmland photograph as page spine with alternating floating mockup cards; visual unification without alternating stripes (FIELD/TERRAIN/CLEAN/PATRIOT)
- [component-library/product-block/research/refero-713b66c0-spec-comparison-grid.md](component-library/product-block/research/refero-713b66c0-spec-comparison-grid.md) — side-by-side spec-comparison grid: 2–4 product columns with sticky render+price+CTA headers above category-grouped spec rows + "Hide Duplicated Details" density toggle (TACTICAL/CLEAN/TERRAIN/FORGE)
- [component-library/product-block/research/refero-dc38a5c1-color-tile-category-row.md](component-library/product-block/research/refero-dc38a5c1-color-tile-category-row.md) — single-row 4-up color-tile category cards on cream base with cutout product images, structurally distinct from the alternating-stripes vertical rhythm (FIELD/CLEAN/TERRAIN/PATRIOT)
- [component-library/product-block/research/refero-ecfaaa4f-editorial-cream-bands.md](component-library/product-block/research/refero-ecfaaa4f-editorial-cream-bands.md) — light-dominant editorial cadence on a single cream base with tonal-shift bands (no accent saturation); alternates editorial narrative bands with 3-up product card rows (FIELD/CLEAN/TERRAIN/PATRIOT; incompatible with FORGE/TACTICAL)
- [component-library/product-block/research/refero-70415597-compatibility-ecosystem-grid.md](component-library/product-block/research/refero-70415597-compatibility-ecosystem-grid.md) — dark cinematic compatibility / ecosystem tile grid (4-up × 2–3 rows of cutout product photographs on near-black cells with brand + product captions + no per-cell CTA) for surfacing third-party compatibility breadth; dark-archetype counterpart to the cream-base [color-tile category row](component-library/product-block/research/refero-dc38a5c1-color-tile-category-row.md) (FORGE/TACTICAL/TERRAIN/CLEAN)
- [component-library/product-block/research/refero-23ebbc37-live-preview-configurator.md](component-library/product-block/research/refero-23ebbc37-live-preview-configurator.md) — live-preview product configurator: large center canvas with product render + dimensional callouts updating in real-time + right-rail of swatches/module cards/add-on tiles; for genuinely modular products with ≥3 axes of choice (all 6 archetypes via per-archetype palette)
- [component-library/services/research/refero-15fcbffc-three-tier-inverted-middle.md](component-library/services/research/refero-15fcbffc-three-tier-inverted-middle.md) — three-card service-tier grid where the middle tier inverts color to carry hierarchy without size or accent chrome (CLEAN/TERRAIN/FIELD/FORGE/TACTICAL)
- [component-library/services/research/refero-02ae136e-kicker-band-services.md](component-library/services/research/refero-02ae136e-kicker-band-services.md) — kicker-label alternating service bands + single dark capability sub-grid + case-study photo (all archetypes)
- [component-library/services/research/refero-2fdf9ace-photo-mosaic-services.md](component-library/services/research/refero-2fdf9ace-photo-mosaic-services.md) — irregular photo-mosaic services overview paired with right-side capability list (FIELD/CLEAN/TERRAIN/PATRIOT)
- [component-library/services/research/refero-74b10c78-dark-industry-vertical.md](component-library/services/research/refero-74b10c78-dark-industry-vertical.md) — dark-archetype services pattern with audience-anchored framing: dark hero + isometric illustration + key-uses 3-up + capability rows with mockups + data-viz proof grid + trust closer; closes the long-deferred services × FORGE/TACTICAL gap (FORGE/TACTICAL/TERRAIN/CLEAN)
- [component-library/services/research/refero-fef890ec-audience-tabbed-services.md](component-library/services/research/refero-fef890ec-audience-tabbed-services.md) — audience-tabbed services with horizontal tab strip swapping value-prop checklist + supporting photograph per customer-type; for dealers serving multiple distinct customer audiences (all archetypes)
- [component-library/services/research/refero-d928f889-maintenance-program-recommender.md](component-library/services/research/refero-d928f889-maintenance-program-recommender.md) — service-program landing with flat 3-tier comparison + interactive recommender widget (model + flight-time → personalized tier rationale) + 4-up photo proof grid; same product domain (drones) as R-32/I-19 (all archetypes)
- [component-library/services/research/refero-d30b8a54-specialist-marketplace.md](component-library/services/research/refero-d30b8a54-specialist-marketplace.md) — specialist-marketplace services landing: single-accent-keyword headline + 3-step "how it works" numbered row + dark testimonial band + 4-icon capability category row + vetted-partner logo wall; for routing customers to vetted third-party specialists rather than to dealer's own services (all archetypes)
- [component-library/services/research/refero-3d9feff9-photo-led-process-steps.md](component-library/services/research/refero-3d9feff9-photo-led-process-steps.md) — photo-led 6-step process services pattern: program-named hero → 6-step photo grid (3-up × 2 rows, every step gets a real photograph) → qualifying bullets → 2-column "what we accept / don't accept" comparison → FAQ accordion; for multi-step service transactions where customer hesitation is "I don't know how this works" (all archetypes)
- [component-library/services/research/refero-41c5ab43-stats-led-impact-services.md](component-library/services/research/refero-41c5ab43-stats-led-impact-services.md) — stats-led services landing with multiple stat bands stacked above the program walkthrough: 4-up dark certification-credibility band + 3-up light operational-scale band + projects detail rows + 5-icon how-it-works + logo wall + testimonial; for dealers whose differentiation is operational scale (all archetypes)
- [component-library/services/research/refero-28c45270-natural-language-calculator.md](component-library/services/research/refero-28c45270-natural-language-calculator.md) — sentence-shaped quote calculator: "I want [N] acres of [crop] sprayed in [zip]" with editable inline-link spans on a single saturated brand-color hero band; conversational alternative to the card-and-radio recommender (all 6 archetypes)
- [component-library/services/research/refero-6f85d84c-dense-use-case-grid.md](component-library/services/research/refero-6f85d84c-dense-use-case-grid.md) — flat 5×3 use-case grid (12–18 cells) with no photos or CTAs — icon + title + 4-line description per cell; for dealers whose moat is breadth-of-coverage across crop/operation types (all 6 archetypes)
- [component-library/services/research/refero-1e6c57eb-case-study-narrative.md](component-library/services/research/refero-1e6c57eb-case-study-narrative.md) — single-customer long-form case-study layout: customer-name display headline + oversized colored pull quote + right-rail customer card + three-act "challenge / solution / result" editorial prose + prev/next case nav + dark CTA closer (all archetypes; requires named customer + real numbers + real photographs)
- [component-library/services/research/refero-d030e2b2-numbered-process-shopper.md](component-library/services/research/refero-d030e2b2-numbered-process-shopper.md) — process-led / enrollment-led services pattern: brand-color hero + 3-step horizontal numbered timeline (entry → dealer-side → outcome) + ZIP/region locator + "How it works" 3-up cards + 4-up benefit cards with attribution + multi-quote testimonial band on saturated brand-color + FAQ with smart-default expansion + closer signup band; band rhythm is cream/cream-tonal/deep with three deep-band moments and never two adjacent; right pick for service-application, onboarding, or recruitment (Part 107 cohort, fleet-share, operator certification ladder) (all archetypes; merged from numbered-step-process + numbered-stepper-services)
- [component-library/contact/research/refero-376ca585-two-card-decision-pivot.md](component-library/contact/research/refero-376ca585-two-card-decision-pivot.md) — two-card decision pivot (sales vs support) above a multi-column offices grid (all archetypes)
- [component-library/contact/research/refero-23938dfd-form-with-topic-checkboxes.md](component-library/contact/research/refero-23938dfd-form-with-topic-checkboxes.md) — form-led contact with non-interactive topic-checkbox preview + regional phone-number band (all archetypes; PATRIOT requires dropping the watercolor backdrop)
- [component-library/contact/research/refero-71707203-dealer-locator-map.md](component-library/contact/research/refero-71707203-dealer-locator-map.md) — full-bleed interactive map + floating filter-chip column for multi-location dealer networks (all archetypes; right pick when the network's breadth is the credibility move, ~10+ locations)
- [component-library/contact/research/refero-701496e7-calendar-led-rep-card.md](component-library/contact/research/refero-701496e7-calendar-led-rep-card.md) — calendar-led booking with named-rep pre-frame: rep avatar + intake form + calendar grid + timeslot picker stacked in one elevated card; right pick when dealer offers scheduled demos / consultations / fleet check-ins (all archetypes)
- [component-library/contact/research/refero-00cda269-search-led-help-center.md](component-library/contact/research/refero-00cda269-search-led-help-center.md) — self-serve-first help center: photographic hero with embedded search → 4-card category-routing grid with article link lists → tag-filtered FAQ accordion → 3-column phone/email/chat band as fallback footer (all archetypes; requires real knowledge base)
- [component-library/contact/research/refero-7c41e8a8-split-screen-trust-curtain.md](component-library/contact/research/refero-7c41e8a8-split-screen-trust-curtain.md) — split-screen contact with dark "credibility curtain" left half (capability bullets + logo wall + review-stars) and white form right half; for high-hesitation prospects who need pre-frame credibility before filling a form (all archetypes via per-archetype palette)
- [component-library/contact/research/refero-de02c274-ai-assistant-help.md](component-library/contact/research/refero-de02c274-ai-assistant-help.md) — AI-assistant chat help / contact: centered chat card with opening assistant message + example-question quick-pick chips + chat input + small "All systems operational" status indicator; small "Contact support" fallback tile below; for dealers with a real LLM-backed knowledge-base stack (all archetypes)
- [component-library/contact/research/refero-c891061f-tile-grid-inquiry-routing.md](component-library/contact/research/refero-c891061f-tile-grid-inquiry-routing.md) — multi-tile inquiry-routing contact pattern: grid of saturated-color inquiry-type tiles (6+ cells, each its own audience-named heading + paragraph + photograph + text-link CTA) for routing 6+ structurally distinct inquiry types without forcing them through a single form (all archetypes via per-archetype palette)
- [component-library/contact/research/refero-56a7035b-emergency-triage-contact.md](component-library/contact/research/refero-56a7035b-emergency-triage-contact.md) — dedicated `/emergency` triage page: dark cinematic hero + 3 chip-style issue-classifier buttons + one massive saturated CTA, no form or FAQ; purpose-built for high-stakes operational support like Part 137 spray-day blockers (all 6 archetypes via per-archetype palette; FORGE/TACTICAL/TERRAIN are native fits)
- [component-library/contact/research/refero-c29ba321-horizontal-row-directory.md](component-library/contact/research/refero-c29ba321-horizontal-row-directory.md) — phone-directory contact: stack of 5–7 horizontal text rows separated by hairline rules (bold title + 1-line description + right-aligned text-link CTA per row), no card chrome; scales beyond the binary two-card decision-pivot for dealers with many distinct contact intents (all archetypes)
- [component-library/contact/research/refero-4a5e550a-typographic-directory.md](component-library/contact/research/refero-4a5e550a-typographic-directory.md) — typographic intent + region directory: pure typography contact page with serif headings naming each customer-type intent ("Buying / Service / Part 137 / Press / Careers"), each section a 2-column flat-text grid of region → phone/email rows; right pick when dealer (or hub-level network) has 5+ distinct customer types AND/OR multiple regions (all archetypes via per-archetype palette)
- [component-library/contact/research/refero-a40c8cca-catalog-request-form.md](component-library/contact/research/refero-a40c8cca-catalog-request-form.md) — single-purpose catalog/brochure request form with explicit scope-limit disclaimer + minimal address-collection + un-checked newsletter opt-in + single primary CTA (all archetypes; right pick when the dealer mails real physical materials — printed brochures, sell-sheets, training packets)

## Industry research

### Manufacturer profiles
- [research/manufacturers/terraplex.md](research/manufacturers/terraplex.md) — Terraplex Ag profile: parent brand, exclusive GTEEX Revolution distributor, 49-location dealer network, in-house compliance via Sam Welton (created 2026-05-01)
- [research/manufacturers/dji-agras.md](research/manufacturers/dji-agras.md) — DJI Agras profile: T-series lineup (T100/T70P/T50/T25/T30/T20/T10), FCC ruling, $1.5B exposure (last refreshed 2026-05-01)
- [research/manufacturers/hylio.md](research/manufacturers/hylio.md) — Hylio profile: AG-230/HYL-150 ARES, swarm throughput, $2M raise, Texas plant (last refreshed 2026-05-01)

### Dealer economics
- [research/dealer-economics/competitor-distributors.md](research/dealer-economics/competitor-distributors.md) — Agri Spray Drones, Bestway Ag, Rantizo: structural comparison vs Terraplex's distributor model

### Regulatory
- [research/regulatory/2026-04-update.md](research/regulatory/2026-04-update.md) — April 2026 regulatory roundup: USDA NPG-Ag launch, FAA Part 108 status, DJI appeal

### Daily digests
- [research/digests/2026-05-05.md](research/digests/2026-05-05.md) — DJI Agrishow 2026 announcement: global ag-drone fleet hits 600,000 units (+50% vs prior 400K Agrishow 2025 figure), 100+ countries, 3,500 service centers, 7,000+ certified instructors, 410Mt water saved / 51Mt CO₂ cut — fresh global benchmark while US channel remains gated by FCC ruling
- [research/digests/2026-05-03.md](research/digests/2026-05-03.md) — Revolution Drones (Russell Hedrick / Hickory NC) scales US manufacturing for the GTEEX Revolution lineup that Terraplex distributes (NC/NE/IN/IL components; NC + KS/NE assembly; ~250 sold + 300 more built by Feb); Exedy Drones (Japanese-owned, Michigan, 50–70 L payload) enters US market this year
- [research/digests/2026-05-04.md](research/digests/2026-05-04.md) — FAA DETER program effective 2026-04-17 (fast-track settlement for first-time small-UAS violators incl. farmer/ag-service operators) + AgFunder reframes SiFly (Santa Clara; NDAA-compliant Q250, 30-gal payload, ~100-min endurance) as ag-spray entrant
- [research/digests/2026-05-02.md](research/digests/2026-05-02.md) — 2025 US ag-drone market data (+58.7% acres / −59% units; Coalition survey + DJI global report) + Pyka commercial momentum (SLC Agricola Brazil fleet expansion; Heinen Brothers' Kelly Hills as first US Pelican 2 customer)
- [research/digests/2026-05-01.md](research/digests/2026-05-01.md) — Hylio $2M raise + DJI FCC $1.5B impact

### Schema
- [research/README.md](research/README.md) — research-layer schema, source allowlist, curation gate, deep-dive topic queue

## Synthesis (query → file-back outputs)

- [synthesis/new-heights-meeting-2026-05-01.md](synthesis/new-heights-meeting-2026-05-01.md) — Distilled outputs from BGD ↔ New Heights Ag monthly check-in: 2 new platform-feature gaps surfaced (AI Marketing Materials Automation; Trade Show Support Packages), per-dealer direct-to-live trust, industry signals on fertilizer/marketing channels.

## Diagnostics

- [_diagnostic/2026-05-01-gh-probe.md](_diagnostic/2026-05-01-gh-probe.md) — one-shot probe documenting that the `gh` CLI is unavailable in the routine sandbox; explains why routines push branches and rely on `auto-pr.yml` rather than calling `gh pr create`

## Raw sources

Two namespaces, different rules. See [raw/README.md](raw/README.md) for routine-fetched snapshots and [raw/manual-import/README.md](raw/manual-import/README.md) for human-curated reference materials.

**Currently in `raw/manual-import/`** (cited by wiki entries):
- competitors/agri-spray-drones, bestway-drones, dji-agriculture, rantizo (1 homepage snapshot each)
- competitors/terraplex-corporate (7 page snapshots: homepage, drones, find-a-dealer, terraplex-difference, compliance, test-prep, contact)
- gteex-terraplex (R-32 + I-19 sell-sheet PDFs converted to markdown)
