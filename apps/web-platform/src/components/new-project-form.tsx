'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { withBasePath } from '@/lib/base-path';

type Customer = { id: string; code: string; name: string };
type Quote = { id: string; number: string; customerId: string; title: string | null };

type Props = {
  customers: Customer[];
  quotes: Quote[];
  defaultCustomerId?: string;
  defaultQuoteId?: string;
};

export function NewProjectForm({
  customers,
  quotes,
  defaultCustomerId,
  defaultQuoteId,
}: Props) {
  const router = useRouter();
  const [customerId, setCustomerId] = useState(defaultCustomerId ?? customers[0]?.id ?? '');
  const [quoteId, setQuoteId] = useState(defaultQuoteId ?? '');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const customerQuotes = useMemo(
    () => quotes.filter((q) => q.customerId === customerId),
    [quotes, customerId],
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!customerId || !name.trim()) {
      setError('العميل والاسم مطلوبان');
      return;
    }
    setLoading(true);
    setError('');
    const res = await fetch(withBasePath('/api/projects'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerId,
        quoteId: quoteId || undefined,
        name: name.trim(),
        description: description.trim() || undefined,
        dueDate: dueDate || undefined,
      }),
    });
    const data = (await res.json()) as { id?: string; error?: string };
    setLoading(false);
    if (!res.ok) {
      setError(data.error ?? 'تعذّر الإنشاء');
      return;
    }
    router.push(`/projects/${data.id}`);
    router.refresh();
  }

  if (customers.length === 0) {
    return <p className="text-sm text-muted">أضف عميلاً أولاً</p>;
  }

  return (
    <form onSubmit={submit} className="stat-card space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium">العميل</label>
        <select
          value={customerId}
          onChange={(e) => {
            setCustomerId(e.target.value);
            setQuoteId('');
          }}
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
      {customerQuotes.length > 0 && (
        <div>
          <label className="mb-1.5 block text-sm font-medium">عرض مقبول (اختياري)</label>
          <select
            value={quoteId}
            onChange={(e) => {
              setQuoteId(e.target.value);
              const q = quotes.find((x) => x.id === e.target.value);
              if (q?.title && !name) setName(q.title);
            }}
            className="field-input"
          >
            <option value="">— بدون —</option>
            {customerQuotes.map((q) => (
              <option key={q.id} value={q.id}>
                {q.number} {q.title ? `— ${q.title}` : ''}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label className="mb-1.5 block text-sm font-medium">اسم المشروع</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="field-input"
          required
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">تاريخ التسليم المستهدف</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="field-input"
          dir="ltr"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">وصف</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="field-input resize-y"
        />
      </div>
      {error && <p className="text-sm text-warning">{error}</p>}
      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? 'جاري الإنشاء…' : 'إنشاء المشروع'}
      </button>
    </form>
  );
}
