import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Legal Office ERP',
  description: 'Matters, clients, billing, documents, hearings and compliance timeline',
  openGraph: {
    title: 'Legal Office ERP',
    description: 'Matters, clients, billing, documents, hearings and compliance timeline',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
