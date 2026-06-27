import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHero } from '@/components/ui/page-hero';
import { RequestForm } from '@/components/request/request-form';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.request.meta;
  return { title: meta.title, description: meta.description };
}

export default async function RequestPage() {
  const locale = await getLocale();
  const p = getContent(locale).pages.request;

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} compact />
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-card" />}>
          <RequestForm />
        </Suspense>
      </div>
    </>
  );
}
