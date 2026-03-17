import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

const TRUST_ITEMS = [
  {
    value: 'One-on-one',
    label: 'You work directly with your therapist each visit.',
  },
  {
    value: 'Insurance clarity',
    label: 'Coverage is checked before your first appointment.',
  },
  {
    value: 'Sports and ortho',
    label: 'Built for injury recovery and return to activity.',
  },
  {
    value: 'Two NYC offices',
    label: 'Brooklyn and Bryant Park with one shared standard of care.',
  },
];

export default function TrustBar() {
  return (
    <Box component="section" aria-label="Key trust indicators" sx={{ py: { xs: 4, md: 5 }, backgroundColor: BRAND.white }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 2,
          }}
        >
          {TRUST_ITEMS.map(({ value, label }) => (
            <Box
              key={label}
              sx={{
                border: `1px solid ${BRAND.gray200}`,
                borderRadius: 4,
                px: 3,
                py: 3,
                backgroundColor: BRAND.offWhite,
              }}
            >
              <Typography sx={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: BRAND.gray500 }}>
                Why InSync
              </Typography>
              <Typography sx={{ mt: 1, fontWeight: 700, fontSize: '1.1rem', color: BRAND.spaceNavy }}>
                {value}
              </Typography>
              <Typography sx={{ mt: 1, fontSize: '0.92rem', lineHeight: 1.6, color: BRAND.gray700 }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
