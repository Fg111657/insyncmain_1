// ─── JSON-LD Schema Objects ─────────────────────────────────────────────────
// Schema.org structured data for InSync Physical Therapy
// Used in page <head> via next/head or Next.js metadata API

export const BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type':    ['MedicalBusiness', 'LocalBusiness'],
  name:       'InSync Physical Therapy',
  url:        'https://insync-pt.com',
  logo:       'https://insync-pt.com/assets/logo/insync-logo.png',
  image:      'https://insync-pt.com/assets/hassan-pt/photos/provider-hassan/dr-hassan-seated-cervical-mobility-assessment-male-patient-03.jpg',
  description:
    'InSync Physical Therapy provides orthopedic rehabilitation, sports injury recovery, chronic pain treatment, and post-surgical care in Brooklyn and Manhattan, NYC.',
  medicalSpecialty: 'PhysicalTherapy',
  priceRange:       '$$',
  telephone:        '+19294194643',
  email:            'insyncpt.manager@gmail.com',
  areaServed:       ['Brooklyn, NY', 'Midtown Manhattan, NY', 'New York City, NY'],
  address: [
    {
      '@type':          'PostalAddress',
      streetAddress:    '1081 Gates Ave',
      addressLocality:  'Brooklyn',
      addressRegion:    'NY',
      postalCode:       '11221',
      addressCountry:   'US',
    },
    {
      '@type':          'PostalAddress',
      streetAddress:    '55 W 39th St, 3rd Floor, Suite 303',
      addressLocality:  'New York',
      addressRegion:    'NY',
      postalCode:       '10018',
      addressCountry:   'US',
    },
  ],
  openingHoursSpecification: [
    {
      '@type':     'OpeningHoursSpecification',
      dayOfWeek:   ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens:       '08:00',
      closes:      '18:00',
    },
  ],
  availableService: [
    { '@type': 'MedicalTherapy', name: 'Orthopedic Rehabilitation' },
    { '@type': 'MedicalTherapy', name: 'Sports Injury Rehabilitation' },
    { '@type': 'MedicalTherapy', name: 'Chronic Pain Treatment' },
    { '@type': 'MedicalTherapy', name: 'Post-Surgical Rehabilitation' },
    { '@type': 'MedicalTherapy', name: 'Manual Therapy' },
    { '@type': 'MedicalTherapy', name: 'Movement Analysis' },
    { '@type': 'MedicalTherapy', name: 'Strength and Conditioning Transition' },
  ],
  hasMap: [
    'https://maps.google.com/?q=1081+Gates+Ave+Brooklyn+NY+11221',
    'https://maps.google.com/?q=55+W+39th+St+New+York+NY+10018',
  ],
  sameAs: [],
};

export const PHYSICIAN_SCHEMA = {
  '@context':       'https://schema.org',
  '@type':          'Physician',
  name:             'Dr. Hassan',
  description:
    'Doctor of Physical Therapy with 9+ years of experience specializing in orthopedic rehabilitation, sports injury recovery, and post-surgical care in New York City.',
  worksFor: {
    '@type': 'MedicalBusiness',
    name:    'InSync Physical Therapy',
    url:     'https://insync-pt.com',
  },
  medicalSpecialty: 'PhysicalTherapy',
  alumniOf: {
    '@type': 'EducationalOrganization',
    name:    'Touro University',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name:    'Doctor of Physical Therapy (DPT)',
  },
};

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type':    'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name:    'Who should see a physical therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Anyone experiencing pain, injury, movement limitations, or recovering from surgery can benefit from physical therapy. At InSync, we commonly treat active adults, athletes, office workers, and post-surgical patients.',
      },
    },
    {
      '@type': 'Question',
      name:    'What injuries and conditions do you treat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'We treat back pain, knee pain, shoulder pain, ACL injuries, meniscus tears, rotator cuff injuries, labral issues, plantar fasciitis, chronic pain, and post-surgical rehabilitation across all orthopedic conditions.',
      },
    },
    {
      '@type': 'Question',
      name:    'Do you accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. InSync Physical Therapy is in-network with Fidelis, Medicare, HIP, NYC EPP, GHI, Aetna, Cigna, United Healthcare, and Blue Cross Blue Shield. We verify your benefits before scheduling your first appointment.',
      },
    },
    {
      '@type': 'Question',
      name:    'Do I need a referral to see a physical therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'In New York State, you can see a physical therapist directly without a referral for up to 30 days. After that period, a physician referral may be required depending on your insurance plan.',
      },
    },
    {
      '@type': 'Question',
      name:    'How long is a session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Initial evaluations are typically 60 minutes. Follow-up treatment sessions are generally 45 to 60 minutes. Each session is one-on-one with your physical therapist.',
      },
    },
    {
      '@type': 'Question',
      name:    'Which NYC locations do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'We have two locations: 1081 Gates Ave in Brooklyn, and 55 W 39th St (3rd Floor, Suite 303) near Bryant Park in Midtown Manhattan.',
      },
    },
    {
      '@type': 'Question',
      name:    'Do you work with athletes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. We work with recreational athletes, runners, combat sports athletes, and active adults. Our approach supports modification and intelligent progression — not blanket rest. We also partner with Piero Alessi for structured return-to-performance programs.',
      },
    },
    {
      '@type': 'Question',
      name:    'Can I continue training while in physical therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'In most cases, yes. We work to keep you moving safely throughout your recovery. Your therapist will guide you on what activity is appropriate and how to modify your training to protect your recovery.',
      },
    },
  ],
};

export const LOCATION_BROOKLYN_SCHEMA = {
  '@context':      'https://schema.org',
  '@type':         ['MedicalBusiness', 'LocalBusiness'],
  name:            'InSync Physical Therapy — Brooklyn',
  url:             'https://insync-pt.com/locations',
  telephone:       '+19294194643',
  medicalSpecialty: 'PhysicalTherapy',
  address: {
    '@type':         'PostalAddress',
    streetAddress:   '1081 Gates Ave',
    addressLocality: 'Brooklyn',
    addressRegion:   'NY',
    postalCode:      '11221',
    addressCountry:  'US',
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   '40.6910',
    longitude:  '-73.9230',
  },
};

export const LOCATION_BRYANT_PARK_SCHEMA = {
  '@context':      'https://schema.org',
  '@type':         ['MedicalBusiness', 'LocalBusiness'],
  name:            'InSync Physical Therapy — Manhattan',
  url:             'https://insync-pt.com/locations',
  telephone:       '+19294194643',
  medicalSpecialty: 'PhysicalTherapy',
  address: {
    '@type':         'PostalAddress',
    streetAddress:   '55 W 39th St, 3rd Floor, Suite 303',
    addressLocality: 'New York',
    addressRegion:   'NY',
    postalCode:      '10018',
    addressCountry:  'US',
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   '40.7519',
    longitude:  '-73.9836',
  },
};
