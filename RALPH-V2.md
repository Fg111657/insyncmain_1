# RALPH V2 — InSync Physical Therapy Website Overhaul
## Risk-Mitigated Implementation Specification
**Version:** 2.0
**Project:** InSync Physical Therapy
**Owner:** Felix Gonzalez
**Client:** Dr. Hassan Elagaty, DPT
**Stack (current):** Next.js · MUI · DigitalOcean · Cloudflare · Resend
**Status:** Site live at insync-pt.com · Phase 1 build complete · Phase 2 begins here

---

## Preflight: What Already Exists (Do Not Rebuild)

Before any task begins, confirm the following are live and working:

| Asset | Status | Location |
|---|---|---|
| Brand color tokens | ✅ Done | `lib/theme.ts` — BRAND object |
| MUI theme | ✅ Done | `lib/theme.ts` |
| Font system | ✅ Done | Articulat CF + Denton, fallback to Inter + Playfair |
| 18 homepage components | ✅ Done | `components/` |
| 6 pages | ✅ Done | `app/` |
| Image CDN | ✅ Done | DO Spaces `insync-assets.nyc3.cdn.digitaloceanspaces.com` |
| 73 clinic photos (EXIF-corrected) | ✅ Done | CDN `assets/hassan-pt/photos/` |
| Location photos | ✅ Done | CDN `assets/locations/` |
| Lead form → Resend email | ✅ Done | `app/api/` |
| Google Maps embeds | ✅ Done | `LocationsSection.tsx` |
| Schema markup | ✅ Done | `lib/schema.ts` |

**Rule: Nothing in this column gets re-implemented. Build forward only.**

---

## PHASE 0 — Technical Blueprint (Required Before Any Feature)

> Every failure mode analysis points to the same root cause: features built without a blueprint drift, break, and contradict each other. Phase 0 locks the ground rules before a single component is touched.

### 0.1 Confirm Current Brand Tokens Are the Single Source of Truth

**File:** `lib/theme.ts`
**Current confirmed palette:**

```
SpaceNavy   #003D59   primary dark · headings · nav · dark sections
LuxBlue     #00262A   deeper support · footer · overlay backgrounds
NeoBlue     #0EC5E6   accent · CTAs · highlights · active states
White       #FFFFFF   dominant canvas
OffWhite    #F7F9FB   subtle section alternator
Gray100     #F3F4F6
Gray200     #E5E7EB
Gray500     #6B7280
Gray700     #374151
```

**Current confirmed fonts:**
```
Primary:   Articulat CF  (headings, nav, body, UI)
Secondary: Denton        (pull quotes, testimonials only)
Fallback:  Inter / Playfair Display
```

**Action items:**
- [ ] Audit every component file — confirm zero hardcoded hex values exist outside `lib/theme.ts`
- [ ] Run `grep -r "#[0-9A-Fa-f]\{6\}" components/` and resolve any stragglers
- [ ] Add ESLint rule to block hardcoded hex strings in JSX/TSX files going forward
- [ ] Confirm CSS variables (`--font-primary`, `--font-secondary`) in `app/globals.css` match the theme

**Risk mitigations embedded:**
- FAIL: Developers use slightly different hex codes → PREVENT: Single BRAND object, linted
- FAIL: Multiple logo files floating → PREVENT: One canonical `/public/brand/` folder (see 1.1)
- FAIL: Brand guidelines ignored → PREVENT: `BRAND_GUIDELINES.md` is mandatory pre-merge reading

---

### 0.2 Performance Baseline Snapshot

Before ANY new features ship, capture this baseline so you can measure regressions:

```bash
# Run from local machine against live site
npx lighthouse https://insync-pt.com --output=json --output-path=./lighthouse-baseline.json
```

**Record these values:**
- [ ] LCP (target: < 2.0s)
- [ ] CLS (target: < 0.1)
- [ ] TBT (target: < 200ms)
- [ ] FCP (target: < 1.5s)
- [ ] Accessibility score (target: > 90)

**Store as:** `docs/lighthouse-baseline.json`
**Rule:** No phase ships if Lighthouse score regresses by more than 5 points from baseline.

---

### 0.3 Define the Development Gate

**Every feature follows this exact sequence — no exceptions:**

```
1. Research     → read failure modes, study prior art, understand constraints
2. Design       → wireframe or written spec, no code yet
3. Risk review  → confirm all 10 failure modes for that feature are addressed
4. Prototype    → build in isolation (Storybook or dev branch)
5. Approval     → Felix reviews the prototype
6. Integration  → merge into development branch
7. QA           → mobile + desktop + accessibility test
8. Lighthouse   → must not regress vs baseline
9. Merge        → development → main
10. Monitor     → check CDN, PM2, Cloudflare for 24h post-deploy
```

---

## PHASE 1 — Branding System Hardening

> The brand system is built but not locked. This phase converts the existing BRAND object into an enforced system that cannot drift.

### 1.1 Create the `/public/brand/` Asset Vault

**Problem it prevents:** Multiple logo versions floating → developers using outdated files.

**Tasks:**
- [ ] Create folder `/public/brand/`
- [ ] Add `logo-primary.svg` — full color, used on white/light backgrounds
- [ ] Add `logo-white.svg` — all-white version, used on dark/navy backgrounds
- [ ] Add `logo-dark.svg` — dark version (SpaceNavy), used on offWhite backgrounds
- [ ] Add `favicon.ico` (32×32 and 16×16 multi-size ICO)
- [ ] Add `favicon-192.png` (PWA icon)
- [ ] Add `favicon-512.png` (PWA splash)
- [ ] Add `og-image.jpg` (1200×630 — OpenGraph preview, brand colors + logo)

