import type { Metadata } from 'next';
import FAQClient from './faq-client';

export const metadata: Metadata = {
  title: 'FAQ | Common Questions About Online Pokies & Casino Gaming',
  description:
    'Frequently asked questions about online pokies, casino games, bonuses, payments, and responsible gaming in Australia. Get answers to common concerns.',
  keywords: [
    'online casino FAQ',
    'pokies questions answered',
    'how to play pokies',
    'casino bonuses explained',
    'payment methods pokies',
    'gambling FAQs',
    'online gaming help',
    'casino customer support',
  ],
  canonical: 'https://space9au.net/faq',
  openGraph: {
    title: 'FAQ | Online Pokies & Casino Questions Answered',
    description: 'Get answers to frequently asked questions about online gaming in Australia.',
    url: 'https://space9au.net/faq',
    type: 'website',
  },
};

export default function FAQ() {
  return <FAQClient />;
}
