import Link from 'next/link';
import { PlanCard } from '@/components/packages/plan-card';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function PricingSection() {
  const locale = await getLocale();
  const c = getContent(locale);
  const t = c.pages.home.pricing;
  const featured = c.plans.filter((p) => !p.isCustom);
  const customPlan = c.plans.find((p) => p.isCustom)!;

  return (
    <section id="pricing" className="border-y border-border bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">{t.title}</h2>
            <p className="mt-3 max-w-xl text-muted">{t.subtitle}</p>
          </div>
          <Link href="/packages" className="text-sm font-semibold text-primary hover:underline">
            {t.linkLabel}
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-8">
          <PlanCard plan={customPlan} />
        </div>
      </div>
    </section>
  );
}
