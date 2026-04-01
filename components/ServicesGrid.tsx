'use client';

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
import HorizontalCarousel from '@/components/HorizontalCarousel';

/**
 * ServicesGrid
 * Carousel mode: full-bleed image cards with overlay text (homepage).
 * Grid mode: standard cards with image + text below (/services page).
 */

/* ── Carousel card data — plain language, max 10 words per line ──── */
const SERVICES_CAROUSEL = [
  {
    id:       'back-neck',
    photo:    SECTION_IMAGES.services?.orthopedic,
    heading:  'BACK & NECK',
    items:    ['Disc and Nerve Pain', 'Sciatica Relief', 'Posture Correction', 'Chronic Pain'],
  },
  {
    id:       'sports',
    photo:    SECTION_IMAGES.services?.sports,
    heading:  'SPORTS INJURY',
    items:    ['ACL and Knee Rehab', 'Shoulder Repair', 'Ankle and Foot Recovery', 'Return to Sport'],
  },
  {
    id:       'post-surgical',
    photo:    SECTION_IMAGES.services?.postSurgical,
    heading:  'POST-SURGERY',
    items:    ['Joint Replacement Recovery', 'Reconstruction Rehab', 'Spine Surgery Recovery', 'Guided Progression'],
  },
  {
    id:       'pelvic',
    photo:    SECTION_IMAGES.services?.chronicPain,
    heading:  'PELVIC HEALTH',
    items:    ['Pelvic Floor Therapy', 'Prenatal Care', 'Postpartum Recovery', 'Core Restoration'],
  },
  {
    id:       'orthopedic',
    photo:    SECTION_IMAGES.services?.manual,
    heading:  'ORTHOPEDIC',
    items:    ['Fracture Recovery', 'Joint Mobilization', 'Hands-on Treatment', 'Movement Restoration'],
  },
  {
    id:       'strength',
    photo:    SECTION_IMAGES.services?.movement,
    heading:  'STRENGTH',
    items:    ['Post-Rehab Training', 'Performance Programs', 'Functional Strength', 'Full Return to Training'],
  },
];

/* ── Grid card data — standard descriptions ──────────────────────── */
const SERVICES_GRID = [
  {
    id:    'back-neck',
    photo: SECTION_IMAGES.services?.orthopedic,
    title: 'Back & Neck Pain',
    desc:  'Targeted treatment for disc injuries, sciatica, cervical pain, and chronic spinal conditions.',
  },
  {
    id:    'sports',
    photo: SECTION_IMAGES.services?.sports,
    title: 'Sports Injury',
    desc:  'ACL, meniscus, rotator cuff, and ankle recovery. Get back to your sport with confidence.',
  },
  {
    id:    'post-surgical',
    photo: SECTION_IMAGES.services?.postSurgical,
    title: 'Post-Surgery Rehab',
    desc:  'Structured recovery after joint replacement, reconstruction, or spinal surgery.',
  },
  {
    id:    'pelvic',
    photo: SECTION_IMAGES.services?.chronicPain,
    title: 'Pelvic Health',
    desc:  'Specialized care for pelvic floor concerns, prenatal and postpartum recovery.',
  },
  {
    id:    'orthopedic',
    photo: SECTION_IMAGES.services?.manual,
    title: 'Orthopedic Rehab',
    desc:  'Fracture recovery, joint mobilization, and musculoskeletal rehabilitation.',
  },
  {
    id:    'strength',
    photo: SECTION_IMAGES.services?.movement,
    title: 'Strength & Performance',
    desc:  'Post-rehab programming to bridge the gap from recovery to full training.',
  },
];

