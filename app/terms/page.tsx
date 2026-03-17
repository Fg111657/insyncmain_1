import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Terms of Service — InSync Physical Therapy NYC',
  description: 'Terms of service for InSync Physical Therapy website and appointment request process.',
  alternates: { canonical: 'https://insync-pt.com/terms' },
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    heading: 'Use of This Website',
    body: [
      'This website is provided for informational purposes only. The content on insync-pt.com describes the services offered by InSync Physical Therapy and is not intended as medical advice.',
      'You may use this site to learn about our services, submit appointment requests, and contact our team. You may not use this site for any unlawful purpose or in any way that could damage, disable, or impair the site.',
    ],
  },
  {
    heading: 'Appointment Requests',
    body: [
      'Submitting an appointment request form does not guarantee an appointment or establish a patient-provider relationship. Our team will contact you to confirm availability, verify your insurance, and schedule your visit.',
      'Providing accurate contact and insurance information allows us to serve you efficiently. Intentionally providing false information may result in declined service.',
    ],
  },
  {
    heading: 'Not Medical Advice',
    body: [
      'The information on this website — including descriptions of services, conditions, and treatments — is for general informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.',
      'Always consult a qualified healthcare provider with questions about your specific condition. Do not delay seeking medical attention based on information you read on this site.',
    ],
  },
  {
    heading: 'Intellectual Property',
    body: [
      'All content on this site — including text, images, logos, and design — is the property of InSync Physical Therapy or its licensors. You may not reproduce, distribute, or use this content without written permission.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    body: [
      'InSync Physical Therapy makes no warranties, express or implied, regarding the accuracy or completeness of the information on this site. To the fullest extent permitted by law, we are not liable for any damages arising from your use of this website.',
    ],
  },
  {
    heading: 'Changes to These Terms',
    body: [
      'We may update these terms at any time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.',
    ],
  },
  {
    heading: 'Governing Law',
    body: [
      'These terms are governed by the laws of the State of New York. Any disputes arising from use of this website shall be subject to the jurisdiction of courts located in New York County, New York.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      'Questions about these terms can be directed to InSync Physical Therapy at insyncpt.manager@gmail.com or 929-419-4643.',
    ],
  },
];

export default function TermsPage() {
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
              Terms of Service
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
          <Typography
            variant="body1"
            sx={{ color: BRAND.gray700, lineHeight: 1.8, mb: 6, fontSize: '1.0625rem' }}
          >
            By using the InSync Physical Therapy website at insync-pt.com, you agree to the
            following terms. Please read them carefully.
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
