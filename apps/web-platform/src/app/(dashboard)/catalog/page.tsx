import { erpModulesCatalog, servicesCatalog } from '@/lib/services-catalog';

export default function CatalogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">كتالوج الخدمات</h2>
        <p className="mt-1 text-sm text-muted">ما يُعرض على الموقع التسويقي — مرجع للمبيعات</p>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        {servicesCatalog.map((s) => (
          <div key={s.id} className="stat-card">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.desc}</p>
            <ul className="mt-3 space-y-1 text-sm">
              {s.modules.map((m) => (
                <li key={m}>· {m}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h3 className="mb-4 text-lg font-semibold">موديولات ERP</h3>
        <div className="flex flex-wrap gap-2">
          {erpModulesCatalog.map((m) => (
            <span
              key={m.id}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                'comingSoon' in m && m.comingSoon
                  ? 'border-border text-muted'
                  : 'border-primary/30 bg-primary/10 text-primary'
              }`}
            >
              {m.title}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
