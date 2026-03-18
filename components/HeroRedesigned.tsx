'use client';

/**
 * HeroRedesigned
 * Outcome-driven hero per RALPH spec.
 *
 * Key changes vs HeroSection:
 *  - Dynamic city injection via useUserLocation (Manhattan / Brooklyn / NYC)
 *  - Benefit-first headline: "Recover Faster with Expert Physical Therapy in [City]"
 *  - Empathy sub-headline listing key conditions
 *  - RALPH trust checklist: no prescription, insurance, 1-on-1, online scheduling
 *  - Dual CTAs: primary "Book Your Evaluation" + secondary "Find a Location"
 *  - Social proof strip below CTAs (stars, patients, years)
 *  - HeroMedia component handles video-ready right panel (image fallback)
 *  - data-analytics attributes on all CTAs
 *  - WCAG 2.1: semantic <section>, <ul>, aria-label, focus-visible styles
 */

import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MapIcon from '@mui/icons-material/Map';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import { BRAND } from '@/lib/theme';
import { SECTION_IMAGES } from '@/lib/images';
import { useUserLocation } from '@/hooks/useUserLocation';
import HeroMedia from '@/components/HeroMedia';

// ─── Static content ────────────────────────────────────────────────────────────

/** Hero trust checklist — matches RALPH trust-bar spec */
const TRUST_ITEMS = [
  'No prescription needed',
  'Insurance accepted & verified',
  'One-on-one care, every visit',
  'Online scheduling available',
] as const;

