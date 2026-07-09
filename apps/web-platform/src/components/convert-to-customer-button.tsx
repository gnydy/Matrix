'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { withBasePath } from '@/lib/base-path';

type Props = { leadId: string };

export function ConvertToCustomerButton({ leadId }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleConvert() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(withBasePath(`/api/leads/${leadId}/convert-customer`), {
        method: 'POST',
      });
      const data = (await res.json()) as { customerId?: string; error?: string };
      if (!res.ok) {
        setError(data.error ?? 'تعذّر التحويل');
        return;
      }
      if (data.customerId) {
        router.push(`/customers/${data.customerId}`);
        router.refresh();
      }
    } catch {
      setError('تعذّر الاتصال بالخادم');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="stat-card space-y-3">
      <h3 className="font-semibold">تحويل لعميل</h3>
      <p className="text-sm text-muted">إنشاء سجل عميل من بيانات هذا الطلب</p>
      {error && <p className="text-sm text-warning">{error}</p>}
      <button
        type="button"
        onClick={handleConvert}
        disabled={loading}
        className="w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-60"
      >
        {loading ? 'جاري التحويل…' : 'تحويل إلى عميل'}
      </button>
    </div>
  );
}
