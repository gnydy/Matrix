
'use client';

import { useEffect, useState } from 'react';
import { erpApi } from './erp-api';

type Row = {
  id: string;
  name?: string | null;
  ref?: string | null;
  code?: string | null;
  status?: string | null;
};

export function ReportsModuleClient() {
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState('');

  async function load() {
    setError('');

    try {
      const data = await erpApi<Row[]>('sales/documents').catch(() => []);
      setRows(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل البيانات');
    }
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>التقارير</h1>
        <p style={{ color: '#cbd5e1' }}>ملخصات تشغيلية عن المبيعات والمشتريات والمخزون والمديونيات.</p>

        {error ? <p style={{ color: '#ef4444' }}>{error}</p> : null}

        <div style={{ marginTop: 16 }}>
          <strong>عدد السجلات: {rows.length}</strong>
        </div>
      </section>

      <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>السجلات الحالية</h2>

        <div style={{ display: 'grid', gap: 8 }}>
          {rows.map((row) => (
            <div key={row.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{row.name || row.ref || row.code || row.id}</strong>
              <div style={{ color: '#94a3b8' }}>{row.status || 'مسجل'}</div>
            </div>
          ))}

          {!rows.length ? <p style={{ color: '#94a3b8' }}>لا توجد بيانات تقارير حالية.</p> : null}
        </div>
      </section>
    </div>
  );
}
