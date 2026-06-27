'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { withBasePath } from '@/lib/base-path';
import { projectStatusLabels } from '@/lib/labels';

const statuses = Object.keys(projectStatusLabels);

type Props = {
  projectId: string;
  currentStatus: string;
};

export function ProjectStatusForm({ projectId, currentStatus }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function save() {
    setLoading(true);
    setMessage('');
    const res = await fetch(withBasePath(`/api/projects/${projectId}`), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    setLoading(false);
    if (!res.ok) {
      setMessage('فشل الحفظ');
      return;
    }
    setMessage('تم الحفظ');
    router.refresh();
  }

  return (
    <div className="stat-card space-y-4">
      <h3 className="font-semibold">حالة المشروع</h3>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="field-input"
      >
        {statuses.map((s) => (
          <option key={s} value={s}>
            {projectStatusLabels[s]}
          </option>
        ))}
      </select>
      <button type="button" onClick={save} disabled={loading} className="btn-primary w-full">
        {loading ? 'جاري الحفظ...' : 'حفظ'}
      </button>
      {message && <p className="text-sm text-success">{message}</p>}
    </div>
  );
}
