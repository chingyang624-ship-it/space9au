import type { Metadata } from 'next';
import PromotionsClient from './promotions-client';

export const metadata: Metadata = {
  title: "SPACE9 Casino Promotions - Exclusive Bonuses & Offers",
  description: "Discover exclusive promotions, welcome bonuses, free spins, and VIP rewards at SPACE9 Casino. Maximize your winnings with our amazing offers.",
  keywords: ['casino promotions', 'welcome bonus', 'free spins', 'casino offers', 'VIP rewards'],
  openGraph: {
    title: "SPACE9 Casino Promotions - Exclusive Bonuses & Offers",
    description: "Exclusive promotions and bonuses for SPACE9 Casino players.",
    url: 'https://space9au.net/promotions',
    type: 'website',
  },
};

export default function Promotions() {
  return <PromotionsClient />;
}
