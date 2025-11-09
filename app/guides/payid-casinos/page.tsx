import type { Metadata } from 'next';
import PayIDClient from './payid-client';

export const metadata: Metadata = {
  title: 'PayID Online Casinos Australia | Instant Deposits & Withdrawals',
  description:
    'Complete guide to PayID casinos in Australia. Learn how to use PayID for instant casino deposits, fast withdrawals, and secure payments.',
  keywords: [
    'PayID online casinos',
    'PayID casino deposits',
    'PayID poker',
    'PayID gambling Australia',
    'instant casino deposits',
    'fastest casino withdrawal',
    'PayID Osko',
    'real time payments Australia',
  ],
  canonical: 'https://space9au.net/guides/payid-casinos',
  openGraph: {
    title: 'PayID Online Casinos | Fast Deposits & Withdrawals',
    description: 'Use PayID for instant, secure casino deposits and withdrawals in Australia.',
    url: 'https://space9au.net/guides/payid-casinos',
    type: 'article',
  },
};

export default function PayIDCasinos() {
  return <PayIDClient />;
}
