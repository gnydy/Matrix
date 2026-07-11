import { Footer, Shell } from '@/components/Shell';
import { KitchenBoard } from '@/components/RestaurantSections';
export default function KitchenPage(){ return <Shell><section className="mx-auto max-w-7xl px-6 py-16"><h1 className="text-5xl font-black text-slate-950">Kitchen dashboard</h1><p className="mt-4 max-w-2xl text-slate-600">Station load, tickets, preparation states, and expo coordination mock UI.</p><div className="mt-10"><KitchenBoard /></div></section><Footer /></Shell>; }
