import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.custom.meta;
  return { title: meta.title, description: meta.description };
}

export default async function CustomPage() {
  const locale = await getLocale();
  const p = getContent(locale).pages.custom;

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted">{p.intro}</p>
        </div>
      </Section>

      <Section title={p.phases.title} alt>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {p.phases.items.map((o, i) => (
            <div key={o.title} className="rounded-2xl border border-border bg-background p-6">
              <span className="text-xs font-bold text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-muted">{o.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={p.useCases.title}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {p.useCases.items.map((u) => (
            <div
              key={u}
              className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium"
            >
              {u}
            </div>
          ))}
        </div>
      </Section>

      <Section alt>
        <div className="text-center">
          <Link href="/request" className="btn-primary">
            {p.cta}
          </Link>
        </div>
      </Section>
    </>
  );
}
