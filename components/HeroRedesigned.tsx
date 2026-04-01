'use client';

/**
 * HeroRedesigned — Video background hero
 * Looping video at half speed with dark overlay.
 * Text content inside a frosted-glass card.
 */

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MapIcon from '@mui/icons-material/Map';
import { motion, useInView } from 'framer-motion';
import { BRAND } from '@/lib/theme';

export default function HeroRedesigned() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  /* Slow the video to half speed once loaded */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const handleLoaded = () => { vid.playbackRate = 0.5; };
    vid.addEventListener('loadeddata', handleLoaded);
    if (vid.readyState >= 2) handleLoaded();
    return () => vid.removeEventListener('loadeddata', handleLoaded);
  }, []);

  return (
    <Box
      component="section"
      ref={sectionRef}
      aria-label="InSync Physical Therapy — expert physical therapy in NYC"
      sx={{
        position:        'relative',
        minHeight:       { xs: 'auto', md: '80vh' },
        display:         'flex',
        alignItems:      'center',
        overflow:        'hidden',
        mt:              { xs: -8, md: -9 },
        pt:              { xs: 8, md: 9 },
        backgroundColor: BRAND.deepPetrol,
      }}
    >

      {/* ── Video background ─────────────────────────────────────────── */}
      <Box
        component="video"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position:  'absolute',
          inset:     0,
          width:     '100%',
          height:    '100%',
          objectFit: 'cover',
          zIndex:    0,
        }}
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </Box>

      {/* ── Dark overlay for contrast + transparency ─────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          position:        'absolute',
          inset:           0,
          zIndex:          1,
          backgroundColor: 'rgba(0,38,42,0.55)',
        }}
      />

      {/* ── Main content ──────────────────────────────────────────────── */}
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 2, py: { xs: 6, md: 8 } }}
      >
        {/* ── Frosted glass card ──────────────────────────────────────── */}
        <Box
          sx={{
            maxWidth:        { xs: '100%', md: 560 },
            backgroundColor: 'rgba(0,38,42,0.45)',
            backdropFilter:  'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius:    3,
            border:          '1px solid rgba(255,255,255,0.1)',
            p:               { xs: 3, md: 4.5 },
          }}
        >
          {/* Thin accent line */}
          <Box
            component={motion.div}
            initial={false}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            sx={{
              transformOrigin: 'left',
              width:           48,
              height:          2,
              backgroundColor: BRAND.sinopia,
              mb:              2.5,
              borderRadius:    0.5,
            }}
          />

          {/* H1 */}
          <Box
            component={motion.div}
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <Typography
              component="h1"
              sx={{
                color:         BRAND.white,
                fontWeight:    800,
                fontSize:      { xs: '2rem', sm: '2.5rem', md: '2.75rem' },
                lineHeight:    1.08,
                letterSpacing: '-0.025em',
                mb:            1.5,
              }}
            >
              Expert physical therapy in New York
            </Typography>
          </Box>

          {/* Subline */}
          <Box
            component={motion.div}
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.35, delay: 0.18 }}
          >
            <Typography
              sx={{
                color:      'rgba(255,255,255,0.8)',
                fontSize:   { xs: '0.9375rem', md: '1rem' },
                lineHeight: 1.6,
                mb:         { xs: 2.5, md: 3 },
              }}
            >
              One-on-one care. Two locations. Insurance verified before your first visit.
            </Typography>
          </Box>

          {/* CTAs */}
          <Box
            component={motion.div}
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.35, delay: 0.28 }}
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
                  borderColor:   'rgba(255,255,255,0.35)',
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
