import type { Metadata } from 'next';
import HomeClient from './home-client';

export const metadata: Metadata = {
  title: "SPACE9 Casino - Australia's #1 Online Pokies & Casino Games Guide",
  description: "Master pokies & casino games with expert strategies. Learn winning tips, bankroll management, live dealer strategies & sports betting from SPACE9 Casino.",
  keywords: ['space9 casino', 'pokies tips', 'casino strategies', 'online casino Australia'],
  openGraph: {
    title: "SPACE9 Casino - Australia's #1 Online Pokies & Casino Games Guide",
    description: "Master pokies & casino games with expert strategies from SPACE9 Casino.",
    url: 'https://space9au.net',
    type: 'website',
  },
};

export default function Home() {
  return <HomeClient />;
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <GameTabs />
      <ContentSection />

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
            <Link href="/blog/australian-pokies-tips" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How to Choose High RTP Pokies</h3>
              <p className="text-gray-700 mb-4">Master the art of selecting pokies with the best Return to Player percentages to maximize your winnings.</p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</span>
            </Link>

            <Link href="/blog/bankroll-management" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bankroll Management Strategy</h3>
              <p className="text-gray-700 mb-4">Learn proven techniques to manage your casino budget effectively and extend your playing sessions.</p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</span>
            </Link>

            <Link href="/blog/live-casino-winning-tips" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Blackjack Winning Tips</h3>
              <p className="text-gray-700 mb-4">Discover professional strategies for live dealer blackjack including basic strategy and card counting basics.</p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</span>
            </Link>

            <Link href="/blog/free-spins-strategy" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Free Spins Strategy Guide</h3>
              <p className="text-gray-700 mb-4">Understand how to maximize free spins and bonus features for bigger payouts on SPACE9 pokies.</p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</span>
            </Link>

            <Link href="/blog/how-to-win-more-online-casino" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How to Win More at Online Casinos</h3>
              <p className="text-gray-700 mb-4">Learn comprehensive strategies to maximize your winning potential and reduce losses at any online casino.</p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</span>
            </Link>

            <Link href="/blog/sports-betting-strategies" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500 block">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sports Betting Strategies</h3>
              <p className="text-gray-700 mb-4">Learn how to read betting odds, conduct research, and make informed sports betting decisions at SPACE9.</p>
              <span className="text-amber-600 font-semibold hover:text-amber-700">Read Guide →</span>
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
