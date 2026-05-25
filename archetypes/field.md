# Field

> Warm earth-tone palette with two register variants: editorial **Farmhouse** and equipment-register **Industrial-Farm**. Agricultural in both directions, but tuned to whether the dealer's product is *time/experience* or *equipment/regulated services*.

## Variants

As of hub v0.5.0, Field is a two-variant archetype. The variant is selected per dealer via `spoke.config.json` → `identity.archetypeVariant`. If omitted, **Farmhouse** is the default (preserves v0.4.0 behavior).

| Variant | When to use | Recipe |
|---|---|---|
| **Farmhouse** | Family operation, CSA, heritage seed, custom-application service, no equipment-sale ticket | [`field/farmhouse.md`](field/farmhouse.md) |
| **Industrial-Farm** | Equipment sales ($10K+ ticket), FAA/DOT/OSHA-regulated services, repair/parts shops | [`field/industrial-farm.md`](field/industrial-farm.md) |

Shared palette tokens and base anti-patterns: [`field/shared.md`](field/shared.md).

## Variant selection guide

| Dealer signal | Variant |
|---|---|
| Sells equipment at $10K+ ticket | **Industrial-Farm** |
| FAA / DOT / OSHA-regulated services | **Industrial-Farm** |
| Repair / parts / service shop | **Industrial-Farm** |
| Sells time, products, or experience (CSA, farm-stay, heritage seed) | **Farmhouse** |
| Family operation with no equipment sale | **Farmhouse** |

When in doubt, ask: *"Is the dealer's differentiator the equipment, or the operator's care?"* Equipment → Industrial-Farm. Care → Farmhouse.

## Shared description

Both variants use the same warm earth-tone palette (cream, amber, loam, forest, wheat). What differs between variants:

- **Surface dominance** — Farmhouse runs cream-dominant with loam as the "inhale" moment; Industrial-Farm inverts to loam-dominant with cream as form-island chrome.
- **Typography** — Farmhouse pairs a display serif (Fraunces) with a humanist sans (Work Sans); Industrial-Farm uses a condensed industrial sans (Big Shoulders Display) all-caps with Inter body.
- **Wheat accent** — Farmhouse uses wheat sparingly (one kicker in three); Industrial-Farm uses wheat at full saturation as safety-yellow signal.
- **Corners and borders** — Farmhouse uses soft rounded corners; Industrial-Farm uses `border-radius: 0` with 2px borders.

Both variants share the no-icon-grid-services rule, the no-autoplay-carousel rule, the bury-credentials rule, and the same palette token hex values.

## Live examples

- `prairie-aerial` — Farmhouse Field
- `superior-drone-llc` — Industrial-Farm Field
