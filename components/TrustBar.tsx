import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import BlockIcon from '@mui/icons-material/Block';
import SportsIcon from '@mui/icons-material/Sports';
import VerifiedIcon from '@mui/icons-material/Verified';
import MotionSection from '@/components/MotionSection';
import { BRAND } from '@/lib/theme';

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface TrustItem {
  icon:         React.ReactNode;
  /** Large stat or label (e.g. "1-on-1", "No PT Mills") */
  value:        string;
  /** Supporting description line */
  label:        string;
  /** Optional — wraps the item in a Next.js Link */
  href?:        string;
  /** Optional accessible label override for the link */
  ariaLabel?:   string;
}

export interface TrustBarProps {
  /**
   * Override the default trust items.
   * If omitted, the component renders the four core InSync differentiators.
   */
  items?: TrustItem[];
}

// ─── Default items ─────────────────────────────────────────────────────────────

const DEFAULT_TRUST_ITEMS: TrustItem[] = [
  {
    icon:  <GroupsIcon sx={{ fontSize: '1.5rem', color: BRAND.neoBlue }} />,
    value: '1-on-1',
    label: 'Real one-on-one treatment, every session',
  },
  {
    icon:  <BlockIcon sx={{ fontSize: '1.5rem', color: BRAND.neoBlue }} />,
    value: 'No PT Mills',
    label: 'No aides. No handoffs. Your therapist runs every visit.',
  },
  {
    icon:  <SportsIcon sx={{ fontSize: '1.5rem', color: BRAND.neoBlue }} />,
    value: '9+ Years',
    label: 'Treating ortho injuries and sports athletes in NYC',
  },
  {
    icon:     <VerifiedIcon sx={{ fontSize: '1.5rem', color: BRAND.neoBlue }} />,
    value:    'Verified',
    label:    'Insurance confirmed before your first visit',
    href:     '/insurance',
    ariaLabel:'View accepted insurance plans',
  },
];

// ─── Item wrapper (plain box or linked) ───────────────────────────────────────

function TrustItemWrapper({
  href,
  ariaLabel,
  children,
}: {
  href?:      string;
  ariaLabel?: string;
  children:   React.ReactNode;
}) {
  if (href) {
    return (
      <Box
        component={Link}
        href={href}
        aria-label={ariaLabel}
        sx={{
          textDecoration: 'none',
          display:        'block',
          borderRadius:   1,
          '&:focus-visible': {
            outline:       `2px solid ${BRAND.neoBlue}`,
            outlineOffset: 3,
          },
        }}
      >
        {children}
      </Box>
    );
  }
  return <>{children}</>;
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function TrustBar({ items }: TrustBarProps) {
  const trustItems = items ?? DEFAULT_TRUST_ITEMS;

  return (
    <Box
      component="section"
      aria-label="Trust indicators"
      className="section-navy"
      sx={{ py: { xs: 4, md: 5 } }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        <MotionSection variant="list">
          <Box
            sx={{
              display:             'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: `repeat(${trustItems.length}, 1fr)`,
              },
              gap: { xs: 3, md: 2 },
            }}
          >
            {trustItems.map(({ icon, value, label, href, ariaLabel }, i) => (
              <MotionSection key={value} variant="item">
                <TrustItemWrapper href={href} ariaLabel={ariaLabel}>
                  <Box
                    sx={{
                      display:       'flex',
                      flexDirection: 'column',
                      alignItems:    { xs: 'center', md: 'flex-start' },
                      gap:           0.75,
                      px:            { md: 3 },
                      borderLeft:    i > 0 ? { md: '1px solid rgba(255,255,255,0.08)' } : 'none',
                      textAlign:     { xs: 'center', md: 'left' },
                    }}
                  >
                    {icon}
                    <Typography
                      sx={{
                        fontWeight:    800,
                        fontSize:      { xs: '1.5rem', md: '1.75rem' },
                        lineHeight:    1,
                        color:         BRAND.white,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {value}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize:      '0.8125rem',
                        fontWeight:    500,
                        color:         'rgba(255,255,255,0.55)',
                        lineHeight:    1.4,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {label}
                    </Typography>
                  </Box>
                </TrustItemWrapper>
              </MotionSection>
            ))}
          </Box>
        </MotionSection>
      </Container>
    </Box>
  );
}
