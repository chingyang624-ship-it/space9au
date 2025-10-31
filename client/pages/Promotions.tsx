import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Promotions() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <section
        className="relative border-b-2 border-amber-500 min-h-96"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F1c64fdec9a7b4484a898d43e9059ef69)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F1c64fdec9a7b4484a898d43e9059ef69)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
      </section>

      {/* Promotional Banners Section */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-5">
            {/* Banner 1 - VIP Program */}
            <div className="text-center">
              <a
                href="https://ufo9.asia/RFGOOLGEADS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c45d351165444cea245ced7b4f94797"
                  alt="VIP Program Check-in Program"
                  className="w-full max-w-2xl rounded hover:opacity-90 transition-opacity"
                />
              </a>
            </div>

            {/* Banner 2 - Every Deposit */}
            <div className="text-center">
              <a
                href="https://ufo9.asia/RFGOOLGEADS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe1b12944b47c421e9e50fcebf6828c1d"
                  alt="Every Deposit Get Free Lucky Wheel Spin"
                  className="w-full max-w-2xl rounded hover:opacity-90 transition-opacity"
                />
              </a>
            </div>

            {/* Banner 3 - Welcome Bonus */}
            <div className="text-center">
              <a
                href="https://ufo9.asia/RFGOOLGEADS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7f96814e47b644239208f01ad2eb9e78"
                  alt="Welcome Bonus 70"
                  className="w-full max-w-2xl rounded hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-gray-800">
            SPACE9 Australia Casino | SPACE9 Payid Pokies| SPACE9 Casino Free Credit
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Unlock Exciting Rewards with SPACE9 Promotions
          </h2>

          <p className="text-base md:text-lg mb-8 text-gray-700 leading-relaxed">
            SPACE9 believes in incentivizing its players with thrilling incentives and offers. Check out our latest promos to see how you can enjoy the SPACE9 E Wallet Casino and SPACE9 Casino Free Credit.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            SPACE9 E Wallet Casino Bonuses:
          </h3>

          <p className="text-base md:text-lg mb-8 text-gray-700 leading-relaxed">
            Enjoy exclusive bonuses and rewards while using the convenient and secure SPACE9 E Wallet Casino. Our e-wallet promotions include welcome bonuses, reload bonuses among others that give more value to your deposits so that you can make maximum use of your gaming potential.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            SPACE9 Casino Free Credit Offers:
          </h3>

          <p className="text-base md:text-lg mb-8 text-gray-700 leading-relaxed">
            Increase your bankroll with SPACE9 Casino Free Credit promotions. Whether you are a new player looking to begin your journey on SPACE9 or an existing player who wants extra privileges, our free credit offers provide you with additional money for exploring various games on offer plus increasing winning opportunities.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Exclusive Promotions for Players:
          </h3>

          <p className="text-base md:text-lg mb-8 text-gray-700 leading-relaxed">
            You being one of the valued SPACE9 community members means you will enjoy an array of exclusive promotions, which are designed specifically for you as a gamer. Our players' satisfaction is our priority thus we have weekly cashback rewards and VIP loyalty programs among others.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Benefits of SPACE9 Casino Free Credit
          </h3>

          <ol className="list-decimal list-inside space-y-4 mb-8 text-base md:text-lg text-gray-700">
            <li>
              <span className="font-bold">Extended Playtime:</span>
              <span> SPACE9 Casino Free Credit gives more funds that can be used to prolong your stay at the casino.</span>
            </li>
            <li>
              <span className="font-bold">Risk-Free Gaming:</span>
              <span> With SPACE9 Casino Free Credit, there is no need to worry about losing money while trying new games or betting strategies. Since it's bonus credits gambling, feel free to try different gaming styles and patterns.</span>
            </li>
            <li>
              <span className="font-bold">Win Real Money:</span>
              <span> These are not just free credits; they offer you the chance to win real money. Whether one withdraws them or continues using them on their favourite games, all winnings obtained from playing with free credits can be taken out in form of real cash.</span>
            </li>
            <li>
              <span className="font-bold">Loyalty Reward:</span>
              <span> As part of some promotions or loyalty programs, SPACE9 sometimes offers free credits to its loyal players. It is our way to thank you for staying with us and also bring more benefits to you as a valued member of the SPACE9 community.</span>
            </li>
            <li>
              <span className="font-bold">Your Bankroll Needs A Boost:</span>
              <span> A new player or a pro can greatly benefit from having a SPACE9 Casino Free Credit on your bankroll. Start your gambling journey with a higher balance or top up during promotional periods for maximum gambling fun.</span>
            </li>
            <li>
              <span className="font-bold">Get Exclusive Promotions:</span>
              <span> Occasionally, some SPACE9 promos may be reserved for those using the free credit option. When you take advantage of them, they offer more perks and rewards that are not available to other players.</span>
            </li>
            <li>
              <span className="font-bold">Terms & Conditions:</span>
              <span> To have an exciting and hassle-free experience, we advise gamblers to go through the terms and conditions before getting involved in any promotion.</span>
            </li>
          </ol>

          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Join SPACE9 Today:
          </h4>

          <p className="text-base md:text-lg mb-8 text-gray-700 leading-relaxed">
            Don't miss out on the opportunity to take advantage of our exciting promotions. Sign up with SPACE9 today and start enjoying the benefits of our E Wallet Casino bonuses and Casino Free Credit offers. With SPACE9, every spin brings you one step closer to incredible rewards.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
