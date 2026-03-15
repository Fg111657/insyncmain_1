import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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
  { label: 'Home',               href: '/'          },
  { label: 'About',              href: '/about'     },
  { label: 'Services',           href: '/services'  },
  { label: 'Locations',          href: '/locations' },
  { label: 'Insurance',          href: '/insurance' },
  { label: 'Request Appointment', href: '/contact'  },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy',   href: '/privacy'      },
  { label: 'Terms of Service', href: '/terms'        },
  { label: 'HIPAA Notice',     href: '/hipaa'        },
  { label: 'Accessibility',    href: '/accessibility' },
];

const linkSx = {
  color:          'rgba(255,255,255,0.6)',
  fontSize:       '0.875rem',
  lineHeight:     1.85,
  textDecoration: 'none',
  display:        'block',
  transition:     'color 0.2s',
  '&:hover': {
    color: BRAND.neoBlue,
  },
} as const;

const colHeadingSx = {
  fontSize:      '0.68rem',
  fontWeight:    700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  color:         BRAND.neoBlue,
  mb:            2,
  display:       'block',
};

export default function Footer() {
  return (
    <Box
      component="footer"
      className="section-dark"
    >
      {/* ── Main Footer Content ────────────────────────────────────────── */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={{ xs: 5, md: 6 }}>

          {/* ── Brand + Contact Column ─────────────────────── */}
          <Grid item xs={12} md={4}>
            {/* Logo wordmark */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0, mb: 3 }}>
              <Box
                sx={{
                  width:           3,
                  height:          30,
                  backgroundColor: BRAND.neoBlue,
                  borderRadius:    2,
                  mr:              1.5,
                  flexShrink:      0,
                }}
              />
              <Box>
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
                    fontSize:      '0.56rem',
                    fontWeight:    600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color:         'rgba(255,255,255,0.4)',
                    mt:            '3px',
                  }}
                >
                  Physical Therapy
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color:     'rgba(255,255,255,0.55)',
                lineHeight: 1.75,
                mb:        3.5,
                maxWidth:  300,
              }}
            >
              Orthopedic rehabilitation, sports injury recovery, and
              post-surgical care for active New Yorkers. Brooklyn and Bryant
              Park locations.
            </Typography>

            {/* Contact Details */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                <LocationOnIcon
                  sx={{ color: BRAND.neoBlue, fontSize: '1rem', mt: '3px', flexShrink: 0 }}
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
                <Typography component="a" href="tel:+19294194643" sx={linkSx}>
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

          {/* ── Services Column ────────────────────────────── */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography component="span" sx={colHeadingSx}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {SERVICES_LINKS.map(({ label, href }) => (
                <Typography key={href} component={Link} href={href} sx={linkSx}>
                  {label}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* ── Quick Links + Locations Column ────────────── */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography component="span" sx={colHeadingSx}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
              {QUICK_LINKS.map(({ label, href }) => (
                <Typography key={href} component={Link} href={href} sx={linkSx}>
                  {label}
                </Typography>
              ))}
            </Box>

            <Typography component="span" sx={colHeadingSx}>
              Locations
            </Typography>
            <Typography
              component="a"
              href="https://maps.google.com/?q=1081+Gates+Ave+Brooklyn+NY+11221"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ...linkSx, fontWeight: 500 }}
            >
              Brooklyn: 1081 Gates Ave
            </Typography>
            <Typography
              component="a"
              href="https://maps.google.com/?q=55+W+39th+St+New+York+NY+10018"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ...linkSx, fontWeight: 500 }}
            >
              Bryant Park: 55 W 39th St
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* ── Bottom Bar ──────────────────────────────────────────────────── */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)' }} />
      <Container
        maxWidth="lg"
        sx={{
          py:             2.5,
          display:        'flex',
          flexDirection:  { xs: 'column', sm: 'row' },
          alignItems:     { sm: 'center' },
          justifyContent: 'space-between',
          gap:            1.5,
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}
        >
          © {new Date().getFullYear()} InSync Physical Therapy. All rights reserved.
        </Typography>

        {/* Legal Links */}
        <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap', justifyContent: { xs: 'flex-start', sm: 'center' } }}>
          {LEGAL_LINKS.map(({ label, href }) => (
            <Typography
              key={href}
              component={Link}
              href={href}
              sx={{
                color:          'rgba(255,255,255,0.3)',
                fontSize:       '0.8rem',
                textDecoration: 'none',
                '&:hover': { color: 'rgba(255,255,255,0.6)' },
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>

        <Typography
          variant="body2"
          sx={{
            color:     'rgba(255,255,255,0.22)',
            fontSize:  '0.72rem',
            textAlign: { xs: 'left', sm: 'right' },
          }}
        >
          Not a substitute for professional medical advice.
        </Typography>
      </Container>
    </Box>
  );
}
