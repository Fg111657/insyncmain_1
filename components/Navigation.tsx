'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import { BRAND } from '@/lib/theme';

const NAV_LINKS = [
  { label: 'Services',   href: '/services'  },
  { label: 'Locations',  href: '/locations' },
  { label: 'Insurance',  href: '/insurance' },
  { label: 'About',      href: '/about'     },
];

// ─── InSync Logo — real mark PNG + wordmark ───────────────────────────────────
// Mark PNG: /logo/insync-mark.png — 3230×1312 RGBA, NeoBlue icon on transparent bg
function InSyncLogo({ onDark = false }: { onDark?: boolean }) {
  const textColor    = onDark ? BRAND.white     : BRAND.spaceNavy;
  const subColor     = onDark ? 'rgba(255,255,255,0.55)' : BRAND.gray500;
  // On a light background we tint the mark dark so the NeoBlue icon pops
  const markFilter   = onDark ? 'none' : 'none'; // mark is NeoBlue RGBA — works on both

  return (
    <Box
      component={Link}
      href="/"
      aria-label="InSync Physical Therapy — Home"
      sx={{
        display:        'flex',
        alignItems:     'center',
        gap:            1,
        textDecoration: 'none',
        flexShrink:     0,
        '&:focus-visible': {
          outline:       `2px solid ${BRAND.neoBlue}`,
          outlineOffset: 4,
          borderRadius:  2,
        },
      }}
    >
      {/* Real logo mark — NeoBlue icon, RGBA transparent background */}
      <Box
        aria-hidden="true"
        sx={{
          position:   'relative',
          width:      44,
          height:     44,
          flexShrink: 0,
          filter:     markFilter,
        }}
      >
        <Image
          src="/logo/insync-mark.png"
          alt=""
          fill
          sizes="44px"
          style={{ objectFit: 'contain', objectPosition: 'center' }}
          priority
        />
      </Box>

      {/* Wordmark */}
      <Box>
        <Typography
          component="span"
          sx={{
            display:       'block',
            fontWeight:    800,
            fontSize:      '1.125rem',
            lineHeight:    1,
            color:         textColor,
            letterSpacing: '-0.025em',
          }}
        >
          InSync
        </Typography>
        <Typography
          component="span"
          sx={{
            display:       'block',
            fontWeight:    500,
            fontSize:      '0.585rem',
            lineHeight:    1.3,
            letterSpacing: '0.11em',
            textTransform: 'uppercase',
            color:         subColor,
            mt:            '2px',
          }}
        >
          Physical Therapy
        </Typography>
      </Box>
    </Box>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export default function Navigation() {
  const pathname           = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const transparent = isHome && !scrolled;

  const navBg     = transparent ? 'transparent'                        : BRAND.white;
  const navShadow = transparent ? 'none'                               : '0 1px 0 rgba(0,61,89,0.08), 0 2px 16px rgba(0,0,0,0.04)';
  const linkColor = transparent ? BRAND.white                          : BRAND.spaceNavy;
  const linkHover = transparent ? 'rgba(255,255,255,0.8)'             : BRAND.neoBlue;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: navBg,
          boxShadow:       navShadow,
          backdropFilter:  scrolled ? 'blur(12px)' : 'none',
          transition:      'all 0.3s ease',
          zIndex:          1100,
        }}
      >
        <Toolbar
          sx={{
            maxWidth:      1280,
            width:         '100%',
            mx:            'auto',
            px:            { xs: 2, md: 4 },
            height:        { xs: 64, md: 72 },
            display:       'flex',
            alignItems:    'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <InSyncLogo onDark={transparent} />

          {/* Desktop Nav Links */}
          <Box
            component="nav"
            aria-label="Main navigation"
            sx={{
              display:    { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap:        0.5,
            }}
          >
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Button
                  key={href}
                  component={Link}
                  href={href}
                  sx={{
                    color:         active ? BRAND.neoBlue : linkColor,
                    fontWeight:    active ? 600 : 500,
                    fontSize:      '0.9375rem',
                    px:            1.5,
                    py:            1,
                    borderRadius:  2,
                    position:      'relative',
                    '&:hover': {
                      color:           linkHover,
                      backgroundColor: 'transparent',
                    },
                    '&::after': {
                      content:         '""',
                      position:        'absolute',
                      bottom:          6,
                      left:            '50%',
                      transform:       'translateX(-50%)',
                      width:           active ? '70%' : '0%',
                      height:          2,
                      backgroundColor: BRAND.neoBlue,
                      borderRadius:    2,
                      transition:      'width 0.2s ease',
                    },
                    '&:hover::after': {
                      width: '70%',
                    },
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Box>

          {/* Desktop CTAs */}
          <Box
            sx={{
              display:    { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap:        1.5,
            }}
          >
            <Button
              component="a"
              href="tel:+19294194643"
              startIcon={<PhoneIcon sx={{ fontSize: '0.9rem' }} />}
              sx={{
                color:      linkColor,
                fontSize:   '0.875rem',
                fontWeight: 500,
                py:         0.75,
                px:         1.5,
                '&:hover': {
                  color:           BRAND.neoBlue,
                  backgroundColor: 'transparent',
                },
              }}
            >
              929-419-4643
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="primary"
              size="medium"
              sx={{
                backgroundColor: BRAND.neoBlue,
                color:           BRAND.white,
                fontWeight:      600,
                px:              2.5,
                py:              1,
                fontSize:        '0.9rem',
                '&:hover': {
                  backgroundColor: '#0AAFCC',
                  transform:       'translateY(-1px)',
                  boxShadow:       '0 4px 16px rgba(14,197,230,0.3)',
                },
              }}
            >
              Request Appointment
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { xs: 'flex', md: 'none' },
              color:   transparent ? BRAND.white : BRAND.spaceNavy,
              ml:      1,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width:   '100%',
            maxWidth: 360,
            backgroundColor: BRAND.spaceNavy,
            color:   BRAND.white,
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            px:             3,
            py:             2.5,
            borderBottom:   `1px solid rgba(255,255,255,0.1)`,
          }}
        >
          <InSyncLogo onDark />
          <IconButton
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            sx={{ color: BRAND.white }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Nav Links */}
        <List sx={{ px: 2, pt: 2 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <ListItem key={href} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: 2,
                  px:           2,
                  py:           1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(14,197,230,0.12)',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(14,197,230,0.15)',
                  },
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize:   '1.0625rem',
                    color:      BRAND.white,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mx: 2, my: 2 }} />

        {/* Mobile CTAs */}
        <Box sx={{ px: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            fullWidth
            size="large"
            onClick={() => setDrawerOpen(false)}
            sx={{
              backgroundColor: BRAND.neoBlue,
              color:           BRAND.white,
              fontWeight:      700,
              py:              1.75,
              fontSize:        '1rem',
              '&:hover': { backgroundColor: '#0AAFCC' },
            }}
          >
            Request Appointment
          </Button>
          <Button
            component="a"
            href="tel:+19294194643"
            variant="outlined"
            fullWidth
            size="large"
            startIcon={<PhoneIcon />}
            sx={{
              borderColor: 'rgba(255,255,255,0.3)',
              color:       BRAND.white,
              fontWeight:  600,
              py:          1.5,
              '&:hover': {
                borderColor:     BRAND.neoBlue,
                backgroundColor: 'rgba(14,197,230,0.08)',
              },
            }}
          >
            929-419-4643
          </Button>
        </Box>

        {/* Locations in drawer */}
        <Box sx={{ px: 3, mt: 3 }}>
          <Typography
            variant="caption"
            sx={{ color: 'rgba(255,255,255,0.5)', mb: 1, display: 'block' }}
          >
            Our Locations
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
            Brooklyn — 1081 Gates Ave, NY 11221
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, mt: 0.5 }}>
            Bryant Park — 55 W 39th St, Suite 303, NY 10018
          </Typography>
        </Box>
      </Drawer>

      {/* Toolbar offset for fixed appbar */}
      <Toolbar sx={{ height: { xs: 64, md: 72 } }} />
    </>
  );
}
