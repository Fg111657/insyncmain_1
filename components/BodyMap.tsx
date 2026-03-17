'use client';

import {
  useState,
  useCallback,
  useRef,
  useEffect,
  type KeyboardEvent,
} from 'react';
import Box        from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BodyMapSvg   from '@/components/BodyMapSvg';
import BodyMapPanel from '@/components/BodyMapPanel';
import {
  BODY_MAP_ZONES,
  getZoneById,
  type BodyMapZoneId,
} from '@/lib/bodyMapData';
import {
  trackBodyMapEvent,
  EVT_VIEW,
  EVT_ENGAGE,
  EVT_SELECT,
} from '@/lib/bodyMapAnalytics';
import { BRAND } from '@/lib/theme';

export default function BodyMap() {
  const [selectedId,  setSelectedId]  = useState<BodyMapZoneId | null>(null);
  const [hoveredId,   setHoveredId]   = useState<BodyMapZoneId | null>(null);
  const [hasEngaged,  setHasEngaged]  = useState(false);
  const sectionRef  = useRef<HTMLDivElement>(null);
  const panelRef    = useRef<HTMLDivElement>(null);

  // ── Fire view event once when section enters viewport ─────────────────────
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackBodyMapEvent(EVT_VIEW, { component: 'BodyMap', page: '/services' });
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── Zone selection ────────────────────────────────────────────────────────
  const handleSelect = useCallback(
    (id: BodyMapZoneId, method: 'pointer' | 'keyboard' = 'pointer') => {
      // First interaction fires EVT_ENGAGE once
      if (!hasEngaged) {
        setHasEngaged(true);
        trackBodyMapEvent(EVT_ENGAGE, { method, page: '/services' });
      }

      setSelectedId(prev => {
        const next = prev === id ? null : id;
        if (next !== null) {
          trackBodyMapEvent(EVT_SELECT, { zoneId: id, method, page: '/services' });
        }
        return next;
      });
    },
    [hasEngaged],
  );

  const handleClear = useCallback(() => {
    setSelectedId(null);
  }, []);

  const selectedZone = selectedId ? (getZoneById(selectedId) ?? null) : null;

  // ── Sorted zones for pill buttons ─────────────────────────────────────────
  const sortedZones = [...BODY_MAP_ZONES].sort((a, b) => a.order - b.order);

  return (
    <Box ref={sectionRef}>
      {/* ── Instruction text ──────────────────────────────────────────── */}
      <Typography
        sx={{
          textAlign:  'center',
          color:      BRAND.gray500,
          fontSize:   '0.8125rem',
          fontWeight: 500,
          mb:         { xs: 2.5, md: 3 },
        }}
      >
        Click a body area to see conditions we treat
      </Typography>

      {/* ── Main layout: SVG + panel ──────────────────────────────────── */}
      <Box
        sx={{
          display:             'grid',
          gridTemplateColumns: { xs: '1fr', md: '240px 1fr' },
          gap:                 { xs: 3, md: 6 },
          alignItems:          'flex-start',
        }}
      >
        {/* ── Left / top: SVG figure + mobile zone pills ─────────────── */}
        <Box>
          <BodyMapSvg
            selectedZoneId={selectedId}
            hoveredZoneId={hoveredId}
            onSelect={handleSelect}
            onHover={setHoveredId}
          />

          {/* Zone pill buttons — visible on mobile, hidden on md+ */}
          <Box
            role="group"
            aria-label="Select body area"
            sx={{
              display:        { xs: 'flex', md: 'none' },
              flexWrap:       'wrap',
              gap:            1,
              mt:             2.5,
              justifyContent: 'center',
            }}
          >
            {sortedZones.map(zone => {
              const isActive = selectedId === zone.id;
              return (
                <Box
                  key={zone.id}
                  component="button"
                  onClick={() => handleSelect(zone.id, 'pointer')}
                  onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelect(zone.id, 'keyboard');
                    }
                  }}
                  aria-pressed={isActive}
                  sx={{
                    minHeight:       44,
                    px:              1.75,
                    py:              0.75,
                    border:          `1px solid ${isActive ? BRAND.neoBlue : BRAND.gray200}`,
                    borderRadius:    5,
                    backgroundColor: isActive
                      ? 'rgba(14,197,230,0.12)'
                      : 'transparent',
                    color:      isActive ? BRAND.neoBlue : BRAND.gray700,
                    fontFamily: 'inherit',
                    fontSize:   '0.8125rem',
                    fontWeight: 600,
                    cursor:     'pointer',
                    transition: 'all 0.15s ease',
                    '&:hover': {
                      borderColor:     BRAND.neoBlue,
                      backgroundColor: 'rgba(14,197,230,0.08)',
                      color:           BRAND.neoBlue,
                    },
                    '&:focus-visible': {
                      outline:       `2px solid ${BRAND.neoBlue}`,
                      outlineOffset: '2px',
                    },
                  }}
                >
                  {zone.label}
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* ── Right / bottom: conditions panel ──────────────────────── */}
        <Box
          ref={panelRef}
          role="region"
          aria-label="Conditions for selected body area"
          aria-live="polite"
          aria-atomic="true"
        >
          <BodyMapPanel zone={selectedZone} onClear={handleClear} />
        </Box>
      </Box>

      {/* ── SEO / screen-reader substrate ─────────────────────────────────
           Always present in DOM. Visually hidden via sr-only pattern.
           Screen readers and search engine crawlers can access all zone
           labels and condition links from here regardless of JS state.
      ───────────────────────────────────────────────────────────────────── */}
      <Box
        component="ul"
        aria-label="All body areas and conditions we treat"
        sx={{
          position:   'absolute',
          width:      '1px',
          height:     '1px',
          overflow:   'hidden',
          clip:       'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border:     0,
          p:          0,
          m:          0,
          listStyle:  'none',
        }}
      >
        {sortedZones.map(zone => (
          <li key={zone.id}>
            <strong>{zone.label}:</strong>{' '}
            {zone.conditions.map((c, i) => (
              <span key={c.id}>
                <a href={c.href}>{c.title}</a>
                {i < zone.conditions.length - 1 ? ', ' : ''}
              </span>
            ))}
          </li>
        ))}
      </Box>
    </Box>
  );
}
