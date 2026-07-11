import fs from 'node:fs';
import path from 'node:path';

const root = 'E:\\Matrix';

function removeDir(rel) {
  const full = path.join(root, rel);

  if (fs.existsSync(full)) {
    fs.rmSync(full, { recursive: true, force: true });
    console.log('removed:', rel);
  } else {
    console.log('not found:', rel);
  }
}

// احذف النسخة المكررة خارج مجموعة ERP
removeDir('apps/web-erp/src/app/invoices');

// احذف اختبار visible-test المكرر لو موجود خارج ERP
removeDir('apps/web-erp/src/app/visible-test');

// تأكد أن النسخة الصحيحة موجودة
const correctPage = path.join(root, 'apps/web-erp/src/app/(erp)/invoices/new/page.tsx');

if (!fs.existsSync(correctPage)) {
  throw new Error('الصفحة الصحيحة غير موجودة: apps/web-erp/src/app/(erp)/invoices/new/page.tsx');
}

console.log('DONE: duplicate invoice routes fixed');