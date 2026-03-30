'use client';

import { useState, useCallback } from 'react';
import { useReducedMotion, type TargetAndTransition } from 'framer-motion';
import { TILT } from '@/lib/depth-tokens';

/**
 * 3D card-tilt on mouse hover.
 *
 * Returns handlers + a Framer Motion–compatible style object.
 * Tilt magnitude is capped at `maxDeg` (default 4 deg) for a subtle,
 * trust-appropriate effect. Respects `prefers-reduced-motion`.
 */
export function useTiltHover(maxDeg: number = TILT.maxDeg) {
  const prefersReduced = useReducedMotion();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (prefersReduced) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      setTilt({ rotateX: -y * maxDeg * 2, rotateY: x * maxDeg * 2 });
    },
    [maxDeg, prefersReduced],
  );

  const onMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  const animate: TargetAndTransition = {
    rotateX: tilt.rotateX,
    rotateY: tilt.rotateY,
    transition: TILT.resetSpring,
  };

  return {
    onMouseMove,
    onMouseLeave,
    animate,
    style: { perspective: TILT.perspective, transformStyle: 'preserve-3d' as const },
  };
}
