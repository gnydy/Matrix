import type { Metadata } from 'next';
import Link from 'next/link';
import { PlanCard } from '@/components/packages/plan-card';
import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.packages.meta;
  return { title: meta.title, description: meta.description };
}

function Cell({ value, yes, no }: { value: boolean | string; yes: string; no: string }) {
  if (typeof value === 'string') {
    return <span className="font-medium text-primary">{value}</span>;
  }
  return (
    <span className={value ? 'font-bold text-primary' : 'text-muted/40'}>
      {value ? yes : no}
    </span>
  );
}

export default async function PackagesPage() {
  const locale = await getLocale();
  const c = getContent(locale);
  const p = c.pages.packages;
  const planColumns = c.plans.map((plan) => ({ id: plan.id, name: plan.name }));

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {c.plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      <Section title={p.comparison.title} alt>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="border-b border-border bg-background">
                <th className="px-4 py-3 text-right font-semibold">{p.comparison.featureColumn}</th>
                {planColumns.map((col) => (
                  <th key={col.id} className="px-3 py-3 text-center font-semibold">
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.planComparison.map((row) => (
                <tr key={row.feature} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">{row.feature}</td>
                  {planColumns.map((col) => (
                    <td key={col.id} className="px-3 py-3 text-center">
                      <Cell
                        value={row[col.id as keyof typeof row] as boolean | string}
                        yes={p.comparison.yes}
                        no={p.comparison.no}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center sm:p-10">
          <h2 className="text-xl font-bold sm:text-2xl">{p.customPlan.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">{p.customPlan.subtitle}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/calculator" className="btn-primary">
              {p.customPlan.calculator}
            </Link>
            <Link
              href="/request?type=pricing&plan=custom"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-border bg-card px-8 font-semibold hover:border-primary/40"
            >
              {p.customPlan.request}
            </Link>
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="text-center">
          <p className="text-muted">{p.help.prompt}</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/calculator" className="btn-primary">
              {p.help.calculator}
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-border px-8 font-semibold hover:border-primary/40"
            >
              {p.help.contact}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
