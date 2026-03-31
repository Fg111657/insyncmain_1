'use client';

/**
 * MobileFAB — Floating Action Button (mobile only)
 * Sinopia orange per RALPH. WCAG 2.1 AA compliant.
 */

import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

export default function MobileFAB() {
  return (
    <Box
      component="a"
      href="tel:+19294194643"
      aria-label="Call InSync Physical Therapy at 929-419-4643"
      sx={{
        display:        { xs: 'flex', sm: 'none' },
        position:       'fixed',
        bottom:         20,
        right:          20,
        zIndex:         1400,
        alignItems:     'center',
        gap:            0.875,
        bgcolor:        BRAND.sinopia,
        color:          BRAND.white,
        borderRadius:   '28px',
        px:             2.5,
        py:             1.5,
        minHeight:      48,
        minWidth:       120,
        textDecoration: 'none',
        fontFamily:     'inherit',
        boxShadow:      '0 4px 20px rgba(246,55,0,0.35)',
        transition:     'background-color 0.18s ease, transform 0.18s ease',
        '&:hover': {
          bgcolor:   BRAND.sinopiaHover,
          transform: 'translateY(-2px)',
        },
        '&:focus-visible': {
          outline:       `2px solid ${BRAND.sinopia}`,
          outlineOffset: 3,
        },
      }}
    >
      <PhoneIcon sx={{ fontSize: '1.15rem', flexShrink: 0 }} />
      <Typography
        component="span"
        sx={{
          fontWeight:    700,
          fontSize:      '0.875rem',
          letterSpacing: '0.01em',
          lineHeight:    1,
        }}
      >
        Call Us
      </Typography>
    </Box>
  );
}
