import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import DirectionsIcon from '@mui/icons-material/Directions';
import SubwayIcon from '@mui/icons-material/DirectionsSubway';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BRAND } from '@/lib/theme';

const LOCATIONS = [
  {
    id:        'brooklyn',
    name:      'Brooklyn',
    address:   '1081 Gates Ave',
    city:      'Brooklyn, NY 11221',
    mapsUrl:   'https://maps.google.com/?q=1081+Gates+Ave+Brooklyn+NY+11221',
    phone:     '929-419-4643',
    transit:   'A, C trains to Gates Ave or Broadway',
    neighborhoods: ['Bushwick', 'Bed-Stuy', 'Ridgewood', 'Crown Heights'],
    notes:     'Convenient to residents across Brooklyn.',
  },
  {
    id:        'bryant-park',
    name:      'Bryant Park',
    address:   '55 W 39th St, 3rd Floor, Suite 303',
    city:      'New York, NY 10018',
    mapsUrl:   'https://maps.google.com/?q=55+W+39th+St+New+York+NY+10018',
    phone:     '929-419-4643',
    transit:   'B, D, F, M trains to 42nd St–Bryant Park',
    neighborhoods: ['Midtown', 'Hell\'s Kitchen', 'Chelsea', 'Murray Hill'],
    notes:     'Steps from Bryant Park. Ideal for Midtown professionals.',
  },
];

interface LocationsSectionProps {
  compact?: boolean;
}

export default function LocationsSection({ compact = false }: LocationsSectionProps) {
  return (
    <Box
      component="section"
      id="locations"
      aria-label="Our locations"
      sx={{
        py:              { xs: compact ? 6 : 10, md: compact ? 8 : 14 },
        backgroundColor: BRAND.spaceNavy,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {!compact && (
          <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
            <Typography
              component="p"
              sx={{
                fontSize:      '0.7rem',
                fontWeight:    700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:         BRAND.neoBlue,
                mb:            2,
              }}
            >
              Locations
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color:     BRAND.white,
                mb:        2,
                fontSize:  { xs: '2rem', md: '2.625rem' },
              }}
            >
              Two NYC Locations
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color:     'rgba(255,255,255,0.65)',
                maxWidth:  480,
                mx:        'auto',
                lineHeight: 1.7,
              }}
            >
              Brooklyn and Bryant Park — accessible from across the city.
            </Typography>
          </Box>
        )}

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {LOCATIONS.map(({ id, name, address, city, mapsUrl, phone, transit, neighborhoods, notes }) => (
            <Grid key={id} item xs={12} md={6}>
              <Box
                sx={{
                  border:          `1px solid rgba(255,255,255,0.12)`,
                  borderRadius:    4,
                  p:               { xs: 3.5, md: 4.5 },
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  height:          '100%',
                  display:         'flex',
                  flexDirection:   'column',
                  transition:      'all 0.25s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(14,197,230,0.04)',
                    borderColor:     'rgba(14,197,230,0.3)',
                  },
                }}
              >
                {/* Location Name */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
                  <Box
                    sx={{
                      width:           36,
                      height:          36,
                      borderRadius:    '50%',
                      backgroundColor: 'rgba(14,197,230,0.15)',
                      display:         'flex',
                      alignItems:      'center',
                      justifyContent:  'center',
                      flexShrink:      0,
                    }}
                  >
                    <LocationOnIcon sx={{ color: BRAND.neoBlue, fontSize: '1.1rem' }} />
                  </Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize:   '1.25rem',
                      color:      BRAND.white,
                    }}
                  >
                    {name}
                  </Typography>
                </Box>

                {/* Address */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      fontWeight:  600,
                      fontSize:    '1rem',
                      color:       BRAND.white,
                      lineHeight:  1.5,
                    }}
                  >
                    {address}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize:   '1rem',
                      color:      'rgba(255,255,255,0.65)',
                      lineHeight: 1.5,
                    }}
                  >
                    {city}
                  </Typography>
                </Box>

                {/* Phone */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <PhoneIcon sx={{ color: BRAND.neoBlue, fontSize: '0.9rem' }} />
                  <Typography
                    component="a"
                    href={`tel:+19294194643`}
                    sx={{
                      color:          'rgba(255,255,255,0.7)',
                      fontSize:       '0.9rem',
                      textDecoration: 'none',
                      '&:hover': { color: BRAND.neoBlue },
                    }}
                  >
                    {phone}
                  </Typography>
                </Box>

                {/* Transit */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 3 }}>
                  <SubwayIcon sx={{ color: BRAND.neoBlue, fontSize: '0.9rem', mt: '2px' }} />
                  <Typography
                    sx={{
                      fontSize:   '0.875rem',
                      color:      'rgba(255,255,255,0.55)',
                      lineHeight: 1.5,
                    }}
                  >
                    {transit}
                  </Typography>
                </Box>

                {/* Nearby Neighborhoods */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      fontSize:      '0.7rem',
                      fontWeight:    700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color:         'rgba(255,255,255,0.4)',
                      mb:            1,
                    }}
                  >
                    Serving
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {neighborhoods.map((n) => (
                      <Box
                        key={n}
                        sx={{
                          px:              1.5,
                          py:              0.375,
                          borderRadius:    1,
                          border:          '1px solid rgba(255,255,255,0.12)',
                          backgroundColor: 'rgba(255,255,255,0.05)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize:   '0.78rem',
                            fontWeight: 500,
                            color:      'rgba(255,255,255,0.6)',
                          }}
                        >
                          {n}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Note */}
                <Typography
                  sx={{
                    fontSize:    '0.875rem',
                    color:       'rgba(255,255,255,0.5)',
                    fontStyle:   'italic',
                    lineHeight:  1.5,
                    mb:          3.5,
                  }}
                >
                  {notes}
                </Typography>

                {/* Spacer */}
                <Box sx={{ flex: 1 }} />

                {/* CTAs */}
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: BRAND.neoBlue,
                      color:           BRAND.white,
                      fontWeight:      600,
                      px:              2.5,
                      '&:hover': {
                        backgroundColor: '#0AAFCC',
                        transform:       'translateY(-1px)',
                      },
                    }}
                  >
                    Request Appointment
                  </Button>
                  <Button
                    component="a"
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="small"
                    startIcon={<DirectionsIcon sx={{ fontSize: '0.9rem' }} />}
                    sx={{
                      borderColor: 'rgba(255,255,255,0.2)',
                      color:       'rgba(255,255,255,0.75)',
                      '&:hover': {
                        borderColor:     BRAND.neoBlue,
                        backgroundColor: 'rgba(14,197,230,0.08)',
                      },
                    }}
                  >
                    Get Directions
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {compact && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={Link}
              href="/locations"
              variant="text"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color:   'rgba(255,255,255,0.7)',
                '&:hover': { color: BRAND.neoBlue, backgroundColor: 'transparent' },
              }}
            >
              View location details
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
