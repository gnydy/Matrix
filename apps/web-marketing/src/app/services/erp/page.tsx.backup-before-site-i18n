import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.erp.meta;
  return { title: meta.title, description: meta.description };
}

export default async function ErpPage() {
  const locale = await getLocale();
  const c = getContent(locale);
  const p = c.pages.erp;

  return (
    <>
      <PageHero badge={p.hero.badge} title={p.hero.title} subtitle={p.hero.subtitle} />

      <Section title={p.modulesTitle}>
        <div className="grid gap-6 sm:grid-cols-2">
          {c.erpModules.map((m) => (
            <article key={m.id} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted">{m.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {m.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title={p.capabilitiesTitle} alt>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {p.capabilities.map((cap) => (
            <div
              key={cap}
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium"
            >
              {cap}
            </div>
          ))}
        </div>
      </Section>

      <Section title={p.industriesTitle}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.industries.map((ind) => (
            <div key={ind.title} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold">{ind.title}</h3>
              <p className="mt-1 text-sm text-muted">{ind.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold">{p.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/85">{p.cta.subtitle}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/request" className="btn-primary bg-white text-primary hover:bg-white/90">
              {p.cta.primary}
            </Link>
            <Link
              href="/packages"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/40 px-8 font-semibold hover:bg-white/10"
            >
              {p.cta.secondary}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
