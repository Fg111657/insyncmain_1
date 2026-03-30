import type { Metadata } from 'next';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ServicesGrid from '@/components/ServicesGrid';
import CTABand from '@/components/CTABand';
import { BRAND } from '@/lib/theme';
import { SERVICES_PAGE_SCHEMA } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Physical Therapy Services NYC — Orthopedic, Sports & Post-Surgical Rehab',
  description:
    'Orthopedic rehabilitation, sports injury recovery, chronic pain treatment, post-surgical rehab, manual therapy, movement analysis, and strength & conditioning. One-on-one PT in Brooklyn and Manhattan, NYC.',
  alternates: { canonical: 'https://insync-pt.com/services' },
  openGraph: {
    title:       'Physical Therapy Services NYC | InSync Physical Therapy & Fitness',
    description: 'Evidence-based, one-on-one PT for orthopedic injuries, sports recovery, chronic pain, and post-surgical rehab in Brooklyn and Manhattan.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_PAGE_SCHEMA) }}
      />

      {/* ── Page Header ─────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Services overview"
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
                fontSize:   { xs: '2.25rem', md: '3.25rem' },
                fontWeight: 800,
                lineHeight: 1.05,
              }}
            >
              Our Services
            </Typography>
            <Typography
              sx={{
                color:      'rgba(255,255,255,0.72)',
                maxWidth:   540,
                lineHeight: 1.75,
                fontSize:   { xs: '1rem', md: '1.0625rem' },
                mb:         3.5,
              }}
            >
              One-on-one physical therapy for orthopedic rehab, sports injury recovery,
              chronic pain, and return-to-performance care. Every plan is built around
              your specific injury, activity level, and goals.
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              data-analytics="services-hero-cta"
              sx={{
                backgroundColor: BRAND.neoBlue,
                color:           BRAND.spaceNavy,
                fontWeight:      700,
                px:              3.5,
                py:              1.5,
                fontSize:        '0.9375rem',
                '&:hover': { backgroundColor: BRAND.neoBlueHover },
              }}
            >
              Book Your Evaluation
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── All Services ────────────────────────────────────────── */}
      <ServicesGrid showCTA={false} />

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <CTABand
        headline="Not Sure Which Service Is Right for You?"
        subline="Request an appointment and we'll evaluate your condition and build a plan that fits your goals."
        variant="navy"
      />
    </>
  );
}
