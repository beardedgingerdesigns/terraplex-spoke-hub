# Field — Industrial-Farm variant

> Loam-dominant inversion of Field. Condensed industrial display sans. Wheat at full saturation as signal yellow. The right register when the dealer sells equipment or runs regulated services and the site needs to read like a piece of equipment, not a Sunday paper agricultural feature.

## When to use

Matches brand vibes: **Farm-focused / Down-to-earth** *with* **equipment-buyer or regulated-services context**. Best for:

- Dealers who sell equipment at a $10K+ ticket (drones, sprayers, trailers)
- FAA / DOT / OSHA-regulated services where the equipment register matters
- Repair / parts / service shops
- Custom-application operators whose differentiator *is* the rig, not the relationship

If the dealer sells time, products, or experience without an equipment-sale ticket, use the **Farmhouse** variant instead.

## Vibe

Workshop after the equipment came in. Loam-painted concrete floor, safety-yellow stripe at the loading dock, parts shelf lit by a single warm bulb, the operator's coat hanging on a hook.

The category buyer is a row-crop farmer or commercial operator making a $46K–$72K equipment decision. They expect the site to read like a piece of equipment: muscular, signal-yellow, weathered-metal — not editorial.

## Design specification

### Surface inversion

| Surface | Farmhouse | Industrial-Farm |
|---|---|---|
| Default page | `--cream` | `--loam` |
| Body text | `--ink` charcoal | `--cream` |
| Section rhythm | Cream → loam inhale → cream | Loam → amber heat moment → loam-deep inhale-darker → loam |
| Form surface | Cream (same as page) | Cream **island** on loam (the only lit moment near the CTA) |
| Hairlines | `--rule-cream` (`#D9D1C2`) | `--rule` (`rgba(244, 239, 231, 0.14)`) |

Result: the site reads as "dark workshop with the parts manual open on the bench" instead of "Sunday paper agricultural feature."

### Hero

Full-bleed photograph of the equipment in use (mid-flight drone, sprayer in the field, operator on the controller). Loam wash overlay. Wheat kicker dash above the headline. Headline set in Big Shoulders Display 900, all-caps.

Industrial-Farm *does* permit mid-flight equipment shots — the register *is* "this is the product."

### Cards & product blocks

- Card surface: `--loam-soft` on `--loam` page base. 1px `--rule` hairline border.
- Border-radius: **0**. No rounded corners anywhere on Industrial-Farm.
- Hover: cream hairline brightens to `--wheat-bright`. No lift transform.
- Product image: full-bleed top, cream specs strip below with tabular numerals in wheat.

## Typography

- **Display (headlines, prices, numerals):** Big Shoulders Display — weights 800–900. **All-caps everywhere.** Tracking `0.02em` on H1, `0.04em` on H2/H3. Line-height `0.95` on H1, `1.05` below.
- **Body:** Inter `wght 500` (heavier default for presence on dark surface). Long-form prose Inter `wght 400`. Tracking `0`. Line-height `1.55`.
- **Kickers:** Inter `wght 700`, `0.74em`, `letter-spacing 0.18em`, all-caps, wheat color, 2px wheat dash leading rule.
- **Numerals (specs, prices, acres-per-hour):** Big Shoulders Display `wght 800`, `font-variant-numeric: tabular-nums lining-nums`, wheat color.
- **Mono:** JetBrains Mono unchanged from Farmhouse — used in dense spec tables.

```css
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;700;800;900&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
```

The all-caps treatment on Big Shoulders Display Black is the move that does the most work — it reads like grain-elevator signage, equipment-stamp lettering, the side of a metal toolbox. Fraunces could never get there no matter how heavy the weight.

## Accent rule

- Wheat at **full saturation** = signal yellow. Used on:
  - Primary CTA fills
  - All kicker lines and kicker dashes
  - All numerals (cred row, prices, service item numbers)
  - Highlighted prose
  - Cred-row top stripe
- Wheat-bright (`--wheat-bright`, `#F0B948`) handles hover lift on primary CTAs.
- **Cap wheat at ~12% of pixel area.** Above that, signal value collapses.
- Forest (`--forest`) is *not* the dominant accent in this variant. Reserve forest for the FAA/Part 137 pill in the cred row and footer legal-stripe text.

Loud highlight is the whole point — it's how equipment manufacturers signal "this is the safety-critical action."

## Buttons

- `border-radius: 0`
- 2px solid border
- Uppercase, Big Shoulders Display 800 weight, `0.09em` tracking
- **Primary:** wheat fill, loam text. Hover → wheat-bright fill.
- **Secondary:** transparent fill, 2px wheat border, wheat text. Hover → wheat fill, loam text.

## Variant-specific anti-patterns

In addition to the shared Field anti-patterns:

- **Don't pair Big Shoulders Display with mixed-case copy.** The condensed industrial sans only reads correctly all-caps. Mixed-case on it looks weak.
- **Don't use rounded button corners or rounded cards.** Industrial-Farm gets `border-radius: 0` everywhere. Rounded corners undo the equipment register immediately.
- **Don't dilute the wheat signal across non-CTA surfaces.** Wheat is reserved for: primary CTA fills, kicker lines, headline numerals, highlighted prose, the cred-row top stripe. If wheat appears on more than ~12% of pixel area, the signal collapses.
- **Don't introduce a third saturated color.** The triad stays loam + cream + wheat with amber as the one warm-tonal break. Adding a red, green, or blue accent breaks the equipment-manual register.
- **Don't use italics on body or display copy.** Italic doesn't exist on a metal sign or a stamped equipment plate.
- **Don't soften the loam page base toward brown.** The base must read as workshop-floor charcoal-brown, not coffee. If a screenshot looks warm/cozy instead of muscular, the loam token has drifted.

## Live examples

- `superior-drone-llc` — Industrial-Farm reference dealer (FAA Part 137, equipment + custom application + repair).

## References

Field's shared research cache applies; Industrial-Farm overrides the typographic and accent direction only. Specific Industrial-Farm-relevant notes:

- Big Shoulders Display chosen for "grain-elevator signage" character; tested against Bebas Neue (too narrow), Oswald (too narrow + too generic), Saira Condensed (too soft). Big Shoulders' wider stance reads as "stamped on metal" rather than "extruded for a logo."
- Wheat-as-signal precedent: equipment manufacturers (Cat, John Deere, Hesston) use saturated yellow on safety-critical surfaces; the convention transfers to UI as "this is the action you take."
