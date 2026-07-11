import type { ErpModuleKey } from './modules';

export type WorkflowStepDef = {
  module: ErpModuleKey;
  stepKey: string;
  label: string;
  sortOrder: number;
};

export const DEFAULT_WORKFLOW_STEPS: WorkflowStepDef[] = [
  { module: 'workflow', stepKey: 'request', label: 'طلب / احتياج', sortOrder: 1 },
  { module: 'workflow', stepKey: 'purchase', label: 'شراء', sortOrder: 2 },
  { module: 'workflow', stepKey: 'receive', label: 'استلام مخزون', sortOrder: 3 },
  { module: 'workflow', stepKey: 'audit', label: 'جرد', sortOrder: 4 },
  { module: 'workflow', stepKey: 'sale', label: 'بيع', sortOrder: 5 },
  { module: 'workflow', stepKey: 'collect', label: 'تحصيل', sortOrder: 6 },
  { module: 'workflow', stepKey: 'journal', label: 'قيد محاسبي', sortOrder: 7 },
];
