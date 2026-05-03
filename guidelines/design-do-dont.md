# Design Do's and Don'ts for Dealer Sites

These sites are **professional marketing sites for agricultural businesses** — they need to look credible, load fast, and convert visitors into leads. They compete directly against [Agri Spray Drones](../research/dealer-economics/competitor-distributors.md) (polished, content-rich, testimonial-heavy) and indirectly against [DJI Agriculture](../research/manufacturers/dji-agras.md) (minimal, premium, corporate). Our advantage is personality, locality, and trust.

## Do

- Pick ONE accent color and derive everything from it (CTA fills, gradients, icon colors, border highlights, eyebrow text).
- Use dark-on-accent or white-on-accent for CTA buttons. Outline variant for secondary CTAs.
- Give cards subtle hover states: border color shift, slight translate-y lift, or a sliding accent line. Keep it restrained.
- Use background atmospheric effects sparingly: subtle gradient glows, SVG pattern overlays at very low opacity (0.02–0.06), or grain/noise textures. These add depth without being distracting.
- Use the shared `heroVideo` on every dealer site (with `heroPoster` as fallback). Apply a dark gradient overlay tinted toward the dealer's accent color.
- Style the thank-you banner to match the dealer's accent color system.
- Lead with outcomes and ROI in copy, not just specs. "Cover 1,600 acres per day" is better than "32-gallon tank capacity." Both should be present, but the outcome leads.
- Make the dealer's phone number, name, and location impossible to miss. This is the #1 competitive advantage over DJI (faceless, global, no local presence). Put the phone number in the header if space allows, always in the contact section, and in the footer.
- Include a testimonial section if the dealer has any customer quotes at all. Even one real quote outperforms zero. Placeholder: ask the dealer during the next check-in.
- Add a "Why Choose [Dealer Name]" or "Why [Dealer Name]" section that explicitly states the value props in the dealer's voice: local support, American-made software, warranty, responsiveness.

## Don't

- Don't use default Tailwind palette colors (indigo-500, blue-600, etc.). Every color should be the dealer's brand accent or a neutral (stone/zinc/gray).
- Don't use flat `shadow-md`. Use layered, color-tinted shadows if any.
- Don't use generic system fonts like Arial. The Tailwind default `ui-sans-serif` stack is fine — it resolves to SF Pro on Mac, Segoe UI on Windows, which both look professional.
- Don't use the same layout as an existing dealer site. Each site should feel distinct. If the last site was all-dark with orange, this one could be alternating light/dark with a different accent. Refer to the 4 existing sites for range: Pyro Ag (dark/orange), Black Knight (dark/gold, geometric accents), New Heights (alternating light-dark/orange, topographic SVG textures), Great River (light/green+gold, card-based product layout).
- Don't add JavaScript beyond the one inline script block at the bottom. No animation libraries, no carousel scripts, no form validation JS.
- Don't redesign the R-32 or I-19 product copy. Use the shared content verbatim. Visual layout is yours to decide.
- Don't write vague corporate copy like "we provide end-to-end solutions." Be specific and direct. "We spray your fields with a drone so you don't have to drive a ground rig through mud" is better than "precision aerial application solutions for modern agriculture."
