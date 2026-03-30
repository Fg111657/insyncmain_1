import type { Metadata } from 'next';
import Script from 'next/script';
import { FAQ_SCHEMA } from '@/lib/schema';
import HeroRedesigned from '@/components/HeroRedesigned';
import MobileFAB from '@/components/MobileFAB';
import WhyChooseSection from '@/components/WhyChooseSection';
import ReviewsSection from '@/components/ReviewsSection';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Physical Therapy Brooklyn & Manhattan NYC | InSync Physical Therapy & Fitness',
  description:
    'Expert one-on-one physical therapy in Brooklyn and Manhattan, NYC. Orthopedic rehab, sports injury recovery, and post-surgical care. Not a PT mill.',
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

      {/* 1. Hero — Expert one-on-one PT for New Yorkers */}
      <HeroRedesigned />

      {/* 2. Why New Yorkers Choose InSync — benefits with checkmarks */}
      <WhyChooseSection />

      {/* 3. Patient reviews — ZocDoc + Google */}
      <ReviewsSection />

      {/* 4. Final CTA */}
      <CTABand
        headline="Book Your Evaluation."
        subline="Brooklyn and Manhattan locations. Insurance verified before your appointment."
        variant="dark"
      />

      {/* Mobile floating call button */}
      <MobileFAB />
    </>
  );
}
