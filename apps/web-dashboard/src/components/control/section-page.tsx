import { sectionContent, type SectionId } from '../../lib/control-data';
import { DataTable, MetricCard, NotesCard, PageTopbar } from './ui';

function PortfolioForm() {
  return (
    <div className="card">
      <h3>إضافة مشروع جديد</h3>
      <p>هذا النموذج هو أساس إدارة أعمالنا من الداشبورد. سيتم ربطه لاحقًا بالـ API ورفع الصور.</p>

      <form className="form-grid">
        <div className="field">
          <label>اسم المشروع</label>
          <input placeholder="Time Zone Watches" />
        </div>

        <div className="field">
          <label>العميل</label>
          <input placeholder="Time Zone" />
        </div>

        <div className="field">
          <label>رابط المشروع</label>
          <input placeholder="https://example.com" />
        </div>

        <div className="field">
          <label>التصنيف</label>
          <select defaultValue="website">
            <option value="website">Website</option>
            <option value="erp">ERP</option>
            <option value="dashboard">Dashboard</option>
            <option value="custom">Custom System</option>
          </select>
        </div>

        <div className="field">
          <label>اللوجو</label>
          <input type="file" />
        </div>

        <div className="field">
          <label>صورة الغلاف</label>
          <input type="file" />
        </div>

        <div className="field full">
          <label>وصف عربي</label>
          <textarea placeholder="اكتب وصف المشروع بالعربي..." />
        </div>

        <div className="field full">
          <label>English Description</label>
          <textarea placeholder="Write project description in English..." />
        </div>

        <div className="field full">
          <label>التقنيات</label>
          <input placeholder="Next.js, NestJS, Prisma, PostgreSQL" />
        </div>

        <div className="field full">
          <button className="btn primary" type="button">
            حفظ كمسودة
          </button>
        </div>
      </form>
    </div>
  );
}

function CommandCenterWarning() {
  return (
    <div className="card">
      <h3>قاعدة أمان مهمة</h3>
      <p>
        هذا القسم لا يسمح بتشغيل Terminal مفتوح. المسموح فقط أوامر محددة مسبقًا
        مثل build، backup، sync. كل أمر يحتاج Owner Permission ويتم تسجيله في Audit Logs.
      </p>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 14 }}>
        <button className="btn primary" type="button">build:marketing</button>
        <button className="btn" type="button">backup:db</button>
        <button className="btn" type="button">sync:portfolio</button>
        <button className="btn danger" type="button">run:any-shell ممنوع</button>
      </div>
    </div>
  );
}

export function SectionPage({ sectionId }: { sectionId: SectionId }) {
  const data = sectionContent[sectionId];

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

        {sectionId === 'commands' ? <CommandCenterWarning /> : null}
        {sectionId === 'portfolio' ? <PortfolioForm /> : null}

        <div className="grid two">
          <div className="card">
            <h2>البيانات الحالية</h2>
            <p>عرض أولي للبيانات. سيتم استبداله ببيانات حقيقية من API.</p>
            <DataTable columns={data.table.columns} rows={data.table.rows} />
          </div>

          <NotesCard notes={data.notes} />
        </div>
      </div>
    </>
  );
}