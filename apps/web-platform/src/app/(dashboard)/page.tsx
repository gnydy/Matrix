import Link from 'next/link';
import { prisma } from '@allinall/database';
import { formatDate, leadStatusLabels } from '@/lib/labels';

async function getStats() {
  const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const since5m = new Date(Date.now() - 5 * 60 * 1000);

  const [
    totalSessions,
    activeNow,
    totalLeads,
    totalCustomers,
    totalQuotes,
    quotesAccepted,
    totalProjects,
    projectsActive,
    totalPayments,
    paymentsPending,
    leadsToday,
    newLeads,
    formStarts,
    recentLeads,
    recentVisitors,
  ] = await Promise.all([
    prisma.visitorSession.count(),
    prisma.visitorSession.count({
      where: { isActive: true, lastSeenAt: { gte: since5m } },
    }),
    prisma.lead.count(),
    prisma.customer.count(),
    prisma.quote.count(),
    prisma.quote.count({ where: { status: 'accepted' } }),
    prisma.project.count(),
    prisma.project.count({ where: { status: 'in_progress' } }),
    prisma.payment.count(),
    prisma.payment.count({ where: { status: 'pending' } }),
    prisma.lead.count({ where: { createdAt: { gte: since24h } } }),
    prisma.lead.count({ where: { status: 'new' } }),
    prisma.siteEvent.count({ where: { type: 'form_started' } }),
    prisma.lead.findMany({ orderBy: { createdAt: 'desc' }, take: 8 }),
    prisma.visitorSession.findMany({
      orderBy: { lastSeenAt: 'desc' },
      take: 8,
      include: { _count: { select: { pageViews: true, leads: true } } },
    }),
  ]);

  const submitted = await prisma.siteEvent.count({ where: { type: 'lead_submitted' } });
  const abandoned = Math.max(0, formStarts - submitted);

  return {
    totalSessions,
    activeNow,
    totalLeads,
    totalCustomers,
    totalQuotes,
    quotesAccepted,
    totalProjects,
    projectsActive,
    totalPayments,
    paymentsPending,
    leadsToday,
    newLeads,
    abandoned,
    conversion: totalSessions > 0 ? Math.round((totalLeads / totalSessions) * 100) : 0,
    recentLeads,
    recentVisitors,
  };
}

