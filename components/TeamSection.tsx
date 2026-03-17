import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { BRAND } from '@/lib/theme';
import { BLUR_PLACEHOLDER } from '@/lib/images';

const TEAM = [
  {
    id: 'hassan',
    photo: '/assets/Hassan .jpeg',
    photoPos: 'center top',
    name: 'Dr. Hassan',
    title: 'Doctor of Physical Therapy',
    credentials: ['DPT', 'Touro University', '9+ Years Experience'],
    bio: 'Dr. Hassan focuses on orthopedic rehabilitation, sports injuries, chronic pain, and post-surgical recovery. His style of care is direct, specific, and built around measurable progress.',
    specialties: ['Orthopedic rehab', 'Sports injury recovery', 'Manual therapy', 'Post-surgical care'],
  },
  {
    id: 'piero',
    photo: '/assets/Piero Alessi.JPG',
    photoPos: 'center 20%',
    name: 'Piero Alessi',
    title: 'Strength and Conditioning Coach',
    credentials: ['NASM Certified', 'Post-rehab training'],
    bio: 'Piero supports the transition from clinical rehab back to full training. He adds structure for patients who need guidance after pain settles but before confidence fully returns.',
    specialties: ['Return to training', 'Post-rehab strength', 'Combat sports conditioning', 'Functional strength'],
  },
  {
    id: 'tj',
    photo: '/assets/TJ.jpg',
    photoPos: 'center top',
    name: 'TJ',
    title: 'Physical Therapist',
    credentials: ['Bio in progress'],
    bio: 'TJ should remain on the site, but the presentation now makes it obvious that final copy is still pending rather than pretending the profile is complete.',
    specialties: ['Orthopedic rehabilitation', 'Mobility work', 'Progressive recovery'],
    placeholder: true,
  },
];

interface TeamSectionProps {
  compact?: boolean;
}

export default function TeamSection({ compact = false }: TeamSectionProps) {
  const displayedTeam = compact ? TEAM.slice(0, 2) : TEAM;

  return (
    <Box component="section" id="team" aria-label="Our team" sx={{ py: { xs: compact ? 6 : 10, md: compact ? 8 : 14 }, backgroundColor: BRAND.white }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {!compact && (
          <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
            <Typography component="p" className="overline" sx={{ mb: 2 }}>
              Team
            </Typography>
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Small team, clearer roles
            </Typography>
            <Typography sx={{ color: BRAND.gray700, lineHeight: 1.7 }}>
              The old version was visually fine but too card-heavy. This version keeps the people prominent and the credentials easy to scan.
            </Typography>
          </Box>
        )}

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {displayedTeam.map(({ id, photo, photoPos, name, title, credentials, bio, specialties, placeholder }) => (
            <Grid key={id} item xs={12} md={compact ? 6 : 4}>
              <Box
                component="article"
                sx={{
                  border: `1px solid ${BRAND.gray200}`,
                  borderRadius: 5,
                  overflow: 'hidden',
                  backgroundColor: BRAND.white,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ position: 'relative', height: { xs: 280, sm: 320, md: 320 }, backgroundColor: BRAND.gray100 }}>
                  <Image
                    src={photo}
                    alt={`${name}, ${title} at InSync Physical Therapy`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                    style={{ objectFit: 'cover', objectPosition: photoPos }}
                  />
                  {placeholder && (
                    <Box
                      sx={{
                        position: 'absolute',
                        right: 14,
                        bottom: 14,
                        backgroundColor: 'rgba(255,255,255,0.92)',
                        borderRadius: 99,
                        px: 1.25,
                        py: 0.5,
                        border: `1px solid ${BRAND.gray200}`,
                      }}
                    >
                      <Typography sx={{ fontSize: '0.72rem', color: BRAND.gray700 }}>
                        Bio pending
                      </Typography>
                    </Box>
                  )}
                </Box>

                <Box sx={{ p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 2 }}>
                    {credentials.map((c) => (
                      <Chip
                        key={c}
                        label={c}
                        size="small"
                        sx={{
                          backgroundColor: BRAND.offWhite,
                          color: BRAND.spaceNavy,
                          fontWeight: 600,
                          fontSize: '0.72rem',
                          height: 24,
                          borderRadius: 99,
                          border: `1px solid ${BRAND.gray200}`,
                        }}
                      />
                    ))}
                  </Box>

                  <Typography component="h3" sx={{ fontWeight: 800, fontSize: '1.25rem', color: BRAND.spaceNavy, lineHeight: 1.2, mb: 0.35 }}>
                    {name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.92rem', fontWeight: 600, color: BRAND.gray700, mb: 2 }}>
                    {title}
                  </Typography>

                  <Typography sx={{ color: BRAND.gray700, lineHeight: 1.7, fontSize: '0.92rem', mb: 2.5 }}>
                    {bio}
                  </Typography>

                  <Box sx={{ mt: 'auto', pt: 2.5, borderTop: `1px solid ${BRAND.gray200}` }}>
                    <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: BRAND.gray500, mb: 1.25 }}>
                      Focus Areas
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {specialties.map((s) => (
                        <Box key={s} sx={{ px: 1.25, py: 0.45, borderRadius: 99, backgroundColor: BRAND.offWhite }}>
                          <Typography sx={{ fontSize: '0.76rem', color: BRAND.gray700 }}>
                            {s}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
