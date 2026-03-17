'use client';

import Link from 'next/link';
import Box  from '@mui/material/Box';
import { BRAND } from '@/lib/theme';

/**
 * BrandLogo — single source of truth for the InSync logo in all contexts.
 *
 * Renders the mark as inline SVG (no image loading, no CLS, fully scalable).
 * Text is rendered as HTML for better subpixel anti-aliasing.
 *
 * ── Variants ──────────────────────────────────────────────────────────────────
 *   'primary' — neoBlue mark + spaceNavy text  → light backgrounds (nav, cards)
 *   'white'   — neoBlue mark + white text       → dark backgrounds (footer, CTA)
 *   'mark'    — neoBlue mark only               → favicon, compact contexts
 *
 * ── Placement map (RALPH V2 spec) ─────────────────────────────────────────────
 *   Navigation (transparent / home)  → variant="white"
 *   Navigation (scrolled / white bg) → variant="primary"
 *   Mobile drawer                    → variant="white"
 *   Footer                           → variant="white"
 *
 * ── Static SVG files (for email, print, external use) ─────────────────────────
 *   /public/brand/logo.svg          primary colour
 *   /public/brand/logo-white.svg    light (white text)
 *   /public/brand/logo-dark.svg     all-dark (spaceNavy mark + text)
 *   /public/brand/logo-mark.svg     mark only
 */

interface BrandLogoProps {
  href?:      string;
  variant?:   'primary' | 'white' | 'mark';
  height?:    number;   // rendered height in px (width scales automatically)
  /** @deprecated — no longer needed; kept for API compatibility */
  priority?:  boolean;
  className?: string;
}

export default function BrandLogo({
  href,
  variant   = 'primary',
  height    = 40,
  className,
}: BrandLogoProps) {
  // ── Colour decisions ────────────────────────────────────────────────────────
  const markColor = BRAND.neoBlue;
  const textColor = variant === 'white' ? BRAND.white : BRAND.spaceNavy;
  const showText  = variant !== 'mark';

  // ── Proportional type scale (normalised at height=44) ──────────────────────
  const wordmarkSize = `${(height * 0.50).toFixed(1)}px`;
  const taglineSize  = `${Math.max(height * 0.185, 6).toFixed(1)}px`;
  const gap          = `${Math.round(height * 0.28)}px`;

  // ── Mark (inline SVG) ──────────────────────────────────────────────────────
  // viewBox "0 0 100 100" — all coordinates in that unit space.
  // Shape anatomy (traced from logo-mark.png):
  //   Head circle   cx=30, cy=18, r=9
  //   Wing          parallelogram (29,39)→(35,23)→(98,1)→(92,18)
  //   J-curve body  thick rounded arc, stroke-width=14
  //   Lower circle  cx=58, cy=77, r=7.5
  const mark = (
    <svg
      viewBox="0 0 100 100"
      style={{ height, width: height, display: 'block', flexShrink: 0 }}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="30" cy="18" r="9" fill={markColor} />
      <polygon points="29,39 35,23 98,1 92,18" fill={markColor} />
      <path
        d="M37,37 C20,48 4,62 3,76 C2,90 18,94 36,92 C50,90 54,83 48,77"
        fill="none"
        stroke={markColor}
        strokeWidth={14}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="58" cy="77" r="7.5" fill={markColor} />
    </svg>
  );

  // ── Wordmark ───────────────────────────────────────────────────────────────
  const wordmark = showText ? (
    <Box
      sx={{
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        pointerEvents:  'none',
        userSelect:     'none',
      }}
    >
      <Box
        component="span"
        sx={{
          display:       'block',
          fontFamily:    "'Articulat CF', 'Inter', -apple-system, sans-serif",
          fontWeight:    800,
          fontSize:      wordmarkSize,
          lineHeight:    1.05,
          color:         textColor,
          letterSpacing: '-0.01em',
          whiteSpace:    'nowrap',
        }}
      >
        InSync
      </Box>

      <Box
        component="span"
        sx={{
          display:       'block',
          fontFamily:    "'Articulat CF', 'Inter', -apple-system, sans-serif",
          fontWeight:    500,
          fontSize:      taglineSize,
          lineHeight:    1.2,
          color:         textColor,
          letterSpacing: '0.09em',
          textTransform: 'uppercase',
          whiteSpace:    'nowrap',
        }}
      >
        Physical Therapy
      </Box>
    </Box>
  ) : null;

  // ── Assembled logo ─────────────────────────────────────────────────────────
  const logo = (
    <Box
      sx={{
        display:    'inline-flex',
        alignItems: 'center',
        gap,
        lineHeight: 0,
      }}
    >
      {mark}
      {wordmark}
    </Box>
  );

  if (!href) return logo;

  return (
    <Box
      component={Link}
      href={href}
      aria-label="InSync Physical Therapy — Home"
      className={className}
      sx={{
        display:        'inline-flex',
        alignItems:     'center',
        lineHeight:     0,
        textDecoration: 'none',
        flexShrink:     0,
        '&:focus-visible': {
          outline:       `2px solid ${BRAND.neoBlue}`,
          outlineOffset: 4,
          borderRadius:  4,
        },
      }}
    >
      {logo}
    </Box>
  );
}
