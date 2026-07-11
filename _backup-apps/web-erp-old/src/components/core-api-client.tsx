
'use client';

import { FormEvent, useEffect, useState } from 'react';
import { erpApi, field } from './erp-api';

type Customer = {
  id: string;
  name: string;
  phone?: string | null;
  email?: string | null;
};

export function CoreApiClient() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    setError('');

    try {
      const rows = await erpApi<Customer[]>('sales/parties');
      setCustomers(rows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل العملاء');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function addCustomer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('sales/parties', {
        method: 'POST',
        body: JSON.stringify({
          type: 'customer',
          name: field(form, 'name'),
          phone: field(form, 'phone') || undefined,
          email: field(form, 'email') || undefined,
        }),
      });

      formElement.reset();
      setShowAdd(false);
      setMessage('تم حفظ العميل');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ العميل');
    } finally {
      setSaving(false);
    }
  }

  async function deleteCustomer(customer: Customer) {
    const ok = window.confirm('هل تريد حذف العميل: ' + customer.name + '؟');

    if (!ok) return;

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('sales/parties/' + customer.id, {
        method: 'DELETE',
      });

      setMessage('تم حذف العميل');
      await load();
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'تعذر حذف العميل. قد يكون مرتبطًا بفواتير أو عمليات مالية.',
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>العملاء</h1>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              إدارة بيانات العملاء وأرقام التواصل الخاصة بهم.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAdd((value) => !value)}
            style={{ padding: '12px 16px', borderRadius: 12, border: 0, background: '#2563eb', color: 'white', fontWeight: 700, cursor: 'pointer' }}
          >
            {showAdd ? 'إغلاق' : 'إضافة عميل'}
          </button>
        </div>

        {loading ? <p style={{ marginTop: 16 }}>جاري تحميل العملاء...</p> : null}
        {message ? <p style={{ marginTop: 16, color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ marginTop: 16, color: '#ef4444' }}>{error}</p> : null}

        <div style={{ marginTop: 16, padding: 16, border: '1px solid #475569', borderRadius: 12, background: '#0f172a' }}>
          <strong>عدد العملاء: {customers.length}</strong>
        </div>
      </section>

      {showAdd ? (
        <form onSubmit={addCustomer} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>إضافة عميل جديد</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 460 }}>
            <input name="name" required placeholder="اسم العميل" style={{ padding: 12 }} />
            <input name="phone" placeholder="رقم الهاتف" style={{ padding: 12 }} />
            <input name="email" placeholder="البريد الإلكتروني" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12, cursor: 'pointer' }}>
              {saving ? 'جاري الحفظ...' : 'حفظ العميل'}
            </button>
          </div>
        </form>
      ) : null}

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>قائمة العملاء</h2>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {customers.map((customer) => (
            <div
              key={customer.id}
              style={{
                padding: 12,
                border: '1px solid #475569',
                borderRadius: 12,
                display: 'flex',
                justifyContent: 'space-between',
                gap: 12,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <strong>{customer.name}</strong>
                <div style={{ color: '#94a3b8' }}>
                  {customer.phone || customer.email || 'لا توجد بيانات اتصال'}
                </div>
              </div>

              <button
                type="button"
                disabled={saving}
                onClick={() => void deleteCustomer(customer)}
                style={{
                  padding: '8px 12px',
                  borderRadius: 10,
                  border: '1px solid #7f1d1d',
                  background: '#450a0a',
                  color: '#fecaca',
                  cursor: 'pointer',
                }}
              >
                حذف
              </button>
            </div>
          ))}

          {!customers.length ? <p style={{ color: '#94a3b8' }}>لا يوجد عملاء مسجلون.</p> : null}
        </div>
      </section>
    </div>
  );
}
