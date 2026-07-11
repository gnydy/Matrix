'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sections } from '../../lib/control-data';

function ThemeButton() {
  function toggleTheme() {
    const root = document.documentElement;
    const current = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = current;
    window.localStorage.setItem('matrix_dashboard_theme', current);
  }

  return (
    <button className="btn" type="button" onClick={toggleTheme}>
      تبديل السمة
    </button>
  );
}

export function ControlShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/control/login') {
    return <>{children}</>;
  }

  return (
    <div className="control-shell">
      <aside className="sidebar">
        <Link href="/control" className="brand">
          <span className="brand-mark">M</span>
          <span>
            <strong>Matrix</strong>
            <span>Control Center</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Dashboard navigation">
          {sections.map((item) => {
            const active =
              item.href === '/control'
                ? pathname === '/control'
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`nav-link ${active ? 'active' : ''}`}
              >
                <span>{item.icon} {item.label}</span>
                <small>{item.number}</small>
              </Link>
            );
          })}
        </nav>

        <div className="card" style={{ marginTop: 18 }}>
          <h3>Owner Mode</h3>
          <p>النسخة الحالية واجهة تشغيلية احترافية جاهزة للتوصيل بالـ API.</p>
          <ThemeButton />
        </div>
      </aside>

      <main className="main">{children}</main>
    </div>
  );
}