'use client';

/**
 * HeroRedesigned — RALPH spec
 * Clean, minimal. White-dominant with Deep Petrol text.
 * No gradients, no animated mesh, no floating circles.
 * Hero image on right, copy on left.
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
import { SECTION_IMAGES } from '@/lib/images';
import HeroMedia from '@/components/HeroMedia';

export default function HeroRedesigned() {
  return (
    <Box
      component="section"
      aria-label="InSync Physical Therapy — expert physical therapy in NYC"
      sx={{
        position:        'relative',
        minHeight:       { xs: 'auto', md: '75vh' },
        display:         'flex',
        alignItems:      'center',
        overflow:        'hidden',
        mt:              { xs: -8, md: -9 },
        pt:              { xs: 8, md: 9 },
        backgroundColor: BRAND.deepPetrol,
      }}
    >

      {/* ── Right-panel hero image (desktop only) ─────────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          display:  { xs: 'none', md: 'block' },
          position: 'absolute',
          right:    0,
          top:      0,
          width:    '50%',
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
        {/* Left fade into Deep Petrol */}
        <Box
          sx={{
            position:   'absolute',
            inset:      0,
            background: `linear-gradient(to right,
              ${BRAND.deepPetrol} 0%,
              rgba(0,38,42,0.7) 25%,
              rgba(0,38,42,0.3) 50%,
              transparent 80%
            )`,
          }}
        />
        {/* Top/bottom fade */}
        <Box
          sx={{
            position:   'absolute',
            inset:      0,
            background: `linear-gradient(to bottom, ${BRAND.deepPetrol} 0%, transparent 15%, transparent 85%, ${BRAND.deepPetrol} 100%)`,
          }}
        />
      </Box>

      {/* ── Main content ──────────────────────────────────────────────── */}
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 8 } }}
      >
        <Box sx={{ maxWidth: { xs: '100%', md: '54%' } }}>

          {/* Thin accent line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            style={{ transformOrigin: 'left', width: 48, height: 2, backgroundColor: BRAND.sinopia, marginBottom: 20, borderRadius: 1 }}
          />

          {/* H1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <Typography
              component="h1"
              sx={{
                color:         BRAND.white,
                fontWeight:    800,
                fontSize:      { xs: '2.25rem', sm: '2.75rem', md: '3rem', lg: '3.25rem' },
                lineHeight:    1.08,
                letterSpacing: '-0.025em',
                mb:            1.5,
              }}
            >
              Expert physical therapy in New York
            </Typography>
          </motion.div>

          {/* Subline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Typography
              sx={{
                color:      'rgba(255,255,255,0.75)',
                fontSize:   { xs: '1rem', md: '1.0625rem' },
                lineHeight: 1.6,
                maxWidth:   440,
                mb:         { xs: 2.5, md: 3 },
              }}
            >
              One-on-one care. Two locations. Insurance verified before your first visit.
            </Typography>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
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
                sx={{
                  backgroundColor: BRAND.sinopia,
                  color:           BRAND.white,
                  fontWeight:      700,
                  px:              { xs: 3, md: 3.5 },
                  py:              1.5,
                  fontSize:        '0.9375rem',
                  borderRadius:    1,
                  textTransform:   'none',
                  transition:      'background-color 0.2s, transform 0.2s',
                  '&:hover': {
                    backgroundColor: BRAND.sinopiaHover,
                    transform:       'translateY(-2px)',
                  },
                  '&:focus-visible': {
                    outline:       `2px solid ${BRAND.sinopia}`,
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
                aria-label="Find an InSync Physical Therapy location"
                sx={{
                  borderColor:   'rgba(255,255,255,0.3)',
                  borderWidth:   1.5,
                  color:         BRAND.white,
                  fontWeight:    600,
                  px:            { xs: 2.5, md: 3 },
                  py:            1.375,
                  fontSize:      '0.875rem',
                  borderRadius:  1,
                  textTransform: 'none',
                  transition:    'border-color 0.2s, color 0.2s, background-color 0.2s',
                  '&:hover': {
                    borderColor:     BRAND.sinopia,
                    color:           BRAND.sinopia,
                    backgroundColor: 'rgba(246,55,0,0.08)',
                  },
                  '&:focus-visible': {
                    outline:       `2px solid ${BRAND.sinopia}`,
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
