'use client';

/**
 * HorizontalCarousel — Horizontal pinwheel/scroll carousel.
 * Drag-to-scroll, no external dependencies. Snap to cards.
 * Renders children as horizontally-scrolling cards.
 */

import React, { useRef, useState, useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BRAND } from '@/lib/theme';

interface HorizontalCarouselProps {
  children:    React.ReactNode;
  /** Width of each card */
  cardWidth?:  { xs: number; sm?: number; md?: number };
  /** Gap between cards in px */
  gap?:        number;
  /** Show navigation arrows */
  showArrows?: boolean;
}

export default function HorizontalCarousel({
  children,
  cardWidth = { xs: 280, sm: 320, md: 360 },
  gap = 16,
  showArrows = true,
}: HorizontalCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  /* Drag-to-scroll */
  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    const dx = e.clientX - dragStart.current.x;
    el.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    scrollRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Scroll container */}
      <Box
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        sx={{
          display:       'flex',
          gap:           `${gap}px`,
          overflowX:     'auto',
          overflowY:     'hidden',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          cursor:        isDragging ? 'grabbing' : 'grab',
          userSelect:    'none',
          px:            { xs: 2, md: 0 },
          pb:            1,
          /* Hide scrollbar */
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          /* Card widths */
          '& > *': {
            flex:         '0 0 auto',
            width:        { xs: cardWidth.xs, sm: cardWidth.sm ?? cardWidth.xs, md: cardWidth.md ?? cardWidth.xs },
            scrollSnapAlign: 'start',
          },
        }}
      >
        {children}
      </Box>

      {/* Fade edges */}
      <Box
        sx={{
          display:     { xs: 'none', md: 'block' },
          position:    'absolute',
          top:         0,
          left:        0,
          width:       48,
          height:      '100%',
          background:  'linear-gradient(to right, white 0%, transparent 100%)',
          pointerEvents: 'none',
          opacity:     canScrollLeft ? 1 : 0,
          transition:  'opacity 0.2s',
          zIndex:      2,
        }}
      />
      <Box
        sx={{
          display:     { xs: 'none', md: 'block' },
          position:    'absolute',
          top:         0,
          right:       0,
          width:       48,
          height:      '100%',
          background:  'linear-gradient(to left, white 0%, transparent 100%)',
          pointerEvents: 'none',
          opacity:     canScrollRight ? 1 : 0,
          transition:  'opacity 0.2s',
          zIndex:      2,
        }}
      />

      {/* Arrow buttons */}
      {showArrows && (
        <>
          <IconButton
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            sx={{
              display:     { xs: 'none', md: canScrollLeft ? 'flex' : 'none' },
              position:    'absolute',
              top:         '50%',
              left:        -20,
              transform:   'translateY(-50%)',
              zIndex:      3,
              width:       40,
              height:      40,
              backgroundColor: BRAND.white,
              border:      `1px solid ${BRAND.gray200}`,
              boxShadow:   '0 2px 8px rgba(0,0,0,0.08)',
              transition:  'all 0.2s',
              '&:hover': {
                backgroundColor: BRAND.white,
                borderColor:     BRAND.sinopia,
                boxShadow:       '0 4px 12px rgba(0,0,0,0.12)',
              },
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: '1.25rem', color: BRAND.deepPetrol }} />
          </IconButton>
          <IconButton
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            sx={{
              display:     { xs: 'none', md: canScrollRight ? 'flex' : 'none' },
              position:    'absolute',
              top:         '50%',
              right:       -20,
              transform:   'translateY(-50%)',
              zIndex:      3,
              width:       40,
              height:      40,
              backgroundColor: BRAND.white,
              border:      `1px solid ${BRAND.gray200}`,
              boxShadow:   '0 2px 8px rgba(0,0,0,0.08)',
              transition:  'all 0.2s',
              '&:hover': {
                backgroundColor: BRAND.white,
                borderColor:     BRAND.sinopia,
                boxShadow:       '0 4px 12px rgba(0,0,0,0.12)',
              },
            }}
          >
            <ChevronRightIcon sx={{ fontSize: '1.25rem', color: BRAND.deepPetrol }} />
          </IconButton>
        </>
      )}
    </Box>
  );
}
