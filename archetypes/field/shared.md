# Field — Shared foundation

> Palette tokens, base rules, and shared anti-patterns common to both Field variants (Farmhouse and Industrial-Farm). Variant files extend or invert these defaults; never duplicate token values.

## Shared palette tokens

Both variants draw from the same warm earth-tone palette. What changes between variants is which token is the page base and which token is the chrome — never the hex values themselves.

| Role | Token | Hex | Notes |
|---|---|---|---|
| Surface — cream | `--cream` | `#F4EFE7` | Farmhouse page base; Industrial-Farm form-island only |
| Surface — cream soft | `--cream-soft` | `#EDE5D5` | Form input backgrounds in both variants |
| Surface — amber | `--amber` | `#C4876C` | Tonal "heat" moment (one block per page) |
| Surface — amber deep | `--amber-deep` | `#8A4F36` | Photographic dark band overlay |
| Surface — loam | `--loam` | `#1B130D` | Farmhouse "inhale" moment; Industrial-Farm page base |
| Surface — loam soft | `--loam-soft` | `#2A1F17` | Card surfaces on loam-dominant layouts |
| Surface — loam deep | `--loam-deep` | `#0E0906` | Industrial-Farm cred-row "inhale-darker" (new in v0.5.0) |
| Accent — forest | `--forest` | `#003911` | Farmhouse brand chrome / link rest / kicker dot |
| Accent — wheat | `--wheat` | `#D8A24A` | Farmhouse: one-in-three kicker. Industrial-Farm: dominant signal yellow |
| Accent — wheat bright | `--wheat-bright` | `#F0B948` | Industrial-Farm hover / heat lift (new in v0.5.0) |
| Ink — charcoal | `--ink` | `#1F1A14` | Headlines and primary text on cream |
| Ink — muted | `--ink-muted` | `#5B5246` | Long-form prose, captions, footnote links |
| Rule — stone | `--rule-cream` | `#D9D1C2` | 1px hairlines on cream surfaces |
| Rule — translucent | `--rule` | `rgba(244, 239, 231, 0.14)` | 1px hairlines on loam surfaces |
| State — meadow | `--meadow` | `#5C7E3A` | Form success, in-stock pill, validated check |

## Shared anti-patterns (apply to both variants)

These hold regardless of which variant a dealer is on. Variant-specific carve-outs live in each variant's recipe.

- **Don't slap "FAA Part 137 Certified" as a saturated badge in the top nav.** Bury operator credibility in the manifesto band and the contact-page address block. Chrome-loud certification reads as compensating insecurity.
- **Don't use icon-grid services blocks.** Replace with photo-led process steps (six 16:10 photographs in 3×2). Icons collapse a multi-step custom-spraying / cover-crop / repair service into a generic SaaS feature grid.
- **Don't auto-rotate testimonial carousels.** If quotes appear, set them inline within a manifesto band. A sliding carousel converts heritage into infomercial.
- **Don't write spray-width or coverage claims in headline copy without an inline footnote.** Part 137 customers read marketing claims as regulatory commitments. Footnote any acres-per-hour or gallon-per-acre figure to the spec sheet with a quiet `*see spec` link in `--ink-muted`.
- **Don't add a live calendar widget to the contact page.** A family-owned dealer thrives on the asynchronous human follow-up promise. The simplified form with optional date/time signals "we'll call you back within one business day."
- **Don't introduce a third saturated color outside the variant's accent triad.** Field is a disciplined two-accent register in both variants. Adding red/blue/green chrome breaks it.
