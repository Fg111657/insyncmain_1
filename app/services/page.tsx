import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ServicesGrid from '@/components/ServicesGrid';
import TechnologySection from '@/components/TechnologySection';
import FAQSection from '@/components/FAQSection';
import CTABand from '@/components/CTABand';
import ConditionsCarousel from '@/components/ConditionsCarousel';
import BodyMap from '@/components/BodyMap';
import FirstVisitSection from '@/components/FirstVisitSection';
import TeamSection from '@/components/TeamSection';
import MotionSection from '@/components/MotionSection';
import { BRAND } from '@/lib/theme';
import { SERVICES_PAGE_SCHEMA } from '@/lib/schema';
import { PROVIDER_PHOTOS } from '@/lib/images';

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Physical Therapy Services NYC — Orthopedic, Sports & Post-Surgical Rehab',
  description:
    'Orthopedic rehabilitation, sports injury recovery, chronic pain treatment, post-surgical rehab, manual therapy, movement analysis, and strength & conditioning transition. One-on-one PT in Brooklyn and Manhattan, NYC.',
  alternates: { canonical: 'https://insync-pt.com/services' },
  openGraph: {
    title:       'Physical Therapy Services NYC | InSync Physical Therapy',
    description: 'Evidence-based, one-on-one PT for orthopedic injuries, sports recovery, chronic pain, and post-surgical rehab in Brooklyn and Manhattan.',
  },
};

// ─── Static data ──────────────────────────────────────────────────────────────
const SERVICE_ANCHORS = [
  { id: 'orthopedic',    label: 'Orthopedic Rehab'    },
  { id: 'sports',        label: 'Sports Injury'        },
  { id: 'chronic-pain',  label: 'Chronic Pain'         },
  { id: 'post-surgical', label: 'Post-Surgical'        },
  { id: 'manual',        label: 'Manual Therapy'       },
  { id: 'movement',      label: 'Movement Analysis'    },
  { id: 'strength',      label: 'Strength Transition'  },
];

const HERO_TRUST = [
  'No referral needed for the first 30 days (NY State law)',
  'Insurance verified before your first appointment',
  '1-on-1 with your therapist every single session',
];

