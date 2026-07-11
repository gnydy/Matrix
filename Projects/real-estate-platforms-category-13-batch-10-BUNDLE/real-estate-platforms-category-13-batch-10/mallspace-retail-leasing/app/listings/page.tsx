import { Nav } from '@/components/Nav';
import { SectionHeader } from '@/components/SectionHeader';
import { PropertyFilters } from '@/components/PropertyFilters';
import { site } from '@/data/site';

export default function ListingsPage() {
  return <main><Nav /><section className="px-4 py-14" style={{ background: site.soft }}><SectionHeader eyebrow="Listings" title="Smart searchable inventory" description="Filter properties by area and budget using a client-side UX suitable for real estate demos." /></section><PropertyFilters /></main>;
}
