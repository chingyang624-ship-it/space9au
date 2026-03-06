'use client';

import Link from 'next/link';
import { Facebook, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CertificationsSection from '@/components/CertificationsSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-96"
        style={{
          backgroundImage:
            'url(https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6f5032b3a24942e29dbbb42dd41c50a6)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className="absolute inset-0 bg-black/40"
          style={{
            backgroundImage:
              'url(https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6f5032b3a24942e29dbbb42dd41c50a6?format=webp)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            SPACE9: Your Trusted Gateway To High Wins
          </h1>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
            <p>
              SPACE9 is Australia's number one online casino of 2026! We've ascended the charts by
              constantly delivering secure and enjoyable gaming that is out of this world. Whether
              you are a seasoned player or a novice gambler taking your first steps into online
              gaming, SPACE9 has it all for everyone who would like to have an unforgettable gaming
              experience at any time.
            </p>

            <p className="bg-white/10 p-6 rounded-lg border-l-4 border-amber-400 mt-8">
              <strong className="text-amber-300 block mb-3">Our Mission: Redefining Australian Online Gaming</strong>
              Founded by a team of iGaming industry experts, SPACE9 was built with one clear mission:
              to provide Australian players with a transparent, highly secure, and exceptionally
              entertaining online casino experience. We know what matters most to you—lightning-fast
              PayID withdrawals, high RTP (Return to Player) pokies, and 24/7 localized support. We
              aren't just another casino; we are your trusted partner in responsible and premium gaming.
            </p>

            <p>
              At SPACE9, we are proud to offer an extensive range of the most thrilling online casino
              games tailored for Australian players. Experience the best online pokies in Australia
              featuring stunning graphics, high volatility, and massive progressive jackpots. Find
              your way to the riches through{' '}
              <Link href="/guides/choose-legal-online-casinos" className="text-amber-300 hover:text-amber-200 underline">
                blackjack
              </Link>{' '}
              or explore our wide selection of{' '}
              <Link href="/guides/high-rtp-pokies" className="text-amber-300 hover:text-amber-200 underline">
                table games
              </Link>
              . We cater for every kind of gambler and with our ever-increasing library there is
              always a new game to discover.
            </p>

            <p>
              But SPACE9 isn't all about the games (although they are pretty outstanding). We also
              strive to offer excellent customer service and unbeatable rewards. Our customer care
              team is always ready to help you with any inquiries you may have, with 24/7 support
              for Australian players. Our loyalty program provides generous rewards and exclusive
              perks for your continued patronage. So, join thousands of satisfied Australian players
              and experience premium online gaming at SPACE9!
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-12 mb-6">
            Explore Our Complete Selection Of Online Casino Games
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
            <p>
              Discover the world's best online pokies and casino games on SPACE9! Our library
              features hundreds of high RTP pokies, with classic 3-reel slots and feature-filled
              video pokies that deliver thrilling gameplay and big wins.
            </p>

            <p>
              Try your luck at live blackjack, roulette, and baccarat against professional dealers.
              We also provide specialty games including poker for competitive gaming experiences.
              Whether you're looking for{' '}
              <Link href="/guides/no-deposit-pokies" className="text-amber-300 hover:text-amber-200 underline">
                no deposit pokies
              </Link>{' '}
              or high-stakes games, SPACE9 has the perfect match for your gaming style.
            </p>

            <p>
              Our sports betting section is equally comprehensive, allowing Australian players to
              bet on football, tennis, basketball, and a wide range of sporting events. With real-time
              odds and instant PayID payouts, SPACE9 is your complete platform for online gaming and
              sports betting in Australia.
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-12 mb-6">
            Security, Fair Gaming & Lightning-Fast Australian Payouts
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
            <p>
              At SPACE9, we take your privacy and safety very seriously. We use industry-leading
              SSL encryption technology to protect your personal data and financial transactions. All
              payments are processed securely with PCI-DSS compliance. We also maintain the highest
              standards of fair gaming with certified Random Number Generators (RNG) audited by
              independent third parties, ensuring every spin is truly random and fair.
            </p>

            <p>
              Beyond security, SPACE9 is committed to responsible gaming. We provide self-exclusion
              tools, betting limits, and access to professional help resources. Our loyalty program
              rewards your continued play with points convertible to cash prizes, free spins, and
              exclusive promotions. Join our VIP program to unlock additional benefits and personalized
              support.
            </p>

            <p>
              SPACE9 offers competitive bonuses and promotions designed to maximize your bankroll.
              Claim your welcome bonus for new players, enjoy daily{' '}
              <Link href="/guides/free-spins-strategy" className="text-amber-300 hover:text-amber-200 underline">
                free spins
              </Link>{' '}
              on selected pokies, and take advantage of our weekly cashback rewards. Check our{' '}
              <Link href="/promotions" className="text-amber-300 hover:text-amber-200 underline">
                promotions page
              </Link>{' '}
              regularly for the latest PayID bonus offers and seasonal promotions tailored for Australian players.
            </p>

            <p>
              Join thousands of Australian players who trust SPACE9 for fast PayID withdrawals,
              fair gaming, and premium customer support. Experience the difference of a truly
              player-focused online casino platform. Sign up today and start your winning journey!
            </p>
          </div>
        </div>
      </section>

      <CertificationsSection />

      <TestimonialSection />

      {/* Connect With Us Section */}
      <section className="bg-gradient-to-b from-amber-600 to-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Connect With Us</h2>
          <p className="text-white text-lg mb-8">
            Stay updated with the latest promotions, games and exclusive offers. Follow us on social
            media and join our community of players.
          </p>

          <div className="flex justify-center gap-8 mb-8">
            <a
              href="https://www.facebook.com/profile.php?id=100093505265984"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-white hover:bg-gray-100 transition-colors"
              title="Follow us on Facebook"
            >
              <Facebook size={28} className="text-blue-600" />
            </a>

            <a
              href="https://t.me/+HplU5b6JfLBmNjk1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-white hover:bg-gray-100 transition-colors"
              title="Join us on Telegram"
            >
              <Send size={28} className="text-blue-500" />
            </a>
          </div>

          <p className="text-white text-lg font-semibold mb-6">Ready to play on the go?</p>

          <a
            href="https://www.space9aush5api.site/uploads/appwrap.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-amber-600 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Download SPACE9 App
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
