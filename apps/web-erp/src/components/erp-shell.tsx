import Link from 'next/link';
import { ERP_NAME, ERP_TAGLINE, erpNavItems } from '@/lib/labels';

export function ErpShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 border-l border-border bg-card/50 p-6 lg:block">
        <div className="mb-8">
          <h1 className="text-lg font-bold">{ERP_NAME}</h1>
          <p className="text-xs text-muted">Matrix Tenant</p>
        </div>
        <nav className="space-y-1">
          {erpNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-muted hover:bg-background hover:text-foreground"
            >
              <span aria-hidden>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mt-8 border-t border-border pt-4 text-xs text-muted">
          الواجهة جاهزة — ربط البيانات في المرحلة D
        </p>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="border-b border-border px-4 py-4 lg:px-8">
          <p className="text-sm text-muted">{ERP_NAME}</p>
          <p className="font-semibold">{ERP_TAGLINE}</p>
        </header>
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
