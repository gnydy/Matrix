import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Legal Docs Vault',
  description: 'Employee contracts and compliance records.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
