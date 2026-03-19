import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneIcon from '@mui/icons-material/Phone';
import InsuranceSection from '@/components/InsuranceSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import CTABand from '@/components/CTABand';
import MotionSection from '@/components/MotionSection';
import { BRAND } from '@/lib/theme';
import { INSURANCE_FAQ_SCHEMA } from '@/lib/schema';

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Accepted Insurance — InSync Physical Therapy NYC',
  description:
    'InSync Physical Therapy accepts Aetna, Blue Cross Blue Shield, Cigna, United Healthcare, Medicare, Fidelis, HIP, and NYC EPP/GHI. No referral required for 30 days. Benefits verified before your first visit. Brooklyn and Manhattan, NYC.',
  alternates: { canonical: 'https://insync-pt.com/insurance' },
  openGraph: {
    title:       'Accepted Insurance | InSync Physical Therapy NYC',
    description: 'In-network with most major NYC insurance plans. Benefits verified before your first appointment. No surprise bills.',
  },
};

// ─── Static data ──────────────────────────────────────────────────────────────
const CARRIERS = [
  {
    name:     'Aetna',
    planType: 'HMO · PPO',
    logo:     '/assets/logo-badges/Aetna_standard_logo.png',
  },
  {
    name:     'Blue Cross Blue Shield',
    planType: 'HMO · PPO · EPO',
    logo:     '/assets/logo-badges/BlueCrossBlueShield_standard_logo.png',
  },
  {
    name:     'Cigna',
    planType: 'HMO · PPO',
    logo:     '/assets/logo-badges/Cigna_standard_logo.png',
  },
  {
    name:     'United Healthcare',
    planType: 'HMO · PPO',
    logo:     '/assets/logo-badges/UnitedHealthcare_standard_logo.png',
  },
  {
    name:     'Medicare',
    planType: 'Part B',
    logo:     '/assets/logo-badges/Medicare_standard_logo.png',
  },
  {
    name:     'Fidelis Care',
    planType: 'Medicaid · CHIP',
    logo:     '/assets/logo-badges/Fidelis_standard_logo.png',
  },
  {
    name:     'HIP',
    planType: 'HIP Plans',
    logo:     '/assets/logo-badges/HIP_standard_logo.png',
  },
  {
    name:     'NYC Employee Benefits',
    planType: 'EPP · GHI',
    logo:     '/assets/logo-badges/NYCEPP_standard_logo.png',
  },
];

const PROCESS_STEPS = [
  {
    step:  '01',
    title: 'You Submit a Request',
    body:  'Fill out our short appointment request form with your insurance information and primary concern. Takes under 2 minutes.',
  },
  {
    step:  '02',
    title: 'We Verify Your Benefits',
    body:  'Our team contacts your insurance carrier to verify your PT benefits, confirm coverage, and determine your copay before scheduling.',
  },
  {
    step:  '03',
    title: 'We Call or Email You',
    body:  'We reach out to confirm your appointment, answer cost questions, and choose the location that works best for you.',
  },
  {
    step:  '04',
    title: 'Your 60-Minute Evaluation',
    body:  'You come in for a thorough clinical assessment. No surprise charges. No high-pressure upsells. Just honest, focused care.',
  },
];

const WHAT_TO_KNOW = [
  'Most major in-network plans accepted — see full list below',
  'Benefits verified before your first visit — no guessing',
  'We handle all insurance paperwork and billing',
  'Copays and deductibles depend on your specific plan',
  'Out-of-network options available — ask us first',
  'No physician referral needed for the first 30 days (NY law)',
];

