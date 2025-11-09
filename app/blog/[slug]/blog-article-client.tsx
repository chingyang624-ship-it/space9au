'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedGuides from '@/components/RelatedGuides';

interface BlogArticleClientProps {
  slug: string;
}

const blogArticles: Record<string, any> = {
  'how-to-win-more-online-casino': {
    title: 'How to Win More at Australian Online Casinos - Expert Strategies & Tips',
    date: '2024-02-10',
    category: 'Casino Strategies',
    readTime: '8 min read',
    excerpt:
      'Discover proven techniques and strategies that separate winning players from casual gamblers.',
    content: `<h2>1. Master Bankroll Management</h2>
    <p>The foundation of successful casino gaming is effective bankroll management. Set aside money dedicated solely to gambling and manage it wisely.</p>
    <h2>2. Choose Games with Higher RTP</h2>
    <p>Focus on games with RTP above 96% for better long-term odds. At SPACE9, we offer pokies and games with competitive RTPs ranging from 95% to 98%.</p>
    <h2>3. Understand Game Volatility</h2>
    <p>Low volatility games pay frequently but with smaller amounts. High volatility games have longer dry spells but bigger payouts.</p>`,
  },
  'australian-pokies-tips': {
    title: 'Australian Pokies Tips & High RTP Strategies - Win More Consistently',
    date: '2024-02-08',
    category: 'Pokies Tips',
    readTime: '10 min read',
    excerpt:
      'Master the art of pokies playing with expert tips on RTP percentages, volatility, and betting strategies.',
    content: `<h2>Understanding Pokies RTP</h2>
    <p>RTP (Return to Player) is the percentage of all wagered money a pokie will pay back over time. Higher RTP means better odds for players.</p>`,
  },
  'sports-betting-strategies': {
    title: 'Sports Betting Strategies for Australians - Odds, Research & Bankroll Tips',
    date: '2024-02-06',
    category: 'Sports Betting',
    readTime: '9 min read',
    excerpt:
      'Understand sports betting odds, learn research techniques, and discover bankroll management strategies.',
    content: `<h2>Understanding Betting Odds</h2>
    <p>Learn how to read and interpret different odds formats to make informed betting decisions.</p>`,
  },
  'live-casino-winning-tips': {
    title: 'Live Casino Winning Tips - Blackjack, Baccarat & Roulette Strategies',
    date: '2024-02-04',
    category: 'Live Casino',
    readTime: '11 min read',
    excerpt:
      'Discover proven strategies for live dealer games including blackjack basic strategy and baccarat patterns.',
    content: `<h2>Blackjack Strategy</h2>
    <p>Master the basics of blackjack including when to hit, stand, double down, or split.</p>`,
  },
  'bankroll-management': {
    title: 'Complete Bankroll Management Guide - Extend Your Casino Sessions',
    date: '2024-02-02',
    category: 'Bankroll Management',
    readTime: '7 min read',
    excerpt: 'Master bankroll management to play longer and reduce losses.',
    content: `<h2>Setting Your Bankroll</h2>
    <p>Determine how much money you can afford to risk and set that as your gambling budget.</p>`,
  },
  'free-spins-strategy': {
    title: 'Free Spins Strategy Guide - Maximize Bonus Features & Payouts',
    date: '2024-01-31',
    category: 'Pokies Tips',
    readTime: '6 min read',
    excerpt: 'Learn how to make the most of free spins and bonus features on SPACE9 pokies.',
    content: `<h2>Understanding Free Spins</h2>
    <p>Free spins are bonus features that allow you to spin without using your own money.</p>`,
  },
};

export default function BlogArticleClient({ slug }: BlogArticleClientProps) {
  const article = blogArticles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-amber-600 hover:text-amber-700">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="text-amber-600 hover:text-amber-700">
            Home
          </Link>
          <span>→</span>
          <Link href="/blog" className="text-amber-600 hover:text-amber-700">
            Blog
          </Link>
          <span>→</span>
          <span className="text-gray-900 font-semibold">{article.title}</span>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <span>Published: {article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{article.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{article.excerpt}</p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none space-y-8 mb-12">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply These Strategies?</h3>
          <p className="mb-6">
            Start playing at SPACE9 Casino with expert strategies and maximize your winnings today.
          </p>
          <a
            href="https://space9au.com/RFGOOGLESEO99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Play at SPACE9 Now <ArrowRight size={20} />
          </a>
        </div>
      </article>

      <RelatedGuides currentPage={`/blog/${slug}`} />
      <Footer />
    </div>
  );
}
