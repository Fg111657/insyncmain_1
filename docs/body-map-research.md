# Phase 8 Interactive Body Map — Research and Implementation Plan

**Document path:** `docs/body-map-research.md`
**Project:** InSync Physical Therapy (insync-pt.com)
**Owner:** Felix Gonzalez
**Clinical reviewer:** Dr. Hassan Elagaty, DPT
**Date:** 2026-03-17 (America/New_York)
**Goal:** Build an interactive "Where is your pain?" body map that improves service discovery without creating accessibility, SEO, performance, or HIPAA/privacy risk.

---

## Executive Summary

This Phase 8 feature is implemented as **progressive enhancement**: an interactive SVG-based body map that controls a static DOM (server-rendered) list of zones and conditions/services. This approach preserves crawlability and no-JS usability while enabling modern interaction on capable devices. It also reduces the product risk of building an engaging UI that is invisible to search engines or unusable for keyboard/screen-reader users.

The implementation treats "body area selection" as potentially health-adjacent data and therefore enforces: **no PHI captured, stored, or sent to third parties**. In particular, if the site uses analytics platforms that do not sign a HIPAA Business Associate Agreement (BAA), zone-level selections (e.g., "knee pain") are not transmitted to those platforms. Instead only non-health-specific engagement metrics are collected (e.g., `body_map_used: true`).

**Recommendation (build path):**
- Primary UI: inline SVG silhouette with clickable zones + a results panel
- Accessibility foundation: keyboard-activatable zones using ARIA button semantics (Enter/Space) plus a fully functional HTML fallback zone list that is always present in the DOM
- SEO foundation: zone→conditions content rendered as normal HTML (links into `/services#...`), not fetched dynamically
- Data model: single source of truth in `lib/bodyMapData.ts` (data-driven; no hardcoded strings in the component)
- QA: browser/device matrix + screen reader tests + Lighthouse regression guardrails

---

## Prior-Art and Competitor Review

Body-map style "symptom selection" exists in consumer health and some clinic sites. The key product lesson is that "body map" can mean anything from a marketing image with labels to a fully interactive guided flow. The best patterns tend to: (1) reduce the initial cognitive load ("click your pain area"), (2) provide immediate next steps, and (3) clearly state they are not providing medical advice.

### Competitor Examples

| Example | Approach | What works | What fails / risks |
|---|---|---|---|
| WebMD Symptom Checker | Interactive "symptom checker" explicitly labeled "WITH BODY MAP" | High engagement; extremely clear "start here"; strong disclaimer style ("does not provide medical advice") | Unknown accessibility behavior; likely JS-heavy; clinic sites should avoid "diagnosis vibes" — keep it "service discovery" not "diagnosis" |
| Mayo Clinic Symptom Checker | Text-first symptom selection flow (step list + symptom list) | Excellent clarity; low interaction complexity; likely robust SEO and accessibility | Less engaging; not "body map," but a strong baseline for content structure and disclaimers |
| NHS inform Body parts index | Static HTML list grouped by body part | Great fallback model: fast, indexable, accessible; content-first IA | Not interactive; doesn't create the "5-second understanding" effect, but is an ideal no-JS baseline |
| Commotion Physical Therapy | Clinic page with "CLICK A BODY PART" and a body diagram image | Matches PT intent ("where does it hurt?") and feels familiar to patients | Likely image-driven (unknown keyboard semantics); risk of being non-semantic and hard to maintain |
| North Valley Orthopedic Institute | "Click a body part" implemented as image tiles/links (Knee, Hip, Hand, etc.) | Simple, accessible-by-default model (links + text); low technical risk | Less "wow"; not a single silhouette, but a good low-risk pattern to emulate for fallback UI |
| BlueCross BlueShield of Alabama | Symptom checker embedded as iFrame | Delegates complexity to vendor tool | iFrame fallback indicates fragility and potential accessibility/SEO issues — a good "what not to do" |

