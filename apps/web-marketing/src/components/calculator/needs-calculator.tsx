'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPlanById, suggestPlanId } from '@allinall/i18n';
import { useLocale, useMarketingContent } from '@/i18n/use-marketing-content';
import { trackEvent } from '@/lib/analytics-client';

const SIZE_META: Record<string, { users: number; branches: number }> = {
  small: { users: 5, branches: 1 },
  medium: { users: 25, branches: 3 },
  large: { users: 100, branches: 8 },
  enterprise: { users: 250, branches: 15 },
};

export function NeedsCalculator() {
  const c = useMarketingContent();
  const locale = useLocale();
  const p = c.pages.calculator;

  const [size, setSize] = useState<(typeof p.companySize.sizes)[number]['id']>('small');
  const [selectedModules, setSelectedModules] = useState<string[]>(['sales', 'inventory']);

  const current = SIZE_META[size]!;
  const moduleCount = selectedModules.length;
  const planId = suggestPlanId(moduleCount, size);
  const suggestedPlan = getPlanById(planId, locale);
  const deploy =
    planId === 'custom' || size === 'enterprise'
      ? p.summary.deployCustom
      : p.summary.deploySaas;

  useEffect(() => {
    void trackEvent('calculator_view', '/calculator');
  }, []);

  useEffect(() => {
    void trackEvent('calculator_updated', '/calculator', {
      size,
      modules: selectedModules,
      planId,
    });
  }, [size, selectedModules, planId]);

  function toggleModule(id: string) {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    );
  }

  const query = new URLSearchParams({
    type: 'pricing',
    plan: planId,
    size,
    modules: selectedModules.join(','),
  }).toString();

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-3 space-y-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">{p.companySize.title}</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {p.companySize.sizes.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSize(s.id)}
                className={`rounded-xl border p-4 text-right transition ${
                  size === s.id
                    ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                    : 'border-border bg-card hover:border-primary/30'
                }`}
              >
                <span className="font-medium">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">{p.modulesTitle}</h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {c.erpModules
              .filter((m) => m.id !== 'ely')
              .map((m) => (
                <label
                  key={m.id}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                    selectedModules.includes(m.id)
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-card'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedModules.includes(m.id)}
                    onChange={() => toggleModule(m.id)}
                    className="mt-1 accent-primary"
                  />
                  <span>
                    <span className="font-medium block">{m.title}</span>
                    <span className="text-xs text-muted">{m.desc.slice(0, 60)}…</span>
                  </span>
                </label>
              ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-lg">
          <h3 className="font-bold text-xl">{p.summary.title}</h3>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-border pb-3">
              <dt className="text-muted">{p.summary.suggestedPlan}</dt>
              <dd className="font-semibold text-primary">{suggestedPlan.name}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-3">
              <dt className="text-muted">{p.summary.approxUsers}</dt>
              <dd className="font-medium">{current.users}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-3">
              <dt className="text-muted">{p.summary.branches}</dt>
              <dd className="font-medium">{current.branches}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-3">
              <dt className="text-muted">{p.summary.modules}</dt>
              <dd className="font-medium">{moduleCount}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">{p.summary.deployment}</dt>
              <dd className="font-medium">{deploy}</dd>
            </div>
          </dl>
          <p className="mt-6 text-xs text-muted leading-relaxed">{p.summary.disclaimer}</p>
          <Link href={`/request?${query}`} className="btn-primary mt-6 w-full text-center">
            {planId === 'custom' ? p.summary.ctaCustom : p.summary.ctaQuote}
          </Link>
        </div>
      </div>
    </div>
  );
}
