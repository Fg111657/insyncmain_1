'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BRAND } from '@/lib/theme';

const FAQS = [
  {
    q: 'Who should see a physical therapist?',
    a: 'Anyone experiencing pain, movement limitations, sports injuries, or recovering from surgery can benefit from physical therapy. At InSync, we most commonly treat active adults, athletes, office workers with chronic pain, and post-surgical patients. You don\'t need to be an athlete or severely injured — if something is limiting your daily life or training, PT can help.',
  },
  {
    q: 'What injuries and conditions do you treat?',
    a: 'We treat a full range of orthopedic and musculoskeletal conditions including back pain, neck pain, knee pain, shoulder injuries, ACL and meniscus tears, rotator cuff injuries, labral tears, plantar fasciitis, sciatica, post-surgical rehabilitation, and chronic pain. If you\'re unsure whether your condition is something we treat, contact us and we can advise.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'Yes. InSync Physical Therapy is in-network with Aetna, Blue Cross Blue Shield, Cigna, United Healthcare, Medicare, Fidelis Care, HIP, and NYC Employee Benefit Plans (NYC EPP/GHI). We verify your benefits before your first appointment so you know exactly what to expect. Contact us if your insurance is not listed — we accept additional plans.',
  },
  {
    q: 'Do I need a referral to start physical therapy?',
    a: 'In New York State, you can see a physical therapist directly without a physician referral for up to 30 days of treatment. After that period, a referral or prescription may be required depending on your insurance plan. We can help clarify this during your intake process.',
  },
  {
    q: 'How long is a session?',
    a: 'Initial evaluations are typically 60 minutes. Follow-up treatment sessions are generally 45 to 60 minutes. Every session is one-on-one with your physical therapist. You will not be handed off to an aide or left with equipment while your therapist sees another patient.',
  },
  {
    q: 'Where are your NYC locations?',
    a: 'We have two locations: our Brooklyn office at 1081 Gates Ave, Brooklyn, NY 11221, and our Bryant Park / Midtown office at 55 W 39th St, 3rd Floor, Suite 303, New York, NY 10018. The Bryant Park location is walking distance from the B, D, F, and M trains at 42nd St.',
  },
  {
    q: 'Do you work with athletes and combat sports practitioners?',
    a: 'Yes. We work with recreational athletes, runners, BJJ practitioners, martial artists, and competitive athletes of all levels. Our approach focuses on intelligent progression. We keep you moving safely during recovery rather than simply telling you to stop. We also partner with Piero Alessi for structured return-to-performance strength coaching after rehabilitation.',
  },
  {
    q: 'Can I keep training while in physical therapy?',
    a: 'In most cases, yes. We work to keep you active and training throughout your recovery within appropriate limits. Your therapist will advise on what modifications are safe for your specific injury and will adjust those recommendations as you progress. The goal is to maintain your fitness and return you to full activity as quickly as safely possible.',
  },
];

interface FAQSectionProps {
  compact?: boolean;
  maxItems?: number;
}

export default function FAQSection({ compact = false, maxItems }: FAQSectionProps) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const displayed = maxItems ? FAQS.slice(0, maxItems) : FAQS;

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      component="section"
      id="faq"
      aria-label="Frequently asked questions"
      sx={{
        py:              { xs: compact ? 6 : 10, md: compact ? 8 : 14 },
        backgroundColor: '#F7F9FB',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 } }}>
        {!compact && (
          <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
            <Typography component="p" className="overline" sx={{ mb: 2 }}>
              FAQ
            </Typography>
            <Typography
              variant="h2"
              sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.625rem' } }}
            >
              Common Questions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color:      BRAND.gray500,
                maxWidth:   480,
                mx:         'auto',
                lineHeight: 1.7,
              }}
            >
              Everything you need to know before your first appointment.
            </Typography>
          </Box>
        )}

        {compact && (
          <Typography
            variant="h3"
            sx={{ mb: 4, fontSize: { xs: '1.5rem', md: '1.875rem' } }}
          >
            Frequently Asked Questions
          </Typography>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {displayed.map(({ q, a }, i) => {
            const panel = `panel-${i}`;
            const isOpen = expanded === panel;
            return (
              <Accordion
                key={panel}
                expanded={isOpen}
                onChange={handleChange(panel)}
                disableGutters
                sx={{
                  borderRadius: '6px !important',
                  border:       `1px solid ${isOpen ? BRAND.neoBlue : BRAND.gray200}`,
                  boxShadow:    isOpen ? '0 4px 16px rgba(0,61,89,0.06)' : 'none',
                  transition:   'all 0.2s ease',
                  '&:before':   { display: 'none' },
                  backgroundColor: BRAND.white,
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color:      isOpen ? BRAND.neoBlue : BRAND.gray700,
                        transition: 'color 0.2s',
                      }}
                    />
                  }
                  sx={{
                    px:            3,
                    py:            0.5,
                    minHeight:     56,
                    '&:hover': { backgroundColor: 'rgba(0,61,89,0.02)' },
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      fontSize:   { xs: '0.9375rem', md: '1rem' },
                      color:      isOpen ? BRAND.neoBlue : BRAND.spaceNavy,
                      lineHeight: 1.4,
                      transition: 'color 0.2s',
                      pr:         2,
                    }}
                  >
                    {q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color:      BRAND.gray700,
                      lineHeight: 1.75,
                      fontSize:   '0.9375rem',
                    }}
                  >
                    {a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
