import Link from 'next/link';
import { navGroups } from '@/lib/nav';
import { LogoutButton } from '@/components/logout-button';

export function ErpShell({ children, userName }: { children: React.ReactNode; userName?: string }) {
  return (
    <div className="desktop-shell">
      <aside className="desktop-sidebar">
        <div className="brand-block">
          <div className="brand-mark">M</div>
          <div>
            <h1>Matrix ERP</h1>
            <p>Professional Desktop Suite</p>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="ERP navigation">
          <Link href="/" className="nav-link nav-home">لوحة التحكم</Link>
          {navGroups.map((group) => (
            <div key={group.group} className="nav-group">
              <p>{group.group}</p>
              {group.items.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  <span>{item.label}</span>
                  <small>{item.labelEn}</small>
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span>المستخدم الحالي</span>
          <strong>{userName || 'مدير النظام'}</strong>
          <LogoutButton />
        </div>
      </aside>

      <div className="desktop-content">
        <header className="desktop-topbar">
          <div>
            <p>Matrix ERP</p>
            <h2>نظام إدارة الأعمال المتكامل</h2>
          </div>
          <div className="topbar-actions">
            <span className="status-pill">API Ready</span>
            <span className="status-pill status-dark">Desktop UI</span>
            <div className="mobile-logout"><LogoutButton /></div>
          </div>
        </header>
        <main className="desktop-main">{children}</main>
      </div>
    </div>
  );
}
