import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AIWorkflow Template Shop | Template Marketplaces',
  description: 'AIWorkflow Template Shop template for Template Marketplaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
