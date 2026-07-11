import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SaaS Template Market | Ecommerce Template',
  description: 'Template marketplace for selling website and system templates with live demos, ZIP downloads, licenses, and creator dashboard.',
  keywords: ['ecommerce template', 'Template marketplace', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'SaaS Template Market',
    description: 'Template marketplace for selling website and system templates with live demos, ZIP downloads, licenses, and creator dashboard.',
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
