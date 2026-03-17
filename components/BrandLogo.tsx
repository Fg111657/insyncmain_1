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
  //
  // Shape anatomy (traced from the correct New Logo V2):
  //
  //   Head circle  — cx=38, cy=17, r=9.5
  //                  Top circle representing the head / person
  //
  //   Wing         — polygon 30,38 → 38,24 → 95,5 → 87,18
  //                  Diagonal parallelogram: lower-left (near shoulder)
  //                  to upper-right (outstretched arm). Bold, prominent.
  //
  //   J-curve      — M48,30 gentle arc sweeping left-down then hooking right
  //                  stroke-width=11, round caps/joins
  //                  Leftmost extent ≈ x=20 (moderate arc, not extreme J)
  //
  //   Lower circle — cx=56, cy=73, r=8
  //                  Hip/knee anchor at the J-curve hook end
  //
  // MAINTENANCE: if the logo mark ever changes, update the 4 shape elements
  // here AND in all /public/brand/logo*.svg files. See docs/logo-system.md.
  const mark = (
    <svg
      viewBox="0 0 100 100"
      style={{ height, width: height, display: 'block', flexShrink: 0 }}
      aria-hidden="true"
      focusable="false"
    >
      {/* Head circle */}
      <circle cx="38" cy="17" r="9.5" fill={markColor} />
      {/* Wing — diagonal parallelogram, shoulder to upper-right */}
      <polygon points="30,38 38,24 95,5 87,18" fill={markColor} />
      {/* J-curve body — gentle arc, moderate leftward sweep */}
      <path
        d="M48,30 C36,44 22,60 20,72 C18,84 28,89 44,87 C56,85 62,77 56,71"
        fill="none"
        stroke={markColor}
        strokeWidth={11}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lower circle — hip/knee anchor */}
      <circle cx="56" cy="73" r="8" fill={markColor} />
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
