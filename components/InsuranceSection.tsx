import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LogoCarousel from '@/components/LogoCarousel';
import { BRAND } from '@/lib/theme';

const INSURERS = [
  { name: 'Aetna',                 logo: '/assets/logo-badges/Aetna_standard_logo.png'                },
  { name: 'Blue Cross Blue Shield',logo: '/assets/logo-badges/BlueCrossBlueShield_standard_logo.png' },
  { name: 'Cigna',                 logo: '/assets/logo-badges/Cigna_standard_logo.png'               },
  { name: 'United Healthcare',     logo: '/assets/logo-badges/UnitedHealthcare_standard_logo.png'    },
  { name: 'Medicare',              logo: '/assets/logo-badges/Medicare_standard_logo.png'            },
  { name: 'Fidelis Care',          logo: '/assets/logo-badges/Fidelis_standard_logo.png'             },
  { name: 'HIP',                   logo: '/assets/logo-badges/HIP_standard_logo.png'                },
  { name: 'NYC Employee Benefits', logo: '/assets/logo-badges/NYCEPP_standard_logo.png'              },
];

interface InsuranceSectionProps {
  compact?: boolean;
}

export default function InsuranceSection({ compact = false }: InsuranceSectionProps) {
  return (
    <Box
      component="section"
      id="insurance"
      aria-label="Accepted insurance"
      sx={{
        py:              { xs: compact ? 6 : 10, md: compact ? 8 : 14 },
        backgroundColor: BRAND.white,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {!compact && (
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography component="p" className="overline" sx={{ mb: 2 }}>
              Insurance
            </Typography>
            <Typography
              variant="h2"
              sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.625rem' } }}
            >
              Insurance Made Simple.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color:   BRAND.gray500,
                maxWidth: 520,
                mx:      'auto',
                lineHeight: 1.7,
              }}
            >
              Most major insurance plans accepted. We verify your coverage
              before your first visit so you know exactly what to expect.
              No surprise bills.
            </Typography>
          </Box>
        )}

        {compact && (
          <Typography
            variant="h3"
            sx={{
              mb:        3,
              fontSize:  { xs: '1.5rem', md: '1.875rem' },
              textAlign: 'center',
            }}
          >
            Accepted Insurance Plans
          </Typography>
        )}

        {/* Scrolling logo carousel */}
        <LogoCarousel
          items={INSURERS}
          tileHeight={76}
          duration={32}
          tileBg={BRAND.white}
        />

        {/* Disclaimer */}
        <Box
          sx={{
            mt:         compact ? 3 : 5,
            px:         { xs: 0, md: 4 },
            py:         compact ? 2 : 3,
            borderRadius: 2,
            border:     `1px solid ${BRAND.gray200}`,
            backgroundColor: BRAND.white,
            textAlign:  'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: BRAND.gray500, lineHeight: 1.6, fontSize: '0.875rem' }}
          >
            <strong style={{ color: BRAND.spaceNavy, fontWeight: 600 }}>
              Don&apos;t see your plan?
            </strong>{' '}
            Contact us. We accept additional plans and can verify your
            out-of-network benefits before your first visit.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
