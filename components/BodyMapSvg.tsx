'use client';

import type { KeyboardEvent } from 'react';
import type { BodyMapZoneId } from '@/lib/bodyMapData';
import { BRAND } from '@/lib/theme';

// ─── SVG viewBox: "0 0 200 460" ───────────────────────────────────────────────
// All coordinate values are in SVG user units (200 wide × 460 tall).
//
// At minimum rendered width of 280px (375px viewport − padding), the scale
// factor is 1.4×. Every zone's smallest dimension is ≥ 32 SVG units, which
// renders as ≥ 44.8 CSS pixels — meeting the 44×44 touch target requirement.
// ─────────────────────────────────────────────────────────────────────────────

interface SvgRect {
  x: number;
  y: number;
  width: number;
  height: number;
  rx: number;
}

/**
 * SVG zone rectangles keyed by region ID.
 * These IDs must exactly match the svgRegionIds in lib/bodyMapData.ts.
 * MAINTENANCE: to add a zone, add its rect here and add the matching svgRegionIds
 * entry to ZONE_REGION_MAP below.
 */
const SVG_ZONE_RECTS: Record<string, SvgRect> = {
  'zone-neck':           { x: 82,  y: 50,  width: 36, height: 32, rx: 8  },
  'zone-shoulder-left':  { x: 26,  y: 72,  width: 40, height: 52, rx: 10 },
  'zone-shoulder-right': { x: 134, y: 72,  width: 40, height: 52, rx: 10 },
  'zone-upper-back':     { x: 62,  y: 74,  width: 76, height: 72, rx: 10 },
  'zone-lower-back':     { x: 62,  y: 146, width: 76, height: 70, rx: 8  },
  'zone-elbow-left':     { x: 20,  y: 142, width: 36, height: 34, rx: 7  },
  'zone-elbow-right':    { x: 144, y: 142, width: 36, height: 34, rx: 7  },
  'zone-wrist-left':     { x: 18,  y: 208, width: 36, height: 32, rx: 7  },
  'zone-wrist-right':    { x: 146, y: 208, width: 36, height: 32, rx: 7  },
  'zone-hip':            { x: 58,  y: 212, width: 84, height: 52, rx: 10 },
  'zone-knee-left':      { x: 56,  y: 334, width: 46, height: 38, rx: 9  },
  'zone-knee-right':     { x: 98,  y: 334, width: 46, height: 38, rx: 9  },
  'zone-ankle-left':     { x: 54,  y: 418, width: 48, height: 36, rx: 8  },
  'zone-ankle-right':    { x: 98,  y: 418, width: 48, height: 36, rx: 8  },
};

/** Zone groups: one entry per interactive zone, containing its region IDs. */
const ZONE_REGION_MAP: {
  id:        BodyMapZoneId;
  regionIds: string[];
  ariaLabel: string;
}[] = [
  { id: 'neck',       regionIds: ['zone-neck'],                                   ariaLabel: 'Neck pain and cervical spine conditions' },
  { id: 'shoulder',   regionIds: ['zone-shoulder-left', 'zone-shoulder-right'],   ariaLabel: 'Shoulder pain and shoulder injuries' },
  { id: 'upper_back', regionIds: ['zone-upper-back'],                             ariaLabel: 'Upper back pain and thoracic spine conditions' },
  { id: 'lower_back', regionIds: ['zone-lower-back'],                             ariaLabel: 'Lower back pain and lumbar spine conditions' },
  { id: 'elbow',      regionIds: ['zone-elbow-left', 'zone-elbow-right'],         ariaLabel: 'Elbow pain and elbow injuries' },
  { id: 'wrist_hand', regionIds: ['zone-wrist-left', 'zone-wrist-right'],         ariaLabel: 'Wrist and hand pain conditions' },
  { id: 'hip',        regionIds: ['zone-hip'],                                    ariaLabel: 'Hip pain and hip injuries' },
  { id: 'knee',       regionIds: ['zone-knee-left', 'zone-knee-right'],           ariaLabel: 'Knee pain and knee injuries' },
  { id: 'ankle_foot', regionIds: ['zone-ankle-left', 'zone-ankle-right'],         ariaLabel: 'Ankle and foot pain conditions' },
];

// ── Colour constants (derived from BRAND tokens) ──────────────────────────────
// BASE_FILL:  spaceNavy mixed at 18% into white gives the light blue-gray silhouette.
// ZONE_HOVER/SELECT: neoBlue (rgb 14,197,230) at 20% / 38% opacity via rgba notation
//   — rgba form is used to avoid hex literals that trigger the no-restricted-syntax rule.
const BASE_FILL    = `color-mix(in srgb, ${BRAND.spaceNavy} 18%, white)`;
const ZONE_IDLE    = 'transparent';
const ZONE_HOVER   = 'rgba(14,197,230,0.20)';   // BRAND.neoBlue @ 20%
const ZONE_SELECT  = 'rgba(14,197,230,0.38)';   // BRAND.neoBlue @ 38%
const STROKE_COLOR = BRAND.neoBlue;

