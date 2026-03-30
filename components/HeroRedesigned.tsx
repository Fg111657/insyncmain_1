'use client';

/**
 * HeroRedesigned
 * Simplified hero — single headline, dual CTAs, hero photo.
 */

import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MapIcon from '@mui/icons-material/Map';
import { BRAND } from '@/lib/theme';
import { SECTION_IMAGES } from '@/lib/images';
import HeroMedia from '@/components/HeroMedia';

export default function HeroRedesigned() {
  return (
    <Box
      component="section"
      aria-label="InSync Physical Therapy — expert physical therapy in NYC"
      className="section-dark"
      sx={{
        position:   'relative',
        minHeight:  { xs: '80vh', md: '85vh' },
        display:    'flex',
        alignItems: 'center',
        overflow:   'hidden',
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
        <Box
          sx={{
            position:   'absolute',
            inset:      0,
            background: `linear-gradient(to right, ${BRAND.luxBlue} 0%, rgba(0,38,42,0.55) 30%, rgba(0,38,42,0.1) 70%, transparent 100%)`,
          }}
        />
        <Box
          sx={{
            position:   'absolute',
            inset:      0,
            background: `linear-gradient(to bottom, ${BRAND.luxBlue} 0%, transparent 12%, transparent 88%, ${BRAND.luxBlue} 100%)`,
          }}
        />
      </Box>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}
      >
        <Box sx={{ maxWidth: { xs: '100%', md: '56%', lg: '54%' } }}>

          {/* H1 */}
          <Typography
            component="h1"
            sx={{
              color:         BRAND.white,
              fontWeight:    800,
              fontSize:      { xs: '2.25rem', sm: '2.875rem', md: '3.125rem', lg: '3.625rem' },
              lineHeight:    1.12,
              letterSpacing: '-0.02em',
              mb:            { xs: 3, md: 4 },
            }}
          >
            Expert one-on-one physical therapy to help New Yorkers get back in sync
          </Typography>

          {/* Dual CTAs */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 2 }}
            alignItems={{ xs: 'stretch', sm: 'center' }}
          >
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

        </Box>
      </Container>

    </Box>
  );
}
