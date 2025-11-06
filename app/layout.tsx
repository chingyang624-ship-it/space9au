import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://space9au.net"),
  title: "SPACE9 Casino - Australia's No.1 Online Casino & Pokies Guide",
  description:
    "Australia's trusted online casino with expert pokies guides & winning strategies. Play slots, live dealer games, sports betting. Download SPACE9 on iOS & Android.",
  keywords:
    "space9 casino, pokies Australia, online casino Australia, live dealer games, sports betting",
  authors: [{ name: "SPACE9 Casino" }],
  creator: "SPACE9 Casino",
  publisher: "SPACE9 Casino",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://space9au.net",
    title: "SPACE9 Casino - Australia's No.1 Online Casino",
    description:
      "Australia's trusted online casino with expert pokies guides & winning strategies",
    siteName: "SPACE9 Casino",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPACE9 Casino",
    description: "Australia's trusted online casino with expert pokies guides",
  },
  verification: {
    google: "mpcaGYDcDF26sdKJcB29wNGAkSHr7b9S_XDLWhkqRyY",
  },
  icons: {
    icon: "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2f967086f7e14485a125f30caf61f462?format=webp&width=800",
    apple:
      "https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2f967086f7e14485a125f30caf61f462?format=webp&width=800",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="sitemap"
          type="application/xml"
          href="https://space9au.net/sitemap.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SPACE9 Casino",
              url: "https://space9au.net",
              description:
                "Australia's trusted online casino with slots, live games, and sports betting",
              potentialAction: {
                "@type": "DownloadAction",
                target: "https://space9au.com/RFGOOGLESEO99",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
