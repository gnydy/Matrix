import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AuditTrail Accounting',
  description: 'Audit logs, corrections and approvals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
