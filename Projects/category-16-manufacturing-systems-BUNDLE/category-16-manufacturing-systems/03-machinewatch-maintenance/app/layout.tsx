import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MachineWatch Maintenance | Manufacturing Systems',
  description: 'MachineWatch Maintenance template for Manufacturing Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
