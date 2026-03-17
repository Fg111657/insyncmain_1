import type { Metadata } from 'next';
import Script from 'next/script';
import { FAQ_SCHEMA } from '@/lib/schema';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServicesGrid from '@/components/ServicesGrid';
import TechnologySection from '@/components/TechnologySection';
import FirstVisitSection from '@/components/FirstVisitSection';
import InsuranceSection from '@/components/InsuranceSection';
import TeamSection from '@/components/TeamSection';
import LocationsSection from '@/components/LocationsSection';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Physical Therapy in Brooklyn and Bryant Park | InSync Physical Therapy',
  description:
    'One-on-one physical therapy in Brooklyn and Bryant Park for orthopedic rehab, sports injuries, chronic pain, and post-surgical recovery.',
  alternates: { canonical: 'https://insync-pt.com' },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <HeroSection />
      <TrustBar />
      <ServicesGrid maxItems={6} showCTA compact={false} />
      <TechnologySection />
      <FirstVisitSection />
      <InsuranceSection />
      <TeamSection compact />
      <LocationsSection compact />
      <CTABand
        headline="Request your first visit."
        subline="Brooklyn and Bryant Park locations. We review insurance and follow up directly."
        variant="navy"
      />
    </>
  );
}
