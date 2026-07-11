import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PetCare Mobile App',
  description: 'Vet appointments and pet records.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
