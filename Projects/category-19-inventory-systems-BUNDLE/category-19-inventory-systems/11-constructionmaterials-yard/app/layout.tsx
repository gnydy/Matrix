import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ConstructionMaterials Yard',
  description: 'Materials, tools, and site transfers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
