'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { withBasePath } from '@/lib/base-path';
import { paymentMethodLabels } from '@/lib/labels';

type Customer = { id: string; code: string; name: string };
type Quote = { id: string; number: string; customerId: string; amount: number | null };

type Props = {
  customers: Customer[];
  quotes: Quote[];
  defaultCustomerId?: string;
  defaultQuoteId?: string;
};

const methods = Object.keys(paymentMethodLabels);

export function NewPaymentForm({
  customers,
  quotes,
  defaultCustomerId,
  defaultQuoteId,
}: Props) {
  const router = useRouter();
  const [customerId, setCustomerId] = useState(defaultCustomerId ?? customers[0]?.id ?? '');
  const [quoteId, setQuoteId] = useState(defaultQuoteId ?? '');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [method, setMethod] = useState('bank_transfer');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const customerQuotes = useMemo(
    () => quotes.filter((q) => q.customerId === customerId),
    [quotes, customerId],
  );

  function onQuoteChange(id: string) {
    setQuoteId(id);
    const q = quotes.find((x) => x.id === id);
    if (q?.amount != null) setAmount(String(q.amount));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!customerId || !amount) {
      setError('العميل والمبلغ مطلوبان');
      return;
    }
    setLoading(true);
    setError('');
    const res = await fetch(withBasePath('/api/payments'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerId,
        quoteId: quoteId || undefined,
        amount: Number(amount),
        dueDate: dueDate || undefined,
        method,
        notes: notes.trim() || undefined,
      }),
    });
    const data = (await res.json()) as { id?: string; error?: string };
    setLoading(false);
    if (!res.ok) {
      setError(data.error ?? 'تعذّر التسجيل');
      return;
    }
    router.push(`/payments/${data.id}`);
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
          <label className="mb-1.5 block text-sm font-medium">ربط بعرض سعر (اختياري)</label>
          <select
            value={quoteId}
            onChange={(e) => onQuoteChange(e.target.value)}
            className="field-input"
          >
            <option value="">— بدون —</option>
            {customerQuotes.map((q) => (
              <option key={q.id} value={q.id}>
                {q.number}
              </option>
            ))}
          </select>
        </div>
      )}
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
          required
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">تاريخ الاستحقاق</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="field-input"
          dir="ltr"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">طريقة الدفع</label>
        <select value={method} onChange={(e) => setMethod(e.target.value)} className="field-input">
          {methods.map((m) => (
            <option key={m} value={m}>
              {paymentMethodLabels[m]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">ملاحظات</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          className="field-input resize-y"
        />
      </div>
      {error && <p className="text-sm text-warning">{error}</p>}
      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? 'جاري الحفظ…' : 'تسجيل الدفعة'}
      </button>
    </form>
  );
}
