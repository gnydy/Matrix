import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = [];

function add(title, text) {
  out.push('');
  out.push('==============================');
  out.push(title);
  out.push('==============================');
  out.push(text);
}

function read(rel) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) return 'FILE NOT FOUND: ' + rel;

  return fs
    .readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .map((line, index) => `${index + 1}:${line}`)
    .join('\n');
}

function findIn(rel, terms) {
  const text = read(rel);
  return text
    .split('\n')
    .filter((line) => terms.some((term) => line.toLowerCase().includes(term.toLowerCase())))
    .join('\n') || 'NO MATCH';
}

add('erp-sales.controller.ts', read('apps/api/src/erp/erp-sales.controller.ts'));

add(
  'delete search in erp-sales.controller.ts',
  findIn('apps/api/src/erp/erp-sales.controller.ts', [
    '@Delete',
    'deleteParty',
    "parties/:id",
    'erpSalesDocument.count',
    'erpReceivable.count',
    'deletedAt',
  ]),
);

add(
  'proxy route',
  read('apps/web-erp/src/app/api/erp/proxy/[...path]/route.ts'),
);

add(
  'customers ui delete code',
  findIn('apps/web-erp/src/components/core-api-client.tsx', [
    'deleteCustomer',
    'DELETE',
    'sales/parties/',
  ]),
);

fs.writeFileSync('debug-delete-customer.txt', out.join('\n'), 'utf8');

console.log('DONE: debug-delete-customer.txt created');