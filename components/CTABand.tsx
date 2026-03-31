'use client';

/**
 * CTABand — RALPH spec
 * Clean, minimal CTA section. Deep Petrol background, Sinopia CTA.
 * No animated gradients, no floating rings, no parallax.
 */

import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BRAND } from '@/lib/theme';
import MotionSection from '@/components/MotionSection';

interface CTABandProps {
  headline?:  string;
  subline?:   string;
  showPhone?: boolean;
}

export default function CTABand({
  headline  = 'Ready to start?',
  subline   = 'Manhattan and Brooklyn locations. Insurance verified before your first visit.',
  showPhone = true,
}: CTABandProps) {
  return (
    <Box
      component="section"
      aria-label="Request appointment"
      sx={{
        py:              { xs: 8, md: 10 },
        backgroundColor: BRAND.deepPetrol,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <MotionSection>
          <Typography
            variant="h2"
            sx={{
              color:      BRAND.white,
              mb:         1.5,
              fontWeight: 800,
              fontSize:   { xs: '1.875rem', md: '2.5rem' },
              lineHeight: 1.1,
            }}
          >
            {headline}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color:      'rgba(255,255,255,0.7)',
              mb:         4,
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
                backgroundColor: BRAND.sinopia,
                color:           BRAND.white,
                fontWeight:      700,
                px:              4,
                py:              1.75,
                fontSize:        '1rem',
                borderRadius:    1,
                minWidth:        220,
                transition:      'background-color 0.2s ease, transform 0.2s ease',
                '&:hover': {
                  backgroundColor: BRAND.sinopiaHover,
                  transform:       'translateY(-2px)',
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
                  color:      'rgba(255,255,255,0.65)',
                  fontWeight: 500,
                  fontSize:   '0.9375rem',
                  px:         2,
                  transition: 'color 0.15s ease',
                  '&:hover': {
                    color:           BRAND.sinopia,
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Call or text 929-419-4643
              </Button>
            )}
          </Box>
        </MotionSection>
      </Container>
    </Box>
  );
}
