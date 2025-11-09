import type { Metadata } from 'next';
import AboutClient from './about-client';

export const metadata: Metadata = {
  title: "About SPACE9 Casino | Trusted Australian Online Gaming Platform",
  description:
    'Learn about SPACE9 - Australia\'s trusted online casino guide with expert pokies strategies, live dealer games, PayID support, and responsible gaming commitment.',
  keywords: [
    'about SPACE9 casino',
    'online casino Australia trusted',
    'Australian pokies guide',
    'live dealer games Australia',
    'PayID casino Australia',
    'responsible gaming',
    'casino licensing Australia',
  ],
  alternates: {
    canonical: 'https://space9au.net/about',
  },
  openGraph: {
    title: "About SPACE9 | Australia's Trusted Casino Guide",
    description:
      'Expert pokies strategies, live dealer guides, and responsible gaming for Australian players.',
    url: 'https://space9au.net/about',
    type: 'website',
  },
}

export default function AboutUs() {
  return <AboutClient />;
}
