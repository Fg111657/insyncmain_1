/**
 * Image CDN configuration
 *
 * Local dev:   images served from /public/assets/ (CDN_BASE = '')
 * Production:  images served from DigitalOcean Spaces CDN
 *
 * Set NEXT_PUBLIC_CDN_BASE in your environment:
 *   .env.local  →  NEXT_PUBLIC_CDN_BASE=   (empty = use local public folder)
 *   Server env  →  NEXT_PUBLIC_CDN_BASE=https://insync-assets.nyc3.cdn.digitaloceanspaces.com
 *
 * DO Spaces bucket structure:
 *   /provider-hassan/   — Dr. Hassan treatment photos
 *   /office/            — Clinic interior photos
 *   /team/              — Headshots (Hassan, Piero, TJ)
 */

const CDN_BASE = process.env.NEXT_PUBLIC_CDN_BASE ?? '';

/** Resolve a public-folder path to either local or CDN URL. */
const r = (path: string) => `${CDN_BASE}${path}`;

// ─── Provider photos ──────────────────────────────────────────────────────────
// Namespace: /assets/hassan-pt/photos/provider-hassan/

export const PROVIDER_PHOTOS = {
  // Dr. Hassan profile headshot (used on About page)
  hassanHeadshot:
    r('/assets/dr-hassan-headshot.jpg'),

  // Hero panel — clean wide assessment shot
  heroAssessment:
    r('/assets/hassan-pt/photos/provider-hassan/dr-hassan-seated-cervical-mobility-assessment-male-patient-03.jpg'),

  // CombatSports + sports rehab sections
  standingShoulderAssessment:
    r('/assets/hassan-pt/photos/provider-hassan/dr-hassan-standing-shoulder-mobility-assessment-male-patient-01.jpg'),
  standingShoulderAssessment2:
    r('/assets/hassan-pt/photos/provider-hassan/dr-hassan-standing-shoulder-mobility-assessment-male-patient-02.jpg'),

  // Manual therapy / hands-on shots
  neckManualTherapy:
    r('/assets/hassan-pt/photos/provider-hassan/dr-hassan-supine-neck-manual-therapy-female-patient-01.jpg'),
  neckManualTherapyWide:
    r('/assets/hassan-pt/photos/provider-hassan/dr-hassan-supine-neck-manual-therapy-wide-female-patient-01.jpg'),
  upperBackTherapy:
    r('/assets/hassan-pt/photos/provider-hassan/dr-hassan-prone-upper-back-manual-therapy-female-patient-01.jpg'),
  upperBackTherapy06:
    r('/assets/hassan-pt/photos/provider-hassan/dr-hassan-prone-upper-back-manual-therapy-female-patient-06.jpg'),
  shoulderTreatment:
    r('/assets/hassan-pt/photos/provider-hassan/dr-hassan-prone-shoulder-treatment-female-patient-01.jpg'),

  // Assessment series
  cervicalMobility1:
    r('/assets/hassan-pt/photos/provider-hassan/dr-hassan-seated-cervical-mobility-assessment-male-patient-01.jpg'),
  cervicalMobility2:
    r('/assets/hassan-pt/photos/provider-hassan/dr-hassan-seated-cervical-mobility-assessment-male-patient-02.jpg'),
  sideAngleUpperBack:
    r('/assets/hassan-pt/photos/provider-hassan/dr-hassan-side-angle-upper-back-treatment-female-patient-01.jpg'),
} as const;

// ─── Office / clinic photos ───────────────────────────────────────────────────
export const OFFICE_PHOTOS = {
  treatmentRoomWide:
    r('/assets/hassan-pt/photos/office/office-treatment-room-wide-01.jpg'),
  treatmentRoomWindow1:
    r('/assets/hassan-pt/photos/office/office-treatment-room-window-01.jpg'),
  treatmentRoomWindow2:
    r('/assets/hassan-pt/photos/office/office-treatment-room-window-02.jpg'),
} as const;

// ─── Location / neighborhood photos ──────────────────────────────────────────
export const LOCATION_PHOTOS = {
  brooklyn:   r('/assets/locations/brooklyn-neighborhood.jpg'),
  bryantPark: r('/assets/locations/bryant-park-midtown.jpg'),
} as const;

// ─── Blur placeholder ─────────────────────────────────────────────────────────
// 10×10 SVG in SpaceNavy (#003D59) — used as placeholder="blur" blurDataURL
// on every <Image> so the LCP slot is filled instantly with brand colour.
export const BLUR_PLACEHOLDER =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAzRDU5Ii8+PC9zdmc+';

// ─── Convenience re-exports grouped by use case ───────────────────────────────
export const SECTION_IMAGES = {
  // HeroSection — right panel (desktop only)
  hero:        PROVIDER_PHOTOS.heroAssessment,

  // CombatSportsSection — alongside injury card
  combat:      PROVIDER_PHOTOS.standingShoulderAssessment,

  // ServicesGrid card headers
  services: {
    orthopedic:  PROVIDER_PHOTOS.cervicalMobility1,
    sports:      PROVIDER_PHOTOS.standingShoulderAssessment2,
    chronicPain: PROVIDER_PHOTOS.upperBackTherapy,
    postSurgical:PROVIDER_PHOTOS.shoulderTreatment,
    manual:      PROVIDER_PHOTOS.neckManualTherapy,
    movement:    PROVIDER_PHOTOS.cervicalMobility2,
  },

  // About / Team page
  clinicWide:  OFFICE_PHOTOS.treatmentRoomWide,
} as const;
