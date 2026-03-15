import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { BRAND } from '@/lib/theme';

const TRUST_ITEMS = [
  'Doctor of Physical Therapy',
  '9+ Years of Experience',
  'One-on-One Care',
  'Insurance Accepted',
];

export default function HeroSection() {
  return (
    <Box
      component="section"
      aria-label="InSync Physical Therapy — Hero"
      sx={{
        position:        'relative',
        minHeight:       { xs: '100svh', md: '95vh' },
        display:         'flex',
        alignItems:      'center',
        overflow:        'hidden',
        mt:              { xs: -8, md: -9 }, // pull up under transparent nav
        pt:              { xs: 8, md: 9 },
        backgroundColor: BRAND.luxBlue,
      }}
    >
      {/* ── Background Image ─────────────────────────────────────────── */}
      <Box
        sx={{
          position: 'absolute',
          inset:    0,
          zIndex:   0,
        }}
      >
        <Image
          src="/assets/hassan-pt/photos/provider-hassan/dr-hassan-seated-cervical-mobility-assessment-male-patient-03.jpg"
          alt="Dr. Hassan performing cervical mobility assessment at InSync Physical Therapy"
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{
            objectFit:      'cover',
            objectPosition: 'center top',
          }}
        />
        {/* Gradient overlay — heavy on left, lighter on right */}
        <Box
          aria-hidden="true"
          sx={{
            position:   'absolute',
            inset:      0,
            background: {
              xs: 'linear-gradient(to bottom, rgba(0,38,42,0.92) 0%, rgba(0,38,42,0.82) 60%, rgba(0,38,42,0.75) 100%)',
              md: 'linear-gradient(105deg, rgba(0,38,42,0.95) 0%, rgba(0,61,89,0.82) 45%, rgba(0,61,89,0.3) 100%)',
            },
          }}
        />
      </Box>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <Container
        maxWidth="lg"
        sx={{
          position:        'relative',
          zIndex:          1,
          px:              { xs: 3, md: 4 },
          py:              { xs: 8, md: 10 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '600px', lg: '640px' },
          }}
        >
          {/* Overline */}
          <Typography
            component="p"
            sx={{
              display:       'inline-flex',
              alignItems:    'center',
              gap:           0.75,
              fontSize:      '0.72rem',
              fontWeight:    700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         BRAND.neoBlue,
              mb:            2.5,
            }}
          >
            <Box
              component="span"
              aria-hidden="true"
              sx={{
                display:       'inline-block',
                width:         20,
                height:        2,
                backgroundColor: BRAND.neoBlue,
                borderRadius:  1,
                flexShrink:    0,
              }}
            />
            Physical Therapy in Brooklyn &amp; Bryant Park, NYC
          </Typography>

          {/* H1 */}
          <Typography
            component="h1"
            sx={{
              fontWeight:    800,
              fontSize:      { xs: '2.25rem', sm: '3rem', md: '3.5rem', lg: '3.875rem' },
              lineHeight:    1.08,
              letterSpacing: '-0.025em',
              color:         BRAND.white,
              mb:            { xs: 2.5, md: 3 },
            }}
          >
            Physical Therapy in NYC
            <Box
              component="span"
              sx={{
                display:      'block',
                color:        BRAND.neoBlue,
                fontStyle:    'italic',
                fontFamily:   'var(--font-secondary), "Playfair Display", serif',
                fontSize:     { xs: '2rem', sm: '2.6rem', md: '3rem', lg: '3.375rem' },
                mt:           0.5,
              }}
            >
              That Gets You Moving Again
            </Box>
          </Typography>

          {/* Subheadline */}
          <Typography
            variant="body1"
            sx={{
              color:     'rgba(255,255,255,0.80)',
              fontSize:  { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.65,
              mb:        4,
              maxWidth:   520,
            }}
          >
            Orthopedic rehabilitation, sports injury recovery, chronic pain
            treatment, and post-surgical care — with one-on-one attention from
            a Doctor of Physical Therapy.
          </Typography>

          {/* Trust Checklist */}
          <Box
            component="ul"
            aria-label="Key credentials"
            sx={{
              listStyle: 'none',
              p:         0,
              m:         0,
              mb:        4.5,
              display:   'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap:       1,
            }}
          >
            {TRUST_ITEMS.map((item) => (
              <Box
                key={item}
                component="li"
                sx={{
                  display:    'flex',
                  alignItems: 'center',
                  gap:        1,
                  color:      'rgba(255,255,255,0.85)',
                  fontSize:   '0.9rem',
                  fontWeight: 500,
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{
                    color:     BRAND.neoBlue,
                    fontSize:  '1rem',
                    flexShrink: 0,
                  }}
                />
                {item}
              </Box>
            ))}
          </Box>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'stretch', sm: 'center' }}
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
                px:              { xs: 3, md: 4 },
                py:              1.875,
                fontSize:        '1rem',
                borderRadius:    3,
                '&:hover': {
                  backgroundColor: '#0AAFCC',
                  transform:       'translateY(-2px)',
                  boxShadow:       '0 8px 28px rgba(14,197,230,0.35)',
                },
              }}
            >
              Request Appointment
            </Button>

            <Button
              component="a"
              href="tel:+19294194643"
              variant="outlined"
              size="large"
              startIcon={<PhoneIcon />}
              sx={{
                borderColor:  'rgba(255,255,255,0.35)',
                color:        BRAND.white,
                fontWeight:   600,
                px:           { xs: 3, md: 3.5 },
                py:           1.75,
                fontSize:     '0.9375rem',
                borderRadius: 3,
                '&:hover': {
                  borderColor:     BRAND.neoBlue,
                  backgroundColor: 'rgba(14,197,230,0.1)',
                },
              }}
            >
              929-419-4643
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* ── Scroll Indicator ─────────────────────────────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          position:       'absolute',
          bottom:         28,
          left:           '50%',
          transform:      'translateX(-50%)',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          gap:            0.5,
          zIndex:         1,
          opacity:        0.5,
        }}
      >
        <Box
          sx={{
            width:        1.5,
            height:       36,
            borderRadius: 4,
            background:   `linear-gradient(to bottom, transparent, ${BRAND.neoBlue})`,
            animation:    'scrollPulse 2s ease-in-out infinite',
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
