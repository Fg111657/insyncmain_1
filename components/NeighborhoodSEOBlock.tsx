import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

const NEIGHBORHOODS = [
  'Bushwick', 'Bed-Stuy', 'Crown Heights', 'Williamsburg',
  'Flatbush', 'Park Slope', 'Fort Greene', 'Clinton Hill',
  'Midtown', 'Chelsea', "Hell's Kitchen", 'Murray Hill', 'Gramercy',
];

export default function NeighborhoodSEOBlock() {
  return (
    <Box
      component="section"
      aria-label="Neighborhoods served"
      sx={{
        py:              { xs: 6, md: 8 },
        backgroundColor: BRAND.offWhite,
        borderTop:       `1px solid ${BRAND.gray200}`,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display:             'grid',
            gridTemplateColumns: { xs: '1fr', md: '4fr 8fr' },
            gap:                 { xs: 3, md: 6 },
            alignItems:          'center',
          }}
        >
          {/* Left: copy */}
          <Box>
            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize:   { xs: '1.125rem', md: '1.25rem' },
                color:      BRAND.spaceNavy,
                lineHeight: 1.4,
                mb:         1,
              }}
            >
              Serving Patients Across Brooklyn and Manhattan
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: BRAND.gray500, lineHeight: 1.7, fontSize: '0.9rem' }}
            >
              InSync Physical Therapy has two locations to serve you.
              Our Brooklyn clinic is at 1081 Gates Ave, and our Manhattan
              clinic is in Bryant Park at 55 W 39th St. Patients travel
              from across the city for one-on-one care that actually works.
            </Typography>
          </Box>

          {/* Right: neighborhood tags */}
          <Box>
            <Typography
              sx={{
                fontSize:      '0.72rem',
                fontWeight:    700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         BRAND.neoBlue,
                mb:            1.5,
              }}
            >
              Neighborhoods we serve
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {NEIGHBORHOODS.map((n) => (
                <Box
                  key={n}
                  component="span"
                  sx={{
                    backgroundColor: BRAND.white,
                    border:          `1px solid ${BRAND.gray200}`,
                    borderRadius:    20,
                    px:              1.75,
                    py:              0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:   '0.8rem',
                      fontWeight: 500,
                      color:      BRAND.gray700,
                    }}
                  >
                    {n}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