**SVG verification checklist for each logo file:**
- [ ] `viewBox` is explicitly set (e.g. `viewBox="0 0 200 60"`)
- [ ] No embedded `<image>` tags (rasterized fallbacks break Safari)
- [ ] No hardcoded `width`/`height` attributes (prevents responsive scaling)
- [ ] No embedded fonts (fonts render incorrectly cross-browser)
- [ ] File passes `svgo` optimization without visual change
- [ ] Tested in Chrome, Safari, Firefox, Edge

**Risk mitigations:**
- FAIL: Logo distortion in responsive containers → PREVENT: `max-height: 48px` constraint applied at Navigation level, `width: auto`
- FAIL: Logo disappears on dark backgrounds → PREVENT: `logo-white.svg` used in `Navigation.tsx` dark mode, `Footer.tsx`, hero overlay
- FAIL: SVG rendering errors in Safari → PREVENT: SVG validation checklist above, no embedded images
- FAIL: Favicon appears blurry → PREVENT: ICO format with multiple sizes, not a single PNG

---

### 1.2 Implement Logo in All Required Locations

**Locations and which logo variant to use:**

| Location | Component | Logo variant | Max height |
|---|---|---|---|
| Navigation (light scroll) | `Navigation.tsx` | `logo-primary.svg` | 40px |
| Navigation (dark scroll/sticky) | `Navigation.tsx` | `logo-white.svg` | 40px |
| Footer | `Footer.tsx` | `logo-white.svg` | 36px |
| Hero section | `HeroSection.tsx` | none (nav handles it) | — |
| Appointment CTA band | `CTABand.tsx` | `logo-white.svg` | 32px |
| OG / Social Preview | `app/layout.tsx` → metadata | `og-image.jpg` | n/a |
| Favicon | `app/layout.tsx` → metadata | `favicon.ico` | n/a |

**Implementation rule for Navigation scroll state:**
```tsx
// Navigation should detect scroll position and swap logo
// Use: scrollY > 20 ? 'logo-white.svg' : 'logo-primary.svg'
// Prevent FOUC by setting CSS transition on opacity, not display
```

**Risk mitigations:**
- FAIL: Logo placement hierarchy confusion / appears too many times → PREVENT: Logo appears in nav + footer only as navigation anchor; CTA band uses it for brand reinforcement only at small size
- FAIL: Scaling issues on mobile → PREVENT: `max-height` constraint + `width: auto`, tested at 320px viewport minimum
- FAIL: Logo text unreadable in high contrast mode → PREVENT: SVG uses semantic fills, not CSS filters; alt text = "InSync Physical Therapy"

---

### 1.3 Create `BRAND_GUIDELINES.md`

**File location:** `/BRAND_GUIDELINES.md` (project root)

**Required sections:**

```markdown
# InSync Physical Therapy — Brand Guidelines

## 1. Logo Usage Rules
- Always use files from /public/brand/ — never recreate or modify the logo
- Logo on white: use logo-primary.svg
- Logo on dark/navy: use logo-white.svg
- Minimum clear space: equal to the height of the "I" in InSync on all sides
- Never stretch, rotate, recolor, add drop shadows, or place on busy backgrounds
- Never use the old green dotted inSync logo (deprecated)
- Never use New Logo V1 (interim version, deprecated)

## 2. Color Palette
[exact hex values from BRAND object in lib/theme.ts]

## 3. Typography
- Headings: Articulat CF (licensed) / Inter (fallback)
- Pull quotes / testimonials: Denton (licensed) / Playfair Display (fallback)
- Body copy: Articulat CF / Inter
- NEVER use more than 2 font families on any page
- Minimum body font size: 16px

## 4. Spacing System
- Base unit: 8px
- Section vertical padding: 80px desktop / 48px mobile
- Component gap: 24px
- Container max-width: 1200px (MUI 'lg')

## 5. Image Style
- All clinic photos: portrait orientation preferred
- Photos show real staff and real patients only
- No stock medical imagery (gloves, stethoscopes, generic hospital)
- Gradient overlay on photo panels: SpaceNavy teal tint → deep navy
- No filters that desaturate to black and white (except TeamSection headshots)

## 6. Icon Style
- One icon library only: MUI Icons (already installed)
- Do not mix MUI Icons with FontAwesome, Heroicons, or custom SVG icons
- Icon size: 20px inline, 24px standalone, 32px feature icons

## 7. CTA Hierarchy
- Primary CTA: "Request Appointment" → NeoBlue filled button
- Secondary CTA: "Call the Clinic" → outlined SpaceNavy button
- Tertiary: "Learn More" / "View Services" → text link, NeoBlue
```

**Risk mitigations:**
- FAIL: Brand guidelines ignored → PREVENT: Document is required reading before first PR is reviewed; enforced via PR template checklist

---

### 1.4 Add Brand Linting Rules

**File:** `.eslintrc.json` (add rule)

```json
{
  "rules": {
    "no-restricted-syntax": [
      "error",
      {
        "selector": "Literal[value=/^#[0-9A-Fa-f]{6}$/]",
        "message": "Use BRAND tokens from lib/theme.ts instead of hardcoded hex colors"
      }
    ]
  }
}
```

**Run to verify clean:** `npx eslint components/ lib/ app/ --ext .tsx,.ts`

---

## PHASE 2 — Location Naming SEO Update

> Brooklyn stays Brooklyn. "Bryant Park" moves from primary heading to secondary descriptor. "Manhattan" becomes the primary label. SEO signal for Bryant Park is preserved, not deleted.

### 2.1 Audit Current Location String Occurrences

**Before changing anything, find every occurrence:**

```bash
grep -r "Bryant Park" components/ app/ lib/ --include="*.tsx" --include="*.ts" --include="*.json" -n
grep -r "Bryant Park" components/ app/ lib/ --include="*.tsx" --include="*.ts" --include="*.json" -n > docs/bryant-park-audit.txt
```

