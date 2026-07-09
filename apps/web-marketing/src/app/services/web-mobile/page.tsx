import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.webMobile.meta;
  return { title: meta.title, description: meta.description };
}

export default async function WebMobilePage() {
  const locale = await getLocale();
  const p = getContent(locale).pages.webMobile;

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {p.deliverables.map((d) => (
            <article key={d.title} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold">{d.title}</h2>
              <p className="mt-3 text-sm text-muted">{d.desc}</p>
              <ul className="mt-5 space-y-2">
                {d.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title={p.stackTitle} alt>
        <div className="flex flex-wrap justify-center gap-3">
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="text-xl font-bold">{p.showcase.title}</h2>
          <p className="mt-3 text-sm text-muted">{p.showcase.subtitle}</p>
          <Link href="/request" className="btn-primary mt-6">
            {p.showcase.cta}
          </Link>
        </div>
      </Section>
    </>
  );
}
