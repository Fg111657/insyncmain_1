import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BRAND } from '@/lib/theme';

const SERVICES_LINKS = [
  { label: 'Orthopedic Rehabilitation',          href: '/services#orthopedic'   },
  { label: 'Sports Injury Recovery',             href: '/services#sports'       },
  { label: 'Chronic Pain Treatment',             href: '/services#chronic-pain' },
  { label: 'Post-Surgical Rehabilitation',       href: '/services#post-surgical'},
  { label: 'Manual Therapy',                     href: '/services#manual'       },
  { label: 'Movement Analysis',                  href: '/services#movement'     },
  { label: 'Strength & Conditioning Transition', href: '/services#strength'     },
];

const QUICK_LINKS = [
  { label: 'Home',              href: '/'          },
  { label: 'About',             href: '/about'     },
  { label: 'Services',          href: '/services'  },
  { label: 'Locations',         href: '/locations' },
  { label: 'Insurance',         href: '/insurance' },
  { label: 'Request Appointment', href: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy',        href: '/privacy'     },
  { label: 'Terms of Service',      href: '/terms'       },
  { label: 'HIPAA Notice',          href: '/hipaa'       },
  { label: 'Accessibility',         href: '/accessibility'},
];

const linkSx = {
  color:          'rgba(255,255,255,0.65)',
  fontSize:       '0.875rem',
  lineHeight:     1.7,
  textDecoration: 'none',
  display:        'block',
  transition:     'color 0.2s',
  '&:hover': {
    color: BRAND.neoBlue,
  },
} as const;

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: BRAND.luxBlue, color: BRAND.white }}
    >
      {/* ── CTA Band ─────────────────────────────────────────────────── */}
      <Box
        sx={{
          backgroundColor: BRAND.spaceNavy,
          py:              { xs: 6, md: 8 },
          textAlign:       'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="p"
            sx={{
              fontFamily:    'var(--font-secondary), "Playfair Display", serif',
              fontStyle:     'italic',
              fontSize:      { xs: '1.25rem', md: '1.5rem' },
              color:         'rgba(255,255,255,0.7)',
              mb:            2,
              letterSpacing: '0.01em',
            }}
          >
            Ready to get moving again?
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color:         BRAND.white,
              mb:            1,
              fontSize:      { xs: '1.875rem', md: '2.5rem' },
              fontWeight:    800,
              lineHeight:    1.1,
            }}
          >
            Request Your Appointment Today
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color:     'rgba(255,255,255,0.65)',
              mb:        4,
              maxWidth:  480,
              mx:        'auto',
              lineHeight: 1.6,
            }}
          >
            Brooklyn and Bryant Park locations. Insurance verified before your first visit.
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
              sx={{
                backgroundColor: BRAND.neoBlue,
                color:           BRAND.white,
                fontWeight:      700,
                px:              4,
                py:              1.75,
                fontSize:        '1rem',
                '&:hover': {
                  backgroundColor: '#0AAFCC',
                  transform:       'translateY(-2px)',
                  boxShadow:       '0 6px 24px rgba(14,197,230,0.35)',
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
                borderColor: 'rgba(255,255,255,0.3)',
                color:       BRAND.white,
                fontWeight:  600,
                px:          3,
                py:          1.5,
                '&:hover': {
                  borderColor:     BRAND.neoBlue,
                  backgroundColor: 'rgba(14,197,230,0.1)',
                },
              }}
            >
              929-419-4643
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── Main Footer Content ───────────────────────────────────────── */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 5, md: 8 }}>

          {/* Brand + Contact Column */}
          <Grid item xs={12} md={4}>
            {/* Logo */}
            <Box sx={{ mb: 3 }}>
              <Typography
                component="span"
                sx={{
                  display:       'block',
                  fontWeight:    800,
                  fontSize:      '1.375rem',
                  color:         BRAND.white,
                  letterSpacing: '-0.02em',
                  lineHeight:    1,
                }}
              >
                InSync
              </Typography>
              <Typography
                component="span"
                sx={{
                  display:       'block',
                  fontSize:      '0.65rem',
                  fontWeight:    500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color:         'rgba(255,255,255,0.45)',
                  mt:            '3px',
                }}
              >
                Physical Therapy
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color:     'rgba(255,255,255,0.6)',
                lineHeight: 1.7,
                mb:        3,
                maxWidth:  300,
              }}
            >
              Orthopedic rehabilitation, sports injury recovery, and
              post-surgical care for active New Yorkers. Brooklyn and Bryant
              Park locations.
            </Typography>

            {/* Contact Details */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                <LocationOnIcon
                  sx={{ color: BRAND.neoBlue, fontSize: '1rem', mt: '2px', flexShrink: 0 }}
                />
                <Box>
                  <Typography
                    component="a"
                    href="https://maps.google.com/?q=1081+Gates+Ave+Brooklyn+NY+11221"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={linkSx}
                  >
                    1081 Gates Ave, Brooklyn, NY 11221
                  </Typography>
                  <Typography
                    component="a"
                    href="https://maps.google.com/?q=55+W+39th+St+New+York+NY+10018"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={linkSx}
                  >
                    55 W 39th St, Suite 303, NY 10018
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <PhoneIcon sx={{ color: BRAND.neoBlue, fontSize: '1rem', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href="tel:+19294194643"
                  sx={linkSx}
                >
                  929-419-4643
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <EmailIcon sx={{ color: BRAND.neoBlue, fontSize: '1rem', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href="mailto:insyncpt.manager@gmail.com"
                  sx={linkSx}
                >
                  insyncpt.manager@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Services Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="overline"
              sx={{
                color:         BRAND.neoBlue,
                fontWeight:    700,
                letterSpacing: '0.1em',
                fontSize:      '0.7rem',
                mb:            2,
                display:       'block',
              }}
            >
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
              {SERVICES_LINKS.map(({ label, href }) => (
                <Typography
                  key={href}
                  component={Link}
                  href={href}
                  sx={linkSx}
                >
                  {label}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="overline"
              sx={{
                color:         BRAND.neoBlue,
                fontWeight:    700,
                letterSpacing: '0.1em',
                fontSize:      '0.7rem',
                mb:            2,
                display:       'block',
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
              {QUICK_LINKS.map(({ label, href }) => (
                <Typography
                  key={href}
                  component={Link}
                  href={href}
                  sx={linkSx}
                >
                  {label}
                </Typography>
              ))}
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography
                variant="overline"
                sx={{
                  color:         BRAND.neoBlue,
                  fontWeight:    700,
                  letterSpacing: '0.1em',
                  fontSize:      '0.7rem',
                  mb:            2,
                  display:       'block',
                }}
              >
                Locations
              </Typography>
              <Typography
                component="a"
                href="https://maps.google.com/?q=1081+Gates+Ave+Brooklyn+NY+11221"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ...linkSx, fontWeight: 500 }}
              >
                Brooklyn
              </Typography>
              <Typography
                component="a"
                href="https://maps.google.com/?q=55+W+39th+St+New+York+NY+10018"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ...linkSx, fontWeight: 500 }}
              >
                Bryant Park / Midtown
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ── Bottom Bar ──────────────────────────────────────────────── */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
      <Container
        maxWidth="lg"
        sx={{
          py:             2.5,
          px:             { xs: 3, md: 4 },
          display:        'flex',
          flexDirection:  { xs: 'column', sm: 'row' },
          alignItems:     'center',
          justifyContent: 'space-between',
          gap:            1,
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}
        >
          © {new Date().getFullYear()} InSync Physical Therapy. All rights reserved.
        </Typography>

        {/* Legal Links */}
        <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap', justifyContent: 'center' }}>
          {LEGAL_LINKS.map(({ label, href }) => (
            <Typography
              key={href}
              component={Link}
              href={href}
              sx={{
                color:          'rgba(255,255,255,0.35)',
                fontSize:       '0.8rem',
                textDecoration: 'none',
                '&:hover': { color: 'rgba(255,255,255,0.65)' },
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>

        {/* Disclaimer */}
        <Typography
          variant="body2"
          sx={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem', textAlign: 'center' }}
        >
          Not a substitute for professional medical advice.
        </Typography>
      </Container>
    </Box>
  );
}
