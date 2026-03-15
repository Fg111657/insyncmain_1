import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { BRAND } from '@/lib/theme';

const MILL_PROBLEMS = [
  '3 or 4 patients per therapist at the same time',
  'You get handed a sheet of exercises',
  'An aide watches you. The therapist checks in for five minutes.',
  'Generic protocols. No real assessment.',
];

const INSYNC_DIFF = [
  'Every session is one-on-one with your physical therapist',
  'Your treatment is built around your specific injury and goals',
  'No aides running your sessions. No handoffs.',
  'Progress is measured with objective data, not guesses',
];

export default function PTMillSection() {
  return (
    <Box
      component="section"
      aria-label="Why InSync is different from PT mills"
      className="section-navy"
      sx={{ py: { xs: 10, md: 14 } }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography component="p" style={{ color: '#0EC5E6' }} sx={{
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
            How We Work
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color:      BRAND.white,
              fontSize:   { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              lineHeight: 1.1,
              mb:         1.5,
            }}
          >
            Not Another PT Mill.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color:    'rgba(255,255,255,0.65)',
              maxWidth: 560,
              mx:       'auto',
              lineHeight: 1.7,
              fontSize: { xs: '1rem', md: '1.0625rem' },
            }}
          >
            Most NYC clinics book several patients per therapist at the same
            time. That is not how we work.
          </Typography>
        </Box>

        {/* Two-column comparison */}
        <Box
          sx={{
            display:             'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap:                 { xs: 3, md: 4 },
          }}
        >
          {/* Left: The mill problem */}
          <Box
            sx={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              border:          '1px solid rgba(255,255,255,0.08)',
              borderRadius:    3,
              p:               { xs: 3.5, md: 4 },
            }}
          >
            <Typography
              sx={{
                fontWeight:    700,
                fontSize:      '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         'rgba(255,255,255,0.35)',
                mb:            2.5,
              }}
            >
              The typical NYC PT clinic
            </Typography>

            {MILL_PROBLEMS.map((item) => (
              <Box
                key={item}
                sx={{
                  display:    'flex',
                  alignItems: 'flex-start',
                  gap:        1.5,
                  mb:         2,
                }}
              >
                <CancelOutlinedIcon
                  sx={{
                    color:     'rgba(255,255,255,0.25)',
                    fontSize:  '1.1rem',
                    mt:        '2px',
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    color:      'rgba(255,255,255,0.5)',
                    fontSize:   '0.9375rem',
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Right: How InSync works */}
          <Box
            sx={{
              backgroundColor: 'rgba(14,197,230,0.06)',
              border:          `1px solid rgba(14,197,230,0.2)`,
              borderRadius:    3,
              p:               { xs: 3.5, md: 4 },
            }}
          >
            <Typography
              style={{ color: '#0EC5E6' }}
              sx={{
                fontWeight:    700,
                fontSize:      '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         BRAND.neoBlue,
                mb:            2.5,
              }}
            >
              How InSync works
            </Typography>

            {INSYNC_DIFF.map((item) => (
              <Box
                key={item}
                sx={{
                  display:    'flex',
                  alignItems: 'flex-start',
                  gap:        1.5,
                  mb:         2,
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{
                    color:     BRAND.neoBlue,
                    fontSize:  '1.1rem',
                    mt:        '2px',
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    color:      'rgba(255,255,255,0.85)',
                    fontSize:   '0.9375rem',
                    lineHeight: 1.6,
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
