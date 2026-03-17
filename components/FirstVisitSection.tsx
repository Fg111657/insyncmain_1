import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

const STEPS = [
  {
    number: '01',
    title: 'Request your visit',
    desc: 'Send your contact details, location preference, and primary concern through the appointment form.',
  },
  {
    number: '02',
    title: 'Insurance is reviewed',
    desc: 'The team checks your benefits before confirming the visit so the first call is straightforward.',
  },
  {
    number: '03',
    title: 'You get a full evaluation',
    desc: 'The first appointment is built to understand the injury, your history, and what you want to return to.',
  },
  {
    number: '04',
    title: 'Treatment starts with a plan',
    desc: 'You leave with a clear explanation of the issue, what matters most, and how recovery will progress.',
  },
];

export default function FirstVisitSection() {
  return (
    <Box component="section" aria-label="What your first visit looks like" sx={{ py: { xs: 10, md: 14 }, backgroundColor: BRAND.white }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 1.4fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'start',
          }}
        >
          <Box>
            <Typography component="p" className="overline" sx={{ mb: 2 }}>
              Your First Visit
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>
              The process should feel simple before you walk in.
            </Typography>
            <Typography sx={{ color: BRAND.gray700, lineHeight: 1.75, maxWidth: 440 }}>
              This part of the site needed to reduce friction, not add drama. The sequence below explains the intake in plain English.
            </Typography>
          </Box>

          <Box
            component="ol"
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
              display: 'grid',
              gap: 2,
            }}
          >
            {STEPS.map(({ number, title, desc }) => (
              <Box
                key={number}
                component="li"
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '72px 1fr',
                  gap: 2,
                  alignItems: 'start',
                  border: `1px solid ${BRAND.gray200}`,
                  borderRadius: 4,
                  backgroundColor: BRAND.offWhite,
                  p: { xs: 2.5, md: 3 },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    backgroundColor: BRAND.spaceNavy,
                    color: BRAND.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {number}
                </Box>
                <Box>
                  <Typography component="h3" sx={{ fontWeight: 700, fontSize: '1.05rem', color: BRAND.spaceNavy, mb: 0.75 }}>
                    {title}
                  </Typography>
                  <Typography sx={{ color: BRAND.gray700, fontSize: '0.94rem', lineHeight: 1.7 }}>
                    {desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
