import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

const INSURERS = [
  { name: 'Aetna',                    logo: '/assets/logo-badges/Aetna_standard_logo.png'                },
  { name: 'Blue Cross Blue Shield',   logo: '/assets/logo-badges/BlueCrossBlueShield_standard_logo.png' },
  { name: 'Cigna',                    logo: '/assets/logo-badges/Cigna_standard_logo.png'               },
  { name: 'United Healthcare',        logo: '/assets/logo-badges/UnitedHealthcare_standard_logo.png'    },
  { name: 'Medicare',                 logo: '/assets/logo-badges/Medicare_standard_logo.png'            },
  { name: 'Fidelis Care',             logo: '/assets/logo-badges/Fidelis_standard_logo.png'            },
  { name: 'HIP',                      logo: '/assets/logo-badges/HIP_standard_logo.png'                },
  { name: 'NYC Employee Benefits',    logo: '/assets/logo-badges/NYCEPP_standard_logo.png'              },
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
        backgroundColor: compact ? BRAND.white : '#F7F9FB',
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
              We Accept Your Insurance
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
              InSync Physical Therapy is in-network with most major insurance
              plans. We verify your benefits before your first appointment so
              there are no surprises.
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

        {/* Logo Grid */}
        <Box
          sx={{
            display:             'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(4, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {INSURERS.map(({ name, logo }) => (
            <Box
              key={name}
              sx={{
                border:          `1px solid ${BRAND.gray200}`,
                borderRadius:    3,
                backgroundColor: BRAND.white,
                height:          80,
                display:         'flex',
                alignItems:      'center',
                justifyContent:  'center',
                p:               2.5,
                position:        'relative',
                transition:      'all 0.2s ease',
                '&:hover': {
                  borderColor: BRAND.neoBlue,
                  boxShadow:   '0 4px 16px rgba(0,61,89,0.06)',
                },
              }}
            >
              <Image
                src={logo}
                alt={`${name} — accepted insurance at InSync Physical Therapy`}
                fill
                sizes="(max-width: 600px) 45vw, 200px"
                style={{
                  objectFit:    'contain',
                  objectPosition: 'center',
                  padding:      '12px 16px',
                }}
              />
            </Box>
          ))}
        </Box>

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
            Contact us — we accept additional plans and can verify your out-of-network
            benefits. We verify all insurance coverage before your first visit.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
