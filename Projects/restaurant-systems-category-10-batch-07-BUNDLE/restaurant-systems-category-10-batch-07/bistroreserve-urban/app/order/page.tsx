import { Footer, Shell } from '@/components/Shell';
import { OrdersTable } from '@/components/RestaurantSections';
import { site } from '@/data/site';
export default function OrderPage(){ return <Shell><section className="mx-auto max-w-7xl px-6 py-16"><h1 className="text-5xl font-black text-slate-950">Online ordering mock</h1><p className="mt-4 max-w-2xl text-slate-600">Cart, order type, ETA, and upsell flow prepared for {site.audience}.</p><div className="mt-10"><OrdersTable /></div></section><Footer /></Shell>; }
