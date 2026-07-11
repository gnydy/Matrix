import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui/button-link';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.requestSuccess.meta;
  return { title: meta.title, robots: { index: false } };
}

type Props = { searchParams: Promise<{ ref?: string }> };

export default async function RequestSuccessPage({ searchParams }: Props) {
  const locale = await getLocale();
  const c = getContent(locale);
  const p = c.pages.requestSuccess;
  const { ref } = await searchParams;
  const reference = ref ?? 'AIA-2026-000000';

  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
        ✓
      </div>
      <h1 className="mt-6 text-2xl font-bold sm:text-3xl">{p.title}</h1>
      <p className="mt-3 text-muted">{p.referenceLabel}</p>
      <p className="mt-1 font-mono text-xl font-bold text-primary" dir="ltr">
        {reference}
      </p>
      <p className="mt-6 text-sm leading-relaxed text-muted">{p.message}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <ButtonLink href="/">{p.home}</ButtonLink>
        <ButtonLink href={`https://wa.me/${c.site.whatsapp}`} variant="secondary" external>
          {p.whatsapp}
        </ButtonLink>
      </div>
      <p className="mt-8 text-xs text-muted">
        {p.urgent}{' '}
        <Link href="/contact" className="text-primary hover:underline">
          {p.contact}
        </Link>
      </p>
    </div>
  );
}
