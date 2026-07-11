import fs from 'node:fs';
import path from 'node:path';

const file = 'E:\\Matrix\\apps\\web-erp\\src\\app\\erp\\invoices\\new\\page.tsx';

if (!fs.existsSync(file)) {
  throw new Error('ملف صفحة الفاتورة غير موجود: ' + file);
}

let code = fs.readFileSync(file, 'utf8');

if (code.includes('العودة إلى الرئيسية')) {
  console.log('زر العودة موجود بالفعل');
  process.exit(0);
}

code = code.replace(
  `<h1 style={{ margin: '0 0 8px', fontSize: 34, color: '#22c55e' }}>
          فاتورة جديدة
        </h1>`,
  `<div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ margin: '0 0 8px', fontSize: 34, color: '#22c55e' }}>
              فاتورة جديدة
            </h1>
          </div>

          <a
            href="/erp"
            style={{
              display: 'inline-block',
              padding: '12px 16px',
              borderRadius: 14,
              border: '1px solid #334155',
              background: '#0f172a',
              color: '#e5e7eb',
              textDecoration: 'none',
              fontWeight: 800,
            }}
          >
            العودة إلى الرئيسية
          </a>
        </div>`
);

fs.writeFileSync(file, code, 'utf8');

console.log('DONE: home button added to invoice page');