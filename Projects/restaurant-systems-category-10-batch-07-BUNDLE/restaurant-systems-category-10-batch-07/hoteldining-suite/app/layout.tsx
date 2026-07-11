import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HotelDining Suite | Restaurant System Template',
  description: 'Hotel dining and room-service control template',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'HotelDining Suite', description: 'Hotel dining and room-service control template', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
