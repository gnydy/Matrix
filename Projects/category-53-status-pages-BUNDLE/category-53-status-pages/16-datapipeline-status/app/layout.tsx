import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DataPipeline Status | Status Pages',
  description: 'DataPipeline Status template for Status Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
