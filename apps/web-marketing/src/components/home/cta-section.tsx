import { ButtonLink } from '@/components/ui/button-link';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function CtaSection() {
  const locale = await getLocale();
  const c = getContent(locale);
  const t = c.pages.home.cta;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-6 py-14 text-center text-white sm:px-12">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">{t.subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/request" variant="white">
            {t.primary}
          </ButtonLink>
          <ButtonLink
            href={`https://wa.me/${c.site.whatsapp}`}
            variant="outlineWhite"
            external
          >
            {t.secondary}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
