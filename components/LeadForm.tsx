'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { BRAND } from '@/lib/theme';

const LOCATIONS = [
  { value: 'brooklyn',    label: 'Brooklyn — 1081 Gates Ave'               },
  { value: 'bryant-park', label: 'Manhattan — 55 W 39th St, Suite 303'     },
  { value: 'either',      label: 'Either location works for me'             },
];

const CONCERNS = [
  { value: 'back-neck-pain',    label: 'Back or neck pain'                  },
  { value: 'knee-pain',         label: 'Knee pain or injury'                },
  { value: 'shoulder-pain',     label: 'Shoulder pain or injury'            },
  { value: 'sports-injury',     label: 'Sports injury'                      },
  { value: 'post-surgical',     label: 'Post-surgical rehabilitation'       },
  { value: 'chronic-pain',      label: 'Chronic pain'                       },
  { value: 'acl-meniscus',      label: 'ACL or meniscus injury'             },
  { value: 'plantar-fasciitis', label: 'Plantar fasciitis'                  },
  { value: 'return-to-sport',   label: 'Return to sport / training'         },
  { value: 'movement-analysis', label: 'Movement analysis / diagnostics'    },
  { value: 'other',             label: 'Other / not sure'                   },
];

const WHAT_TO_EXPECT = [
  "We'll call to confirm your appointment within one business day.",
  'We verify your insurance before scheduling — no surprise costs.',
  'Plan to arrive 10 minutes early for paperwork on your first visit.',
  'Wear comfortable clothing you can move in.',
  'Bring your insurance card and a photo ID.',
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name:         string;
  email:        string;
  phone:        string;
  location:     string;
  concern:      string;
  otherConcern: string;
  insurance:    string;
  message:      string;
}

interface FormErrors {
  name:  string;
  email: string;
  phone: string;
}

const INITIAL: FormData = {
  name:         '',
  email:        '',
  phone:        '',
  location:     '',
  concern:      '',
  otherConcern: '',
  insurance:    '',
  message:      '',
};

