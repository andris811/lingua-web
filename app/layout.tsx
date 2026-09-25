import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lingua Playlist — Learn languages by listening',
  description: 'Turn the words you want to learn into your everyday soundtrack. Create sentence playlists, listen on repeat, and practice your pronunciation with Lingua Playlist for iOS and Android.',
  openGraph: {
    title: 'Lingua Playlist — Learn languages by listening',
    description: 'Your sentences. Your pace. Your language learning playlist for iOS and Android.',
    type: 'website',
  },
  icons: { icon: '/icon.png', apple: '/icon.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
