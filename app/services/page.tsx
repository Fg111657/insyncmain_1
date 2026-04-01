import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ServicesGrid from '@/components/ServicesGrid';
import CTABand from '@/components/CTABand';
import { BRAND } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Physical Therapy Services — Manhattan & Brooklyn | InSync PT',
  description:
    'Back & neck pain, sports injury, post-surgery rehab, pelvic health, orthopedic rehabilitation, and strength & performance. One-on-one care in NYC.',
  alternates: { canonical: 'https://insync-pt.com/services' },
  openGraph: {
    title:       'Services | InSync Physical Therapy & Fitness',
    description: 'Expert physical therapy services in Manhattan and Brooklyn.',
  },
};

export default function ServicesPage() {
  return (
    <>
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
          <Box sx={{ maxWidth: 560 }}>
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
              What we treat
            </Typography>
            <Typography
              sx={{
                color:      BRAND.gray500,
                lineHeight: 1.6,
                fontSize:   '1.0625rem',
              }}
            >
              Every treatment plan is built around your specific injury, goals, and activity level.
            </Typography>
          </Box>
        </Container>
      </Box>

      <ServicesGrid hideHeader />

      <CTABand
        headline="Book your evaluation."
        subline="Insurance verified before your appointment. No referral needed."
      />
    </>
  );
}
