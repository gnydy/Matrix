import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { DashboardPreview, FeatureGrid, IntegrationsCloud, PricingBlocks, SecurityPanel, Workflow } from '@/components/Sections';

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <FeatureGrid />
      <Workflow />
      <DashboardPreview />
      <IntegrationsCloud />
      <SecurityPanel />
      <PricingBlocks />
      <Footer />
    </main>
  );
}
