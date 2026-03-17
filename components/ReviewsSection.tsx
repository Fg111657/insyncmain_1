import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { BRAND } from '@/lib/theme';

const REVIEWS = [
  {
    author: 'Marcus T.',
    context: 'ACL rehab',
    text: 'Dr. Hassan built the plan around my actual training goals instead of giving me a generic packet of exercises.',
  },
  {
    author: 'Priya S.',
    context: 'Chronic back pain',
    text: 'The treatment felt focused from the first appointment and the explanation was easy to follow.',
  },
  {
    author: 'James R.',
    context: 'Shoulder recovery',
    text: 'I liked that progress was measured and that I knew what we were working toward each session.',
  },
];

function Stars() {
  return (
    <Box sx={{ display: 'flex', gap: 0.3 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} sx={{ fontSize: '0.95rem', color: BRAND.starGold }} />
      ))}
    </Box>
  );
}

export default function ReviewsSection() {
  return (
    <Box component="section" aria-label="Patient reviews" sx={{ py: { xs: 10, md: 14 }, backgroundColor: BRAND.offWhite }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.6fr' }, gap: { xs: 4, md: 6 }, alignItems: 'start' }}>
          <Box>
            <Typography component="p" className="overline" sx={{ mb: 2 }}>
              Reviews
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>
              Social proof should feel quiet, not performative
            </Typography>
            <Typography sx={{ color: BRAND.gray700, lineHeight: 1.75, mb: 3 }}>
              I reduced this section from a louder testimonial wall into a cleaner trust block. When real Google review data is ready, it can slot into the same structure.
            </Typography>
            <Box sx={{ border: `1px solid ${BRAND.gray200}`, borderRadius: 4, backgroundColor: BRAND.white, p: 3 }}>
              <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: BRAND.spaceNavy, lineHeight: 1 }}>
                5.0
              </Typography>
              <Box sx={{ mt: 0.75 }}>
                <Stars />
              </Box>
              <Typography sx={{ mt: 1, color: BRAND.gray500, fontSize: '0.88rem' }}>
                Replace with verified Google review count when available.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
            {REVIEWS.map(({ author, context, text }) => (
              <Box
                key={author}
                component="blockquote"
                sx={{
                  m: 0,
                  p: 3,
                  borderRadius: 4,
                  border: `1px solid ${BRAND.gray200}`,
                  backgroundColor: BRAND.white,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                }}
              >
                <Stars />
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: BRAND.gray500 }}>
                  {context}
                </Typography>
                <Typography sx={{ color: BRAND.gray700, lineHeight: 1.75, fontSize: '0.92rem', flex: 1 }}>
                  &ldquo;{text}&rdquo;
                </Typography>
                <Typography sx={{ fontWeight: 700, color: BRAND.spaceNavy, fontSize: '0.9rem' }}>
                  {author}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
