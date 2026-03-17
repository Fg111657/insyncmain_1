'use client';

import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { BRAND } from '@/lib/theme';

interface LogoItem {
  name: string;
  logo: string;
}

interface LogoCarouselProps {
  items:       LogoItem[];
  /** Height of each logo tile in px — default 72 */
  tileHeight?: number;
  /** Duration of one full scroll cycle in seconds — default 28 */
  duration?:   number;
  /** Background color of each tile — default white */
  tileBg?:     string;
}

/**
 * Infinite auto-scrolling logo carousel.
 * Duplicates the logo list so the scroll loops seamlessly.
 * Pauses on hover. Works on mobile (touch-scroll friendly).
 */
export default function LogoCarousel({
  items,
  tileHeight = 72,
  duration   = 28,
  tileBg     = BRAND.white,
}: LogoCarouselProps) {
  // Duplicate for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <Box
      aria-label="Logo carousel"
      sx={{
        overflow:   'hidden',
        width:      '100%',
        position:   'relative',
        // Fade-out edges
        '&::before, &::after': {
          content:    '""',
          position:   'absolute',
          top:        0,
          bottom:     0,
          width:      { xs: 40, md: 80 },
          zIndex:     2,
          pointerEvents: 'none',
        },
        '&::before': {
          left:       0,
          background: `linear-gradient(to right, ${tileBg === BRAND.white ? BRAND.offWhite : tileBg}, transparent)`,
        },
        '&::after': {
          right:      0,
          background: `linear-gradient(to left, ${tileBg === BRAND.white ? BRAND.offWhite : tileBg}, transparent)`,
        },
        // Pause on hover
        '&:hover .carousel-track': {
          animationPlayState: 'paused',
        },
      }}
    >
      <Box
        className="carousel-track"
        sx={{
          display:   'flex',
          gap:       2,
          width:     'max-content',
          animation: `carouselScroll ${duration}s linear infinite`,
          '@keyframes carouselScroll': {
            from: { transform: 'translateX(0)' },
            to:   { transform: 'translateX(-50%)' },
          },
        }}
      >
        {doubled.map(({ name, logo }, idx) => (
          <Box
            key={`${name}-${idx}`}
            sx={{
              flexShrink:      0,
              width:           140,
              height:          tileHeight,
              backgroundColor: tileBg,
              border:          '1px solid rgba(0,61,89,0.07)',
              borderRadius:    2,
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              p:               2,
              position:        'relative',
            }}
          >
            <Image
              src={logo}
              alt={name}
              fill
              sizes="140px"
              style={{
                objectFit:      'contain',
                objectPosition: 'center',
                padding:        '10px 14px',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
