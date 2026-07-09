'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { withBasePath } from '@/lib/base-path';
import { customerDeploymentLabels, customerStatusLabels } from '@/lib/labels';

const statuses = Object.keys(customerStatusLabels);
const deployments = Object.keys(customerDeploymentLabels);

type Props = {
  customerId: string;
  currentStatus: string;
  currentDeployment: string;
};

export function CustomerStatusForm({
  customerId,
  currentStatus,
  currentDeployment,
}: Props) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [deploymentType, setDeploymentType] = useState(currentDeployment);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function save() {
    setLoading(true);
    setMessage('');
    const res = await fetch(withBasePath(`/api/customers/${customerId}`), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status,
        deploymentType,
        note: note.trim() || undefined,
      }),
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
      <h3 className="font-semibold">إدارة العميل</h3>
      <div>
        <label className="mb-1.5 block text-sm font-medium">الحالة</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="field-input"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {customerStatusLabels[s]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">نوع النشر</label>
        <select
          value={deploymentType}
          onChange={(e) => setDeploymentType(e.target.value)}
          className="field-input"
        >
          {deployments.map((d) => (
            <option key={d} value={d}>
              {customerDeploymentLabels[d]}
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
