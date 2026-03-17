import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { SxProps, Theme } from '@mui/material/styles';

// ─── SectionWrapper ───────────────────────────────────────────────────────────
// Enforces consistent section padding (py 48px mobile / 80px desktop) and
// Container max-width (lg = 1200px with 24px side gutter) across all sections.
//
// USAGE:
//   <SectionWrapper backgroundColor={BRAND.white}>
//     ...section content...
//   </SectionWrapper>
//
//   Optionally pass containerSx or sectionSx for one-off overrides.
//   Never bypass this wrapper with arbitrary px/py values on Box directly.
// ─────────────────────────────────────────────────────────────────────────────

interface SectionWrapperProps {
  children:         React.ReactNode;
  backgroundColor?: string;
  component?:       React.ElementType;
  id?:              string;
  ariaLabel?:       string;
  className?:       string;
  /** py override — default: { xs: 6, md: 10 } */
  py?:              object | number;
  /** Additional sx on the outer Box */
  sectionSx?:       SxProps<Theme>;
  /** Additional sx on the Container */
  containerSx?:     SxProps<Theme>;
  /** When true, wraps content in a Container (default: true) */
  withContainer?:   boolean;
}

export default function SectionWrapper({
  children,
  backgroundColor,
  component      = 'section',
  id,
  ariaLabel,
  className,
  py             = { xs: 6, md: 10 },
  sectionSx,
  containerSx,
  withContainer  = true,
}: SectionWrapperProps) {
  return (
    <Box
      component={component}
      id={id}
      aria-label={ariaLabel}
      className={className}
      sx={{
        py,
        ...(backgroundColor ? { backgroundColor } : {}),
        ...sectionSx,
      }}
    >
      {withContainer ? (
        <Container
          maxWidth="lg"
          sx={{ px: { xs: 3, md: 4 }, ...containerSx }}
        >
          {children}
        </Container>
      ) : (
        children
      )}
    </Box>
  );
}
