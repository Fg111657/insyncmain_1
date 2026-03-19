import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import TeamSection from '@/components/TeamSection';
import CTABand from '@/components/CTABand';
import { BRAND } from '@/lib/theme';
import {
  BLUR_PLACEHOLDER,
  PROVIDER_PHOTOS,
  OFFICE_PHOTOS,
  TEAM_PHOTOS,
} from '@/lib/images';
import MotionSection from '@/components/MotionSection';
import { PHYSICIAN_SCHEMA } from '@/lib/schema';

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'About InSync Physical Therapy — Dr. Hassan & Team, Brooklyn & Manhattan NYC',
  description:
    'InSync Physical Therapy is a one-on-one physical therapy practice in Brooklyn and Manhattan founded by Dr. Hassan, DPT. Nine years of clinical experience. No high-volume models. No aides. Just focused, evidence-based care.',
  alternates: { canonical: 'https://insync-pt.com/about' },
  openGraph: {
    title:       'About InSync Physical Therapy | Dr. Hassan, DPT — NYC',
    description: 'One-on-one PT from a Doctor of Physical Therapy with 9+ years of experience. Orthopedic, sports, and post-surgical rehab in Brooklyn and Midtown Manhattan.',
  },
};

// ─── Static data ──────────────────────────────────────────────────────────────
const STATS = [
  { stat: '500+', label: 'Patients treated in NYC'       },
  { stat: '9+',   label: 'Years of clinical experience'  },
  { stat: '1:1',  label: 'Therapist-to-patient ratio'    },
  { stat: '2',    label: 'Locations — Brooklyn & Midtown' },
];

const VALUES = [
  {
    title: 'Specificity',
    body:
      'Every treatment plan starts from scratch — built around your injury, your body mechanics, and your goals. There are no protocols here. There is your plan.',
  },
  {
    title: 'Continuity',
    body:
      'Same therapist. Every session. You never repeat your story, re-explain your history, or wonder who will see you. You build a clinical relationship that makes treatment more effective.',
  },
  {
    title: 'Accountability',
    body:
      'Progress isn\'t a feeling. We use VALD ForceDecks and HumanTrak motion analysis to measure it — so you know precisely where you are and what it will take to get to full recovery.',
  },
  {
    title: 'Full Arc',
    body:
      'Discharge is not the finish line. We bridge the gap from formal rehabilitation to full strength and sport through our in-house performance partnership with Piero Alessi.',
  },
];

const JOURNEY_STEPS = [
  {
    step:  '01',
    title: 'Request an Appointment',
    body:  'Fill out our short form. It takes under two minutes. Tell us your injury, your insurance, and the location that works for you.',
  },
  {
    step:  '02',
    title: 'We Verify Your Insurance',
    body:  'Our team contacts your carrier, confirms your physical therapy benefits, and tells you your out-of-pocket cost before you come in. No surprises.',
  },
  {
    step:  '03',
    title: 'Your 60-Minute Evaluation',
    body:  'Dr. Hassan or a member of the team conducts a full clinical assessment — movement testing, strength symmetry analysis, and root-cause diagnosis.',
  },
  {
    step:  '04',
    title: 'A Plan Built for You',
    body:  'You leave with a clear treatment plan that outlines goals, expected timeline, and the specific interventions we will use. No vague estimates.',
  },
  {
    step:  '05',
    title: 'Return to Full Performance',
    body:  'When formal PT ends, Piero bridges the gap — progressively reloading you back to your highest level of strength, sport, or activity.',
  },
];

