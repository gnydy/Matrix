import { CtaSection } from '@/components/home/cta-section';
import { Hero } from '@/components/home/hero';
import { HowItWorks } from '@/components/home/how-it-works';
import { Industries } from '@/components/home/industries';
import { ModulesGrid } from '@/components/home/modules-grid';
import { PricingSection } from '@/components/home/pricing-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ModulesGrid />
      <HowItWorks />
      <Industries />
      <PricingSection />
      <CtaSection />
    </>
  );
}
