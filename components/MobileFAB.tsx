'use client';

/**
 * MobileFAB — Floating Action Button (mobile only)
 * Fixed bottom-right call shortcut, visible on screens ≤ 640 px.
 * Meets WCAG 2.1 AA: 48 px minimum touch target, high-contrast colours,
 * accessible label, visible focus ring.
 */

import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

const PHONE_DISPLAY = '929-419-4643';
const PHONE_TEL     = '+19294194643';

export default function MobileFAB() {
  return (
    <Box
      component="a"
      href={`tel:${PHONE_TEL}`}
      aria-label={`Call InSync Physical Therapy at ${PHONE_DISPLAY}`}
      data-analytics="mobile-fab-call"
      sx={{
        /* Show only on xs/sm */
        display:        { xs: 'flex', sm: 'none' },

        /* Fixed positioning — thumb-zone accessible */
        position:       'fixed',
        bottom:         20,
        right:          20,
        zIndex:         1400,

        /* Layout */
        alignItems:     'center',
        gap:            0.875,

        /* Brand colours */
        bgcolor:        BRAND.neoBlue,
        color:          BRAND.white,

        /* Shape & size */
        borderRadius:   '28px',
        px:             2.5,
        py:             1.5,
        minHeight:      48,   /* WCAG 2.5.5 minimum touch target */
        minWidth:       120,

        /* Decoration */
        textDecoration: 'none',
        fontFamily:     'inherit',
        boxShadow:      '0 4px 24px rgba(14,197,230,0.40)',

        /* Motion */
        transition:     'background-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease',
        '&:hover': {
          bgcolor:   BRAND.neoBlueHover,
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 32px rgba(14,197,230,0.55)',
        },

        /* Focus visible — WCAG 2.4.11 */
        '&:focus-visible': {
          outline:       `2px solid ${BRAND.neoBlue}`,
          outlineOffset: 3,
          bgcolor:       BRAND.neoBlueHover,
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
