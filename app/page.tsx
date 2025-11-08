import type { Metadata } from 'next';
import HomeClient from './home-client';

export const metadata: Metadata = {
  title: "SPACE9 Casino - Australia's #1 Online Pokies & Casino Games Guide",
  description:
    'Master pokies & casino games with expert strategies. Learn winning tips, bankroll management, live dealer strategies & sports betting from SPACE9 Casino.',
  keywords: ['space9 casino', 'pokies tips', 'casino strategies', 'online casino Australia'],
  openGraph: {
    title: "SPACE9 Casino - Australia's #1 Online Pokies & Casino Games Guide",
    description: 'Master pokies & casino games with expert strategies from SPACE9 Casino.',
    url: 'https://space9au.net',
    type: 'website',
  },
};

export default function Home() {
  return <HomeClient />;
}
