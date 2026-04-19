# Dealer Site Section Patterns

Based on 4 existing dealer sites (Pyro Ag, Black Knight, New Heights, Great River), these sections appear on every site. The order and visual treatment vary per dealer, but the content slots are consistent.

## Core sections

1. **Header / Nav** — sticky or fixed, dark. Logo + 3-5 anchor links + primary CTA button. Mobile hamburger menu.
2. **Hero** — full-viewport, background video (`heroVideo` from `assets.json`, with `heroPoster` as fallback), dark overlay. Contains: eyebrow text (usually "Authorized Terraplex Dealer"), big headline (dealer's tagline), support copy, 2 CTAs (primary + secondary).
3. **About / Intro** — dealer's story, credentials, trust positioning. Veterans, family-owned, years of experience, etc.
4. **R-32 Product Block** — GTEEX Revolution R-32 drone. Specs, copy, product image, CTAs. Content is standardized (see `products/r-32.json` and `products/r-32.md`). Visual layout varies wildly per dealer. Product image: `r32ProductImage`. Spec sheet: `r32SpecSheet`.
5. **I-19 Product Block** — GTEEX Revolution I-19 drone. Same shape as R-32 but different specs. See `products/i-19.json` and `products/i-19.md`. Product image: `i19ProductImage`. Spec sheet: `i19SpecSheet`.
6. **Services** — 3-7 cards showing what the dealer offers. Common services: Drone Sales, Precision Spraying, Cover Crop Seeding, Pest Management, Parts & Service, Training & Certification, Regulatory Support, Mapping & Data, Consulting, Custom Application.
7. **Trust / Credentials** — "Authorized Terraplex Dealer" messaging. Sometimes a standalone section, sometimes folded into About. Common trust points: Factory Certified, Genuine Parts, Direct Support, FAA Compliant, Fully Insured.
8. **Contact** — info column (phone, email, location, service area) + contact form. Form points at the Netlify Function handler.
9. **Footer** — logo or wordmark, "Authorized Terraplex Dealer" tagline, nav links, © year.

## Recommended optional sections

Include if the dealer has the content for them.

- **Customer Testimonials** — 2-3 short quotes from real customers with names. Star ratings optional. This is a competitive gap — Agri Spray Drones (a leading competitor) features testimonials prominently and our dealers currently have none. Even one genuine quote makes a difference. Ask the dealer if they have any customer feedback, Google reviews, or text messages from happy customers.
- **Why Choose [Dealer Name]** — a concise section making the case for this specific dealer. Weave in the value propositions: local support, American-made software, 45-day feature turnaround, industry-leading warranty, reduce input losses. This is where the competitive differentiation lives — not as a comparison chart, but as confident statements about what the dealer offers. Example: "When you call, a real person answers. When you need parts, they're in stock. When you need a feature, it ships in weeks — not years."
- **Benefits for Farmers** — a card grid or icon row pulling from the sell sheet benefits: Reduce Input Losses, Lower Operating Costs, Tough Terrain Access, Multi-role Functionality, Sustainable Operations. Frame as outcomes, not features. This bridges the gap between product specs and the farmer's actual decision.

## Other optional sections

- **Service Area** — map widget or geographic callout (New Heights has an elaborate stylized version)
- **Tendering / Equipment Integration** — trailers, skid units, custom upfitting (Great River only)
- **Other Products** — some dealers sell additional drone brands (to clear remaining inventory) or tendering equipment (trailers, skid units, custom upfitting). This is low priority — a brief mention or minimal card grid, NOT a full product section. Don't list specific non-GTEEX model names. "Tendering" = chemical transport and usage at the drone's launching point.
- **Stats / Credibility strip** — flight hours, years of experience, military service, acres covered (Black Knight, Truss)
- **Social media links** — footer icons linking to Facebook, Instagram, YouTube, TikTok. Do NOT build live feed embeds (Instagram grid, etc.) — those are future platform features. Just link icons for now.
