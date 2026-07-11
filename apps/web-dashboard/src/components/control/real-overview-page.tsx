'use client';

import { useEffect, useState } from 'react';

type Summary = {
  counts: Record<string, number>;
  recentAudits: {
    id: string;
    actor?: string;
    action?: string;
    resource?: string;
    createdAt?: string;
  }[];
};

export function RealOverviewPage() {
  const [data, setData] = useState<Summary | null>(null);

  async function load() {
    const response = await fetch('/api/control/dashboard', { cache: 'no-store' });
    const json = await response.json();

    if (json.ok) {
      setData(json.data);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const counts = data?.counts ?? {};

  return (
    <>
      <div className="topbar">
        <div>
          <h1>Matrix Control Center</h1>
          <p>لوحة تحكم حقيقية تقرأ من API وملف بيانات فعلي.</p>
        </div>

        <div className="top-actions">
          <span className="badge green">Real Mode</span>
          <button className="btn" type="button" onClick={() => void load()}>
            تحديث
          </button>
        </div>
      </div>

      <div className="content grid">
        <div className="grid cards">
          <Metric label="Leads" value={counts.leads ?? 0} />
          <Metric label="Customers" value={counts.customers ?? 0} />
          <Metric label="Projects" value={counts.projects ?? 0} />
          <Metric label="Portfolio" value={counts.portfolio ?? 0} />
        </div>

        <div className="card">
          <h2>آخر النشاطات الفعلية</h2>
          <p>كل إضافة أو حذف Soft Delete يتم تسجيله هنا.</p>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>المستخدم</th>
                  <th>الفعل</th>
                  <th>القسم</th>
                  <th>الوقت</th>
                </tr>
              </thead>

              <tbody>
                {(data?.recentAudits ?? []).map((audit) => (
                  <tr key={audit.id}>
                    <td>{audit.actor ?? '—'}</td>
                    <td>{audit.action ?? '—'}</td>
                    <td>{audit.resource ?? '—'}</td>
                    <td>{audit.createdAt?.slice(0, 16).replace('T', ' ') ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="card metric">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>Real DB</small>
    </div>
  );
}