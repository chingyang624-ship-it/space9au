import { useState } from 'react';
import BK8Header from '@/components/BK8Header';
import BK8Features from '@/components/BK8Features';
import BK8GameCategories from '@/components/BK8GameCategories';
import BK8Promotions from '@/components/BK8Promotions';
import BK8VIPProgram from '@/components/BK8VIPProgram';
import BK8MobileApp from '@/components/BK8MobileApp';
import BK8FAQ from '@/components/BK8FAQ';
import BK8LiveCasinoProviderShowcase from '@/components/BK8LiveCasinoProviderShowcase';
import BK8LiveCasinoFeaturedGames from '@/components/BK8LiveCasinoFeaturedGames';
import BK8LiveCasinoHero from '@/components/BK8LiveCasinoHero';
import BK8LiveCasinoWhy from '@/components/BK8LiveCasinoWhy';
import BK8LiveCasinoGames from '@/components/BK8LiveCasinoGames';
import BK8LiveCasinoProviders from '@/components/BK8LiveCasinoProviders';
import BK8LiveCasinoMobile from '@/components/BK8LiveCasinoMobile';
import BK8LiveCasinoFAQ from '@/components/BK8LiveCasinoFAQ';
import BK8EsportsHero from '@/components/BK8EsportsHero';
import BK8EsportsWhatIs from '@/components/BK8EsportsWhatIs';
import BK8EsportsWhy from '@/components/BK8EsportsWhy';
import BK8EsportsGames from '@/components/BK8EsportsGames';
import BK8EsportsProviders from '@/components/BK8EsportsProviders';
import BK8EsportsFAQ from '@/components/BK8EsportsFAQ';
import BK8Footer from '@/components/BK8Footer';

export default function BK8() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <BK8Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main BK8 Hero Section */}
      <section id="slots" className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            BK8: Best Trusted Online Casino Betting Site in Malaysia
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            Welcome to BK8, your premier destination for top-tier online casino entertainment in Asia.{' '}
            <a href="https://bk8mycasino.com/" className="text-blue-600 hover:underline">
              Bk8mycasino.com
            </a>{' '}
            is officially authorized and licensed by BK8 and operates under the regulation of the Malta Gaming Authority. With a powerful mix of exciting games, secure gameplay, and generous promotions, BK8 Malaysia has quickly become the go-to choice for players looking for a premium gambling experience.
          </p>
        </div>
      </section>

      <BK8Features />
      <BK8GameCategories />
      <BK8Promotions />
      <BK8VIPProgram />
      <BK8MobileApp />
      <BK8FAQ />

      {/* Live Casino Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Live Casino</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            Experience the thrill of live casino gaming with our premium selection of live-streamed games. Play with real dealers in real-time and enjoy an authentic casino experience from the comfort of your home.
          </p>
        </div>
      </section>

      <BK8LiveCasinoProviderShowcase />
      <BK8LiveCasinoFeaturedGames />
      <BK8LiveCasinoHero />
      <BK8LiveCasinoWhy />
      <BK8LiveCasinoGames />
      <BK8LiveCasinoProviders />
      <BK8LiveCasinoMobile />
      <BK8LiveCasinoFAQ />

      {/* Esports Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Esports Betting</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            Dive into the world of competitive esports betting with BK8. Bet on your favorite teams and players across popular games and tournaments with competitive odds and exciting opportunities.
          </p>
        </div>
      </section>

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
