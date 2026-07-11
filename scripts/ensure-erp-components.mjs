import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('created:', rel);
}

write('apps/web-erp/src/components/erp-api.ts', `
export async function erpApi<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch('/erp/api/erp/proxy/' + path, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    cache: 'no-store',
  });

  const json = await response.json().catch(() => null);

  if (!response.ok || json?.ok === false) {
    throw new Error(json?.error || json?.message || 'تعذر تنفيذ العملية');
  }

  return (json?.data ?? json) as T;
}

export function field(form: FormData, key: string) {
  return String(form.get(key) || '').trim();
}

export function num(form: FormData, key: string) {
  const value = Number(form.get(key) || 0);
  return Number.isFinite(value) ? value : 0;
}

export function money(value: unknown) {
  const numberValue = Number(value || 0);
  return numberValue.toLocaleString('ar-EG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}
`);

function simpleModule(componentName, title, description, endpoint, emptyText) {
  return `
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

export function ${componentName}() {
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState('');

  async function load() {
    setError('');

    try {
      const data = await erpApi<Row[]>('${endpoint}').catch(() => []);
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
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>${title}</h1>
        <p style={{ color: '#cbd5e1' }}>${description}</p>

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

          {!rows.length ? <p style={{ color: '#94a3b8' }}>${emptyText}</p> : null}
        </div>
      </section>
    </div>
  );
}
`;
}

write(
  'apps/web-erp/src/components/accounting-module-client.tsx',
  simpleModule(
    'AccountingModuleClient',
    'الحسابات',
    'متابعة دليل الحسابات والقيود اليومية والحركات المالية.',
    'accounting/accounts',
    'لا توجد حسابات مسجلة.'
  )
);

write(
  'apps/web-erp/src/components/debts-module-client.tsx',
  simpleModule(
    'DebtsModuleClient',
    'المديونيات',
    'متابعة مستحقات العملاء والتزامات الموردين.',
    'debts/receivables',
    'لا توجد مديونيات مسجلة.'
  )
);

write(
  'apps/web-erp/src/components/hr-module-client.tsx',
  simpleModule(
    'HrModuleClient',
    'الموارد البشرية',
    'إدارة الموظفين والحضور والإجازات والملفات الوظيفية.',
    'hr/employees',
    'لا يوجد موظفون مسجلون.'
  )
);

write(
  'apps/web-erp/src/components/inventory-module-client.tsx',
  simpleModule(
    'InventoryModuleClient',
    'المخزون',
    'إدارة المنتجات والمخازن والأرصدة وحركات المخزون.',
    'inventory/products',
    'لا توجد منتجات مسجلة.'
  )
);

write(
  'apps/web-erp/src/components/purchases-module-client.tsx',
  simpleModule(
    'PurchasesModuleClient',
    'المشتريات',
    'إدارة الموردين وفواتير الشراء وتكلفة التوريد.',
    'purchases/documents',
    'لا توجد فواتير شراء مسجلة.'
  )
);

write(
  'apps/web-erp/src/components/workflow-module-client.tsx',
  simpleModule(
    'WorkflowModuleClient',
    'سير العمل',
    'متابعة الموافقات والطلبات وخطوات المراجعة.',
    'workflow/instances',
    'لا توجد عمليات متابعة مسجلة.'
  )
);

write(
  'apps/web-erp/src/components/reports-module-client.tsx',
  simpleModule(
    'ReportsModuleClient',
    'التقارير',
    'ملخصات تشغيلية عن المبيعات والمشتريات والمخزون والمديونيات.',
    'sales/documents',
    'لا توجد بيانات تقارير حالية.'
  )
);

console.log('DONE: missing ERP components created');