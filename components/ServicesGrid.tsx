import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BRAND } from '@/lib/theme';
import { SECTION_IMAGES, BLUR_PLACEHOLDER } from '@/lib/images';
import MotionSection from '@/components/MotionSection';

/**
 * ServicesGrid — RALPH spec
 * 6 service cards per brief: Back & Neck, Sports Injury, Post-Surgery,
 * Pelvic Health, Orthopedic, Strength & Performance.
 * Clean white cards, no gradients, no "Learn more" links.
 */

const SERVICES = [
  {
    id:      'back-neck',
    photo:   SECTION_IMAGES.services?.orthopedic,
    title:   'Back & Neck Pain',
    desc:    'Targeted treatment for disc herniations, sciatica, cervical pain, and chronic spinal conditions.',
    anchor:  '#back-neck',
  },
  {
    id:      'sports',
    photo:   SECTION_IMAGES.services?.sports,
    title:   'Sports Injury',
    desc:    'ACL, meniscus, rotator cuff, ankle sprains — return to your sport with confidence.',
    anchor:  '#sports',
  },
  {
    id:      'post-surgical',
    photo:   SECTION_IMAGES.services?.postSurgical,
    title:   'Post-Surgery Rehab',
    desc:    'Structured recovery after joint replacement, reconstruction, or spinal surgery.',
    anchor:  '#post-surgical',
  },
  {
    id:      'pelvic',
    photo:   SECTION_IMAGES.services?.chronicPain,
    title:   'Pelvic Health',
    desc:    'Specialized care for pelvic floor dysfunction, prenatal and postpartum recovery.',
    anchor:  '#pelvic',
  },
  {
    id:      'orthopedic',
    photo:   SECTION_IMAGES.services?.manual,
    title:   'Orthopedic Rehab',
    desc:    'Fracture recovery, joint mobilization, and musculoskeletal rehabilitation.',
    anchor:  '#orthopedic',
  },
  {
    id:      'strength',
    photo:   SECTION_IMAGES.services?.movement,
    title:   'Strength & Performance',
    desc:    'Post-rehab programming to bridge the gap from recovery to full training.',
    anchor:  '#strength',
  },
];

interface ServicesGridProps {
  maxItems?:   number;
  showCTA?:    boolean;
  compact?:    boolean;
  hideHeader?: boolean;
}

export default function ServicesGrid({
  maxItems,
  showCTA = true,
  compact = false,
  hideHeader = false,
}: ServicesGridProps) {
  const displayed = maxItems ? SERVICES.slice(0, maxItems) : SERVICES;

  return (
    <Box
      component="section"
      id="services"
      aria-label="Services"
      sx={{
        py:              { xs: compact ? 3 : 5, md: compact ? 4 : 7 },
        backgroundColor: BRAND.white,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        {!compact && !hideHeader && (
          <MotionSection>
            <Box sx={{ mb: { xs: 3, md: 4 }, maxWidth: 600 }}>
              <Typography
                variant="h2"
                sx={{ mb: 1.5, fontSize: { xs: '2rem', md: '2.5rem' }, color: BRAND.deepPetrol }}
              >
                What we treat
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: BRAND.gray500, maxWidth: 520, lineHeight: 1.7 }}
              >
                Every treatment plan is built around your injury, goals, and activity level.
              </Typography>
            </Box>
          </MotionSection>
        )}

        {/* Services Grid */}
        <MotionSection variant="list">
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: { xs: 1.5, md: 2 },
            }}
          >
            {displayed.map(({ id, photo, title, desc }) => (
              <MotionSection key={id} variant="item">
                <Box
                  id={id}
                  component="article"
                  sx={{
                    border:          `1px solid ${BRAND.gray200}`,
                    borderRadius:    1.5,
                    overflow:        'hidden',
                    display:         'flex',
                    flexDirection:   'column',
                    backgroundColor: BRAND.white,
                    height:          '100%',
                    transition:      'border-color 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      borderColor: BRAND.sinopia,
                      boxShadow:   '0 2px 12px rgba(0,38,42,0.06)',
                    },
                  }}
                >
                  {/* Photo */}
                  {photo && !compact && (
                    <Box sx={{ position: 'relative', height: 180, flexShrink: 0 }}>
                      <Image
                        src={photo}
                        alt={`${title} at InSync Physical Therapy NYC`}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={BLUR_PLACEHOLDER}
                        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                      />
                    </Box>
                  )}

                  {/* Content */}
                  <Box sx={{ p: { xs: 2, md: 2.5 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        fontSize:   '1.0625rem',
                        color:      BRAND.deepPetrol,
                        lineHeight: 1.25,
                        mb:         1,
                      }}
                    >
                      {title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color:      BRAND.gray500,
                        lineHeight: 1.6,
                        fontSize:   '0.9rem',
                      }}
                    >
                      {desc}
                    </Typography>
                  </Box>
                </Box>
              </MotionSection>
            ))}
          </Box>
        </MotionSection>

        {/* View All CTA */}
        {showCTA && maxItems && SERVICES.length > maxItems && (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              component={Link}
              href="/services"
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderColor: BRAND.deepPetrol,
                color:       BRAND.deepPetrol,
                fontWeight:  600,
                px:          4,
                py:          1.5,
                '&:hover': {
                  backgroundColor: BRAND.deepPetrol,
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
