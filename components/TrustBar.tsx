import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BRAND } from '@/lib/theme';

const TRUST_ITEMS = [
  {
    icon:    <SchoolIcon sx={{ fontSize: '1.5rem', color: BRAND.neoBlue }} />,
    value:   '9+ Years',
    label:   'Clinical Experience',
  },
  {
    icon:    <VerifiedIcon sx={{ fontSize: '1.5rem', color: BRAND.neoBlue }} />,
    value:   'DPT',
    label:   'Doctor of Physical Therapy',
  },
  {
    icon:    <PersonIcon sx={{ fontSize: '1.5rem', color: BRAND.neoBlue }} />,
    value:   '1-on-1',
    label:   'Personalized Care',
  },
  {
    icon:    <LocationOnIcon sx={{ fontSize: '1.5rem', color: BRAND.neoBlue }} />,
    value:   '2 Locations',
    label:   'Brooklyn & Bryant Park',
  },
];

export default function TrustBar() {
  return (
    <Box
      component="section"
      aria-label="Trust indicators"
      className="section-navy"
      sx={{ py: { xs: 4, md: 5 } }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display:               'grid',
            gridTemplateColumns:   {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap:                   { xs: 3, md: 2 },
          }}
        >
          {TRUST_ITEMS.map(({ icon, value, label }) => (
            <Box
              key={label}
              sx={{
                display:       'flex',
                flexDirection: 'column',
                alignItems:    { xs: 'center', md: 'flex-start' },
                gap:           0.75,
                px:            { md: 3 },
                borderLeft:    { md: `1px solid rgba(255,255,255,0.08)` },
                '&:first-of-type': { borderLeft: 'none', pl: 0 },
                textAlign:     { xs: 'center', md: 'left' },
              }}
            >
              {icon}
              <Typography
                sx={{
                  fontWeight:    800,
                  fontSize:      { xs: '1.5rem', md: '1.75rem' },
                  lineHeight:    1,
                  color:         BRAND.white,
                  letterSpacing: '-0.02em',
                }}
              >
                {value}
              </Typography>
              <Typography
                sx={{
                  fontSize:      '0.8125rem',
                  fontWeight:    500,
                  color:         'rgba(255,255,255,0.55)',
                  lineHeight:    1.4,
                  letterSpacing: '0.01em',
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
