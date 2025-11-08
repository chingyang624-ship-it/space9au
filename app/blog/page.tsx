import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: "SPACE9 Casino Blog - Pokies Tips, Betting Strategies & Expert Guides",
  description: "Discover expert tips, winning strategies, and comprehensive guides for pokies, live casino games, and sports betting on SPACE9 Casino Blog.",
  keywords: ['casino blog', 'pokies tips', 'betting strategies', 'casino guides', 'SPACE9 blog'],
  openGraph: {
    title: "SPACE9 Casino Blog - Pokies Tips, Betting Strategies & Expert Guides",
    description: "Expert guides and winning strategies for online casino games and sports betting.",
    url: 'https://space9au.net/blog',
    type: 'website',
  },
};

export default function Blog() {
  return <BlogClient />;
}
