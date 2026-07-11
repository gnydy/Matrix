import { Shell } from '@/components/Shell';
import { ActionBoard, HeroPanel, MetricGrid, ModuleGrid, RecordsTable } from '@/components/Widgets';

export default function Page() {
  return (
    <Shell>
      <HeroPanel />
      <MetricGrid />
      <ModuleGrid />
      <ActionBoard />
      <RecordsTable />
    </Shell>
  );
}
