import Link from 'next/link';
import { erpNavItems } from '@/lib/labels';

export default function ErpHomePage() {
  const modules = erpNavItems.filter((item) => item.href !== '/');

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold">لوحة AllInAll ERP</h1>
        <p className="mt-2 max-w-2xl text-muted">
          واجهة العميل لإدارة الشركات والفروع. الموديولات التالية جاهزة للربط مع قاعدة البيانات والـ API في
          المرحلة D.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {modules.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="stat-card transition hover:border-primary/40 hover:bg-card/80"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-2xl" aria-hidden>
                  {item.icon}
                </p>
                <h2 className="mt-3 font-semibold">{item.label}</h2>
                <p className="mt-1 text-sm text-muted">قائمة · إنشاء · تفاصيل · تقارير</p>
              </div>
              <span className="badge bg-primary/15 text-primary">D</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="stat-card">
        <h2 className="font-semibold">الخطوة التالية</h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted">
          <li>ERP Core: Company · Branch · FiscalYear</li>
          <li>ربط الصلاحيات مع Control Center</li>
          <li>API endpoints تحت <code className="text-foreground">/api/v1/erp/*</code></li>
        </ul>
      </section>
    </div>
  );
}
