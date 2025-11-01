import { useState } from 'react';
import BK8Header from '@/components/BK8Header';
import BK8EsportsHero from '@/components/BK8EsportsHero';
import BK8EsportsWhatIs from '@/components/BK8EsportsWhatIs';
import BK8EsportsWhy from '@/components/BK8EsportsWhy';
import BK8EsportsGames from '@/components/BK8EsportsGames';
import BK8EsportsProviders from '@/components/BK8EsportsProviders';
import BK8EsportsFAQ from '@/components/BK8EsportsFAQ';
import BK8Footer from '@/components/BK8Footer';

export default function BK8Esports() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <BK8Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <BK8EsportsHero />
      <BK8EsportsWhatIs />
      <BK8EsportsWhy />
      <BK8EsportsGames />
      <BK8EsportsProviders />
      <BK8EsportsFAQ />
      <BK8Footer />
    </div>
  );
}
