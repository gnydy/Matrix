import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TrainingROI Page | ROI Calculator Pages',
  description: 'TrainingROI Page template for ROI Calculator Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
