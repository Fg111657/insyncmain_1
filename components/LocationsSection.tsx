import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { LOCATION_PHOTOS, BLUR_PLACEHOLDER } from '@/lib/images';
import MotionSection from '@/components/MotionSection';

const LOCATIONS = [
  {
    id:           'brooklyn',
    name:         'Brooklyn',
    address:      '1081 Gates Ave',
    city:         'Brooklyn, NY 11221',
    photo:        LOCATION_PHOTOS.brooklyn,
    photoAlt:     'Brooklyn neighborhood brownstones',
    mapsUrl:      'https://maps.google.com/?q=1081+Gates+Ave+Brooklyn+NY+11221',
    mapEmbed:     'https://maps.google.com/maps?q=1081+Gates+Ave,Brooklyn,NY+11221&t=&z=15&ie=UTF8&iwloc=&output=embed',
    phone:        '929-419-4643',
    transit:      'A, C trains to Gates Ave or Broadway',
    neighborhoods: ['Bushwick', 'Bed-Stuy', 'Ridgewood', 'Crown Heights'],
    notes:        'Convenient to residents across Brooklyn.',
  },
  {
    id:           'bryant-park',
    name:         'Manhattan',
    address:      '55 W 39th St, 3rd Floor, Suite 303',
    city:         'New York, NY 10018',
    photo:        LOCATION_PHOTOS.bryantPark,
    photoAlt:     'Bryant Park, Midtown Manhattan',
    mapsUrl:      'https://maps.google.com/?q=55+W+39th+St+New+York+NY+10018',
    mapEmbed:     'https://maps.google.com/maps?q=55+W+39th+St,New+York,NY+10018&t=&z=15&ie=UTF8&iwloc=&output=embed',
    phone:        '929-419-4643',
    transit:      'B, D, F, M trains to 42nd St–Bryant Park',
    neighborhoods: ['Midtown', "Hell's Kitchen", 'Chelsea', 'Murray Hill'],
    notes:        'Steps from Bryant Park. Ideal for Midtown professionals.',
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
      className="section-navy"
      sx={{
        py: { xs: compact ? 4 : 6, md: compact ? 6 : 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {!compact && (
          <MotionSection>
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
                color:    BRAND.white,
                mb:       2,
                fontSize: { xs: '2rem', md: '2.625rem' },
              }}
            >
              Two NYC Locations
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color:     'rgba(255,255,255,0.82)',
                maxWidth:  480,
                mx:        'auto',
                lineHeight: 1.7,
              }}
            >
              Brooklyn and Manhattan. Accessible from across the city.
            </Typography>
          </Box>
          </MotionSection>
        )}

        <MotionSection variant="list">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {LOCATIONS.map(({ id, name, address, city, photo, photoAlt, mapsUrl, mapEmbed, phone, transit, neighborhoods, notes }) => (
            <Grid key={id} item xs={12} md={6}>
              <MotionSection key={id} variant="item">
              <Box
                sx={{
                  border:          '1px solid rgba(255,255,255,0.12)',
                  borderRadius:    4,
                  overflow:        'hidden',
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
                {/* Neighborhood hero photo */}
                <Box sx={{ position: 'relative', width: '100%', height: 220, flexShrink: 0, overflow: 'hidden' }}>
                  <Image
                    src={photo}
                    alt={photoAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                    style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
                  />
                  {/* Teal-to-navy gradient overlay — ties photo to brand palette */}
                  <Box
                    sx={{
                      position:   'absolute',
                      inset:      0,
                      background: 'linear-gradient(135deg, rgba(14,197,230,0.15) 0%, rgba(0,38,42,0.55) 60%, rgba(0,29,34,0.82) 100%)',
                    }}
                  />
                  {/* Bottom fade into card body */}
                  <Box
                    sx={{
                      position:   'absolute',
                      bottom:     0,
                      left:       0,
                      right:      0,
                      height:     '40%',
                      background: 'linear-gradient(to bottom, transparent, rgba(0,22,28,0.9))',
                    }}
                  />
                  {/* Location badge pinned to photo bottom-left */}
                  <Box
                    sx={{
                      position:    'absolute',
                      bottom:      14,
                      left:        16,
                      display:     'flex',
                      alignItems:  'center',
                      gap:         0.75,
                      px:          1.5,
                      py:          0.5,
                      borderRadius: 2,
                      backgroundColor: 'rgba(14,197,230,0.18)',
                      backdropFilter:  'blur(6px)',
                      border:          '1px solid rgba(14,197,230,0.3)',
                    }}
                  >
                    <LocationOnIcon sx={{ color: BRAND.neoBlue, fontSize: '0.9rem' }} />
                    <Typography sx={{ color: BRAND.white, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                      {name}
                    </Typography>
                  </Box>
                </Box>

                {/* Google Maps Embed (collapsed, accessible) */}
                <Box sx={{ position: 'relative', width: '100%', height: 160, flexShrink: 0 }}>
                  <iframe
                    src={mapEmbed}
                    width="100%"
                    height="160"
                    style={{ border: 0, display: 'block', filter: 'grayscale(30%) contrast(1.05) brightness(0.9)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map for InSync Physical Therapy ${name}`}
                  />
                </Box>

                {/* Card Content */}
                <Box sx={{ p: { xs: 3.5, md: 4 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
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
                      style={{ color: BRAND.white }}
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
                      style={{ color: BRAND.white }}
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
                      href="tel:+19294194643"
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
                        color:      'rgba(255,255,255,0.82)',
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
                        color:         'rgba(255,255,255,0.65)',
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
                              color:      'rgba(255,255,255,0.82)',
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
                      color:       'rgba(255,255,255,0.75)',
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
                          backgroundColor: BRAND.neoBlueHover,
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
              </Box>
              </MotionSection>
            </Grid>
          ))}
        </Grid>
        </MotionSection>

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
