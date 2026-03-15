import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Fix workspace root detection when adjacent lockfiles exist
  outputFileTracingRoot: path.join(__dirname),

  // Serve root-level /assets folder as static content via symlink in /public/assets
  // Run: node scripts/setup-assets.js before first dev/build
  images: {
    formats:     ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 32, 48, 64, 96, 128, 256, 384],
    // DigitalOcean Spaces CDN — covers any region bucket (nyc3, sfo2, etc.)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.digitaloceanspaces.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.cdn.digitaloceanspaces.com',
        pathname: '/**',
      },
    ],
  },

  compress:         true,
  poweredByHeader:  false,
  reactStrictMode:  true,

  async headers() {
    return [
      {
        source:  '/(.*)',
        headers: [
          { key: 'X-Frame-Options',           value: 'DENY'                        },
          { key: 'X-Content-Type-Options',     value: 'nosniff'                    },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