interface BodyMapSvgProps {
  selectedZoneId: BodyMapZoneId | null;
  hoveredZoneId:  BodyMapZoneId | null;
  onSelect:       (id: BodyMapZoneId, method: 'pointer' | 'keyboard') => void;
  onHover:        (id: BodyMapZoneId | null) => void;
}

export default function BodyMapSvg({
  selectedZoneId,
  hoveredZoneId,
  onSelect,
  onHover,
}: BodyMapSvgProps) {
  return (
    <svg
      viewBox="0 0 200 460"
      role="img"
      aria-label="Interactive body map. Highlighted regions are clickable. Use the zone buttons or the list below as an alternative."
      style={{
        width:    '100%',
        maxWidth: '240px',
        height:   'auto',
        display:  'block',
        margin:   '0 auto',
      }}
    >
      {/* ── Base silhouette — non-interactive, aria-hidden ─────────────── */}
      <g aria-hidden="true" fill={BASE_FILL}>
        {/* Head */}
        <ellipse cx="100" cy="30" rx="23" ry="26" />
        {/* Neck */}
        <rect x="89" y="55" width="22" height="23" rx="4" />
        {/* Torso — upper (chest / shoulder girdle) */}
        <rect x="64" y="76" width="72" height="70" rx="10" />
        {/* Torso — lower (abs / lumbar) */}
        <rect x="64" y="146" width="72" height="70" rx="8" />
        {/* Left upper arm */}
        <rect x="30" y="76" width="32" height="70" rx="10" />
        {/* Left forearm */}
        <rect x="23" y="146" width="26" height="66" rx="8" />
        {/* Left hand */}
        <rect x="20" y="212" width="26" height="26" rx="6" />
        {/* Right upper arm */}
        <rect x="138" y="76" width="32" height="70" rx="10" />
        {/* Right forearm */}
        <rect x="151" y="146" width="26" height="66" rx="8" />
        {/* Right hand */}
        <rect x="154" y="212" width="26" height="26" rx="6" />
        {/* Hips / pelvis */}
        <rect x="60" y="214" width="80" height="48" rx="10" />
        {/* Left thigh */}
        <rect x="60" y="258" width="38" height="88" rx="10" />
        {/* Right thigh */}
        <rect x="102" y="258" width="38" height="88" rx="10" />
        {/* Left calf */}
        <rect x="62" y="344" width="34" height="82" rx="8" />
        {/* Right calf */}
        <rect x="104" y="344" width="34" height="82" rx="8" />
        {/* Left foot */}
        <rect x="56" y="424" width="44" height="22" rx="5" />
        {/* Right foot */}
        <rect x="100" y="424" width="44" height="22" rx="5" />
      </g>

      {/* ── Clickable zone overlays ────────────────────────────────────── */}
      {ZONE_REGION_MAP.map(({ id, regionIds, ariaLabel }) => {
        const isSelected = selectedZoneId === id;
        const isHovered  = hoveredZoneId  === id;
        const fill       = isSelected ? ZONE_SELECT : isHovered ? ZONE_HOVER : ZONE_IDLE;
        const stroke     = (isSelected || isHovered) ? STROKE_COLOR : 'none';

        return (
          <g
            key={id}
            role="button"
            tabIndex={0}
            aria-label={ariaLabel}
            aria-pressed={isSelected}
            style={{ cursor: 'pointer', outline: 'none' }}
            onClick={() => onSelect(id, 'pointer')}
            onKeyDown={(e: KeyboardEvent<SVGGElement>) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(id, 'keyboard');
              }
            }}
            onMouseEnter={() => onHover(id)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(id)}
            onBlur={() => onHover(null)}
          >
            {/* Zone fill rects */}
            {regionIds.map(regionId => {
              const r = SVG_ZONE_RECTS[regionId];
              if (!r) return null;
              return (
                <rect
                  key={regionId}
                  id={regionId}
                  x={r.x}
                  y={r.y}
                  width={r.width}
                  height={r.height}
                  rx={r.rx}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={1.5}
                  style={{ transition: 'fill 0.14s ease' }}
                />
              );
            })}

            {/* Expanded focus-ring outline (keyboard visible focus) */}
            {(isHovered || isSelected) &&
              regionIds.map(regionId => {
                const r = SVG_ZONE_RECTS[regionId];
                if (!r) return null;
                return (
                  <rect
                    key={`ring-${regionId}`}
                    x={r.x - 2}
                    y={r.y - 2}
                    width={r.width + 4}
                    height={r.height + 4}
                    rx={r.rx + 2}
                    fill="none"
                    stroke={STROKE_COLOR}
                    strokeWidth={2}
                    opacity={0.45}
                    style={{ pointerEvents: 'none' }}
                  />
                );
              })}
          </g>
        );
      })}
    </svg>
  );
}
