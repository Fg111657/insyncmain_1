'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';

/**
 * BrandLogo — single source of truth for the InSync logo in all contexts.
 *
 * variant:
 *   'primary' — full colour, used on white/offWhite backgrounds (nav light, cards)
 *   'white'   — all-white, used on dark/navy backgrounds (nav dark, footer, CTA band)
 *   'mark'    — icon only (not used yet; reserved for favicons / compact contexts)
 *
 * RALPH V2 Phase 1.2 logo placement map:
 *   Navigation (light / scrolled)  → variant="primary"
 *   Navigation (dark / transparent)→ variant="white"
 *   Footer                         → variant="white"
 *   CTABand                        → variant="white"
 */

interface BrandLogoProps {
  href?:     string;
  variant?:  'primary' | 'white';
  height?:   number;    // rendered height in px (width scales automatically)
  priority?: boolean;
  className?: string;
}

export default function BrandLogo({
  href      = '/',
  variant   = 'primary',
  height    = 40,
  priority  = false,
  className,
}: BrandLogoProps) {
  // Aspect ratio of the source PNG: 3230 × 1312 ≈ 2.463
  const aspectRatio = 3230 / 1312;
  const width       = Math.round(height * aspectRatio);

  const src = variant === 'white'
    ? '/brand/logo-white.png'
    : '/brand/logo-primary.png';

  const logo = (
    <Image
      src={src}
      alt="InSync Physical Therapy"
      width={width}
      height={height}
      priority={priority}
      style={{ width: 'auto', height: height, display: 'block' }}
    />
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
          outline:       '2px solid #0EC5E6',
          outlineOffset: 4,
          borderRadius:  4,
        },
      }}
    >
      {logo}
    </Box>
  );
}
