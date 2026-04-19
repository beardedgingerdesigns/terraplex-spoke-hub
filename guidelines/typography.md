# Typography

> These are Terraplex's visual defaults, not a platform-wide rule. The `field` archetype explicitly overrides this and permits a display serif for headlines.

Use the system font stack by default. Do not import Google Fonts unless specifically requested.

- **Body & headings:** `ui-sans-serif, system-ui, -apple-system, sans-serif` (Tailwind's default sans)
- **Hero headlines (optional):** can use `font-family: system-ui, -apple-system, sans-serif` with `font-stretch: condensed` for a taller/bolder look. This renders as a condensed face on macOS/iOS; other platforms get regular system-ui. Cross-platform variance is accepted.

## Type treatment patterns from existing sites

- Eyebrow labels: uppercase, `tracking-[0.2em]` to `tracking-[0.4em]`, accent color, small text
- Headings: `font-black` (weight 900) or `font-bold` (700), `tracking-tight`
- Body: `leading-relaxed`, muted color (gray-400 on dark, gray-600 on light)

## Why no custom fonts

Zero font-loading cost, brand recognizability is carried by the logo and accent color system, not the typeface. Every existing Terraplex dealer site uses system fonts.
