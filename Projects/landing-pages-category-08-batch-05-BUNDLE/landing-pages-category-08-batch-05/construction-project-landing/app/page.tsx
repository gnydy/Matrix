import { FAQSection, FeatureSection, Footer, Hero, LeadSection, Navbar, ProcessSection, ProofSection } from "@/components/LandingPage";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <ProcessSection />
        <ProofSection />
        <LeadSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
