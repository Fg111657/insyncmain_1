# InSync Physical Therapy — Brand Guidelines

> **This document is mandatory reading before your first PR is approved.**
> Every component, page, and style decision must be consistent with what is defined here.
> When in doubt, ask. When not defined here, add a new rule before writing code.

---

## 1. Logo Usage Rules

### Canonical Files
All logo files live in `/public/brand/`. Never use any other logo file.

| File | Use When |
|---|---|
| `logo-primary.png` | On white or off-white backgrounds (most pages) |
| `logo-mark.png` | Icon-only contexts (favicon fallback, small badges) |

> **SVG versions are pending from the designer.** When received, they replace the PNG files and the
> table above updates to `.svg` extensions. Verify SVG before swapping: no embedded fonts,
> no embedded `<image>` tags, explicit `viewBox` attribute.

### Placement Rules
- **Navigation:** logo in top-left, `max-height: 40px`, `width: auto`
- **Footer:** logo, `max-height: 36px`, `width: auto`
- **CTA band:** logo optional at `max-height: 32px` — use sparingly
- **Never** place the logo inside body copy
- **Never** stretch, rotate, recolor, or add drop shadows to the logo

### Logo Variants to Use Per Background
- Dark/navy background → logo must be legible (use white version when available)
- White/off-white background → use `logo-primary.png`
- The old green dotted inSync logo is **deprecated** — do not use
- "New Logo V1" (interim version) is **deprecated** — do not use

### Alt Text
Always: `alt="InSync Physical Therapy"`

---

## 2. Color Palette

**Single source of truth: `lib/theme.ts` → `BRAND` object.**
Never write a hex value directly in a component. Import and use the token.

```ts
import { BRAND } from '@/lib/theme';
```

### Full Token Reference

| Token | Hex | Name | Use |
|---|---|---|---|
| `BRAND.spaceNavy` | `#003D59` | Space Navy | Primary dark: headings, nav, dark section backgrounds |
| `BRAND.luxBlue` | `#00262A` | Lux Blue | Deep support: footer, darkest overlays |
| `BRAND.obsidian` | `#001820` | Obsidian | Deepest dark: gradient endpoints only |
| `BRAND.neoBlue` | `#0EC5E6` | Neo Blue | Accent: CTAs, highlights, active states, links |
| `BRAND.neoBlueHover` | `#0AAFCC` | Neo Blue Hover | Hover/pressed state on NeoBlue elements only |
| `BRAND.white` | `#FFFFFF` | White | Dominant canvas |
| `BRAND.offWhite` | `#F7F9FB` | Off White | Subtle section alternator |
| `BRAND.gray100` | `#F3F4F6` | Gray 100 | Light backgrounds, card fills |
| `BRAND.gray200` | `#E5E7EB` | Gray 200 | Borders, dividers |
| `BRAND.gray500` | `#6B7280` | Gray 500 | Secondary text, captions |
| `BRAND.gray700` | `#374151` | Gray 700 | Body text on white |
| `BRAND.starGold` | `#F59E0B` | Star Gold | **Review stars only.** Do not use elsewhere. |
| `BRAND.disabledBg` | `#B0BEC5` | Disabled BG | **Disabled button background only.** |

### Contrast Rules (WCAG 2.1 AA)
- `BRAND.white` on `BRAND.spaceNavy` → ✅ passes 4.5:1
- `BRAND.spaceNavy` on `BRAND.white` → ✅ passes 4.5:1
- `BRAND.gray700` on `BRAND.white` → ✅ passes 4.5:1
- `BRAND.neoBlue` on `BRAND.white` → ⚠️ **fails 4.5:1 for small text** — use for large text (18pt+) or decorative only
- `BRAND.gray500` on `BRAND.white` → ⚠️ borderline — verify before use as body text

### Section Background Sequence (no two adjacent sections same bg)
```
Hero           → BRAND.spaceNavy (dark)
Trust bar      → BRAND.spaceNavy (dark, slightly lighter)
Services       → BRAND.white
Who we work    → BRAND.offWhite
Combat sports  → BRAND.white
Technology     → BRAND.offWhite
First visit    → BRAND.spaceNavy (dark)
Insurance      → BRAND.white
Reviews        → BRAND.offWhite
Team           → BRAND.white
Locations      → BRAND.spaceNavy (dark)
Footer         → BRAND.luxBlue (darkest)
```

---

## 3. Typography

**Two fonts only. Never introduce a third.**

| Font | Token | Role |
|---|---|---|
| Articulat CF | `var(--font-primary)` | Headings, nav, body, UI, buttons |
| Denton | `var(--font-secondary)` | Pull quotes and testimonials **only** |

**Fallbacks:** Inter → system-ui (primary) / Playfair Display → Georgia (secondary)

### Type Scale Rules
- Minimum body font size: **16px** (prevents iOS zoom on input focus)
- `body1`: 16px, line-height 1.7, `BRAND.gray700`
- `caption`: 11px, uppercase, tracked, `BRAND.gray500`
- `h1`–`h3`: Articulat CF, weights 700–800, tight tracking
- Never use Denton for headings — it is accent only

### Typography Hierarchy
```
SECTION LABEL     caption  uppercase  BRAND.neoBlue  (e.g. "HOW WE WORK")
Section Headline  h2       700        BRAND.spaceNavy
Section Body      body1    400        BRAND.gray700
Card Headline     h5/h6    600        BRAND.spaceNavy
Card Body         body2    400        BRAND.gray500
CTA Text          button   600        BRAND.white or BRAND.neoBlue
```

