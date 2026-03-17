import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BRAND } from '@/lib/theme';
import { SECTION_IMAGES, BLUR_PLACEHOLDER } from '@/lib/images';

const HIGHLIGHTS = [
  'One-on-one treatment',
  'Insurance verified before scheduling',
  'Brooklyn and Bryant Park locations',
];

const STATS = [
  { value: '9+ years', label: 'Clinical experience in NYC' },
  { value: '1-on-1', label: 'Direct treatment every visit' },
  { value: '2 locations', label: 'Brooklyn and Bryant Park' },
];

export default function HeroSection() {
  return (
    <Box
      component="section"
      aria-label="InSync Physical Therapy hero"
      sx={{
        background: `linear-gradient(180deg, ${BRAND.offWhite} 0%, ${BRAND.white} 100%)`,
        borderBottom: `1px solid ${BRAND.gray200}`,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 }, py: { xs: 7, md: 10 } }}>
        <Grid container spacing={{ xs: 5, md: 7 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 560 }}>
              <Box component="p" className="eyebrow" sx={{ mb: 2.5 }}>
                InSync Physical Therapy
              </Box>

              <Typography
                component="h1"
                sx={{
                  color: BRAND.spaceNavy,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  lineHeight: 1.02,
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  maxWidth: 620,
                }}
              >
                Clear, modern physical therapy for New Yorkers who want to move well again.
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  color: BRAND.gray700,
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.75,
                  maxWidth: 520,
                }}
              >
                Orthopedic rehab, sports injury recovery, chronic pain care, and post-surgical treatment in
                Brooklyn and Bryant Park. Built to feel focused, personal, and easy to understand.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
                <Button component={Link} href="/contact" variant="contained" endIcon={<ArrowForwardIcon />}>
                  Request Appointment
                </Button>
                <Button
                  component="a"
                  href="tel:+19294194643"
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneIcon />}
                >
                  929-419-4643
                </Button>
              </Stack>

              <Box
                component="ul"
                sx={{
                  mt: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.25,
                  listStyle: 'none',
                  p: 0,
                }}
              >
                {HIGHLIGHTS.map((item) => (
                  <Box
                    key={item}
                    component="li"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.25,
                      color: BRAND.spaceNavy,
                      fontSize: '0.95rem',
                    }}
                  >
                    <Box
                      aria-hidden="true"
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: BRAND.spaceNavy,
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                aspectRatio: { xs: '4 / 4.5', md: '4 / 4.8' },
                borderRadius: 6,
                overflow: 'hidden',
                backgroundColor: BRAND.sand,
                boxShadow: '0 24px 60px rgba(0, 38, 42, 0.12)',
              }}
            >
              <Image
                src={SECTION_IMAGES.hero}
                alt="Dr. Hassan performing a shoulder mobility assessment"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 'auto 20px 20px 20px',
                  backgroundColor: 'rgba(255,255,255,0.92)',
                  border: `1px solid rgba(0,61,89,0.08)`,
                  borderRadius: 4,
                  p: 2.5,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Typography sx={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: BRAND.gray500 }}>
                  What to expect
                </Typography>
                <Typography sx={{ mt: 1, fontWeight: 700, fontSize: '1.05rem', color: BRAND.spaceNavy }}>
                  Start with a request, then we confirm the right next step.
                </Typography>
                <Typography sx={{ mt: 0.75, fontSize: '0.92rem', lineHeight: 1.6, color: BRAND.gray700 }}>
                  No instant booking confusion. The team reviews your details, checks insurance, and follows up directly.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            pt: { xs: 3, md: 4 },
            borderTop: `1px solid ${BRAND.gray200}`,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 2,
          }}
        >
          {STATS.map(({ value, label }) => (
            <Box
              key={label}
              sx={{
                backgroundColor: BRAND.white,
                border: `1px solid ${BRAND.gray200}`,
                borderRadius: 4,
                px: 3,
                py: 2.5,
              }}
            >
              <Typography sx={{ fontSize: '1.35rem', fontWeight: 800, color: BRAND.spaceNavy }}>
                {value}
              </Typography>
              <Typography sx={{ mt: 0.5, fontSize: '0.9rem', color: BRAND.gray700 }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
