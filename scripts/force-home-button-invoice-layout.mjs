import fs from 'node:fs';
import path from 'node:path';

const layoutPath = 'E:\\Matrix\\apps\\web-erp\\src\\app\\erp\\invoices\\new\\layout.tsx';

fs.mkdirSync(path.dirname(layoutPath), { recursive: true });

const code = `
import type { ReactNode } from 'react';

export default function NewInvoiceLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <a
        href="/erp"
        style={{
          position: 'fixed',
          top: 18,
          left: 18,
          zIndex: 9999,
          padding: '12px 18px',
          borderRadius: 14,
          border: '1px solid #334155',
          background: '#16a34a',
          color: 'white',
          textDecoration: 'none',
          fontWeight: 900,
          boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
        }}
      >
        العودة إلى الرئيسية
      </a>

      {children}
    </div>
  );
}
`;

fs.writeFileSync(layoutPath, code.trimStart(), 'utf8');

console.log('DONE: fixed home button layout added');
console.log(layoutPath);