- [ ] Review `docs/bryant-park-audit.txt` — categorize each as: heading | subtext | metadata | schema | body copy
- [ ] Do NOT change anything yet — review first

**Risk mitigations:**
- FAIL: Hardcoded strings changed in some components but not others → PREVENT: Complete audit before any changes

---

### 2.2 Update Primary Display Labels

**What changes:**

| Old primary label | New primary label | Where Bryant Park moves |
|---|---|---|
| "Bryant Park, New York City" | "Manhattan, New York City" | Subtext: "Located near Bryant Park in Midtown Manhattan" |
| "Bryant Park" (heading) | "Manhattan PT Clinic" | Body copy / secondary descriptor |

**Components to update:**
- [ ] `LocationsSection.tsx` — location card heading
- [ ] `Navigation.tsx` — if locations dropdown exists
- [ ] `Footer.tsx` — location list in footer
- [ ] `app/locations/page.tsx` — page heading
- [ ] Any `<h1>`, `<h2>`, `<h3>` tags referencing Bryant Park as primary

**Rule:** After each component change, run a visual diff. Do not batch all changes and ship at once.

---

### 2.3 Preserve Bryant Park in SEO Contexts

**Bryant Park MUST remain in:**
- [ ] `<title>` tag for the locations page: `"Physical Therapy Manhattan NYC | Near Bryant Park | InSync"`
- [ ] `<meta name="description">` content
- [ ] `<h2>` or `<p>` body text: "Conveniently located near Bryant Park in Midtown Manhattan"
- [ ] `lib/schema.ts` → `MedicalBusiness` schema → `address` → `areaServed` array
- [ ] `NeighborhoodSEOBlock.tsx` component — confirm Bryant Park appears here
- [ ] Footer address block subtext

**Verification:** After deploy, use Google Search Console to confirm existing Bryant Park impressions are not dropping. Check at 7 days and 30 days.

---

### 2.4 Update All Metadata

**File:** `app/layout.tsx` and each page's `generateMetadata` or static metadata export.

**Manhattan location page target:**
```tsx
title: 'Physical Therapy Manhattan NYC | Near Bryant Park | InSync PT',
description: 'Physical therapy clinic in Midtown Manhattan, steps from Bryant Park. Orthopedic rehab, sports injury, and post-surgical recovery.',
openGraph: {
  title: 'InSync Physical Therapy — Manhattan, NYC',
  description: '...',
}
```

**Brooklyn location page target:**
```tsx
title: 'Physical Therapy Brooklyn NYC | Gates Ave | InSync PT',
description: 'Physical therapy in Bushwick, Brooklyn. Serving Bed-Stuy, Ridgewood, Crown Heights. Orthopedic rehab and sports injury specialists.',
```

**Risk mitigations:**
- FAIL: Duplicate page titles → PREVENT: Every page's title is unique — verified via `<title>` audit script
- FAIL: Metadata mismatch (title says Manhattan, description says Bryant Park) → PREVENT: Metadata reviewed as a pair before shipping
- FAIL: Google Business listing conflict → PREVENT: After site deploy, update Google Business Profile to match new primary label "Manhattan"
- FAIL: Bryant Park removed entirely and SEO ranking disappears → PREVENT: Bryant Park string audit confirms it remains in 3+ non-heading contexts per location page

---

### 2.5 Update Schema Markup

**File:** `lib/schema.ts`

For the Manhattan location `MedicalBusiness` schema:
```json
{
  "@type": "MedicalBusiness",
  "name": "InSync Physical Therapy — Manhattan",
  "description": "Physical therapy clinic in Midtown Manhattan, near Bryant Park.",
  "address": {
    "streetAddress": "55 W 39th St, 3rd Floor, Suite 303",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10018",
    "addressCountry": "US"
  },
  "areaServed": ["Midtown Manhattan", "Bryant Park", "Hell's Kitchen", "Chelsea", "Murray Hill"]
}
```

- [ ] Validate using Google Rich Results Test after deploy
- [ ] Validate using Schema.org validator

---

## PHASE 3 — Layout Modernization

> The current layout is functional but sections feel stacked. This phase adds visual rhythm, section transitions, and consistent spacing — without breaking existing components.

### 3.1 Audit Current Spacing Inconsistencies

**Before adding anything new:**
- [ ] Screenshot every section on mobile (375px) and desktop (1280px)
- [ ] Measure section padding — document which sections deviate from the 80px/48px standard
- [ ] Create `docs/spacing-audit.md` with findings

**Risk mitigation:**
- FAIL: Design drift — new sections break layout rhythm → PREVENT: Spacing audit establishes the baseline rule every future component must follow

---

### 3.2 Create a SectionWrapper Component

**Purpose:** Enforces consistent vertical rhythm across every section. Prevents the #4 failure mode (inconsistent spacing) permanently.

**File:** `components/SectionWrapper.tsx`

```tsx
// Props: background ('white' | 'offWhite' | 'navy'), py (padding override)
// Default: background='white', py={{ xs: 6, md: 10 }} (48px / 80px)
// Contains: Container maxWidth="lg", centered content
// Usage: wrap every section in this instead of ad-hoc Box sx={{ py: ... }}
```

**Migration:**
- [ ] Update each of the 18 existing components to use SectionWrapper
- [ ] Remove duplicated `py`, `backgroundColor`, and `maxWidth` logic from individual components
- [ ] One component at a time — test after each

**Risk mitigations:**
- FAIL: Inconsistent spacing → PREVENT: SectionWrapper is the only way to set section background and padding
- FAIL: New components don't follow grid rules → PREVENT: SectionWrapper is the documented standard; PR template requires it

---

### 3.3 Add Framer Motion — Entrance Animations Only

**Rule before installing:** Animations are enhancement, not feature. If they fail to load, the site works identically without them.

**Installation:**
```bash
npm install framer-motion
```

