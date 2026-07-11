import Link from 'next/link';
import { store } from '@/data/store';

const nav = [
  ['POS', '/'], ['Products', '/products'], ['Sales', '/sales'], ['Inventory', '/inventory'], ['Shifts', '/shifts'], ['Reports', '/reports'], ['Settings', '/settings']
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl text-lg font-black text-white" style={{ background: store.dark }}>POS</span>
          <span>
            <strong className="block text-base">{store.title}</strong>
            <span className="text-xs text-slate-500">{store.positioning} · Fullstack Mock</span>
          </span>
        </Link>
        <nav className="flex flex-wrap gap-2">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 hover:border-slate-400">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
