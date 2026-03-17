// ─── Body Map Data ────────────────────────────────────────────────────────────
// Single source of truth for zone IDs, labels, conditions, and service routing.
//
// MAINTENANCE: To add a new zone, add an entry to BODY_MAP_ZONES and add the
// corresponding SVG region rect(s) to components/BodyMapSvg.tsx.
//
// CLINICIAN REVIEW: condition titles and href routing must be reviewed by
// Dr. Hassan Elagaty, DPT before any production deploy.
//
// PRIVACY: zone IDs are used only for client-side UI state. They must NOT be
// attached to URLs, stored in a database, or sent to non-BAA analytics platforms.
// See lib/bodyMapAnalytics.ts for the PHI-safe event wrapper.
// ─────────────────────────────────────────────────────────────────────────────

export type BodyMapZoneId =
  | 'neck'
  | 'shoulder'
  | 'upper_back'
  | 'lower_back'
  | 'elbow'
  | 'wrist_hand'
  | 'hip'
  | 'knee'
  | 'ankle_foot';

export interface BodyMapCondition {
  /** Stable slug — never change after deploy (used in analytics Mode B). */
  id: string;
  /** User-facing label, e.g. "ACL Rehab". */
  title: string;
  /** One-line optional descriptor shown in panel. */
  description?: string;
  /**
   * Always a static /services#[anchor] link — must resolve to an existing
   * DOM id in ServicesGrid.tsx.
   */
  href: string;
}

export interface BodyMapZone {
  id:           BodyMapZoneId;
  label:        string;
  ariaLabel:    string;
  /** Used for ordered list rendering in fallback and zone pill buttons. */
  order:        number;
  /**
   * IDs of the SVG <rect> / <ellipse> elements that belong to this zone.
   * Multiple region IDs = bilateral zones (left + right).
   * These must exactly match the keys in SVG_ZONE_RECTS in BodyMapSvg.tsx.
   */
  svgRegionIds: string[];
  description:  string;
  conditions:   BodyMapCondition[];
}