const COST_RANGES = [
  {
    label:    'In-Network Copay',
    range:    '$20 – $50',
    note:     'Typical per-visit copay for most in-network PPO/HMO plans.',
  },
  {
    label:    'Deductible Plans',
    range:    'Varies',
    note:     'If you haven\'t met your deductible, you pay the contracted rate until it\'s reached.',
  },
  {
    label:    'Medicare Part B',
    range:    '20% coinsurance',
    note:     'After your Part B deductible is met. We accept assignment.',
  },
  {
    label:    'Out-of-Pocket Max',
    range:    'Plan-specific',
    note:     'Once you hit your OOP max, PT is typically fully covered for the year.',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function InsurancePage() {
  return (
    <>
      {/* ── JSON-LD structured data ─────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(INSURANCE_FAQ_SCHEMA) }}
      />

      {/* ── Page Hero ──────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Insurance overview"
        className="section-navy"
        sx={{
          position: 'relative',
          pt:       { xs: 10, md: 14 },
          pb:       { xs: 8, md: 12 },
          overflow: 'hidden',
        }}
      >
        {/* Subtle grid texture overlay */}
        <Box
          aria-hidden="true"
          sx={{
            position:         'absolute',
            inset:            0,
            backgroundImage:  'radial-gradient(circle at 75% 30%, rgba(14,197,230,0.07) 0%, transparent 55%)',
            pointerEvents:    'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap:                 { xs: 6, md: 10 },
              alignItems:          'center',
            }}
          >
            {/* Left — copy */}
            <Box>
              <Typography
                component="p"
                sx={{
                  fontSize:      '0.72rem',
                  fontWeight:    700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color:         BRAND.neoBlue,
                  mb:            2,
                  display:       'flex',
                  alignItems:    'center',
                  gap:           1,
                }}
              >
                <Box
                  component="span"
                  aria-hidden="true"
                  sx={{ display: 'inline-block', width: 20, height: 2, backgroundColor: BRAND.neoBlue, borderRadius: 1 }}
                />
                Insurance & Coverage
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  color:      BRAND.white,
                  mb:         2.5,
                  fontSize:   { xs: '2.125rem', md: '3rem' },
                  fontWeight: 800,
                  lineHeight: 1.05,
                }}
              >
                We Accept Your Insurance.<br />We Verify It Before You Come In.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color:      'rgba(255,255,255,0.72)',
                  lineHeight: 1.75,
                  fontSize:   { xs: '1rem', md: '1.0625rem' },
                  maxWidth:   500,
                  mb:         3.5,
                }}
              >
                Cost and coverage are real concerns. That is why we check
                your benefits before scheduling — so you know exactly what
                to expect before you walk through the door.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  data-analytics="insurance-hero-cta-primary"
                  sx={{
                    backgroundColor: BRAND.neoBlue,
                    color:           BRAND.spaceNavy,
                    fontWeight:      700,
                    px:              3.5,
                    py:              1.5,
                    '&:hover': { backgroundColor: BRAND.neoBlueHover },
                  }}
                >
                  Request Appointment
                </Button>
                <Button
                  component="a"
                  href="tel:+19294194643"
                  variant="outlined"
                  size="large"
                  startIcon={<PhoneIcon />}
                  data-analytics="insurance-hero-cta-call"
                  sx={{
                    borderColor: 'rgba(255,255,255,0.35)',
                    color:       BRAND.white,
                    fontWeight:  600,
                    px:          3,
                    py:          1.5,
                    '&:hover': {
                      borderColor:     BRAND.neoBlue,
                      backgroundColor: 'rgba(14,197,230,0.08)',
                    },
                  }}
                >
                  929-419-4643
                </Button>
              </Box>
            </Box>

            {/* Right — quick-reference card */}
            <MotionSection delay={0.15}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border:          '1px solid rgba(255,255,255,0.1)',
                  borderRadius:    4,
                  p:               { xs: 3, md: 4 },
                }}
              >
                <Box
                  sx={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:        1.5,
                    mb:         3,
                  }}
                >
                  <VerifiedIcon sx={{ color: BRAND.neoBlue, fontSize: '1.5rem' }} />
                  <Typography
                    sx={{
                      color:      BRAND.white,
                      fontWeight: 700,
                      fontSize:   '1rem',
                    }}
                  >
                    Confirmed in-network carriers
                  </Typography>
                </Box>
                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none',
                    p:         0,
                    m:         0,
                    display:   'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap:       1,
                  }}
                >
                  {CARRIERS.map(({ name }) => (
                    <Box
                      key={name}
                      component="li"
                      sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}
                    >
                      <CheckCircleIcon
                        sx={{ color: BRAND.neoBlue, fontSize: '0.875rem', mt: '3px', flexShrink: 0 }}
                      />
                      <Typography
                        sx={{
                          color:    'rgba(255,255,255,0.8)',
                          fontSize: '0.875rem',
                          lineHeight: 1.45,
                        }}
                      >
                        {name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    mt:              3,
                    pt:              3,
                    borderTop:       '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Typography
                    sx={{
                      color:      'rgba(255,255,255,0.82)',
                      fontSize:   '0.8125rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Don&apos;t see your plan? Contact us — we accept additional
                    carriers and can check your out-of-network benefits.
                  </Typography>
                </Box>
              </Box>
            </MotionSection>
          </Box>
        </Container>
      </Box>

      {/* ── No Referral callout ─────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="No referral required"
        className="section-neo-blue"
        sx={{ py: { xs: 3, md: 3.5 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display:        'flex',
              flexWrap:       'wrap',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            { xs: 1.5, md: 3 },
              textAlign:      { xs: 'center', md: 'left' },
            }}
          >
            <VerifiedIcon sx={{ color: BRAND.spaceNavy, fontSize: '1.5rem', flexShrink: 0 }} />
            <Typography
              sx={{
                color:      BRAND.spaceNavy,
                fontWeight: 700,
                fontSize:   { xs: '0.9375rem', md: '1.0625rem' },
              }}
            >
              No referral required for the first 30 days of physical therapy in New York State.
            </Typography>
            <Typography
              sx={{
                color:    'rgba(0,61,89,0.75)',
                fontSize: '0.875rem',
              }}
            >
              Walk in. Start treatment. We handle the rest.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Accepted Carrier Grid ───────────────────────────────────── */}
      <Box
        component="section"
        id="insurance"
        aria-label="Accepted insurance carriers"
        className="section-light"
        sx={{ py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <MotionSection>
            <Box sx={{ textAlign: 'center', mb: { xs: 7, md: 9 } }}>
              <Typography component="p" className="overline" sx={{ mb: 2 }}>
                Accepted Insurance
              </Typography>
              <Typography
                variant="h2"
                sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.625rem' } }}
              >
                Insurance Made Simple.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color:    BRAND.gray500,
                  maxWidth: 520,
                  mx:       'auto',
                  lineHeight: 1.75,
                }}
              >
                Most major NYC insurance plans accepted. We verify your
                coverage before your first visit so you know exactly what
                to expect. No surprise bills.
              </Typography>
            </Box>
          </MotionSection>

          {/* Carrier cards */}
          <MotionSection variant="list">
            <Box
              sx={{
                display:             'grid',
                gridTemplateColumns: {
                  xs: '1fr 1fr',
                  sm: 'repeat(4, 1fr)',
                },
                gap: { xs: 2, md: 2.5 },
                mb:  { xs: 5, md: 7 },
              }}
            >
              {CARRIERS.map(({ name, planType, logo }) => (
                <MotionSection key={name} variant="item">
                  <Box
                    sx={{
                      border:          `1px solid ${BRAND.gray200}`,
                      borderRadius:    3,
                      p:               { xs: 2, md: 2.5 },
                      display:         'flex',
                      flexDirection:   'column',
                      alignItems:      'center',
                      gap:             1.5,
                      transition:      'all 0.2s ease',
                      backgroundColor: BRAND.white,
                      '&:hover': {
                        boxShadow:   `0 4px 20px rgba(0,61,89,0.08)`,
                        borderColor: BRAND.neoBlue,
                        transform:   'translateY(-2px)',
                      },
                    }}
                  >
                    {/* Logo */}
                    <Box
                      sx={{
                        position: 'relative',
                        width:    '100%',
                        height:   52,
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={logo}
                        alt={`${name} logo`}
                        fill
                        sizes="(max-width: 600px) 45vw, 25vw"
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>

                    {/* Name */}
                    <Typography
                      sx={{
                        fontWeight:  700,
                        fontSize:    '0.8125rem',
                        color:       BRAND.spaceNavy,
                        textAlign:   'center',
                        lineHeight:  1.3,
                      }}
                    >
                      {name}
                    </Typography>

                    {/* Plan type badge */}
                    <Box
                      sx={{
                        backgroundColor: 'rgba(14,197,230,0.1)',
                        borderRadius:    '100px',
                        px:              1.25,
                        py:              0.25,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize:      '0.6875rem',
                          fontWeight:    700,
                          letterSpacing: '0.04em',
                          color:         BRAND.spaceNavy,
                          textTransform: 'uppercase',
                        }}
                      >
                        {planType}
                      </Typography>
                    </Box>
                  </Box>
                </MotionSection>
              ))}
            </Box>
          </MotionSection>

          {/* Don't see your plan */}
          <Box
            sx={{
              p:               { xs: 3, md: 4 },
              borderRadius:    3,
              border:          `1px solid ${BRAND.gray200}`,
              backgroundColor: BRAND.offWhite,
              display:         'flex',
              flexWrap:        'wrap',
              alignItems:      'center',
              justifyContent:  'space-between',
              gap:             3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight:  700,
                  fontSize:    { xs: '1rem', md: '1.125rem' },
                  color:       BRAND.spaceNavy,
                  mb:          0.5,
                }}
              >
                Don&apos;t see your plan?
              </Typography>
              <Typography sx={{ color: BRAND.gray500, fontSize: '0.9375rem', lineHeight: 1.6 }}>
                We accept additional plans and can verify your out-of-network benefits before your first visit.
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: '0.9rem' }} />}
              sx={{
                backgroundColor: BRAND.spaceNavy,
                color:           BRAND.white,
                fontWeight:      700,
                px:              3,
                py:              1.25,
                flexShrink:      0,
                '&:hover': { backgroundColor: BRAND.luxBlue },
              }}
            >
              Ask About Your Plan
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── What to Know + Process ──────────────────────────────────── */}
      <Box
        component="section"
        aria-label="How insurance works at InSync"
        className="section-navy"
        sx={{ py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">

            {/* What to Know */}
            <Grid item xs={12} md={6}>
              <MotionSection>
                <Typography
                  component="p"
                  sx={{
                    fontSize:      '0.72rem',
                    fontWeight:    700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color:         BRAND.neoBlue,
                    mb:            2,
                    display:       'flex',
                    alignItems:    'center',
                    gap:           1,
                  }}
                >
                  <Box
                    component="span"
                    aria-hidden="true"
                    sx={{ display: 'inline-block', width: 20, height: 2, backgroundColor: BRAND.neoBlue, borderRadius: 1 }}
                  />
                  What to Know
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color:      BRAND.white,
                    mb:         2.5,
                    fontSize:   { xs: '2rem', md: '2.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                  }}
                >
                  Insurance, Simplified.
                </Typography>
                <Typography
                  sx={{
                    color:      'rgba(255,255,255,0.65)',
                    lineHeight: 1.75,
                    mb:         4,
                    fontSize:   '1rem',
                  }}
                >
                  PT benefits vary by plan. We handle the verification so
                  you know exactly what to expect before your first visit.
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none',
                    p:         0,
                    m:         0,
                    display:   'flex',
                    flexDirection: 'column',
                    gap:       1.5,
                  }}
                >
                  {WHAT_TO_KNOW.map((item) => (
                    <Box
                      key={item}
                      component="li"
                      sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}
                    >
                      <CheckCircleIcon
                        sx={{ color: BRAND.neoBlue, fontSize: '1rem', mt: '2px', flexShrink: 0 }}
                      />
                      <Typography
                        sx={{
                          color:      'rgba(255,255,255,0.78)',
                          fontSize:   '0.9375rem',
                          lineHeight: 1.55,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </MotionSection>
            </Grid>

            {/* Process Steps */}
            <Grid item xs={12} md={6}>
              <MotionSection delay={0.1}>
                <Typography
                  component="p"
                  sx={{
                    fontSize:      '0.72rem',
                    fontWeight:    700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color:         BRAND.neoBlue,
                    mb:            2,
                    display:       'flex',
                    alignItems:    'center',
                    gap:           1,
                  }}
                >
                  <Box
                    component="span"
                    aria-hidden="true"
                    sx={{ display: 'inline-block', width: 20, height: 2, backgroundColor: BRAND.neoBlue, borderRadius: 1 }}
                  />
                  How It Works
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color:      BRAND.white,
                    mb:         3.5,
                    fontSize:   { xs: '2rem', md: '2.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                  }}
                >
                  From Request to Treatment
                </Typography>
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
                          backgroundColor: 'rgba(14,197,230,0.06)',
                          borderColor:     'rgba(14,197,230,0.2)',
                        },
                      }}
                    >
                      <Typography
                        aria-hidden="true"
                        sx={{
                          fontWeight:  800,
                          fontSize:    '1.625rem',
                          color:       BRAND.neoBlue,
                          lineHeight:  1,
                          flexShrink:  0,
                          width:       36,
                          pt:          '2px',
                          fontFamily:  'var(--font-denton, "Playfair Display", serif)',
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
                            color:      'rgba(255,255,255,0.80)',
                            fontSize:   '0.875rem',
                            lineHeight: 1.65,
                          }}
                        >
                          {body}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </MotionSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Cost Transparency ───────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="What to expect to pay"
        className="section-light"
        sx={{ py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <MotionSection>
            <Box sx={{ maxWidth: 640, mb: { xs: 6, md: 8 } }}>
              <Typography component="p" className="overline" sx={{ mb: 2 }}>
                Cost Transparency
              </Typography>
              <Typography
                variant="h2"
                sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}
              >
                What to Expect to Pay
              </Typography>
              <Typography variant="body1" sx={{ color: BRAND.gray500, lineHeight: 1.75 }}>
                We always tell you before you come in. Your out-of-pocket
                cost depends on your plan, deductible, and copay — here
                is what most patients typically see.
              </Typography>
            </Box>
          </MotionSection>

          <MotionSection variant="list">
            <Box
              sx={{
                display:             'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                gap:                 { xs: 2, md: 2.5 },
              }}
            >
              {COST_RANGES.map(({ label, range, note }) => (
                <MotionSection key={label} variant="item">
                  <Box
                    sx={{
                      border:          `1px solid ${BRAND.gray200}`,
                      borderRadius:    3,
                      p:               3,
                      height:          '100%',
                      transition:      'all 0.2s ease',
                      '&:hover': {
                        boxShadow:   `0 4px 20px rgba(0,61,89,0.07)`,
                        borderColor: BRAND.neoBlue,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize:      '0.6875rem',
                        fontWeight:    700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color:         BRAND.neoBlue,
                        mb:            1.5,
                      }}
                    >
                      {label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize:   { xs: '1.75rem', md: '2rem' },
                        fontWeight: 800,
                        color:      BRAND.spaceNavy,
                        lineHeight: 1,
                        mb:         1.5,
                        fontFamily: 'var(--font-denton, "Playfair Display", serif)',
                      }}
                    >
                      {range}
                    </Typography>
                    <Typography
                      sx={{
                        color:      BRAND.gray500,
                        fontSize:   '0.875rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {note}
                    </Typography>
                  </Box>
                </MotionSection>
              ))}
            </Box>
          </MotionSection>

          {/* Disclaimer */}
          <Box
            sx={{
              mt:              { xs: 5, md: 6 },
              p:               { xs: 3, md: 3.5 },
              borderRadius:    3,
              backgroundColor: BRAND.offWhite,
              border:          `1px solid ${BRAND.gray200}`,
            }}
          >
            <Typography
              sx={{
                color:      BRAND.gray500,
                fontSize:   '0.875rem',
                lineHeight: 1.65,
                textAlign:  'center',
              }}
            >
              <strong style={{ color: BRAND.spaceNavy }}>
                These are estimates only.
              </strong>{' '}
              Actual costs depend on your plan, deductible status, and the
              specific services rendered. We verify your exact benefits
              before your first appointment — no guessing.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Reviews ─────────────────────────────────────────────────── */}
      <ReviewsSection />

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <FAQSection maxItems={5} />

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CTABand
        headline="Have Insurance Questions? We'll Answer Them."
        subline="Contact us before your first visit. We verify your benefits and tell you exactly what to expect."
        variant="dark"
      />
    </>
  );
}
