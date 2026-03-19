import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Privacy Policy — InSync Physical Therapy NYC',
  description: 'Privacy policy for InSync Physical Therapy. How we collect, use, and protect your personal and health information.',
  alternates: { canonical: 'https://insync-pt.com/privacy' },
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    heading: 'Information We Collect',
    body: [
      'When you submit an appointment request, we collect your name, contact information, insurance details, and a brief description of your condition. This information is used solely to schedule your appointment and verify your insurance benefits.',
      'If you contact us by phone or email, we may retain records of that communication to provide better care.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    body: [
      'We use the information you provide to contact you about your appointment, verify your insurance coverage, and communicate relevant clinical information. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
      'Health information you provide is handled in accordance with HIPAA. See our HIPAA Notice of Privacy Practices for full details.',
    ],
  },
  {
    heading: 'Data Security',
    body: [
      'We take reasonable measures to protect your information from unauthorized access, disclosure, or loss. Appointment request data is transmitted securely and stored with access controls.',
      'No method of transmission over the internet is 100% secure. If you have concerns about sharing sensitive health information online, please contact us by phone at 929-419-4643.',
    ],
  },
  {
    heading: 'Cookies and Analytics',
    body: [
      'This website may use cookies or similar technologies to understand how visitors use the site. This data is aggregate and non-identifiable. You can disable cookies in your browser settings without affecting your ability to use the site.',
    ],
  },
  {
    heading: 'Third-Party Services',
    body: [
      'Our website is hosted on DigitalOcean. Appointment request emails are processed through Resend. Google Maps embeds appear on our locations page. These third parties have their own privacy practices.',
    ],
  },
  {
    heading: 'Your Rights',
    body: [
      'You may request access to, correction of, or deletion of personal information we hold about you by contacting us at insyncpt.manager@gmail.com or calling 929-419-4643.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      'Questions about this privacy policy can be directed to InSync Physical Therapy at insyncpt.manager@gmail.com or 929-419-4643. Brooklyn location: 1081 Gates Ave, Brooklyn, NY 11221. Manhattan location: 55 W 39th St, Suite 303, New York, NY 10018.',
    ],
  },
];

export default function PrivacyPage() {
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
              Privacy Policy
            </Typography>
            <Typography
              sx={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem' }}
            >
              Last updated: January 2026
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Content ───────────────────────────────────────────── */}
      <Box sx={{ backgroundColor: BRAND.white, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 } }}>
          <Typography
            variant="body1"
            sx={{ color: BRAND.gray700, lineHeight: 1.8, mb: 6, fontSize: '1.0625rem' }}
          >
            InSync Physical Therapy (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
            This policy describes how we handle personal information collected through our website
            at insync-pt.com.
          </Typography>

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
                  sx={{ color: BRAND.gray700, lineHeight: 1.8, mb: 2, fontSize: '0.9375rem' }}
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
