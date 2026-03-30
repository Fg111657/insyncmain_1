'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
import Typography from '@mui/material/Typography'; // used in drawer locations block
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import { BRAND } from '@/lib/theme';
import BrandLogo from '@/components/BrandLogo';

const NAV_LINKS = [
  { label: 'Services',   href: '/services'  },
  { label: 'Locations',  href: '/locations' },
  { label: 'About',      href: '/about'     },
];

// ─── Navigation ───────────────────────────────────────────────────────────────
export default function Navigation() {
  const pathname                  = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // On home page, be transparent until scrolled. On inner pages, always white.
  const transparent = isHome && !scrolled;

  const navBg     = transparent ? 'transparent'                    : 'rgba(255,255,255,0.98)';
  const navShadow = transparent ? 'none'                           : '0 1px 0 rgba(0,61,89,0.08), 0 4px 24px rgba(0,0,0,0.06)';
  const linkColor = transparent ? 'rgba(255,255,255,0.92)'         : BRAND.spaceNavy;
  const linkHover = transparent ? BRAND.neoBlue                   : BRAND.neoBlue;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: navBg,
          boxShadow:        navShadow,
          backdropFilter:   scrolled ? 'blur(16px)' : 'none',
          transition:       'background-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease',
          zIndex:           1200,
        }}
      >
        <Box
          sx={{
            maxWidth: 1280,
            width:    '100%',
            mx:       'auto',
            px:       { xs: 2.5, md: 5 },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              height:         { xs: 64, md: 72 },
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'space-between',
            }}
          >
            {/* ── Logo ─────────────────────────────────────── */}
            <BrandLogo
              href="/"
              variant={transparent ? 'white' : 'primary'}
              height={36}
              priority
            />

            {/* ── Desktop Nav Links ─────────────────────────── */}
            <Box
              component="nav"
              aria-label="Main navigation"
              sx={{
                display:    { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap:        0.5,
                position:   'absolute',
                left:       '50%',
                transform:  'translateX(-50%)',
              }}
            >
              {NAV_LINKS.map(({ label, href }) => {
                const active = pathname === href || (href !== '/' && pathname.startsWith(href));
                return (
                  <Button
                    key={href}
                    component={Link}
                    href={href}
                    disableRipple
                    sx={{
                      color:         active ? BRAND.neoBlue : linkColor,
                      fontWeight:    active ? 700 : 500,
                      fontSize:      '0.9375rem',
                      px:            1.75,
                      py:            1,
                      borderRadius:  1,
                      letterSpacing: '0.005em',
                      textTransform: 'none',
                      transition:    'color 0.2s ease',
                      position:      'relative',
                      '&:hover': {
                        color:           linkHover,
                        backgroundColor: 'transparent',
                      },
                      '&::after': {
                        content:         '""',
                        position:        'absolute',
                        bottom:          4,
                        left:            '50%',
                        transform:       'translateX(-50%)',
                        width:           active ? '70%' : '0%',
                        height:          2,
                        backgroundColor: BRAND.neoBlue,
                        borderRadius:    4,
                        transition:      'width 0.25s ease',
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

            {/* ── Desktop Right CTAs ────────────────────────── */}
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
                startIcon={<PhoneIcon sx={{ fontSize: '0.85rem !important' }} />}
                disableRipple
                sx={{
                  color:      linkColor,
                  fontSize:   '0.875rem',
                  fontWeight: 500,
                  py:         0.75,
                  px:         1.25,
                  textTransform: 'none',
                  transition: 'color 0.2s ease',
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
                disableElevation
                sx={{
                  backgroundColor: BRAND.neoBlue,
                  color:           BRAND.obsidian,
                  fontWeight:      700,
                  px:              2.5,
                  py:              1.125,
                  fontSize:        '0.875rem',
                  borderRadius:    1,
                  textTransform:   'none',
                  letterSpacing:   '0.01em',
                  transition:      'background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    backgroundColor: BRAND.neoBlueHover,
                    transform:       'translateY(-1px)',
                    boxShadow:       '0 4px 16px rgba(14,197,230,0.35)',
                  },
                }}
              >
                Request Appointment
              </Button>
            </Box>

            {/* ── Mobile Hamburger ──────────────────────────── */}
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
        </Box>
      </AppBar>

      {/* ── Mobile Drawer ─────────────────────────────────────────────────── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width:           '100%',
            maxWidth:        360,
            backgroundColor: BRAND.spaceNavy,
            color:           BRAND.white,
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
            borderBottom:   `1px solid rgba(255,255,255,0.08)`,
          }}
        >
          <BrandLogo href="/" variant="white" height={32} />
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

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mx: 2, my: 2 }} />

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
              color:           BRAND.obsidian,
              fontWeight:      700,
              py:              1.75,
              fontSize:        '1rem',
              textTransform:   'none',
              borderRadius:    1,
              '&:hover': { backgroundColor: BRAND.neoBlueHover },
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
              borderColor:  'rgba(255,255,255,0.25)',
              color:        BRAND.white,
              fontWeight:   600,
              py:           1.5,
              textTransform: 'none',
              borderRadius: 1,
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
        <Box sx={{ px: 3, mt: 4 }}>
          <Typography
            sx={{
              fontSize:      '0.68rem',
              fontWeight:    700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         'rgba(255,255,255,0.4)',
              mb:            1.5,
            }}
          >
            Our Locations
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            Brooklyn: 1081 Gates Ave, NY 11221
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, mt: 0.5 }}>
            Manhattan: 55 W 39th St, Suite 303, NY 10018
          </Typography>
        </Box>
      </Drawer>

      {/* Spacer so fixed AppBar doesn't overlap content on non-hero pages */}
      <Box sx={{ height: { xs: 64, md: 72 } }} />
    </>
  );
}
