import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { BRAND } from '@/lib/theme';
import MotionSection from '@/components/MotionSection';

const BENEFITS = [
  {
    title: 'Not another PT mill',
    description:
      'No aids or handoffs. Your therapist runs every visit.',
  },
  {
    title: 'Custom plans built for you',
    description:
      'No generic protocols. Every treatment plan is designed specifically for your body and goals.',
  },
  {
    title: 'Insurance verified before your visit',
    description:
      'We work with most major plans to make high-quality care accessible and stress-free.',
  },
  {
    title: 'No referrals or prescription needed',
    description:
      'You can start therapy right away.',
  },
  {
    title: 'Convenient locations',
    description:
      'Two clinics in Manhattan and Brooklyn — easy to get to from anywhere in the city.',
  },
  {
    title: 'Highly rated',
    description:
      'Top-rated on ZocDoc and Google by real patients.',
  },
] as const;

export default function WhyChooseSection() {
  return (
    <Box
      component="section"
      aria-label="Why New Yorkers choose InSync"
      sx={{
        py:              { xs: 8, md: 12 },
        backgroundColor: BRAND.offWhite,
      }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <MotionSection>
          <Typography
            component="h2"
            sx={{
              fontWeight:    800,
              fontSize:      { xs: '2rem', md: '2.625rem' },
              lineHeight:    1.1,
              color:         BRAND.spaceNavy,
              mb:            2,
              textAlign:     'center',
              letterSpacing: '-0.02em',
            }}
          >
            Why New Yorkers Choose InSync
          </Typography>

          <Typography
            sx={{
              fontSize:   { xs: '1.0625rem', md: '1.125rem' },
              lineHeight: 1.7,
              color:      BRAND.gray700,
              maxWidth:   720,
              mx:         'auto',
              mb:         { xs: 5, md: 7 },
              textAlign:  'center',
            }}
          >
            We believe movement is medicine. Whether you&apos;re a busy professional
            glued to your desk, a runner chasing your next PR, a new mom navigating
            postpartum changes, or a senior wanting to stay independent — our
            personalized one-on-one care helps you heal faster, move better, and
            feel like yourself again.
          </Typography>
        </MotionSection>

        {/* Benefits grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {BENEFITS.map(({ title, description }) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <MotionSection>
                <Box
                  sx={{
                    display:    'flex',
                    gap:        2,
                    alignItems: 'flex-start',
                  }}
                >
                  <CheckCircleOutlineIcon
                    aria-hidden="true"
                    sx={{
                      color:      BRAND.neoBlue,
                      fontSize:   '1.5rem',
                      mt:         0.25,
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        fontSize:   '1.0625rem',
                        color:      BRAND.spaceNavy,
                        mb:         0.5,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize:   '0.9375rem',
                        lineHeight: 1.6,
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
      </Container>
    </Box>
  );
}
