# Terraplex Hub

The single source of truth for Terraplex brand content, shared assets, design archetypes, product data, and the dealer spoke schema used by the BGD dealer site platform.

## What this is

This repo is a **brand hub**. It knows about Terraplex — the company, its products (GTEEX Revolution R-32 and I-19), its positioning language, its visual archetypes, and the data shape every dealer site (spoke) must provide. It knows nothing about hosting, deployment, or any specific dealer.

## How it fits together

```
BGD Site Manager (manager app)
      │
      ├── reads ──► terraplex-spoke-hub  (this repo)
      │                  authoritative brand content
      │
      └── reads ──► sites/{dealer}       (per-dealer spoke repos)
                         dealer-specific spoke.config.json + generated HTML
```

- The **manager app** generates and edits dealer sites via Claude Code. It reads this hub at generation time to pull shared product content, archetype specs, and the spoke schema.
- Each **dealer site** carries a `spoke.config.json` that pins a hub version and declares its identity (archetype, accent color, business details). The spoke validates against `spoke/spoke.schema.json` in this repo.
- **Changes to the hub do not propagate automatically.** A dealer upgrades by bumping the `hub.version` in their `spoke.config.json` — a deliberate act.

## Top-level directories

- `content/` — prose content (positioning, terminology, reusable language, service patterns, exclusions)
- `products/` — structured product data + official sell-sheet body copy for R-32 and I-19
- `archetypes/` — the 6 design archetypes (Forge, Tactical, Terrain, Clean, Field, Patriot) with an index tracking which dealer uses which
- `guidelines/` — cross-cutting design guidance (section patterns, do/don'ts, typography)
- `spoke/` — the per-dealer schema, the onboarding questionnaire definition, and an example spoke config
- `hub.json` — hub manifest (name, version, schemaVersion)
- `assets.json` — URL manifest — the only place raw URLs live
- `feature-gaps.md` — what the platform can't do yet, and what Terraplex has chosen not to offer
- `HUB-CLAUDE.md` — session instructions for Claude Code when editing this repo
- `NOTES.md` — working memory (recent decisions, open questions, follow-ups)

## For Claude Code sessions

Read `HUB-CLAUDE.md` before editing anything in this repo.
