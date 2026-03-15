import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AirIcon from '@mui/icons-material/Air';
import VideocamIcon from '@mui/icons-material/Videocam';
import { BRAND } from '@/lib/theme';

const TECH_ITEMS = [
  {
    icon:        <MonitorHeartIcon sx={{ fontSize: '1.5rem' }} />,
    name:        'VALD ForceDecks',
    description:
      'Dual force plate system that measures strength, power output, and limb symmetry to guide rehab decisions and confirm when you are ready to return to full activity.',
    category:    'Strength & Power Assessment',
  },
  {
    icon:        <VideocamIcon sx={{ fontSize: '1.5rem' }} />,
    name:        'HumanTrak',
    description:
      'Motion capture analysis that quantifies movement quality, joint angles, and compensations. Objective data on how you move, not just how you feel.',
    category:    'Motion Capture Analysis',
  },
  {
    icon:        <AirIcon sx={{ fontSize: '1.5rem' }} />,
    name:        'Normatec',
    description:
      'Dynamic compression therapy that accelerates muscle recovery, reduces soreness, and improves circulation. Supports faster return to training.',
    category:    'Recovery Technology',
  },
  {
    icon:        <FitnessCenterIcon sx={{ fontSize: '1.5rem' }} />,
    name:        'Oxefit',
    description:
      'Intelligent resistance training system that enables safe, measurable strength progressions during rehabilitation and performance transition.',
    category:    'Adaptive Strength Training',
  },
  {
    icon:        <TouchAppIcon sx={{ fontSize: '1.5rem' }} />,
    name:        'Graston Technique',
    description:
      'Instrument-assisted soft tissue mobilization that identifies and treats scar tissue, fascial restrictions, and chronic soft tissue dysfunction.',
    category:    'Manual Therapy',
  },
];

export default function TechnologySection() {
  return (
    <Box
      component="section"
      aria-label="Technology and diagnostics"
      sx={{
        py:              { xs: 10, md: 14 },
        backgroundColor: '#F7F9FB',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 10 }} alignItems="flex-start">

          {/* Left: Copy */}
          <Grid item xs={12} md={5}>
            <Typography
              component="p"
              className="overline"
              sx={{ mb: 2 }}
            >
              Diagnostics &amp; Technology
            </Typography>

            <Typography
              variant="h2"
              sx={{ mb: 2.5, fontSize: { xs: '2rem', md: '2.5rem' } }}
            >
              Objective Data.{' '}
              <Box component="span" sx={{ display: 'block' }}>
                Smarter Rehab.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: BRAND.gray500, lineHeight: 1.75, mb: 2.5 }}
            >
              We use clinical-grade technology to measure your strength,
              movement quality, and recovery progress. Not just how you feel.
              That data guides every decision and tells us exactly when you are
              ready to return to full activity.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: BRAND.gray500, lineHeight: 1.75, mb: 4 }}
            >
              VALD ForceDecks, HumanTrak motion capture, Normatec compression
              therapy, Oxefit adaptive training, and Graston Technique are all
              available at InSync to support the full arc from initial
              evaluation through return to performance.
            </Typography>

            {/* Stat callouts */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 2,
              }}
            >
              {[
                { value: '5',      label: 'Diagnostic and recovery tools' },
                { value: '100%',   label: 'Data-guided progression' },
              ].map(({ value, label }) => (
                <Box
                  key={label}
                  sx={{
                    p:               2.5,
                    borderRadius:    2,
                    border:          `1px solid ${BRAND.gray200}`,
                    backgroundColor: BRAND.white,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight:    800,
                      fontSize:      '1.75rem',
                      color:         BRAND.spaceNavy,
                      lineHeight:    1,
                      letterSpacing: '-0.03em',
                      mb:            0.5,
                    }}
                  >
                    {value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize:  '0.8rem',
                      fontWeight: 500,
                      color:     BRAND.gray500,
                      lineHeight: 1.4,
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right: Tech Cards */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display:             'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                gap:                 2.5,
              }}
            >
              {TECH_ITEMS.map(({ icon, name, description, category }) => (
                <Box
                  key={name}
                  component="article"
                  sx={{
                    backgroundColor: BRAND.white,
                    border:          `1px solid ${BRAND.gray200}`,
                    borderRadius:    3,
                    p:               { xs: 3, md: 3.5 },
                    display:         'flex',
                    flexDirection:   'column',
                    gap:             1.25,
                    transition:      'all 0.25s ease',
                    '&:hover': {
                      borderColor: BRAND.neoBlue,
                      boxShadow:   `0 6px 24px rgba(0,61,89,0.07)`,
                      transform:   'translateY(-2px)',
                    },
                  }}
                >
                  {/* Icon badge */}
                  <Box
                    sx={{
                      width:           44,
                      height:          44,
                      borderRadius:    2,
                      backgroundColor: 'rgba(14,197,230,0.1)',
                      display:         'flex',
                      alignItems:      'center',
                      justifyContent:  'center',
                      color:           BRAND.neoBlue,
                      flexShrink:      0,
                    }}
                  >
                    {icon}
                  </Box>

                  {/* Category */}
                  <Typography
                    sx={{
                      fontSize:      '0.68rem',
                      fontWeight:    700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color:         BRAND.neoBlue,
                    }}
                  >
                    {category}
                  </Typography>

                  {/* Name */}
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize:   '1.0625rem',
                      color:      BRAND.spaceNavy,
                      lineHeight: 1.2,
                    }}
                  >
                    {name}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color:      BRAND.gray500,
                      lineHeight: 1.65,
                      fontSize:   '0.875rem',
                    }}
                  >
                    {description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
