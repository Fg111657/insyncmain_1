'use client';

import Link from 'next/link';
import Box  from '@mui/material/Box';
import { BRAND } from '@/lib/theme';

/**
 * BrandLogo — RALPH spec
 * Mark matches text colour (Deep Petrol on light, white on dark).
 * No Sinopia/accent on the mark.
 */

interface BrandLogoProps {
  href?:      string;
  variant?:   'primary' | 'white' | 'mark';
  height?:    number;
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
  const textColor = variant === 'white' ? BRAND.white : BRAND.deepPetrol;
  const markColor = textColor;
  const showText  = variant !== 'mark';

  const wordmarkSize = `${(height * 0.50).toFixed(1)}px`;
  const taglineSize  = `${Math.max(height * 0.185, 6).toFixed(1)}px`;
  const gap          = `${Math.round(height * 0.28)}px`;

  const mark = (
    <svg
      viewBox="315 515 490 545"
      style={{ height, width: Math.round(height * 490 / 545), display: 'block', flexShrink: 0 }}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M326.02 1053.41 c0 -9.31 20.45 -104.49 22.68 -106.11 c1.42 -1.01 23.49 -13.77 49.01 -28.55 c25.31 -14.58 49.61 -29.77 53.87 -33.41 c4.45 -3.64 10.33 -11.74 13.57 -18.23 c4.86 -9.72 5.67 -14.18 5.67 -27.74 c0 -13.36 -1.01 -18.23 -5.47 -27.94 c-6.07 -12.96 -19.84 -32.60 -38.47 -55.28 c-6.48 -7.90 -11.74 -15.19 -11.74 -16.20 c0.20 -2.03 59.13 -36.04 66.62 -38.27 c5.47 -1.62 5.47 -1.62 29.57 29.97 c40.90 53.46 51.03 106.11 31.39 161.80 c-7.90 22.48 -17.21 36.65 -35.44 53.66 c-16.60 15.39 -17.01 15.80 -138.71 85.66 c-16.20 9.11 -32.40 18.43 -35.84 20.66 c-6.68 3.85 -6.68 3.85 -6.68 0z" fill={markColor} />
      <path d="M585.02 1029.10 c-18.43 -9.52 -29.77 -31.18 -27.34 -51.84 c3.85 -33.41 41.72 -53.26 72.09 -37.67 c14.38 7.49 23.90 21.87 25.72 39.28 c2.03 19.64 -5.26 35.03 -22.68 48.19 c-9.31 7.09 -11.14 7.70 -23.49 7.70 c-10.94 0 -15.59 -1.22 -24.30 -5.67z" fill={markColor} />
      <path d="M629.17 868.32 c-35.03 -40.30 -51.44 -72.70 -56.29 -111.17 c-4.66 -35.24 3.44 -70.88 22.68 -100.24 c12.35 -18.83 24.10 -30.78 41.72 -42.12 c27.74 -17.62 152.68 -88.29 156.53 -88.29 c2.23 0 4.05 1.42 4.05 3.04 c0 6.07 -18.02 95.99 -19.84 99.63 c-1.22 2.03 -13.36 10.13 -27.14 17.82 c-44.55 24.91 -71.28 41.51 -79.38 49.21 c-11.95 11.34 -17.42 24.70 -17.42 42.32 c0 23.90 6.48 36.85 40.70 79.99 c8.71 11.14 15.39 21.06 14.78 22.07 c-0.61 1.01 -4.45 3.64 -8.51 5.87 c-4.05 2.23 -8.91 4.86 -10.53 5.87 c-3.85 2.43 -23.49 13.57 -38.88 22.27 l-11.34 6.28 l-11.14 -12.56z" fill={markColor} />
      <path d="M504.63 643.14 c-33.41 -10.94 -45.97 -53.66 -23.29 -80.19 c10.53 -12.35 20.86 -16.81 39.28 -17.01 c13.36 -0.20 16.20 0.41 23.69 5.47 c16.81 10.94 26.73 32 23.90 50.83 c-1.82 11.74 -12.56 28.75 -22.68 36.04 c-10.13 7.29 -27.34 9.31 -40.90 4.86z" fill={markColor} />
    </svg>
  );

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
        Physical Therapy & Fitness
      </Box>
    </Box>
  ) : null;

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
          outline:       `2px solid ${BRAND.sinopia}`,
          outlineOffset: 4,
          borderRadius:  4,
        },
      }}
    >
      {logo}
    </Box>
  );
}
