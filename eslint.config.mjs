import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // ─── Brand token enforcement ──────────────────────────────────────────
      // Prevents hardcoded hex values in JSX/TSX. All colours must come from
      // BRAND tokens in lib/theme.ts.
      'no-restricted-syntax': [
        'warn',
        {
          selector: "Literal[value=/^#[0-9A-Fa-f]{3,8}$/]",
          message:
            'Use BRAND tokens from lib/theme.ts instead of hardcoded hex colours (e.g. BRAND.spaceNavy instead of "#003D59")',
        },
      ],
    },
  },
];

export default config;