export const BODY_MAP_ZONES: BodyMapZone[] = [
  {
    id:          'neck',
    label:       'Neck',
    ariaLabel:   'Neck pain and cervical spine conditions',
    order:       1,
    svgRegionIds: ['zone-neck'],
    description:
      'Neck pain and stiffness are often driven by disc issues, postural strain, or cervical joint dysfunction. We restore mobility and address the root cause — not just manage the symptom.',
    conditions: [
      {
        id:    'cervical-strain',
        title: 'Cervical Strain',
        href:  '/services#orthopedic',
      },
      {
        id:    'herniated-disc-cervical',
        title: 'Herniated Cervical Disc',
        href:  '/services#orthopedic',
      },
      {
        id:    'neck-postural-pain',
        title: 'Neck & Postural Pain',
        href:  '/services#chronic-pain',
      },
    ],
  },

  {
    id:          'shoulder',
    label:       'Shoulder',
    ariaLabel:   'Shoulder pain and shoulder injuries',
    order:       2,
    svgRegionIds: ['zone-shoulder-left', 'zone-shoulder-right'],
    description:
      'Shoulder injuries range from overuse tendinopathies to structural tears. We rebuild strength and restore pain-free range of motion with targeted manual therapy and progressive loading.',
    conditions: [
      {
        id:    'rotator-cuff',
        title: 'Rotator Cuff Tear',
        href:  '/services#orthopedic',
      },
      {
        id:    'shoulder-impingement',
        title: 'Shoulder Impingement',
        href:  '/services#sports',
      },
      {
        id:    'labral-tear',
        title: 'Labral Tear (SLAP)',
        href:  '/services#orthopedic',
      },
    ],
  },

  {
    id:          'upper_back',
    label:       'Upper Back',
    ariaLabel:   'Upper back pain and thoracic spine conditions',
    order:       3,
    svgRegionIds: ['zone-upper-back'],
    description:
      'Upper back pain often involves the thoracic spine, ribs, or postural muscles. Manual therapy and corrective movement are our primary tools for restoring thoracic mobility.',
    conditions: [
      {
        id:    'thoracic-pain',
        title: 'Thoracic Spine Pain',
        href:  '/services#chronic-pain',
      },
      {
        id:    'postural-dysfunction',
        title: 'Postural Dysfunction',
        href:  '/services#chronic-pain',
      },
      {
        id:    'rib-dysfunction',
        title: 'Rib & Mid-Back Tightness',
        href:  '/services#manual',
      },
    ],
  },

  {
    id:          'lower_back',
    label:       'Lower Back',
    ariaLabel:   'Lower back pain and lumbar spine conditions',
    order:       4,
    svgRegionIds: ['zone-lower-back'],
    description:
      'Lower back pain is the most common condition we treat. We identify disc, facet joint, or muscle sources and build a targeted treatment plan — not a generic protocol.',
    conditions: [
      {
        id:    'lower-back-pain',
        title: 'Lower Back Pain',
        href:  '/services#chronic-pain',
      },
      {
        id:    'disc-herniation',
        title: 'Disc Herniation',
        href:  '/services#orthopedic',
      },
      {
        id:    'si-joint',
        title: 'SI Joint Dysfunction',
        href:  '/services#orthopedic',
      },
    ],
  },

  {
    id:          'elbow',
    label:       'Elbow',
    ariaLabel:   'Elbow pain and elbow injuries',
    order:       5,
    svgRegionIds: ['zone-elbow-left', 'zone-elbow-right'],
    description:
      'Elbow injuries are common in athletes, lifters, and desk workers. We address the underlying load tolerance issue so the problem does not keep coming back.',
    conditions: [
      {
        id:    'tennis-elbow',
        title: 'Tennis Elbow (Lateral Epicondylitis)',
        href:  '/services#sports',
      },
      {
        id:    'golfers-elbow',
        title: "Golfer's Elbow (Medial Epicondylitis)",
        href:  '/services#sports',
      },
      {
        id:    'ucl-sprain',
        title: 'UCL Sprain',
        href:  '/services#orthopedic',
      },
    ],
  },

  {
    id:          'wrist_hand',
    label:       'Wrist & Hand',
    ariaLabel:   'Wrist and hand pain conditions',
    order:       6,
    svgRegionIds: ['zone-wrist-left', 'zone-wrist-right'],
    description:
      'Wrist and hand issues affect grip, lifting, and daily function. We restore mobility and strength with targeted manual therapy and progressive loading.',
    conditions: [
      {
        id:    'wrist-sprain',
        title: 'Wrist Sprain',
        href:  '/services#orthopedic',
      },
      {
        id:    'de-quervains',
        title: "De Quervain's Tenosynovitis",
        href:  '/services#orthopedic',
      },
      {
        id:    'carpal-tunnel',
        title: 'Carpal Tunnel Syndrome',
        href:  '/services#chronic-pain',
      },
    ],
  },

  {
    id:          'hip',
    label:       'Hip',
    ariaLabel:   'Hip pain and hip injuries',
    order:       7,
    svgRegionIds: ['zone-hip'],
    description:
      'Hip pain affects runners, grapplers, and active adults. We identify whether the source is the joint, labrum, or surrounding musculature and treat accordingly.',
    conditions: [
      {
        id:    'hip-flexor-strain',
        title: 'Hip Flexor Strain',
        href:  '/services#sports',
      },
      {
        id:    'fai',
        title: 'Femoroacetabular Impingement (FAI)',
        href:  '/services#orthopedic',
      },
      {
        id:    'hip-labral-tear',
        title: 'Hip Labral Tear',
        href:  '/services#orthopedic',
      },
    ],
  },

  {
    id:          'knee',
    label:       'Knee',
    ariaLabel:   'Knee pain and knee injuries',
    order:       8,
    svgRegionIds: ['zone-knee-left', 'zone-knee-right'],
    description:
      'Knee injuries are among the most common we treat. From ACL reconstruction rehab to patellar tracking issues, we build structured return-to-sport plans with full load capacity.',
    conditions: [
      {
        id:    'acl-rehab',
        title: 'ACL Reconstruction Rehab',
        href:  '/services#post-surgical',
      },
      {
        id:    'meniscus-tear',
        title: 'Meniscus Tear',
        href:  '/services#orthopedic',
      },
      {
        id:    'patellofemoral',
        title: 'Patellofemoral Syndrome',
        href:  '/services#sports',
      },
    ],
  },

  {
    id:          'ankle_foot',
    label:       'Ankle & Foot',
    ariaLabel:   'Ankle and foot pain conditions',
    order:       9,
    svgRegionIds: ['zone-ankle-left', 'zone-ankle-right'],
    description:
      'Ankle sprains are frequently undertreated. We address ligament integrity, proprioception deficits, and return-to-sport load tolerance — not just the acute swelling.',
    conditions: [
      {
        id:    'ankle-sprain',
        title: 'Ankle Sprain',
        href:  '/services#orthopedic',
      },
      {
        id:    'achilles',
        title: 'Achilles Tendinopathy',
        href:  '/services#sports',
      },
      {
        id:    'plantar-fasciitis',
        title: 'Plantar Fasciitis',
        href:  '/services#chronic-pain',
      },
    ],
  },
];

/** Find a zone by its id. */
export function getZoneById(id: BodyMapZoneId): BodyMapZone | undefined {
  return BODY_MAP_ZONES.find(z => z.id === id);
}

/** Find a zone by one of its SVG region IDs. */
export function getZoneBySvgRegionId(svgRegionId: string): BodyMapZone | undefined {
  return BODY_MAP_ZONES.find(z => z.svgRegionIds.includes(svgRegionId));
}
