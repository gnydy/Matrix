import fs from 'node:fs';
import path from 'node:path';

const root = 'E:\\Matrix';
const layoutPath = path.join(root, 'apps', 'web-erp', 'src', 'app', 'layout.tsx');

fs.mkdirSync(path.dirname(layoutPath), { recursive: true });

const layout = `
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Matrix ERP',
  description: 'Professional ERP system',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, background: '#020617' }}>
        {children}
      </body>
    </html>
  );
}
`;

fs.writeFileSync(layoutPath, layout.trimStart(), 'utf8');

console.log('DONE: root layout fixed');
console.log(layoutPath);
