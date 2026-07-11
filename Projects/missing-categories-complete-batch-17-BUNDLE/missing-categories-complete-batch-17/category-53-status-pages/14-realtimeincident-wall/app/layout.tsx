import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RealtimeIncident Wall | Status Pages',
  description: 'RealtimeIncident Wall template for Status Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
