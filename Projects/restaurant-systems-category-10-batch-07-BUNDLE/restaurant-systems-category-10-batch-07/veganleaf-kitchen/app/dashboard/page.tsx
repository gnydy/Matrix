import { Footer, Shell } from '@/components/Shell';
import { ControlRoom, KitchenBoard, ReservationsBoard } from '@/components/RestaurantSections';
export default function DashboardPage(){ return <Shell><ControlRoom /><section className="mx-auto max-w-7xl px-6 py-10"><KitchenBoard /><div className="mt-10"><ReservationsBoard /></div></section><Footer /></Shell>; }