const OUTCOME_STATS = [
  { stat: '500+', label: 'Patients treated in NYC' },
  { stat: '9+',   label: 'Years of clinical experience' },
  { stat: '1:1',  label: 'Therapist ratio — always' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      {/* ── JSON-LD structured data ─────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_PAGE_SCHEMA) }}
      />

      {/* ── Page Hero ──────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Services overview"
        className="section-navy"
        sx={{
          position: 'relative',
          pt:       { xs: 10, md: 14 },
          pb:       { xs: 8, md: 12 },
          overflow: 'hidden',
        }}
      >
        {/* Background treatment image */}
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src={PROVIDER_PHOTOS.upperBackTherapy06}
            alt="Physical therapy treatment at InSync"
            fill
            priority
            quality={80}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.18 }}
          />
          {/* Gradient overlay for text legibility */}
          <Box
            sx={{
              position:   'absolute',
              inset:      0,
              background: `linear-gradient(90deg, ${BRAND.spaceNavy} 55%, rgba(0,61,89,0.3) 100%)`,
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 640 }}>
            {/* Overline */}
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
              Physical Therapy Services
            </Typography>

            {/* H1 */}
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
              Specialized Care<br />for Every Injury and Goal
            </Typography>

            {/* Sub-headline */}
            <Typography
              variant="body1"
              sx={{
                color:      'rgba(255,255,255,0.72)',
                maxWidth:   540,
                lineHeight: 1.75,
                fontSize:   { xs: '1rem', md: '1.0625rem' },
                mb:         3.5,
              }}
            >
              Physical therapy in NYC for orthopedic rehab, sports injury
              recovery, chronic pain, and return-to-performance care. Every
              plan is built around your specific injury, activity level, and
              goals — not a generic protocol.
            </Typography>

            {/* Trust checklist */}
            <Box
              component="ul"
              aria-label="Key service guarantees"
              sx={{
                listStyle: 'none',
                p:         0,
                m:         0,
                display:   'flex',
                flexDirection: 'column',
                gap:       1.25,
                mb:        4,
              }}
            >
              {HERO_TRUST.map((item) => (
                <Box
                  key={item}
                  component="li"
                  sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}
                >
                  <CheckCircleOutlineIcon
                    sx={{ color: BRAND.neoBlue, fontSize: '1rem', mt: '2px', flexShrink: 0 }}
                  />
                  <Typography
                    sx={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem', lineHeight: 1.5 }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* CTAs */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                size="large"
                data-analytics="services-hero-cta-primary"
                endIcon={<ArrowForwardIcon />}
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
              <Button
                component={Link}
                href="/insurance"
                variant="outlined"
                size="large"
                data-analytics="services-hero-cta-secondary"
                sx={{
                  borderColor: 'rgba(255,255,255,0.35)',
                  color:       BRAND.white,
                  fontWeight:  600,
                  px:          3.5,
                  py:          1.5,
                  fontSize:    '0.9375rem',
                  '&:hover': {
                    borderColor:     BRAND.neoBlue,
                    backgroundColor: 'rgba(14,197,230,0.08)',
                  },
                }}
              >
                Check Insurance
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Sticky service anchor nav ───────────────────────────────── */}
      <Box
        component="nav"
        aria-label="Jump to a service"
        className="section-light"
        sx={{
          position:    'sticky',
          top:         { xs: 56, md: 64 },
          zIndex:      100,
          borderBottom: `1px solid ${BRAND.gray200}`,
          boxShadow:   '0 2px 12px rgba(0,0,0,0.06)',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
          <Box
            sx={{
              display:         'flex',
              gap:             1,
              py:              1.5,
              overflowX:       'auto',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth:  'none',
              msOverflowStyle: 'none',
            }}
          >
            {SERVICE_ANCHORS.map(({ id, label }) => (
              <Box
                key={id}
                component="a"
                href={`#${id}`}
                sx={{
                  flexShrink:     0,
                  px:             2,
                  py:             0.75,
                  borderRadius:   '100px',
                  border:         `1px solid ${BRAND.gray200}`,
                  color:          BRAND.spaceNavy,
                  fontWeight:     600,
                  fontSize:       '0.8125rem',
                  textDecoration: 'none',
                  whiteSpace:     'nowrap',
                  transition:     'all 0.18s ease',
                  '&:hover': {
                    backgroundColor: BRAND.spaceNavy,
                    color:           BRAND.white,
                    borderColor:     BRAND.spaceNavy,
                  },
                  '&:focus-visible': {
                    outline:       `2px solid ${BRAND.neoBlue}`,
                    outlineOffset: '2px',
                  },
                }}
              >
                {label}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── All Services (grid with individual anchors) ─────────────── */}
      <ServicesGrid showCTA={false} />

      {/* ── Outcome stats strip ─────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Outcome statistics"
        className="section-navy"
        sx={{ py: { xs: 5, md: 6 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap:                 { xs: 4, sm: 0 },
              textAlign:           'center',
            }}
          >
            {OUTCOME_STATS.map(({ stat, label }, i) => (
              <Box
                key={stat}
                sx={{
                  px:             { sm: 4 },
                  borderRight:    { sm: i < 2 ? `1px solid rgba(255,255,255,0.1)` : 'none' },
                  borderTop:      { xs: i > 0 ? `1px solid rgba(255,255,255,0.1)` : 'none', sm: 'none' },
                  pt:             { xs: i > 0 ? 4 : 0, sm: 0 },
                }}
              >
                <Typography
                  sx={{
                    fontSize:   { xs: '2.5rem', md: '3rem' },
                    fontWeight: 800,
                    color:      BRAND.neoBlue,
                    lineHeight: 1,
                    mb:         0.75,
                    fontFamily: 'var(--font-denton, "Playfair Display", serif)',
                  }}
                >
                  {stat}
                </Typography>
                <Typography
                  sx={{
                    color:      'rgba(255,255,255,0.65)',
                    fontSize:   '0.9375rem',
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Mid-page CTA strip ─────────────────────────────────────── */}
      <Box
        component="section"
        className="section-off-white"
        sx={{
          py:         { xs: 4, md: 5 },
          borderTop:  `1px solid ${BRAND.gray200}`,
          borderBottom: `1px solid ${BRAND.gray200}`,
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display:        'flex',
              flexWrap:       'wrap',
              alignItems:     'center',
              justifyContent: 'space-between',
              gap:            3,
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize:   { xs: '1.25rem', md: '1.5rem' },
                  mb:         0.5,
                  color:      BRAND.spaceNavy,
                }}
              >
                Not sure which service is right for you?
              </Typography>
              <Typography sx={{ color: BRAND.gray500, fontSize: '0.9375rem' }}>
                Request an evaluation and we&apos;ll build a plan around your specific condition and goals.
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              data-analytics="services-mid-cta"
              sx={{
                backgroundColor: BRAND.spaceNavy,
                color:           BRAND.white,
                fontWeight:      700,
                px:              3.5,
                py:              1.5,
                flexShrink:      0,
                '&:hover': { backgroundColor: BRAND.luxBlue },
              }}
            >
              Book Your Evaluation
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── Conditions Treated ──────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Conditions treated"
        className="section-light"
        sx={{ py: { xs: 6, md: 10 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
              gap:                 { xs: 5, md: 10 },
              alignItems:          'start',
            }}
          >
            <MotionSection>
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
                  sx={{ color: BRAND.gray500, lineHeight: 1.75, mb: 3 }}
                >
                  We treat orthopedic and musculoskeletal conditions across all
                  body regions. Not sure if your condition qualifies? Contact us —
                  if we can help, we will tell you directly.
                </Typography>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: '0.9rem' }} />}
                  sx={{
                    borderColor: BRAND.spaceNavy,
                    color:       BRAND.spaceNavy,
                    fontWeight:  600,
                    '&:hover': {
                      backgroundColor: BRAND.spaceNavy,
                      color:           BRAND.white,
                    },
                  }}
                >
                  Ask About Your Condition
                </Button>
              </Box>
            </MotionSection>

            <MotionSection delay={0.1}>
              <ConditionsCarousel onLight />
            </MotionSection>
          </Box>
        </Container>
      </Box>

      {/* ── Interactive Body Map ────────────────────────────────────── */}
      <Box
        component="section"
        id="body-map"
        aria-label="Find conditions by body area"
        className="section-off-white"
        sx={{ py: { xs: 6, md: 10 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <MotionSection>
            <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
              <Typography
                component="p"
                sx={{
                  fontSize:      '0.72rem',
                  fontWeight:    700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color:         BRAND.neoBlue,
                  mb:            1.5,
                }}
              >
                Where Is Your Pain?
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '1.875rem', md: '2.5rem' }, mb: 2 }}
              >
                Find the Right Care for Your Injury
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color:      BRAND.gray500,
                  maxWidth:   540,
                  mx:         'auto',
                  lineHeight: 1.75,
                }}
              >
                Select a body area to see the conditions we treat and how our
                one-on-one care model addresses the root cause — not just the
                symptoms.
              </Typography>
            </Box>
          </MotionSection>

          <BodyMap />
        </Container>
      </Box>

      {/* ── Technology ─────────────────────────────────────────────── */}
      <TechnologySection />

      {/* ── First Visit ────────────────────────────────────────────── */}
      <FirstVisitSection />

      {/* ── Meet Your Providers ────────────────────────────────────── */}
      <Box
        className="section-light"
        sx={{ py: { xs: 1, md: 2 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 }, pt: { xs: 5, md: 8 } }}>
          <MotionSection>
            <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
              <Typography component="p" className="overline" sx={{ mb: 2 }}>
                Your Care Team
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '1.875rem', md: '2.5rem' }, mb: 2 }}
              >
                Who Will Be Treating You
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: BRAND.gray500, maxWidth: 520, mx: 'auto', lineHeight: 1.75 }}
              >
                Every patient works directly with an experienced clinician — not
                an aide, not an assistant. Here is who you will see.
              </Typography>
            </Box>
          </MotionSection>
        </Container>
        <TeamSection compact />
      </Box>

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
