import { Nav } from '@/components/Nav';
import { SectionHeader } from '@/components/SectionHeader';
import { BookingForm } from '@/components/BookingForm';
import { site } from '@/data/site';

export default function BookingPage() { return <main><Nav /><section className="px-4 py-14" style={{ background: site.soft }}><SectionHeader eyebrow="Viewing booking" title="Convert browsing into qualified viewings" description="A viewing request flow with lead data, property selection, slot selection, and sales context." /></section><section className="px-4 py-12"><BookingForm /></section></main>; }