const TECH = [
  {
    name:    'VALD ForceDecks',
    tagline: 'Objective Strength Testing',
    body:    'Force plate technology that measures bilateral strength symmetry, limb-load acceptance, and power output. We use objective data — not guesswork — to determine readiness for return to sport.',
    logo:    '/assets/logo-badges/VALDForcePlates_standard_logo.png',
  },
  {
    name:    'HumanTrak',
    tagline: 'Motion Capture Analysis',
    body:    'Camera-based motion analysis that identifies compensatory movement patterns invisible to the naked eye. We see what your body is doing so we can correct it with precision.',
    logo:    '/assets/logo-badges/Graston_standard_logo.png',
  },
  {
    name:    'Normatec',
    tagline: 'Compression Recovery',
    body:    'Sequential pneumatic compression therapy that accelerates recovery between sessions. Used by elite athletes worldwide to reduce soreness and restore circulation.',
    logo:    '/assets/logo-badges/Normatec_standard_logo.png',
  },
  {
    name:    'Graston Technique',
    tagline: 'Instrument-Assisted Manual Therapy',
    body:    'Certified soft tissue mobilization using stainless steel instruments to break down scar tissue, reduce fascial restrictions, and restore normal tissue function.',
    logo:    '/assets/logo-badges/Graston_standard_logo.png',
  },
];

