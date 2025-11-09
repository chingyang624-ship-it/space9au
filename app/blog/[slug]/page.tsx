import type { Metadata } from 'next';
import BlogArticleClient from './blog-article-client';

interface BlogArticleProps {
  params: {
    slug: string;
  };
}

const blogArticles: Record<string, any> = {
  'how-to-win-more-online-casino': {
    title: 'How to Win More at Australian Online Casinos - Expert Strategies & Tips',
    description:
      'Discover proven techniques and strategies that separate winning players from casual gamblers. Learn bankroll management, game selection, and more.',
    date: '2024-02-10',
    category: 'Casino Strategies',
    readTime: '8 min read',
  },
  'australian-pokies-tips': {
    title: 'Australian Pokies Tips & High RTP Strategies - Win More Consistently',
    description:
      'Master pokies with expert tips on RTP, volatility, and betting. Learn how to choose the best pokies and maximize winnings.',
    date: '2024-02-08',
    category: 'Pokies Tips',
    readTime: '10 min read',
  },
  'sports-betting-strategies': {
    title: 'Sports Betting Strategies for Australians - Odds, Research & Bankroll Tips',
    description:
      'Understand sports betting odds, learn research techniques, and discover bankroll management strategies for better success.',
    date: '2024-02-06',
    category: 'Sports Betting',
    readTime: '9 min read',
  },
  'live-casino-winning-tips': {
    title: 'Live Casino Winning Tips - Blackjack, Baccarat & Roulette Strategies',
    description:
      'Discover proven strategies for live dealer games including blackjack basic strategy, baccarat patterns, and roulette systems.',
    date: '2024-02-04',
    category: 'Live Casino',
    readTime: '11 min read',
  },
  'bankroll-management': {
    title: 'Complete Bankroll Management Guide - Extend Your Casino Sessions',
    description:
      'Master bankroll management to play longer and reduce losses. Learn about betting units, loss limits, and session management.',
    date: '2024-02-02',
    category: 'Bankroll Management',
    readTime: '7 min read',
  },
  'free-spins-strategy': {
    title: 'Free Spins Strategy Guide - Maximize Bonus Features & Payouts',
    description:
      'Learn how to make the most of free spins and bonus features. Understand wagering requirements and strategies for bigger payouts.',
    date: '2024-01-31',
    category: 'Pokies Tips',
    readTime: '6 min read',
  },
};

export async function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogArticleProps): Promise<Metadata> {
  const article = blogArticles[params.slug];

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: [article.category, 'casino', 'strategy', 'gaming', 'SPACE9'],
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://space9au.net/blog/${params.slug}`,
      type: 'article',
    },
  };
}

export default function BlogArticle({ params }: BlogArticleProps) {
  return <BlogArticleClient slug={params.slug} />;
}
