import type { Metadata } from 'next';
import Script from 'next/script';
import { FAQ_SCHEMA } from '@/lib/schema';
import HeroRedesigned from '@/components/HeroRedesigned';
import MobileFAB from '@/components/MobileFAB';
import TrustBar from '@/components/TrustBar';
import PTMillSection from '@/components/PTMillSection';
import ServicesGrid from '@/components/ServicesGrid';
import WhoWeWorkWithSection from '@/components/WhoWeWorkWithSection';
import CombatSportsSection from '@/components/CombatSportsSection';
import TechnologySection from '@/components/TechnologySection';
import FirstVisitSection from '@/components/FirstVisitSection';
import InsuranceSection from '@/components/InsuranceSection';
import ReviewsSection from '@/components/ReviewsSection';
import TeamSection from '@/components/TeamSection';
import LocationsSection from '@/components/LocationsSection';
import FAQSection from '@/components/FAQSection';
import NeighborhoodSEOBlock from '@/components/NeighborhoodSEOBlock';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Physical Therapy Brooklyn & Manhattan NYC | InSync Physical Therapy',
  description:
    'One-on-one physical therapy in Brooklyn and Manhattan, NYC. Orthopedic rehab, sports injury recovery, ACL rehab, and post-surgical care. Not a PT mill.',
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

      {/* 1. Hero — Recover Faster with Expert PT in [City] */}
      <HeroRedesigned />

      {/* 2. Trust bar — 1-on-1 / No PT Mill / 9 yrs / Insurance verified */}
      <TrustBar />

      {/* 3. PT Mill differentiation — address Reddit's #1 complaint */}
      <PTMillSection />

      {/* 4. Services overview — 6 cards */}
      <ServicesGrid maxItems={6} showCTA compact={false} />

      {/* 5. Who we work with — athletes, fighters, lifters, post-surgical */}
      <WhoWeWorkWithSection />

      {/* 6. Combat sports rehab — BJJ SEO niche */}
      <CombatSportsSection />

      {/* 7. Technology — Objective Testing. Real Progress. */}
      <TechnologySection />

      {/* 8. What your first visit looks like — anxiety reducer */}
      <FirstVisitSection />

      {/* 9. Insurance — Insurance Made Simple */}
      <InsuranceSection />

      {/* 10. Patient reviews — trusted by runners, lifters, fighters */}
      <ReviewsSection />

      {/* 11. Team — Dr. Hassan + Piero */}
      <TeamSection compact />

      {/* 12. Locations — Brooklyn + Bryant Park with maps */}
      <LocationsSection compact />

      {/* 13. FAQ */}
      <FAQSection compact maxItems={4} />

      {/* 14. NYC neighborhood SEO block */}
      <NeighborhoodSEOBlock />

      {/* 15. Final CTA */}
      <CTABand
        headline="Book Your Evaluation."
        subline="Brooklyn and Manhattan locations. Insurance verified before your appointment."
        variant="dark"
      />

      {/* Mobile floating call button — fixed position, xs/sm only */}
      <MobileFAB />
    </>
  );
}
