'use client';

import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';

// ─── MotionSection ────────────────────────────────────────────────────────────
// Framer Motion entrance animation wrapper.
//
// BRAND GUIDELINES:
// - Types allowed: entrance fade + translateY only (opacity + transform)
// - Duration: max 400ms per element
// - Stagger: 150ms between list items
// - Never animate: hero section above the fold, images, navigation
// - prefers-reduced-motion: skip animation entirely, render at final state
//
// USAGE:
//   <MotionSection>
//     <CardGrid />
//   </MotionSection>
//
//   <MotionSection delay={0.15} distance={24}>
//     <Typography variant="h2">Headline</Typography>
//   </MotionSection>
//
// For staggered list items, use `variant="item"` on each child inside a
// `variant="list"` MotionSection:
//
//   <MotionSection variant="list">
//     {items.map((item, i) => (
//       <MotionSection key={item.id} variant="item">
//         <Card ... />
//       </MotionSection>
//     ))}
//   </MotionSection>
// ─────────────────────────────────────────────────────────────────────────────

type MotionVariantName = 'section' | 'list' | 'item';

interface MotionSectionProps {
  children:  React.ReactNode;
  /** Animation variant type (default: 'section') */
  variant?:  MotionVariantName;
  /** Additional delay in seconds before animation starts (default: 0) */
  delay?:    number;
  /** How far the element translates up from initial position in px (default: 20) */
  distance?: number;
  /** Duration in seconds (max 0.4) */
  duration?: number;
  /** Pass-through className */
  className?: string;
}

// ─── Variant definitions ─────────────────────────────────────────────────────

function buildSectionVariants(delay: number, distance: number, duration: number): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity:    1,
      y:          0,
      transition: {
        delay,
        duration: Math.min(duration, 0.4),
        ease:     [0.25, 0.1, 0.25, 1],
      },
    },
  };
}

const LIST_VARIANTS: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function buildItemVariants(distance: number, duration: number): Variants {
  return {
    hidden:  { opacity: 0, y: distance },
    visible: {
      opacity:    1,
      y:          0,
      transition: {
        duration: Math.min(duration, 0.4),
        ease:     [0.25, 0.1, 0.25, 1],
      },
    },
  };
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function MotionSection({
  children,
  variant  = 'section',
  delay    = 0,
  distance = 12,
  duration = 0.3,
  className,
}: MotionSectionProps) {
  // Detect prefers-reduced-motion on the client; default to false (animate)
  // so SSR renders the final state and client hydration matches.
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // When reduced motion is requested, render children at final state with no animation.
  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  if (variant === 'list') {
    return (
      <motion.div
        className={className}
        variants={LIST_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === 'item') {
    const itemVariants = buildItemVariants(distance, duration);
    return (
      <motion.div className={className} variants={itemVariants}>
        {children}
      </motion.div>
    );
  }

  // Default: 'section'
  const sectionVariants = buildSectionVariants(delay, distance, duration);
  return (
    <motion.div
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  );
}
