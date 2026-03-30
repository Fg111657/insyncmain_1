'use client';

import { useRef } from 'react';
import {
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';

/**
 * Lightweight parallax hook — shifts an element vertically based on scroll.
 *
 * @param speed  Multiplier (0–1). 0.1 = subtle, 0.3 = dramatic. Default 0.12.
 * @returns      `{ ref, y }` — attach ref to the container, y to style.y.
 */
export function useParallax(speed = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [-60 * speed, 60 * speed],
  );

  return { ref, y };
}
