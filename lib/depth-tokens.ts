/**
 * Depth Tokens — RALPH palette
 *
 * Minimal shadow system. No gradients, no glow, no teal.
 * Deep Petrol #00262A + White #FFFFFF + Sinopia Orange #F63700.
 */

/* ── Multi-layer box shadows (4 levels) ──────────────────────────────── */
export const ELEVATION = {
  0: 'none',
  1: '0 1px 3px rgba(0,38,42,0.06), 0 1px 2px rgba(0,38,42,0.04)',
  2: '0 4px 16px rgba(0,38,42,0.08), 0 1px 3px rgba(0,38,42,0.04)',
  3: '0 10px 40px rgba(0,38,42,0.10), 0 2px 6px rgba(0,38,42,0.04)',
  4: '0 20px 60px rgba(0,38,42,0.12), 0 4px 12px rgba(0,38,42,0.04)',
} as const;

/* ── Glass / frosted effects ─────────────────────────────────────────── */
export const GLASS = {
  nav: {
    backgroundColor: 'rgba(255,255,255,0.90)',
    backdropFilter:  'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.80)',
    backdropFilter:  'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },
  dark: {
    backgroundColor: 'rgba(0,38,42,0.60)',
    backdropFilter:  'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    backdropFilter:  'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border:          '1px solid rgba(0,38,42,0.08)',
  },
} as const;

/* ── Timing ──────────────────────────────────────────────────────────── */
export const TIMING = {
  fast:   0.15,
  normal: 0.25,
  smooth: 0.5,
} as const;

/* ── Easing ──────────────────────────────────────────────────────────── */
export const EASE = {
  out:      [0, 0, 0.2, 1] as [number, number, number, number],
  inOut:    [0.42, 0, 0.58, 1]   as [number, number, number, number],
  bounce:   [0.34, 1.56, 0.64, 1] as [number, number, number, number],
} as const;

/* ── 3D tilt defaults ───────────────────────────────────────────────── */
export const TILT = {
  maxDeg:     4,
  perspective: 800,
} as const;

/* ── Glow (Sinopia-based) ───────────────────────────────────────────── */
export const GLOW = {
  subtle: '0 4px 20px rgba(246,55,0,0.15)',
  strong: '0 8px 40px rgba(246,55,0,0.25)',
} as const;