export default async function DashboardPage() {
  let stats;
  let dbError = false;

  try {
    stats = await getStats();
  } catch {
    dbError = true;
    stats = {
      totalSessions: 0,
      activeNow: 0,
      totalLeads: 0,
      totalCustomers: 0,
      totalQuotes: 0,
      quotesAccepted: 0,
      totalProjects: 0,
      projectsActive: 0,
      totalPayments: 0,
      paymentsPending: 0,
      leadsToday: 0,
      newLeads: 0,
      abandoned: 0,
      conversion: 0,
      recentLeads: [],
      recentVisitors: [],
    };
  }

  return (
    <div className="space-y-8">
      {dbError && (
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm">
          قاعدة البيانات غير متصلة. نفّذ{' '}
          <code className="rounded bg-background px-1">npm run db:local</code> ثم{' '}
          <code className="rounded bg-background px-1">npm run stack:start</code>
        </div>
      )}
      <div>
        <h2 className="text-2xl font-bold">نظرة عامة</h2>
        <p className="mt-1 text-sm text-muted">كل ما يحدث على موقع التسويق — لحظيًا</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <div className="stat-card">
          <p className="text-sm text-muted">زوار (جلسات)</p>
          <p className="mt-2 text-3xl font-bold">{stats.totalSessions}</p>
          <p className="mt-1 text-xs text-success">{stats.activeNow} نشط الآن</p>
        </div>
        <div className="stat-card">
          <p className="text-sm text-muted">الطلبات</p>
          <p className="mt-2 text-3xl font-bold">{stats.totalLeads}</p>
          <p className="mt-1 text-xs text-muted">{stats.leadsToday} خلال 24 ساعة</p>
        </div>
        <div className="stat-card">
          <p className="text-sm text-muted">العملاء</p>
          <p className="mt-2 text-3xl font-bold">{stats.totalCustomers}</p>
          <Link href="/customers" className="mt-1 block text-xs text-primary hover:underline">
            عرض العملاء
          </Link>
        </div>
        <div className="stat-card">
          <p className="text-sm text-muted">طلبات جديدة</p>
          <p className="mt-2 text-3xl font-bold">{stats.newLeads}</p>
          <p className="mt-1 text-xs text-muted">بانتظار المراجعة</p>
        </div>
        <div className="stat-card">
          <p className="text-sm text-muted">لم يكملوا الطلب</p>
          <p className="mt-2 text-3xl font-bold text-warning">{stats.abandoned}</p>
          <p className="mt-1 text-xs text-muted">بدأوا نموذجًا ولم يرسلوا</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="stat-card">
          <p className="text-sm text-muted">عروض الأسعار</p>
          <p className="mt-2 text-3xl font-bold">{stats.totalQuotes}</p>
          <p className="mt-1 text-xs text-muted">{stats.quotesAccepted} مقبولة</p>
        </div>
        <div className="stat-card">
          <p className="text-sm text-muted">المشاريع</p>
          <p className="mt-2 text-3xl font-bold">{stats.totalProjects}</p>
          <Link href="/projects" className="mt-1 block text-xs text-primary hover:underline">
            {stats.projectsActive} قيد التنفيذ
          </Link>
        </div>
        <div className="stat-card">
          <p className="text-sm text-muted">المدفوعات</p>
          <p className="mt-2 text-3xl font-bold">{stats.totalPayments}</p>
          <p className="mt-1 text-xs text-warning">{stats.paymentsPending} معلقة</p>
        </div>
        <div className="stat-card">
          <p className="text-sm text-muted">معدل التحويل</p>
          <p className="mt-2 text-3xl font-bold">{stats.conversion}%</p>
          <p className="mt-1 text-xs text-muted">طلب ÷ زيارة</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="stat-card">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">آخر الطلبات</h3>
            <Link href="/leads" className="text-sm text-primary hover:underline">
              عرض الكل
            </Link>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>المرجع</th>
                <th>الاسم</th>
                <th>الحالة</th>
                <th>التاريخ</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>
                    <Link href={`/leads/${lead.id}`} className="text-primary hover:underline">
                      {lead.ref}
                    </Link>
                  </td>
                  <td>{lead.name}</td>
                  <td>
                    <span className="badge bg-primary/15 text-primary">
                      {leadStatusLabels[lead.status] ?? lead.status}
                    </span>
                  </td>
                  <td className="text-muted">{formatDate(lead.createdAt)}</td>
                </tr>
              ))}
              {stats.recentLeads.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-6 text-center text-muted">
                    لا توجد طلبات بعد
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        <section className="stat-card">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">آخر الزوار</h3>
            <Link href="/visitors" className="text-sm text-primary hover:underline">
              عرض الكل
            </Link>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>الزائر</th>
                <th>صفحات</th>
                <th>طلبات</th>
                <th>آخر نشاط</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentVisitors.map((v) => (
                <tr key={v.id}>
                  <td>
                    <Link href={`/visitors/${v.id}`} className="text-primary hover:underline">
                      {v.visitorId.slice(0, 8)}…
                    </Link>
                  </td>
                  <td>{v._count.pageViews}</td>
                  <td>{v._count.leads}</td>
                  <td className="text-muted">{formatDate(v.lastSeenAt)}</td>
                </tr>
              ))}
              {stats.recentVisitors.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-6 text-center text-muted">
                    لا يوجد زوار بعد
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>

      <p className="text-sm text-muted">
        Control Center — المرحلة C مكتملة · سير العمل: طلب → عميل → عرض → مشروع → دفعة
      </p>
    </div>
  );
}
