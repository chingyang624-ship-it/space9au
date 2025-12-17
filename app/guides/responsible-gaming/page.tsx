import type { Metadata } from 'next';
import ResponsibleGamingClient from './responsible-gaming-client';

export const metadata: Metadata = {
  title: 'Responsible Gaming Guide | Safe Online Gambling in Australia',
  description:
    'Complete guide to responsible gambling in Australia. Learn how to gamble safely, set limits, recognize problem gambling, and access support resources.',
  keywords: [
    'responsible gambling',
    'safe gambling guide',
    'problem gambling signs',
    'gambling addiction help',
    'self-exclusion Australia',
    'Gambler\'s Help',
    'gambling limits',
    'play it safe',
    'gambling addiction recovery',
  ],
  alternates: {
    canonical: 'https://space9au.net/guides/responsible-gaming',
  },
  openGraph: {
    title: 'Responsible Gaming Guide | Safe Online Gambling',
    description: 'Learn how to gamble safely and recognize problem gambling signs.',
    url: 'https://space9au.net/guides/responsible-gaming',
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

export default function ResponsibleGaming() {
  return <ResponsibleGamingClient />;
}
