import Link from 'next/link';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function HowItWorks() {
  const locale = await getLocale();
  const c = getContent(locale);
  const t = c.pages.home.howItWorks;

  return (
    <section className="border-y border-border bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">{t.title}</h2>
          <p className="mt-3 text-muted">{t.subtitle}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {c.workflowSteps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < c.workflowSteps.length - 1 && (
                <span
                  className="absolute right-1/2 top-8 hidden h-px w-full bg-border lg:block"
                  aria-hidden
                />
              )}
              <div className="relative rounded-2xl border border-border bg-background p-5">
                <span className="text-xs font-bold text-primary">{s.step}</span>
                <h3 className="mt-2 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/request" className="btn-primary">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
