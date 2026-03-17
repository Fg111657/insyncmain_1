'use client';

import Box         from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import Link        from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TouchAppIcon     from '@mui/icons-material/TouchApp';
import { BRAND }   from '@/lib/theme';
import type { BodyMapZone } from '@/lib/bodyMapData';
import {
  trackBodyMapEvent,
  EVT_COND,
  EVT_CLEAR,
} from '@/lib/bodyMapAnalytics';

interface BodyMapPanelProps {
  zone:    BodyMapZone | null;
  onClear: () => void;
}

export default function BodyMapPanel({ zone, onClear }: BodyMapPanelProps) {
  // ── Empty / default state ────────────────────────────────────────────────
  if (!zone) {
    return (
      <Box
        sx={{
          display:        'flex',
          flexDirection:  'column',
          alignItems:     { xs: 'center', md: 'flex-start' },
          justifyContent: 'center',
          textAlign:      { xs: 'center', md: 'left' },
          minHeight:      { md: 300 },
          py:             { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            width:           52,
            height:          52,
            borderRadius:    '50%',
            backgroundColor: BRAND.gray100,
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            mb:              2,
          }}
        >
          <TouchAppIcon sx={{ fontSize: '1.5rem', color: BRAND.gray500 }} />
        </Box>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize:   '1rem',
            color:      BRAND.gray700,
            mb:         0.75,
          }}
        >
          Select a body area
        </Typography>

        <Typography
          sx={{
            color:    BRAND.gray500,
            fontSize: '0.875rem',
            maxWidth: 260,
            lineHeight: 1.65,
          }}
        >
          Click any highlighted region on the figure — or use the buttons
          below — to see conditions we treat and how we can help.
        </Typography>
      </Box>
    );
  }

  // ── Zone detail ──────────────────────────────────────────────────────────
  return (
    <Box>
      {/* Zone label + description */}
      <Box sx={{ mb: 3 }}>
        <Typography
          component="p"
          sx={{
            fontSize:      '0.72rem',
            fontWeight:    700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color:         BRAND.neoBlue,
            mb:            0.75,
          }}
        >
          Conditions We Treat
        </Typography>

        <Typography
          component="h3"
          sx={{
            fontWeight: 800,
            fontSize:   { xs: '1.625rem', md: '2rem' },
            color:      BRAND.spaceNavy,
            lineHeight: 1.1,
            mb:         1.5,
          }}
        >
          {zone.label}
        </Typography>

        <Typography
          sx={{
            color:      BRAND.gray500,
            fontSize:   '0.9375rem',
            lineHeight: 1.7,
          }}
        >
          {zone.description}
        </Typography>
      </Box>

      {/* Conditions list */}
      <Box
        component="ul"
        sx={{
          listStyle:     'none',
          p:             0,
          m:             0,
          display:       'flex',
          flexDirection: 'column',
          gap:           1.5,
          mb:            3,
        }}
      >
        {zone.conditions.map(condition => (
          <Box
            key={condition.id}
            component="li"
            sx={{
              display:         'flex',
              alignItems:      'center',
              gap:             1.5,
              py:              1.25,
              px:              2,
              backgroundColor: 'rgba(14,197,230,0.05)',
              border:          '1px solid rgba(14,197,230,0.15)',
              borderRadius:    2,
              transition:      'background-color 0.15s ease',
              '&:hover': {
                backgroundColor: 'rgba(14,197,230,0.10)',
              },
            }}
          >
            {/* Dot indicator */}
            <Box
              sx={{
                width:           8,
                height:          8,
                borderRadius:    '50%',
                backgroundColor: BRAND.neoBlue,
                flexShrink:      0,
              }}
            />

            <Typography
              sx={{
                fontWeight: 600,
                fontSize:   '0.9375rem',
                color:      BRAND.spaceNavy,
                flex:       1,
              }}
            >
              {condition.title}
            </Typography>

            <Link
              href={condition.href}
              aria-label={`Learn more about ${condition.title}`}
              onClick={() =>
                trackBodyMapEvent(EVT_COND, {
                  zoneId:      zone.id,
                  conditionId: condition.id,
                  page:        '/services',
                })
              }
              style={{ display: 'flex', alignItems: 'center', color: BRAND.neoBlue }}
            >
              <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
            </Link>
          </Box>
        ))}
      </Box>

      {/* CTA row */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
        <Box
          component={Link}
          href="/contact"
          sx={{
            display:         'inline-flex',
            alignItems:      'center',
            gap:             0.75,
            backgroundColor: BRAND.neoBlue,
            color:           BRAND.white,
            fontWeight:      700,
            fontSize:        '0.9375rem',
            px:              3,
            py:              1.375,
            borderRadius:    2,
            textDecoration:  'none',
            transition:      'all 0.2s ease',
            '&:hover': {
              backgroundColor: BRAND.neoBlueHover,
              transform:       'translateY(-1px)',
            },
            '&:focus-visible': {
              outline:       `2px solid ${BRAND.neoBlue}`,
              outlineOffset: '3px',
            },
          }}
        >
          Request Appointment
          <ArrowForwardIcon sx={{ fontSize: '0.9rem' }} />
        </Box>

        <Box
          component="button"
          onClick={() => {
            trackBodyMapEvent(EVT_CLEAR, { page: '/services' });
            onClear();
          }}
          sx={{
            background:  'none',
            border:      `1px solid ${BRAND.gray200}`,
            borderRadius: 2,
            px:          2,
            py:          1.375,
            fontFamily:  'inherit',
            fontSize:    '0.875rem',
            fontWeight:  600,
            color:       BRAND.gray500,
            cursor:      'pointer',
            transition:  'all 0.15s ease',
            '&:hover': {
              borderColor: BRAND.spaceNavy,
              color:       BRAND.spaceNavy,
            },
            '&:focus-visible': {
              outline:       `2px solid ${BRAND.neoBlue}`,
              outlineOffset: '2px',
            },
          }}
        >
          Clear selection
        </Box>
      </Box>
    </Box>
  );
}
