import type { Metadata } from 'next';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import TeamSection from '@/components/TeamSection';
import CTABand from '@/components/CTABand';
import { BRAND } from '@/lib/theme';
import { PHYSICIAN_SCHEMA } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About InSync Physical Therapy — Dr. Hassan & Team, NYC',
  description:
    'Meet Dr. Hassan and the InSync Physical Therapy team. Doctor of Physical Therapy with 9+ years of experience providing one-on-one orthopedic and sports rehabilitation in Brooklyn and Bryant Park, NYC.',
  alternates: { canonical: 'https://insync-pt.com/about' },
};

const PHILOSOPHY_PILLARS = [
  {
    title:   'One-on-One Attention',
    body:    'Every session is with your physical therapist — not an aide, not a shared appointment. You receive full clinical attention for the duration of your treatment.',
  },
  {
    title:   'Specific, Not Generic',
    body:    'Treatment plans are built around your injury, your body mechanics, and your goals. There are no one-size-fits-all protocols at InSync.',
  },
  {
    title:   'Objective Progress Tracking',
    body:    'We use clinical-grade diagnostics — including VALD ForceDecks force plates and HumanTrak motion analysis — to measure your progress and determine readiness for return to activity.',
  },
  {
    title:   'Rehab to Performance',
    body:    'Recovery doesn\'t end at discharge. We bridge the gap from formal rehabilitation to full strength and performance through our partnership with Piero Alessi.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── JSON-LD: Physician ──────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PHYSICIAN_SCHEMA) }}
      />

      {/* ── Page Hero ───────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          backgroundColor: BRAND.spaceNavy,
          py:              { xs: 10, md: 14 },
          position:        'relative',
          overflow:        'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 640 }}>
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
              About InSync
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
              Clinicians Who Understand Your Goals
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color:      'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                fontSize:   '1.0625rem',
                maxWidth:   540,
              }}
            >
              InSync Physical Therapy was built on the belief that great
              physical therapy should be specific, attentive, and outcome-driven
              — not high-volume and impersonal.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Dr. Hassan Feature ─────────────────────────────────────── */}
      <Box
        component="section"
        sx={{ py: { xs: 10, md: 16 }, backgroundColor: BRAND.white }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            {/* Photo */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow:     'hidden',
                  position:     'relative',
                  aspectRatio:  '4/5',
                  backgroundColor: BRAND.gray100,
                }}
              >
                <Image
                  src="/assets/Hassan .jpeg"
                  alt="Dr. Hassan — Doctor of Physical Therapy at InSync"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 45vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
                {/* Credential badge overlay */}
                <Box
                  sx={{
                    position:        'absolute',
                    bottom:          20,
                    left:            20,
                    right:           20,
                    backgroundColor: 'rgba(0,38,42,0.9)',
                    borderRadius:    3,
                    p:               2.5,
                    backdropFilter:  'blur(8px)',
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 800, fontSize: '1.0625rem', color: BRAND.white, lineHeight: 1.2 }}
                  >
                    Dr. Hassan
                  </Typography>
                  <Typography
                    sx={{ fontSize: '0.8rem', color: BRAND.neoBlue, fontWeight: 600, mt: 0.5 }}
                  >
                    Doctor of Physical Therapy
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mt: 1.5 }}>
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
            </Grid>

            {/* Content */}
            <Grid item xs={12} md={7}>
              <Typography component="p" className="overline" sx={{ mb: 2 }}>
                Lead Clinician
              </Typography>
              <Typography
                variant="h2"
                sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}
              >
                Meet Dr. Hassan
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: BRAND.gray700, lineHeight: 1.8, mb: 2.5, fontSize: '1.0625rem' }}
              >
                Dr. Hassan is a Doctor of Physical Therapy with over nine years
                of clinical experience treating orthopedic injuries,
                sports-related conditions, and chronic pain throughout New York
                City. He holds his degree from Touro University and has built a
                practice centered on individualized, evidence-based care.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: BRAND.gray700, lineHeight: 1.8, mb: 2.5 }}
              >
                His approach focuses on identifying the root cause of pain and
                dysfunction — not just treating symptoms. Using both hands-on
                manual therapy and advanced diagnostics, Dr. Hassan develops
                treatment plans that are specific to each patient&apos;s body,
                goals, and activity level.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: BRAND.gray700, lineHeight: 1.8, mb: 4 }}
              >
                Whether you are recovering from an ACL reconstruction, managing
                chronic back pain, or working to return to sport after an
                injury, Dr. Hassan will treat you as an individual — not as a
                chart to be processed.
              </Typography>

              {/* Specialty chips */}
              <Box>
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
                  {[
                    'Orthopedic Rehabilitation',
                    'Sports Injury Recovery',
                    'Manual Therapy',
                    'Chronic Pain',
                    'Post-Surgical Rehab',
                    'Movement Analysis',
                  ].map((s) => (
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
                      <Typography
                        sx={{ fontSize: '0.875rem', fontWeight: 500, color: BRAND.spaceNavy }}
                      >
                        {s}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Treatment Philosophy ────────────────────────────────────── */}
      <Box
        component="section"
        sx={{ py: { xs: 10, md: 14 }, backgroundColor: BRAND.offWhite }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: 560 }}>
            <Typography component="p" className="overline" sx={{ mb: 2 }}>
              Our Approach
            </Typography>
            <Typography
              variant="h2"
              sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}
            >
              What Makes InSync Different
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: BRAND.gray500, lineHeight: 1.7 }}
            >
              InSync is not a high-volume clinic. Every patient receives
              direct, one-on-one care from a licensed physical therapist from
              evaluation through discharge.
            </Typography>
          </Box>

          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap:                 3,
            }}
          >
            {PHILOSOPHY_PILLARS.map(({ title, body }) => (
              <Box
                key={title}
                sx={{
                  border:          `1px solid ${BRAND.gray200}`,
                  borderRadius:    3,
                  p:               { xs: 3, md: 4 },
                  backgroundColor: BRAND.white,
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
                    fontWeight: 700,
                    fontSize:   '1.0625rem',
                    color:      BRAND.spaceNavy,
                    mb:         1.25,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: BRAND.gray500, lineHeight: 1.7 }}
                >
                  {body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Full Team ───────────────────────────────────────────────── */}
      <TeamSection />

      {/* ── Clinic Photos ───────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 12 }, backgroundColor: BRAND.white }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Typography component="p" className="overline" sx={{ mb: 2 }}>
            The Clinic
          </Typography>
          <Typography
            variant="h2"
            sx={{ mb: 5, fontSize: { xs: '2rem', md: '2.5rem' }, maxWidth: 480 }}
          >
            A Clean, Private Environment
          </Typography>
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
              gap:                 2,
            }}
          >
            {[
              '/assets/hassan-pt/photos/office/office-treatment-room-wide-01.jpg',
              '/assets/hassan-pt/photos/office/office-treatment-room-window-01.jpg',
              '/assets/hassan-pt/photos/office/office-treatment-room-window-02.jpg',
            ].map((src, i) => (
              <Box
                key={src}
                sx={{
                  borderRadius: 3,
                  overflow:     'hidden',
                  position:     'relative',
                  aspectRatio:  '4/3',
                  backgroundColor: BRAND.gray100,
                }}
              >
                <Image
                  src={src}
                  alt={`InSync Physical Therapy clinic — treatment room ${i + 1}`}
                  fill
                  sizes="(max-width: 600px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <CTABand
        headline="Start with a Full Evaluation"
        subline="We assess your injury, explain exactly what's happening, and build a plan designed around you."
        variant="navy"
      />
    </>
  );
}
