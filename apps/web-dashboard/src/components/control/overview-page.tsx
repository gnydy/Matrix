import { sectionContent, sections } from '../../lib/control-data';
import { DataTable, EmptyActionCard, MetricCard, NotesCard, PageTopbar } from './ui';

export function OverviewPage() {
  const data = sectionContent.overview;

  return (
    <>
      <PageTopbar
        title={data.title}
        subtitle={data.subtitle}
        primaryAction={data.primaryAction}
        secondaryAction={data.secondaryAction}
      />

      <div className="content grid">
        <div className="grid cards">
          {data.metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              trend={metric.trend}
            />
          ))}
        </div>

        <div className="grid two">
          <div className="card">
            <h2>آخر النشاطات</h2>
            <p>كل حركة داخل النظام يجب أن تكون قابلة للتتبع.</p>
            <DataTable columns={data.table.columns} rows={data.table.rows} />
          </div>

          <NotesCard notes={data.notes} />
        </div>

        <div className="grid cards">
          {sections
            .filter((section) => section.id !== 'overview')
            .slice(0, 8)
            .map((section) => (
              <EmptyActionCard
                key={section.id}
                title={`${section.number}. ${section.label}`}
                description={section.description}
                href={section.href}
              />
            ))}
        </div>
      </div>
    </>
  );
}