const HASSAN_SPECIALTIES = [
  'Orthopedic Rehabilitation',
  'Sports Injury Recovery',
  'Manual Therapy',
  'Post-Surgical Rehab',
  'Chronic Pain',
  'Movement Analysis',
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      {/* ── JSON-LD: Physician ─────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PHYSICIAN_SCHEMA) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="About InSync Physical Therapy"
        className="section-navy"
        sx={{
          position: 'relative',
          pt:       { xs: 10, md: 14 },
          pb:       { xs: 8, md: 12 },
          overflow: 'hidden',
        }}
      >
        {/* Subtle radial glow */}
        <Box
          aria-hidden="true"
          sx={{
            position:        'absolute',
            inset:           0,
            backgroundImage: 'radial-gradient(circle at 70% 40%, rgba(14,197,230,0.07) 0%, transparent 60%)',
            pointerEvents:   'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap:                 { xs: 6, md: 12 },
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
                About InSync
              </Typography>

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
                One Therapist.<br />One Patient.<br />Every Session.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color:      'rgba(255,255,255,0.72)',
                  lineHeight: 1.75,
                  fontSize:   { xs: '1rem', md: '1.0625rem' },
                  maxWidth:   520,
                  mb:         4,
                }}
              >
                InSync Physical Therapy was built on a simple premise: real recovery
                requires real attention. Not a shared appointment. Not a rotating cast
                of aides. Every patient works directly with a licensed clinician —
                from evaluation through discharge and beyond.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  data-analytics="about-hero-cta-primary"
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
                  Request Appointment
                </Button>
                <Button
                  component={Link}
                  href="/services"
                  variant="outlined"
                  size="large"
                  data-analytics="about-hero-cta-secondary"
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
                  View Services
                </Button>
              </Box>
            </Box>

            {/* Right — Dr. Hassan photo */}
            <MotionSection delay={0.15}>
              <Box
                sx={{
                  position:     'relative',
                  borderRadius: 4,
                  overflow:     'hidden',
                  aspectRatio:  '4/5',
                  boxShadow:    '0 24px 64px rgba(0,0,0,0.35)',
                  maxWidth:     { xs: 320, md: 'none' },
                  mx:           'auto',
                }}
              >
                <Image
                  src={PROVIDER_PHOTOS.hassanHeadshot}
                  alt="Dr. Hassan, Doctor of Physical Therapy — InSync Physical Therapy"
                  fill
                  priority
                  sizes="(max-width: 900px) 90vw, 45vw"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
                {/* Credential overlay */}
                <Box
                  sx={{
                    position:        'absolute',
                    bottom:          20,
                    left:            20,
                    right:           20,
                    backgroundColor: 'rgba(0,38,42,0.88)',
                    backdropFilter:  'blur(12px)',
                    borderRadius:    3,
                    p:               2.5,
                    border:          '1px solid rgba(14,197,230,0.2)',
                  }}
                >
                  <Typography sx={{ fontWeight: 800, fontSize: '1.0625rem', color: BRAND.white, lineHeight: 1.2 }}>
                    Dr. Hassan
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: BRAND.neoBlue, fontWeight: 600, mt: 0.5, mb: 1.25 }}>
                    Doctor of Physical Therapy
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                    {['DPT', 'Touro University', '9+ Years'].map((c) => (
                      <Chip
                        key={c}
                        label={c}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(14,197,230,0.15)',
                          color:           BRAND.neoBlue,
                          fontWeight:      600,
                          fontSize:        '0.68rem',
                          height:          20,
                          borderRadius:    1,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </MotionSection>
          </Box>
        </Container>
      </Box>

      {/* ── Stats bar ──────────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Practice statistics"
        className="section-neo-blue"
        sx={{ py: { xs: 3.5, md: 4 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap:                 { xs: 3, md: 0 },
              textAlign:           'center',
            }}
          >
            {STATS.map(({ stat, label }, i) => (
              <Box
                key={stat}
                sx={{
                  px:          { md: 3 },
                  borderRight: { md: i < 3 ? `1px solid rgba(0,61,89,0.2)` : 'none' },
                }}
              >
                <Typography
                  sx={{
                    fontSize:   { xs: '2rem', md: '2.5rem' },
                    fontWeight: 800,
                    color:      BRAND.spaceNavy,
                    lineHeight: 1,
                    mb:         0.5,
                    fontFamily: 'var(--font-denton, "Playfair Display", serif)',
                  }}
                >
                  {stat}
                </Typography>
                <Typography
                  sx={{
                    color:    'rgba(0,61,89,0.75)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Origin Story ────────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Why we built InSync"
        className="section-navy"
        sx={{ py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap:                 { xs: 6, md: 12 },
              alignItems:          'start',
            }}
          >
            {/* Left — narrative */}
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
                Why We Built InSync
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color:      BRAND.white,
                  mb:         3,
                  fontSize:   { xs: '2rem', md: '2.75rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Physical Therapy<br />Built on a Better Standard
              </Typography>
              <Typography
                sx={{
                  color:      'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  mb:         2.5,
                  fontSize:   '1.0625rem',
                }}
              >
                Dr. Hassan spent years treating patients in high-volume clinics
                where sessions were rushed, patients were shared, and treatment
                plans were templates. He watched people plateau not because their
                injuries were complex, but because the model left no room for
                the attention real recovery demands.
              </Typography>
              <Typography
                sx={{
                  color:      'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  mb:         2.5,
                  fontSize:   '1.0625rem',
                }}
              >
                InSync was his answer to that. A practice where every patient
                gets a clinician — not an aide — for every session. Where a
                treatment plan is built from scratch, not pulled from a template.
                Where the measure of success is your outcome, not your visit count.
              </Typography>
              <Typography
                sx={{
                  color:      'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  fontSize:   '1.0625rem',
                }}
              >
                Today, InSync operates across two locations in Brooklyn and
                Midtown Manhattan — and the standard has never changed.
              </Typography>
            </MotionSection>

            {/* Right — pull quote + trust list */}
            <MotionSection delay={0.1}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border:          '1px solid rgba(14,197,230,0.2)',
                  borderRadius:    4,
                  p:               { xs: 3.5, md: 5 },
                }}
              >
                <Typography
                  sx={{
                    fontSize:   { xs: '1.375rem', md: '1.625rem' },
                    fontWeight: 700,
                    color:      BRAND.white,
                    lineHeight: 1.45,
                    mb:         4,
                    fontFamily: 'var(--font-denton, "Playfair Display", serif)',
                    fontStyle:  'italic',
                  }}
                >
                  &ldquo;Every patient deserves what the best patients get:
                  a clinician who knows them, a plan built for them, and enough
                  time to actually treat them.&rdquo;
                </Typography>
                <Typography
                  sx={{
                    fontSize:   '0.875rem',
                    color:      BRAND.neoBlue,
                    fontWeight: 700,
                    mb:         0.5,
                  }}
                >
                  Dr. Hassan
                </Typography>
                <Typography sx={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>
                  Founder — InSync Physical Therapy
                </Typography>

                <Box
                  sx={{
                    mt:        4,
                    pt:        4,
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    display:   'flex',
                    flexDirection: 'column',
                    gap:       1.5,
                  }}
                >
                  {[
                    'In-network with major NYC insurance plans',
                    'No referral needed for the first 30 days (NY law)',
                    'Two locations — Brooklyn and Midtown Manhattan',
                    'Same therapist for every visit, no exceptions',
                  ].map((item) => (
                    <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <CheckCircleIcon
                        sx={{ color: BRAND.neoBlue, fontSize: '0.9375rem', mt: '2px', flexShrink: 0 }}
                      />
                      <Typography
                        sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.5 }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </MotionSection>
          </Box>
        </Container>
      </Box>

      {/* ── Mission & Values ────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Our values"
        className="section-off-white"
        sx={{ py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <MotionSection>
            <Box sx={{ maxWidth: 560, mb: { xs: 6, md: 9 } }}>
              <Typography component="p" className="overline" sx={{ mb: 2 }}>
                Our Approach
              </Typography>
              <Typography
                variant="h2"
                sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.625rem' } }}
              >
                What Makes InSync Different
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: BRAND.gray500, lineHeight: 1.75 }}
              >
                Most physical therapy practices optimize for volume. InSync optimizes
                for outcomes. These four principles define how we practice.
              </Typography>
            </Box>
          </MotionSection>

          <MotionSection variant="list">
            <Box
              sx={{
                display:             'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap:                 3,
              }}
            >
              {VALUES.map(({ title, body }) => (
                <MotionSection key={title} variant="item">
                  <Box
                    sx={{
                      border:          `1px solid ${BRAND.gray200}`,
                      borderRadius:    3,
                      p:               { xs: 3, md: 4 },
                      backgroundColor: BRAND.white,
                      height:          '100%',
                      transition:      'all 0.2s ease',
                      '&:hover': {
                        borderColor: BRAND.neoBlue,
                        boxShadow:   '0 4px 20px rgba(0,61,89,0.06)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width:           6,
                        height:          32,
                        backgroundColor: BRAND.neoBlue,
                        borderRadius:    3,
                        mb:              2.5,
                      }}
                    />
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 800,
                        fontSize:   '1.125rem',
                        color:      BRAND.spaceNavy,
                        mb:         1.25,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: BRAND.gray500, lineHeight: 1.75, fontSize: '0.9375rem' }}
                    >
                      {body}
                    </Typography>
                  </Box>
                </MotionSection>
              ))}
            </Box>
          </MotionSection>
        </Container>
      </Box>

      {/* ── Dr. Hassan Feature ─────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Dr. Hassan — Lead Clinician"
        className="section-light"
        sx={{ py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' },
              gap:                 { xs: 6, md: 10 },
              alignItems:          'center',
            }}
          >
            {/* Photo */}
            <MotionSection>
              <Box
                sx={{
                  borderRadius:    4,
                  overflow:        'hidden',
                  position:        'relative',
                  aspectRatio:     '4/5',
                  backgroundColor: BRAND.gray100,
                  boxShadow:       '0 16px 48px rgba(0,61,89,0.12)',
                }}
              >
                <Image
                  src={PROVIDER_PHOTOS.hassanHeadshot}
                  alt="Dr. Hassan, DPT — Lead Clinician at InSync Physical Therapy NYC"
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </Box>
            </MotionSection>

            {/* Content */}
            <MotionSection delay={0.1}>
              <Typography component="p" className="overline" sx={{ mb: 2 }}>
                Lead Clinician
              </Typography>
              <Typography
                variant="h2"
                sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.75rem' } }}
              >
                Meet Dr. Hassan
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: BRAND.gray700, lineHeight: 1.8, mb: 2.5, fontSize: '1.0625rem' }}
              >
                Dr. Hassan is a Doctor of Physical Therapy with more than nine years
                of clinical experience helping New Yorkers recover from orthopedic
                injuries, sports-related conditions, and chronic pain. He holds his
                degree from Touro University and has spent his career building a
                practice around the standard of care he believes every patient deserves.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: BRAND.gray700, lineHeight: 1.8, mb: 2.5 }}
              >
                His approach begins with identifying the root cause — not just the
                symptom. Using hands-on manual therapy alongside VALD ForceDecks
                and HumanTrak motion analysis, he builds treatment plans that are
                specific to your body, your mechanics, and your goals.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: BRAND.gray700, lineHeight: 1.8, mb: 4 }}
              >
                Whether you are six weeks out from ACL reconstruction, managing
                chronic back pain, or preparing to return to competitive sport,
                Dr. Hassan treats you as an individual — not as a chart to
                process before the next patient walks in.
              </Typography>

              {/* Specialties */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    fontSize:      '0.72rem',
                    fontWeight:    700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color:         BRAND.gray500,
                    mb:            1.5,
                  }}
                >
                  Clinical Specialties
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {HASSAN_SPECIALTIES.map((s) => (
                    <Box
                      key={s}
                      sx={{
                        px:              2,
                        py:              0.625,
                        borderRadius:    2,
                        border:          `1px solid ${BRAND.gray200}`,
                        backgroundColor: BRAND.offWhite,
                      }}
                    >
                      <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: BRAND.spaceNavy }}>
                        {s}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Inline CTA */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  data-analytics="about-hassan-cta"
                  sx={{
                    backgroundColor: BRAND.spaceNavy,
                    color:           BRAND.white,
                    fontWeight:      700,
                    px:              3.5,
                    py:              1.5,
                    '&:hover': { backgroundColor: BRAND.luxBlue },
                  }}
                >
                  Book with Dr. Hassan
                </Button>
                <Button
                  component="a"
                  href="tel:+19294194643"
                  variant="outlined"
                  size="large"
                  startIcon={<PhoneIcon />}
                  sx={{
                    borderColor: BRAND.spaceNavy,
                    color:       BRAND.spaceNavy,
                    fontWeight:  600,
                    px:          3,
                    py:          1.5,
                    '&:hover': {
                      backgroundColor: BRAND.spaceNavy,
                      color:           BRAND.white,
                    },
                  }}
                >
                  929-419-4643
                </Button>
              </Box>
            </MotionSection>
          </Box>
        </Container>
      </Box>

      {/* ── Technology Showcase ─────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Clinical technology"
        className="section-navy"
        sx={{ py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <MotionSection>
            <Box sx={{ textAlign: 'center', mb: { xs: 7, md: 9 } }}>
              <Typography component="p" className="overline" sx={{ mb: 2 }}>
                Clinical Technology
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color:      BRAND.white,
                  mb:         2,
                  fontSize:   { xs: '2rem', md: '2.75rem' },
                  fontWeight: 800,
                }}
              >
                Measurement, Not Guesswork
              </Typography>
              <Typography
                sx={{
                  color:    'rgba(255,255,255,0.65)',
                  maxWidth: 540,
                  mx:       'auto',
                  lineHeight: 1.75,
                  fontSize: '1rem',
                }}
              >
                Most clinics assess progress by asking how you feel. We measure it.
                InSync uses clinical-grade technology to give you objective data at
                every stage of recovery.
              </Typography>
            </Box>
          </MotionSection>

          <MotionSection variant="list">
            <Box
              sx={{
                display:             'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap:                 2.5,
              }}
            >
              {TECH.map(({ name, tagline, body }) => (
                <MotionSection key={name} variant="item">
                  <Box
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border:          '1px solid rgba(255,255,255,0.08)',
                      borderRadius:    3,
                      p:               { xs: 3, md: 4 },
                      height:          '100%',
                      transition:      'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(14,197,230,0.06)',
                        borderColor:     'rgba(14,197,230,0.25)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize:      '0.7rem',
                        fontWeight:    700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color:         BRAND.neoBlue,
                        mb:            1.25,
                      }}
                    >
                      {tagline}
                    </Typography>
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 800,
                        fontSize:   '1.1875rem',
                        color:      BRAND.white,
                        mb:         1.5,
                        lineHeight: 1.2,
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      sx={{
                        color:      'rgba(255,255,255,0.62)',
                        fontSize:   '0.9375rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {body}
                    </Typography>
                  </Box>
                </MotionSection>
              ))}
            </Box>
          </MotionSection>
        </Container>
      </Box>

      {/* ── Patient Journey ─────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="What to expect"
        className="section-off-white"
        sx={{ py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <MotionSection>
            <Box sx={{ textAlign: 'center', mb: { xs: 7, md: 9 } }}>
              <Typography component="p" className="overline" sx={{ mb: 2 }}>
                The Process
              </Typography>
              <Typography
                variant="h2"
                sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.75rem' } }}
              >
                What to Expect at InSync
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
                From your first request to return to full performance — here
                is exactly what the InSync experience looks like.
              </Typography>
            </Box>
          </MotionSection>

          <MotionSection variant="list">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 820, mx: 'auto' }}>
              {JOURNEY_STEPS.map(({ step, title, body }, i) => (
                <MotionSection key={step} variant="item">
                  <Box
                    sx={{
                      display:         'flex',
                      gap:             3,
                      p:               { xs: 3, md: 4 },
                      borderRadius:    3,
                      border:          `1px solid ${BRAND.gray200}`,
                      backgroundColor: BRAND.white,
                      alignItems:      'flex-start',
                      transition:      'all 0.2s ease',
                      '&:hover': {
                        boxShadow:   '0 4px 24px rgba(0,61,89,0.08)',
                        borderColor: BRAND.neoBlue,
                      },
                    }}
                  >
                    <Typography
                      aria-hidden="true"
                      sx={{
                        fontSize:   { xs: '1.5rem', md: '2rem' },
                        fontWeight: 800,
                        color:      BRAND.neoBlue,
                        opacity:    0.6,
                        lineHeight: 1,
                        flexShrink: 0,
                        width:      { xs: 40, md: 52 },
                        pt:         '3px',
                        fontFamily: 'var(--font-denton, "Playfair Display", serif)',
                      }}
                    >
                      {step}
                    </Typography>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize:   '1.0625rem',
                          color:      BRAND.spaceNavy,
                          mb:         0.75,
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          color:      BRAND.gray500,
                          fontSize:   '0.9375rem',
                          lineHeight: 1.7,
                        }}
                      >
                        {body}
                      </Typography>
                    </Box>
                  </Box>
                </MotionSection>
              ))}
            </Box>
          </MotionSection>

          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              data-analytics="about-journey-cta"
              sx={{
                backgroundColor: BRAND.spaceNavy,
                color:           BRAND.white,
                fontWeight:      700,
                px:              4,
                py:              1.75,
                fontSize:        '1rem',
                '&:hover': { backgroundColor: BRAND.luxBlue },
              }}
            >
              Start with a Full Evaluation
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── Full Team ───────────────────────────────────────────────────── */}
      <TeamSection />

      {/* ── Clinic Photos ───────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="InSync clinic environment"
        className="section-off-white"
        sx={{ py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <MotionSection>
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography component="p" className="overline" sx={{ mb: 2 }}>
                The Clinic
              </Typography>
              <Typography
                variant="h2"
                sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.625rem' }, maxWidth: 480 }}
              >
                Private, Clean, Purpose-Built
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: BRAND.gray500, lineHeight: 1.75, maxWidth: 520 }}
              >
                Each session takes place in a private treatment room. No shared
                gym floors, no open-bay layouts where everyone can hear your
                history. Just focused, clinical care.
              </Typography>
            </Box>
          </MotionSection>
          <MotionSection variant="list">
            <Box
              sx={{
                display:             'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
                gap:                 2,
              }}
            >
              {[
                { src: OFFICE_PHOTOS.treatmentRoomWide,    alt: 'InSync Physical Therapy treatment room — wide view'   },
                { src: OFFICE_PHOTOS.treatmentRoomWindow1, alt: 'InSync Physical Therapy treatment room — window light' },
                { src: OFFICE_PHOTOS.treatmentRoomWindow2, alt: 'InSync Physical Therapy treatment room — equipment'    },
              ].map(({ src, alt }, i) => (
                <MotionSection key={i} variant="item">
                  <Box
                    sx={{
                      borderRadius:    3,
                      overflow:        'hidden',
                      position:        'relative',
                      aspectRatio:     '4/3',
                      backgroundColor: BRAND.gray100,
                      boxShadow:       '0 4px 16px rgba(0,61,89,0.07)',
                    }}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(max-width: 600px) 100vw, 33vw"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </MotionSection>
              ))}
            </Box>
          </MotionSection>
        </Container>
      </Box>

      {/* ── Insurance Trust Strip ───────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Insurance accepted"
        className="section-light"
        sx={{ py: { xs: 6, md: 8 }, borderTop: `1px solid ${BRAND.gray200}` }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display:        'flex',
              flexWrap:       'wrap',
              alignItems:     'center',
              justifyContent: 'space-between',
              gap:            4,
            }}
          >
            <Box sx={{ maxWidth: 580 }}>
              <Typography component="p" className="overline" sx={{ mb: 1.5 }}>
                Insurance & Access
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize:   { xs: '1.5rem', md: '2rem' },
                  mb:         1.5,
                  color:      BRAND.spaceNavy,
                }}
              >
                Most Major NYC Insurance Plans Accepted
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: BRAND.gray500, lineHeight: 1.75, mb: 3 }}
              >
                We accept Aetna, Blue Cross Blue Shield, Cigna, United Healthcare,
                Medicare, Fidelis, HIP, and NYC Employee Benefits. We verify your
                coverage before your first appointment. No referral needed for
                the first 30 days under New York State law.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                <Button
                  component={Link}
                  href="/insurance"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: '0.9rem' }} />}
                  sx={{
                    backgroundColor: BRAND.spaceNavy,
                    color:           BRAND.white,
                    fontWeight:      700,
                    '&:hover': { backgroundColor: BRAND.luxBlue },
                  }}
                >
                  Check Your Insurance
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
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
                  Request Appointment
                </Button>
              </Box>
            </Box>

            {/* Quick facts card */}
            <Box
              sx={{
                border:          `1px solid ${BRAND.gray200}`,
                borderRadius:    3,
                p:               3,
                backgroundColor: BRAND.offWhite,
                minWidth:        220,
                flexShrink:      0,
              }}
            >
              {[
                'No referral for first 30 days',
                'Benefits verified before your visit',
                'We handle all billing & paperwork',
                'Out-of-network options available',
              ].map((fact) => (
                <Box key={fact} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 1.5 }}>
                  <CheckCircleIcon sx={{ color: BRAND.neoBlue, fontSize: '0.9375rem', mt: '2px', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.875rem', color: BRAND.spaceNavy, lineHeight: 1.45 }}>
                    {fact}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── CTA Band ────────────────────────────────────────────────────── */}
      <CTABand
        headline="Ready to Start? Book a Full Evaluation."
        subline="We assess your injury, explain exactly what is happening, and build a plan designed around you — not a template."
        variant="navy"
      />
    </>
  );
}
