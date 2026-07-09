'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { withBasePath } from '@/lib/base-path';

type Customer = { id: string; code: string; name: string };

type Props = {
  customers: Customer[];
  defaultCustomerId?: string;
};

export function NewQuoteForm({ customers, defaultCustomerId }: Props) {
  const router = useRouter();
  const [customerId, setCustomerId] = useState(defaultCustomerId ?? customers[0]?.id ?? '');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [validUntil, setValidUntil] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!customerId) {
      setError('اختر عميلاً');
      return;
    }
    setLoading(true);
    setError('');
    const res = await fetch(withBasePath('/api/quotes'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerId,
        title: title.trim() || undefined,
        description: description.trim() || undefined,
        amount: amount ? Number(amount) : undefined,
        validUntil: validUntil || undefined,
      }),
    });
    const data = (await res.json()) as { id?: string; error?: string };
    setLoading(false);
    if (!res.ok) {
      setError(data.error ?? 'تعذّر الإنشاء');
      return;
    }
    router.push(`/quotes/${data.id}`);
    router.refresh();
  }

  if (customers.length === 0) {
    return (
      <p className="text-sm text-muted">
        لا يوجد عملاء —{' '}
        <a href={withBasePath('/customers')} className="text-primary hover:underline">
          حوّل طلباً إلى عميل أولاً
        </a>
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="stat-card space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium">العميل</label>
        <select
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          className="field-input"
          required
        >
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} ({c.code})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">عنوان العرض</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="field-input"
          placeholder="مثال: AllInAll ERP — باقة النمو"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">المبلغ (جنيه)</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="field-input"
          dir="ltr"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">صالح حتى</label>
        <input
          type="date"
          value={validUntil}
          onChange={(e) => setValidUntil(e.target.value)}
          className="field-input"
          dir="ltr"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">التفاصيل</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="field-input resize-y"
        />
      </div>
      {error && <p className="text-sm text-warning">{error}</p>}
      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? 'جاري الحفظ…' : 'إنشاء العرض'}
      </button>
    </form>
  );
}
