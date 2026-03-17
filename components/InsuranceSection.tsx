import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

const INSURERS = [
  { name: 'Aetna', logo: '/assets/logo-badges/Aetna_standard_logo.png' },
  { name: 'Blue Cross Blue Shield', logo: '/assets/logo-badges/BlueCrossBlueShield_standard_logo.png' },
  { name: 'Cigna', logo: '/assets/logo-badges/Cigna_standard_logo.png' },
  { name: 'United Healthcare', logo: '/assets/logo-badges/UnitedHealthcare_standard_logo.png' },
  { name: 'Medicare', logo: '/assets/logo-badges/Medicare_standard_logo.png' },
  { name: 'Fidelis Care', logo: '/assets/logo-badges/Fidelis_standard_logo.png' },
  { name: 'HIP', logo: '/assets/logo-badges/HIP_standard_logo.png' },
  { name: 'NYC Employee Benefits', logo: '/assets/logo-badges/NYCEPP_standard_logo.png' },
];

interface InsuranceSectionProps {
  compact?: boolean;
}

export default function InsuranceSection({ compact = false }: InsuranceSectionProps) {
  return (
    <Box component="section" id="insurance" aria-label="Accepted insurance" sx={{ py: { xs: compact ? 6 : 10, md: compact ? 8 : 14 }, backgroundColor: BRAND.offWhite }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {!compact && (
          <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
            <Typography component="p" className="overline" sx={{ mb: 2 }}>
              Insurance
            </Typography>
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Accepted plans, presented cleanly
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.gray500, lineHeight: 1.7 }}>
              Coverage matters, but the section should still feel premium. These logos work better in a quiet grid than in a moving carousel.
            </Typography>
          </Box>
        )}

        {compact && (
          <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.5rem', md: '1.875rem' } }}>
            Accepted Insurance Plans
          </Typography>
        )}

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 2,
          }}
        >
          {INSURERS.map(({ name, logo }) => (
            <Box
              key={name}
              sx={{
                minHeight: 104,
                borderRadius: 4,
                border: `1px solid ${BRAND.gray200}`,
                backgroundColor: BRAND.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2.5,
              }}
            >
              <Image src={logo} alt={`${name} logo`} width={160} height={80} style={{ width: '100%', maxWidth: 160, height: 'auto', objectFit: 'contain' }} />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: compact ? 3 : 5,
            borderRadius: 4,
            border: `1px solid ${BRAND.gray200}`,
            backgroundColor: BRAND.white,
            px: { xs: 3, md: 4 },
            py: 3,
          }}
        >
          <Typography variant="body2" sx={{ color: BRAND.gray700, lineHeight: 1.6, fontSize: '0.92rem' }}>
            Don&apos;t see your plan listed? Contact us. Additional plans and out-of-network benefits can be reviewed before your first visit.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
