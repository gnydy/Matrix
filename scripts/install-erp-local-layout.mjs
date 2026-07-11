import fs from 'node:fs';
import path from 'node:path';

const root = 'E:\\Matrix';
const web = path.join(root, 'apps', 'web-erp');

function write(rel, content) {
  const full = path.join(web, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('written:', rel);
}

write('src/app/erp/layout.tsx', `
import type { ReactNode } from 'react';

const navItems = [
  { href: '/erp/invoices/new', label: 'فاتورة جديدة' },
  { href: '/erp/cashier', label: 'الكاشير' },
  { href: '/erp/sales', label: 'المبيعات' },
  { href: '/erp/purchases', label: 'المشتريات' },
  { href: '/erp/inventory', label: 'المخزون' },
  { href: '/erp/accounting', label: 'الحسابات' },
  { href: '/erp/hr', label: 'الموارد البشرية' },
  { href: '/erp/reports', label: 'التقارير' },
];

export default function ErpLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#020617',
      color: '#e5e7eb',
      direction: 'rtl',
      fontFamily: 'Arial, sans-serif',
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
    }}>
      <aside style={{
        borderLeft: '1px solid #1e293b',
        background: '#0f172a',
        padding: 20,
        position: 'sticky',
        top: 0,
        height: '100vh',
      }}>
        <div style={{
          padding: 18,
          border: '1px solid #334155',
          borderRadius: 18,
          background: '#111827',
          marginBottom: 18,
        }}>
          <h1 style={{ margin: 0, fontSize: 24, color: '#22c55e' }}>Matrix ERP</h1>
          <p style={{ margin: '8px 0 0', color: '#94a3b8', fontSize: 14 }}>
            نظام إدارة احترافي
          </p>
        </div>

        <nav style={{ display: 'grid', gap: 8 }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: '#e5e7eb',
                padding: '12px 14px',
                borderRadius: 14,
                border: '1px solid #1e293b',
                background: '#020617',
                fontWeight: 700,
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <section style={{ minWidth: 0 }}>
        <header style={{
          height: 72,
          borderBottom: '1px solid #1e293b',
          background: '#020617',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}>
          <strong>لوحة تشغيل ERP</strong>

          <div style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#94a3b8' }}>
            <span>admin@matrix.local</span>
            <a href="/erp/logout" style={{
              color: '#fecaca',
              textDecoration: 'none',
              border: '1px solid #7f1d1d',
              padding: '8px 12px',
              borderRadius: 12,
              background: '#450a0a',
            }}>
              خروج
            </a>
          </div>
        </header>

        <main style={{ padding: 24 }}>
          {children}
        </main>
      </section>
    </div>
  );
}
`);

console.log('DONE: ERP local layout installed');
