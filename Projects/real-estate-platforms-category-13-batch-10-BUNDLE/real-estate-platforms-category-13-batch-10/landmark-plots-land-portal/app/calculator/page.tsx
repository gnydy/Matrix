import { Nav } from '@/components/Nav';
import { SectionHeader } from '@/components/SectionHeader';
import { MortgageCalculator } from '@/components/MortgageCalculator';
import { site } from '@/data/site';

export default function CalculatorPage() { return <main><Nav /><section className="px-4 py-14" style={{ background: site.soft }}><SectionHeader eyebrow="Mortgage calculator" title="Estimate monthly affordability" description="A frontend mock calculator that improves perceived product depth for property and finance clients." /></section><section className="px-4 py-12"><MortgageCalculator /></section></main>; }
