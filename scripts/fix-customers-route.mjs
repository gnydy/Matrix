import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('updated:', rel);
}

const shellPath = path.join(root, 'apps/web-erp/src/components/erp-shell.tsx');

if (fs.existsSync(shellPath)) {
  let shell = fs.readFileSync(shellPath, 'utf8');

  shell = shell.replaceAll("href: '/core', label: 'البيانات الأساسية'", "href: '/customers', label: 'العملاء'");
  shell = shell.replaceAll("href: '/core', label: 'العملاء'", "href: '/customers', label: 'العملاء'");
  shell = shell.replaceAll('البيانات الأساسية', 'العملاء');

  fs.writeFileSync(shellPath, shell, 'utf8');
  console.log('updated: apps/web-erp/src/components/erp-shell.tsx');
}

write('apps/web-erp/src/app/(erp)/customers/page.tsx', `
import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { CoreApiClient } from '@/components/core-api-client';
import { getSession } from '@/lib/auth';

export default async function CustomersPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <ErpShell userName={session.name}>
      <CoreApiClient />
    </ErpShell>
  );
}
`);

write('apps/web-erp/src/app/(erp)/core/page.tsx', `
import { redirect } from 'next/navigation';

export default function CorePage() {
  redirect('/customers');
}
`);

write('apps/web-erp/src/app/(erp)/page.tsx', `
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';

export default async function ErpHomePage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  const roles = session.roles ?? [];

  if (roles.includes('cashier')) {
    redirect('/cashier');
  }

  redirect('/customers');
}
`);

console.log('DONE: customers route fixed');