import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { BRAND } from '@/lib/theme';
import { BLUR_PLACEHOLDER } from '@/lib/images';
import MotionSection from '@/components/MotionSection';

const TEAM = [
  {
    id:          'hassan',
    photo:       '/assets/Hassan .jpeg',
    photoPos:    'center top',
    name:        'Dr. Hassan',
    title:       'Doctor of Physical Therapy',
    credentials: ['DPT', 'Touro University', '9+ Years Experience'],
    bio:
      'Dr. Hassan has spent the last nine years helping New Yorkers recover from injuries and get back to the activities they care about. His approach combines hands-on treatment, strength testing, and movement analysis to solve the root cause of pain. Not just manage the symptoms.',
    specialties: [
      'Orthopedic Rehabilitation',
      'Sports Injury Recovery',
      'Manual Therapy',
      'Post-Surgical Rehab',
      'Movement Analysis',
    ],
  },
  {
    id:          'piero',
    photo:       '/assets/Piero Alessi.JPG',
    photoPos:    'center 20%',
    name:        'Piero Alessi',
    title:       'Strength & Conditioning Coach',
    credentials: ['NASM Certified', 'World-Class Martial Arts Background'],
    bio:
      'Piero brings a world-class athletic background and NASM certification to InSync\'s post-rehabilitation programming. He specializes in guiding patients from the end of formal physical therapy back to full strength, sport, and performance. His experience in combat sports and functional training gives athletes a structured, intelligent path back to their highest level.',
    specialties: [
      'Post-Rehab Strength Programming',
      'Return-to-Performance Protocols',
      'Combat Sports Conditioning',
      'Athletic Movement Training',
      'Functional Strength Development',
    ],
  },
  {
    id:          'tj',
    photo:       '/assets/TJ.jpg',
    photoPos:    'center top',
    name:        'TJ',
    title:       'Physical Therapist',
    credentials: ['Physical Therapist'],
    bio:
      'TJ is a skilled physical therapist at InSync with a strong focus on patient-centered care. He works closely with patients on mobility restoration, injury prevention, and progressive rehabilitation programs. Bio details to be updated.',
    specialties: [
      'Orthopedic Rehabilitation',
      'Injury Prevention',
      'Mobility & Flexibility',
    ],
    placeholder: true,
  },
];

interface TeamSectionProps {
  compact?: boolean;
}

export default function TeamSection({ compact = false }: TeamSectionProps) {
  const displayedTeam = compact ? TEAM.slice(0, 2) : TEAM;

  return (
    <Box
      component="section"
      id="team"
      aria-label="Our team"
      sx={{
        py:              { xs: compact ? 4 : 6, md: compact ? 6 : 10 },
        backgroundColor: BRAND.white,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {!compact && (
          <MotionSection>
          <Box sx={{ mb: { xs: 6, md: 9 }, maxWidth: 600 }}>
            <Typography component="p" className="overline" sx={{ mb: 2 }}>
              Our Team
            </Typography>
            <Typography
              variant="h2"
              sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.625rem' } }}
            >
              Specialists Who Understand Your Goals
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: BRAND.gray500, lineHeight: 1.7 }}
            >
              One-on-one care from clinicians who understand the demands of
              active life, from injury through full return to performance.
            </Typography>
          </Box>
          </MotionSection>
        )}

        <MotionSection variant="list">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {displayedTeam.map(({ id, photo, photoPos, name, title, credentials, bio, specialties, placeholder }) => (
            <Grid key={id} item xs={12} md={compact ? 6 : 4}>
              <MotionSection key={id} variant="item">
              <Box
                component="article"
                sx={{
                  border:          `1px solid ${BRAND.gray200}`,
                  borderRadius:    4,
                  overflow:        'hidden',
                  backgroundColor: BRAND.white,
                  height:          '100%',
                  display:         'flex',
                  flexDirection:   'column',
                  transition:      'all 0.25s ease',
                  '&:hover': {
                    boxShadow:   '0 8px 32px rgba(0,61,89,0.08)',
                    transform:   'translateY(-3px)',
                    borderColor: BRAND.neoBlue,
                  },
                }}
              >
                {/* Photo */}
                <Box
                  sx={{
                    position:        'relative',
                    height:          { xs: 280, sm: 320, md: 300 },
                    backgroundColor: BRAND.gray100,
                    overflow:        'hidden',
                    flexShrink:      0,
                  }}
                >
                  <Image
                    src={photo}
                    alt={`${name}, ${title} at InSync Physical Therapy`}
                    fill
                    sizes="(max-width: 900px) 100vw, 400px"
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                    style={{
                      objectFit:      'cover',
                      objectPosition: photoPos ?? 'center top',
                    }}
                  />
                  {placeholder && (
                    <Box
                      sx={{
                        position:        'absolute',
                        bottom:          12,
                        right:           12,
                        backgroundColor: 'rgba(0,61,89,0.85)',
                        borderRadius:    1.5,
                        px:              1.5,
                        py:              0.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize:  '0.7rem',
                          color:     'rgba(255,255,255,0.6)',
                          fontWeight: 500,
                        }}
                      >
                        Bio being updated
                      </Typography>
                    </Box>
                  )}
                </Box>

                {/* Content */}
                <Box sx={{ p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Credentials */}
                  <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 2 }}>
                    {credentials.map((c) => (
                      <Chip
                        key={c}
                        label={c}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(14,197,230,0.1)',
                          color:           BRAND.neoBlue,
                          fontWeight:      600,
                          fontSize:        '0.7rem',
                          height:          22,
                          borderRadius:    1,
                        }}
                      />
                    ))}
                  </Box>

                  {/* Name & Title */}
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight:  800,
                      fontSize:    '1.25rem',
                      color:       BRAND.spaceNavy,
                      lineHeight:  1.2,
                      mb:          0.5,
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize:    '0.875rem',
                      fontWeight:  500,
                      color:       BRAND.neoBlue,
                      mb:          2,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {title}
                  </Typography>

                  {/* Bio */}
                  <Typography
                    variant="body2"
                    sx={{
                      color:      BRAND.gray500,
                      lineHeight: 1.7,
                      fontSize:   '0.875rem',
                      mb:         2.5,
                    }}
                  >
                    {bio}
                  </Typography>

                  {/* Spacer */}
                  <Box sx={{ flex: 1 }} />

                  {/* Specialties */}
                  <Box
                    sx={{
                      borderTop: `1px solid ${BRAND.gray100}`,
                      pt:        2.5,
                      mt:        'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize:      '0.7rem',
                        fontWeight:    700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color:         BRAND.gray500,
                        mb:            1.25,
                      }}
                    >
                      Specialties
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {specialties.map((s) => (
                        <Box
                          key={s}
                          sx={{
                            px:              1.25,
                            py:              0.375,
                            borderRadius:    1,
                            border:          `1px solid ${BRAND.gray200}`,
                            backgroundColor: BRAND.offWhite,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize:   '0.75rem',
                              fontWeight: 500,
                              color:      BRAND.gray700,
                            }}
                          >
                            {s}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
              </MotionSection>
            </Grid>
          ))}
        </Grid>
        </MotionSection>
      </Container>
    </Box>
  );
}
