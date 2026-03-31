'use client';

/**
 * LocationsSection — RALPH spec
 * Manhattan first. White background. Clean layout.
 * Text left, map right. No 3D tilt.
 */

import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import DirectionsIcon from '@mui/icons-material/Directions';
import SubwayIcon from '@mui/icons-material/DirectionsSubway';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BRAND } from '@/lib/theme';
import MotionSection from '@/components/MotionSection';

/* Manhattan first per RALPH */
const LOCATIONS = [
  {
    id:           'bryant-park',
    name:         'Manhattan',
    address:      '55 W 39th St, 3rd Fl, Suite 303',
    city:         'New York, NY 10018',
    mapsUrl:      'https://maps.google.com/?q=55+W+39th+St+New+York+NY+10018',
    mapEmbed:     'https://maps.google.com/maps?q=55+W+39th+St,New+York,NY+10018&t=&z=15&ie=UTF8&iwloc=&output=embed',
    phone:        '929-419-4643',
    subway:       ['B', 'D', 'F', 'M'],
    subwayNote:   '42nd St–Bryant Park',
    neighborhoods: ['Midtown', "Hell's Kitchen", 'Chelsea', 'Murray Hill'],
  },
  {
    id:           'brooklyn',
    name:         'Brooklyn',
    address:      '1081 Gates Ave',
    city:         'Brooklyn, NY 11221',
    mapsUrl:      'https://maps.google.com/?q=1081+Gates+Ave+Brooklyn+NY+11221',
    mapEmbed:     'https://maps.google.com/maps?q=1081+Gates+Ave,Brooklyn,NY+11221&t=&z=15&ie=UTF8&iwloc=&output=embed',
    phone:        '929-419-4643',
    subway:       ['A', 'C'],
    subwayNote:   'Gates Ave or Broadway',
    neighborhoods: ['Bushwick', 'Bed-Stuy', 'Ridgewood', 'Crown Heights'],
  },
];

const HOURS = [
  { days: 'Mon–Fri', time: '11 AM – 9 PM' },
  { days: 'Sat',     time: '11 AM – 8 PM' },
  { days: 'Sun',     time: 'Closed' },
];

