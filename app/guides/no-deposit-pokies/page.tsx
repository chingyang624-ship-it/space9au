import type { Metadata } from 'next';
import NoDepositClient from './no-deposit-client';

export const metadata: Metadata = {
  title: 'No Deposit Pokies Australia | Free Spins Guide 2024',
  description:
    'Complete guide to no deposit pokies in Australia. Find free spins offers, no deposit bonuses, and how to play pokies without deposits.',
  keywords: [
    'no deposit pokies Australia',
    'free spins no deposit',
    'no deposit bonus',
    'free pokies games',
    'claim free spins',
    'online pokies Australia',
    'no deposit casino',
    'free online pokies',
  ],
  alternates: {
    canonical: 'https://space9au.net/guides/no-deposit-pokies',
  },
  openGraph: {
    title: 'No Deposit Pokies Australia | Free Spins & Bonuses',
    description: 'Find the best no deposit pokie offers and free spins in Australia.',
    url: 'https://space9au.net/guides/no-deposit-pokies',
    type: 'article',
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

export default function NoDepositPokies() {
  return <NoDepositClient />;
}
