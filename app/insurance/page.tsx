import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InsuranceSection from '@/components/InsuranceSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import CTABand from '@/components/CTABand';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { BRAND } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Insurance & Reviews — InSync Physical Therapy NYC',
  description:
    'InSync Physical Therapy accepts Aetna, Blue Cross Blue Shield, Cigna, United Healthcare, Medicare, Fidelis, HIP, and NYC EPP. We verify your benefits before scheduling. Brooklyn and Manhattan, NYC.',
  alternates: { canonical: 'https://insync-pt.com/insurance' },
  openGraph: {
    title:       'Accepted Insurance | InSync Physical Therapy NYC',
    description: 'We accept most major insurance plans. Benefits verified before your first appointment.',
  },
};

const PROCESS_STEPS = [
  {
    step:  '01',
    title: 'You Submit a Request',
    body:  'Fill out our short appointment request form with your insurance information and primary concern.',
  },
  {
    step:  '02',
    title: 'We Verify Your Benefits',
    body:  'Our team contacts your insurance carrier to verify your physical therapy benefits and confirm your coverage before scheduling.',
  },
  {
    step:  '03',
    title: 'We Contact You',
    body:  'A member of our team calls or emails you to confirm your appointment, location preference, and any cost questions.',
  },
  {
    step:  '04',
    title: 'Your Evaluation',
    body:  'You come in for your initial 60-minute evaluation. No surprises, no high-pressure upsells — just a thorough clinical assessment.',
  },
];

const WHAT_TO_KNOW = [
  'We accept most major in-network insurance plans',
  'Benefits are verified before your first visit',
  'We handle the insurance paperwork',
  'You may be responsible for copays or deductibles per your plan',
  'Out-of-network options available — contact us for details',
  'No referral required for the first 30 days in NY State',
];

export default function InsurancePage() {
  return (
    <>
      {/* ── Page Hero ──────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          backgroundColor: BRAND.spaceNavy,
          py:              { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 620 }}>
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
              Insurance & Reviews
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
              We Accept Your Insurance. We Verify It Before You Come In.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color:      'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                fontSize:   '1.0625rem',
                maxWidth:   520,
              }}
            >
              Cost and coverage are major concerns for most patients. We take
              them seriously — which is why we verify your benefits in advance
              so there are no surprises at your first appointment.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Insurance Logos ─────────────────────────────────────── */}
      <InsuranceSection compact={false} />

      {/* ── What to Know ────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: BRAND.spaceNavy }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid item xs={12} md={6}>
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
                What to Know
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color:      BRAND.white,
                  mb:         2.5,
                  fontSize:   { xs: '2rem', md: '2.5rem' },
                }}
              >
                Insurance, Simplified
              </Typography>
              <Typography
                sx={{
                  color:      'rgba(255,255,255,0.65)',
                  lineHeight: 1.7,
                  mb:         4,
                  fontSize:   '1rem',
                }}
              >
                Physical therapy benefits vary by plan. We handle the
                verification process so you know exactly what to expect
                before you walk through the door.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {WHAT_TO_KNOW.map((item) => (
                  <Box
                    key={item}
                    sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}
                  >
                    <CheckCircleIcon
                      sx={{ color: BRAND.neoBlue, fontSize: '1rem', mt: '2px', flexShrink: 0 }}
                    />
                    <Typography
                      sx={{
                        color:      'rgba(255,255,255,0.75)',
                        fontSize:   '0.9375rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Process Steps */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {PROCESS_STEPS.map(({ step, title, body }) => (
                  <Box
                    key={step}
                    sx={{
                      display:         'flex',
                      gap:             2.5,
                      p:               3,
                      borderRadius:    3,
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border:          '1px solid rgba(255,255,255,0.08)',
                      transition:      'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(14,197,230,0.05)',
                        borderColor:     'rgba(14,197,230,0.2)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight:  800,
                        fontSize:    '1.75rem',
                        color:       BRAND.neoBlue,
                        lineHeight:  1,
                        opacity:     0.7,
                        flexShrink:  0,
                        width:       36,
                        pt:          '2px',
                      }}
                    >
                      {step}
                    </Typography>
                    <Box>
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize:   '1rem',
                          color:      BRAND.white,
                          mb:         0.75,
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          color:      'rgba(255,255,255,0.55)',
                          fontSize:   '0.875rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {body}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Reviews ─────────────────────────────────────────────── */}
      <ReviewsSection />

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <FAQSection maxItems={5} />

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <CTABand
        headline="Have Insurance Questions? We'll Answer Them."
        subline="Contact us before your first visit. We verify your benefits and tell you what to expect."
        variant="dark"
      />
    </>
  );
}
