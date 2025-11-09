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
  canonical: 'https://space9au.net/guides/no-deposit-pokies',
  openGraph: {
    title: 'No Deposit Pokies Australia | Free Spins & Bonuses',
    description: 'Find the best no deposit pokie offers and free spins in Australia.',
    url: 'https://space9au.net/guides/no-deposit-pokies',
    type: 'article',
  },
};

export default function NoDepositPokies() {
  return <NoDepositClient />;
}