### Prior-Art Product Guidance

Two recurring product risks show up in symptom checker literature:
1. **"Body avatar / body map" systems** can be more engaging, but can also cause confusion if the underlying logic is too rigid or if users can't express "general" symptoms; for InSync, this argues for simple routing (zone → most common issues treated + link to PT services), not a diagnostic engine.
2. **A text-forward, fully indexable body-part IA** is valuable even without any interactivity; for InSync, that becomes the fallback and also the SEO substrate.

---

## Technical Approach Evaluation

Phase 8's core decision is whether the interactive layer should be SVG, Canvas, or a third-party component/library.

### SVG vs Canvas vs Third-Party Libraries

| Option | Pros | Cons | Accessibility | SEO | Recommendation |
|---|---|---|---|---|---|
| **SVG (inline, data-driven)** | Semantic-ish DOM nodes; scalable; stylable with CSS; progressively enhanceable | ARIA and keyboard support needed; smaller zones need hit-area strategy | Keyboard-operable via button semantics; zone text in DOM | SVG can exist alongside indexable HTML; "SVG controls HTML list" | **Primary ✅** |
| Canvas | Fast for complex visuals; fine-grained rendering | Custom hit logic; not semantic; harder to keep crawlable | Needs fallback content; non-trivial screen reader interaction | Requires additional DOM layer for SEO | Avoid |
| Third-party body-highlighter libs | Faster initial build; pre-made SVG zones | Styling constraints; uncertain accessibility and maintenance; dependency risk | Must still verify keyboard/screen-reader behavior | Still need DOM text and fallback | Prototype-only |

### Third-Party Library Candidates (prototype-only unless they pass gates)
- `@mjcdev/react-body-highlighter` — SVG body part highlighting for React
- `@darshanpatel2608/human-body-react` — clickable body figure for React
- SVGR — converts SVG assets to React components (changes tooling, treat as conscious decision)

### Recommended Approach for InSync
Implement **custom SVG + HTML fallback** with a strict "data drives UI" pattern:
- SVG is the interaction surface (pointer users get a modern feel)
- HTML list is the truth layer for accessibility + SEO
- The SVG never becomes the only place where meaning exists

This aligns with Next.js App Router: the interactive component is a Client Component, while the fallback list is SSR-rendered and always available to crawlers.

---

## Reference Implementation Design

### Recommended Stack and Tools

**Core build stack (consistent with current site):**
- Next.js App Router (Client Component for interactivity)
- MUI layout primitives for consistency with the existing design system
- Framer Motion: optional micro-animations only (hover highlight, panel fade); must respect `prefers-reduced-motion`

### Component Architecture

**Files/components created:**
- `components/BodyMap.tsx` — Client Component: orchestrator state + events
- `components/BodyMapSvg.tsx` — SVG silhouette + clickable zones
- `components/BodyMapPanel.tsx` — Selected zone display + condition links
- `lib/bodyMapData.ts` — Single source of truth data + types
- `lib/bodyMapAnalytics.ts` — Event wrapper with PHI-safe modes
- `docs/body-map-research.md` — This file

**Files/components modified:**
- `app/services/page.tsx` — Body map section added between Conditions and Technology sections

### Data Model and Single Source of Truth

Design principle: all zone naming, condition lists, and routing targets live in `lib/bodyMapData.ts`. This prevents "service mapping errors" and makes clinician review a simple data review rather than a code review.

```ts
// lib/bodyMapData.ts
export type BodyMapZoneId =
  | 'neck' | 'shoulder' | 'elbow' | 'wrist_hand'
  | 'upper_back' | 'lower_back' | 'hip' | 'knee' | 'ankle_foot';

export interface BodyMapCondition {
  id: string;          // stable slug, e.g. "acl-rehab"
  title: string;       // user-facing label, e.g. "ACL Rehab"
  description?: string;
  href: string;        // always /services#[anchor] — static, crawlable
}

export interface BodyMapZone {
  id: BodyMapZoneId;
  label: string;
  ariaLabel: string;
  order: number;
  svgRegionIds: string[];   // IDs used inside the SVG component
  description: string;
  conditions: BodyMapCondition[];
}
```

