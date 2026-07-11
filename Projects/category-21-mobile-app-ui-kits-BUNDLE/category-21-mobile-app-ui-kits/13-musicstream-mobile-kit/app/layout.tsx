import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MusicStream Mobile Kit',
  description: 'Player, playlists and artist screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