**What gets animated:**
- Section headings: fade-in + translate-up 16px, on viewport entry
- Service cards: staggered fade-in (100ms delay per card)
- Stats/trust bar numbers: count-up on viewport entry
- CTA buttons: subtle scale on hover (already via MUI, confirm only)

**What does NOT get animated:**
- Navigation
- Hero section above the fold (LCP element — never animate)
- Images (causes CLS)
- Anything that triggers layout shift

**Implementation pattern:**
```tsx
// Use a shared MotionBox wrapper — not framer-motion directly in leaf components
// components/MotionSection.tsx
// Props: delay (number, default 0), children
// Uses: useInView from framer-motion, viewport: { once: true }
// once: true prevents re-triggering on scroll back up
```

**Reduced motion — mandatory:**
```tsx
// In every animated component:
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// If true: skip animation, render immediately at final position
```

**Risk mitigations:**
- FAIL: Animation overload → site feels gimmicky → PREVENT: Only entrance animations; no loops, no parallax, no scroll-linked position
- FAIL: Scroll performance issues / lag on older devices → PREVENT: GPU-only animations (transform, opacity) — never animate width, height, top, left
- FAIL: Layout shift (CLS) → PREVENT: Pre-allocate space before animation; images never animated
- FAIL: Framer Motion conflicts with MUI → PREVENT: Only use `motion.div` as wrappers around MUI components, never replace MUI components with motion equivalents
- FAIL: Motion triggers vestibular disorders → PREVENT: `prefers-reduced-motion` respect is mandatory, tested with macOS accessibility setting

---

### 3.4 Section Transition Visual Rhythm

**Current problem:** All sections use a flat horizontal divider. No visual flow between sections.

**Solution — alternating background system (already in BRAND):**
```
Hero          → Navy dark
Trust bar     → Navy medium
Services      → White
Who we work   → OffWhite
Combat sports → White
Technology    → OffWhite
First visit   → Navy dark
Insurance     → White
Reviews       → OffWhite
Team          → White
Locations     → Navy dark
Footer        → LuxBlue darkest
```

**Rule:** No two adjacent sections have the same background. Section transitions are handled by background color change, not borders or dividers.

- [ ] Audit current section backgrounds against this sequence
- [ ] Update `SectionWrapper` background props to match
- [ ] Remove any `<Divider>` components between sections

---

## PHASE 4 — Horizontal Carousel (Conditions/Services)

> Converting "Specialized Care for Every Injury" from vertical list to horizontal scroll carousel. This section has the highest interaction failure risk — do this carefully.

### 4.1 Research Gate (Do This Before Writing a Line of Code)

- [ ] Install Embla Carousel in a throwaway Next.js sandbox (not the live repo)
- [ ] Test on iPhone Safari — confirm touch swipe does not conflict with page scroll
- [ ] Test on Android Chrome — same check
- [ ] Test keyboard navigation: Tab to carousel, arrow keys scroll, Enter activates
- [ ] Confirm Embla's SSR compatibility with Next.js App Router
- [ ] Read Embla docs on `dragFree`, `containScroll`, and `loop` options
- [ ] Decide: loop or no loop? (Recommendation: no loop — avoids duplicate content SEO risk)

**Only proceed to 4.2 after the sandbox test passes on all three: iOS, Android, keyboard.**

---

### 4.2 Install and Configure Embla Carousel

```bash
npm install embla-carousel-react embla-carousel-autoplay
```

**Component:** `components/ConditionsCarousel.tsx`

**Required features:**
- [ ] Mobile: swipe gesture (native touch, handled by Embla)
- [ ] Desktop: drag with mouse (`draggable` option)
- [ ] Desktop: prev/next arrow buttons visible
- [ ] Keyboard: left/right arrow keys when carousel is focused
- [ ] Partial visibility of next card (shows users more content exists — prevents "hidden content" failure)
- [ ] Dots indicator below carousel (shows position, especially important on mobile)
- [ ] `containScroll: 'trimSnaps'` — prevents empty space at ends
- [ ] NO autoplay — medical content should never auto-advance without user action

**Partial visibility implementation:**
```tsx
// CSS: overflow: visible on the track container
// Each slide: width: 85% on mobile, width: 30% on desktop (shows 3.3 cards)
// This creates the "peek" effect that signals scrollability
```

**Static HTML fallback (SEO + no-JS):**
```tsx
// Wrap carousel in <noscript> fallback
// Render all items as a scrollable flex row with overflow-x: auto
// This ensures Google indexes all carousel content
```

---

### 4.3 Conditions to Include in Carousel

Based on current `ServicesGrid.tsx` content, carousel slides:

| Slide | Condition | Icon | Link |
|---|---|---|---|
| 1 | Shoulder Injuries | shoulder icon | /services#shoulder |
| 2 | Knee Injuries | knee icon | /services#knee |
| 3 | Back & Spine | spine icon | /services#back |
| 4 | Hip Pain | hip icon | /services#hip |
| 5 | Running Injuries | run icon | /services#running |
| 6 | ACL Rehab | sports icon | /services#acl |
| 7 | Rotator Cuff | arm icon | /services#rotator-cuff |
| 8 | Post-Surgical | recovery icon | /services#post-surgical |
| 9 | Chronic Pain | pain icon | /services#chronic-pain |
| 10 | Combat Sports | mma icon | /services#combat |

**Risk mitigations:**
- FAIL: Scroll trapping — users get stuck → PREVENT: Embla does not trap; horizontal scroll on the carousel, vertical page scroll still works
- FAIL: Hidden content — users don't know more exists → PREVENT: Partial card visibility + dots indicator
- FAIL: Accessibility failure — keyboard users can't navigate → PREVENT: Tab to carousel, arrow keys, ARIA `role="region"` + `aria-label="Conditions carousel"`
- FAIL: Mobile swipe conflicts with page scroll → PREVENT: Embla handles this correctly; verified in 4.1 sandbox
- FAIL: Lazy loading failure — images pop in late → PREVENT: `loading="lazy"` on all carousel images; placeholder blur via Next Image
- FAIL: SEO invisibility — Google doesn't index carousel content → PREVENT: Static HTML fallback in `<noscript>`, all text content in DOM
- FAIL: Animation jitter on slide transitions → PREVENT: Use `transform: translateX()` only, no `left` or `margin` animations
- FAIL: Broken loop logic → PREVENT: `loop: false` — no loop, no duplicate logic

