'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BRAND } from '@/lib/theme';

// ─── ConditionsCarousel ───────────────────────────────────────────────────────
// Horizontal scroll carousel for the "Conditions Treated" section on the
// services page. Replaces a static grid with a touch/mouse-draggable strip.
//
// Design principles:
// - Mobile-first: full-width horizontal scroll on xs/sm, wider cards on md+
// - No autoplay (brand animation rule: zero auto-playing loops)
// - No layout shift: all card heights are fixed via min-height
// - Keyboard navigable: ArrowLeft / ArrowRight on focused carousel
// - Screen reader: aria-label on carousel, each card is a list item
// ─────────────────────────────────────────────────────────────────────────────

const CONDITIONS = [
  'Back pain',          'Neck pain',          'Knee pain',
  'ACL rehab',          'Meniscus tear',       'Rotator cuff injury',
  'Shoulder pain',      'Labral tear',         'Hip pain',
  'Plantar fasciitis',  'Ankle sprain',        'Stress fractures',
  'Sciatica',           'Disc herniation',     'IT band syndrome',
  'Post-surgical',      'Chronic pain',        'Overuse injuries',
  'Shoulder impingement', 'Tennis elbow',       'Runner\'s knee',
];

// Group conditions into rows of 3 for the card stacks
const CARD_GROUPS: string[][] = [];
for (let i = 0; i < CONDITIONS.length; i += 3) {
  CARD_GROUPS.push(CONDITIONS.slice(i, i + 3));
}

interface ConditionsCarouselProps {
  /** Background color of the section (used to style cards) */
  onLight?: boolean;
}

export default function ConditionsCarousel({ onLight = true }: ConditionsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align:        'start',
    containScroll: 'trimSnaps',
    dragFree:     true,
    loop:         false,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Keyboard navigation when carousel container is focused
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  { e.preventDefault(); scrollPrev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); scrollNext(); }
    };
    el.addEventListener('keydown', handleKey);
    return () => el.removeEventListener('keydown', handleKey);
  }, [scrollPrev, scrollNext]);

  const cardBg      = onLight ? BRAND.white   : 'rgba(255,255,255,0.06)';
  const cardBorder  = onLight ? BRAND.gray200  : 'rgba(255,255,255,0.1)';
  const textColor   = onLight ? BRAND.gray700  : 'rgba(255,255,255,0.82)';
  const dotColor    = BRAND.neoBlue;
  const btnBg       = onLight ? BRAND.white    : 'rgba(255,255,255,0.08)';
  const btnColor    = onLight ? BRAND.spaceNavy : BRAND.white;

  return (
    <Box>
      {/* Prev / Next controls */}
      <Box
        sx={{
          display:        'flex',
          justifyContent: 'flex-end',
          gap:            1,
          mb:             2,
        }}
      >
        <IconButton
          onClick={scrollPrev}
          aria-label="Previous conditions"
          size="small"
          sx={{
            backgroundColor: btnBg,
            border:          `1px solid ${cardBorder}`,
            color:           btnColor,
            '&:hover': {
              backgroundColor: BRAND.neoBlue,
              borderColor:     BRAND.neoBlue,
              color:           BRAND.obsidian,
            },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: '0.75rem' }} />
        </IconButton>
        <IconButton
          onClick={scrollNext}
          aria-label="Next conditions"
          size="small"
          sx={{
            backgroundColor: btnBg,
            border:          `1px solid ${cardBorder}`,
            color:           btnColor,
            '&:hover': {
              backgroundColor: BRAND.neoBlue,
              borderColor:     BRAND.neoBlue,
              color:           BRAND.obsidian,
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: '0.75rem' }} />
        </IconButton>
      </Box>

      {/* Embla viewport */}
      <Box
        ref={containerRef}
        tabIndex={0}
        aria-label="Conditions treated — scroll to see all"
        role="region"
        sx={{
          overflow: 'hidden',
          cursor:   'grab',
          '&:active': { cursor: 'grabbing' },
          '&:focus-visible': {
            outline:       `2px solid ${BRAND.neoBlue}`,
            outlineOffset: 4,
            borderRadius:  2,
          },
        }}
      >
        <Box
          ref={emblaRef}
          sx={{ overflow: 'hidden' }}
        >
          <Box
            component="ul"
            role="list"
            aria-label="Conditions list"
            sx={{
              display:    'flex',
              gap:        1.5,
              listStyle:  'none',
              p:          0,
              m:          0,
              userSelect: 'none',
            }}
          >
            {CARD_GROUPS.map((group, groupIdx) => (
              <Box
                key={groupIdx}
                component="li"
                sx={{
                  flex:           '0 0 auto',
                  width:          { xs: '160px', sm: '180px', md: '200px' },
                  display:        'flex',
                  flexDirection:  'column',
                  gap:            1,
                }}
              >
                {group.map((condition) => (
                  <Box
                    key={condition}
                    sx={{
                      border:          `1px solid ${cardBorder}`,
                      borderRadius:    2,
                      px:              2,
                      py:              1.25,
                      backgroundColor: cardBg,
                      display:         'flex',
                      alignItems:      'center',
                      gap:             1,
                      minHeight:       48,
                    }}
                  >
                    <Box
                      sx={{
                        width:           5,
                        height:          5,
                        borderRadius:    '50%',
                        backgroundColor: dotColor,
                        flexShrink:      0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize:   '0.875rem',
                        fontWeight: 500,
                        color:      textColor,
                        lineHeight: 1.3,
                      }}
                    >
                      {condition}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
