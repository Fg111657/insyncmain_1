import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HealingIcon from '@mui/icons-material/Healing';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { BRAND } from '@/lib/theme';

const SERVICES = [
  {
    id:       'orthopedic',
    icon:     <HealingIcon sx={{ fontSize: '1.75rem' }} />,
    title:    'Orthopedic Rehabilitation',
    outcome:  'Restore function and eliminate pain from musculoskeletal injuries.',
    bullets:  [
      'Back, neck, and joint pain',
      'Fracture and ligament recovery',
      'Spine and disc conditions',
      'Personalized recovery protocols',
    ],
    forWho:   'Ideal for anyone dealing with musculoskeletal pain or limited range of motion.',
    anchor:   '#orthopedic',
  },
  {
    id:       'sports',
    icon:     <DirectionsRunIcon sx={{ fontSize: '1.75rem' }} />,
    title:    'Sports Injury Rehabilitation',
    outcome:  'Return to your sport with strength, confidence, and proper mechanics.',
    bullets:  [
      'ACL and meniscus rehab',
      'Rotator cuff and labral injuries',
      'Ankle sprains and stress fractures',
      'Sport-specific movement retraining',
    ],
    forWho:   'Runners, athletes, active adults, and combat sports practitioners.',
    anchor:   '#sports',
  },
  {
    id:       'chronic-pain',
    icon:     <SelfImprovementIcon sx={{ fontSize: '1.75rem' }} />,
    title:    'Chronic Pain Treatment',
    outcome:  'Reduce persistent pain and build lasting resilience through targeted therapy.',
    bullets:  [
      'Back pain and sciatica',
      'Plantar fasciitis',
      'Nerve-related symptoms',
      'Long-term pain management strategies',
    ],
    forWho:   'Patients dealing with ongoing pain that hasn\'t resolved with rest or prior treatment.',
    anchor:   '#chronic-pain',
  },
  {
    id:       'post-surgical',
    icon:     <MedicalServicesIcon sx={{ fontSize: '1.75rem' }} />,
    title:    'Post-Surgical Rehabilitation',
    outcome:  'Recover safely after surgery with structured progressions and measurable milestones.',
    bullets:  [
      'ACL reconstruction recovery',
      'Rotator cuff surgery rehab',
      'Joint replacement therapy',
      'Clearance for return to activity',
    ],
    forWho:   'Patients recovering from orthopedic surgery who need professional-grade rehab.',
    anchor:   '#post-surgical',
  },
  {
    id:       'manual',
    icon:     <TouchAppIcon sx={{ fontSize: '1.75rem' }} />,
    title:    'Manual Therapy',
    outcome:  'Hands-on treatment to restore mobility, reduce pain, and improve tissue quality.',
    bullets:  [
      'Joint mobilization and manipulation',
      'Soft tissue release',
      'Graston Technique',
      'Myofascial and trigger point work',
    ],
    forWho:   'Patients with stiffness, restricted movement, or soft tissue tension.',
    anchor:   '#manual',
  },
  {
    id:       'movement',
    icon:     <TrackChangesIcon sx={{ fontSize: '1.75rem' }} />,
    title:    'Movement Analysis',
    outcome:  'Identify the root cause of pain or inefficiency with objective assessment tools.',
    bullets:  [
      'VALD ForceDecks strength testing',
      'HumanTrak motion capture analysis',
      'Limb symmetry and power assessment',
      'Return-to-performance benchmarking',
    ],
    forWho:   'Athletes and active patients who want data-driven rehab and clear return-to-sport criteria.',
    anchor:   '#movement',
  },
  {
    id:       'strength',
    icon:     <FitnessCenterIcon sx={{ fontSize: '1.75rem' }} />,
    title:    'Strength & Conditioning Transition',
    outcome:  'Bridge the gap from rehab to full training with expert guided programming.',
    bullets:  [
      'Post-rehab performance programming',
      'Structured return to sport or training',
      'NASM-certified coaching with Piero Alessi',
      'Combat sports and athlete return protocols',
    ],
    forWho:   'Patients cleared from PT who want expert guidance back to full training.',
    anchor:   '#strength',
  },
];

interface ServicesGridProps {
  maxItems?:  number;
  showCTA?:   boolean;
  compact?:   boolean;
}