---

### 4.4 Analytics Tracking

```tsx
// Track carousel interactions — critical for understanding if it works
// Fire event on: first slide drag, arrow click, which slide is viewed
// Use: window.gtag or equivalent if analytics is installed
// Store event name as: 'carousel_interaction', label: 'conditions_carousel'
```

---

## PHASE 5 — "What To Expect" Section Redesign

> Current: 5 numbered text blocks. Goal: User understands the process visually in under 5 seconds.

### 5.1 Storyboard the 5 Steps Before Building

**Decision required before code:** Which animation approach?

| Option | Pros | Cons | Risk level |
|---|---|---|---|
| A: Framer Motion step icons | Already have Framer Motion installed, consistent with Phase 3 | Custom build time | Low |
| B: Lottie animations | High visual quality | Heavy files, external dependency, CORS risk | High |
| C: CSS step timeline | Zero JS dependency, fastest load | Less engaging | Low |

**Recommendation:** Option A — Framer Motion step icons. Already installed, no new dependencies, consistent brand system.

**5 steps content:**
1. **60-Min Evaluation** — icon: clipboard/assessment
2. **Movement Testing** — icon: data/chart
3. **Custom Plan** — icon: document/plan
4. **Treatment Starts** — icon: hands/therapy
5. **Return to Activity** — icon: run/sport

---

### 5.2 Build the Animated Timeline

**Component:** `components/FirstVisitTimeline.tsx` (replaces or enhances `FirstVisitSection.tsx`)

**Layout:**
- Desktop: horizontal 5-step timeline with connecting line
- Mobile: vertical stacked steps with left border line

**Animation:**
- On viewport entry: steps animate in left to right (desktop) / top to bottom (mobile)
- Each step: fade in + icon scales from 0.8 to 1.0
- Connecting line: draws left to right using `scaleX` animation (starts 0, ends 1)
- Stagger: 150ms between each step

**Accessibility:**
- [ ] Each step has visible text (not icon-only)
- [ ] Animation respects `prefers-reduced-motion`
- [ ] Steps are readable without animation (final position = accessible state)
- [ ] Step numbers (1–5) visible for screen readers via `aria-label`

**Risk mitigations:**
- FAIL: Animation too slow — users skip section → PREVENT: Full animation completes in 750ms max (5 steps × 150ms stagger)
- FAIL: Animation too fast — users miss content → PREVENT: Steps hold at final position; not auto-dismissed
- FAIL: Mobile animation glitches → PREVENT: Test on iOS Safari and Android Chrome before merge; use `transform` only
- FAIL: Users ignore animation → PREVENT: CTA ("Request Your Evaluation →") placed immediately below last step
- FAIL: Lottie files too heavy → PREVENT: Option A (Framer Motion) chosen — no Lottie dependency
- FAIL: Design inconsistency — cartoon style clashes with brand → PREVENT: Uses MUI Icons (already in system), same SpaceNavy/NeoBlue palette

---

## PHASE 6 — Image System Hardening

> The EXIF rotation fix is complete (all 73 photos corrected). This phase locks the image pipeline so new photos added by the clinic never break.

### 6.1 Define and Enforce Aspect Ratio Standards

| Context | Ratio | CSS implementation |
|---|---|---|
| Hero background | 16:9 | `height: 100vh`, `objectFit: cover` |
| Service card photo header | 4:3 | `paddingTop: '75%'`, `position: absolute, inset: 0` |
| Team / headshot | 1:1 | `aspectRatio: '1/1'` |
| Location neighborhood hero | 16:9 cropped | `height: 220px`, `objectFit: cover` |
| Blog / article thumbnail | 3:2 | future use |

**Rule:** Never set explicit pixel `height` on an image container unless you also set `objectFit: cover`. Pixel heights without cover will squash or stretch.

---

### 6.2 Confirm Next.js Image Configuration

**File:** `next.config.js`

```js
// Verify these domains are in remotePatterns:
remotePatterns: [
  { protocol: 'https', hostname: 'insync-assets.nyc3.cdn.digitaloceanspaces.com' },
]
// Verify image formats: ['avif', 'webp'] for modern compression
// Verify deviceSizes includes: [375, 640, 768, 1024, 1280, 1600]
```

- [ ] Run `next build` locally and confirm no image domain warnings
- [ ] Confirm all `<Image>` components have `alt` text — run `grep -n 'alt=""' components/`

---

### 6.3 Blur Placeholder Implementation

**All `next/image` components must use placeholder:**

```tsx
<Image
  src={photoUrl}
  alt="Dr. Hassan performing shoulder assessment"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  style={{ objectFit: 'cover', objectPosition: 'center top' }}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..." // generate per image
  priority={isAboveFold} // true only for hero + first visible image
/>
```

**For CDN images (cannot use automatic blur):**
- Use a static `blurDataURL` — a 4×4 pixel SpaceNavy JPEG encoded as base64
- This creates a brand-colored blur-up effect instead of blank white

---

### 6.4 Upload Rules Documentation (Prevents Future Breakage)

**Add to `BRAND_GUIDELINES.md` — Image Upload Section:**

