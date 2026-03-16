import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HealingIcon from '@mui/icons-material/Healing';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { BRAND } from '@/lib/theme';

const WHO = [
  {
    icon:  <DirectionsRunIcon sx={{ fontSize: '1.375rem' }} />,
    title: 'Runners and Athletes',
    desc:  'Training for a race or competition and dealing with an overuse injury that will not go away.',
  },
  {
    icon:  <SportsKabaddiIcon sx={{ fontSize: '1.375rem' }} />,
    title: 'Grapplers and Fighters',
    desc:  'BJJ, MMA, Muay Thai, and wrestling athletes who want to stay active on the mat while recovering.',
  },
  {
    icon:  <FitnessCenterIcon sx={{ fontSize: '1.375rem' }} />,
    title: 'Lifters and Gym Members',
    desc:  'Powerlifters, CrossFit athletes, and gym-goers dealing with shoulder, knee, hip, or back issues.',
  },
  {
    icon:  <HealingIcon sx={{ fontSize: '1.375rem' }} />,
    title: 'Post-Surgical Patients',
    desc:  'Recovering from ACL reconstruction, rotator cuff repair, spine surgery, or joint replacement.',
  },
  {
    icon:  <AccessTimeIcon sx={{ fontSize: '1.375rem' }} />,
    title: 'People Tired of Being Rushed',
    desc:  'Anyone who has been to a PT mill and is done with five-minute check-ins and cookie-cutter programs.',
  },
];

export default function WhoWeWorkWithSection() {
  return (
    <Box
      component="section"
      aria-label="Who we work with"
      sx={{
        py:              { xs: 10, md: 14 },
        backgroundColor: BRAND.white,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {/* Header */}
        <Box
          sx={{
            display:             'grid',
            gridTemplateColumns: { xs: '1fr', md: '4fr 8fr' },
            gap:                 { xs: 5, md: 10 },
            alignItems:          'flex-start',
          }}
        >
          {/* Left: headline */}
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
              Who We Work With
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
              Built for People Who Want to Stay Active.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: BRAND.gray500, lineHeight: 1.75 }}
            >
              This clinic is for people who have goals and want a
              physical therapist who understands them. If you are serious
              about getting back to training, we are serious about helping
              you get there.
            </Typography>
          </Box>

          {/* Right: cards */}
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap:                 2.5,
            }}
          >
            {WHO.map(({ icon, title, desc }) => (
              <Box
                key={title}
                component="article"
                sx={{
                  backgroundColor: BRAND.offWhite,
                  border:          `1px solid ${BRAND.gray200}`,
                  borderRadius:    3,
                  p:               { xs: 3, md: 3.5 },
                  display:         'flex',
                  flexDirection:   'column',
                  gap:             1.25,
                  transition:      'all 0.2s ease',
                  '&:hover': {
                    borderColor: BRAND.neoBlue,
                    backgroundColor: BRAND.white,
                    boxShadow:   `0 6px 24px rgba(0,61,89,0.07)`,
                    transform:   'translateY(-2px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width:           42,
                    height:          42,
                    borderRadius:    2,
                    backgroundColor: 'rgba(14,197,230,0.1)',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                    color:           BRAND.neoBlue,
                  }}
                >
                  {icon}
                </Box>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize:   '1rem',
                    color:      BRAND.spaceNavy,
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: BRAND.gray500, lineHeight: 1.65, fontSize: '0.875rem' }}
                >
                  {desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
