import { Shell } from '@/components/Shell';
import { Topbar, ModuleGrid, RecordsTable } from '@/components/ErpBlocks';

export default function ModulesPage() {
  return (
    <Shell>
      <Topbar />
      <section className="space-y-6 px-5 py-8 lg:px-8">
        <ModuleGrid />
        <RecordsTable />
      </section>
    </Shell>
  );
}
