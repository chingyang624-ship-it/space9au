import { useState } from 'react';
import { Facebook, Send, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-96"
        style={{
          backgroundImage: 'url(https://ufo9au.net/wp-content/uploads/2024/01/aboutUs-headerbg.jpg)',
        }}
      >
        <div
          className="absolute inset-0 bg-black/40"
          style={{
            backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F44831b6c2474469bbc80a8e3e34654d9)',
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
              SPACE9 is Australia's number one online casino of 2024! We've ascended the charts by constantly delivering secure and enjoyable gaming that is out of this world. Whether you are a seasoned cosmopolitan or a novice spaceman taking her tentative steps into space, SPACE9 has it all for everyone who would like to have unforgettable galactic trip at any time.
            </p>

            <p>
              At SPACE9, we are proud to offer an extensive range of the most thrilling casinos games in Milky Way galaxy. Get involved with pokies that have stunning graphics and exciting features, find your way to the riches through blackjack or go on a journey full of possibilities from our wide selection of table games. We cater for every kind of gambler and with our ever increasing library there is always another planet to discover.
            </p>

            <p>
              But SPACE9 isn't all about the games (although they are pretty darn stellar). We also strive to offer excellent customer service and unbeatable rewards. Our customer care team is always ready to help you with any inquiries you may have while our loyal program provides lavish prizes for your dedication. So, come on, space captain; get ready to take off with SPACE9!
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-12 mb-6">
            Explore A Universe Of Casino Games
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
            <p>
              Ready yourself for a cosmic journey in the world of online casino games on SPACE9! Our list of pokies stretches over light years, with classic fruits and feature-filled video slots that will make you spin with exhilaration.
            </p>

            <p>
              Try your luck at blackjack or test yourself at roulette; all against dealers. We also provide several other specialty versions including baccarat and poker for players seeking something different. In any case, SPACE9 has a game that will definitely skyrocket your chances of winning.
            </p>

            <p>
              In light of the fact that all players are different, we have made provisions for diverse budget preferences through a wide range of betting limits. SPACE9 provides online casino gaming experiences to both high rollers and casual players alike. Therefore, it is time to come in and explore our game universe, finding out what new way there is to hit the jackpot!
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
            Your One-Stop Shop For Secure And Rewarding Game play
          </h3>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
            <p>
              As for SPACE9, we take your privacy and safety into consideration. We make use of the most up-to-date encryption technology in order to ensure that your private information as well as your transactions relating to finances is safe so that you can only concentrate on playing the games with utmost enjoyment. Furthermore, we always see to it that fair and responsible gaming environment is maintained.
            </p>

            <p>
              Besides being dedicated to security,{' '}
              <a href="/" className="text-amber-500 hover:text-amber-400 transition-colors">
                SPACE9
              </a>{' '}
              also has a rewarding loyalty program. In other words, every time you place a bet on any game you earn points which can be converted into cash prizes, free spins or any kind of thrilling incentives. The more you play, the more you get!
            </p>

            <p>
              Besides, we also have a number of bonuses and promotions designed to help you increase your bankroll. Do not forget to claim your welcome bonus when you sign up for a new account and keep checking our promotions page for latest offers.
            </p>

            <p>
              So, why wait? Join SPACE9 today and embark on an exciting online casino journey! With a wide range of games to choose from, excellent services, and unparalleled incentives, SPACE9 is the all-round casino that suits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Connect With Us
          </h2>

          <p className="text-white text-lg mb-12 max-w-2xl mx-auto">
            Stay updated with the latest promotions, games, and exclusive offers. Follow us on social media and join our community of players.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-8 mb-12">
            <a
              href="https://www.facebook.com/profile.php?id=100093505265984"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white hover:text-amber-200 transition-colors group"
            >
              <div className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors">
                <Facebook size={32} />
              </div>
              <span className="font-semibold">Facebook</span>
            </a>
            <a
              href="https://t.me/+HplU5b6JfLBmNjk1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white hover:text-amber-200 transition-colors group"
            >
              <div className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors">
                <Send size={32} />
              </div>
              <span className="font-semibold">Telegram</span>
            </a>
          </div>

          {/* Download App CTA */}
          <div className="mt-12">
            <p className="text-white text-lg mb-6">Ready to play on the go?</p>
            <a
              href="https://www.space9aush5api.site/uploads/appwrap.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-amber-700 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              <Download size={24} />
              Download SPACE9 App
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
