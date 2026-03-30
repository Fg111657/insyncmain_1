import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LocationsSection from '@/components/LocationsSection';
import CTABand from '@/components/CTABand';
import { BRAND } from '@/lib/theme';
import { LOCATION_BROOKLYN_SCHEMA, LOCATION_BRYANT_PARK_SCHEMA } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Physical Therapy Locations — Brooklyn & Manhattan NYC',
  description:
    'InSync Physical Therapy & Fitness has two NYC locations: 1081 Gates Ave in Brooklyn and 55 W 39th St in Bryant Park, Midtown Manhattan. Accepting new patients.',
  alternates: { canonical: 'https://insync-pt.com/locations' },
  openGraph: {
    title:       'Physical Therapy NYC Locations | InSync Physical Therapy & Fitness',
    description: 'Brooklyn and Manhattan physical therapy locations — accessible from across New York City.',
  },
};

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([LOCATION_BROOKLYN_SCHEMA, LOCATION_BRYANT_PARK_SCHEMA]),
        }}
      />

      {/* ── Page Header ───────────────────────────────────────── */}
      <Box
        component="section"
        className="section-navy"
        sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 10 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography
              variant="h1"
              sx={{
                color:      BRAND.white,
                mb:         2.5,
                fontSize:   { xs: '2.25rem', md: '3rem' },
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Our Locations
            </Typography>
            <Typography
              sx={{
                color:      'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                fontSize:   '1.0625rem',
                maxWidth:   500,
              }}
            >
              Two convenient NYC locations with the same standard of care.
              Insurance verified before your first appointment.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Locations Detail ──────────────────────────────────── */}
      <LocationsSection compact={false} />

      {/* ── CTA ───────────────────────────────────────────────── */}
      <CTABand
        headline="Book at the Location Nearest You"
        subline="Both locations are accepting new patients. Insurance verified before your first visit."
        variant="dark"
      />
    </>
  );
}