/* ── Carousel card — full-bleed image with overlay text ──────────── */
function CarouselServiceCard({ id, photo, heading, items }: {
  id: string; photo?: string; heading: string; items: string[];
}) {
  return (
    <Box
      id={id}
      component="article"
      sx={{
        position:      'relative',
        borderRadius:  2,
        overflow:      'hidden',
        height:        { xs: 380, md: 420 },
        display:       'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:    'center',
        textAlign:     'center',
      }}
    >
      {/* Full-bleed background image */}
      {photo && (
        <Image
          src={photo}
          alt={`${heading} at InSync Physical Therapy`}
          fill
          sizes="(max-width: 600px) 85vw, 340px"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
      )}

      {/* Dark overlay */}
      <Box
        sx={{
          position:        'absolute',
          inset:           0,
          backgroundColor: 'rgba(0,38,42,0.5)',
        }}
      />

      {/* Text content */}
      <Box
        sx={{
          position: 'relative',
          zIndex:   1,
          px:       3,
          display:  'flex',
          flexDirection: 'column',
          alignItems:    'center',
          gap:       2,
        }}
      >
        <Typography
          component="h3"
          sx={{
            color:         BRAND.white,
            fontWeight:    700,
            fontSize:      { xs: '1.75rem', md: '2rem' },
            letterSpacing: '0.06em',
            lineHeight:    1.1,
          }}
        >
          {heading}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {items.map((item) => (
            <Typography
              key={item}
              sx={{
                color:      'rgba(255,255,255,0.85)',
                fontSize:   { xs: '0.9375rem', md: '1rem' },
                fontWeight: 400,
                lineHeight: 1.4,
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/* ── Grid card — standard image + text below ─────────────────────── */
function GridServiceCard({ id, photo, title, desc }: {
  id: string; photo?: string; title: string; desc: string;
}) {
  return (
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
      {photo && (
        <Box sx={{ position: 'relative', height: 160, flexShrink: 0 }}>
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
      <Box sx={{ p: { xs: 2, md: 2.5 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Typography
          component="h3"
          sx={{ fontWeight: 700, fontSize: '1.0625rem', color: BRAND.deepPetrol, lineHeight: 1.25, mb: 0.75 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: BRAND.gray500, lineHeight: 1.6, fontSize: '0.875rem' }}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

interface ServicesGridProps {
  maxItems?:   number;
  showCTA?:    boolean;
  compact?:    boolean;
  hideHeader?: boolean;
  carousel?:   boolean;
}

export default function ServicesGrid({
  maxItems,
  showCTA = true,
  compact = false,
  hideHeader = false,
  carousel = false,
}: ServicesGridProps) {
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
      {/* Section Header */}
      <Container maxWidth="lg">
        {!compact && !hideHeader && (
          <MotionSection>
            <Box sx={{ mb: { xs: 3, md: 4 }, maxWidth: 600 }}>
              <Typography
                variant="h2"
                sx={{ mb: 1.5, fontSize: { xs: '1.75rem', md: '2.125rem' }, color: BRAND.deepPetrol, fontWeight: 800 }}
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
      </Container>

      {/* Cards — Carousel (full-bleed image) or Grid (standard) */}
      {carousel ? (
        <Container maxWidth="lg" disableGutters sx={{ px: { md: 3 } }}>
          <MotionSection>
            <HorizontalCarousel
              cardWidth={{ xs: 300, sm: 320, md: 340 }}
              gap={14}
            >
              {SERVICES_CAROUSEL.map(({ id, photo, heading, items }) => (
                <CarouselServiceCard key={id} id={id} photo={photo} heading={heading} items={items} />
              ))}
            </HorizontalCarousel>
          </MotionSection>
        </Container>
      ) : (
        <Container maxWidth="lg">
          <MotionSection variant="list">
            <Box
              sx={{
                display:             'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                gap: { xs: 1.5, md: 2 },
              }}
            >
              {(maxItems ? SERVICES_GRID.slice(0, maxItems) : SERVICES_GRID).map(({ id, photo, title, desc }) => (
                <MotionSection key={id} variant="item">
                  <GridServiceCard id={id} photo={photo} title={title} desc={desc} />
                </MotionSection>
              ))}
            </Box>
          </MotionSection>
        </Container>
      )}

      {/* View All CTA */}
      {showCTA && maxItems && SERVICES_GRID.length > maxItems && (
        <Container maxWidth="lg">
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
                '&:hover': { backgroundColor: BRAND.deepPetrol, color: BRAND.white },
              }}
            >
              View All Services
            </Button>
          </Box>
        </Container>
      )}
    </Box>
  );
}
