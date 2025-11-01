import { useState } from 'react';
import BK8Header from '@/components/BK8Header';
import BK8LiveCasinoProviderShowcase from '@/components/BK8LiveCasinoProviderShowcase';
import BK8LiveCasinoHero from '@/components/BK8LiveCasinoHero';
import BK8LiveCasinoWhy from '@/components/BK8LiveCasinoWhy';
import BK8LiveCasinoGames from '@/components/BK8LiveCasinoGames';
import BK8LiveCasinoProviders from '@/components/BK8LiveCasinoProviders';
import BK8LiveCasinoMobile from '@/components/BK8LiveCasinoMobile';
import BK8LiveCasinoFAQ from '@/components/BK8LiveCasinoFAQ';
import BK8Footer from '@/components/BK8Footer';

export default function BK8LiveCasino() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <BK8Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <BK8LiveCasinoProviderShowcase />
      <BK8LiveCasinoHero />
      <BK8LiveCasinoWhy />
      <BK8LiveCasinoGames />
      <BK8LiveCasinoProviders />
      <BK8LiveCasinoMobile />
      <BK8LiveCasinoFAQ />
      <BK8Footer />
    </div>
  );
}
