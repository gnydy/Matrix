'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function CreateAuditForm({ warehouses }: { warehouses: Array<{ id: string; name: string }> }) {
  const router = useRouter();
  const [warehouseId, setWarehouseId] = useState(warehouses[0]?.id ?? '');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!warehouseId) return;
    setLoading(true);
    setError('');
    const res = await fetch('/api/erp/inventory/audits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ warehouseId, note: note || undefined }),
    });
    const json = (await res.json()) as { ok?: boolean; data?: { id: string }; error?: string };
    setLoading(false);
    if (!res.ok || !json.ok || !json.data?.id) {
      setError(json.error ?? 'فشل إنشاء الجرد');
      return;
    }
    router.push(`/inventory/audits/${json.data.id}`);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="stat-card space-y-4">
      <h3 className="font-semibold">جرد جديد</h3>
      <div>
        <label className="mb-1 block text-sm text-muted">المخزن</label>
        <select
          className="field-input"
          value={warehouseId}
          onChange={(e) => setWarehouseId(e.target.value)}
        >
          {warehouses.map((w) => (
            <option key={w.id} value={w.id}>
              {w.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm text-muted">ملاحظة</label>
        <input className="field-input" value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      <button type="submit" className="btn-primary" disabled={loading || !warehouseId}>
        {loading ? 'جاري الإنشاء...' : 'إنشاء جرد'}
      </button>
    </form>
  );
}
