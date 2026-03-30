'use client';

/**
 * HeroRedesigned
 * Simplified hero with 3D depth: animated gradient mesh, parallax hero image,
 * staggered entrance animations, floating decorative elements.
 */

import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MapIcon from '@mui/icons-material/Map';
import { motion } from 'framer-motion';
import { BRAND } from '@/lib/theme';
import { GLOW, EASE } from '@/lib/depth-tokens';
import { SECTION_IMAGES } from '@/lib/images';
import HeroMedia from '@/components/HeroMedia';
import { useParallax } from '@/hooks/useParallax';

export default function HeroRedesigned() {
  const parallax = useParallax(0.08);

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

      {/* ── Animated gradient mesh overlay ─────────────────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          position:   'absolute',
          inset:      0,
          zIndex:     0,
          opacity:    0.35,
          background: `
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(14,197,230,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(14,197,230,0.08) 0%, transparent 60%)
          `,
          backgroundSize: '200% 200%',
          animation:      'gradientMesh 20s ease infinite',
        }}
      />

      {/* ── Floating decorative elements ───────────────────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          position:     'absolute',
          top:          '15%',
          left:         '8%',
          width:        120,
          height:       120,
          borderRadius: '50%',
          border:       '1px solid rgba(14,197,230,0.08)',
          animation:    'floatSlow 8s ease-in-out infinite',
          zIndex:       0,
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position:     'absolute',
          bottom:       '20%',
          left:         '42%',
          width:        80,
          height:       80,
          borderRadius: '50%',
          background:   'rgba(14,197,230,0.04)',
          animation:    'floatSlowReverse 10s ease-in-out infinite',
          zIndex:       0,
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position:     'absolute',
          top:          '60%',
          right:        '52%',
          width:        48,
          height:       48,
          borderRadius: '50%',
          border:       '1.5px solid rgba(14,197,230,0.06)',
          animation:    'floatSlow 12s ease-in-out infinite',
          zIndex:       0,
        }}
      />

      {/* ── Right-panel hero media with parallax (desktop only) ─────── */}
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
        <motion.div
          ref={parallax.ref}
          style={{ y: parallax.y, width: '100%', height: '110%', marginTop: '-5%' }}
        >
          <HeroMedia
            mediaType="image"
            src={SECTION_IMAGES.hero}
            alt="Dr. Hassan providing one-on-one physical therapy in NYC"
            priority
          />
        </motion.div>
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

      {/* ── Main content ──────────────────────────────────────────────── */}
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}
      >
        <Box sx={{ maxWidth: { xs: '100%', md: '56%', lg: '54%' } }}>

          {/* H1 — entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE.out }}
          >
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
          </motion.div>

          {/* Dual CTAs — staggered entrance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE.out }}
          >
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
                  boxShadow:       GLOW.subtle,
                  animation:       'pulseGlow 3s ease-in-out infinite alternate',
                  transition:      'background-color 0.25s, transform 0.25s, box-shadow 0.25s',
                  '&:hover': {
                    backgroundColor: BRAND.neoBlueHover,
                    transform:       'translateY(-3px) scale(1.02)',
                    boxShadow:       GLOW.strong,
                    animation:       'none',
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
                  transition:    'border-color 0.25s, color 0.25s, background-color 0.25s, transform 0.25s',
                  '&:hover': {
                    borderColor:     BRAND.neoBlue,
                    color:           BRAND.neoBlue,
                    backgroundColor: 'rgba(14,197,230,0.08)',
                    transform:       'translateY(-2px)',
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
          </motion.div>

        </Box>
      </Container>

    </Box>
  );
}
