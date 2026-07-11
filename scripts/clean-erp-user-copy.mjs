import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const pages = [
  {
    name: 'accounting',
    title: 'الحسابات',
    description: 'إدارة الحسابات اليومية، القيود، الأرصدة، وميزان المراجعة.',
  },
  {
    name: 'debts',
    title: 'المديونيات',
    description: 'متابعة مستحقات العملاء والتزامات الموردين وعمليات التحصيل والسداد.',
  },
  {
    name: 'hr',
    title: 'الموارد البشرية',
    description: 'إدارة بيانات الموظفين والحضور والإجازات والملفات الوظيفية.',
  },
  {
    name: 'inventory',
    title: 'المخزون',
    description: 'إدارة المنتجات والمخازن والأرصدة وحركات الصرف والإضافة والجرد.',
  },
  {
    name: 'purchases',
    title: 'المشتريات',
    description: 'إدارة فواتير الشراء والموردين واستلام البضائع وتكاليف التوريد.',
  },
  {
    name: 'sales',
    title: 'المبيعات',
    description: 'إدارة العملاء وفواتير البيع والتحصيل ومتابعة حركة المبيعات.',
  },
  {
    name: 'workflow',
    title: 'سير العمل',
    description: 'تنظيم خطوات العمل والمراجعات والموافقات داخل النظام.',
  },
];

function pageContent(title, description) {
  return `import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { getSession } from '@/lib/auth';

export default async function Page() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <ErpShell userName={session.name}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>${title}</h1>
        <p style={{ color: '#cbd5e1', marginBottom: 16 }}>${description}</p>

        <div style={{ display: 'grid', gap: 12, marginTop: 20 }}>
          <div style={{ padding: 16, border: '1px solid #475569', borderRadius: 12, background: '#0f172a' }}>
            <strong>نظرة عامة</strong>
            <p style={{ marginTop: 8, color: '#94a3b8' }}>
              من هنا يمكنك متابعة بيانات هذا القسم وإدارته حسب صلاحيات حسابك.
            </p>
          </div>
        </div>
      </section>
    </ErpShell>
  );
}
`;
}

for (const page of pages) {
  const filePath = path.join(root, 'apps', 'web-erp', 'src', 'app', '(erp)', page.name, 'page.tsx');
  fs.writeFileSync(filePath, pageContent(page.title, page.description), 'utf8');
  console.log('updated:', filePath);
}

const coreClientPath = path.join(root, 'apps', 'web-erp', 'src', 'components', 'core-api-client.tsx');

const coreClient = `'use client';

import { FormEvent, useEffect, useState } from 'react';

type Party = {
  id: string;
  name: string;
  phone?: string | null;
  email?: string | null;
};

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(\`/erp/api/erp/proxy/\${path}\`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    cache: 'no-store',
  });

  const json = await response.json().catch(() => null);

  if (!response.ok || json?.ok === false) {
    throw new Error(json?.error || json?.message || \`حدث خطأ أثناء تنفيذ العملية\`);
  }

  return (json?.data ?? json) as T;
}

function getValue(form: FormData, key: string) {
  return String(form.get(key) || '').trim();
}

export function CoreApiClient() {
  const [customers, setCustomers] = useState<Party[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    setError('');

    try {
      const customersData = await api<Party[]>('sales/parties');
      setCustomers(customersData);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل البيانات');
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
    setError('');
    setMessage('');

    try {
      await api('sales/parties', {
        method: 'POST',
        body: JSON.stringify({
          name: getValue(form, 'name'),
          phone: getValue(form, 'phone'),
          email: getValue(form, 'email') || undefined,
        }),
      });

      formElement.reset();
      setMessage('تم حفظ العميل بنجاح');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ العميل');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>البيانات الأساسية</h1>
        <p style={{ color: '#cbd5e1', margin: 0 }}>
          إدارة العملاء والموردين والبيانات الرئيسية التي يعتمد عليها تشغيل النظام.
        </p>

        {loading ? <p style={{ marginTop: 16 }}>جاري تحميل البيانات...</p> : null}
        {message ? <p style={{ marginTop: 16, color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ marginTop: 16, color: '#ef4444' }}>{error}</p> : null}

        <div style={{ marginTop: 16, padding: 16, border: '1px solid #475569', borderRadius: 12, background: '#0f172a' }}>
          <strong>عدد العملاء المسجلين: {customers.length}</strong>
        </div>
      </section>

      <form onSubmit={addCustomer} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>إضافة عميل</h2>
        <p style={{ color: '#94a3b8', marginBottom: 16 }}>
          أدخل بيانات العميل الأساسية لاستخدامها في المبيعات والتحصيل والمتابعة.
        </p>

        <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
          <input name="name" required placeholder="اسم العميل" style={{ padding: 12 }} />
          <input name="phone" placeholder="رقم الهاتف" style={{ padding: 12 }} />
          <input name="email" placeholder="البريد الإلكتروني" style={{ padding: 12 }} />

          <button disabled={saving} style={{ padding: 12, cursor: 'pointer' }}>
            {saving ? 'جاري الحفظ...' : 'حفظ العميل'}
          </button>
        </div>
      </form>

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>العملاء المسجلون</h2>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {customers.map((customer) => (
            <div key={customer.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{customer.name}</strong>
              <div style={{ color: '#94a3b8' }}>{customer.phone || customer.email || 'لا توجد بيانات اتصال'}</div>
            </div>
          ))}

          {!customers.length ? <p style={{ color: '#94a3b8' }}>لا يوجد عملاء مسجلون حتى الآن.</p> : null}
        </div>
      </section>
    </div>
  );
}
`;

fs.writeFileSync(coreClientPath, coreClient, 'utf8');
console.log('updated:', coreClientPath);

console.log('DONE: user-facing ERP copy cleaned');
