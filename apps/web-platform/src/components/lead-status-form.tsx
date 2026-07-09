'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { withBasePath } from '@/lib/base-path';
import { leadStatusLabels } from '@/lib/labels';

const statuses = Object.keys(leadStatusLabels);

type Props = {
  leadId: string;
  currentStatus: string;
};

export function LeadStatusForm({ leadId, currentStatus }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function save() {
    setLoading(true);
    setMessage('');
    const res = await fetch(withBasePath(`/api/leads/${leadId}`), {
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
      <h3 className="font-semibold">إدارة الطلب</h3>
      <div>
        <label className="mb-1.5 block text-sm font-medium">الحالة</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="field-input"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {leadStatusLabels[s]}
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
          placeholder="ملاحظة داخلية..."
        />
      </div>
      <button type="button" onClick={save} disabled={loading} className="btn-primary">
        {loading ? 'جاري الحفظ...' : 'حفظ'}
      </button>
      {message && <p className="text-sm text-success">{message}</p>}
    </div>
  );
}
