import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.about.meta;
  return { title: meta.title, description: meta.description };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const c = getContent(locale);
  const p = c.pages.about;

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted">{p.intro[0]}</p>
          <p className="mt-6 leading-relaxed text-muted">{p.intro[1]}</p>
        </div>
      </Section>

      <Section title={p.values.title} alt>
        <div className="grid gap-6 sm:grid-cols-2">
          {p.values.items.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-background p-6">
              <h3 className="font-semibold text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={p.workflow.title}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {c.workflowSteps.map((s) => (
            <div key={s.step} className="rounded-xl border border-border bg-card p-5">
              <span className="text-xs font-bold text-primary">{s.step}</span>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/request" className="btn-primary">
            {p.workflow.cta}
          </Link>
        </div>
      </Section>
    </>
  );
}
