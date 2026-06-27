import Link from 'next/link';
import { navItems } from '@/lib/labels';
import { CONTROL_CENTER_NAME, CONTROL_CENTER_TAGLINE } from '@/lib/branding';
import { LogoutButton } from '@/components/logout-button';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 border-l border-border bg-card/50 p-6 lg:block">
        <div className="mb-8">
          <h1 className="text-lg font-bold">{CONTROL_CENTER_NAME}</h1>
          <p className="text-xs text-muted">Matrix</p>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted hover:bg-background hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 border-t border-border pt-6">
          <LogoutButton />
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border px-4 py-4 lg:px-8">
          <div>
            <p className="text-sm text-muted">{CONTROL_CENTER_NAME}</p>
            <p className="font-semibold">{CONTROL_CENTER_TAGLINE}</p>
          </div>
          <div className="lg:hidden">
            <LogoutButton />
          </div>
        </header>
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
