'use client';

/**
 * WhyChooseSection
 * Benefit cards with 3D tilt hover, multi-layer shadows, staggered reveals,
 * and dimensional layering.
 */

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';
import { BRAND } from '@/lib/theme';
import { ELEVATION, EASE, TIMING } from '@/lib/depth-tokens';
import { useTiltHover } from '@/hooks/useTiltHover';
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

/* ── Individual benefit card with 3D tilt ─────────────────────────────── */
function BenefitCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const tilt = useTiltHover(4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: TIMING.smooth,
        delay: index * 0.08,
        ease: EASE.out,
      }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      animate={tilt.animate}
      style={tilt.style}
    >
      <Box
        sx={{
          display:         'flex',
          gap:             2,
          alignItems:      'flex-start',
          backgroundColor: BRAND.white,
          borderRadius:    3,
          p:               { xs: 2.5, md: 3 },
          boxShadow:       ELEVATION[1],
          transition:      `box-shadow ${TIMING.normal}s ease, transform ${TIMING.normal}s ease`,
          height:          '100%',
          '&:hover': {
            boxShadow: ELEVATION[2],
            '& .benefit-icon': {
              filter: 'drop-shadow(0 0 8px rgba(14,197,230,0.4))',
            },
          },
        }}
      >
        <CheckCircleOutlineIcon
          aria-hidden="true"
          className="benefit-icon"
          sx={{
            color:      BRAND.neoBlue,
            fontSize:   '1.5rem',
            mt:         0.25,
            flexShrink: 0,
            transition: `filter ${TIMING.normal}s ease`,
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
    </motion.div>
  );
}

export default function WhyChooseSection() {
  return (
    <Box
      component="section"
      aria-label="Why New Yorkers choose InSync"
      sx={{
        position:        'relative',
        py:              { xs: 8, md: 12 },
        backgroundColor: BRAND.offWhite,
        overflow:        'hidden',
      }}
    >
      {/* Subtle depth gradient at bottom */}
      <Box
        aria-hidden="true"
        sx={{
          position:   'absolute',
          bottom:     0,
          left:       '50%',
          transform:  'translateX(-50%)',
          width:      '80%',
          height:     '50%',
          background: 'radial-gradient(ellipse at center bottom, rgba(14,197,230,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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

        {/* Benefits grid with 3D cards */}
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {BENEFITS.map(({ title, description }, i) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <BenefitCard title={title} description={description} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
