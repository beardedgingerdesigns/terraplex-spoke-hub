# Terrain

> Alternating light/dark sections. Topographic.

## When to use

Matches brand vibes: **Clean/Professional**, **Modern/Tech-forward**. Good fit for dealers who want a map-inspired, rhythmic light/dark alternation with topographic SVG textures — the cadence between sections IS the identity.

Currently used by: **New Heights Ag** (accent `#F36B21`, topographic SVG textures, stylized map widget).

## Design specification

- Theme: alternating between white/gray-50 (light) and gray-900/gray-950 (dark) sections. The rhythm IS the identity.
- Hero: full-viewport video, dark overlay, large typographic wordmark as the headline (not a tagline — the brand name IS the hero text), scroll-cue mouse indicator. Use the shared `heroVideo` with `heroPoster` as fallback.
- Texture: concentric ellipse SVGs as topographic contour lines at low opacity in nearly every section, different center points and colors (accent on dark, gray on light). Grid overlays. Dashed-line ellipses in map widgets.
- Cards: light cards have white bg + gray-100 border, flip to dark gray-900 on hover (bg transition). Dark section cards have gray-800/60 bg with side-bar accent that scales in on hover.
- Product layout: asymmetric 12-column grid (5-col content / 7-col image or reverse). Product image with glow blur behind it and a floating model-number badge (accent bg, white text). Stat bars below as separate 4-column grid with side-accent-bar hover.
- Typography: font-black headlines, clean uppercase, accent color on key words (inline, not gradient). Eyebrow as centered accent-color bar (w-12 h-0.5) above headline.

## Live examples

- New Heights Ag (alternating/orange, topographic SVG textures, stylized map widget)
