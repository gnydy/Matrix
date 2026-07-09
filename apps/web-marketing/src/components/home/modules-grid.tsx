import Link from 'next/link';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function ModulesGrid() {
  const locale = await getLocale();
  const c = getContent(locale);
  const t = c.pages.home.modules;

  return (
    <section id="modules" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">{t.title}</h2>
          <p className="mt-3 max-w-xl text-muted">{t.subtitle}</p>
        </div>
        <Link href="/services/erp" className="text-sm font-semibold text-primary hover:underline">
          {t.linkLabel}
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {c.erpModules.map((m) => (
          <article
            key={m.id}
            className="card-hover rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
              {m.title.charAt(0)}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
