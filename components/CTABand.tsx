'use client';

/**
 * CTABand
 * Animated gradient background, parallax headline, 3D button hover,
 * floating decorative ring.
 */

import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import MotionSection from '@/components/MotionSection';
import { BRAND } from '@/lib/theme';
import { GLOW, TIMING } from '@/lib/depth-tokens';
import { useParallax } from '@/hooks/useParallax';

interface CTABandProps {
  headline?:    string;
  subline?:     string;
  variant?:     'navy' | 'dark';
  showPhone?:   boolean;
}

export default function CTABand({
  headline  = 'Ready to Start Your Recovery?',
  subline   = 'Brooklyn and Manhattan locations. Insurance verified before your first visit.',
  variant   = 'navy',
  showPhone = true,
}: CTABandProps) {
  const bgClass = variant === 'dark' ? 'section-dark' : 'section-navy';
  const parallax = useParallax(0.05);

  return (
    <Box
      component="section"
      aria-label="Request appointment"
      className={bgClass}
      sx={{
        position: 'relative',
        py:       { xs: 8, md: 10 },
        overflow: 'hidden',
        /* Animated gradient background */
        background: `linear-gradient(
          135deg,
          ${BRAND.obsidian} 0%,
          ${BRAND.spaceNavy} 30%,
          ${BRAND.luxBlue} 60%,
          ${BRAND.spaceNavy} 100%
        )`,
        backgroundSize: '200% 200%',
        animation:      'gradientShift 15s ease infinite',
      }}
    >
      {/* Floating decorative ring */}
      <Box
        aria-hidden="true"
        sx={{
          position:     'absolute',
          top:          '10%',
          right:        '8%',
          width:        160,
          height:       160,
          borderRadius: '50%',
          border:       '1.5px solid rgba(14,197,230,0.10)',
          animation:    'floatSlow 10s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position:     'absolute',
          bottom:       '15%',
          left:         '5%',
          width:        100,
          height:       100,
          borderRadius: '50%',
          background:   'rgba(14,197,230,0.04)',
          animation:    'floatSlowReverse 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 }, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <MotionSection>
        {/* Serif accent */}
        <Typography
          component="p"
          sx={{
            fontFamily:    'var(--font-secondary), "Playfair Display", serif',
            fontStyle:     'italic',
            fontSize:      { xs: '1rem', md: '1.125rem' },
            color:         'rgba(255,255,255,0.82)',
            mb:            1.5,
            letterSpacing: '0.01em',
          }}
        >
          InSync Physical Therapy, NYC
        </Typography>

        {/* Parallax headline */}
        <motion.div ref={parallax.ref} style={{ y: parallax.y }}>
          <Typography
            variant="h2"
            sx={{
              color:      BRAND.white,
              mb:         2,
              fontWeight: 800,
              fontSize:   { xs: '1.875rem', md: '2.75rem' },
              lineHeight: 1.1,
            }}
          >
            {headline}
          </Typography>
        </motion.div>

        <Typography
          variant="body1"
          sx={{
            color:      'rgba(255,255,255,0.82)',
            mb:         4.5,
            maxWidth:   460,
            mx:         'auto',
            lineHeight: 1.6,
          }}
        >
          {subline}
        </Typography>

        <Box
          sx={{
            display:        'flex',
            flexDirection:  { xs: 'column', sm: 'row' },
            gap:            2,
            justifyContent: 'center',
            alignItems:     'center',
          }}
        >
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: BRAND.neoBlue,
              color:           BRAND.white,
              fontWeight:      700,
              px:              4,
              py:              1.875,
              fontSize:        '1rem',
              borderRadius:    3,
              minWidth:        220,
              boxShadow:       GLOW.subtle,
              transition:      `background-color ${TIMING.normal}s ease, transform ${TIMING.normal}s ease, box-shadow ${TIMING.normal}s ease`,
              '&:hover': {
                backgroundColor: BRAND.neoBlueHover,
                transform:       'translateY(-3px) scale(1.02)',
                boxShadow:       GLOW.strong,
              },
            }}
          >
            Request Appointment
          </Button>

          {showPhone && (
            <Button
              component="a"
              href="tel:+19294194643"
              variant="text"
              size="large"
              startIcon={<PhoneIcon sx={{ fontSize: '1rem' }} />}
              sx={{
                color:      'rgba(255,255,255,0.75)',
                fontWeight: 500,
                fontSize:   '0.9375rem',
                px:         2,
                transition: `color ${TIMING.fast}s ease`,
                '&:hover': {
                  color:           BRAND.neoBlue,
                  backgroundColor: 'transparent',
                },
              }}
            >
              929-419-4643
            </Button>
          )}
        </Box>
        </MotionSection>
      </Container>
    </Box>
  );
}
