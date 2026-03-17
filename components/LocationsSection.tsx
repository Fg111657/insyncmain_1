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

const LOCATIONS = [
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    address: '1081 Gates Ave',
    city: 'Brooklyn, NY 11221',
    photo: LOCATION_PHOTOS.brooklyn,
    photoAlt: 'Brooklyn neighborhood brownstones',
    mapsUrl: 'https://maps.google.com/?q=1081+Gates+Ave+Brooklyn+NY+11221',
    mapEmbed: 'https://maps.google.com/maps?q=1081+Gates+Ave,Brooklyn,NY+11221&t=&z=15&ie=UTF8&iwloc=&output=embed',
    phone: '929-419-4643',
    transit: 'A and C trains to Gates Ave or Broadway',
    neighborhoods: ['Bushwick', 'Bed-Stuy', 'Ridgewood', 'Crown Heights'],
    notes: 'Convenient for patients coming from central and north Brooklyn.',
  },
  {
    id: 'bryant-park',
    name: 'Bryant Park',
    address: '55 W 39th St, 3rd Floor, Suite 303',
    city: 'New York, NY 10018',
    photo: LOCATION_PHOTOS.bryantPark,
    photoAlt: 'Bryant Park, Midtown Manhattan',
    mapsUrl: 'https://maps.google.com/?q=55+W+39th+St+New+York+NY+10018',
    mapEmbed: 'https://maps.google.com/maps?q=55+W+39th+St,New+York,NY+10018&t=&z=15&ie=UTF8&iwloc=&output=embed',
    phone: '929-419-4643',
    transit: 'B, D, F, and M trains to 42nd St-Bryant Park',
    neighborhoods: ['Midtown', "Hell's Kitchen", 'Chelsea', 'Murray Hill'],
    notes: 'A practical option for patients coming from Midtown or after-work appointments.',
  },
];

interface LocationsSectionProps {
  compact?: boolean;
}

export default function LocationsSection({ compact = false }: LocationsSectionProps) {
  return (
    <Box component="section" id="locations" aria-label="Our locations" sx={{ py: { xs: compact ? 6 : 10, md: compact ? 8 : 14 }, backgroundColor: BRAND.offWhite }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {!compact && (
          <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 640 }}>
            <Typography component="p" className="overline" sx={{ mb: 2 }}>
              Locations
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>
              Two offices, one standard of care
            </Typography>
            <Typography sx={{ color: BRAND.gray700, lineHeight: 1.7, maxWidth: 520 }}>
              The location section now reads like a practical choice guide instead of a stylized landing page block.
            </Typography>
          </Box>
        )}

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {LOCATIONS.map(({ id, name, address, city, photo, photoAlt, mapsUrl, mapEmbed, phone, transit, neighborhoods, notes }) => (
            <Grid key={id} item xs={12} md={6}>
              <Box
                sx={{
                  border: `1px solid ${BRAND.gray200}`,
                  borderRadius: 5,
                  overflow: 'hidden',
                  backgroundColor: BRAND.white,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ position: 'relative', width: '100%', height: 220 }}>
                  <Image
                    src={photo}
                    alt={photoAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                    style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 'auto auto 16px 16px',
                      backgroundColor: 'rgba(255,255,255,0.92)',
                      border: `1px solid rgba(0,61,89,0.08)`,
                      borderRadius: 99,
                      px: 1.5,
                      py: 0.75,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: '0.95rem', color: BRAND.spaceNavy }} />
                    <Typography sx={{ fontSize: '0.82rem', fontWeight: 700, color: BRAND.spaceNavy }}>
                      {name}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ position: 'relative', width: '100%', height: 160, borderTop: `1px solid ${BRAND.gray200}`, borderBottom: `1px solid ${BRAND.gray200}` }}>
                  <iframe
                    src={mapEmbed}
                    width="100%"
                    height="160"
                    style={{ border: 0, display: 'block', filter: 'grayscale(25%) contrast(1.02)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map for InSync Physical Therapy ${name}`}
                  />
                </Box>

                <Box sx={{ p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Typography component="h3" sx={{ fontWeight: 700, fontSize: '1.3rem', color: BRAND.spaceNavy, mb: 0.75 }}>
                    {name}
                  </Typography>
                  <Typography sx={{ fontWeight: 600, color: BRAND.spaceNavy, lineHeight: 1.5 }}>
                    {address}
                  </Typography>
                  <Typography sx={{ color: BRAND.gray700, lineHeight: 1.5, mb: 2.5 }}>
                    {city}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, mb: 2.5 }}>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                      <PhoneIcon sx={{ color: BRAND.spaceNavy, fontSize: '0.95rem', mt: '2px' }} />
                      <Typography component="a" href="tel:+19294194643" sx={{ color: BRAND.gray700 }}>
                        {phone}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                      <SubwayIcon sx={{ color: BRAND.spaceNavy, fontSize: '0.95rem', mt: '2px' }} />
                      <Typography sx={{ color: BRAND.gray700, lineHeight: 1.5 }}>
                        {transit}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                    {neighborhoods.map((n) => (
                      <Box key={n} sx={{ px: 1.25, py: 0.4, borderRadius: 99, backgroundColor: BRAND.offWhite, border: `1px solid ${BRAND.gray200}` }}>
                        <Typography sx={{ fontSize: '0.76rem', color: BRAND.gray700 }}>{n}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography sx={{ color: BRAND.gray500, fontSize: '0.9rem', lineHeight: 1.6, mb: 3 }}>
                    {notes}
                  </Typography>

                  <Box sx={{ mt: 'auto', display: 'flex', gap: 1.25, flexWrap: 'wrap' }}>
                    <Button component={Link} href="/contact" variant="contained" size="small">
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
                    >
                      Directions
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {compact && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button component={Link} href="/locations" variant="text" endIcon={<ArrowForwardIcon />} sx={{ color: BRAND.spaceNavy }}>
              View location details
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
