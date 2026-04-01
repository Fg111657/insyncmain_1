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
        backgroundColor: '#F5F5F5',
        borderTop:       `1px solid ${BRAND.gray200}`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py:             { xs: 2.5, md: 3 },
          display:        'flex',
          flexDirection:  { xs: 'column', sm: 'row' },
          alignItems:     { sm: 'center' },
          justifyContent: 'space-between',
          gap:            2,
        }}
      >
        {/* Copyright */}
        <Typography
          sx={{ color: BRAND.gray400, fontSize: '0.75rem' }}
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
                color:          BRAND.gray400,
                fontSize:       '0.75rem',
                textDecoration: 'none',
                transition:     'color 0.15s ease',
                '&:hover': { color: BRAND.deepPetrol },
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