const INITIAL_ERRORS: FormErrors = { name: '', email: '', phone: '' };

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function LeadForm() {
  const [form, setForm]         = useState<FormData>(INITIAL);
  const [status, setStatus]     = useState<FormState>('idle');
  const [errors, setErrors]     = useState<FormErrors>(INITIAL_ERRORS);
  const [serverError, setServerError] = useState('');

  const handleChange = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      // Clear field error on change
      if (field in errors) {
        setErrors((prev) => ({ ...prev, [field]: '' }));
      }
    };

  const validate = (): boolean => {
    const next: FormErrors = { name: '', email: '', phone: '' };
    let valid = true;

    if (!form.name.trim()) {
      next.name = 'Your name is required.';
      valid = false;
    }
    if (!form.email.trim()) {
      next.email = 'Your email address is required.';
      valid = false;
    } else if (!validateEmail(form.email)) {
      next.email = 'Please enter a valid email address.';
      valid = false;
    }
    if (!form.phone.trim()) {
      next.phone = 'Your phone number is required.';
      valid = false;
    }

    setErrors(next);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('loading');
    setServerError('');

    try {
      const payload = {
        ...form,
        concern: form.concern === 'other' && form.otherConcern.trim()
          ? `Other: ${form.otherConcern.trim()}`
          : form.concern,
      };

      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Server error');

      setStatus('success');
      setForm(INITIAL);
      setErrors(INITIAL_ERRORS);
    } catch {
      setStatus('error');
      setServerError(
        'Something went wrong. Please try again or call us at 929-419-4643.'
      );
    }
  };

  // ── Success state ────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <Box
        sx={{
          border:          `1px solid rgba(14,197,230,0.25)`,
          borderRadius:    4,
          backgroundColor: 'rgba(14,197,230,0.04)',
          p:               { xs: 3.5, md: 4.5 },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <CheckCircleIcon sx={{ fontSize: '2rem', color: BRAND.neoBlue }} />
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, fontSize: { xs: '1.375rem', md: '1.625rem' }, color: BRAND.spaceNavy }}
          >
            Request Received
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{ color: BRAND.gray500, lineHeight: 1.7, mb: 3.5 }}
        >
          A member of our team will reach out within one business day to confirm
          your appointment and verify your insurance benefits.
        </Typography>

        {/* What to expect checklist */}
        <Box
          sx={{
            borderTop:  `1px solid rgba(14,197,230,0.2)`,
            pt:         2.75,
            mb:         3,
          }}
        >
          <Typography
            sx={{
              fontSize:      '0.7rem',
              fontWeight:    700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         BRAND.gray500,
              mb:            1.75,
            }}
          >
            What to expect
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
            {WHAT_TO_EXPECT.map((item) => (
              <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                <CheckCircleIcon
                  sx={{ fontSize: '1rem', color: BRAND.neoBlue, mt: '2px', flexShrink: 0 }}
                />
                <Typography
                  sx={{
                    fontSize:   '0.875rem',
                    color:      BRAND.gray700,
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Button
          onClick={() => setStatus('idle')}
          variant="outlined"
          size="small"
          sx={{
            borderColor: BRAND.spaceNavy,
            color:       BRAND.spaceNavy,
            fontWeight:  600,
            borderRadius: 2,
            '&:hover': {
              borderColor:     BRAND.spaceNavy,
              backgroundColor: 'rgba(0,61,89,0.05)',
            },
          }}
        >
          Submit another request
        </Button>
      </Box>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────────────
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Appointment request form"
    >
      {status === 'error' && serverError && (
        <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
          {serverError}
        </Alert>
      )}

      <Box
        sx={{
          display:             'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap:                 2.5,
        }}
      >
        {/* Name */}
        <TextField
          label="Full Name"
          placeholder="Jane Smith"
          value={form.name}
          onChange={handleChange('name')}
          required
          fullWidth
          error={Boolean(errors.name)}
          helperText={errors.name}
          inputProps={{ 'aria-required': 'true' }}
          FormHelperTextProps={{ sx: { fontSize: '0.75rem' } }}
        />

        {/* Email */}
        <TextField
          label="Email Address"
          type="email"
          placeholder="jane@email.com"
          value={form.email}
          onChange={handleChange('email')}
          required
          fullWidth
          error={Boolean(errors.email)}
          helperText={errors.email}
          inputProps={{ 'aria-required': 'true' }}
          FormHelperTextProps={{ sx: { fontSize: '0.75rem' } }}
        />

        {/* Phone */}
        <TextField
          label="Phone Number"
          type="tel"
          placeholder="(555) 000-0000"
          value={form.phone}
          onChange={handleChange('phone')}
          required
          fullWidth
          error={Boolean(errors.phone)}
          helperText={errors.phone}
          inputProps={{ 'aria-required': 'true' }}
          FormHelperTextProps={{ sx: { fontSize: '0.75rem' } }}
        />

        {/* Insurance */}
        <TextField
          label="Insurance Provider"
          placeholder="e.g. Aetna, Blue Cross, Medicare"
          value={form.insurance}
          onChange={handleChange('insurance')}
          fullWidth
          helperText="We verify your benefits before scheduling"
          FormHelperTextProps={{ sx: { fontSize: '0.75rem', color: BRAND.gray500 } }}
        />

        {/* Location */}
        <TextField
          select
          label="Preferred Location"
          value={form.location}
          onChange={handleChange('location')}
          fullWidth
        >
          {LOCATIONS.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>

        {/* Concern */}
        <TextField
          select
          label="Primary Concern"
          value={form.concern}
          onChange={handleChange('concern')}
          fullWidth
        >
          {CONCERNS.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>

        {/* Conditional — other concern */}
        {form.concern === 'other' && (
          <Box sx={{ gridColumn: { sm: '1 / -1' } }}>
            <TextField
              label="Describe your concern"
              placeholder="Tell us what brings you in so we can connect you with the right therapist."
              value={form.otherConcern}
              onChange={handleChange('otherConcern')}
              fullWidth
            />
          </Box>
        )}

        {/* Message */}
        <Box sx={{ gridColumn: { sm: '1 / -1' } }}>
          <TextField
            label="Additional Details (optional)"
            placeholder="How long have you had this issue? Any previous treatment? Questions about your first visit?"
            value={form.message}
            onChange={handleChange('message')}
            multiline
            rows={4}
            fullWidth
          />
        </Box>
      </Box>

      {/* Submit */}
      <Box sx={{ mt: 3.5 }}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={status === 'loading'}
          data-analytics="contact-form-submit"
          sx={{
            backgroundColor: BRAND.neoBlue,
            color:           BRAND.white,
            fontWeight:      700,
            py:              1.875,
            fontSize:        '1.0625rem',
            borderRadius:    2,
            letterSpacing:   '0.01em',
            '&:hover': {
              backgroundColor: BRAND.neoBlueHover,
              transform:       'translateY(-1px)',
              boxShadow:       '0 6px 24px rgba(14,197,230,0.3)',
            },
            '&:disabled': {
              backgroundColor: BRAND.disabledBg,
              color:           BRAND.white,
            },
          }}
        >
          {status === 'loading' ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <CircularProgress size={18} sx={{ color: BRAND.white }} />
              Sending your request…
            </Box>
          ) : (
            'Send Appointment Request'
          )}
        </Button>

        {/* Privacy / HIPAA note */}
        <Box
          sx={{
            display:    'flex',
            alignItems: 'flex-start',
            gap:        0.75,
            mt:         2,
          }}
        >
          <LockIcon sx={{ fontSize: '0.875rem', color: BRAND.gray500, mt: '2px', flexShrink: 0 }} />
          <Typography
            variant="body2"
            sx={{
              color:      BRAND.gray500,
              fontSize:   '0.78rem',
              lineHeight: 1.55,
            }}
          >
            Your information is private and used only to schedule your
            appointment. InSync Physical Therapy will not share it with
            third parties. See our{' '}
            <Typography
              component="a"
              href="/privacy"
              sx={{
                fontSize:       'inherit',
                color:          BRAND.neoBlue,
                textDecoration: 'underline',
                textUnderlineOffset: 2,
                '&:hover':      { color: BRAND.neoBlueHover },
              }}
            >
              Privacy Policy
            </Typography>
            . Not for medical emergencies — if this is an emergency, call 911.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