```markdown
## Image Upload Requirements

When adding new clinic photos:
1. Minimum width: 1600px
2. Required: shoot in portrait orientation OR confirm EXIF orientation is correct
3. Run through scripts/fix-rotate-compress.mjs before uploading
4. Upload via scripts/upload-cdn.mjs (never upload directly to DO Spaces console)
5. After upload: clear Next.js image cache on server (rm -rf .next/cache/images && pm2 restart insync)
6. Verify in browser using JS: img.naturalWidth / img.naturalHeight > 1 = portrait (correct)
```

**Risk mitigations:**
- FAIL: Content editors upload wrong sizes → PREVENT: Written rules in BRAND_GUIDELINES.md
- FAIL: CDN caching issues — old images persist after updates → PREVENT: Documented clear-cache procedure
- FAIL: Next.js image loader misconfiguration → PREVENT: `remotePatterns` verified in next.config.js
- FAIL: Placeholder images forgotten — blank white flash during load → PREVENT: Blur placeholder required on all image components (enforced in PR review)
- FAIL: Image SEO ignored — missing alt tags → PREVENT: `grep -n 'alt=""'` scan in CI

---

## PHASE 7 — Mobile / Desktop Consistency

> The site is MUI-based (responsive by design), but specific components have known inconsistencies. This phase audits and fixes them.

### 7.1 Device Testing Matrix

**Before this phase is closed, test must pass on ALL of these:**

| Device | Viewport | OS | Browser |
|---|---|---|---|
| iPhone SE (2020) | 375×667 | iOS 16 | Safari |
| iPhone 14 | 390×844 | iOS 17 | Safari |
| Samsung Galaxy S21 | 360×800 | Android 13 | Chrome |
| iPad Air | 820×1180 | iPadOS 17 | Safari |
| MacBook 13" | 1280×800 | macOS | Chrome |
| Desktop | 1440×900 | macOS | Firefox |
| Desktop large | 1920×1080 | Windows | Edge |

**Testing tool:** BrowserStack or physical devices. Use `insync-pt.com` (live) not localhost.

---

### 7.2 Fix Known Problem Areas

**Navigation mobile menu:**
- [ ] Confirm hamburger menu opens/closes correctly on iOS Safari (known WebKit drawer bug)
- [ ] Confirm tap targets: all nav links minimum 44×44px touch area
- [ ] Confirm menu closes on route change

**Hero section:**
- [ ] At 375px: headline should not overflow (check for text-overflow)
- [ ] CTAs should stack vertically on mobile, not shrink to unusable width
- [ ] Hero photo should not cause horizontal scroll

**Service cards grid:**
- [ ] 1 column at < 640px, 2 columns at 640–900px, 3 columns at > 900px
- [ ] Card photo heights must be consistent (use `paddingTop: '75%'` trick)

**Footer:**
- [ ] At 375px: columns should stack vertically
- [ ] Phone number must be a `tel:` link (tap to call on mobile)

**Forms (Contact / Request Appointment):**
- [ ] All inputs minimum 16px font (prevents iOS zoom on focus)
- [ ] Submit button full-width on mobile
- [ ] Keyboard does not cover submit button on iOS (use `scroll-to-focused-field` or similar)

---

### 7.3 Breakpoint Verification

**MUI breakpoints in use:**

```
xs:  0px    (mobile portrait)
sm:  600px  (mobile landscape / large phone)
md:  900px  (tablet)
lg:  1200px (desktop)
xl:  1536px (large desktop)
```

**Rule:** Never write separate mobile layouts. Always use MUI's responsive props:
```tsx
// Correct:
sx={{ py: { xs: 6, md: 10 }, fontSize: { xs: '1rem', md: '1.125rem' } }}

// Wrong:
// Don't create separate mobile and desktop components for the same content
```

**Risk mitigations:**
- FAIL: CSS overrides conflict — mobile styles override desktop → PREVENT: MUI sx responsive props only; no `@media` queries in component files
- FAIL: Breakpoint chaos — components break between 768–1024 → PREVENT: Use MUI's standard breakpoints, not custom px values
- FAIL: Touch targets too small → PREVENT: 44px minimum, tested on physical iOS device
- FAIL: Font scaling issues — typography too small on mobile → PREVENT: `responsiveFontSizes` already applied in theme; verify with 375px viewport
- FAIL: Testing limited to iPhone — Android compatibility missed → PREVENT: Device matrix above requires Android test
- FAIL: Sticky header hides content → PREVENT: All page anchors (`id="locations"`) add `scroll-margin-top: 80px` to account for fixed nav

---

## PHASE 8 — Interactive Body Map (Research Phase Only — MVP)

> This feature requires the most research of any item in this spec. Do not build until research is complete. Building before research is guaranteed to produce the wrong output.

### 8.1 Research Gate Checklist (Complete Before Any Design)

- [ ] Test `body-map-js` — does it support custom click zones?
- [ ] Test SVG click zones on iOS Safari — are 8px tap areas actually tappable at 375px?
- [ ] Test SVG + React Server Components — does SVG interactivity work with Next.js App Router?
- [ ] Test screen reader behavior on an interactive SVG — read aloud body part names?
- [ ] Research HIPAA implications — does clicking a body part count as health data collection?
- [ ] Review 3 competitor implementations (one good, one medium, one bad) — document findings

**Deliver:** `docs/body-map-research.md` before any design begins

---

### 8.2 If Research Clears — Design First

**Design requirements (before code):**
- [ ] Wireframe the interaction: click zone → condition list appears
- [ ] Define clickable zones: shoulder, knee, back, hip, ankle, neck, wrist, elbow
- [ ] Define result content per zone (max 3 conditions per zone, with link to service)
- [ ] Design the mobile version separately — SVG must be at least 300px wide
- [ ] Text fallback design: if SVG fails, show a simple list grouped by body area

---

### 8.3 Risk Mitigations (All Must Be Addressed in Design Doc)

