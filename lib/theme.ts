'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// ─── Brand Palette ───────────────────────────────────────────────────────────
// Source: InSync brand deck New Logo V2 + business card authority
export const BRAND = {
  spaceNavy: '#003D59',   // primary dark — headings, nav, dark sections
  luxBlue:   '#00262A',   // deeper support / footer / overlay backgrounds
  neoBlue:   '#0EC5E6',   // accent — CTAs, highlights, active states
  white:     '#FFFFFF',   // dominant canvas
  offWhite:  '#F7F9FB',   // subtle section alternator
  gray100:   '#F3F4F6',
  gray200:   '#E5E7EB',
  gray500:   '#6B7280',
  gray700:   '#374151',
} as const;

// ─── Font CSS Variables ───────────────────────────────────────────────────────
// Primary:   Articulat CF (commercial — place .woff2 in /public/fonts/articulat/)
//            → Fallback: Inter (Google Fonts, loaded in layout.tsx)
// Secondary: Denton (commercial — place .woff2 in /public/fonts/denton/)
//            → Fallback: Playfair Display (Google Fonts, loaded in layout.tsx)
//
// To swap in licensed fonts, update the @font-face in globals.css and change
// the CSS variables --font-primary / --font-secondary there.

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:        BRAND.spaceNavy,
      dark:        BRAND.luxBlue,
      light:       '#1a5a7a',
      contrastText: BRAND.white,
    },
    secondary: {
      main:        BRAND.neoBlue,
      dark:        '#0aafcc',
      light:       '#3dd2ee',
      contrastText: BRAND.white,
    },
    background: {
      default: BRAND.white,
      paper:   BRAND.white,
    },
    text: {
      primary:   BRAND.spaceNavy,
      secondary: BRAND.gray700,
    },
    divider: BRAND.gray200,
  },

  typography: {
    fontFamily: 'var(--font-primary), Inter, system-ui, sans-serif',
    h1: {
      fontWeight:    800,
      lineHeight:    1.1,
      letterSpacing: '-0.025em',
      color:         BRAND.spaceNavy,
    },
    h2: {
      fontWeight:    700,
      lineHeight:    1.15,
      letterSpacing: '-0.02em',
      color:         BRAND.spaceNavy,
    },
    h3: {
      fontWeight:    700,
      lineHeight:    1.2,
      letterSpacing: '-0.01em',
      color:         BRAND.spaceNavy,
    },
    h4: {
      fontWeight:    600,
      lineHeight:    1.25,
      color:         BRAND.spaceNavy,
    },
    h5: {
      fontWeight:    600,
      lineHeight:    1.3,
      color:         BRAND.spaceNavy,
    },
    h6: {
      fontWeight:    600,
      lineHeight:    1.4,
      color:         BRAND.spaceNavy,
    },
    body1: {
      lineHeight:  1.7,
      color:       BRAND.gray700,
    },
    body2: {
      lineHeight:  1.6,
      color:       BRAND.gray500,
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontWeight: 500,
      lineHeight: 1.5,
      color:      BRAND.gray700,
    },
    caption: {
      letterSpacing: '0.05em',
      textTransform: 'uppercase' as const,
      fontWeight:    600,
      fontSize:      '0.7rem',
      color:         BRAND.gray500,
    },
    button: {
      textTransform: 'none' as const,
      fontWeight:    600,
      letterSpacing: '0.01em',
    },
  },

  shape: {
    borderRadius: 4,
  },

  spacing: 8,

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius:  4,
          padding:       '12px 28px',
          fontSize:      '0.9375rem',
          fontWeight:    600,
          textTransform: 'none',
          letterSpacing: '0.01em',
          transition:    'all 0.2s ease',
        },
        containedPrimary: {
          backgroundColor: BRAND.neoBlue,
          color:           BRAND.white,
          '&:hover': {
            backgroundColor: '#0AAFCC',
            transform:       'translateY(-1px)',
            boxShadow:       '0 4px 16px rgba(14,197,230,0.3)',
          },
        },
        containedSecondary: {
          backgroundColor: BRAND.spaceNavy,
          color:           BRAND.white,
          '&:hover': {
            backgroundColor: BRAND.luxBlue,
            transform:       'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: BRAND.neoBlue,
          color:       BRAND.neoBlue,
          '&:hover': {
            backgroundColor: 'rgba(14,197,230,0.08)',
            borderColor:     BRAND.neoBlue,
          },
        },
        outlinedSecondary: {
          borderColor: BRAND.spaceNavy,
          color:       BRAND.spaceNavy,
          '&:hover': {
            backgroundColor: 'rgba(0,61,89,0.06)',
          },
        },
        sizeLarge: {
          padding:  '14px 36px',
          fontSize: '1.0625rem',
        },
        sizeSmall: {
          padding:  '8px 20px',
          fontSize: '0.875rem',
        },
      },
    },

    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          border:       `1px solid ${BRAND.gray200}`,
          transition:   'box-shadow 0.2s ease, transform 0.2s ease',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(0,61,89,0.08)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: BRAND.spaceNavy,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: BRAND.neoBlue,
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: BRAND.neoBlue,
          },
        },
      },
    },

    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border:       `1px solid ${BRAND.gray200}`,
          borderRadius: '4px !important',
          marginBottom: 8,
          '&:before': { display: 'none' },
          '&.Mui-expanded': {
            margin: '0 0 8px 0',
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '4px 24px',
          '&.Mui-expanded': {
            minHeight: 56,
          },
        },
        content: {
          '&.Mui-expanded': {
            margin: '12px 0',
          },
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 24px 20px',
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: BRAND.gray200,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight:  500,
          borderRadius: 4,
        },
      },
    },

    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          color: BRAND.neoBlue,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg'],
  factor:      2,
});

export default theme;
