'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { withBasePath } from '@/lib/base-path';
import { quoteStatusLabels } from '@/lib/labels';

const statuses = Object.keys(quoteStatusLabels);

type Props = {
  quoteId: string;
  currentStatus: string;
};

export function QuoteStatusForm({ quoteId, currentStatus }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function save() {
    setLoading(true);
    setMessage('');
    const res = await fetch(withBasePath(`/api/quotes/${quoteId}`), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, note: note.trim() || undefined }),
    });
    setLoading(false);
    if (!res.ok) {
      setMessage('فشل الحفظ');
      return;
    }
    setNote('');
    setMessage('تم الحفظ');
    router.refresh();
  }

  return (
    <div className="stat-card space-y-4">
      <h3 className="font-semibold">إدارة العرض</h3>
      <p className="text-xs text-muted">
        عند «مُرسل» يُسجّل تاريخ الإرسال داخلياً — بدون واتساب تلقائي
      </p>
      <div>
        <label className="mb-1.5 block text-sm font-medium">الحالة</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="field-input"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {quoteStatusLabels[s]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">ملاحظة</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          className="field-input resize-y"
          placeholder="مثال: أُرسل بالبريد للعميل"
        />
      </div>
      <button type="button" onClick={save} disabled={loading} className="btn-primary w-full">
        {loading ? 'جاري الحفظ...' : 'حفظ'}
      </button>
      {message && <p className="text-sm text-success">{message}</p>}
    </div>
  );
}