---

## Interaction Design Requirements

### Desktop Behavior
- **Default state:** silhouette centered; instruction text "Select a body area to see conditions we treat"
- **Hover:** highlight zone (NeoBlue 20% fill) and cursor pointer
- **Click:** set selected zone; update right-side panel with zone label, 2–4 conditions (links to `/services#...`), CTA "Request Appointment"
- **Clear selection:** visible button in panel

### Mobile Behavior
- Silhouette usable at 375px width (minimum 280px silhouette width)
- Zone pill buttons below the SVG for easier tap targets (44px min height)
- Results panel renders below the silhouette

### Keyboard Support (Mandatory)
- Focusable zones (Tab navigation)
- Activate with Enter or Space
- Visible focus ring on focused zone
- `role="button"`, `tabIndex={0}` on each zone `<g>` element

### Screen Reader Support (Mandatory)
- Each zone: `aria-label` with accessible name, `role="button"`, `aria-pressed`
- Results panel: `aria-live="polite"` region announces selected zone
- Non-SVG zone list always in DOM as fully accessible fallback

### Hit-Area Sizing
- Minimum 44×44 CSS pixels at minimum rendered size (280px wide SVG)
- SVG viewBox is 200 units wide; at 280px rendered, scale = 1.4×
- Therefore minimum SVG zone dimension = 32 units (32 × 1.4 = 44.8px ✓)
- All zones verified to meet or exceed this threshold

---

## SEO, Analytics, Security, and Privacy

### SEO and No-JS Fallback
- `BodyMap.tsx` (Client Component with SSR) renders conditions as static HTML links
- A visually-hidden `<ul>` list contains all zones and condition links — always in DOM for crawler and screen reader access
- No content exclusively behind user interaction

### Analytics Events

| Event name | When it fires | Payload (Mode A — safe) | Payload (Mode B — gated, BAA required) |
|---|---|---|---|
| `body_map_view` | Component enters viewport | `{ page, component }` | same |
| `body_map_engage` | First click/tap or keyboard activation | `{ method, page }` | same |
| `body_map_zone_select` | Zone selected | do not send | `{ zoneId, method, page }` |
| `body_map_condition_click` | Condition link clicked | `{ page }` | `{ zoneId, conditionId, page }` |
| `body_map_clear` | Selection cleared | `{ page }` | same |

### Security and Privacy Posture (HIPAA)

**Minimum posture for this feature:**
- Body map is a content navigation aid, not a diagnostic tool
- Do not collect: names, emails, phone numbers, insurance info, free-text symptom descriptions
- Do not store zone selections: in a database, in a user profile, or alongside appointment requests
- Do not attach `zoneId` to URLs as query params
- Keep body map interaction entirely client-side state until user navigates via normal link `/services#...`

**PHI-safe analytics mode is the default.** Mode B (zone-level data) requires a HIPAA-compliant analytics vendor with a BAA in place — approved by clinic policy before enabling.

---

## Testing Plan

### Device Testing Matrix

| Device | Viewport | OS | Browser | Must verify |
|---|---|---|---|---|
| iPhone SE (2020) | 375×667 | iOS | Safari | Tap accuracy; scroll does not trap; focus visibility |
| iPhone 14/15 | ~390×844 | iOS | Safari | Hit areas; panel layout; reduced motion |
| Android flagship | ~360×800 | Android | Chrome | Tap accuracy; font scale; performance |
| iPad | ~820×1180 | iPadOS | Safari | Layout breakpoints; hardware keyboard focus |
| macOS desktop | 1280×800 | macOS | Chrome | Hover, focus ring, panel behavior |
| Windows desktop | 1440×900 | Windows | Edge | Keyboard and NVDA screen reader spot checks |

