# Agency Website Hero — Plan

## Context
The user wants an attractive agency website with a fullscreen hero video background and logo. The assets (video + logo) will be placed in `/public/` and referenced directly. We'll build a cinematic, dark-atmospheric hero with bold typography, smooth nav, and scroll sections below — all placeholder-ready so the user can drop in their real video and logo files.

## Approach

**Stance:** Ultra-premium creative agency — think Pentagram, Huge, Fantasy Interactive. Pure black ground, refined serif display headlines mixed with tight grotesque body, gold/platinum accent. Every detail exudes craft: micro-animations, smooth reveals, editorial spacing, bespoke hover effects. Positioned as "we build premium websites for businesses and startups."

**Fonts:** Playfair Display (editorial display headings, large & impactful) + Inter (clean, readable body/nav) — Google Fonts via `@import` in `src/index.css`.

**Asset strategy:** Reference `/herobg.mp4` and `/logo.png` (or `.svg`) from `public/`. The user drops their files in and they appear instantly. Add graceful fallbacks if assets are missing.

## Files to modify

- `src/index.css` — Add Google Fonts imports, global base styles, custom scrollbar, CSS variables
- `src/App.tsx` — Full agency homepage layout

## Layout structure (all in `src/App.tsx`)

1. **Nav** — Fixed top bar: logo left, nav links right, subtle blur backdrop
2. **Hero** — Fullscreen `<video>` background (autoplay, muted, loop), dark overlay gradient, centered headline + subheadline + CTA button. Animated scroll indicator at bottom.
3. **Services section** — 3-column grid of agency services with icon + title + description
4. **Work section** — Asymmetric grid of case study cards with hover reveal
5. **About strip** — Single-line bold statement + counters (years, clients, projects)
6. **Contact CTA** — Full-width dark band with headline + email link
7. **Footer** — Minimal: logo, nav links, copyright

## Key design tokens (in `src/index.css`)

```css
--background: #050505;
--foreground: #f0ede8;
--primary: #c9a96e;     /* warm gold accent — premium, not flashy */
--muted-foreground: #6b6b6b;
--border: rgba(255,255,255,0.06);
```

## Premium details to implement

- Hero: fullscreen video with a layered dark gradient overlay (bottom-up + vignette), headline splits into two lines with serif + weight contrast, animated "Scroll" indicator with thin line
- Nav: ultra-thin bar, logo left, 4 links right — all caps tracking-widest, gold underline hover
- Services: numbered list style (01, 02, 03) with divider lines — editorial, not card-grid
- Work/Portfolio: full-bleed image cards with title reveal on hover (slide-up overlay)
- Marquee strip: scrolling text band "PREMIUM WEBSITES · STARTUPS · BUSINESSES ·" between sections
- About: large bold stat counters with thin gold rule, one powerful sentence about the agency
- Contact: oversized email address link with arrow, full-width dark section
- Footer: minimal — logo, year, tagline

## Video + Logo integration

Assets are already uploaded to `src/imports/`:
- Video: `src/imports/hero_bg.webm` → import and use in `<video>` tag
- Logo (transparent): `src/imports/logo-removebg-preview.png` → use in nav + footer
- Logo (JPEG): `src/imports/logo.jpeg` → fallback

Import them in `App.tsx` using Vite's `import heroBg from './imports/hero_bg.webm'` pattern.

## Verification

- Open the preview panel — hero fills viewport, nav is fixed, sections scroll smoothly
- Swap `/public/herobg.mp4` and `/public/logo.png` with real files and confirm they appear
