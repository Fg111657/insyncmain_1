import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import ServicesGrid from '@/components/ServicesGrid';
import TechnologySection from '@/components/TechnologySection';
import FAQSection from '@/components/FAQSection';
import CTABand from '@/components/CTABand';
import ConditionsCarousel from '@/components/ConditionsCarousel';
import { BRAND } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Physical Therapy Services NYC — Orthopedic, Sports & Post-Surgical Rehab',
  description:
    'Orthopedic rehabilitation, sports injury recovery, chronic pain treatment, post-surgical rehab, manual therapy, movement analysis, and strength transition. InSync Physical Therapy — Brooklyn and Bryant Park, NYC.',
  alternates: { canonical: 'https://insync-pt.com/services' },
  openGraph: {
    title:       'Physical Therapy Services NYC | InSync Physical Therapy',
    description: 'Evidence-based PT services for orthopedic injuries, sports recovery, chronic pain, and post-surgical rehab in Brooklyn and Bryant Park.',
  },
};


export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ──────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          position:        'relative',
          backgroundColor: BRAND.spaceNavy,
          py:              { xs: 10, md: 14 },
          overflow:        'hidden',
        }}
      >
        {/* Background treatment image */}
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/assets/hassan-pt/photos/provider-hassan/dr-hassan-prone-upper-back-manual-therapy-female-patient-06.jpg"
            alt="Physical therapy treatment at InSync"
            fill
            priority
            quality={80}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.2 }}
          />
        </Box>

        <Container
          maxWidth="lg"
          sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 4 } }}
        >
          <Box sx={{ maxWidth: 680 }}>
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
              Physical Therapy Services
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
              Specialized Care for Every Injury and Goal
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color:      'rgba(255,255,255,0.7)',
                maxWidth:   580,
                lineHeight: 1.7,
                fontSize:   { xs: '1rem', md: '1.0625rem' },
              }}
            >
              Physical therapy in NYC for orthopedic rehab, sports injury
              recovery, chronic pain treatment, and return-to-performance care.
              Every treatment plan is built around your specific injury,
              activity level, and goals — not a generic protocol.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── All Services ───────────────────────────────────────────── */}
      <ServicesGrid showCTA={false} />

      {/* ── Conditions Treated — SEO layer ─────────────────────────── */}
      <Box
        component="section"
        aria-label="Conditions treated"
        sx={{ py: { xs: 10, md: 12 }, backgroundColor: BRAND.white }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display:    'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
              gap:        { xs: 5, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography component="p" className="overline" sx={{ mb: 2 }}>
                Conditions Treated
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '1.875rem', md: '2.25rem' }, mb: 2 }}
              >
                If It Hurts, We Can Help
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: BRAND.gray500, lineHeight: 1.7 }}
              >
                We treat orthopedic and musculoskeletal conditions across all
                body regions. Not sure if your condition qualifies? Contact us —
                if we can help, we will tell you directly.
              </Typography>
            </Box>

            <Box>
              <ConditionsCarousel onLight />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Technology Section ─────────────────────────────────────── */}
      <TechnologySection />

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <FAQSection maxItems={6} />

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <CTABand
        headline="Not Sure Which Service Is Right for You?"
        subline="Request an appointment and we'll evaluate your condition and build a plan that fits your goals."
        variant="navy"
      />
    </>
  );
}
