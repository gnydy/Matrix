import Link from 'next/link';
import type { plans } from '@/lib/content';

type Plan = (typeof plans)[number];

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
        plan.isCustom
          ? 'border-primary bg-primary/5 ring-2 ring-primary/15'
          : 'border-border bg-card'
      }`}
    >
      {plan.isCustom && (
        <span className="mb-2 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          مرونة كاملة
        </span>
      )}
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="mt-2 text-sm text-muted">{plan.desc}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <span className="mt-0.5 text-primary" aria-hidden>
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={plan.ctaHref}
        className={`mt-8 flex min-h-[44px] items-center justify-center rounded-xl text-sm font-semibold transition ${
          plan.isCustom
            ? 'bg-primary text-white hover:bg-primary-dark'
            : 'border border-border hover:border-primary/40'
        }`}
      >
        {plan.ctaLabel}
      </Link>
    </div>
  );
}