---

## 4. Spacing System

- **Base unit:** 8px (`theme.spacing(1) = 8px`)
- **Section vertical padding:** `py={{ xs: 6, md: 10 }}` = 48px mobile / 80px desktop
- **Component internal gap:** 24px (`gap: 3`)
- **Card internal padding:** 24–32px
- **Container max-width:** MUI `lg` = 1200px with 24px side padding

**Rule:** Never use arbitrary pixel values for spacing. Use MUI's spacing scale (`theme.spacing(n)` or sx `p={n}`).

---

## 5. Image Style Rules

### What We Use
- Real clinic photos of Dr. Hassan and actual patients
- Real location photos (Brooklyn brownstones, Midtown Manhattan skyline)
- Black-and-white treatment for team headshots only

### What We Never Use
- Generic stock medical imagery (gloves, stethoscopes, hospital corridors)
- Heavily filtered or desaturated clinic photos
- AI-generated imagery

### Photo Orientation
- Clinic session photos: **portrait preferred** (confirmed via EXIF rotation fix)
- Hero backgrounds: any ratio, `objectFit: cover`
- Location photos: landscape (16:9 crop)

### Gradient Overlays on Photos
All photo panels use the brand dual-layer gradient:
```tsx
// Layer 1 — teal tint at top → transparent
background: `linear-gradient(160deg, rgba(14,197,230,0.08) 0%, transparent 40%, rgba(0,38,42,0.72) 100%)`
// Layer 2 — bottom scrim for text legibility
background: `linear-gradient(to bottom, transparent 0%, rgba(0,30,36,0.85) 100%)`
```

### Next.js Image Requirements (mandatory)
```tsx
<Image
  src={url}
  alt="Descriptive alt text — required, never empty on meaningful images"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  style={{ objectFit: 'cover' }}
  placeholder="blur"
  blurDataURL="..." // 4×4 pixel base64 JPEG in BRAND.spaceNavy color
/>
```

### Aspect Ratios
| Context | Ratio | Implementation |
|---|---|---|
| Hero background | 16:9 / full viewport | `height: 100vh` |
| Service card photo | 4:3 | `paddingTop: '75%'` container trick |
| Location hero | landscape crop | `height: 220px`, `objectFit: cover` |
| Team headshot | 1:1 | `aspectRatio: '1/1'` |

### New Photo Upload Procedure
1. Minimum width: 1600px
2. Shoot portrait or confirm EXIF orientation is correct
3. Run through `scripts/fix-rotate-compress.mjs`
4. Upload via `scripts/upload-cdn.mjs`
5. Clear server image cache: `rm -rf .next/cache/images && pm2 restart insync`
6. Verify in browser: `img.naturalHeight > img.naturalWidth` → portrait ✅

---

## 6. Icon Rules

**One icon library: MUI Icons (`@mui/icons-material`). No exceptions.**

Do not mix in FontAwesome, Heroicons, Phosphor, or custom SVG icons.

| Size | Context |
|---|---|
| 16px (`fontSize: '1rem'`) | Inline with small text |
| 20px (`fontSize: '1.25rem'`) | Inline with body text |
| 24px | Standalone UI icons |
| 32px | Feature section icons |
| 40px+ | Hero/large decorative icons |

---

## 7. CTA Hierarchy

| Priority | Label | Style | Component |
|---|---|---|---|
| **Primary** | "Request Appointment" | NeoBlue filled button | `variant="contained" color="primary"` |
| **Secondary** | "Call the Clinic" | SpaceNavy outlined | `variant="outlined" color="secondary"` |
| **Tertiary** | "Learn More" / "View Services" | NeoBlue text link | `variant="text"` or `<Link>` |

**Rules:**
- Primary CTA appears above the fold on every page
- Never have two Primary CTAs adjacent to each other
- CTA label must be action-oriented — never "Click Here" or "Submit"

---

## 8. Animation Rules

- **Framework:** Framer Motion (installed, `motion.div` wrappers only — never replace MUI components)
- **Types allowed:** entrance fade + translate (viewport-triggered, `once: true`)
- **Duration:** max 400ms per element, 150ms stagger between list items
- **Properties:** `opacity` and `transform` ONLY — never animate `width`, `height`, `top`, `left`
- **Never animate:** hero section above the fold (LCP impact), images (CLS impact), navigation
- **Loops:** zero auto-playing loops

```tsx
// Mandatory in every animated component:
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// If true: skip animation entirely — render at final state
```

---

## 9. Development Rules

### Before Every PR
- [ ] Zero hardcoded hex values: `grep -rn "#[0-9A-Fa-f]\{6\}" components/ app/ --include="*.tsx" | grep -v "api/contact" | grep -v "layout.tsx"`
- [ ] All images have descriptive alt text (not empty)
- [ ] Lighthouse score not regressed from baseline (TTFB 55ms, FCP 184ms, domComplete 529ms)
- [ ] Tested at 375px mobile viewport
- [ ] `prefers-reduced-motion` tested on macOS (Accessibility → Reduce Motion)

### The Iron Gate (Non-Negotiable Sequence)
```
1. Research  →  2. Design  →  3. Risk Review  →  4. Prototype
5. Approval  →  6. Integration  →  7. QA  →  8. Merge  →  9. Monitor
```

No step may be skipped.

---

*Last updated: Phase 0 + 1 complete — brand token system locked, zero hardcoded hex values in codebase.*
