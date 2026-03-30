/**
 * Depth & Motion Design Tokens
 *
 * Centralized constants for the Soft UI Evolution + Dimensional Layering
 * design system. Based on UI UX Pro Max recommendations for healthcare.
 *
 * All shadows use SpaceNavy-tinted RGBA for brand cohesion.
 */

/* ── Multi-layer shadow scale ─────────────────────────────────────────────── */

export const ELEVATION = {
  /** Resting cards, subtle lift */
  1: '0 1px 3px rgba(0,61,89,0.05), 0 4px 12px rgba(0,61,89,0.04)',
  /** Hovered cards, interactive elements */
  2: '0 2px 4px rgba(0,61,89,0.05), 0 8px 24px rgba(0,61,89,0.08), 0 20px 48px rgba(0,61,89,0.04)',
  /** Popped elements, modals, floating badges */
  3: '0 4px 8px rgba(0,61,89,0.06), 0 12px 32px rgba(0,61,89,0.10), 0 32px 64px rgba(0,61,89,0.06)',
  /** Maximum emphasis */
  4: '0 8px 16px rgba(0,61,89,0.08), 0 20px 40px rgba(0,61,89,0.12), 0 40px 80px rgba(0,61,89,0.06)',
} as const;

/* ── Glassmorphism presets ────────────────────────────────────────────────── */

export const GLASS = {
  nav: {
    background:     'rgba(255,255,255,0.78)',
    backdropFilter:  'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom:    '1px solid rgba(255,255,255,0.25)',
  },
  card: {
    background:      'rgba(255,255,255,0.65)',
    backdropFilter:  'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border:          '1px solid rgba(255,255,255,0.3)',
  },
  dark: {
    background:      'rgba(0,61,89,0.55)',
    backdropFilter:  'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border:          '1px solid rgba(14,197,230,0.12)',
  },
  badge: {
    background:      'rgba(255,255,255,0.7)',
    backdropFilter:  'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border:          '1px solid rgba(255,255,255,0.35)',
  },
} as const;

/* ── Timing & easing ─────────────────────────────────────────────────────── */

export const TIMING = {
  fast:   0.2,
  normal: 0.3,
  smooth: 0.4,
  slow:   0.6,
} as const;

export const EASE = {
  /** Smooth entrance / exit */
  smooth: [0.25, 0.1, 0.25, 1] as const,
  /** Spring-like bounce for hover */
  spring: [0.34, 1.56, 0.64, 1] as const,
  /** Decelerate (ease-out) */
  out:    [0, 0, 0.2, 1] as const,
} as const;

/* ── 3D transform presets ─────────────────────────────────────────────────── */

export const TILT = {
  perspective: 1000,
  /** Max degrees for card tilt — kept subtle for healthcare trust */
  maxDeg:      4,
  /** Transition for tilt reset */
  resetSpring: { type: 'spring' as const, stiffness: 300, damping: 20 },
} as const;

/* ── NeoBlue glow presets (for CTAs) ──────────────────────────────────────── */

export const GLOW = {
  /** Resting CTA glow */
  subtle: '0 4px 20px rgba(14,197,230,0.25), 0 0 0 1px rgba(14,197,230,0.08)',
  /** Hovered CTA glow */
  strong: '0 8px 32px rgba(14,197,230,0.45), 0 0 0 2px rgba(14,197,230,0.15)',
  /** Pulsing glow peak (CSS animation) */
  pulse:  '0 8px 40px rgba(14,197,230,0.5), 0 0 0 2px rgba(14,197,230,0.2)',
} as const;
