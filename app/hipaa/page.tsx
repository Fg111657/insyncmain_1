import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BRAND } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'HIPAA Notice of Privacy Practices — InSync Physical Therapy NYC',
  description:
    'InSync Physical Therapy HIPAA Notice of Privacy Practices. How we use and protect your protected health information.',
  alternates: { canonical: 'https://insync-pt.com/hipaa' },
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    heading: 'Our Duties',
    body: [
      'InSync Physical Therapy is required by law to maintain the privacy of your protected health information (PHI), provide you with this notice of our legal duties and privacy practices, and follow the terms of the notice currently in effect.',
    ],
  },
  {
    heading: 'How We May Use and Disclose Your Health Information',
    body: [
      'Treatment: We may use and disclose your PHI to provide, coordinate, or manage your physical therapy care and any related services.',
      'Payment: We may use and disclose your PHI to obtain payment for services we provide. This includes verifying your insurance coverage, submitting claims, and responding to insurance inquiries.',
      'Healthcare Operations: We may use and disclose your PHI for internal operations, quality improvement, training, and compliance activities.',
      'As Required by Law: We will disclose PHI when required to do so by federal, state, or local law.',
    ],
  },
  {
    heading: 'Your Rights Regarding Your Health Information',
    body: [
      'Right to Inspect and Copy: You have the right to inspect and obtain a copy of your PHI that is contained in a designated record set. We may charge a fee for copying.',
      'Right to Amend: If you believe the PHI we have about you is incorrect or incomplete, you may ask us to amend the information.',
      'Right to an Accounting of Disclosures: You have the right to request a list of certain disclosures we have made of your PHI in the past six years.',
      'Right to Request Restrictions: You may request a restriction or limitation on the PHI we use or disclose for treatment, payment, or operations.',
      'Right to Request Confidential Communications: You have the right to request that we communicate with you about your health information in a certain way or at a certain location.',
      'Right to a Paper Copy of This Notice: You have the right to request a paper copy of this notice at any time.',
    ],
  },
  {
    heading: 'Changes to This Notice',
    body: [
      'We reserve the right to change this notice. We reserve the right to make the revised or changed notice effective for PHI we already have about you as well as any information we receive in the future. We will post a copy of the current notice on our website.',
    ],
  },
  {
    heading: 'Complaints',
    body: [
      'If you believe your privacy rights have been violated, you may file a complaint with InSync Physical Therapy or with the Secretary of the Department of Health and Human Services.',
      'To file a complaint with us, contact us at insyncpt.manager@gmail.com or 929-419-4643. We will not retaliate against you for filing a complaint.',
    ],
  },
  {
    heading: 'Contact the Privacy Officer',
    body: [
      'For questions about this notice or to exercise your rights, contact InSync Physical Therapy at:',
      'Brooklyn: 1081 Gates Ave, Brooklyn, NY 11221\nManhattan: 55 W 39th St, Suite 303, New York, NY 10018\nPhone: 929-419-4643\nEmail: insyncpt.manager@gmail.com',
    ],
  },
];

export default function HipaaPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{ backgroundColor: BRAND.spaceNavy, py: { xs: 8, md: 10 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 680 }}>
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
              HIPAA Notice of Privacy Practices
            </Typography>
            <Typography
              sx={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem' }}
            >
              Effective Date: January 2026
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Content ───────────────────────────────────────────── */}
      <Box sx={{ backgroundColor: BRAND.white, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 } }}>

          {/* Required HIPAA summary box */}
          <Box
            sx={{
              backgroundColor: 'rgba(14,197,230,0.06)',
              border:          `1px solid rgba(14,197,230,0.2)`,
              borderRadius:    3,
              p:               { xs: 3, md: 4 },
              mb:              6,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize:   '0.875rem',
                color:      BRAND.spaceNavy,
                mb:         1.5,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
            </Typography>
          </Box>

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
