import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { BRAND } from '@/lib/theme';

const INJURIES = [
  'ACL and meniscus tears',
  'Rotator cuff injuries',
  'AC-joint shoulder pain',
  'Neck and spine strain',
  'Hip and knee instability',
  'Elbow and wrist sprains',
];

const SPORTS = ['BJJ', 'Muay Thai', 'MMA', 'Wrestling', 'Judo', 'Boxing', 'Powerlifting', 'CrossFit'];

export default function CombatSportsSection() {
  return (
    <Box
      component="section"
      aria-label="Combat sports and BJJ physical therapy"
      sx={{
        py:              { xs: 10, md: 14 },
        backgroundColor: '#F7F9FB',
      }}
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
          {/* Left: Copy */}
          <Box>
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
              Combat Sports Rehab
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize:   { xs: '2rem', md: '2.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb:         2.5,
                color:      BRAND.spaceNavy,
              }}
            >
              Train Around Injuries.
              <Box component="span" sx={{ display: 'block', color: BRAND.neoBlue }}>
                Stay on the Mat.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: BRAND.gray500, lineHeight: 1.75, mb: 2.5 }}
            >
              We work with grapplers, fighters, and athletes who do not want to
              stop training while they recover. Our approach focuses on
              intelligent progression. We modify your training so you can keep
              moving safely while your body heals.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: BRAND.gray500, lineHeight: 1.75, mb: 4 }}
            >
              Whether you are preparing for a competition or just trying to get
              back on the mats, we build a plan around your sport and your
              timeline.
            </Typography>

            {/* Sport tags */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {SPORTS.map((sport) => (
                <Box
                  key={sport}
                  sx={{
                    backgroundColor: 'rgba(14,197,230,0.1)',
                    border:          `1px solid rgba(14,197,230,0.2)`,
                    borderRadius:    20,
                    px:              2,
                    py:              0.625,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:   '0.8rem',
                      fontWeight: 600,
                      color:      BRAND.spaceNavy,
                    }}
                  >
                    {sport}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right: Injury list card */}
          <Box
            sx={{
              backgroundColor: BRAND.white,
              border:          `1px solid ${BRAND.gray200}`,
              borderRadius:    4,
              p:               { xs: 3.5, md: 5 },
              boxShadow:       '0 4px 32px rgba(0,61,89,0.06)',
            }}
          >
            <Typography
              sx={{
                fontWeight:    700,
                fontSize:      '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         BRAND.neoBlue,
                mb:            3,
              }}
            >
              Common injuries we treat
            </Typography>

            {INJURIES.map((injury) => (
              <Box
                key={injury}
                sx={{
                  display:    'flex',
                  alignItems: 'center',
                  gap:        1.5,
                  py:         1.25,
                  borderBottom: `1px solid ${BRAND.gray200}`,
                  '&:last-child': { borderBottom: 'none', pb: 0 },
                }}
              >
                <FiberManualRecordIcon
                  sx={{ fontSize: '0.45rem', color: BRAND.neoBlue, flexShrink: 0 }}
                />
                <Typography
                  sx={{
                    fontSize:   '0.9375rem',
                    fontWeight: 500,
                    color:      BRAND.spaceNavy,
                    lineHeight: 1.5,
                  }}
                >
                  {injury}
                </Typography>
              </Box>
            ))}

            {/* Callout */}
            <Box
              sx={{
                mt:              3,
                backgroundColor: 'rgba(14,197,230,0.06)',
                borderRadius:    2,
                border:          `1px solid rgba(14,197,230,0.15)`,
                p:               2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize:   '0.9rem',
                  color:      BRAND.spaceNavy,
                  lineHeight: 1.65,
                  fontWeight: 500,
                }}
              >
                We help athletes modify training so they can keep progressing
                while recovering safely. You do not have to choose between
                healing and staying active.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
