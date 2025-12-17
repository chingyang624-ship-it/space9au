import type { Metadata } from 'next';
import ComplianceClient from './compliance-client';

export const metadata: Metadata = {
  title: 'Compliance & Responsible Gaming | SPACE9 Casino Australia',
  description:
    "Learn about SPACE9's commitment to responsible gaming, legal compliance, player protection, and industry regulations in Australia. Age verification and gambling support resources.",
  keywords: [
    'responsible gaming Australia',
    'online casino compliance',
    'gambling help Australia',
    'problem gambling support',
    'player protection',
    'gambling licensing Australia',
    "Gambler's Help",
    'self-exclusion',
  ],
  alternates: {
    canonical: 'https://space9au.net/compliance',
  },
  openGraph: {
    title: 'Compliance & Responsible Gaming | SPACE9',
    description: 'SPACE9 commitment to responsible gaming, compliance, and player protection.',
    url: 'https://space9au.net/compliance',
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

export default function Compliance() {
  return <ComplianceClient />;
}
