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
import { SECTION_IMAGES } from '@/lib/images';

const TRUST_ITEMS = [
  'Real One-on-One Treatment Every Visit',
  'Not a PT Mill',
  'Sports and Orthopedic Rehab Specialists',
  'Insurance Verified Before You Arrive',
];

export default function HeroSection() {
  return (
    <Box
      component="section"
      aria-label="InSync Physical Therapy hero"
      className="section-dark"
      sx={{
        position:   'relative',
        minHeight:  { xs: '92vh', md: '88vh' },
        display:    'flex',
        alignItems: 'center',
        overflow:   'hidden',
        // Pull hero up under the transparent nav (nav spacer is 64/72px)
        mt:         { xs: -8, md: -9 },
        pt:         { xs: 8, md: 9 },
      }}
    >
      {/* ── Gradient background ──────────────────────────────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset:    0,
          zIndex:   0,
          background: {
            xs: `linear-gradient(160deg, #001d22 0%, #003D59 55%, #002f45 100%)`,
            md: `linear-gradient(100deg, #001a1f 0%, #00262A 40%, #003D59 70%, transparent 100%)`,
          },
        }}
      />

      {/* ── Right-panel photo (desktop only) ────────────────────────────── */}
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
        <Image
          src={SECTION_IMAGES.hero}
          alt="Dr. Hassan performing physical therapy assessment in NYC clinic"
          fill
          priority
          sizes="46vw"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
        {/* Gradient fade — left edge blends into dark background */}
        <Box
          sx={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(to right, #00262A 0%, rgba(0,38,42,0.55) 30%, rgba(0,38,42,0.1) 70%, transparent 100%)',
          }}
        />
        {/* Top + bottom fade */}
        <Box
          sx={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(to bottom, #00262A 0%, transparent 12%, transparent 88%, #00262A 100%)',
          }}
        />
      </Box>

      {/* ── Decorative rings (subtle on desktop, visible on mobile) ─────── */}
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

      {/* ── Content ────────────────────────────────────────────────────── */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex:   1,
          py:       { xs: 8, md: 12 },
        }}
      >
        {/* Text constrained to left ~55% on desktop so photo shows */}
        <Box sx={{ maxWidth: { xs: '100%', md: '56%', lg: '54%' } }}>

          {/* Overline */}
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
            Brooklyn &amp; Bryant Park, NYC
          </Typography>

          {/* H1 */}
          <Typography
            component="h1"
            style={{ color: '#FFFFFF' }}
            sx={{
              fontWeight:    800,
              fontSize:      { xs: '2.25rem', sm: '2.875rem', md: '3.25rem', lg: '3.75rem' },
              lineHeight:    1.07,
              letterSpacing: '-0.03em',
              mb:            { xs: 2, md: 2.5 },
            }}
          >
            Physical Therapy for
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
              Active New Yorkers.
            </Box>
          </Typography>

          {/* Subheadline */}
          <Typography
            sx={{
              color:      'rgba(255,255,255,0.78)',
              fontSize:   { xs: '1.0625rem', md: '1.0625rem' },
              lineHeight: 1.65,
              mb:         4,
              maxWidth:   500,
            }}
          >
            Recover from injuries. Fix chronic pain. Get back to training.
            <Box component="span" sx={{ display: 'block', mt: 1 }}>
              Orthopedic rehab, sports injuries, and post-surgical recovery
              in Brooklyn and Bryant Park. Built for people who want to move again.
            </Box>
          </Typography>

          {/* Trust Checklist */}
          <Box
            component="ul"
            aria-label="Key credentials"
            sx={{
              listStyle: 'none',
              p:         0,
              m:         0,
              mb:        5,
              display:   'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr' },
              gap:       { xs: 1.25, md: 1.5 },
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
                  sx={{
                    color:      BRAND.neoBlue,
                    fontSize:   '1.05rem',
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
              sx={{
                backgroundColor: BRAND.neoBlue,
                color:           '#001820',
                fontWeight:      700,
                px:              { xs: 3, md: 4 },
                py:              1.875,
                fontSize:        '1rem',
                borderRadius:    1,
                textTransform:   'none',
                letterSpacing:   '0.01em',
                '&:hover': {
                  backgroundColor: '#0AAFCC',
                  transform:       'translateY(-2px)',
                  boxShadow:       '0 8px 28px rgba(14,197,230,0.4)',
                },
              }}
            >
              Book Your First Visit
            </Button>

            <Button
              component="a"
              href="tel:+19294194643"
              variant="outlined"
              size="large"
              startIcon={<PhoneIcon />}
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
                '&:hover': {
                  borderColor:     BRAND.neoBlue,
                  color:           BRAND.neoBlue,
                  backgroundColor: 'rgba(14,197,230,0.08)',
                },
              }}
            >
              929-419-4643
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* ── Scroll indicator ───────────────────────────────────────────── */}
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
