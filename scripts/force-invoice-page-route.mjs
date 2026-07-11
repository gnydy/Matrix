import fs from 'node:fs';
import path from 'node:path';

const root = 'E:\\Matrix';

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('updated:', rel);
}

const componentPath = path.join(root, 'apps', 'web-erp', 'src', 'components', 'new-invoice-client.tsx');

if (!fs.existsSync(componentPath)) {
  throw new Error('new-invoice-client.tsx غير موجود. شغّل سكريبت install-new-invoice-page مرة أخرى.');
}

const page = `
import { NewInvoiceClient } from '@/components/new-invoice-client';

export default function NewInvoicePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#020617', color: '#e5e7eb', padding: 24, direction: 'rtl' }}>
      <NewInvoiceClient />
    </main>
  );
}
`;

write('apps/web-erp/src/app/(erp)/invoices/new/page.tsx', page);
write('apps/web-erp/src/app/invoices/new/page.tsx', page);

console.log('DONE: invoice route forced');