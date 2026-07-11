'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Line = {
  id: string;
  productId: string;
  systemQty: number;
  countedQty: number;
  varianceQty: number;
  product: { name: string; sku: string };
};

export function AuditDetailClient({
  auditId,
  status,
  lines: initialLines,
}: {
  auditId: string;
  status: string;
  lines: Line[];
}) {
  const router = useRouter();
  const [lines, setLines] = useState(initialLines);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const editable = status === 'draft' || status === 'counting';

  function updateQty(productId: string, countedQty: number) {
    setLines((prev) =>
      prev.map((l) =>
        l.productId === productId
          ? {
              ...l,
              countedQty,
              varianceQty: countedQty - Number(l.systemQty),
            }
          : l,
      ),
    );
  }

  async function saveLines() {
    setLoading(true);
    setMessage('');
    const res = await fetch(`/api/erp/inventory/audits/${auditId}/lines`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lines: lines.map((l) => ({ productId: l.productId, countedQty: Number(l.countedQty) })),
      }),
    });
    setLoading(false);
    if (!res.ok) {
      setMessage('فشل الحفظ');
      return;
    }
    setMessage('تم الحفظ');
    router.refresh();
  }

  async function action(path: string) {
    setLoading(true);
    setMessage('');
    const res = await fetch(`/api/erp/inventory/audits/${auditId}/${path}`, { method: 'PATCH' });
    setLoading(false);
    if (!res.ok) {
      setMessage('فشلت العملية');
      return;
    }
    router.refresh();
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {status === 'draft' ? (
          <button type="button" className="btn-secondary" disabled={loading} onClick={() => action('start')}>
            بدء العد
          </button>
        ) : null}
        {editable ? (
          <>
            <button type="button" className="btn-primary" disabled={loading} onClick={saveLines}>
              حفظ الكميات
            </button>
            <button type="button" className="btn-secondary" disabled={loading} onClick={() => action('post')}>
              ترحيل الجرد
            </button>
          </>
        ) : null}
      </div>
      {message ? <p className="text-sm text-primary">{message}</p> : null}

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>الصنف</th>
              <th>النظام</th>
              <th>المعدود</th>
              <th>الفرق</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((l) => (
              <tr key={l.id}>
                <td>{l.product.sku}</td>
                <td>{l.product.name}</td>
                <td>{Number(l.systemQty)}</td>
                <td>
                  {editable ? (
                    <input
                      type="number"
                      min={0}
                      className="field-input w-24"
                      value={Number(l.countedQty)}
                      onChange={(e) => updateQty(l.productId, Number(e.target.value))}
                    />
                  ) : (
                    Number(l.countedQty)
                  )}
                </td>
                <td className={Number(l.varianceQty) !== 0 ? 'text-warning' : ''}>
                  {Number(l.varianceQty)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
