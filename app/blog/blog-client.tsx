'use client';

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { formatDate } from "@/lib/date-formatter";

const blogPosts = [
  {
    id: "how-to-win-more-online-casino",
    title: "How to Win More at Australian Online Casinos - Expert Strategies",
    excerpt:
      "Learn proven techniques and strategies to maximize your wins at Australian online casinos. From bankroll management to game selection, discover what separates winning players from casual gamblers.",
    date: "2024-02-10",
    category: "Casino Strategies",
    readTime: "8 min read",
    slug: "how-to-win-more-online-casino",
  },
  {
    id: "australian-pokies-tips",
    title:
      "Australian Pokies Tips & High RTP Strategies - Win More Consistently",
    excerpt:
      "Master the art of pokies playing with expert tips on RTP percentages, volatility, and betting strategies. Learn how to choose the best pokies and maximize your winnings on SPACE9.",
    date: "2024-02-08",
    category: "Pokies Tips",
    readTime: "10 min read",
    slug: "australian-pokies-tips",
  },
  {
    id: "sports-betting-strategies",
    title:
      "Sports Betting Strategies for Australians - Odds, Research & Bankroll Tips",
    excerpt:
      "Understand sports betting odds, learn research techniques, and discover bankroll management strategies. Improve your sports betting success rate with expert guidance from SPACE9.",
    date: "2024-02-06",
    category: "Sports Betting",
    readTime: "9 min read",
    slug: "sports-betting-strategies",
  },
  {
    id: "live-casino-winning-tips",
    title:
      "Live Casino Winning Tips - Blackjack, Baccarat & Roulette Strategies",
    excerpt:
      "Discover proven strategies for live dealer games including blackjack basic strategy, baccarat patterns, and roulette betting systems. Learn how professional players approach live casino games.",
    date: "2024-02-04",
    category: "Live Casino",
    readTime: "11 min read",
    slug: "live-casino-winning-tips",
  },
  {
    id: "bankroll-management",
    title: "Complete Bankroll Management Guide - Extend Your Casino Sessions",
    excerpt:
      "Master bankroll management to play longer and reduce losses. Learn about betting units, loss limits, and session management to become a smarter casino player.",
    date: "2024-02-02",
    category: "Bankroll Management",
    readTime: "7 min read",
    slug: "bankroll-management",
  },
  {
    id: "free-spins-strategy",
    title: "Free Spins Strategy Guide - Maximize Bonus Features & Payouts",
    excerpt:
      "Learn how to make the most of free spins and bonus features on SPACE9 pokies. Understand wagering requirements and strategies to turn bonuses into real winnings.",
    date: "2024-01-31",
    category: "Pokies Tips",
    readTime: "6 min read",
    slug: "free-spins-strategy",
  },
];

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            SPACE9 Casino Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Expert Guides, Winning Strategies & Pro Tips for Australian Casino
            Players
          </p>
          <p className="text-lg text-gray-400">
            Learn how to maximize wins at pokies, live casino, and sports
            betting with expert insights from experienced casino players.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-amber-500"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3 flex-grow">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-amber-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Winning at SPACE9?
          </h2>
          <p className="text-lg mb-8 text-amber-100">
            Apply these strategies today and experience the SPACE9 difference.
            Download our app or visit space9au.com to start playing with expert
            strategies.
          </p>
          <a
            href="https://space9au.com/RFGOOGLESEO99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-amber-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Play at SPACE9 Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
