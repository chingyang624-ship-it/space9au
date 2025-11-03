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

      {/* Guides & Tips Section */}
      <section className="bg-gradient-to-b from-slate-100 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Popular Guides & Winning Strategies
          </h2>
          <p className="text-gray-700 text-center mb-12 text-lg">
            Learn from our expert guides to improve your gaming strategy and maximize wins at SPACE9
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How to Choose High RTP Pokies</h3>
              <p className="text-gray-700 mb-4">Master the art of selecting pokies with the best Return to Player percentages to maximize your winnings.</p>
              <a href="https://space9au.com/guides/high-rtp-pokies" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bankroll Management Strategy</h3>
              <p className="text-gray-700 mb-4">Learn proven techniques to manage your casino budget effectively and extend your playing sessions.</p>
              <a href="https://space9au.com/guides/bankroll-management" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Blackjack Winning Tips</h3>
              <p className="text-gray-700 mb-4">Discover professional strategies for live dealer blackjack including basic strategy and card counting basics.</p>
              <a href="https://space9au.com/guides/live-blackjack-tips" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Free Spins Strategy Guide</h3>
              <p className="text-gray-700 mb-4">Understand how to maximize free spins and bonus features for bigger payouts on SPACE9 pokies.</p>
              <a href="https://space9au.com/guides/free-spins" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">PayID Casino Safety Guide</h3>
              <p className="text-gray-700 mb-4">Everything you need to know about safe PayID deposits and responsible gambling at SPACE9.</p>
              <a href="https://space9au.com/guides/payid-safety" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sports Betting Odds Explained</h3>
              <p className="text-gray-700 mb-4">Learn how to read betting odds, calculate potential winnings, and make informed sports betting decisions.</p>
              <a href="https://space9au.com/guides/sports-betting-odds" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
