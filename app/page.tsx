import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServicesGrid from '@/components/ServicesGrid';
import TechnologySection from '@/components/TechnologySection';
import InsuranceSection from '@/components/InsuranceSection';
import ReviewsSection from '@/components/ReviewsSection';
import LocationsSection from '@/components/LocationsSection';
import TeamSection from '@/components/TeamSection';
import FAQSection from '@/components/FAQSection';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Physical Therapy NYC | InSync Physical Therapy',
  description:
    'Orthopedic rehabilitation, sports injury recovery, chronic pain treatment, and post-surgical physical therapy in Brooklyn and Bryant Park, NYC. One-on-one care. Insurance accepted. Request an appointment today.',
  alternates: { canonical: 'https://insync-pt.com' },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Full-viewport hero with transparent nav */}
      <HeroSection />

      {/* 2. Trust bar — quick credibility signals */}
      <TrustBar />

      {/* 3. Services overview — 6 cards, links to /services */}
      <ServicesGrid maxItems={6} showCTA compact={false} />

      {/* 4. Technology + diagnostics differentiator */}
      <TechnologySection />

      {/* 5. Insurance logos */}
      <InsuranceSection />

      {/* 6. Patient reviews */}
      <ReviewsSection />

      {/* 7. Team — Dr. Hassan + Piero (compact, 2 members) */}
      <TeamSection compact />

      {/* 8. Locations — dark navy section */}
      <LocationsSection compact />

      {/* 9. FAQ — 4 key questions */}
      <FAQSection compact maxItems={4} />

      {/* 10. Final CTA band */}
      <CTABand
        headline="Ready to Start Your Recovery?"
        subline="Brooklyn and Bryant Park locations. Insurance verified before your first visit."
        variant="dark"
      />
    </>
  );
}
