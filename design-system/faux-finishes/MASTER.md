# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Faux Finishes  
**Source of truth:** Live homepage (`/`) as of 2026-09-07  
**References:** Site build + UI UX Pro Max  
**Category:** Professional services / portfolio

---

## Homepage Composition (canonical)

1. **Hero** — centered brand eyebrow + Canela statement; Brisbane/Perth meta clocks; full-bleed auto-scrolling image strip  
2. **Intro** — centered Canela paragraph (no cards)  
3. **Services** — section eyebrow + Canela heading; 3-col bordered grid; image reveal on hover  
4. **Principles** — 3 tall tonal panels with animated SVG marks  
5. **Projects** — section eyebrow + Canela heading; stacked bordered rows; image reveal on hover  
6. **Project locations** — purple Australia outline + yellow roller markers; linked project details
7. **Accreditations / partners** — static bordered logo grids
8. **Testimonials** — Canela quote + source attribution; real sourced content only
9. **Footer** — Canela partner CTA, links, Pantone-style brand swatch strip

Do **not** add a mid-page Contact CTA on the homepage (footer carries partner message).

---

## Global Rules

### Pattern
- **Name:** Editorial portfolio + capability grid
- **CTA:** Text links with `ArrowUpRight` (right of label); footer Canela partner block
- **Chrome:** Hairline borders, no card shadows, no pill clusters

### Style
- **Name:** Exaggerated Minimalism × Swiss editorial
- **Keywords:** Canela light statements, negative space, modular grid outlines, warm single accent
- **Avoid:** Purple gradients, heavy cards in heroes, uppercase tracked eyebrows, Inter defaults, cream+terracotta clichés that fight the established palette

### Color Palette

| Role | Hex | CSS Variable / Notes |
|------|-----|----------------------|
| Primary / Ink | `#111111` | `--color-ink` |
| Secondary | `#525252` | `--color-secondary` |
| Muted | `#737373` | `--color-muted` |
| Body text | `#404040` | `--color-text` |
| CTA | `#111111` | `--color-cta` / hover `#262626` |
| Accent | `#a16207` | `--color-accent` (links hover) |
| Background | `#f6f5f1` | `--color-background` |
| Surface | `#ffffff` | `--color-surface` |
| Border | `#e5e5e5` | `--color-border` |
| Grid outline | `#c8c8c0` | Services / projects grids |
| Inverse | `#0a0a0a` | `--color-inverse` |

**Principle panels**

| Panel | Hex |
|-------|-----|
| Slate | `#7f8fa3` |
| Ink | `#111111` |
| Stone | `#8a8175` |

**Footer swatches (on-brand)**

| Label | Hex |
|-------|-----|
| Facade | `#5f6f82` |
| Protect | `#6e655c` |
| Texture | `#8a5a0c` |
| Specialist | `#111111` |

### Typography

| Role | Family | Weight | Usage |
|------|--------|--------|-------|
| Display / UI sans | Outfit | 400–600 | Nav, labels, meta, grid titles |
| Body | Work Sans | 400–500 | Paragraphs, forms |
| Statement / Serif | Canela | **300 light** | Heroes, section headings, intro, footer CTA |

**Scale**

- Page / hero statement: `clamp(2rem, 5.2vw, 4.35rem)`, leading `1.12`, tracking `-0.02em`
- Section heading: `clamp(1.75rem, 4vw, 3rem)`, leading `1.15`, tracking `-0.025em`
- Intro / principle lead: `clamp(1.15rem, 2.2vw, 1.65rem)`–`2rem`, light
- Body: `1rem`–`1.125rem`, relaxed leading
- Eyebrow: `text-sm font-normal text-ink` with trailing period (e.g. `Services.`) — **not** uppercase tracked muted labels

**Utilities**

- `.display-title` → Canela light page heroes  
- `.section-title` → Canela light section heroes  
- `.font-serif` → Canela, weight 300  

### Layout

- Content width: `max-w-[100rem]`
- Horizontal padding: `px-5 sm:px-8 lg:px-10`
- Section rhythm: `--space-section: clamp(4.5rem, 10vw, 7.5rem)`
- Grid / row outlines: `border-[#c8c8c0]` (left + top on container; cells add right/bottom)

### Motion

- Hero rise-in stagger (`animate-rise`, delays)
- Text-link colour + gap shift ~200ms
- Service / project image reveal on hover (~400–500ms)
- Project map: location details crossfade with a subtle 4px shift over 200ms; keep panel height stable and inactive links out of keyboard navigation
- Principles SVG pulse / spin
- Respect `prefers-reduced-motion`

### Components

**Section header (index / home blocks)**
```
eyebrow: text-sm font-normal text-ink → "Label."
title: font-serif light section scale
optional: text-link + ArrowUpRight “See all …”
```

**Page hero (inner routes)**
```
eyebrow: text-sm font-normal text-ink → "Page."
h1: display-title (Canela light)
support: max-w-2xl body text
```

**Text link CTA**
```
.focus-ring .text-link text-sm + ArrowUpRight on the right
```

**Primary button**
```
bg ink; white text; rounded-sm; hover cta-hover
```

**Service grid cell**
```
Number top-left; title + summary bottom; image reveals between on hover
No card background change on hover; borders #c8c8c0
```

**Project row**
```
Left: title + summary (+ image 1/3 on hover desktop)
Right: Status / Location / Client (column unchanged on hover)
Titles: font-normal (not bold)
```

**Footer partner**
```
Project enquiry CTA: warm background form panel beside full-height project photography. Canela light heading; underlined fields; solid ink submit button; direct phone link. Stack panels on mobile. Then compact dark Contact + Explore footer and swatch strip. No false form submission confirmation.
```

### Pre-Delivery Checklist

- [ ] Canela light for statements; Outfit for UI chrome
- [ ] Eyebrows ink + period (no uppercase tracking)
- [ ] No emoji icons (Lucide/SVG only)
- [ ] Hover + focus-visible states; `cursor-pointer` on controls
- [ ] Contrast ≥ 4.5:1
- [ ] Responsive 375 / 768 / 1024 / 1440
- [ ] Grid borders use `#c8c8c0` where listing services/projects

## Website upgrade additions

- Project map illustration only: purple `#9c3c96`, yellow `#ffff00`, sampled from the original company logo. All surrounding UI keeps the established palette.
- Hero: supplied roller PNG paints an interactive horizontal stroke below the statement. Use Facade / Protect / Texture swatches; native range supports dragging and keyboard input. Intro sweep takes 1600ms; reduced motion shows a static painted state.
- About: a real team photograph above a simple vertical timeline. Hide the photo area until a genuine team image is available. Date only verified milestones.
- Logo grids use official or supplied artwork; ink monochrome variants are acceptable for light surfaces.
- Testimonials use Canela light and honest attribution with a source link. Show one quote per slide at every viewport, with native swipe/scroll and clickable paint-bucket SVG pagination when more quotes exist. Highlight the active bucket in the existing accent colour; use 44px targets and keyboard-accessible buttons. Dummy preview quotes must be clearly labelled. Keep a single quote static. No autoplay; respect reduced motion for scrolling.
