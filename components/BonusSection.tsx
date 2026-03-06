'use client';

import Link from 'next/link';

export default function BonusSection() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
          Exclusive SPACE9 Casino Bonuses & Promotions
        </h2>

        <p className="text-gray-700 text-center mb-12 text-lg max-w-3xl mx-auto">
          Getting started at SPACE9 means more than just access to premium games—it means starting with an
          advantage. We offer some of the most competitive casino bonuses in Australia to boost your bankroll:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Generous Welcome Package */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-amber-500">
            <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
              <span className="text-2xl">🎁</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Generous Welcome Package</h3>
            <p className="text-gray-700">
              New players are greeted with a lucrative deposit match bonus to double their initial playing power.
            </p>
          </div>

          {/* Daily Free Spins */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-amber-500">
            <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Daily Free Spins</h3>
            <p className="text-gray-700">
              Regular players unlock daily free spins on selected high-RTP pokies from top providers like Pragmatic
              Play and JILI.
            </p>
          </div>

          {/* VIP Cashback Offers */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-amber-500">
            <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">VIP Cashback Offers</h3>
            <p className="text-gray-700">
              Play with peace of mind knowing our VIP program rewards your loyalty with weekly cashback on losses.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-amber-500 text-center">
          <p className="text-gray-700 mb-6 text-lg">
            Claim your sign-up bonus today by visiting the Promotions page and start playing with extra funds.
          </p>
          <Link
            href="/promotions"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            View All Promotions & Bonuses →
          </Link>
        </div>
      </div>
    </section>
  );
}
