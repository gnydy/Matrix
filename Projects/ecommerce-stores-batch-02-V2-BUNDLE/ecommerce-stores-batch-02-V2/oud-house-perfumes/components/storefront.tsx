import Link from 'next/link';
import { products, store } from '@/data/products';

export function Money({ value }: { value: number }) {
  return <span>{store.currency === 'USD' ? '$' : ''}{value.toLocaleString()}{store.currency === 'EGP' ? ' EGP' : ''}</span>;
}

export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full border border-yellow-300/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">{children}</span>;
}

export function Header({ mode = 'top' }: { mode?: 'top' | 'side' | 'split' | 'compact' }) {
  if (mode === 'side') {
    return <aside className="fixed left-0 top-0 z-20 hidden h-screen w-64 border-r border-white/10 bg-white/5 text-white p-6 lg:block">
      <div className="text-xl font-black">{store.name}</div>
      <p className="mt-2 text-sm text-slate-300">{store.industry}</p>
      <nav className="mt-10 grid gap-3 text-sm font-semibold">{store.nav.map((n) => <Link key={n} href="/products" className="rounded-2xl px-4 py-3 hover:bg-white/10">{n}</Link>)}</nav>
      <Link href="/checkout" className="mt-10 block rounded-2xl bg-gradient-to-r from-yellow-300 to-amber-600 px-5 py-3 text-center text-sm font-black text-white">Checkout Mock</Link>
    </aside>;
  }
  return <header className="sticky top-0 z-30 border-b border-white/10 bg-white/5 text-white/80 px-5 py-4 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
      <Link href="/" className="text-lg font-black tracking-tight">{store.name}</Link>
      <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">{store.nav.map((n) => <Link key={n} href="/products" className="opacity-80 hover:opacity-100">{n}</Link>)}</nav>
      <div className="flex items-center gap-2">
        <Link href="/account" className="rounded-full border border-yellow-300/40 px-4 py-2 text-sm font-bold">Account</Link>
        <Link href="/cart" className="rounded-full bg-gradient-to-r from-yellow-300 to-amber-600 px-4 py-2 text-sm font-black text-white">Cart</Link>
      </div>
    </div>
  </header>;
}

export function ProductCard({ product, wide = false }: { product: typeof products[number], wide?: boolean }) {
  return <Link href={`/products/${product.slug}`} className={`group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-white ${wide ? 'md:grid md:grid-cols-[1fr_1.2fr]' : ''}`}>
    <div className="relative min-h-56 overflow-hidden bg-gradient-to-br from-yellow-300 to-amber-600">
      <div className="absolute inset-0 noise opacity-40" />
      <div className="absolute bottom-5 left-5 rounded-2xl bg-black/25 px-4 py-2 text-sm font-black text-white backdrop-blur">{product.tag}</div>
      <div className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-slate-950">{product.rating} ★</div>
    </div>
    <div className="p-6">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-300">{product.category}</p>
      <h3 className="mt-3 text-2xl font-black">{product.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{product.summary}</p>
      <div className="mt-5 flex items-center justify-between">
        <strong className="text-xl"><Money value={product.price} /></strong>
        <span className="rounded-full border border-yellow-300/40 px-4 py-2 text-xs font-black">View</span>
      </div>
    </div>
  </Link>;
}

export function Footer() {
  return <footer className="border-t border-white/10 bg-white/5 text-white px-5 py-12">
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
      <div><h2 className="text-2xl font-black">{store.name}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">{store.concept}</p></div>
      <div><h3 className="font-black">Commerce pages</h3><div className="mt-4 grid gap-2 text-sm text-slate-300"><Link href="/products">Products</Link><Link href="/cart">Cart</Link><Link href="/checkout">Checkout</Link></div></div>
      <div><h3 className="font-black">Control</h3><div className="mt-4 grid gap-2 text-sm text-slate-300"><Link href="/control-room">Control Room</Link><Link href="/account">Customer Account</Link></div></div>
    </div>
  </footer>;
}

export function MetricCard({ label, value }: { label: string, value: string }) {
  return <div className="rounded-[1.5rem] border border-white/10 bg-white/5 text-white p-5"><p className="text-xs uppercase tracking-[0.2em] text-slate-300">{label}</p><strong className="mt-2 block text-3xl">{value}</strong></div>
}
