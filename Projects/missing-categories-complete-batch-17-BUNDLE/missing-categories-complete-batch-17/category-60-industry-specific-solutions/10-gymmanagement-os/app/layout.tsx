import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GymManagement OS | Industry-Specific Solutions',
  description: 'GymManagement OS template for Industry-Specific Solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
