'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PromotionsClient() {
  const promotions = [
    {
      title: 'AUSSIE FORTUNE CLUB',
      subtitle: 'EXCLUSIVE REWARDS',
      description: 'FOR TRUE AUSSIE LEGENDS',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fb3214ec6a58347149763d0fc5f3f28a3',
    },
    {
      title: 'VIP UPGRADE BONUS',
      subtitle: 'AUD',
      description: 'DAILY PROGRAM CHECK-IN / DAILY REWARDS',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F371707c1bcaa4027bb5158d8dcdc3097',
    },
    {
      title: 'VIP LOYALTY BONUS',
      subtitle: 'AUD',
      description: 'LOYAL CUSTOMES WITH GENEROUS REWARD',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Faa5db6e9a81c47d8b493ba3971cac7b1',
    },
    {
      title: 'ELITE WEEKLY GIFT',
      subtitle: 'WEEKLY GIFTS FOR',
      description: 'PLAYERS WHO PLAY LIKE CHAMPIONS',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F216c4075b0f44ceb839ab3a27c813205',
    },
    {
      title: 'REFERRAL BONUS',
      subtitle: 'AUD 30',
      description: 'EARN BONUSES EFFORTLESSLY ONCE YOUR REFERRALS REACH DEPOSIT TARGETS',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F58b1c025fd3844508cf6419af66a9864',
    },
    {
      title: 'DAILY REBATE',
      subtitle: '6%',
      description: 'PLAY MORE, EARN MORE 6%',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc542fef11c74444c96e30c345567d946',
    },
    {
      title: 'AUSSIE PRIME BONUS',
      subtitle: 'PLAY SMART',
      description: 'WIN PRIME',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fbb7963dcc2774955ab01b43efc8ae25f',
    },
    {
      title: 'ELITE SLOT RUSH',
      subtitle: 'RUSH IN',
      description: 'SPIN HARD, WIN BIG!',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F45d02a1217ae4d7492e60556cd3e73d0',
    },
    {
      title: 'SOCIAL BOOST BONUS',
      subtitle: 'SHARE, EARN',
      description: 'BOOST YOUR REWARDS',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fea46eff7993e43c0836c49a7d5fc2eaf',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Space Theme */}
      <section
        className="relative min-h-96"
        style={{
          backgroundImage:
            'url(https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F155e921679114563800a312c4a646dd3)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.6) 0%, rgba(37, 99, 235, 0.6) 100%)',
          }}
        ></div>
      </section>

      {/* Promotional Banners Section */}
      <section className="bg-gradient-to-b from-blue-950 to-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.map((promo, idx) => (
              <a
                key={idx}
                href="https://space9au.com/RFGOOGLESEO99"
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer block"
              >
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            SPACE9 Australia Casino | SPACE9 Payid Pokies | SPACE9 Casino Free Credit
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-amber-600">
            Unlock Exciting Rewards with SPACE9 Promotions
          </h2>

          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                SPACE9 E Wallet Casino Bonuses:
              </h3>
              <p>
                Enjoy exclusive bonuses and rewards while using the convenient and secure SPACE9 E
                Wallet Casino. Our e-wallet promotions include welcome bonuses, reload bonuses among
                others that give more value to your deposits so that you can maximize use of your gaming
                potential.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                SPACE9 Casino Free Credit Offers:
              </h3>
              <p>
                Increase your bankroll with SPACE9 Casino free credit promotions. Whether you are a new
                player looking to begin your journey on SPACE9 or an existing player who wants extra
                privilege, our free credit offers provide you with additional money for exploring various
                games or offer plus increasing winning opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Exclusive Promotions for Players:
              </h3>
              <p>
                You being one of the valued SPACE9 community members means you will enjoy an array of
                exclusive promotions, which are designed specifically for you as a gamer. Our players'
                satisfaction is our priority thus we have weekly cashback rewards and VIP loyalty programs
                among others.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Benefits of SPACE9 Casino Free Credit
              </h3>
              <ol className="space-y-4 list-decimal list-inside">
                <li>
                  <strong>Extended Playtime:</strong> SPACE9 Casino Free Credit gives more funds that can
                  be used to prolong your stay at the casino.
                </li>
                <li>
                  <strong>Risk-Free Gaming:</strong> With SPACE9 Casino Free Credit; there is no need to
                  worry about losing money while trying new games or betting strategies. Since it's bonus
                  credits gambling, feel free to try different gaming styles and patterns.
                </li>
                <li>
                  <strong>Win Real Money:</strong> These are not just free credits; they offer you the
                  chance to win real money. Whether one withdraw them or continues using them on their
                  favorite games, all winnings obtained from playing with free credits can be taken out in
                  form of real cash.
                </li>
                <li>
                  <strong>Loyalty Rewards:</strong> As part of some promotions or loyalty programs, SPACE9
                  sometimes offers free credits to regular players. It is our way to thank you for staying
                  with us and also bring more benefits to you as a valued member of the SPACE9 community.
                </li>
                <li>
                  <strong>Increased Bankroll Boost:</strong> Long-term as a new or a pro can greatly benefit
                  from having a SPACE9 Casino Free Credit on your bankroll. Start your gambling journey with
                  a higher balance or top up during promotional periods for maximum gambling fun.
                </li>
                <li>
                  <strong>Get Exclusive Promotions:</strong> Occasionally, some SPACE9 promos may be
                  reserved for those using the free credit option. When you take advantage of them, they
                  offer perks and rewards that are not available to other players.
                </li>
              </ol>
            </div>

            <div className="text-center">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
