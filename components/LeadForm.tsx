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
  { value: 'brooklyn',     label: 'Brooklyn — 1081 Gates Ave'                    },
  { value: 'bryant-park',  label: 'Bryant Park — 55 W 39th St, Suite 303'        },
  { value: 'either',       label: 'Either location is fine'                      },
];

const CONCERNS = [
  { value: 'back-neck-pain',       label: 'Back or neck pain'                     },
  { value: 'knee-pain',            label: 'Knee pain or injury'                   },
  { value: 'shoulder-pain',        label: 'Shoulder pain or injury'               },
  { value: 'sports-injury',        label: 'Sports injury'                         },
  { value: 'post-surgical',        label: 'Post-surgical rehabilitation'          },
  { value: 'chronic-pain',         label: 'Chronic pain'                          },
  { value: 'acl-meniscus',         label: 'ACL or meniscus injury'               },
  { value: 'plantar-fasciitis',    label: 'Plantar fasciitis'                     },
  { value: 'return-to-sport',      label: 'Return to sport / training'            },
  { value: 'movement-analysis',    label: 'Movement analysis / diagnostics'       },
  { value: 'other',                label: 'Other / not sure'                      },
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name:       string;
  email:      string;
  phone:      string;
  location:   string;
  concern:    string;
  insurance:  string;
  message:    string;
}

const INITIAL: FormData = {
  name:      '',
  email:     '',
  phone:     '',
  location:  '',
  concern:   '',
  insurance: '',
  message:   '',
};

export default function LeadForm() {
  const [form, setForm]       = useState<FormData>(INITIAL);
  const [status, setStatus]   = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and phone number.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Server error');

      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
      setErrorMsg(
        'Something went wrong. Please try again or call us at 929-419-4643.'
      );
    }
  };

  if (status === 'success') {
    return (
      <Box
        sx={{
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          gap:            2,
          py:             8,
          textAlign:      'center',
        }}
      >
        <CheckCircleIcon
          sx={{ fontSize: '3.5rem', color: BRAND.neoBlue }}
        />
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: BRAND.spaceNavy }}
        >
          Request Received
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: BRAND.gray500, maxWidth: 400, lineHeight: 1.7 }}
        >
          Thank you for contacting InSync Physical Therapy. A member of our
          team will reach out shortly to schedule your evaluation.
        </Typography>
        <Button
          onClick={() => setStatus('idle')}
          variant="outlined"
          sx={{
            mt:          2,
            borderColor: BRAND.spaceNavy,
            color:       BRAND.spaceNavy,
          }}
        >
          Submit another request
        </Button>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Appointment request form"
    >
      {status === 'error' && (
        <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
          {errorMsg}
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
          inputProps={{ 'aria-required': 'true' }}
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
          inputProps={{ 'aria-required': 'true' }}
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
          inputProps={{ 'aria-required': 'true' }}
        />

        {/* Insurance */}
        <TextField
          label="Insurance Provider"
          placeholder="e.g. Aetna, Blue Cross, Medicare"
          value={form.insurance}
          onChange={handleChange('insurance')}
          fullWidth
          helperText="We verify benefits before scheduling"
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

        {/* Message — full width */}
        <Box sx={{ gridColumn: { sm: '1 / -1' } }}>
          <TextField
            label="Additional Details (optional)"
            placeholder="Tell us more about your injury, how long you've had it, or any questions you have."
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
          sx={{
            backgroundColor: BRAND.neoBlue,
            color:           BRAND.white,
            fontWeight:      700,
            py:              1.875,
            fontSize:        '1.0625rem',
            borderRadius:    2,
            '&:hover': {
              backgroundColor: '#0AAFCC',
              transform:       'translateY(-1px)',
              boxShadow:       '0 6px 24px rgba(14,197,230,0.3)',
            },
            '&:disabled': {
              backgroundColor: '#B0BEC5',
              color:           BRAND.white,
            },
          }}
        >
          {status === 'loading' ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <CircularProgress size={18} sx={{ color: BRAND.white }} />
              Sending your request...
            </Box>
          ) : (
            'Send Appointment Request'
          )}
        </Button>

        {/* HIPAA / Privacy Note */}
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
            Your information is secure and will only be used to schedule your
            appointment. InSync Physical Therapy will not share your information
            with third parties. This form is not for medical emergencies — if
            you have an emergency, call 911.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
