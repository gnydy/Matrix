import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BlueCollar Workforce OS',
  description: 'Field staff, uniforms, tools, and attendance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
