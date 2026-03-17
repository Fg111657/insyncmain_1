# Logo System — InSync Physical Therapy

**Authority source:** New Logo V2 (business card PDF)
**Do NOT use:** old green dotted inSync logo, New Logo V1

---

## 1. Mark Anatomy

The InSync mark is a stylized figure in dynamic motion. It consists of four shapes:

| Shape | SVG element | Description |
|---|---|---|
| Head circle | `<circle cx="30" cy="18" r="9">` | Upper dot — the head |
| Wing | `<polygon points="29,39 35,23 98,1 92,18">` | Diagonal parallelogram — motion energy to upper-right |
| J-curve | `<path d="M37,37 C20,48 4,62 3,76 C2,90 18,94 36,92 C50,90 54,83 48,77">` | Thick rounded arc — body in motion |
| Lower circle | `<circle cx="58" cy="77" r="7.5">` | Lower dot — foot/hip anchor |

All coordinates in a `viewBox="0 0 100 100"` unit space.
The J-curve renders as `stroke-width="14"` with `stroke-linecap="round"`.

---

## 2. Colour Rules

| Context | Mark | Wordmark text |
|---|---|---|
| Light backgrounds | NeoBlue `#0EC5E6` | SpaceNavy `#003D59` |
| Dark/navy backgrounds | NeoBlue `#0EC5E6` | White `#FFFFFF` |
| Single-colour emboss/print | SpaceNavy `#003D59` | SpaceNavy `#003D59` |
| Reversed / silhouette | White `#FFFFFF` | White `#FFFFFF` |

**Never** apply the mark in the old green colour, grayscale, or any colour outside the brand palette.

---

## 3. Static SVG Files (`/public/brand/`)

| File | Use case |
|---|---|
| `logo.svg` | Email HTML, print PDFs, social embeds, external sharing |
| `logo-white.svg` | Email on dark backgrounds, PDF dark covers |
| `logo-dark.svg` | Single-colour print, letterhead, emboss |
| `logo-mark.svg` | App store icons, square contexts |
| `logo-primary.png` | Legacy — do not use in new work |
| `logo-white.png` | Legacy — do not use in new work |
| `logo-mark.png` | Source trace reference — do not serve in UI |

---

## 4. React Component (`<BrandLogo>`)

All UI logo usage must go through `components/BrandLogo.tsx`. No direct `<img>` or `<Image>` usage allowed.

```tsx
import BrandLogo from '@/components/BrandLogo';

// Primary — light backgrounds
<BrandLogo variant="primary" height={40} href="/" />

// White — dark/navy backgrounds
<BrandLogo variant="white" height={36} href="/" />

// Mark only — icon contexts
<BrandLogo variant="mark" height={32} />
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | If provided, wraps in `<Link>`. Omit for non-linked contexts. |
| `variant` | `'primary' \| 'white' \| 'mark'` | `'primary'` | Controls text colour. Mark is always NeoBlue. |
| `height` | `number` | `40` | Rendered height in px. Width scales automatically (mark is square + text). |
| `className` | `string` | — | Applied to outer `<Link>` wrapper when href is provided. |

### Placement map

| Placement | Variant | Height |
|---|---|---|
| Navigation (transparent / home hero) | `white` | `36` |
| Navigation (scrolled / white background) | `primary` | `36` |
| Mobile drawer header | `white` | `32` |
| Footer | `white` | `34` |

---

## 5. Favicon & Icons

| File | Size | Purpose |
|---|---|---|
| `app/icon.svg` | Vector | Next.js SVG favicon (auto-served, dark navy background) |
| `public/brand/favicon-32.png` | 32×32 | Browser tab fallback |
| `public/brand/favicon-16.png` | 16×16 | Browser tab minimum |
| `public/brand/favicon-192.png` | 192×192 | Android / PWA |
| `public/brand/favicon-512.png` | 512×512 | PWA splash screen |

All favicon references are configured in `app/layout.tsx` under `metadata.icons`.

---

## 6. Failure Prevention Checklist

| Risk | Mitigation |
|---|---|
| Logo renders as design spec screenshot | ✅ Fixed — `BrandLogo` now uses inline SVG, no PNG dependency |
| Logo blurs at small sizes | ✅ Fixed — SVG scales perfectly to any size |
| Dark mode breaks logo | ✅ Use `variant="white"` on dark backgrounds |
| CLS from logo image load | ✅ Fixed — inline SVG has zero load time |
| Accessibility — missing alt text | ✅ `aria-label="InSync Physical Therapy — Home"` on the link wrapper; SVG is `aria-hidden` |
| Font mismatch (Articulat CF not loaded) | ⚠️ Falls back to Inter (loaded via Google Fonts). Visually acceptable. |
| Text outlined required for print | ⚠️ SVG files use `<text>` (not outlined paths). For print/PDF export, open in Figma and "Outline text". |
| Contrast ratio (mark on white) | NeoBlue `#0EC5E6` on White `#FFFFFF` = 1.65:1 — **logo mark intentionally uses brand accent colour, not body text**. The link's accessible name is in text form (`aria-label`). |

---

## 7. Maintenance — How to Update the Mark

1. Open `/public/brand/logo-mark.svg` in Figma or Illustrator
2. Edit the vector shapes
3. Export simplified SVG (< 200 nodes, no filters, no masks)
4. Run `npx svgo public/brand/logo-mark.svg --multipass`
5. Manually update the 4 SVG path/shape elements in `components/BrandLogo.tsx` (the inline JSX under the "Mark (inline SVG)" comment)
6. Rebuild and verify at `height=24`, `height=36`, and `height=64`
7. Update all files in `/public/brand/` to match

---

*Clinician sign-off not required for logo changes. Design authority: Felix Gonzalez.*
