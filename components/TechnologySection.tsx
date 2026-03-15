import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { BRAND } from '@/lib/theme';

const TECH_ITEMS = [
  {
    logo:        '/assets/logo-badges/VALDForcePlates_standard_logo.png',
    name:        'VALD ForceDecks',
    description:
      'Dual force plate system that measures strength, power output, and limb symmetry to guide rehab decisions and confirm when you are ready to return to full activity.',
    category:    'Strength & Power Assessment',
  },
  {
    logo:        '/assets/logo-badges/Normatec_standard_logo.png',
    name:        'Normatec',
    description:
      'Dynamic compression therapy that accelerates muscle recovery, reduces soreness, and improves circulation — supporting faster return to training.',
    category:    'Recovery Technology',
  },
  {
    logo:        '/assets/logo-badges/Oxefit_standard_logo.png',
    name:        'Oxefit',
    description:
      'Intelligent resistance training system that enables safe, measurable strength progressions during rehabilitation and performance transition.',
    category:    'Adaptive Strength Training',
  },
  {
    logo:        '/assets/logo-badges/Graston_standard_logo.png',
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
        backgroundColor: BRAND.offWhite ?? '#F7F9FB',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 5, md: 10 }} alignItems="center">

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
              sx={{ mb: 2.5, fontSize: { xs: '2rem', md: '2.625rem' } }}
            >
              Objective Data. Smarter Rehab.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: BRAND.gray500, lineHeight: 1.7, mb: 3 }}
            >
              We use clinical-grade technology to measure your strength,
              movement quality, and recovery progress — not just how you feel.
              That data guides every decision and tells us exactly when you are
              ready to return to full activity.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: BRAND.gray500, lineHeight: 1.7 }}
            >
              VALD ForceDecks, HumanTrak motion capture, Normatec compression
              therapy, Oxefit adaptive training, and Graston Technique are all
              available at InSync to support the full arc from initial
              evaluation through return to performance.
            </Typography>

            {/* Subtle image */}
            <Box
              sx={{
                mt:           4,
                borderRadius: 3,
                overflow:     'hidden',
                position:     'relative',
                height:       { xs: 220, md: 260 },
                display:      { xs: 'none', md: 'block' },
              }}
            >
              <Image
                src="/assets/hassan-pt/photos/provider-hassan/dr-hassan-prone-upper-back-manual-therapy-female-patient-04.jpg"
                alt="Manual therapy treatment at InSync Physical Therapy"
                fill
                sizes="(max-width: 1200px) 50vw, 400px"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </Box>
          </Grid>

          {/* Right: Tech Cards */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display:             'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap:                 2.5,
              }}
            >
              {TECH_ITEMS.map(({ logo, name, description, category }) => (
                <Box
                  key={name}
                  component="article"
                  sx={{
                    backgroundColor: BRAND.white,
                    border:          `1px solid ${BRAND.gray200}`,
                    borderRadius:    3,
                    p:               { xs: 2.5, md: 3 },
                    display:         'flex',
                    flexDirection:   'column',
                    gap:             1.5,
                    transition:      'all 0.25s ease',
                    '&:hover': {
                      borderColor: BRAND.neoBlue,
                      boxShadow:   `0 6px 24px rgba(0,61,89,0.07)`,
                      transform:   'translateY(-2px)',
                    },
                  }}
                >
                  {/* Logo */}
                  <Box
                    sx={{
                      height:   40,
                      position: 'relative',
                      width:    '100%',
                    }}
                  >
                    <Image
                      src={logo}
                      alt={`${name} logo`}
                      fill
                      sizes="200px"
                      style={{
                        objectFit:      'contain',
                        objectPosition: 'left center',
                      }}
                    />
                  </Box>

                  {/* Category */}
                  <Typography
                    sx={{
                      fontSize:      '0.7rem',
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
                      fontSize:   '1rem',
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
                      lineHeight: 1.6,
                      fontSize:   '0.85rem',
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
