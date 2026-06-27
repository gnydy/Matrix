import Link from 'next/link';
import { modulePhaseLabels } from '@/lib/labels';

type Props = {
  params: Promise<{ slug: string }>;
};

const moduleCopy: Record<string, { title: string; description: string; entities: string[] }> = {
  inventory: {
    title: 'المخزون',
    description: 'المنتجات والمستودعات وحركات المخزون ومستويات الرصيد.',
    entities: ['products', 'warehouses', 'stock_movements', 'stock_levels'],
  },
  sales: {
    title: 'المبيعات',
    description: 'عملاء ERP وعروض وطلبات وفواتير مبيعات.',
    entities: ['erp_customers', 'sales_quotes', 'sales_orders', 'sales_invoices'],
  },
  purchases: {
    title: 'المشتريات',
    description: 'الموردون وأوامر الشراء وفواتير الموردين.',
    entities: ['suppliers', 'purchase_orders', 'supplier_invoices'],
  },
  accounting: {
    title: 'المحاسبة',
    description: 'دليل الحسابات والقيود والسنوات المالية.',
    entities: ['accounts', 'journal_entries', 'fiscal_years'],
  },
  hr: {
    title: 'الموارد البشرية',
    description: 'الموظفون والحضور وطلبات الإجازة.',
    entities: ['employees', 'attendance', 'leave_requests'],
  },
  debts: {
    title: 'المديونيات',
    description: 'الذمم المدينة والدائنة وجداول السداد.',
    entities: ['receivables', 'payables', 'payment_schedules'],
  },
  subscriptions: {
    title: 'الاشتراكات',
    description: 'الباقات والصلاحيات واشتراكات العملاء.',
    entities: ['plans', 'entitlements', 'subscriptions'],
  },
};

export function generateStaticParams() {
  return Object.keys(moduleCopy).map((slug) => ({ slug }));
}

export default async function ErpModulePage({ params }: Props) {
  const { slug } = await params;
  const mod = moduleCopy[slug];
  if (!mod) {
    return (
      <div className="stat-card">
        <p>الموديول غير موجود.</p>
        <Link href="/" className="mt-4 inline-block text-primary">
          العودة للوحة ERP
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          ← لوحة ERP
        </Link>
        <span className="badge bg-warning/15 text-warning">{modulePhaseLabels[slug]}</span>
      </div>

      <header>
        <h1 className="text-2xl font-bold">{mod.title}</h1>
        <p className="mt-2 max-w-2xl text-muted">{mod.description}</p>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="stat-card lg:col-span-2">
          <h2 className="font-semibold">الشاشات المخططة</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {['قائمة', 'إنشاء', 'تفاصيل', 'تقارير'].map((screen) => (
              <div
                key={screen}
                className="rounded-xl border border-dashed border-border px-4 py-6 text-center text-sm text-muted"
              >
                {screen} — قيد التطوير
              </div>
            ))}
          </div>
        </div>

        <div className="stat-card">
          <h2 className="font-semibold">الجداول</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {mod.entities.map((entity) => (
              <li key={entity} className="rounded-lg bg-background px-3 py-2 font-mono text-xs text-foreground">
                {entity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
