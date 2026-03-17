import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';
import MotionSection from '@/components/MotionSection';

const STEPS = [
  {
    number: '01',
    title:  '60-Minute Evaluation',
    desc:   'Your first visit is a full hour. Not a 15-minute intake. We have time to understand your injury, your history, and what you are trying to get back to.',
  },
  {
    number: '02',
    title:  'Movement and Strength Testing',
    desc:   'We use force plates and motion capture to measure exactly where you are. Objective baselines from day one so we know what progress actually looks like.',
  },
  {
    number: '03',
    title:  'Clear Recovery Plan',
    desc:   'You leave your first visit with a real plan. Not just exercises on a printout. A timeline, a goal, and a clear explanation of what we are doing and why.',
  },
  {
    number: '04',
    title:  'Treatment Starts Immediately',
    desc:   'We do not spend multiple sessions on paperwork. Hands-on treatment and targeted exercise begin in your first visit.',
  },
  {
    number: '05',
    title:  'Insurance Confirmed Beforehand',
    desc:   'We verify your benefits before your appointment so there are no surprises. You know what to expect before you walk in.',
  },
];

export default function FirstVisitSection() {
  return (
    <Box
      component="section"
      aria-label="What your first visit looks like"
      className="section-navy"
      sx={{ py: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display:             'grid',
            gridTemplateColumns: { xs: '1fr', md: '4fr 8fr' },
            gap:                 { xs: 6, md: 10 },
            alignItems:          'flex-start',
          }}
        >
          {/* ── Left: sticky headline ────────────────────────────── */}
          <MotionSection>
          <Box sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
            <Typography component="p" sx={{
              display:       'inline-flex',
              alignItems:    'center',
              gap:           0.75,
              fontSize:      '0.72rem',
              fontWeight:    700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color:         BRAND.neoBlue,
              mb:            2,
            }}>
              <Box component="span" aria-hidden="true" sx={{
                display: 'inline-block', width: 20, height: 2,
                backgroundColor: BRAND.neoBlue, borderRadius: 1,
              }} />
              Your First Visit
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color:      BRAND.white,
                fontSize:   { xs: '2rem', md: '2.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb:         2.5,
              }}
            >
              What to Expect When You Come In.
            </Typography>

            <Typography
              sx={{
                color:      'rgba(255,255,255,0.6)',
                lineHeight: 1.75,
                fontSize:   { xs: '1rem', md: '1.0625rem' },
              }}
            >
              Most patients are nervous before their first visit. They
              do not know what to expect. Here is exactly what happens.
            </Typography>
          </Box>
          </MotionSection>

          {/* ── Right: animated vertical timeline ───────────────── */}
          <MotionSection variant="list">
          <Box sx={{ position: 'relative' }}>

            {/* Timeline vertical spine */}
            <Box
              aria-hidden="true"
              sx={{
                position:        'absolute',
                left:            { xs: 19, md: 21 },  // centres on the node circle
                top:             0,
                bottom:          0,
                width:           2,
                backgroundColor: 'rgba(14,197,230,0.15)',
                borderRadius:    1,
                zIndex:          0,
              }}
            />

            {/* Steps */}
            <Box
              component="ol"
              aria-label="First visit steps"
              sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              {STEPS.map(({ number, title, desc }) => (
                <MotionSection key={number} variant="item">
                <Box
                  component="li"
                  sx={{
                    display:  'flex',
                    gap:      2.5,
                    position: 'relative',
                    zIndex:   1,
                  }}
                >
                  {/* Numbered circle node */}
                  <Box
                    aria-hidden="true"
                    sx={{
                      width:           40,
                      height:          40,
                      borderRadius:    '50%',
                      backgroundColor: 'rgba(14,197,230,0.12)',
                      border:          `2px solid ${BRAND.neoBlue}`,
                      display:         'flex',
                      alignItems:      'center',
                      justifyContent:  'center',
                      flexShrink:      0,
                      zIndex:          1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight:    800,
                        fontSize:      '0.75rem',
                        color:         BRAND.neoBlue,
                        letterSpacing: '-0.02em',
                        lineHeight:    1,
                      }}
                    >
                      {number}
                    </Typography>
                  </Box>

                  {/* Card */}
                  <Box
                    sx={{
                      flex:            1,
                      p:               { xs: 3, md: 3.5 },
                      borderRadius:    3,
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border:          '1px solid rgba(255,255,255,0.07)',
                      transition:      'all 0.2s ease',
                      mb:              0.5,
                      '&:hover': {
                        backgroundColor: 'rgba(14,197,230,0.07)',
                        borderColor:     'rgba(14,197,230,0.2)',
                      },
                    }}
                  >
                    <Typography
                      component="h3"
                      style={{ color: BRAND.white }}
                      sx={{
                        fontWeight: 700,
                        fontSize:   { xs: '1rem', md: '1.0625rem' },
                        color:      BRAND.white,
                        lineHeight: 1.3,
                        mb:         1,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color:      'rgba(255,255,255,0.6)',
                        lineHeight: 1.7,
                        fontSize:   '0.9rem',
                      }}
                    >
                      {desc}
                    </Typography>
                  </Box>
                </Box>
                </MotionSection>
              ))}
            </Box>

          </Box>
          </MotionSection>
        </Box>
      </Container>
    </Box>
  );
}
