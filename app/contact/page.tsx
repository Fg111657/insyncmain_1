import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import LeadForm from '@/components/LeadForm';
import MotionSection from '@/components/MotionSection';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BRAND } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Request an Appointment — InSync Physical Therapy NYC',
  description:
    'Request a physical therapy appointment at InSync in Manhattan or Brooklyn. No referral required. Insurance verified before scheduling.',
  alternates: { canonical: 'https://insync-pt.com/contact' },
  openGraph: {
    title:       'Request an Appointment — InSync Physical Therapy NYC',
    description: 'No referral required. Insurance verified before scheduling.',
    url:         'https://insync-pt.com/contact',
    siteName:    'InSync Physical Therapy',
    locale:      'en_US',
    type:        'website',
  },
  robots: { index: true, follow: true },
};

const TRUST_CHIPS = [
  'No referral required',
  'Insurance verified same day',
  '1-on-1 every session',
];

const CARRIERS = [
  'Aetna', 'Blue Cross Blue Shield', 'Cigna', 'United Healthcare',
  'Medicare', 'Fidelis', 'HIP', 'NYC EPP', 'GHI',
];

const NEXT_STEPS = [
  { step: '01', title: 'Submit your request',          desc: 'Takes less than two minutes.' },
  { step: '02', title: 'We verify your insurance',     desc: 'Same business day — no guessing on cost.' },
  { step: '03', title: 'Our team calls to confirm',    desc: "You'll hear from us within one business day." },
  { step: '04', title: '60-minute 1-on-1 evaluation',  desc: 'Full assessment with Dr. Hassan.' },
];

