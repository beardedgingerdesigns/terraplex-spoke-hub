# Field — Farmhouse variant

> Light cream base with deep forest accent. Editorial register. The original Field direction — suitable for gentler agricultural categories where the dealer sells time, products, or experience rather than equipment.

## When to use

Matches brand vibes: **Farm-focused / Down-to-earth / Heritage**. Best for:

- Family farm dealers selling time, products, or experience (CSA, farm-stay, heritage seed)
- Custom-application services where the operator's *care* is the differentiator, not the equipment
- Dealers who explicitly don't want a "tech company" feel
- Operations with no equipment-sale ticket above ~$10K

If the dealer sells equipment (drones, sprayers) at a $10K+ ticket, or runs FAA/DOT/OSHA-regulated services where the equipment register matters, choose the **Industrial-Farm** variant instead.

## Vibe

A second-generation family operator's working office — cream walls, weathered-wood counter, deep-green ledger spine on the shelf, an FAA Part 137 certificate framed but not centered.

## Design specification

- **Surface rhythm:** Page base is `--cream` (`#F4EFE7`). Tonal breaks: one `--amber` "heat" band, one `--loam` "inhale" moment. Form surface stays cream.
- **Hero:** Full-width agricultural photo (field, harvest, aerial farm shot) instead of video. Warm gradient overlay. Centered or left-aligned text. Stillness is the affordance.
- **Texture:** Subtle grain/noise on surfaces, organic shapes (rounded blobs, soft gradients), no geometric precision — feels natural and approachable.
- **Cards:** Warm-toned surfaces (cream, cream-soft, amber-50) with soft borders, rounded corners, warm shadow tints. Hover lifts slightly.
- **Product layout:** Large product image with warm-toned overlay, specs as a clean list or horizontal strip below. Less aggressive than Forge/Tactical — the product is important but the feel is approachable, not militaristic.

## Typography

- **Display (headlines, kickers, numbered process titles):** Fraunces — `wght 600`, `opsz 96`, `SOFT 60`, `WONK 0`. Mixed sentence-case only. Tracking `-0.01em` on H1, `0` below. Line-height `1.08` on H1, `1.18` for H2/H3.
- **Body (paragraph + UI):** Work Sans — `wght 400` prose, `500` UI elements, `600` inline emphasis. Tracking `0`. Line-height `1.6` for prose, `1.45` for short UI surfaces.
- **Numeric:** Work Sans `wght 500` with `font-variant-numeric: tabular-nums lining-nums`. For dense spec sheets, switch to JetBrains Mono `wght 400` at `0.92em`, tracking `0.02em`.
- **Kicker:** Work Sans `wght 600`, `0.74em`, `letter-spacing 0.12em`, all-caps — the only all-caps surface on the site.

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..800,30..100&family=Work+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

## Accent rule

- Forest (`--forest`) is brand chrome: link rest, outlined CTA stroke, kicker dot, ledger-spine moments.
- Wheat (`--wheat`) is sparing: **one kicker in three, never every kicker.** Used for the certified pill fill and hover underline. Loud highlight is *not* the move here — restraint is the move.

## Variant-specific anti-patterns

In addition to the shared Field anti-patterns:

- **Don't use saturated ag-tech green or yellow accents.** Lime-green "precision agriculture" chrome belongs on a Forge dealer; Farmhouse Field's forest accent must read like the spine of a ledger, not the LED on a sprayer rig.
- **Don't show drones in mid-flight as the primary product photograph.** Use Field still-life on tonal cream/amber/loam paper-sweep backgrounds. Mid-flight beauty shots collapse into stock-supplier catalog register.
- **Don't pair the forest accent with a barn-red callout.** Cream + navy + barn-red is the Patriot dealer's trio. The only saturated highlight here is wheat, and even then with restraint.
- **Don't use aerial cinematic loop video as the hero.** Farmhouse's affordance is stillness. Replace any "drone soaring at sunset" reel with a still photograph of the operator's hands on the controller at golden hour — gaze on the equipment, never on the camera.

## Live examples

- `prairie-aerial` — Farmhouse Field reference dealer.

## References

- `component-library/hero/research/refero-be842c1e-hands-on-craft-hero.md` — hero direction (full-bleed warm-interior photograph, gaze on equipment).
- `component-library/product-block/research/refero-ecfaaa4f-editorial-cream-bands.md` — product cadence (cream base + tonal-amber + tonal-loam shifts, no accent saturation).
- `component-library/services/research/refero-3d9feff9-photo-led-process-steps.md` — services pattern (six-cell 3×2 photographic walkthrough).
- `component-library/contact/research/refero-3acf3200-client-services-strip-appointment.md` — contact direction (secondary-nav strip + 2-column simplified form).
