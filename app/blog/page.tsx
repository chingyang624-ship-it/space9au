import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'SPACE9 Blog | Pokies Tips, Casino Strategies & Winning Guides',
  description:
    'Expert pokies tips, RTP guides, bankroll management, live dealer strategies, and sports betting guides for Australian players. Learn winning techniques from industry experts.',
  keywords: [
    'pokies tips and strategies',
    'casino guides Australia',
    'bankroll management',
    'RTP pokies guide',
    'live casino strategies',
    'free spins strategy',
    'sports betting guide',
    'online gaming tips',
    'casino blog Australia',
  ],
  alternates: {
    canonical: 'https://space9au.net/blog',
  },
  openGraph: {
    title: 'SPACE9 Blog | Expert Pokies & Casino Strategies',
    description:
      'Comprehensive guides for improving your gaming skills and winning potential at online casinos.',
    url: 'https://space9au.net/blog',
    type: 'website',
  },
};

export default function Blog() {
  return <BlogClient />;
}
