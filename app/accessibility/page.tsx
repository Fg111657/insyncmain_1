import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Accessibility Statement — InSync Physical Therapy NYC',
  description:
    'InSync Physical Therapy is committed to making our website accessible to all users, including those with disabilities.',
  alternates: { canonical: 'https://insync-pt.com/accessibility' },
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    heading: 'Our Commitment',
    body: [
      'InSync Physical Therapy is committed to ensuring our website is accessible to people with disabilities. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.',
    ],
  },
  {
    heading: 'Measures We Have Taken',
    body: [
      'Semantic HTML landmarks (main, nav, section, footer) so screen readers can navigate efficiently.',
      'All images include descriptive alt text.',
      'All interactive elements are keyboard-navigable.',
      'Color contrast ratios meet or exceed WCAG 2.1 AA requirements throughout the site.',
      'Animations respect the prefers-reduced-motion system setting — motion is disabled for users who have requested reduced motion in their operating system.',
      'Form fields on the contact page include visible labels and accessible error states.',
      'The site is tested at multiple viewport sizes for mobile accessibility.',
    ],
  },
  {
    heading: 'Known Limitations',
    body: [
      'Google Maps embeds on our Locations page are provided by a third party. We cannot guarantee their full accessibility. If you have difficulty using the map embed, the address and directions are also provided as plain text on the same page.',
      'Some older clinic photos may have limited alt text detail. We are working to improve these descriptions.',
    ],
  },
  {
    heading: 'Alternative Access',
    body: [
      'If you have difficulty accessing any part of our website, please contact us directly. We are happy to provide the same information in an alternative format.',
      'Phone: 929-419-4643\nEmail: insyncpt.manager@gmail.com',
      'We will respond within one business day.',
    ],
  },
  {
    heading: 'Feedback',
    body: [
      'We welcome feedback on the accessibility of insync-pt.com. If you encounter barriers, please let us know so we can work to resolve them.',
      'Contact us at insyncpt.manager@gmail.com or call 929-419-4643.',
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{ backgroundColor: BRAND.spaceNavy, py: { xs: 8, md: 10 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 640 }}>
            <Typography
              component="p"
              sx={{
                fontSize:      '0.72rem',
                fontWeight:    700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:         BRAND.neoBlue,
                mb:            2,
              }}
            >
              Legal
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color:      BRAND.white,
                mb:         2,
                fontSize:   { xs: '2rem', md: '2.5rem' },
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              Accessibility Statement
            </Typography>
            <Typography
              sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem' }}
            >
              Last updated: January 2026
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Content ───────────────────────────────────────────── */}
      <Box sx={{ backgroundColor: BRAND.white, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 } }}>
          {SECTIONS.map(({ heading, body }) => (
            <Box key={heading} sx={{ mb: 5 }}>
              <Typography
                component="h2"
                sx={{
                  fontWeight:  700,
                  fontSize:    '1.125rem',
                  color:       BRAND.spaceNavy,
                  mb:          2,
                  pb:          1.5,
                  borderBottom: `2px solid ${BRAND.neoBlue}`,
                  display:     'inline-block',
                }}
              >
                {heading}
              </Typography>
              {body.map((paragraph, i) => (
                <Typography
                  key={i}
                  variant="body1"
                  sx={{
                    color:      BRAND.gray700,
                    lineHeight: 1.8,
                    mb:         2,
                    fontSize:   '0.9375rem',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}
