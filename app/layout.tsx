import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/theme';
import { BUSINESS_SCHEMA } from '@/lib/schema';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

// ─── Fonts ───────────────────────────────────────────────────────────────────
// Using Inter as a close geometric sans-serif fallback for Articulat CF.
// Using Playfair Display as an elegant serif fallback for Denton.
// Swap for licensed fonts via globals.css @font-face declarations.
const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-primary',
  display:  'swap',
  weight:   ['400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  subsets:  ['latin'],
  variable: '--font-secondary',
  display:  'swap',
  weight:   ['400', '500', '600', '700'],
  style:    ['normal', 'italic'],
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://insync-pt.com'
  ),
  title: {
    default:  'Physical Therapy NYC | InSync Physical Therapy',
    template: '%s | InSync Physical Therapy',
  },
  description:
    'Orthopedic rehabilitation, sports injury recovery, chronic pain treatment, and post-surgical physical therapy in Brooklyn and Bryant Park, NYC. Request an appointment with InSync Physical Therapy.',
  keywords: [
    'physical therapy NYC',
    'physical therapy Brooklyn',
    'physical therapy Bryant Park',
    'sports injury physical therapy NYC',
    'orthopedic rehab NYC',
    'chronic pain physical therapy NYC',
    'post surgical physical therapy NYC',
    'back pain treatment NYC',
    'knee pain physical therapy Brooklyn',
    'shoulder rehab Manhattan',
    'ACL rehab NYC',
    'one on one physical therapy NYC',
    'InSync Physical Therapy',
  ],
  authors:  [{ name: 'InSync Physical Therapy' }],
  creator:  'InSync Physical Therapy',
  publisher: 'InSync Physical Therapy',
  robots: {
    index:             true,
    follow:            true,
    googleBot: {
      index:             true,
      follow:            true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://insync-pt.com',
    siteName:    'InSync Physical Therapy',
    title:       'Physical Therapy NYC | InSync Physical Therapy',
    description:
      'Orthopedic rehabilitation, sports injury recovery, chronic pain treatment, and post-surgical physical therapy in Brooklyn and Bryant Park, NYC.',
    images: [
      {
        url:    '/assets/hassan-pt/photos/provider-hassan/dr-hassan-seated-cervical-mobility-assessment-male-patient-03.jpg',
        width:  1200,
        height: 630,
        alt:    'InSync Physical Therapy — Dr. Hassan treating a patient',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Physical Therapy NYC | InSync Physical Therapy',
    description:
      'Orthopedic rehabilitation, sports injury recovery, and chronic pain treatment in Brooklyn and Bryant Park, NYC.',
    images: [
      '/assets/hassan-pt/photos/provider-hassan/dr-hassan-seated-cervical-mobility-assessment-male-patient-03.jpg',
    ],
  },
  alternates: {
    canonical: 'https://insync-pt.com',
  },
};

export const viewport: Viewport = {
  themeColor:   '#003D59',
  width:        'device-width',
  initialScale: 1,
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* JSON-LD: MedicalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_SCHEMA) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon — replace with exported InSync logo mark */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#003D59" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation />
            <main id="main-content">{children}</main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
