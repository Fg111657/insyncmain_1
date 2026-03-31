import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

/**
 * Footer — RALPH spec
 * Minimal: copyright, terms, privacy, socials.
 * No services column, no quick links, no medical disclaimer.
 */

const LEGAL_LINKS = [
  { label: 'Privacy Policy',   href: '/privacy'       },
  { label: 'Terms of Service', href: '/terms'         },
  { label: 'Accessibility',    href: '/accessibility'  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: BRAND.deepPetrol,
        color:           BRAND.white,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py:             { xs: 3, md: 4 },
          display:        'flex',
          flexDirection:  { xs: 'column', sm: 'row' },
          alignItems:     { sm: 'center' },
          justifyContent: 'space-between',
          gap:            2,
        }}
      >
        {/* Copyright */}
        <Typography
          sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}
        >
          © {new Date().getFullYear()} InSync Physical Therapy & Fitness
        </Typography>

        {/* Legal Links */}
        <Box
          sx={{
            display:  'flex',
            gap:      2.5,
            flexWrap: 'wrap',
          }}
        >
          {LEGAL_LINKS.map(({ label, href }) => (
            <Typography
              key={href}
              component={Link}
              href={href}
              sx={{
                color:          'rgba(255,255,255,0.4)',
                fontSize:       '0.8rem',
                textDecoration: 'none',
                transition:     'color 0.15s ease',
                '&:hover': { color: 'rgba(255,255,255,0.7)' },
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
