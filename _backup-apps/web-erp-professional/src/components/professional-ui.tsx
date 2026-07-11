import Link from 'next/link';
import { erpNav } from '@/lib/nav';
import { executiveKpis, professionalModules, type ModuleKey, type ModuleMetric } from '@/lib/professional-modules';

function toneClass(tone: ModuleMetric['tone']) {
  if (tone === 'green') return 'metric-green';
  if (tone === 'blue') return 'metric-blue';
  if (tone === 'amber') return 'metric-amber';
  if (tone === 'red') return 'metric-red';
  return 'metric-slate';
}

export function KpiCard({ metric }: { metric: ModuleMetric }) {
  return (
    <article className={`metric-card ${toneClass(metric.tone)}`}>
      <span>{metric.label}</span>
      <strong>{metric.value}</strong>
      <small>{metric.hint}</small>
    </article>
  );
}

export function ProfessionalDashboard() {
  const topModules = ['cashier', 'sales', 'inventory', 'accounting', 'hr', 'manufacturing'] as ModuleKey[];

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Matrix ERP Desktop Suite</p>
          <h1>نظام ERP احترافي لإدارة شركة كاملة من شاشة واحدة</h1>
          <p>
            واجهة Desktop RTL جاهزة للربط مع API: مبيعات، مشتريات، مخزون، حسابات، موارد بشرية، تصنيع، مشاريع وتقارير تنفيذية.
          </p>
        </div>
        <div className="hero-card">
          <span>وضع التشغيل</span>
          <strong>واجهة مكتبية احترافية</strong>
          <small>تصميم عريض مناسب للكمبيوتر والكاشير والإدارة</small>
        </div>
      </section>

      <section className="metric-grid">
        {executiveKpis.map((metric) => <KpiCard key={metric.label} metric={metric} />)}
      </section>

      <section className="module-grid">
        {topModules.map((key) => {
          const item = professionalModules[key];
          return (
            <Link key={item.key} href={`/${item.key === 'inventory' ? 'inventory' : item.key}`} className="module-card">
              <span>{item.subtitle}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </Link>
          );
        })}
      </section>

      <section className="panel-grid two-cols">
        <div className="panel">
          <div className="panel-heading">
            <span>تسلسل التشغيل</span>
            <h2>من البيع إلى الحسابات</h2>
          </div>
          <ol className="timeline-list">
            <li><strong>الكاشير / المبيعات</strong><span>تسجيل الفاتورة وخصم المخزون.</span></li>
            <li><strong>المخزون</strong><span>تحديث الرصيد وحركات الخروج.</span></li>
            <li><strong>الحسابات</strong><span>قيد نقدية/مبيعات أو عميل/مبيعات.</span></li>
            <li><strong>التقارير</strong><span>ظهور العملية في مؤشرات الإدارة.</span></li>
          </ol>
        </div>
        <div className="panel">
          <div className="panel-heading">
            <span>الموديولات</span>
            <h2>نطاق ERP الكامل</h2>
          </div>
          <div className="compact-list">
            {erpNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ProfessionalModulePage({ moduleKey }: { moduleKey: ModuleKey }) {
  const module = professionalModules[moduleKey];

  return (
    <div className="page-stack">
      <section className="module-hero">
        <div>
          <p className="eyebrow">{module.subtitle}</p>
          <h1>{module.title}</h1>
          <p>{module.description}</p>
        </div>
        <div className="module-goal">
          <span>هدف شاشة Desktop</span>
          <strong>{module.desktopGoal}</strong>
        </div>
      </section>

      <section className="metric-grid">
        {module.metrics.map((metric) => <KpiCard key={metric.label} metric={metric} />)}
      </section>

      <section className="action-row">
        {module.actions.map((action) => (
          <button key={action.title} className={`action-card action-${action.kind}`} type="button">
            <strong>{action.title}</strong>
            <span>{action.description}</span>
          </button>
        ))}
      </section>

      <section className="panel-grid two-cols">
        <div className="panel">
          <div className="panel-heading">
            <span>Workflow</span>
            <h2>دورة العمل</h2>
          </div>
          <ol className="timeline-list">
            {module.workflow.map((step, index) => (
              <li key={step}>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {module.tables.map((table) => (
          <div className="panel" key={table.title}>
            <div className="panel-heading">
              <span>Data</span>
              <h2>{table.title}</h2>
            </div>
            <div className="table-wrap">
              <table className="data-table pro-table">
                <thead>
                  <tr>{table.columns.map((col) => <th key={col}>{col}</th>)}</tr>
                </thead>
                <tbody>
                  {table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
