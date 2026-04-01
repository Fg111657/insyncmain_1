'use client';

/**
 * HeroMedia
 * Conditionally renders a Next.js <Image> or autoplay <video>.
 * Respects prefers-reduced-motion — pauses video on mount and listens
 * for OS-level changes during the session.
 */

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { BLUR_PLACEHOLDER } from '@/lib/images';

export interface HeroMediaProps {
  /** Render a <video> or a Next.js <Image> */
  mediaType: 'video' | 'image';
  /** Absolute src path or URL */
  src: string;
  /** Poster image for video (optional) */
  poster?: string;
  /** Accessible alt / aria-label text */
  alt: string;
  /** Pass true for the above-the-fold hero image (LCP hint) */
  priority?: boolean;
}

export default function HeroMedia({
  mediaType,
  src,
  poster,
  alt,
  priority = false,
}: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (mediaType !== 'video' || !videoRef.current) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mq.matches) {
      videoRef.current.pause();
    }

    const handler = (e: MediaQueryListEvent) => {
      if (!videoRef.current) return;
      if (e.matches) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    };

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [mediaType]);

  if (mediaType === 'video') {
    return (
      <Box
        ref={videoRef}
        component="video"
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        aria-label={alt}
        sx={{
          width:     '100%',
          height:    '100%',
          objectFit: 'cover',
          display:   'block',
        }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      placeholder="blur"
      blurDataURL={BLUR_PLACEHOLDER}
      sizes="(max-width: 960px) 100vw, 46vw"
      style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
    />
  );
}
