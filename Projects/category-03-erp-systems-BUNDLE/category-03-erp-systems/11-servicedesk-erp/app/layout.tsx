import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ServiceDesk ERP | ERP Systems',
  description: 'ServiceDesk ERP template for ERP Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
