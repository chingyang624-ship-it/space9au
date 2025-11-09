'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GameTabs from '@/components/GameTabs';
import ContentSection from '@/components/ContentSection';
import Footer from '@/components/Footer';

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <GameTabs />
      <ContentSection />

      {/* Why Choose SPACE9 Section */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Why Choose SPACE9?
          </h2>
          <p className="text-gray-700 text-center mb-12 text-lg max-w-3xl mx-auto">
            Australia's trusted casino guide with expert strategies, comprehensive game reviews, and 24/7 support for responsible gaming
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Guides</h3>
              <p className="text-gray-700">
                Comprehensive guides written by industry experts to help you master winning strategies
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Responsible Gaming</h3>
              <p className="text-gray-700">
                Licensed and regulated platform with tools and resources for safe and responsible play
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Support</h3>
              <p className="text-gray-700">
                Round-the-clock customer support ready to help with any questions or concerns
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Top Providers</h3>
              <p className="text-gray-700">
                Games from leading software providers including Pragmatic Play, JILI, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guides & Tips Section */}
      <section className="bg-gradient-to-b from-slate-100 to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Popular Guides & Winning Strategies
          </h2>
          <p className="text-gray-700 text-center mb-12 text-lg">
            Learn from our expert guides to improve your gaming strategy and maximize wins at SPACE9
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Link
              href="/blog/australian-pokies-tips"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                How to Choose High RTP Pokies
              </h3>
              <p className="text-gray-700 mb-4">
                Master the art of selecting pokies with the best Return to Player percentages to
                maximize your winnings.
              </p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">
                Read Guide →
              </span>
            </Link>

            <Link
              href="/blog/bankroll-management"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Bankroll Management Strategy
              </h3>
              <p className="text-gray-700 mb-4">
                Learn proven techniques to manage your casino budget effectively and extend your
                playing sessions.
              </p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">
                Read Guide →
              </span>
            </Link>

            <Link
              href="/blog/live-casino-winning-tips"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Blackjack Winning Tips</h3>
              <p className="text-gray-700 mb-4">
                Discover professional strategies for live dealer blackjack including basic strategy
                and card counting basics.
              </p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">
                Read Guide →
              </span>
            </Link>

            <Link
              href="/blog/free-spins-strategy"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Free Spins Strategy Guide</h3>
              <p className="text-gray-700 mb-4">
                Understand how to maximize free spins and bonus features for bigger payouts on
                SPACE9 pokies.
              </p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">
                Read Guide →
              </span>
            </Link>

            <Link
              href="/blog/how-to-win-more-online-casino"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                How to Win More at Online Casinos
              </h3>
              <p className="text-gray-700 mb-4">
                Learn comprehensive strategies to maximize your winning potential and reduce losses
                at any online casino.
              </p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">
                Read Guide →
              </span>
            </Link>

            <Link
              href="/blog/sports-betting-strategies"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sports Betting Strategies</h3>
              <p className="text-gray-700 mb-4">
                Learn how to read betting odds, conduct research, and make informed sports betting
                decisions at SPACE9.
              </p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">
                Read Guide →
              </span>
            </Link>
          </div>

          {/* View All Guides CTA */}
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              View All Guides & Blog Articles →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
