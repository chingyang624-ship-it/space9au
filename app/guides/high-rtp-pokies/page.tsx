import type { Metadata } from 'next';
import HighRTPClient from './high-rtp-client';

export const metadata: Metadata = {
  title: 'High RTP Pokies Guide | Best Australian Online Slots 2024',
  description:
    'Complete guide to high RTP pokies in Australia. Learn which online pokies offer the best payouts, how RTP works, and strategies to find high RTP games.',
  keywords: [
    'high RTP pokies',
    'best RTP pokies Australia',
    'highest paying online slots',
    'RTP percentage guide',
    'profitable pokies',
    'online slots Australia',
    'RTP explained',
    'best paying pokies',
    'low volatility pokies',
  ],
  openGraph: {
    title: 'High RTP Pokies Guide | Best Payout Slots',
    description: 'Find the highest RTP pokies and learn strategies to maximize your winnings.',
    url: 'https://space9au.net/guides/high-rtp-pokies',
    type: 'article',
  },
};

export default function HighRTPPokie() {
  return <HighRTPClient />;
}
