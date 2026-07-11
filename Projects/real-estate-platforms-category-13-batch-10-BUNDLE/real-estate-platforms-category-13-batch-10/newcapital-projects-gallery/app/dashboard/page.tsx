import { Nav } from '@/components/Nav';
import { SectionHeader } from '@/components/SectionHeader';
import { MetricCard } from '@/components/MetricCard';
import { DashboardPreview } from '@/components/DashboardPreview';
import { site } from '@/data/site';

export default function DashboardPage() { return <main><Nav /><section className="px-4 py-14" style={{ background: site.soft }}><SectionHeader eyebrow="Admin dashboard" title="Real estate control room mock" description="A frontend dashboard preview for leads, listings, viewings, and sales operations." /></section><section className="mx-auto max-w-7xl px-4 py-12"><div className="grid gap-4 md:grid-cols-4">{site.stats.map(s => <MetricCard key={s.label} label={s.label} value={s.value} />)}</div><div className="mt-8"><DashboardPreview /></div></section></main>; }
