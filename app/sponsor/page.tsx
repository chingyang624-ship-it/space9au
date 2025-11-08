import type { Metadata } from 'next';
import SponsorClient from './sponsor-client';

export const metadata: Metadata = {
  title: "SPACE9 Casino Sponsorship - Partner Opportunities",
  description: "Partner with SPACE9 Casino - Australia's leading online gaming platform. Explore sponsorship opportunities and grow your brand with us.",
  keywords: ['casino sponsorship', 'partnership', 'SPACE9 sponsor', 'gaming partnerships'],
  openGraph: {
    title: "SPACE9 Casino Sponsorship - Partner Opportunities",
    description: "Sponsorship opportunities with SPACE9 Casino.",
    url: 'https://space9au.net/sponsor',
    type: 'website',
  },
};

export default function Sponsor() {
  return <SponsorClient />;
}
