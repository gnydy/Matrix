import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const pages = [
  {
    name: 'accounting',
    title: 'الحسابات',
    description: 'صفحة الحسابات بدون بيانات وهمية. سيتم ربطها بقيود اليومية وميزان المراجعة من الـ API.',
  },
  {
    name: 'debts',
    title: 'المديونيات',
    description: 'صفحة المديونيات بدون بيانات وهمية. سيتم ربطها بمديونيات العملاء والموردين والتحصيل والسداد من الـ API.',
  },
  {
    name: 'hr',
    title: 'الموارد البشرية',
    description: 'صفحة الموارد البشرية بدون بيانات وهمية. سيتم ربطها بالموظفين والحضور والإجازات من الـ API.',
  },
  {
    name: 'inventory',
    title: 'المخزون',
    description: 'صفحة المخزون بدون بيانات وهمية. سيتم ربطها بالمنتجات والمخازن وحركات المخزون والجرد من الـ API.',
  },
  {
    name: 'purchases',
    title: 'المشتريات',
    description: 'صفحة المشتريات بدون بيانات وهمية. سيتم ربطها بفواتير الشراء وترحيلها ومديونيات الموردين من الـ API.',
  },
  {
    name: 'sales',
    title: 'المبيعات',
    description: 'صفحة المبيعات بدون بيانات وهمية. سيتم ربطها بفواتير البيع وترحيلها وتحصيل العملاء من الـ API.',
  },
  {
    name: 'workflow',
    title: 'سير العمل',
    description: 'صفحة سير العمل بدون بيانات وهمية. سيتم ربطها بالموافقات والعمليات من الـ API.',
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

        <div style={{ padding: 16, border: '1px solid #475569', borderRadius: 12, background: '#0f172a' }}>
          <strong>Real API Module</strong>
          <p style={{ marginTop: 8, color: '#94a3b8' }}>
            تم حذف الواجهة الوهمية من هذه الصفحة. لا يوجد erp-static-ui ولا ErpModuleInterface هنا.
          </p>
        </div>
      </section>
    </ErpShell>
  );
}
`;
}

for (const page of pages) {
  const filePath = path.join(
    root,
    'apps',
    'web-erp',
    'src',
    'app',
    '(erp)',
    page.name,
    'page.tsx',
  );

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, pageContent(page.title, page.description), 'utf8');
  console.log('updated:', filePath);
}

console.log('DONE: mock pages replaced');