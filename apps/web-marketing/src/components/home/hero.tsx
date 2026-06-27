import { ButtonLink } from '@/components/ui/button-link';
import { getLocale } from '@/i18n/get-locale';
import { getMessages } from '@/i18n/messages';

export async function Hero() {
  const locale = await getLocale();
  const t = getMessages(locale).hero;

  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary-light/50 px-4 py-1.5 text-xs font-semibold text-primary">
            {t.badge}
          </p>
          <h1 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-[3.25rem]">
            {t.title1}
            <span className="mt-1 block text-primary">{t.title2}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{t.subtitle}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/request">{t.ctaPrimary}</ButtonLink>
            <ButtonLink href="/services/erp" variant="secondary">
              {t.ctaSecondary}
            </ButtonLink>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {t.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium text-muted backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
