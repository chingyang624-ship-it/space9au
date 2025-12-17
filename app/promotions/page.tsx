import type { Metadata } from 'next';
import PromotionsClient from './promotions-client';

export const metadata: Metadata = {
  title: 'SPACE9 Promotions | Exclusive Bonuses & Free Spins Australia',
  description:
    'Claim exclusive welcome bonuses, free spins, and VIP rewards at SPACE9 Casino. Maximize your bankroll with daily promotions for Australian players.',
  keywords: [
    'casino promotions Australia',
    'welcome bonus pokies',
    'free spins offer',
    'VIP rewards',
    'casino bonuses Australia',
    'exclusive offers',
    'daily promotions',
    'free spins no deposit',
  ],
  alternates: {
    canonical: 'https://space9au.net/promotions',
  },
  openGraph: {
    title: 'SPACE9 Promotions | Exclusive Bonuses & Free Spins',
    description:
      'Claim amazing bonuses and free spins at SPACE9. Maximize your gaming experience with our latest promotions.',
    url: 'https://space9au.net/promotions',
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
};

export default function Promotions() {
  return <PromotionsClient />;
}
