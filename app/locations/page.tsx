import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LocationsSection from '@/components/LocationsSection';
import CTABand from '@/components/CTABand';
import { BRAND } from '@/lib/theme';
import { LOCATION_BROOKLYN_SCHEMA, LOCATION_BRYANT_PARK_SCHEMA } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Physical Therapy Locations — Manhattan & Brooklyn NYC',
  description:
    'InSync Physical Therapy has two NYC locations: 55 W 39th St near Bryant Park in Manhattan and 1081 Gates Ave in Brooklyn. Insurance verified upfront.',
  alternates: { canonical: 'https://insync-pt.com/locations' },
  openGraph: {
    title:       'Locations | InSync Physical Therapy & Fitness',
    description: 'Manhattan and Brooklyn. Two clinics, one standard of care.',
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

      {/* Page Header */}
      <Box
        component="section"
        sx={{
          pt:              { xs: 5, md: 7 },
          pb:              { xs: 3, md: 4 },
          backgroundColor: BRAND.white,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 540 }}>
            <Typography
              variant="h1"
              sx={{
                color:      BRAND.deepPetrol,
                mb:         1.5,
                fontSize:   { xs: '2rem', md: '2.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Find your clinic
            </Typography>
            <Typography
              sx={{
                color:      BRAND.gray500,
                lineHeight: 1.6,
                fontSize:   '1.0625rem',
              }}
            >
              Manhattan and Brooklyn. Same therapists, same one-on-one model.
            </Typography>
          </Box>
        </Container>
      </Box>

      <LocationsSection hideHeader />

      <CTABand
        headline="Book your evaluation."
        subline="Insurance verified before your appointment. No referral needed."
      />
    </>
  );
}
