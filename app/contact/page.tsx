import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LeadForm from '@/components/LeadForm';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { BRAND } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Request an Appointment — InSync Physical Therapy NYC',
  description:
    'Request a physical therapy appointment at InSync in Brooklyn or Bryant Park, NYC. We verify your insurance before scheduling and follow up within one business day.',
  alternates: { canonical: 'https://insync-pt.com/contact' },
  robots:     { index: true, follow: true },
};

const CONTACT_DETAILS = [
  {
    icon:    <PhoneIcon sx={{ fontSize: '1.125rem', color: BRAND.neoBlue }} />,
    label:   'Phone',
    value:   '929-419-4643',
    href:    'tel:+19294194643',
  },
  {
    icon:    <EmailIcon sx={{ fontSize: '1.125rem', color: BRAND.neoBlue }} />,
    label:   'Email',
    value:   'insyncpt.manager@gmail.com',
    href:    'mailto:insyncpt.manager@gmail.com',
  },
  {
    icon:    <AccessTimeIcon sx={{ fontSize: '1.125rem', color: BRAND.neoBlue }} />,
    label:   'Response Time',
    value:   'Within one business day',
    href:    null,
  },
];

const LOCATIONS_CONTACT = [
  {
    name:    'Brooklyn',
    address: '1081 Gates Ave, Brooklyn, NY 11221',
    maps:    'https://maps.google.com/?q=1081+Gates+Ave+Brooklyn+NY+11221',
  },
  {
    name:    'Manhattan',
    address: '55 W 39th St, 3rd Floor, Suite 303, New York, NY 10018',
    maps:    'https://maps.google.com/?q=55+W+39th+St+New+York+NY+10018',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ──────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          backgroundColor: BRAND.spaceNavy,
          py:              { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 580 }}>
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
              Request Appointment
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
              Let&apos;s Get You Started
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color:      'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                fontSize:   '1.0625rem',
                maxWidth:   500,
              }}
            >
              Fill out the form and a member of our team will contact you to
              confirm your appointment. We verify your insurance benefits
              before scheduling so there are no surprises.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Main Contact Layout ─────────────────────────────────────── */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 14 }, backgroundColor: BRAND.white }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }}>

            {/* ── Form Column ─────────────────────────────────────── */}
            <Grid item xs={12} md={7}>
              <Typography
                variant="h2"
                sx={{
                  mb:       0.75,
                  fontSize: { xs: '1.625rem', md: '2rem' },
                }}
              >
                Request an Appointment
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: BRAND.gray500, mb: 4, lineHeight: 1.6 }}
              >
                This is a request, not instant booking. We will review your
                information, verify insurance, and contact you to schedule.
              </Typography>

              <LeadForm />
            </Grid>

            {/* ── Info Column ─────────────────────────────────────── */}
            <Grid item xs={12} md={5}>
              <Box sx={{ position: 'sticky', top: 100 }}>
                {/* Contact Details */}
                <Box
                  sx={{
                    border:          `1px solid ${BRAND.gray200}`,
                    borderRadius:    4,
                    p:               { xs: 3, md: 4 },
                    backgroundColor: BRAND.offWhite,
                    mb:              3,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize:   '1.0625rem',
                      color:      BRAND.spaceNavy,
                      mb:         3,
                    }}
                  >
                    Contact Information
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
                      <Box key={label} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <Box sx={{ mt: '2px', flexShrink: 0 }}>{icon}</Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize:      '0.72rem',
                              fontWeight:    700,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color:         BRAND.gray500,
                              mb:            0.25,
                            }}
                          >
                            {label}
                          </Typography>
                          {href ? (
                            <Typography
                              component="a"
                              href={href}
                              sx={{
                                fontWeight:  500,
                                fontSize:    '0.9375rem',
                                color:       BRAND.spaceNavy,
                                textDecoration: 'none',
                                '&:hover': { color: BRAND.neoBlue },
                              }}
                            >
                              {value}
                            </Typography>
                          ) : (
                            <Typography
                              sx={{
                                fontWeight: 500,
                                fontSize:   '0.9375rem',
                                color:      BRAND.spaceNavy,
                              }}
                            >
                              {value}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Locations */}
                <Box
                  sx={{
                    border:          `1px solid ${BRAND.gray200}`,
                    borderRadius:    4,
                    p:               { xs: 3, md: 4 },
                    backgroundColor: BRAND.offWhite,
                    mb:              3,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize:   '1.0625rem',
                      color:      BRAND.spaceNavy,
                      mb:         3,
                    }}
                  >
                    Our Locations
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {LOCATIONS_CONTACT.map(({ name, address, maps }) => (
                      <Box key={name} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <LocationOnIcon
                          sx={{ color: BRAND.neoBlue, fontSize: '1.125rem', mt: '2px', flexShrink: 0 }}
                        />
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize:   '0.9375rem',
                              color:      BRAND.spaceNavy,
                              mb:         0.25,
                            }}
                          >
                            {name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize:   '0.875rem',
                              color:      BRAND.gray500,
                              lineHeight: 1.5,
                              mb:         0.75,
                            }}
                          >
                            {address}
                          </Typography>
                          <Typography
                            component="a"
                            href={maps}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              fontSize:       '0.8rem',
                              fontWeight:     600,
                              color:          BRAND.neoBlue,
                              textDecoration: 'underline',
                              textUnderlineOffset: 2,
                              '&:hover': { color: BRAND.neoBlueHover },
                            }}
                          >
                            Get directions →
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Insurance note */}
                <Box
                  sx={{
                    border:          `1px solid ${BRAND.gray200}`,
                    borderRadius:    4,
                    p:               { xs: 3, md: 3.5 },
                    backgroundColor: 'rgba(14,197,230,0.04)',
                    borderColor:     'rgba(14,197,230,0.2)',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize:   '0.9375rem',
                      color:      BRAND.spaceNavy,
                      mb:         1,
                    }}
                  >
                    About Insurance
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: BRAND.gray500, lineHeight: 1.65, fontSize: '0.875rem' }}
                  >
                    We accept Aetna, Blue Cross Blue Shield, Cigna, United
                    Healthcare, Medicare, Fidelis, HIP, and NYC EPP/GHI. We
                    verify your benefits before scheduling. Have questions?
                    Call us directly at 929-419-4643.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
