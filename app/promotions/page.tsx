'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Promotions() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <section
        className="relative border-b-2 border-amber-500 min-h-96"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F155e921679114563800a312c4a646dd3)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-6">
            Exclusive Promotions & Bonuses
          </h1>
          <p className="text-xl text-gray-300">
            Maximize your wins with SPACE9's incredible promotional offers and bonus packages
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Welcome to SPACE9 Promotions</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-800 p-8 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold mb-4">Welcome Bonus Package</h3>
              <p className="text-gray-200">
                New players receive an exclusive welcome bonus featuring free spins and bonus credits to get started on the right foot.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold mb-4">Free Spins Promotions</h3>
              <p className="text-gray-200">
                Enjoy regular free spins on selected pokies and games. These bonus spins give you more chances to win without risking your own money.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold mb-4">VIP Rewards Program</h3>
              <p className="text-gray-200">
                Our VIP members enjoy exclusive benefits including higher bonuses, faster withdrawals, and personalized customer support.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold mb-4">Live Casino Bonuses</h3>
              <p className="text-gray-200">
                Special bonuses designed specifically for live dealer games including blackjack, baccarat, and roulette.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://space9au.com/RFGOOGLESEO99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-lg transition-colors text-lg"
            >
              Claim Your Bonus Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
