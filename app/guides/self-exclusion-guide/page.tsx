import type { Metadata } from 'next';
import SelfExclusionClient from './self-exclusion-client';

export const metadata: Metadata = {
  title: 'Self-Exclusion Guide | BetStop Australia | Gambling Break',
  description:
    'Complete guide to self-exclusion in Australia. Learn how to use BetStop, state-based programs, and casino self-exclusion to take a gambling break.',
  keywords: [
    'self-exclusion Australia',
    'BetStop',
    'gambling self-exclusion',
    'take a gambling break',
    'exclude from casinos',
    'problem gambling help',
    "Gambler's Help",
    'gambling addiction tools',
  ],
  alternates: {
    canonical: 'https://space9au.net/guides/self-exclusion-guide',
  },
  openGraph: {
    title: 'Self-Exclusion Guide | BetStop & Gambling Breaks',
    description:
      'Learn how to self-exclude from gambling in Australia using BetStop and other tools.',
    url: 'https://space9au.net/guides/self-exclusion-guide',
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

export default function SelfExclusionGuide() {
  return <SelfExclusionClient />;
}
