'use client';

import React, { useEffect, useState } from 'react';
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
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import { BRAND } from '@/lib/theme';
import BrandLogo from '@/components/BrandLogo';

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'fixed',
          inset: '0 0 auto 0',
          zIndex: 1300,
          backgroundColor: BRAND.spaceNavy,
          color: BRAND.white,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Box
          sx={{
            maxWidth: 1280,
            mx: 'auto',
            px: 5,
            py: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            letterSpacing: '0.02em',
          }}
        >
          <Box>Brooklyn and Bryant Park physical therapy</Box>
          <Box component="a" href="tel:+19294194643" sx={{ color: 'inherit' }}>
            929-419-4643
          </Box>
        </Box>
      </Box>

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: { md: 34 },
          backgroundColor: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(14px)',
          boxShadow: scrolled
            ? '0 1px 0 rgba(0,61,89,0.08), 0 8px 28px rgba(0,0,0,0.06)'
            : '0 1px 0 rgba(0,61,89,0.06)',
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
          zIndex: 1200,
        }}
      >
        <Box
          sx={{
            maxWidth: 1280,
            width: '100%',
            mx: 'auto',
            px: { xs: 2.5, md: 5 },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              height: { xs: 72, md: 82 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <BrandLogo priority />

            <Box
              component="nav"
              aria-label="Main navigation"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                ml: 'auto',
              }}
            >
              {NAV_LINKS.map(({ label, href }) => {
                const active = pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <Button
                    key={href}
                    component={Link}
                    href={href}
                    disableRipple
                    sx={{
                      color: active ? BRAND.spaceNavy : BRAND.gray700,
                      fontWeight: active ? 700 : 500,
                      fontSize: '0.9375rem',
                      px: 1.5,
                      py: 1,
                      borderRadius: 99,
                      letterSpacing: '0.005em',
                      textTransform: 'none',
                      backgroundColor: active ? BRAND.sand : 'transparent',
                      '&:hover': {
                        color: BRAND.spaceNavy,
                        backgroundColor: BRAND.offWhite,
                      },
                    }}
                  >
                    {label}
                  </Button>
                );
              })}
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Button
                component="a"
                href="tel:+19294194643"
                startIcon={<PhoneIcon sx={{ fontSize: '0.85rem !important' }} />}
                disableRipple
                sx={{
                  color: BRAND.spaceNavy,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  py: 0.75,
                  px: 1.25,
                  '&:hover': {
                    color: BRAND.spaceNavy,
                    backgroundColor: 'transparent',
                  },
                }}
              >
                929-419-4643
              </Button>
              <Button component={Link} href="/contact" variant="contained">
                Request Appointment
              </Button>
            </Box>

            <IconButton
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: BRAND.spaceNavy,
                ml: 'auto',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: BRAND.white,
            color: BRAND.spaceNavy,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            py: 2.5,
            borderBottom: `1px solid ${BRAND.gray200}`,
          }}
        >
          <BrandLogo width={148} />
          <IconButton aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 2, pt: 2 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <ListItem key={href} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: 3,
                  px: 2,
                  py: 1.5,
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: BRAND.spaceNavy,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ mx: 2, my: 2 }} />

        <Box sx={{ px: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Button component={Link} href="/contact" variant="contained" fullWidth size="large">
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
              borderColor: BRAND.gray200,
              color: BRAND.spaceNavy,
            }}
          >
            929-419-4643
          </Button>
        </Box>

        <Box sx={{ px: 3, mt: 4 }}>
          <Typography
            sx={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: BRAND.gray500,
              mb: 1.5,
            }}
          >
            Locations
          </Typography>
          <Typography variant="body2" sx={{ color: BRAND.gray700, lineHeight: 1.7 }}>
            Brooklyn: 1081 Gates Ave, Brooklyn, NY 11221
          </Typography>
          <Typography variant="body2" sx={{ color: BRAND.gray700, lineHeight: 1.7, mt: 0.5 }}>
            Bryant Park: 55 W 39th St, Suite 303, New York, NY 10018
          </Typography>
        </Box>
      </Drawer>

      <Box sx={{ height: { xs: 72, md: 116 } }} aria-hidden="true" />
    </>
  );
}