function LocationCard({ loc }: { loc: typeof LOCATIONS[number] }) {
  return (
    <Box
      sx={{
        borderRadius:    2,
        border:          `1px solid ${BRAND.gray200}`,
        overflow:        'hidden',
        backgroundColor: BRAND.white,
        height:          '100%',
        display:         'flex',
        flexDirection:   'column',
        transition:      'border-color 0.2s ease',
        '&:hover': {
          borderColor: BRAND.sinopia,
        },
      }}
    >
      {/* Map */}
      <Box sx={{ width: '100%', height: 180, flexShrink: 0 }}>
        <iframe
          src={loc.mapEmbed}
          width="100%"
          height="180"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map — InSync ${loc.name}`}
        />
      </Box>

      {/* Details */}
      <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flex: 1, gap: 1.5 }}>

        {/* Location name */}
        <Typography
          component="h3"
          sx={{ fontWeight: 800, fontSize: '1.25rem', color: BRAND.deepPetrol, lineHeight: 1.2 }}
        >
          {loc.name}
        </Typography>

        {/* Address */}
        <Box>
          <Typography sx={{ fontSize: '0.9375rem', color: BRAND.deepPetrol, fontWeight: 600 }}>
            {loc.address}
          </Typography>
          <Typography sx={{ fontSize: '0.875rem', color: BRAND.gray500 }}>
            {loc.city}
          </Typography>
        </Box>

        {/* Info rows */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {/* Phone */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon sx={{ color: BRAND.sinopia, fontSize: '0.85rem' }} />
            <Typography
              component="a"
              href="tel:+19294194643"
              sx={{
                color: BRAND.gray700, fontSize: '0.875rem', textDecoration: 'none',
                '&:hover': { color: BRAND.sinopia },
              }}
            >
              {loc.phone}
            </Typography>
          </Box>

          {/* Transit — MTA-style subway chips */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SubwayIcon sx={{ color: BRAND.sinopia, fontSize: '0.85rem' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
              {loc.subway.map((line) => (
                <Box
                  key={line}
                  sx={{
                    width:           22,
                    height:          22,
                    borderRadius:    '50%',
                    backgroundColor: BRAND.deepPetrol,
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                  }}
                >
                  <Typography sx={{ color: BRAND.white, fontSize: '0.65rem', fontWeight: 800, lineHeight: 1 }}>
                    {line}
                  </Typography>
                </Box>
              ))}
              <Typography sx={{ fontSize: '0.8rem', color: BRAND.gray500, ml: 0.5 }}>
                {loc.subwayNote}
              </Typography>
            </Box>
          </Box>

          {/* Hours */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
            <AccessTimeIcon sx={{ color: BRAND.sinopia, fontSize: '0.85rem', mt: '1px' }} />
            <Typography sx={{ fontSize: '0.875rem', color: BRAND.gray700, lineHeight: 1.5 }}>
              {HOURS.map((h, i) => (
                <React.Fragment key={h.days}>
                  {h.days}: {h.time}{i < HOURS.length - 1 && <>{' · '}</>}
                </React.Fragment>
              ))}
            </Typography>
          </Box>
        </Box>

        {/* Spacer + CTAs */}
        <Box sx={{ flex: 1, minHeight: 4 }} />
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="small"
            sx={{
              backgroundColor: BRAND.sinopia,
              color:           BRAND.white,
              fontWeight:      600,
              px:              2.5,
              transition:      'background-color 0.2s ease, transform 0.2s ease',
              '&:hover': {
                backgroundColor: BRAND.sinopiaHover,
                transform:       'translateY(-1px)',
              },
            }}
          >
            Request Appointment
          </Button>
          <Button
            component="a"
            href={loc.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="small"
            startIcon={<DirectionsIcon sx={{ fontSize: '0.85rem' }} />}
            sx={{
              borderColor: BRAND.gray200,
              color:       BRAND.gray700,
              transition:  'all 0.2s ease',
              '&:hover': {
                borderColor:     BRAND.sinopia,
                color:           BRAND.sinopia,
                backgroundColor: 'rgba(246,55,0,0.04)',
              },
            }}
          >
            Directions
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

interface LocationsSectionProps { compact?: boolean; hideHeader?: boolean }

export default function LocationsSection({ compact = false, hideHeader = false }: LocationsSectionProps) {
  return (
    <Box
      component="section"
      id="locations"
      aria-label="Clinic locations"
      sx={{
        py:              { xs: compact ? 4 : 6, md: compact ? 6 : 10 },
        backgroundColor: BRAND.white,
      }}
    >
      <Container maxWidth="lg">
        {!compact && !hideHeader && (
          <MotionSection>
            <Box sx={{ mb: { xs: 4, md: 5 }, textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{ color: BRAND.deepPetrol, mb: 1, fontSize: { xs: '1.75rem', md: '2.25rem' } }}
              >
                Manhattan & Brooklyn
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: BRAND.gray500, maxWidth: 420, mx: 'auto', lineHeight: 1.6 }}
              >
                Open six days a week. Easy subway access from every borough.
              </Typography>
            </Box>
          </MotionSection>
        )}

        <MotionSection variant="list">
          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {LOCATIONS.map((loc) => (
              <Grid key={loc.id} item xs={12} md={6}>
                <MotionSection variant="item">
                  <LocationCard loc={loc} />
                </MotionSection>
              </Grid>
            ))}
          </Grid>
        </MotionSection>

        {compact && (
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              component={Link}
              href="/locations"
              variant="text"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: BRAND.gray500,
                '&:hover': { color: BRAND.sinopia, backgroundColor: 'transparent' },
              }}
            >
              View details
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
