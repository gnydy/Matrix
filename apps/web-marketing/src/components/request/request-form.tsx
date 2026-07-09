'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMarketingContent } from '@/i18n/use-marketing-content';
import { HoneypotFields, readFormSecurityFields } from '@/components/security/honeypot-fields';
import { submitLead } from '@/lib/analytics-client';

export function RequestForm() {
  const c = useMarketingContent();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialModules = (searchParams.get('modules') ?? '')
    .split(',')
    .filter((id) => c.erpModules.some((m) => m.id === id));

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedModules, setSelectedModules] = useState<string[]>(initialModules);
  const [modulesError, setModulesError] = useState('');

  function toggleModule(id: string) {
    setModulesError('');
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedModules.length === 0) {
      setModulesError('اختر موديولًا واحدًا على الأقل');
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);
    setError('');

    try {
      const result = await submitLead({
        source: 'request',
        name: String(data.get('name') ?? ''),
        company: String(data.get('company') ?? ''),
        phone: String(data.get('phone') ?? ''),
        email: String(data.get('email') ?? '') || null,
        requestType: String(data.get('type') ?? ''),
        planId: String(data.get('plan') ?? '') || null,
        modules: selectedModules,
        message: String(data.get('message') ?? '') || null,
        ...readFormSecurityFields(form),
      });

      sessionStorage.setItem('matrix-lead-ref', result.ref);
      sessionStorage.setItem('matrix-lead-modules', selectedModules.join(','));
      router.push(`/request/success?ref=${result.ref}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'فشل الإرسال');
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-track-form="request"
      className="relative space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <HoneypotFields />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="name">
            الاسم الكامل
          </label>
          <input id="name" name="name" required className="field-input" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="company">
            اسم الشركة
          </label>
          <input id="company" name="company" required className="field-input" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="phone">
            الهاتف
          </label>
          <input id="phone" name="phone" type="tel" required className="field-input" dir="ltr" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="email">
            البريد الإلكتروني
          </label>
          <input id="email" name="email" type="email" className="field-input" dir="ltr" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="type">
            نوع الطلب
          </label>
          <select
            id="type"
            name="type"
            required
            className="field-input"
            defaultValue={searchParams.get('type') ?? ''}
          >
            <option value="">اختر نوع الطلب</option>
            {c.requestTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="plan">
            الباقة
          </label>
          <select
            id="plan"
            name="plan"
            className="field-input"
            defaultValue={searchParams.get('plan') ?? ''}
          >
            <option value="">اختر الباقة</option>
            {c.plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 block text-sm font-medium">الموديولات المطلوبة</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {c.erpModules.map((m) => (
            <label
              key={m.id}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition ${
                selectedModules.includes(m.id)
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-background hover:border-primary/30'
              }`}
            >
              <input
                type="checkbox"
                name="modules"
                value={m.id}
                checked={selectedModules.includes(m.id)}
                onChange={() => toggleModule(m.id)}
                className="accent-primary"
              />
              <span className="text-sm font-medium">{m.title}</span>
            </label>
          ))}
        </div>
        {modulesError && <p className="mt-2 text-sm text-danger">{modulesError}</p>}
        {selectedModules.length > 0 && (
          <p className="mt-2 text-xs text-muted">{selectedModules.length} موديول محدد</p>
        )}
      </fieldset>

      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="message">
          تفاصيل إضافية
        </label>
        <textarea id="message" name="message" rows={4} className="field-input resize-y" />
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? 'جاري الإرسال...' : 'إرسال الطلب'}
      </button>

      {error && <p className="text-center text-sm text-danger">{error}</p>}

      <p className="text-center text-xs text-muted">
        بالإرسال توافق على{' '}
        <a href="/privacy" className="text-primary hover:underline">
          سياسة الخصوصية
        </a>
      </p>
    </form>
  );
}
