'use client';

import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { BRAND } from '@/lib/theme';
import { BLUR_PLACEHOLDER, TEAM_PHOTOS } from '@/lib/images';
import MotionSection from '@/components/MotionSection';
import HorizontalCarousel from '@/components/HorizontalCarousel';

/**
 * TeamSection — RALPH spec
 * Order: Hassan Elgaty, Piero, TJ.
 * Horizontal carousel when carousel=true, grid otherwise.
 */

const TEAM = [
  {
    id:          'hassan',
    photo:       TEAM_PHOTOS.hassan,
    photoPos:    'center top',
    name:        'Dr. Hassan Elgaty',
    title:       'Doctor of Physical Therapy',
    credentials: ['DPT', 'Touro University', '9+ Years Experience'],
    bio:
      'Dr. Hassan has spent nine years helping New Yorkers recover from injuries and return to the activities they care about. His approach combines hands-on treatment, strength testing, and movement analysis to address the root cause of pain.',
    specialties: [
      'Orthopedic Rehabilitation',
      'Sports Injury Recovery',
      'Manual Therapy',
      'Post-Surgical Rehab',
    ],
  },
  {
    id:          'mahmoud',
    photo:       TEAM_PHOTOS.mahmoud,
    photoPos:    'center top',
    name:        'Dr. Mahmoud Samy Ibrahim',
    title:       'Doctor of Physical Therapy',
    credentials: ['DPT', 'Cairo University', '8+ Years Experience'],
    bio:
      'Dr. Mahmoud brings eight years of hands-on experience in musculoskeletal rehab. He has worked across orthopedic clinics, hospitals, and sports rehab centers, treating everyone from post-surgery patients to elite athletes in basketball, soccer, and swimming.',
    specialties: [
      'Musculoskeletal Rehab',
      'Sports Medicine',
      'Post-Surgical Recovery',
      'Athletic Performance',
    ],
  },
  {
    id:          'moustafa',
    photo:       TEAM_PHOTOS.moustafa,
    photoPos:    'center 20%',
    name:        'Dr. Moustafa Hassanin',
    title:       'Doctor of Physical Therapy',
    credentials: ['DPT', 'OCS Board Certified'],
    bio:
      'Dr. Hassanin is a board-certified Orthopedic Clinical Specialist. He combines hands-on manual therapy with targeted exercise to help patients recover from surgery, overcome chronic pain, and return to peak performance.',
    specialties: [
      'Orthopedic Specialist',
      'Sports Injury Rehab',
      'Manual Therapy',
      'Chronic Pain Treatment',
    ],
  },
  {
    id:          'piero',
    photo:       TEAM_PHOTOS.piero,
    photoPos:    'center 20%',
    name:        'Piero Alessi',
    title:       'Strength & Conditioning Coach',
    credentials: ['NASM Certified', 'Combat Sports Background'],
    bio:
      'Piero specializes in guiding patients from the end of formal physical therapy back to full strength, sport, and performance. His experience in combat sports and functional training gives athletes a structured path back to their highest level.',
    specialties: [
      'Post-Rehab Strength',
      'Return to Performance',
      'Athletic Training',
      'Functional Strength',
    ],
  },
  {
    id:          'tj',
    photo:       TEAM_PHOTOS.tj,
    photoPos:    'center top',
    name:        'TJ Mirasol',
    title:       'Licensed Physical Therapist Assistant',
    credentials: ['PTA', 'Licensed PT (Philippines)'],
    bio:
      'TJ brings over two years of clinical experience in physical rehabilitation. He has worked with patients recovering from neurological conditions and athletes rehabilitating from post-operative injuries.',
    specialties: [
      'Physical Rehabilitation',
      'Post-Operative Rehab',
      'Functional Movement',
      'Strength & Mobility',
    ],
  },
];

