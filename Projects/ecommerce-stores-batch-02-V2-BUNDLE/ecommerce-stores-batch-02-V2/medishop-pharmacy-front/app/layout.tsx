import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MediShop Pharmacy Front | Ecommerce Template',
  description: 'Pharmacy frontend with health categories, safe product cards, reorder reminders, and pharmacist support UI.',
  keywords: ['ecommerce template', 'Pharmacy', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'MediShop Pharmacy Front',
    description: 'Pharmacy frontend with health categories, safe product cards, reorder reminders, and pharmacist support UI.',
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