const LOCATIONS_CONTACT = [
  {
    name:    'Manhattan — Bryant Park',
    address: '55 W 39th St, 3rd Floor, Suite 303, New York, NY 10018',
    maps:    'https://maps.google.com/?q=55+W+39th+St+New+York+NY+10018',
  },
  {
    name:    'Brooklyn',
    address: '1081 Gates Ave, Brooklyn, NY 11221',
    maps:    'https://maps.google.com/?q=1081+Gates+Ave+Brooklyn+NY+11221',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Request an appointment"
        sx={{
          pt:              { xs: 6, md: 10 },
          pb:              { xs: 5, md: 8 },
          backgroundColor: BRAND.deepPetrol,
        }}
      >
        <Container maxWidth="lg">
          <MotionSection>
            <Box sx={{ maxWidth: 640 }}>
              <Typography
                variant="h1"
                sx={{
                  color:      BRAND.white,
                  mb:         2,
                  fontSize:   { xs: '2.25rem', md: '3rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                No referral required. Insurance verified before you walk in.
              </Typography>
              <Typography
                sx={{
                  color:      'rgba(255,255,255,0.7)',
                  lineHeight: 1.7,
                  fontSize:   '1.0625rem',
                  maxWidth:   520,
                  mb:         4,
                }}
              >
                Fill out the form below. We verify your coverage and call you within one business day.
              </Typography>

              {/* Trust chips */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {TRUST_CHIPS.map((label) => (
                  <Chip
                    key={label}
                    label={label}
                    size="small"
                    icon={
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: '0.85rem !important', color: `${BRAND.sinopia} !important` }}
                      />
                    }
                    sx={{
                      backgroundColor: 'rgba(246,55,0,0.12)',
                      color:           BRAND.white,
                      fontWeight:      600,
                      fontSize:        '0.8rem',
                      height:          32,
                      borderRadius:    1,
                      border:          '1px solid rgba(246,55,0,0.25)',
                      '& .MuiChip-icon': { color: BRAND.sinopia },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </MotionSection>
        </Container>
      </Box>

      {/* ── Insurance strip ──────────────────────────────────────── */}
      <Box
        sx={{ py: 2.5, borderBottom: `1px solid ${BRAND.gray200}`, backgroundColor: '#F9FAFB' }}
        aria-label="Accepted insurance carriers"
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: { xs: 1, md: 1.5 } }}>
            <Typography
              sx={{
                fontSize:      '0.7rem',
                fontWeight:    700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         BRAND.gray500,
                mr:            0.5,
                flexShrink:    0,
              }}
            >
              Accepted Insurance
            </Typography>
            {CARRIERS.map((c) => (
              <Chip
                key={c}
                label={c}
                size="small"
                sx={{
                  backgroundColor: BRAND.white,
                  border:          `1px solid ${BRAND.gray200}`,
                  color:           BRAND.gray700,
                  fontSize:        '0.75rem',
                  fontWeight:      500,
                  height:          26,
                  borderRadius:    1,
                }}
              />
            ))}
            <Typography
              component="a"
              href="/insurance"
              sx={{
                fontSize:       '0.8rem',
                fontWeight:     600,
                color:          BRAND.sinopia,
                textDecoration: 'none',
                ml:             { xs: 0, md: 'auto' },
                display:        'flex',
                alignItems:     'center',
                gap:            0.375,
                flexShrink:     0,
                '&:hover':      { color: BRAND.sinopiaHover },
              }}
            >
              Full insurance info
              <ArrowForwardIcon sx={{ fontSize: '0.85rem' }} />
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Main Layout ───────────────────────────────────────────────── */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, backgroundColor: BRAND.white }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">

            {/* Form column */}
            <Grid item xs={12} md={7}>
              <MotionSection>
                <Typography
                  variant="h2"
                  sx={{ mb: 0.75, fontSize: { xs: '1.625rem', md: '2rem' }, color: BRAND.deepPetrol }}
                >
                  Request an Appointment
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: BRAND.gray500, mb: 4, lineHeight: 1.6 }}
                >
                  This is a request, not instant booking. We review your
                  information, verify your insurance, and call you to schedule.
                </Typography>
                <LeadForm />
              </MotionSection>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={5}>
              <MotionSection delay={0.12}>
                <Box sx={{ position: 'sticky', top: 100 }}>

                  {/* Call CTA */}
                  <Box
                    sx={{
                      backgroundColor: BRAND.deepPetrol,
                      borderRadius:    2,
                      p:               { xs: 3, md: 3.5 },
                      mb:              3,
                      display:         'flex',
                      flexDirection:   'column',
                      gap:             1.5,
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: BRAND.white }}>
                      Prefer to call or text?
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: 1.6 }}
                    >
                      Speak directly with our team. We answer insurance questions and schedule your visit.
                    </Typography>
                    <Typography
                      component="a"
                      href="tel:+19294194643"
                      sx={{
                        display:         'inline-flex',
                        alignItems:      'center',
                        gap:             1,
                        mt:              0.5,
                        px:              2.5,
                        py:              1.375,
                        borderRadius:    1,
                        backgroundColor: BRAND.sinopia,
                        color:           BRAND.white,
                        fontWeight:      700,
                        fontSize:        '1rem',
                        textDecoration:  'none',
                        width:           'fit-content',
                        transition:      'background-color 0.2s ease',
                        '&:hover': { backgroundColor: BRAND.sinopiaHover },
                      }}
                    >
                      <PhoneIcon sx={{ fontSize: '1.125rem' }} />
                      929-419-4643
                    </Typography>
                  </Box>

                  {/* What happens next */}
                  <Box
                    sx={{
                      border:          `1px solid ${BRAND.gray200}`,
                      borderRadius:    2,
                      p:               { xs: 3, md: 3.5 },
                      backgroundColor: '#F9FAFB',
                      mb:              3,
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{ fontWeight: 700, fontSize: '1rem', color: BRAND.deepPetrol, mb: 2.5 }}
                    >
                      What happens after you submit
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                      {NEXT_STEPS.map(({ step, title, desc }) => (
                        <Box key={step} sx={{ display: 'flex', gap: 1.75, alignItems: 'flex-start' }}>
                          <Box
                            sx={{
                              width:           28,
                              height:          28,
                              borderRadius:    '50%',
                              backgroundColor: 'rgba(246,55,0,0.08)',
                              display:         'flex',
                              alignItems:      'center',
                              justifyContent:  'center',
                              flexShrink:      0,
                            }}
                          >
                            <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, color: BRAND.deepPetrol, lineHeight: 1 }}>
                              {step}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: BRAND.deepPetrol, mb: 0.25, lineHeight: 1.3 }}>
                              {title}
                            </Typography>
                            <Typography sx={{ fontSize: '0.8125rem', color: BRAND.gray500, lineHeight: 1.55 }}>
                              {desc}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Locations */}
                  <Box
                    sx={{
                      border:          `1px solid ${BRAND.gray200}`,
                      borderRadius:    2,
                      p:               { xs: 3, md: 3.5 },
                      backgroundColor: '#F9FAFB',
                      mb:              3,
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{ fontWeight: 700, fontSize: '1rem', color: BRAND.deepPetrol, mb: 2.5 }}
                    >
                      Our Locations
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.75 }}>
                      {LOCATIONS_CONTACT.map(({ name, address, maps }) => (
                        <Box key={name} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                          <LocationOnIcon sx={{ color: BRAND.sinopia, fontSize: '1.125rem', mt: '2px', flexShrink: 0 }} />
                          <Box>
                            <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: BRAND.deepPetrol, mb: 0.25 }}>
                              {name}
                            </Typography>
                            <Typography sx={{ fontSize: '0.85rem', color: BRAND.gray500, lineHeight: 1.5, mb: 0.625 }}>
                              {address}
                            </Typography>
                            <Typography
                              component="a"
                              href={maps}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                fontSize:            '0.8rem',
                                fontWeight:          600,
                                color:               BRAND.sinopia,
                                textDecoration:      'underline',
                                textUnderlineOffset: 2,
                                '&:hover': { color: BRAND.sinopiaHover },
                              }}
                            >
                              Get directions →
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{ mt: 2.5, pt: 2.5, borderTop: `1px solid ${BRAND.gray200}`, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTimeIcon sx={{ fontSize: '1rem', color: BRAND.sinopia, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '0.8125rem', color: BRAND.gray500, lineHeight: 1.5 }}>
                        We respond within one business day.
                      </Typography>
                    </Box>
                  </Box>

                  {/* Insurance */}
                  <Box
                    sx={{
                      border:          `1px solid rgba(246,55,0,0.2)`,
                      borderRadius:    2,
                      p:               { xs: 2.75, md: 3 },
                      backgroundColor: 'rgba(246,55,0,0.03)',
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: '0.9375rem', color: BRAND.deepPetrol, mb: 0.875 }}>
                      Questions about coverage?
                    </Typography>
                    <Typography variant="body2" sx={{ color: BRAND.gray500, lineHeight: 1.65, fontSize: '0.8375rem', mb: 1.5 }}>
                      We accept Aetna, BCBS, Cigna, United Healthcare, Medicare, Fidelis, HIP, NYC EPP, and GHI. We verify benefits before scheduling.
                    </Typography>
                    <Typography
                      component="a"
                      href="/insurance"
                      sx={{
                        fontSize:       '0.8125rem',
                        fontWeight:     600,
                        color:          BRAND.sinopia,
                        textDecoration: 'none',
                        display:        'flex',
                        alignItems:     'center',
                        gap:            0.375,
                        width:          'fit-content',
                        '&:hover':      { color: BRAND.sinopiaHover },
                      }}
                    >
                      View full insurance information
                      <ArrowForwardIcon sx={{ fontSize: '0.85rem' }} />
                    </Typography>
                  </Box>

                </Box>
              </MotionSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Mobile sticky call bar ──────────────────────────────────── */}
      <Box
        sx={{
          display:         { xs: 'flex', md: 'none' },
          position:        'fixed',
          bottom:          0,
          left:            0,
          right:           0,
          zIndex:          1200,
          backgroundColor: BRAND.deepPetrol,
          borderTop:       '1px solid rgba(255,255,255,0.1)',
          px:              3,
          py:              1.75,
          alignItems:      'center',
          justifyContent:  'space-between',
          gap:             2,
        }}
        aria-label="Quick call bar"
      >
        <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
          Call or text us directly.
        </Typography>
        <Typography
          component="a"
          href="tel:+19294194643"
          sx={{
            display:         'inline-flex',
            alignItems:      'center',
            gap:             0.75,
            px:              2.25,
            py:              1.125,
            borderRadius:    1,
            backgroundColor: BRAND.sinopia,
            color:           BRAND.white,
            fontWeight:      700,
            fontSize:        '0.9375rem',
            textDecoration:  'none',
            flexShrink:      0,
          }}
        >
          <PhoneIcon sx={{ fontSize: '1rem' }} />
          929-419-4643
        </Typography>
      </Box>
    </>
  );
}