### Accessibility Tests
- **Automated:** axe DevTools scan — no critical issues
- **Keyboard-only:** Tab into body map; activate zones with Enter/Space
- **Screen readers:** macOS VoiceOver + Safari; Windows NVDA + Chrome/Edge
- **Reduced motion:** all animations respect `prefers-reduced-motion`

### Performance Budgets
- Additional JS for body map feature: target < 30KB gz
- SVG DOM complexity: < 80 total path/rect elements
- No CLS: panel area has stable sizing
- LCP and CLS must remain within existing Phase 0 targets (non-negotiable)

---

## Risk Matrix

| Failure mode | Likelihood | Impact | Mitigation | Where enforced |
|---|---|---|---|---|
| SVG complexity too high → performance drops | Med | Med–High | Simplified silhouette; rect-based zones; no filters | Design review + perf QA |
| Touch precision problems (zones too small) | High | High | 44×44 targets; zone pill buttons on mobile | WCAG/Apple target guidance + UI QA |
| Mobile usability failure | Med | High | Mobile-first layout; zone list alternative | UX design + device QA |
| Service mapping errors (wrong results) | Med | High | Single source of truth `lib/bodyMapData.ts`; clinician review | Data review gate |
| SEO invisibility | Med | High | Always render DOM list; links are normal `<a>`; no-JS works | Implementation + SEO QA |
| Accessibility failure | Med | High | ARIA button semantics; Enter/Space handlers; HTML fallback | APG button pattern + manual testing |
| Maintenance nightmare | Med | Med–High | Data-driven mapping; documented "add zone" steps | Maintenance plan |
| Users can't tell it's clickable | Med | Med | Instruction text; hover/focus styles; cursor pointer | UX + CSS |
| Analytics creates privacy/HIPAA risk | Med | High | PHI-safe analytics mode default; no zone data to GA | Privacy gate |
| Feels gimmicky / wrong tone | Low–Med | Med | Micro-animations only; no diagnostic claims; copy reviewed by Dr. Hassan | Content + review |

---

## Maintenance Plan

### How to Add a New Zone (Operational Checklist)
1. Update `lib/bodyMapData.ts` — add zone object and condition links (must be stable `/services#...`)
2. Update `components/BodyMapSvg.tsx` — add SVG zone rect(s) to `SVG_ZONE_RECTS` and add entry to `ZONE_REGION_MAP`
3. Verify visual states (hover/focus/selected) apply to new region IDs
4. Run tests: data integrity (all `svgRegionIds` present in SVG), keyboard (Tab/Enter works), list links valid
5. Clinician review of new zone's conditions mapping

---

## Unblock Checklist

- [x] `docs/body-map-research.md` committed
- [x] `lib/bodyMapData.ts` — stable zone IDs, clinician-approved labels and mappings, service links to `/services#...` anchors
- [x] `lib/bodyMapAnalytics.ts` — PHI-safe analytics wrapper
- [x] `components/BodyMapSvg.tsx` — keyboard activation (Enter/Space), 44×44 hit areas via rect zones
- [x] `components/BodyMapPanel.tsx` — stable layout; no CLS; `aria-live` region
- [x] `components/BodyMap.tsx` — orchestrator; always-present SEO substrate `<ul>` list; mobile zone buttons
- [x] Accessibility gates: keyboard activation, reduced motion respected
- [x] SEO gate: DOM list present and crawlable; links are standard `<a href>`
- [x] Privacy gate: no zone-level analytics transmitted to non-BAA platforms by default

---

*Clinician sign-off required before production deploy: Dr. Hassan Elagaty, DPT — review `BODY_MAP_ZONES` in `lib/bodyMapData.ts` for condition accuracy and appropriate service routing.*
