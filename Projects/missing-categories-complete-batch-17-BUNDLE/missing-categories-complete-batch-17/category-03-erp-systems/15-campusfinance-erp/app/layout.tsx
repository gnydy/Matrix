import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CampusFinance ERP | ERP Systems',
  description: 'CampusFinance ERP template for ERP Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
