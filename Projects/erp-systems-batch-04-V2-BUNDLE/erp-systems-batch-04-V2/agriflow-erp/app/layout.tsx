import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgriFlow ERP',
  description: 'Crops, irrigation, harvest batches, sensors, equipment and farm inventory',
  openGraph: {
    title: 'AgriFlow ERP',
    description: 'Crops, irrigation, harvest batches, sensors, equipment and farm inventory',
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
