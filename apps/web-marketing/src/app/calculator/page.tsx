import type { Metadata } from 'next';
import { NeedsCalculator } from '@/components/calculator/needs-calculator';
import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.calculator.meta;
  return { title: meta.title, description: meta.description };
}

export default async function CalculatorPage() {
  const locale = await getLocale();
  const p = getContent(locale).pages.calculator;

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} compact />
      <Section>
        <NeedsCalculator />
      </Section>
    </>
  );
}
