import Link from 'next/link';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function Industries() {
  const locale = await getLocale();
  const c = getContent(locale);
  const t = c.pages.home.industries;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.title}</h2>
        <p className="mt-3 text-muted">{t.subtitle}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.industries.map((ind) => (
          <div
            key={ind.title}
            className="card-hover rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-semibold text-lg">{ind.title}</h3>
            <p className="mt-2 text-sm text-muted">{ind.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted">
        {t.notListed}{' '}
        <Link href="/contact" className="font-semibold text-primary hover:underline">
          {t.contactLink}
        </Link>
      </p>
    </section>
  );
}
