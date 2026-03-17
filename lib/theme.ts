'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// ─── Brand Palette ───────────────────────────────────────────────────────────
// Source: InSync brand deck New Logo V2 + business card authority
export const BRAND = {
  // ── Core palette (source of truth — never hardcode these hex values inline)
  spaceNavy:     '#003D59',   // primary dark — headings, nav, dark sections
  luxBlue:       '#00262A',   // deeper support / footer / overlay backgrounds
  obsidian:      '#001820',   // deepest dark — gradient endpoints, dark overlays
  neoBlue:       '#0EC5E6',   // accent — highlights only
  neoBlueHover:  '#0AAFCC',   // accent hover / pressed state
  white:         '#FFFFFF',   // dominant canvas
  offWhite:      '#F7F9FB',   // subtle section alternator
  sand:          '#EFF4F6',
  // ── Grays
  gray100:       '#F3F4F6',
  gray200:       '#E5E7EB',
  gray500:       '#6B7280',
  gray700:       '#374151',
  // ── Semantic (use sparingly, only where listed)
  starGold:      '#F59E0B',   // review star color only — do not use elsewhere
  disabledBg:    '#B0BEC5',   // disabled button background only
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
    },
    h2: {
      fontWeight:    700,
      lineHeight:    1.15,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight:    700,
      lineHeight:    1.2,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight:    600,
      lineHeight:    1.25,
    },
    h5: {
      fontWeight:    600,
      lineHeight:    1.3,
    },
    h6: {
      fontWeight:    600,
      lineHeight:    1.4,
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
    borderRadius: 8,
  },

  spacing: 8,

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius:  999,
          padding:       '12px 24px',
          fontSize:      '0.9375rem',
          fontWeight:    600,
          textTransform: 'none',
          letterSpacing: '0.01em',
          transition:    'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
        },
        containedPrimary: {
          backgroundColor: BRAND.spaceNavy,
          color:           BRAND.white,
          '&:hover': {
            backgroundColor: BRAND.luxBlue,
          },
        },
        containedSecondary: {
          backgroundColor: BRAND.white,
          color:           BRAND.spaceNavy,
          border:          `1px solid ${BRAND.gray200}`,
          '&:hover': {
            backgroundColor: BRAND.offWhite,
          },
        },
        outlinedPrimary: {
          borderColor: BRAND.spaceNavy,
          color:       BRAND.spaceNavy,
          '&:hover': {
            backgroundColor: 'rgba(0,61,89,0.04)',
            borderColor:     BRAND.spaceNavy,
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
          borderRadius: 20,
          border:       `1px solid ${BRAND.gray200}`,
          boxShadow:    'none',
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
            borderRadius: 18,
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

    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
      styleOverrides: {
        root: {
          paddingLeft:  '24px',
          paddingRight: '24px',
          '@media (min-width: 600px)': {
            paddingLeft:  '32px',
            paddingRight: '32px',
          },
        },
      },
    },

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft:  '0 !important',
          paddingRight: '0 !important',
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
