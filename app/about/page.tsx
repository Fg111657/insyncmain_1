import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TeamSection from '@/components/TeamSection';
import CTABand from '@/components/CTABand';
import { BRAND } from '@/lib/theme';
import { PHYSICIAN_SCHEMA } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About InSync Physical Therapy & Fitness — Dr. Hassan & Team',
  description:
    'InSync Physical Therapy & Fitness is a one-on-one physical therapy practice in Brooklyn and Manhattan founded by Dr. Hassan, DPT. Meet our team.',
  alternates: { canonical: 'https://insync-pt.com/about' },
  openGraph: {
    title:       'About InSync Physical Therapy & Fitness | Dr. Hassan, DPT — NYC',
    description: 'One-on-one PT from a Doctor of Physical Therapy with 9+ years of experience in Brooklyn and Midtown Manhattan.',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PHYSICIAN_SCHEMA) }}
      />

      {/* ── Page Header ───────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="About InSync Physical Therapy"
        className="section-navy"
        sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 10 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 640 }}>
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
              Meet the Team
            </Typography>
            <Typography
              sx={{
                color:      'rgba(255,255,255,0.72)',
                lineHeight: 1.75,
                fontSize:   { xs: '1rem', md: '1.0625rem' },
                maxWidth:   520,
              }}
            >
              Every patient works directly with a licensed clinician — from
              evaluation through discharge and beyond. No aides, no handoffs,
              no rotating staff.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Team — Headshots & Bios ───────────────────────────── */}
      <TeamSection compact={false} />

      {/* ── CTA ───────────────────────────────────────────────── */}
      <CTABand
        headline="Ready to Get Started?"
        subline="Request an appointment and our team will be in touch within one business day."
        variant="dark"
      />
    </>
  );
}
