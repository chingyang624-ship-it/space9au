'use client';

import Link from 'next/link';

interface RelatedGuide {
  title: string;
  url: string;
  description: string;
}

interface RelatedGuidesProps {
  currentPage?: string;
  guides?: RelatedGuide[];
}

export default function RelatedGuides({ currentPage, guides }: RelatedGuidesProps) {
  const defaultGuides: RelatedGuide[] = [
    {
      title: 'High RTP Pokies Guide',
      url: '/guides/high-rtp-pokies',
      description: 'Learn which online pokies offer the best payouts and RTP strategies.',
    },
    {
      title: 'Responsible Gaming Guide',
      url: '/guides/responsible-gaming',
      description: 'Master safe gambling practices and recognize problem gambling signs.',
    },
    {
      title: 'No Deposit Pokies',
      url: '/guides/no-deposit-pokies',
      description: 'Find the best free spins offers and no deposit bonus deals.',
    },
    {
      title: 'PayID Casinos',
      url: '/guides/payid-casinos',
      description: 'Use PayID for instant deposits and fast withdrawals.',
    },
    {
      title: 'Choose Legal Online Casinos',
      url: '/guides/choose-legal-online-casinos',
      description: 'Learn how to find safe, licensed casinos that protect Australian players.',
    },
    {
      title: 'Self-Exclusion Guide',
      url: '/guides/self-exclusion-guide',
      description: 'Take control with BetStop and self-exclusion tools.',
    },
  ];

  const blogGuides: RelatedGuide[] = [
    {
      title: 'How to Win More at Online Casinos',
      url: '/blog/how-to-win-more-online-casino',
      description: 'Discover proven strategies that separate winning players from casual gamblers.',
    },
    {
      title: 'Australian Pokies Tips',
      url: '/blog/australian-pokies-tips',
      description: 'Master pokies with expert tips on RTP, volatility, and betting strategies.',
    },
    {
      title: 'Sports Betting Strategies',
      url: '/blog/sports-betting-strategies',
      description: 'Understand odds, research techniques, and bankroll management.',
    },
    {
      title: 'Live Casino Winning Tips',
      url: '/blog/live-casino-winning-tips',
      description: 'Discover strategies for blackjack, baccarat, and roulette.',
    },
    {
      title: 'Bankroll Management Guide',
      url: '/blog/bankroll-management',
      description: 'Extend your casino sessions and reduce losses with smart management.',
    },
    {
      title: 'Free Spins Strategy Guide',
      url: '/blog/free-spins-strategy',
      description: 'Maximize bonus features and payouts from free spins offers.',
    },
  ];

  const selectedGuides = guides || defaultGuides;
  const filteredGuides = selectedGuides.filter((guide) => guide.url !== currentPage).slice(0, 3);

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center">
          Related Guides & Articles
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Expand your knowledge with our related gaming guides and expert strategies.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide, idx) => (
              <Link
                key={idx}
                href={guide.url}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-amber-400 group"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center text-amber-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Read More →
                </div>
              </Link>
            ))
          ) : (
            [0, 1, 2].map((idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">Related Guide {idx + 1}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore more gaming strategies and guides.
                </p>
                <div className="flex items-center text-amber-700 font-semibold text-sm">
                  Read More →
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Explore All Guides</h3>
          <p className="text-gray-600 mb-6">
            Discover more tips, strategies, and expert guides to improve your gaming experience.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/guides/high-rtp-pokies"
              className="inline-block bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition font-semibold"
            >
              Browse All Guides
            </Link>
            <Link
              href="/blog"
              className="inline-block bg-white text-amber-700 px-6 py-2 rounded-lg border-2 border-amber-700 hover:bg-amber-50 transition font-semibold"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
