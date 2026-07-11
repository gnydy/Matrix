import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SwiftCart Mobile Commerce',
  description: 'Mobile commerce app with storefront flow.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