/** Social proof strip below CTAs */
const SOCIAL_PROOF: Array<{ icon?: React.ReactNode; text: string }> = [
  {
    // eslint-disable-next-line no-restricted-syntax
    icon: <StarIcon sx={{ fontSize: '0.85rem', color: '#FFC107', flexShrink: 0 }} />,
    text: '4.9 Google Rating',
  },
  { text: '500+ Patients Helped' },
  { text: '9+ Years NYC Experience' },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function HeroRedesigned() {
  const { city, isLoading } = useUserLocation();
  const cityLabel = isLoading ? 'New York City' : city;

  /** Overline text — show specific borough once resolved */
  const overlineText =
    cityLabel === 'New York City'
      ? 'Brooklyn & Manhattan, NYC'
      : `${cityLabel}, NYC`;

  return (
    <Box
      component="section"
      aria-label="InSync Physical Therapy — expert physical therapy in NYC"
      className="section-dark"
      sx={{
        position:   'relative',
        minHeight:  { xs: '92vh', md: '88vh' },
        display:    'flex',
        alignItems: 'center',
        overflow:   'hidden',
        // Pull hero up under the transparent nav
        mt:         { xs: -8, md: -9 },
        pt:         { xs: 8, md: 9 },
      }}
    >

      {/* ── Dark gradient background ─────────────────────────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset:    0,
          zIndex:   0,
          background: {
            xs: `linear-gradient(160deg, ${BRAND.obsidian} 0%, ${BRAND.spaceNavy} 55%, ${BRAND.spaceNavy} 100%)`,
            md: `linear-gradient(100deg, ${BRAND.obsidian} 0%, ${BRAND.luxBlue} 40%, ${BRAND.spaceNavy} 70%, transparent 100%)`,
          },
        }}
      />

      {/* ── Right-panel hero media (desktop only) ────────────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          display:  { xs: 'none', md: 'block' },
          position: 'absolute',
          right:    0,
          top:      0,
          width:    '46%',
          height:   '100%',
          zIndex:   0,
        }}
      >
        <HeroMedia
          mediaType="image"
          src={SECTION_IMAGES.hero}
          alt="Dr. Hassan providing one-on-one physical therapy in NYC"
          priority
        />
        {/* Left-edge gradient — blends photo into dark content area */}
        <Box
          sx={{
            position:   'absolute',
            inset:      0,
            background: `linear-gradient(to right, ${BRAND.luxBlue} 0%, rgba(0,38,42,0.55) 30%, rgba(0,38,42,0.1) 70%, transparent 100%)`,
          }}
        />
        {/* Top/bottom gradient fade */}
        <Box
          sx={{
            position:   'absolute',
            inset:      0,
            background: `linear-gradient(to bottom, ${BRAND.luxBlue} 0%, transparent 12%, transparent 88%, ${BRAND.luxBlue} 100%)`,
          }}
        />
      </Box>

      {/* ── Decorative rings (mobile texture) ────────────────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          display:       { xs: 'block', md: 'none' },
          position:      'absolute',
          inset:         0,
          zIndex:        0,
          overflow:      'hidden',
          pointerEvents: 'none',
        }}
      >
        <Box
          sx={{
            position:        'absolute',
            top:             '-20%',
            right:           '-10%',
            width:           420,
            height:          420,
            borderRadius:    '50%',
            backgroundColor: 'rgba(14,197,230,0.06)',
          }}
        />
        <Box
          sx={{
            position:     'absolute',
            top:          '15%',
            right:        '5%',
            width:        200,
            height:       200,
            borderRadius: '50%',
            border:       '1px solid rgba(14,197,230,0.12)',
          }}
        />
      </Box>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}
      >
        {/* Text column — constrained to left ~55% so photo shows on desktop */}
        <Box sx={{ maxWidth: { xs: '100%', md: '56%', lg: '54%' } }}>

          {/* Overline — dynamic location */}
          <Typography
            component="p"
            sx={{
              display:       'inline-flex',
              alignItems:    'center',
              gap:           0.75,
              fontSize:      '0.72rem',
              fontWeight:    700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color:         BRAND.neoBlue,
              mb:            3,
            }}
          >
            <Box
              component="span"
              aria-hidden="true"
              sx={{
                display:         'inline-block',
                width:           20,
                height:          2,
                backgroundColor: BRAND.neoBlue,
                borderRadius:    1,
                flexShrink:      0,
              }}
            />
            {overlineText}
          </Typography>

          {/* H1 — outcome-driven, RALPH spec */}
          <Typography
            component="h1"
            sx={{
              color:         BRAND.white,
              fontWeight:    800,
              fontSize:      { xs: '2.25rem', sm: '2.875rem', md: '3.125rem', lg: '3.625rem' },
              lineHeight:    1.07,
              letterSpacing: '-0.03em',
              mb:            { xs: 2, md: 2.5 },
            }}
          >
            Recover Faster with
            <Box
              component="span"
              sx={{
                display:    'block',
                color:      BRAND.neoBlue,
                fontStyle:  'italic',
                fontFamily: 'var(--font-secondary), "Playfair Display", serif',
                fontSize:   { xs: '1.875rem', sm: '2.375rem', md: '2.625rem', lg: '3rem' },
                mt:         0.5,
                lineHeight: 1.12,
              }}
            >
              Expert Physical Therapy in {cityLabel}.
            </Box>
          </Typography>

          {/* Sub-headline — empathy + conditions (RALPH spec) */}
          <Typography
            sx={{
              color:      'rgba(255,255,255,0.78)',
              fontSize:   { xs: '1.0625rem', md: '1.0625rem' },
              lineHeight: 1.65,
              mb:         4,
              maxWidth:   520,
            }}
          >
            Sports injuries, back pain, post-surgical recovery — we help you
            move better and get back to what you love.
            <Box component="span" sx={{ display: 'block', mt: 1 }}>
              One-on-one orthopedic rehab in Brooklyn and Manhattan, NYC.
              Not a PT mill.
            </Box>
          </Typography>

          {/* Trust checklist — RALPH spec items */}
          <Box
            component="ul"
            aria-label="Key credentials"
            sx={{
              listStyle:           'none',
              p:                   0,
              m:                   0,
              mb:                  5,
              display:             'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr' },
              gap:                 { xs: 1.25, md: 1.5 },
            }}
          >
            {TRUST_ITEMS.map((item) => (
              <Box
                key={item}
                component="li"
                sx={{
                  display:    'flex',
                  alignItems: 'center',
                  gap:        0.875,
                  color:      'rgba(255,255,255,0.85)',
                  fontSize:   '0.875rem',
                  fontWeight: 500,
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ color: BRAND.neoBlue, fontSize: '1.05rem', flexShrink: 0 }}
                  aria-hidden="true"
                />
                {item}
              </Box>
            ))}
          </Box>

          {/* Dual CTAs — RALPH spec */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 2 }}
            alignItems={{ xs: 'stretch', sm: 'center' }}
            sx={{ mb: 4 }}
          >
            {/* Primary CTA */}
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              disableElevation
              aria-label="Book your physical therapy evaluation"
              data-analytics="hero-cta-primary"
              sx={{
                backgroundColor: BRAND.neoBlue,
                color:           BRAND.obsidian,
                fontWeight:      700,
                px:              { xs: 3, md: 4 },
                py:              1.875,
                fontSize:        '1rem',
                borderRadius:    1,
                textTransform:   'none',
                letterSpacing:   '0.01em',
                transition:      'background-color 0.18s, transform 0.18s, box-shadow 0.18s',
                '&:hover': {
                  backgroundColor: BRAND.neoBlueHover,
                  transform:       'translateY(-2px)',
                  boxShadow:       '0 8px 28px rgba(14,197,230,0.4)',
                },
                '&:focus-visible': {
                  outline:       `2px solid ${BRAND.neoBlue}`,
                  outlineOffset: 3,
                },
              }}
            >
              Book Your Evaluation
            </Button>

            {/* Secondary CTA */}
            <Button
              component={Link}
              href="/locations"
              variant="outlined"
              size="large"
              startIcon={<MapIcon />}
              aria-label="Find an InSync Physical Therapy location near you"
              data-analytics="hero-cta-secondary"
              sx={{
                borderColor:   'rgba(255,255,255,0.3)',
                borderWidth:   1.5,
                color:         BRAND.white,
                fontWeight:    600,
                px:            { xs: 3, md: 3.5 },
                py:            1.75,
                fontSize:      '0.9375rem',
                borderRadius:  1,
                textTransform: 'none',
                transition:    'border-color 0.18s, color 0.18s, background-color 0.18s',
                '&:hover': {
                  borderColor:     BRAND.neoBlue,
                  color:           BRAND.neoBlue,
                  backgroundColor: 'rgba(14,197,230,0.08)',
                },
                '&:focus-visible': {
                  outline:       `2px solid ${BRAND.neoBlue}`,
                  outlineOffset: 3,
                },
              }}
            >
              Find a Location
            </Button>
          </Stack>

          {/* Social proof strip — RALPH spec */}
          <Box
            aria-label="Social proof"
            sx={{
              display:    'flex',
              alignItems: 'center',
              flexWrap:   'wrap',
              gap:        0,
              opacity:    0.7,
            }}
          >
            {SOCIAL_PROOF.map(({ icon, text }, i) => (
              <React.Fragment key={text}>
                {i > 0 && (
                  <Box
                    component="span"
                    aria-hidden="true"
                    sx={{
                      mx:         1.5,
                      color:      'rgba(255,255,255,0.3)',
                      fontSize:   '0.75rem',
                      lineHeight: 1,
                    }}
                  >
                    ·
                  </Box>
                )}
                <Box
                  sx={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:        0.4,
                    color:      BRAND.white,
                    fontSize:   '0.8rem',
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  {icon}
                  <span>{text}</span>
                </Box>
              </React.Fragment>
            ))}
          </Box>

        </Box>
      </Container>

      {/* ── Scroll indicator ───────────────────────────────────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          position:  'absolute',
          bottom:    24,
          left:      '50%',
          transform: 'translateX(-50%)',
          zIndex:    1,
          opacity:   0.4,
        }}
      >
        <Box
          sx={{
            width:        1.5,
            height:       40,
            borderRadius: 4,
            background:   `linear-gradient(to bottom, transparent, ${BRAND.neoBlue})`,
            animation:    'scrollPulse 2.2s ease-in-out infinite',
            '@keyframes scrollPulse': {
              '0%, 100%': { opacity: 0.3, transform: 'scaleY(0.8)' },
              '50%':      { opacity: 1,   transform: 'scaleY(1.1)' },
            },
          }}
        />
      </Box>

    </Box>
  );
}
