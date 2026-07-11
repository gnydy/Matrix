import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MaintenanceBot Dispatcher',
  description: 'Maintenance request and dispatch bot.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
