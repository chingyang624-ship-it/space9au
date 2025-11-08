import type { Metadata } from 'next';
import AboutClient from './about-client';

export const metadata: Metadata = {
  title: "About SPACE9 Casino - Australia's #1 Trusted Online Gaming Platform",
  description:
    "Discover SPACE9 Casino - Australia's trusted online gaming platform with expert pokies guides, live dealer games, PayID deposits, and 24/7 support.",
  keywords: ['about SPACE9', 'online casino Australia', 'trusted pokies', 'live dealer games'],
  openGraph: {
    title: "About SPACE9 Casino - Australia's #1 Trusted Online Gaming Platform",
    description: "Learn about SPACE9 - Australia's trusted online gaming platform.",
    url: 'https://space9au.net/about',
    type: 'website',
  },
};

export default function AboutUs() {
  return <AboutClient />;
}
