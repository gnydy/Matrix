'use client';

import { useEffect, useMemo, useState } from 'react';
import type { ResourceConfig } from '../../lib/control-resource-config';

type RecordItem = {
  id: string;
  title?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  [key: string]: unknown;
};

function formatValue(value: unknown) {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  if (typeof value === 'boolean') {
    return value ? 'نعم' : 'لا';
  }

  if (typeof value === 'string' && value.includes('T') && value.includes('Z')) {
    return value.slice(0, 16).replace('T', ' ');
  }

  if (value === null || value === undefined || value === '') {
    return '—';
  }

  return String(value);
}

function emptyMessage(resource: string) {
  if (resource === 'leads') {
    return 'لا توجد طلبات بعد. عندما يرسل العميل طلبًا من الموقع الرئيسي سيظهر هنا تلقائيًا.';
  }

  if (resource === 'visitors') {
    return 'لا توجد زيارات مسجلة بعد. سيتم عرض الزيارات تلقائيًا بعد ربط تتبع الزوار من الموقع الرئيسي.';
  }

  if (resource === 'customers') {
    return 'لا يوجد عملاء بعد. العملاء سيتم إنشاؤهم تلقائيًا بعد تحويل الطلبات إلى عملاء.';
  }

  if (resource === 'auditLogs') {
    return 'لا توجد نشاطات بعد.';
  }

  if (resource === 'trash') {
    return 'سلة المهملات فارغة.';
  }

  return 'لا توجد بيانات بعد. هذا القسم سيقرأ بياناته تلقائيًا من الموقع أو النظام المرتبط به.';
}

function sourceLabel(resource: string) {
  if (resource === 'leads') return 'المصدر: فورم الطلبات في الموقع الرئيسي';
  if (resource === 'visitors') return 'المصدر: تتبع زيارات الموقع الرئيسي';
  if (resource === 'portfolio') return 'المصدر: بيانات أعمالنا المرتبطة بالموقع';
  if (resource === 'auditLogs') return 'المصدر: عمليات النظام تلقائيًا';
  if (resource === 'trash') return 'المصدر: العناصر المحذوفة Soft Delete';
  return 'المصدر: الموقع الرئيسي / النظام';
}

export function RealResourcePage({ config }: { config: ResourceConfig }) {
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');

  const apiPath = `/api/control/data/${config.resource}`;

  const columns = useMemo(() => {
    return config.columns.length > 0 ? config.columns : ['title', 'status', 'createdAt'];
  }, [config.columns]);

  async function load() {
    setLoading(true);

    try {
      const response = await fetch(apiPath, { cache: 'no-store' });
      const json = await response.json();

      if (!json.ok) {
        throw new Error(json.error ?? 'Failed to load data');
      }

      setRecords(Array.isArray(json.data) ? json.data : []);
      setLastUpdated(new Date().toLocaleTimeString('ar-EG'));
    } catch (error) {
      console.error(error);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();

    const timer = window.setInterval(() => {
      void load();
    }, 5000);

    return () => window.clearInterval(timer);
  }, [apiPath]);

  return (
    <>
      <div className="topbar">
        <div>
          <h1>{config.title}</h1>
          <p>{sourceLabel(config.resource)}</p>
        </div>

        <div className="top-actions">
          <span className="badge green">Auto Read</span>
          <button className="btn" type="button" onClick={() => void load()}>
            تحديث
          </button>
        </div>
      </div>

      <div className="content grid">
        <div className="grid cards">
          <div className="card metric">
            <span>عدد السجلات</span>
            <strong>{records.length}</strong>
            <small>تلقائي</small>
          </div>

          <div className="card metric">
            <span>آخر تحديث</span>
            <strong style={{ fontSize: 24 }}>{lastUpdated || '—'}</strong>
            <small>كل 5 ثواني</small>
          </div>

          <div className="card metric">
            <span>وضع الصفحة</span>
            <strong style={{ fontSize: 24 }}>قراءة فقط</strong>
            <small>لا يوجد إدخال يدوي</small>
          </div>

          <div className="card metric">
            <span>مصدر البيانات</span>
            <strong style={{ fontSize: 22 }}>Website</strong>
            <small>Main Site</small>
          </div>
        </div>

        <div className="card">
          <h2>البيانات التلقائية</h2>
          <p>
            هذه الصفحة لا تحتوي على فورم. البيانات تأتي من الموقع الرئيسي أو من النظام المرتبط بها فقط.
          </p>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={columns.length}>جاري تحميل البيانات...</td>
                  </tr>
                ) : records.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length}>{emptyMessage(config.resource)}</td>
                  </tr>
                ) : (
                  records.map((record) => (
                    <tr key={record.id}>
                      {columns.map((column) => (
                        <td key={`${record.id}-${column}`}>
                          {formatValue(record[column])}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {config.resource === 'leads' ? (
          <div className="card">
            <h3>طريقة العمل الصحيحة</h3>
            <p>
              العميل يملأ الطلب من الموقع الرئيسي. الطلب يتحفظ في قاعدة بيانات الداشبورد.
              هذه الصفحة تقرأ الطلبات تلقائيًا وتحدث نفسها كل 5 ثواني.
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default RealResourcePage;