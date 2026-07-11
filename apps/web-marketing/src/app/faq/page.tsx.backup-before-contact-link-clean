import type { Metadata } from 'next';
import Link from 'next/link';
import { FaqAccordion } from '@/components/faq/faq-accordion';
import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.faq.meta;
  return { title: meta.title, description: meta.description };
}

export default async function FaqPage() {
  const locale = await getLocale();
  const p = getContent(locale).pages.faq;

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} compact />
      <Section>
        <FaqAccordion />
        <p className="mt-10 text-center text-sm text-muted">
          {p.notFound}{' '}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            {p.contact}
          </Link>
        </p>
      </Section>
    </>
  );
}