export default function ServicesGrid({
  maxItems,
  showCTA = true,
  compact = false,
}: ServicesGridProps) {
  const displayed = maxItems ? SERVICES.slice(0, maxItems) : SERVICES;

  return (
    <Box
      component="section"
      id="services"
      aria-label="Services"
      sx={{
        py:              { xs: compact ? 6 : 10, md: compact ? 8 : 14 },
        backgroundColor: BRAND.white,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {/* Section Header */}
        {!compact && (
          <Box sx={{ mb: { xs: 6, md: 9 }, maxWidth: 680 }}>
            <Typography
              component="p"
              className="overline"
              sx={{ mb: 2 }}
            >
              What We Treat
            </Typography>
            <Typography
              variant="h2"
              sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.75rem' } }}
            >
              Specialized Care for Every Injury
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: BRAND.gray500, maxWidth: 580, lineHeight: 1.7 }}
            >
              Every treatment plan at InSync is built around your specific
              injury, goals, and activity level. Not a generic protocol.
            </Typography>
          </Box>
        )}

        {/* Services Grid */}
        <Box
          sx={{
            display:             'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {displayed.map(({ id, icon, title, outcome, bullets, forWho, anchor }) => (
            <Box
              key={id}
              component="article"
              sx={{
                border:       `1px solid ${BRAND.gray200}`,
                borderRadius: 3,
                p:            { xs: 3, md: 3.5 },
                display:      'flex',
                flexDirection: 'column',
                transition:   'all 0.25s ease',
                backgroundColor: BRAND.white,
                '&:hover': {
                  boxShadow:   `0 8px 32px rgba(0,61,89,0.08)`,
                  transform:   'translateY(-3px)',
                  borderColor: BRAND.neoBlue,
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width:           48,
                  height:          48,
                  borderRadius:    2,
                  backgroundColor: 'rgba(14,197,230,0.1)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  mb:              2.5,
                  color:           BRAND.neoBlue,
                }}
              >
                {icon}
              </Box>

              {/* Title */}
              <Typography
                component="h3"
                sx={{
                  fontWeight:  700,
                  fontSize:    '1.0625rem',
                  color:       BRAND.spaceNavy,
                  lineHeight:  1.25,
                  mb:          1,
                }}
              >
                {title}
              </Typography>

              {/* Outcome */}
              <Typography
                variant="body2"
                sx={{
                  color:       BRAND.gray500,
                  mb:          2.5,
                  lineHeight:  1.6,
                  fontSize:    '0.875rem',
                }}
              >
                {outcome}
              </Typography>

              {/* Bullets */}
              {!compact && (
                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none',
                    p:         0,
                    m:         0,
                    mb:        2.5,
                    display:   'flex',
                    flexDirection: 'column',
                    gap:       0.75,
                  }}
                >
                  {bullets.map((b) => (
                    <Box
                      key={b}
                      component="li"
                      sx={{
                        display:    'flex',
                        alignItems: 'flex-start',
                        gap:        1,
                        fontSize:   '0.8375rem',
                        color:      BRAND.gray700,
                        lineHeight: 1.5,
                      }}
                    >
                      <Box
                        component="span"
                        aria-hidden="true"
                        sx={{
                          display:         'inline-block',
                          width:           5,
                          height:          5,
                          borderRadius:    '50%',
                          backgroundColor: BRAND.neoBlue,
                          flexShrink:      0,
                          mt:              '6px',
                        }}
                      />
                      {b}
                    </Box>
                  ))}
                </Box>
              )}

              {/* For Who */}
              {!compact && (
                <Typography
                  variant="body2"
                  sx={{
                    color:          BRAND.gray500,
                    fontSize:       '0.8rem',
                    fontStyle:      'italic',
                    mb:             2.5,
                    lineHeight:     1.5,
                    borderTop:      `1px solid ${BRAND.gray100}`,
                    pt:             2,
                  }}
                >
                  {forWho}
                </Typography>
              )}

              {/* Spacer pushes CTA to bottom */}
              <Box sx={{ flex: 1 }} />

              {/* Link */}
              <Button
                component={Link}
                href={`/services${anchor}`}
                variant="text"
                endIcon={<ArrowForwardIcon sx={{ fontSize: '0.9rem' }} />}
                sx={{
                  color:          BRAND.neoBlue,
                  fontWeight:     600,
                  fontSize:       '0.875rem',
                  p:              0,
                  alignSelf:      'flex-start',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color:           '#0AAFCC',
                    gap:             0.75,
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          ))}
        </Box>

        {/* View All CTA */}
        {showCTA && maxItems && SERVICES.length > maxItems && (
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={Link}
              href="/services"
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderColor: BRAND.spaceNavy,
                color:       BRAND.spaceNavy,
                fontWeight:  600,
                px:          4,
                py:          1.5,
                '&:hover': {
                  backgroundColor: BRAND.spaceNavy,
                  color:           BRAND.white,
                },
              }}
            >
              View All Services
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
