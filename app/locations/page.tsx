import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LocationsSection from '@/components/LocationsSection';
import CTABand from '@/components/CTABand';
import FAQSection from '@/components/FAQSection';
import { BRAND } from '@/lib/theme';
import { LOCATION_BROOKLYN_SCHEMA, LOCATION_BRYANT_PARK_SCHEMA } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Physical Therapy Locations — Brooklyn & Bryant Park NYC',
  description:
    'InSync Physical Therapy has two NYC locations: 1081 Gates Ave in Brooklyn and 55 W 39th St in Bryant Park, Midtown Manhattan. Accepting new patients. Insurance verified before your first visit.',
  alternates: { canonical: 'https://insync-pt.com/locations' },
  openGraph: {
    title:       'Physical Therapy NYC Locations | InSync Physical Therapy',
    description: 'Brooklyn and Bryant Park physical therapy locations — accessible from across New York City.',
  },
};

const LOCATION_FAQS = [
  {
    q: 'Which neighborhoods does the Brooklyn location serve?',
    a: 'Our Brooklyn location at 1081 Gates Ave serves Bushwick, Bed-Stuy, Ridgewood, Crown Heights, Williamsburg, and surrounding neighborhoods. It is accessible via the A and C trains at Gates Ave and Broadway.',
  },
  {
    q: 'Which neighborhoods does the Bryant Park location serve?',
    a: 'Our Bryant Park / Midtown location at 55 W 39th St serves Midtown Manhattan, Hell\'s Kitchen, Chelsea, Murray Hill, Koreatown, and the surrounding area. The B, D, F, and M trains stop directly at 42nd St–Bryant Park.',
  },
  {
    q: 'Do I need to choose a location when requesting an appointment?',
    a: 'You can specify a preferred location on the appointment request form, but it is not required. If either location works for you, just let us know and we will schedule you at whichever has the earliest available appointment.',
  },
  {
    q: 'Are both locations accepting new patients?',
    a: 'Yes. Both the Brooklyn and Bryant Park locations are currently accepting new patients. Submit a request form and our team will contact you to confirm your appointment.',
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* ── JSON-LD: Location schemas ────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([LOCATION_BROOKLYN_SCHEMA, LOCATION_BRYANT_PARK_SCHEMA]),
        }}
      />

      {/* ── Page Hero ───────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          backgroundColor: BRAND.spaceNavy,
          py:              { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography
              component="p"
              sx={{
                fontSize:      '0.72rem',
                fontWeight:    700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:         BRAND.neoBlue,
                mb:            2,
              }}
            >
              Our Locations
            </Typography>
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
              Physical Therapy in Brooklyn and Bryant Park
            </Typography>
            <Typography
              variant="body1"
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

      {/* ── Locations Section (full) ─────────────────────────────── */}
      <LocationsSection compact={false} />

      {/* ── Location-specific FAQ ────────────────────────────────── */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: BRAND.white }}>
        <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 } }}>
          <Typography
            component="p"
            className="overline"
            sx={{ mb: 2 }}
          >
            Location Questions
          </Typography>
          <Typography
            variant="h2"
            sx={{ mb: 5, fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            Common Questions About Our Locations
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {LOCATION_FAQS.map(({ q, a }) => (
              <Box
                key={q}
                sx={{
                  border:       `1px solid ${BRAND.gray200}`,
                  borderRadius: 3,
                  p:            { xs: 3, md: 3.5 },
                  backgroundColor: BRAND.white,
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize:   '1rem',
                    color:      BRAND.spaceNavy,
                    mb:         1.25,
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: BRAND.gray700, lineHeight: 1.7, fontSize: '0.9375rem' }}
                >
                  {a}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <CTABand
        headline="Book at the Location Nearest You"
        subline="Both locations are accepting new patients. Insurance verified before your first visit."
        variant="dark"
      />
    </>
  );
}
