'use client';

export default function RealMoneySection() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Play Real Money Online Pokies in Australia
        </h2>

        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          As a leading online casino destination, SPACE9 brings the thrill of Vegas directly to your screen. Whether
          you prefer classic 3-reel slots or modern video pokies with Megaways mechanics, our platform delivers an
          unmatched real money gaming experience tailored for Australian players.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Lightning-Fast Deposits Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">⚡</span>
              Lightning-Fast Deposits & Payouts
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We understand that when you win, you want your money fast. That's why SPACE9 supports secure and instant
              payment methods tailored for Aussies, including:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>PayID deposits and withdrawals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Standard bank transfers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Secure credit card processing</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Enjoy instant deposits and lightning-fast withdrawals so you can focus on the jackpot, not the wait.
            </p>
          </div>

          {/* Real Money Gaming Stats */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-8">Why SPACE9 Players Trust Us</h3>

            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">500K+</div>
                <p className="text-gray-200">Active Australian players enjoying real money games</p>
              </div>

              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">1000+</div>
                <p className="text-gray-200">High-quality pokies and casino games available</p>
              </div>

              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
                <p className="text-gray-200">Customer support for Australian players</p>
              </div>

              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">Instant</div>
                <p className="text-gray-200">Deposits via PayID and withdrawals processed fast</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">🎰 Ready to Start Playing Real Money Pokies?</h3>
          <p className="text-gray-700 mb-6">
            SPACE9 is your complete guide to real money online pokies in Australia. With expert game reviews, strategy
            guides, and bonus recommendations, you'll always know exactly where to play for maximum wins.
          </p>
          <p className="text-gray-600 italic">
            All information is provided for educational purposes. Please gamble responsibly and within your means.
          </p>
        </div>
      </div>
    </section>
  );
}
