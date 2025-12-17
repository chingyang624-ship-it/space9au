import type { Metadata } from 'next';
import HomeClient from './home-client';

export const metadata: Metadata = {
  title: "SPACE9: Australia's Best Online Pokies & Casino Guide",
  description:
    'Master online pokies, live casino games & sports betting with SPACE9. Expert strategies for Australian players including RTP guides, bankroll management & responsible gaming tips.',
  keywords: [
    'online pokies Australia',
    'best online casino Australia',
    'pokies tips and strategies',
    'live casino games',
    'Australian casino guide',
    'RTP pokies',
    'bankroll management',
    'free spins strategy',
    'online gambling Australia',
    'responsible gaming',
  ],
  alternates: {
    canonical: 'https://space9au.net',
  },
  openGraph: {
    title: "SPACE9: Australia's Best Online Pokies & Casino Guide",
    description:
      'Expert strategies for online pokies, live dealer games & sports betting. Trusted guide for Australian players.',
    url: 'https://space9au.net',
    type: 'website',
    images: [
      {
        url: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
        width: 1200,
        height: 630,
        alt: 'SPACE9 Casino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SPACE9: Australia's Best Online Pokies & Casino Guide",
    description:
      'Master online pokies & casino games with expert strategies. Responsible gaming guide for Australia.',
  },
};

export default function Home() {
  return <HomeClient />;
}
