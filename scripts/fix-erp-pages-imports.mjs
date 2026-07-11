import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const pages = [
  ['accounting', 'AccountingModuleClient', 'accounting-module-client'],
  ['debts', 'DebtsModuleClient', 'debts-module-client'],
  ['hr', 'HrModuleClient', 'hr-module-client'],
  ['inventory', 'InventoryModuleClient', 'inventory-module-client'],
  ['purchases', 'PurchasesModuleClient', 'purchases-module-client'],
  ['sales', 'SalesModuleClient', 'sales-module-client'],
  ['workflow', 'WorkflowModuleClient', 'workflow-module-client'],
  ['reports', 'ReportsModuleClient', 'reports-module-client'],
  ['cashier', 'CashierModuleClient', 'cashier-module-client'],
];

function pageContent(componentName, componentFile) {
  return `import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { getSession } from '@/lib/auth';
import { ${componentName} } from '@/components/${componentFile}';

export default async function Page() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <ErpShell userName={session.name}>
      <${componentName} />
    </ErpShell>
  );
}
`;
}

for (const [route, componentName, componentFile] of pages) {
  const filePath = path.join(
    root,
    'apps',
    'web-erp',
    'src',
    'app',
    '(erp)',
    route,
    'page.tsx',
  );

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, pageContent(componentName, componentFile), 'utf8');
  console.log('fixed:', filePath);
}

console.log('DONE');
