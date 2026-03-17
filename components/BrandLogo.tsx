'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';

interface BrandLogoProps {
  href?: string;
  variant?: 'full' | 'mark';
  width?: number;
  priority?: boolean;
}

export default function BrandLogo({
  href = '/',
  variant = 'full',
  width,
  priority = false,
}: BrandLogoProps) {
  const src = variant === 'mark' ? '/brand/logo-mark.png' : '/brand/logo-primary.png';
  const imageWidth = width ?? (variant === 'mark' ? 40 : 182);
  const imageHeight = variant === 'mark' ? 40 : 56;

  return (
    <Box
      component={Link}
      href={href}
      aria-label="InSync Physical Therapy home"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 0,
        textDecoration: 'none',
      }}
    >
      <Image
        src={src}
        alt="InSync Physical Therapy"
        width={imageWidth}
        height={imageHeight}
        priority={priority}
        style={{ width: imageWidth, height: 'auto', display: 'block' }}
      />
    </Box>
  );
}
