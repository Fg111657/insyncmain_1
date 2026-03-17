import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BRAND } from '@/lib/theme';

interface CTABandProps {
  headline?:    string;
  subline?:     string;
  variant?:     'navy' | 'dark';
  showPhone?:   boolean;
}

export default function CTABand({
  headline  = 'Ready to Start Your Recovery?',
  subline   = 'Brooklyn and Bryant Park locations. Insurance verified before your first visit.',
  variant   = 'navy',
  showPhone = true,
}: CTABandProps) {
  const bgClass = variant === 'dark' ? 'section-dark' : 'section-navy';

  return (
    <Box
      component="section"
      aria-label="Request appointment"
      className={bgClass}
      sx={{ py: { xs: 8, md: 10 } }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 }, textAlign: 'center' }}>
        <Typography
          component="p"
          sx={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            mb: 1.5,
          }}
        >
          InSync Physical Therapy
        </Typography>

        <Typography
          variant="h2"
          sx={{
            color:      BRAND.white,
            mb:         2,
            fontWeight: 800,
            fontSize:   { xs: '1.875rem', md: '2.75rem' },
            lineHeight: 1.1,
          }}
        >
          {headline}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color:     'rgba(255,255,255,0.65)',
            mb:        4.5,
            maxWidth:  460,
            mx:        'auto',
            lineHeight: 1.6,
          }}
        >
          {subline}
        </Typography>

        <Box
          sx={{
            display:        'flex',
            flexDirection:  { xs: 'column', sm: 'row' },
            gap:            2,
            justifyContent: 'center',
            alignItems:     'center',
          }}
        >
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: BRAND.neoBlue,
              color:           BRAND.obsidian,
              fontWeight:      700,
              px:              4,
              py:              1.875,
              fontSize:        '1rem',
              borderRadius:    999,
              minWidth:        220,
              '&:hover': {
                backgroundColor: BRAND.neoBlueHover,
                boxShadow:       '0 8px 28px rgba(14,197,230,0.28)',
              },
            }}
          >
            Request Appointment
          </Button>

          {showPhone && (
            <Button
              component="a"
              href="tel:+19294194643"
              variant="text"
              size="large"
              startIcon={<PhoneIcon sx={{ fontSize: '1rem' }} />}
              sx={{
                color:      'rgba(255,255,255,0.75)',
                fontWeight: 500,
                fontSize:   '0.9375rem',
                px:         2,
                '&:hover': {
                  color:           BRAND.neoBlue,
                  backgroundColor: 'transparent',
                },
              }}
            >
              929-419-4643
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
