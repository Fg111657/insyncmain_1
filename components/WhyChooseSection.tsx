'use client';

/**
 * WhyChooseSection — RALPH spec
 * 6 equal feature boxes on white background. Clean, minimal.
 * No 3D tilt, no gradient glows.
 */

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { BRAND } from '@/lib/theme';
import MotionSection from '@/components/MotionSection';

const BENEFITS = [
  {
    title: 'Not a PT mill',
    description:
      'No aides. No handoffs. Your therapist treats you for the full session, every visit.',
  },
  {
    title: 'Plans built for you',
    description:
      'Every treatment plan is designed around your body, your injury, and your goals. No generic protocols.',
  },
  {
    title: 'Insurance verified upfront',
    description:
      'We verify your coverage before your first visit. We work with most major plans.',
  },
  {
    title: 'No referral needed',
    description:
      'In New York, you can start physical therapy without a prescription or referral.',
  },
  {
    title: 'Two convenient locations',
    description:
      'Manhattan (Bryant Park) and Brooklyn (Bushwick). Easy subway access from every borough.',
  },
  {
    title: 'Highly rated',
    description:
      '5.0 stars on ZocDoc and Google. Rated by real patients.',
  },
] as const;

export default function WhyChooseSection() {
  return (
    <Box
      component="section"
      aria-label="Why choose InSync"
      sx={{
        py:              { xs: 5, md: 7 },
        backgroundColor: BRAND.white,
      }}
    >
      <Container maxWidth="lg">
        <MotionSection>
          <Typography
            component="h2"
            sx={{
              fontWeight:    800,
              fontSize:      { xs: '1.75rem', md: '2.125rem' },
              lineHeight:    1.1,
              color:         BRAND.deepPetrol,
              mb:            { xs: 3, md: 4 },
              textAlign:     'center',
              letterSpacing: '-0.02em',
            }}
          >
            Why New Yorkers choose InSync
          </Typography>
        </MotionSection>

        <MotionSection variant="list">
          <Grid container spacing={{ xs: 1.5, md: 2 }}>
            {BENEFITS.map(({ title, description }) => (
              <Grid item xs={12} sm={6} md={4} key={title}>
                <MotionSection variant="item">
                  <Box
                    sx={{
                      display:         'flex',
                      gap:             1.5,
                      alignItems:      'flex-start',
                      backgroundColor: '#F9FAFB',
                      borderRadius:    1.5,
                      p:               { xs: 2, md: 2.5 },
                      height:          '100%',
                      border:          '1px solid',
                      borderColor:     BRAND.gray200,
                      transition:      'border-color 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        borderColor: BRAND.sinopia,
                        boxShadow:   '0 2px 12px rgba(0,38,42,0.06)',
                      },
                    }}
                  >
                    <CheckCircleOutlineIcon
                      aria-hidden="true"
                      sx={{
                        color:      BRAND.sinopia,
                        fontSize:   '1.15rem',
                        mt:         '2px',
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize:   '0.9375rem',
                          color:      BRAND.deepPetrol,
                          mb:         0.25,
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize:   '0.875rem',
                          lineHeight: 1.55,
                          color:      BRAND.gray700,
                        }}
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </MotionSection>
              </Grid>
            ))}
          </Grid>
        </MotionSection>
      </Container>
    </Box>
  );
}