- FAIL: SVG complexity too high — performance drops → PREVENT: Use simplified silhouette, not medical anatomy illustration; max 50 SVG path elements
- FAIL: Touch precision problems — zones too small → PREVENT: Each touch zone minimum 44×44px visual, with expanded hit area via `pointer-events` padding
- FAIL: Mobile usability failure → PREVENT: At 375px, body silhouette minimum 280px wide, zones labeled with text not just shape
- FAIL: Service mapping errors — wrong conditions triggered → PREVENT: Service→zone mapping stored in a single data file (`lib/bodyMapData.ts`), reviewed by Dr. Hassan
- FAIL: SEO invisibility — Google can't read SVG interactions → PREVENT: All condition text in DOM as `<ul>` list, initially hidden with CSS, revealed on click; not dynamically fetched
- FAIL: Accessibility failure — screen readers can't interact → PREVENT: Each zone is `role="button"`, `tabIndex={0}`, `aria-label="Click to see conditions for shoulder"`, full keyboard support
- FAIL: Maintenance nightmare — new injuries require rewriting logic → PREVENT: Data-driven design; adding a new zone = adding one object to `lib/bodyMapData.ts`
- FAIL: Visual clarity problems — users can't tell clickable regions → PREVENT: Hover state (NeoBlue fill at 20% opacity), cursor pointer, and an instruction label: "Click a body area to see conditions we treat"
- FAIL: Analytics blind spot — interaction not tracked → PREVENT: Each zone click fires an analytics event `body_map_click`, label: zone name

---

## PHASE 9 — Digital First Patient Journey (Future Phase)

> This phase is explicitly deferred until Phase 1–7 are complete and stable. Scheduling integrations carry HIPAA compliance risk and must not be rushed.

### 9.1 Research Required Before Any Integration Decision

- [ ] Evaluate **Jane App** — supports custom booking page embed, HIPAA BAA available
- [ ] Evaluate **NexHealth** — EHR-connected, more complex integration
- [ ] Evaluate **BetterPT** — PT-specific, simpler
- [ ] Confirm: Does Dr. Hassan's current EHR support API integration?
- [ ] Confirm: Is a HIPAA BAA required for any chosen vendor?

**Deliver:** `docs/scheduling-platform-comparison.md`

### 9.2 Risk Mitigations (Logged for Future Reference)

- FAIL: Scheduling integration breaks — API errors → PREVENT: Always show fallback phone number; never hide the `tel:` link behind a booking widget
- FAIL: Double bookings — sync failure with calendar → PREVENT: Use platform's built-in conflict detection; do not build custom calendar logic
- FAIL: Patient privacy risks — HIPAA compliance violated → PREVENT: No health data stored in the Next.js app or DigitalOcean database; all patient data lives in the HIPAA-compliant scheduling platform
- FAIL: Too many steps — users abandon booking → PREVENT: Maximum 3 steps before confirmation; no account creation required for first booking
- FAIL: UI confusion — users unsure if appointment confirmed → PREVENT: Confirmation screen + confirmation email mandatory; SMS confirmation optional

---

## PHASE 10 — Accessibility Compliance Audit

> Accessibility is not a phase — it is a standard applied throughout every other phase. This section defines the ongoing rules.

### 10.1 Color Contrast Verification

