import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.services.meta;
  return { title: meta.title, description: meta.description };
}

export default async function ServicesPage() {
  const locale = await getLocale();
  const c = getContent(locale);
  const p = c.pages.services;

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {c.services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="card-hover group rounded-2xl border border-border bg-card p-8"
            >
              {s.badge && (
                <span className="text-xs font-semibold text-primary">{s.badge}</span>
              )}
              <h2 className="mt-2 text-xl font-bold group-hover:text-primary">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-primary">
                {p.detailsLink}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold">{p.unsure.title}</h2>
          <p className="mt-4 text-muted">{p.unsure.subtitle}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/calculator" className="btn-primary">
              {p.unsure.calculator}
            </Link>
            <Link
              href="/request"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-border px-8 font-semibold hover:border-primary/40"
            >
              {p.unsure.consult}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