function TeamCard({ member }: { member: typeof TEAM[number] }) {
  const { photo, photoPos, name, title, credentials, bio, specialties } = member;
  return (
    <Box
      component="article"
      sx={{
        border:          `1px solid ${BRAND.gray200}`,
        borderRadius:    1.5,
        overflow:        'hidden',
        backgroundColor: BRAND.white,
        height:          '100%',
        display:         'flex',
        flexDirection:   'column',
        transition:      'border-color 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          borderColor: BRAND.sinopia,
          boxShadow:   '0 2px 12px rgba(0,38,42,0.06)',
        },
      }}
    >
      {/* Photo */}
      <Box
        sx={{
          position:        'relative',
          height:          { xs: 260, sm: 300, md: 280 },
          backgroundColor: BRAND.gray100,
          overflow:        'hidden',
          flexShrink:      0,
        }}
      >
        <Image
          src={photo}
          alt={`${name}, ${title} at InSync Physical Therapy`}
          fill
          sizes="(max-width: 900px) 90vw, 360px"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          style={{
            objectFit:      'cover',
            objectPosition: photoPos ?? 'center top',
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Credentials */}
        <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 2 }}>
          {credentials.map((c) => (
            <Chip
              key={c}
              label={c}
              size="small"
              sx={{
                backgroundColor: 'rgba(246,55,0,0.08)',
                color:           BRAND.sinopia,
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
            fontWeight: 800,
            fontSize:   '1.25rem',
            color:      BRAND.deepPetrol,
            lineHeight: 1.2,
            mb:         0.5,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize:      '0.875rem',
            fontWeight:    500,
            color:         BRAND.sinopia,
            mb:            2,
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

        <Box sx={{ flex: 1 }} />

        {/* Specialties */}
        <Box sx={{ borderTop: `1px solid ${BRAND.gray100}`, pt: 2, mt: 'auto' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {specialties.map((s) => (
              <Box
                key={s}
                sx={{
                  px:              1.25,
                  py:              0.375,
                  borderRadius:    1,
                  border:          `1px solid ${BRAND.gray200}`,
                  backgroundColor: '#F9FAFB',
                }}
              >
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 500, color: BRAND.gray700 }}>
                  {s}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface TeamSectionProps {
  compact?:    boolean;
  hideHeader?: boolean;
  /** Render as horizontal carousel instead of grid */
  carousel?:   boolean;
}

export default function TeamSection({ compact = false, hideHeader = false, carousel = false }: TeamSectionProps) {
  const displayedTeam = compact ? TEAM.slice(0, 2) : TEAM;

  return (
    <Box
      component="section"
      id="team"
      aria-label="Our team"
      sx={{
        py:              { xs: compact ? 3 : 5, md: compact ? 4 : 7 },
        backgroundColor: BRAND.white,
      }}
    >
      <Container maxWidth="lg">
        {!compact && !hideHeader && (
          <MotionSection>
            <Box sx={{ mb: { xs: 3, md: 4 }, maxWidth: 600 }}>
              <Typography
                variant="h2"
                sx={{ mb: 1.5, fontSize: { xs: '1.75rem', md: '2.125rem' }, color: BRAND.deepPetrol, fontWeight: 800 }}
              >
                Our team
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: BRAND.gray500, lineHeight: 1.7 }}
              >
                One-on-one care from clinicians who understand the demands of active life.
              </Typography>
            </Box>
          </MotionSection>
        )}
      </Container>

      {carousel ? (
        <Container maxWidth="lg" disableGutters sx={{ px: { md: 3 } }}>
          <MotionSection>
            <HorizontalCarousel
              cardWidth={{ xs: 300, sm: 340, md: 380 }}
              gap={16}
            >
              {displayedTeam.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </HorizontalCarousel>
          </MotionSection>
        </Container>
      ) : (
        <Container maxWidth="lg">
          <MotionSection variant="list">
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {displayedTeam.map((member) => (
                <Grid key={member.id} item xs={12} md={compact ? 6 : 4}>
                  <MotionSection variant="item">
                    <TeamCard member={member} />
                  </MotionSection>
                </Grid>
              ))}
            </Grid>
          </MotionSection>
        </Container>
      )}
    </Box>
  );
}
