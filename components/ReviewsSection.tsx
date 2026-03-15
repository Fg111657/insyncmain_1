import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { BRAND } from '@/lib/theme';

// Replace with verified Google reviews once pulled from Google Business Profile.
const REVIEWS = [
  {
    author:   'Marcus T.',
    rating:   5,
    context:  'ACL Rehab',
    text:
      'Dr. Hassan got me back on the mat after my ACL surgery faster than I expected. He didn\'t just run through standard exercises. He understood my training background and built a plan around returning to grappling. Personalized every session, no rushing.',
  },
  {
    author:   'Priya S.',
    rating:   5,
    context:  'Chronic Back Pain',
    text:
      'I had been dealing with lower back pain for two years. Three sessions in with InSync and I was sleeping through the night again. They figured out the actual cause, not just the symptom. Completely different experience from the two other clinics I\'d tried.',
  },
  {
    author:   'James R.',
    rating:   5,
    context:  'Rotator Cuff Recovery',
    text:
      'Super efficient, clinical, and no fluff. I appreciated that they measured my progress objectively — the force plate testing showed exactly where I was at and when I was cleared to start lifting heavy again. Insurance was handled easily too.',
  },
  {
    author:   'Sofia M.',
    rating:   5,
    context:  'Post-Surgical Rehab',
    text:
      'Had my shoulder surgery in March and was back to running and working out by July. The Bryant Park location is incredibly convenient. Every visit felt intentional and I always knew what we were working toward.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <Box sx={{ display: 'flex', gap: 0.25 }}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} sx={{ fontSize: '0.9rem', color: '#F59E0B' }} />
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
        py:              { xs: 10, md: 14 },
        backgroundColor: BRAND.white,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {/* Header */}
        <Box
          sx={{
            display:        'flex',
            flexDirection:  { xs: 'column', md: 'row' },
            alignItems:     { md: 'flex-end' },
            justifyContent: 'space-between',
            gap:            3,
            mb:             { xs: 6, md: 8 },
          }}
        >
          <Box>
            <Typography component="p" className="overline" sx={{ mb: 2 }}>
              Patient Reviews
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '2rem', md: '2.625rem' }, maxWidth: 480 }}
            >
              What Our Patients Say
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: BRAND.gray500, mt: 1.5, fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              Trusted by runners, lifters, fighters, and active New Yorkers.
            </Typography>
          </Box>

          {/* Google Rating Summary */}
          <Box
            sx={{
              display:         'flex',
              alignItems:      'center',
              gap:             2,
              backgroundColor: '#F7F9FB',
              border:          `1px solid ${BRAND.gray200}`,
              borderRadius:    3,
              px:              3,
              py:              2,
              flexShrink:      0,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight:  800,
                  fontSize:    '2rem',
                  lineHeight:  1,
                  color:       BRAND.spaceNavy,
                }}
              >
                5.0
              </Typography>
              <StarRating count={5} />
              <Typography
                variant="body2"
                sx={{ color: BRAND.gray500, fontSize: '0.78rem', mt: 0.5 }}
              >
                Google Reviews
              </Typography>
            </Box>
            <Box
              sx={{
                width:        1,
                height:       48,
                backgroundColor: BRAND.gray200,
                mx:           1,
              }}
            />
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{ fontWeight: 700, fontSize: '1.25rem', color: BRAND.spaceNavy }}
              >
                ★★★★★
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: BRAND.gray500, fontSize: '0.78rem', mt: 0.25 }}
              >
                Highly rated clinic
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Review Cards */}
        <Box
          sx={{
            display:             'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {REVIEWS.map(({ author, rating, context, text }) => (
            <Box
              key={author}
              component="blockquote"
              sx={{
                m:               0,
                border:          `1px solid ${BRAND.gray200}`,
                borderRadius:    3,
                p:               { xs: 3, md: 3.5 },
                display:         'flex',
                flexDirection:   'column',
                gap:             2,
                backgroundColor: BRAND.white,
                transition:      'all 0.25s ease',
                '&:hover': {
                  boxShadow:   `0 8px 32px rgba(0,61,89,0.07)`,
                  transform:   'translateY(-2px)',
                  borderColor: '#E5E7EB',
                },
              }}
            >
              {/* Quote Icon */}
              <FormatQuoteIcon
                sx={{
                  color:    'rgba(14,197,230,0.3)',
                  fontSize: '2rem',
                  mt:       -0.5,
                  ml:       -0.5,
                }}
              />

              {/* Rating */}
              <StarRating count={rating} />

              {/* Context Tag */}
              <Box
                sx={{
                  display:         'inline-flex',
                  alignSelf:       'flex-start',
                  backgroundColor: 'rgba(14,197,230,0.1)',
                  borderRadius:    1,
                  px:              1.25,
                  py:              0.25,
                }}
              >
                <Typography
                  sx={{
                    fontSize:      '0.7rem',
                    fontWeight:    700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color:         BRAND.neoBlue,
                  }}
                >
                  {context}
                </Typography>
              </Box>

              {/* Review Text */}
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

              {/* Author */}
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize:   '0.875rem',
                  color:      BRAND.spaceNavy,
                }}
              >
                {author}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Google CTA */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography
            component="a"
            href="https://www.google.com/search?q=InSync+Physical+Therapy+NYC+reviews"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            0.75,
              fontSize:       '0.875rem',
              fontWeight:     600,
              color:          BRAND.neoBlue,
              textDecoration: 'underline',
              textUnderlineOffset: 3,
              '&:hover': { color: '#0AAFCC' },
            }}
          >
            Read all reviews on Google
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