**Tools:** Chrome DevTools → Accessibility panel, [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Verify these specific combinations:**

| Text | Background | Required ratio | Current? |
|---|---|---|---|
| White `#FFFFFF` on SpaceNavy `#003D59` | Dark sections | 4.5:1 ✅ | Verify |
| White `#FFFFFF` on NeoBlue `#0EC5E6` | CTA buttons | 4.5:1 ⚠️ | **Check — light blue may fail** |
| SpaceNavy `#003D59` on White `#FFFFFF` | Body text | 4.5:1 ✅ | Verify |
| Gray700 `#374151` on White `#FFFFFF` | Body copy | 4.5:1 ✅ | Verify |
| Gray500 `#6B7280` on White `#FFFFFF` | Captions | 4.5:1 ⚠️ | **Likely fails — may need Gray600+** |

**Critical:** NeoBlue `#0EC5E6` (light teal) on white background likely fails 4.5:1 contrast for text. Use only for decorative accents and large text (3:1 ratio required for 18pt+). Never use NeoBlue as body text color.

---

### 10.2 Keyboard Navigation Audit

- [ ] Tab through entire homepage — every interactive element must receive focus
- [ ] Visible focus ring on every focused element (not hidden with `outline: none`)
- [ ] Skip-to-main-content link at top of page (hidden until focused)
- [ ] Modal/drawer traps focus correctly and returns on close
- [ ] Carousel navigable with arrow keys (see Phase 4)

---

### 10.3 Alt Text Audit

```bash
# Run after every deploy
grep -r 'alt=""' components/ app/
grep -r "alt={''}" components/ app/
grep -r 'alt={undefined}' components/ app/
```

**Rules:**
- Decorative images (background patterns): `alt=""` is correct (empty, not missing)
- All clinic photos: descriptive alt text required e.g. `"Dr. Hassan performing shoulder mobility assessment"`
- Logo: `alt="InSync Physical Therapy"`
- Insurance badges: `alt="[Insurer name] — accepted insurance"`

---

### 10.4 Motion and Animation Accessibility

**In `app/layout.tsx` or `app/globals.css`:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Every Framer Motion component must check:**
```tsx
const { reducedMotion } = useReducedMotion(); // from framer-motion
// If true: skip animation, render in final position
```

---

### 10.5 Form Accessibility

- [ ] Every input has an associated `<label>` (not just placeholder text)
- [ ] Error messages are announced by screen readers (`role="alert"`, `aria-live="polite"`)
- [ ] Required fields marked with `aria-required="true"` AND visible indicator
- [ ] Success state announced (`aria-live="polite"` — "Your message has been sent")

---

## ARCHITECTURE — Component File Map

```
/app
  layout.tsx              ← metadata, fonts, theme provider
  page.tsx                ← homepage assembly
  /about/page.tsx
  /services/page.tsx
  /locations/page.tsx
  /insurance/page.tsx
  /contact/page.tsx
  /api/contact/route.ts   ← Resend email handler
  globals.css             ← CSS variables, font-face, global resets

/components               ← 18 existing + new additions
  Navigation.tsx
  HeroSection.tsx
  TrustBar.tsx
  ServicesGrid.tsx        ← Phase 4: convert to carousel
  PTMillSection.tsx
  WhoWeWorkWithSection.tsx
  CombatSportsSection.tsx
  TechnologySection.tsx
  FirstVisitSection.tsx   ← Phase 5: convert to animated timeline
  InsuranceSection.tsx
  LogoCarousel.tsx
  ReviewsSection.tsx
  TeamSection.tsx
  LocationsSection.tsx
  NeighborhoodSEOBlock.tsx
  FAQSection.tsx
  CTABand.tsx
  Footer.tsx
  LeadForm.tsx
  SectionWrapper.tsx      ← NEW Phase 3
  MotionSection.tsx       ← NEW Phase 3
  ConditionsCarousel.tsx  ← NEW Phase 4
  FirstVisitTimeline.tsx  ← NEW Phase 5
  BodyMap.tsx             ← NEW Phase 8 (after research)

/lib
  theme.ts                ← BRAND tokens (single source of truth)
  images.ts               ← CDN URL helpers
  schema.ts               ← structured data
  bodyMapData.ts          ← NEW Phase 8: zone → conditions mapping

/public
  /brand                  ← NEW Phase 1
    logo-primary.svg
    logo-white.svg
    logo-dark.svg
    favicon.ico
    favicon-192.png
    favicon-512.png
    og-image.jpg
  /fonts
    /articulat/           ← licensed font files
    /denton/              ← licensed font files

/scripts
  fix-rotate-compress.mjs ← image EXIF fix + compression
  upload-cdn.mjs          ← CDN uploader

/docs                     ← NEW documentation folder
  lighthouse-baseline.json
  spacing-audit.md
  body-map-research.md
  scheduling-platform-comparison.md
  bryant-park-audit.txt

BRAND_GUIDELINES.md       ← NEW Phase 1
RALPH-V2.md               ← This document
```

---

## LOGIC — User Conversion Flow

```
Google Search: "physical therapy brooklyn" / "physical therapy near bryant park"
        ↓
Homepage loads in < 2s (LCP target)
        ↓
Hero: headline + photo — user knows what this clinic does in 3 seconds
        ↓
Trust bar: 1-on-1 · No PT Mills · 9+ Years · Insurance verified
        ↓
Services carousel: user identifies their injury
        ↓
Combat sports / Who we work with: user sees themselves reflected
        ↓
Technology section: objective diagnostics = trust builder for skeptical patients
        ↓
What to expect: removes anxiety about first visit (5-step visual)
        ↓
Insurance section: user confirms their plan is accepted
        ↓
Reviews: social proof
        ↓
Team: Dr. Hassan + Piero credentials
        ↓
Locations: user confirms clinic is reachable
        ↓
CTA: "Request Appointment" — form submit → Resend → admin email
        ↓
Admin calls patient → appointment confirmed
```

---

## PROOF — Success Metrics

**Measure before Phase 1 and after Phase 7:**

| Metric | Current baseline | Phase 7 target |
|---|---|---|
| Lighthouse Performance | measure first | ≥ 85 |
| Lighthouse Accessibility | measure first | ≥ 90 |
| Lighthouse SEO | measure first | ≥ 95 |
| LCP | measure first | < 2.0s |
| CLS | measure first | < 0.1 |
| Appointment form submissions | 0 (no tracking yet) | add tracking in Phase 1 |
| Bounce rate | not tracked | add GA4 in Phase 1 |

---

## HARDENING — Pre-Deploy Checklist (Run Before Every Phase Merge)

```
Performance
  [ ] Lighthouse score not regressed vs baseline
  [ ] No new render-blocking resources
  [ ] Images all using next/image with proper sizes prop

Accessibility
  [ ] axe DevTools scan — zero critical violations
  [ ] Tab navigation tested manually
  [ ] Alt text scan: grep -r 'alt=""' — only decorative images allowed
  [ ] prefers-reduced-motion tested (macOS → Accessibility → Reduce Motion)

SEO
  [ ] No duplicate page titles
  [ ] All pages have unique meta descriptions
  [ ] Schema.org validator passes
  [ ] Google Rich Results Test passes

Mobile
  [ ] Tested on iOS Safari (375px minimum)
  [ ] Tested on Android Chrome
  [ ] No horizontal scroll on any page
  [ ] All touch targets ≥ 44px

CDN / Server
  [ ] Images loading from CDN (not /public/)
  [ ] PM2 shows status: online
  [ ] Cloudflare cache status: HIT on static assets
  [ ] No 500 errors in PM2 logs: pm2 logs insync --lines 100
```

---

## DEVELOPMENT RULE — The Iron Gate

> This is non-negotiable. It is the rule that prevents every failure mode identified in this document.

```
No feature ships without completing this sequence in order:
  1. Research    (read the failure modes for this feature)
  2. Design      (wireframe or written spec — no code)
  3. Risk review (confirm all failure modes are addressed in the design)
  4. Prototype   (isolated build — not in main codebase)
  5. Approval    (Felix reviews and approves the prototype)
  6. Integration (merge to development branch)
  7. QA          (device matrix + accessibility + Lighthouse)
  8. Merge       (development → main)
  9. Monitor     (24 hours post-deploy)

Skipping any step is how $20k websites stay $20k websites.
Following every step is how you build a $200k product for $20k.
```

---

*RALPH-V2 · InSync Physical Therapy · Last updated: Phase 1 build complete, Phase 2 begins*
