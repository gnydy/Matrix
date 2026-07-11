import { Footer, Shell } from '@/components/Shell';
import { ReservationsBoard } from '@/components/RestaurantSections';
export default function ReservationsPage(){ return <Shell><section className="mx-auto max-w-7xl px-6 py-16"><h1 className="text-5xl font-black text-slate-950">Table reservation board</h1><p className="mt-4 max-w-2xl text-slate-600">Availability, table assignment, deposits, waitlist, and VIP notes as frontend states.</p><div className="mt-10"><ReservationsBoard /></div></section><Footer /></Shell>; }
