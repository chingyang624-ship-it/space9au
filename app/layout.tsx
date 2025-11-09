import type { Metadata } from 'next';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import '@/global.css';

export const metadata: Metadata = {
  title: {
    default: "SPACE9 Casino - Australia's No.1 Online Casino & Pokies Guide",
    template: '%s | SPACE9 Casino',
  },
  description:
    "Australia's trusted online casino with expert pokies guides & winning strategies. Play slots, live dealer games, sports betting. 24/7 support.",
  keywords: [
    'space9 casino',
    'pokies Australia',
    'online casino',
    'live dealer games',
    'sports betting',
  ],
  authors: [{ name: 'SPACE9 Casino' }],
  creator: 'SPACE9 Casino',
  publisher: 'SPACE9 Casino',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://space9au.net',
    title: "SPACE9 Casino - Australia's No.1 Online Casino & Pokies Guide",
    description:
      "Australia's trusted online casino with expert pokies guides & winning strategies.",
    siteName: 'SPACE9 Casino',
    images: [
      {
        url: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2f967086f7e14485a125f30caf61f462?format=webp&width=1200',
        width: 1200,
        height: 630,
        alt: 'SPACE9 Casino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPACE9 Casino',
    description: "Australia's trusted online casino",
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2f967086f7e14485a125f30caf61f462?format=webp&width=1200',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    'google-site-verification': 'mpcaGYDcDF26sdKJcB29wNGAkSHr7b9S_XDLWhkqRyY',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2f967086f7e14485a125f30caf61f462?format=webp&width=800"
        />
        <link
          rel="apple-touch-icon"
          href="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2f967086f7e14485a125f30caf61f462?format=webp&width=800"
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SPACE9 Casino',
              url: 'https://space9au.net',
              logo: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc0a592f10b9e4c43978276155259ccc9',
              sameAs: ['https://space9au.com'],
            }),
          }}
        />
      </head>
      <body>
        <TooltipProvider>
          <Toaster />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
