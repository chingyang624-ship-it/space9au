import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GameTabs from '@/components/GameTabs';
import ContentSection from '@/components/ContentSection';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    useSEO({
      title: 'SPACE9 Casino - Australia\'s No.1 Online Casino App | iOS & Android',
      description: 'Australia\'s most trusted online casino with slots, live dealer games, and sports betting. Download SPACE9 on iOS & Android. 24/7 support, PayID deposits, and exclusive promotions.',
      keywords: 'space9 casino, online casino Australia, pokies games, live dealer casino, sports betting, iOS android app, PayID casino',
      canonicalUrl: 'https://space9au.net',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SPACE9 Casino',
        url: 'https://space9au.net',
        description: 'Australia\'s trusted online casino with slots, live games, and sports betting',
        potentialAction: {
          '@type': 'DownloadAction',
          target: 'https://space9au.com/RFGOOGLESEO99'
        }
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <GameTabs />
      <ContentSection />
      <Footer />
    </div>
  );
}
