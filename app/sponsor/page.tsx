import type { Metadata } from 'next';
import SponsorClient from './sponsor-client';

export const metadata: Metadata = {
  title: 'Partner With SPACE9 | Sponsorship & Gaming Partnerships',
  description:
    'Join forces with SPACE9 - Australia\'s leading online casino guide. Explore brand partnerships, sponsorship deals, and collaborative opportunities for gaming businesses.',
  keywords: [
    'casino partnership Australia',
    'sponsorship opportunities',
    'gaming brand partnership',
    'sports sponsorship',
    'casino affiliate program',
    'gaming industry partnership',
    'cooperative marketing',
  ],
  alternates: {
    canonical: 'https://space9au.net/sponsor',
  },
  openGraph: {
    title: 'Partner With SPACE9 | Sponsorship Opportunities',
    description:
      'Build your brand with SPACE9. Explore partnership and sponsorship opportunities in the gaming industry.',
    url: 'https://space9au.net/sponsor',
    type: 'website',
  },
};

export default function Sponsor() {
  return <SponsorClient />;
}
