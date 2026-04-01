import type { Metadata } from 'next';
import Script from 'next/script';
import { FAQ_SCHEMA } from '@/lib/schema';
import HeroRedesigned from '@/components/HeroRedesigned';
import MobileFAB from '@/components/MobileFAB';
import WhyChooseSection from '@/components/WhyChooseSection';
import ServicesGrid from '@/components/ServicesGrid';
import TeamSection from '@/components/TeamSection';
import ReviewsSection from '@/components/ReviewsSection';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Physical Therapy Manhattan & Brooklyn NYC | InSync Physical Therapy & Fitness',
  description:
    'Expert one-on-one physical therapy in Manhattan and Brooklyn, NYC. Orthopedic rehab, sports injury recovery, and post-surgical care. Insurance verified upfront.',
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

      <HeroRedesigned />

      <WhyChooseSection />

      <ServicesGrid carousel />

      <TeamSection carousel />

      <ReviewsSection />

      <CTABand
        headline="Ready to start?"
        subline="Manhattan and Brooklyn locations. Insurance verified before your first visit."
      />

      <MobileFAB />
    </>
  );
}
