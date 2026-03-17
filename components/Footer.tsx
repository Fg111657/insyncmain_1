import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';
import BrandLogo from '@/components/BrandLogo';

const QUICK_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Request Appointment', href: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'HIPAA Notice', href: '/hipaa' },
  { label: 'Accessibility', href: '/accessibility' },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: BRAND.spaceNavy, color: BRAND.white, mt: 0 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 }, py: { xs: 7, md: 9 } }}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid item xs={12} md={5}>
            <BrandLogo width={180} />
            <Typography sx={{ mt: 3, maxWidth: 360, lineHeight: 1.75, color: 'rgba(255,255,255,0.72)' }}>
              InSync Physical Therapy helps active New Yorkers recover from injury, reduce pain, and return to movement with a clearer plan.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', mb: 2 }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <Typography component="a" href="tel:+19294194643" sx={{ color: 'rgba(255,255,255,0.88)' }}>
                929-419-4643
              </Typography>
              <Typography component="a" href="mailto:insyncpt.manager@gmail.com" sx={{ color: 'rgba(255,255,255,0.88)' }}>
                insyncpt.manager@gmail.com
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                1081 Gates Ave, Brooklyn, NY 11221
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                55 W 39th St, Suite 303, New York, NY 10018
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', mb: 2 }}>
              Navigation
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 1.2 }}>
              {QUICK_LINKS.map(({ label, href }) => (
                <Typography key={href} component={Link} href={href} sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  {label}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 1.5,
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} InSync Physical Therapy
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {LEGAL_LINKS.map(({ label, href }) => (
              <Typography key={href} component={Link} href={href} sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem' }}>
                {label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
