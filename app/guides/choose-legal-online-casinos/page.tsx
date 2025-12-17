import type { Metadata } from 'next';
import LegalCasinosClient from './legal-casinos-client';

export const metadata: Metadata = {
  title: 'How to Choose a Legal Online Casino in Australia | Safety Guide',
  description:
    'Complete guide to choosing legal, safe online casinos in Australia. Learn what to look for in licensing, security, and player protections.',
  keywords: [
    'legal online casinos Australia',
    'safe online casino',
    'licensed casino Australia',
    'casino licensing',
    'online casino safety',
    'choose casino',
    'casino regulation',
    'protected casino gaming',
  ],
  alternates: {
    canonical: 'https://space9au.net/guides/choose-legal-online-casinos',
  },
  openGraph: {
    title: 'How to Choose a Safe, Legal Online Casino in Australia',
    description: 'Guide to finding licensed, regulated casinos that protect Australian players.',
    url: 'https://space9au.net/guides/choose-legal-online-casinos',
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

export default function LegalOnlineCasinos() {
  return <LegalCasinosClient />;
}
