import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TeamSection from '@/components/TeamSection';
import CTABand from '@/components/CTABand';
import { BRAND } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'About Us — InSync Physical Therapy & Fitness NYC',
  description:
    'Meet the InSync team: Dr. Hassan Elgaty (DPT), Piero Alessi (NASM), and TJ Mirasol (PTA). One-on-one physical therapy in Manhattan and Brooklyn.',
  alternates: { canonical: 'https://insync-pt.com/about' },
  openGraph: {
    title:       'About | InSync Physical Therapy & Fitness',
    description: 'Our team of physical therapy and fitness specialists in NYC.',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <Box
        component="section"
        sx={{
          pt:              { xs: 6, md: 10 },
          pb:              { xs: 4, md: 6 },
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
                fontSize:   { xs: '2.25rem', md: '3rem' },
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Our team
            </Typography>
            <Typography
              sx={{
                color:      BRAND.gray500,
                lineHeight: 1.6,
                fontSize:   '1.0625rem',
              }}
            >
              One-on-one care from clinicians who understand the demands of active life.
            </Typography>
          </Box>
        </Container>
      </Box>

      <TeamSection hideHeader />

      <CTABand
        headline="Ready to start?"
        subline="Manhattan and Brooklyn locations. Insurance verified before your first visit."
      />
    </>
  );
}
