'use client';

/**
 * ReviewsSection — RALPH spec
 * Clean review cards on white. No "trusted by runners, lifters..."
 * Minimal. No 3D tilt.
 */

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { BRAND } from '@/lib/theme';
import MotionSection from '@/components/MotionSection';

const REVIEWS = [
  {
    author:  'Marcus T.',
    rating:  5,
    source:  'Google',
    text:    'Dr. Hassan got me back on the mat after my ACL surgery faster than I expected. He understood my training background and built a plan around returning to grappling. Personalized every session.',
  },
  {
    author:  'Priya S.',
    rating:  5,
    source:  'ZocDoc',
    text:    'Three sessions in and I was sleeping through the night again after two years of lower back pain. They figured out the actual cause, not just the symptom.',
  },
  {
    author:  'James R.',
    rating:  5,
    source:  'Google',
    text:    'Super efficient and no fluff. They measured my progress objectively. The force plate testing showed exactly where I was at and when I was cleared. Insurance was handled easily too.',
  },
  {
    author:  'Sofia M.',
    rating:  5,
    source:  'ZocDoc',
    text:    'Had my shoulder surgery in March and was back to running by July. The Bryant Park location is incredibly convenient. Every visit felt intentional.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <Box sx={{ display: 'flex', gap: 0.25 }}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} sx={{ fontSize: '0.85rem', color: BRAND.starGold }} />
      ))}
    </Box>
  );
}

export default function ReviewsSection() {
  return (
    <Box
      component="section"
      aria-label="Patient reviews"
      sx={{
        py:              { xs: 8, md: 12 },
        backgroundColor: '#F9FAFB',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <MotionSection>
          <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                color:    BRAND.deepPetrol,
                mb:       1,
              }}
            >
              What patients say
            </Typography>
            <Box
              sx={{
                display:        'inline-flex',
                alignItems:     'center',
                gap:            1.5,
                mt:             1,
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', color: BRAND.deepPetrol, lineHeight: 1 }}>
                  5.0
                </Typography>
                <StarRating count={5} />
                <Typography sx={{ fontSize: '0.72rem', color: BRAND.gray500, mt: 0.25 }}>
                  Google
                </Typography>
              </Box>
              <Box sx={{ width: 1, height: 36, backgroundColor: BRAND.gray200 }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', color: BRAND.deepPetrol, lineHeight: 1 }}>
                  5.0
                </Typography>
                <StarRating count={5} />
                <Typography sx={{ fontSize: '0.72rem', color: BRAND.gray500, mt: 0.25 }}>
                  ZocDoc
                </Typography>
              </Box>
            </Box>
          </Box>
        </MotionSection>

        {/* Review Cards */}
        <MotionSection variant="list">
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {REVIEWS.map(({ author, rating, source, text }) => (
              <MotionSection key={author} variant="item">
                <Box
                  component="blockquote"
                  sx={{
                    m:               0,
                    borderRadius:    2,
                    p:               3,
                    display:         'flex',
                    flexDirection:   'column',
                    gap:             1.5,
                    backgroundColor: BRAND.white,
                    border:          `1px solid ${BRAND.gray200}`,
                    height:          '100%',
                    transition:      'border-color 0.2s ease',
                    '&:hover': {
                      borderColor: BRAND.sinopia,
                    },
                  }}
                >
                  <StarRating count={rating} />

                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      color:      BRAND.gray700,
                      lineHeight: 1.7,
                      fontSize:   '0.875rem',
                      flex:       1,
                    }}
                  >
                    &ldquo;{text}&rdquo;
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize:   '0.875rem',
                        color:      BRAND.deepPetrol,
                      }}
                    >
                      {author}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize:      '0.7rem',
                        fontWeight:    600,
                        color:         BRAND.gray400,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {source}
                    </Typography>
                  </Box>
                </Box>
              </MotionSection>
            ))}
          </Box>
        </MotionSection>
      </Container>
    </Box>
  );
}
