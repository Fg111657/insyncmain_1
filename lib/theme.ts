'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// ─── Brand Palette ───────────────────────────────────────────────────────────
// Source: RALPH Execution Plan — 3-color system
// Deep Petrol + White + Sinopia Orange. No teal. No gradients.
// eslint-disable-next-line no-restricted-syntax -- this IS the token definition file; hex values are intentional here
export const BRAND = {
  // ── Core palette (RALPH spec — 3 colours only)
  deepPetrol:    '#00262A',   // primary dark — headings, body text, nav, footer
  white:         '#FFFFFF',   // dominant canvas — most section backgrounds
  sinopia:       '#F63700',   // accent — CTAs, active states, highlights
  sinopiaHover:  '#D92F00',   // sinopia hover / pressed state
  // ── Grays (neutral support)
  gray100:       '#F3F4F6',
  gray200:       '#E5E7EB',
  gray400:       '#9CA3AF',
  gray500:       '#6B7280',
  gray700:       '#374151',
  // ── Semantic
  starGold:      '#F59E0B',   // review star colour only
  disabledBg:    '#B0BEC5',   // disabled button background only
  // ── Legacy aliases (ease migration — prefer new names above)
  spaceNavy:     '#00262A',
  luxBlue:       '#00262A',
  obsidian:      '#00262A',
  neoBlue:       '#F63700',
  neoBlueHover:  '#D92F00',
  offWhite:      '#FFFFFF',
} as const;

// ─── Font CSS Variables ───────────────────────────────────────────────────────
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:         BRAND.deepPetrol,
      dark:         BRAND.deepPetrol,
      light:        '#1a4a50',
      contrastText: BRAND.white,
    },
    secondary: {
      main:         BRAND.sinopia,
      dark:         BRAND.sinopiaHover,
      light:        '#FF5A33',
      contrastText: BRAND.white,
    },
    background: {
      default: BRAND.white,
      paper:   BRAND.white,
    },
    text: {
      primary:   BRAND.deepPetrol,
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
          backgroundColor: BRAND.sinopia,
          color:           BRAND.white,
          '&:hover': {
            backgroundColor: BRAND.sinopiaHover,
            transform:       'translateY(-1px)',
          },
        },
        containedSecondary: {
          backgroundColor: BRAND.deepPetrol,
          color:           BRAND.white,
          '&:hover': {
            backgroundColor: '#003338',
            transform:       'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: BRAND.deepPetrol,
          color:       BRAND.deepPetrol,
          '&:hover': {
            backgroundColor: 'rgba(0,38,42,0.05)',
            borderColor:     BRAND.deepPetrol,
          },
        },
        outlinedSecondary: {
          borderColor: BRAND.sinopia,
          color:       BRAND.sinopia,
          '&:hover': {
            backgroundColor: 'rgba(246,55,0,0.06)',
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
            boxShadow: '0 8px 32px rgba(0,38,42,0.08)',
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
              borderColor: BRAND.deepPetrol,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: BRAND.sinopia,
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: BRAND.sinopia,
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
          color: BRAND.sinopia,
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
