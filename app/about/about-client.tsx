'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
              SPACE9 is Australia's number one online casino of 2024! We've ascended the charts by
              constantly delivering secure and enjoyable gaming that is out of this world. Whether
              you are a seasoned cosmopolitan or a novice spaceman taking her tentative steps into
              space, SPACE9 has it all for everyone who would like to have unforgettable galactic
              trip at any time.
            </p>

            <p>
              At SPACE9, we are proud to offer an extensive range of the most thrilling casinos
              games in Milky Way galaxy. Get involved with pokies that have stunning graphics and
              exciting features, find your way to the riches through blackjack or go on a journey
              full of possibilities from our wide selection of table games. We cater for every kind
              of gambler and with our ever increasing library there is always another planet to
              discover.
            </p>

            <p>
              But SPACE9 isn't all about the games (although they are pretty darn stellar). We also
              strive to offer excellent customer service and unbeatable rewards. Our customer care
              team is always ready to help you with any inquiries you may have while our loyal
              program provides lavish prizes for your dedication. So, come on, space captain; get
              ready to take off with SPACE9!
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-12 mb-6">
            Explore A Universe Of Casino Games
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
            <p>
              Ready yourself for a cosmic journey in the world of online casino games on SPACE9! Our
              list of pokies stretches over light years, with classic fruits and feature-filled
              video slots that will make you spin with exhilaration.
            </p>

            <p>
              Try your luck at blackjack or test yourself at roulette; all against dealers. We also
              provide several other specialty versions including baccarat and poker for players
              seeking something different. In any case, SPACE9 has a game that will definitely
              skyrocket your chances of winning.
            </p>

            <p>
              Our sports betting section is equally impressive, allowing players to bet on a range
              of sporting activities. Whether it's your passion for football, tennis, basketball or
              any other sport under the sun, SPACE9 has got the perfect betting options for you.
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-12 mb-6">
            Your One-Stop Shop For Secure And Rewarding Game play
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
            <p>
              As far as SPACE9, we take your privacy and safety into consideration. We make use of
              the most up-to-date encryption technology in order to ensure that your private information
              as well as your transactions remain safe so that you can only concentrate on playing the
              games without enjoyment. Furthermore, we always see to it that fair and responsible gaming
              environment is maintained.
            </p>

            <p>
              Besides being dedicated to security, SPACE9 also has a rewarding loyalty program. In other
              words, every time you place a bet on any game you earn points which can be converted into
              cash prizes, free spins or any kind of thrilling incentives. The more you play, the more
              you get!
            </p>

            <p>
              Besides, we also have a number of bonuses and promotions designed to help you increase your
              bankroll. Do not forget to claim your welcome bonus when you sign up for a new account and
              keep checking our promotions page for latest offers.
            </p>

            <p>
              So, why wait? Join SPACE9 today and embark on an exciting online casino journey! With a wide
              range of games to choose from, excellent services, and unparalleled incentives, SPACE9 is
              the all-round casino that with your needs.
            </p>
          </div>
        </div>
      </section>

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
              className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-white hover:bg-gray-100 transition-colors"
              title="Follow us on Facebook"
            >
              <svg
                className="w-8 h-8 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-xs text-gray-700 mt-1 text-center font-semibold">Facebook</span>
            </a>

            <a
              href="https://t.me/+HplU5b6JfLBmNjk1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-white hover:bg-gray-100 transition-colors"
              title="Join us on Telegram"
            >
              <svg
                className="w-8 h-8 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a11.955 11.955 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.919-.87 1.24-1.49 1.276-.573.025-1.095-.17-1.707-.595-.567-.38-1.088-.879-1.623-1.282-.895-.65-1.385-1.065-1.75-1.615-.27-.41-.053-.896.341-1.187.088-.078.177-.16.265-.248 1.144-1.074 2.057-2.007 2.387-2.614.023-.04.048-.083.069-.135.16-.36-.092-.75-.534-.82-.291-.033-.612.145-.899.462-1.256 1.193-4.423 4.385-5.995 3.942-1.358-.374-2.147-1.271-2.654-2.57-.461-1.205-.667-2.502-.41-3.949.121-.646.564-1.529 1.073-1.9.558-.425 1.186-.722 1.793-.972.249-.12.502-.249.754-.357.293-.119.68-.278 1.025-.39z" />
              </svg>
              <span className="text-xs text-gray-700 mt-1 text-center font-semibold">Telegram</span>
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
