# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Faux Finishes  
**Source of truth:** Existing brand system + approved homepage material concept (2026-11-04)
**References:** Site build + UI UX Pro Max  
**Category:** Professional services / portfolio

---

## Homepage Composition (canonical)

1. **Hero** — centered brand eyebrow + Canela statement; Brisbane/Perth meta clocks; full-bleed auto-scrolling image strip  
2. **Intro** — centered Canela paragraph (no cards)  
3. **Services** — section eyebrow + Canela heading; 3-column material-sample grid with always-visible purple plaster, charcoal coating and yellow render studies; supporting capability links below
4. **Principles** — full-width brand-purple composition; oversized Canela statement, layered cream/yellow/purple finish samples and 3 numbered principles
5. **Projects** — section eyebrow + Canela heading; two always-visible images in an asymmetric 1.7:1 composition, then compact outlined project rows
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
- **Keywords:** Canela light statements, negative space, modular grid outlines, brand purple + yellow accents
- **Avoid:** Purple gradients as full-page backgrounds, heavy cards in heroes, uppercase tracked eyebrows, Inter defaults, warm ochre/terracotta accents that fight the brand purple/yellow

### Color Palette

| Role | Hex | CSS Variable / Notes |
|------|-----|----------------------|
| Primary / Ink | `#111111` | `--color-ink` |
| Secondary | `#525252` | `--color-secondary` |
| Muted | `#737373` | `--color-muted` |
| Body text | `#404040` | `--color-text` |
| CTA | `#111111` | `--color-cta` / hover `#262626` |
| Accent (purple) | `#5E3BBD` | `--color-accent` — links hover, focus, map fill, brand panels |
| Highlight (yellow) | `#FFB81C` | `--color-highlight` — markers, Texture swatch, principle panel |
| Background | `#f6f5f1` | `--color-background` |
| Surface | `#ffffff` | `--color-surface` |
| Border | `#e5e5e5` | `--color-border` |
| Grid outline | `#c8c8c0` | Services / projects grids |
| Inverse | `#0a0a0a` | `--color-inverse` |

Map illustration aliases: `--color-map` → accent; `--color-map-marker` → highlight. Use ink text on yellow surfaces.

**Homepage principles composition**

Use one solid brand-purple section with cream text. Yellow is reserved for numbering and one finish sample. Three tactile sample sheets overlap at the right of the statement; these are decorative materials, not project photographs. A small physical shadow is allowed on the sheets only. On mobile, stack statement, sample composition and numbered principles. Do not restore the former three animated panels.

**Brand surface roles**

| Panel | Hex / token |
|-------|-------------|
| Brand purple | `#5E3BBD` / `accent` |
| Ink | `#111111` |
| Brand yellow | `#FFB81C` / `highlight` (ink text) |

**Footer swatches (on-brand)**

| Label | Hex |
|-------|-----|
| Facade | `#5E3BBD` |
| Protect | `#6e655c` |
| Texture | `#FFB81C` (ink text) |
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
- Homepage service textures and project images are always visible; hover and keyboard focus add a small image scale / arrow shift without moving the layout
- Inner service / project listings retain their existing image-reveal behaviour
- Project map: location details crossfade with a subtle 4px shift over 200ms; keep panel height stable and inactive links out of keyboard navigation
- Homepage principles samples are static; no continuous decorative animation
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

**Homepage service sample**
```
Always-visible material study above a numbered Canela title and summary.
Three equal columns from 640px; stack below. Whole sample links to an existing service route.
Flat cream copy area, borders #c8c8c0, no card shadows or hover background changes.
Use local /finishes/material-samples.webp; textures are decorative, not completed-work evidence.
```

**Inner-page service grid cell**
```
Number top-left; title + summary bottom; image reveals between on hover
No card background change on hover; borders #c8c8c0
```

**Homepage project preview**
```
Two featured projects: wide image left, narrower portrait image offset on the right.
Yellow number markers, location + Outfit project title, arrow and short summary.
Stack at widths below 768px. Images stay visible for touch and keyboard users.
Existing unverified imagery carries an "Illustrative imagery" caption until genuine project images are supplied.
Additional projects use compact hairline rows. No invented clients or completed-work claims.
```

**Inner-page project row**
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

- Brand purple `#5E3BBD` and yellow `#FFB81C` are first-class palette tokens (`accent` / `highlight`), including the project map, hero paint finishes, principles, footer swatches, link hovers, and focus rings.
- Hero: supplied roller PNG paints an interactive horizontal stroke below the statement. Use Facade (purple) / Protect / Texture (yellow) finishes; native range supports dragging and keyboard input. Intro sweep takes 1600ms; reduced motion shows a static painted state.
- About: a real team photograph above a simple vertical timeline. Hide the photo area until a genuine team image is available. Date only verified milestones.
- Logo grids use official or supplied artwork; ink monochrome variants are acceptable for light surfaces.
- Testimonials use Canela light and honest attribution with a source link. Show one quote per slide at every viewport, with native swipe/scroll and clickable paint-bucket SVG pagination when more quotes exist. Highlight the active bucket in the existing accent colour; use 44px targets and keyboard-accessible buttons. Dummy preview quotes must be clearly labelled. Keep a single quote static. No autoplay; respect reduced motion for scrolling.
