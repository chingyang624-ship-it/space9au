import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Sponsor() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://ufo9au.net/wp-content/uploads/2024/01/sponsor01.jpg")',
        }}
      >
        {/* Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-80"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">CONOR</span>
              <br />
              <span className="text-orange-600 font-black">MCGREGOR</span>
            </h1>

            <h2 className="text-2xl font-semibold text-white mb-8">
              SPACE9 Brand Ambassador for 2022/2023
            </h2>

            <p className="text-white text-lg leading-relaxed">
              No introductions needed. Let's welcome UFC Legend – Conor McGregor
              <br />
              as SPACE9 latest brand ambassador!
              <br />
              Coming from humble beginnings, Conor McGregor has made a name for
              <br />
              himself achieved countless milestones in his career.
              <br />
              The common ground between Conor McGregor and SPACE9 is the values
              <br />
              shared. Just like how SPACE9 is constantly creating champions, Conor Mc-
              <br />
              Gregor's fighting spirit to reign champion aligns with the brand and to-
              <br />
              gether, we are dedicated to create more winners.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24">
            {[
              { src: 'https://ufo9au.net/wp-content/uploads/2024/02/1.png', alt: 'Ambassador Campaign 1' },
              { src: 'https://ufo9au.net/wp-content/uploads/2024/02/2.png', alt: 'Ambassador Campaign 2' },
              { src: 'https://ufo9au.net/wp-content/uploads/2024/02/3.png', alt: 'Ambassador Campaign 3' },
              { src: 'https://ufo9au.net/wp-content/uploads/2024/02/4.png', alt: 'Ambassador Campaign 4' },
            ].map((img, index) => (
              <a
                key={index}
                href="https://space9au.com/RFGOOGLESEO99"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-60 object-cover rounded-2xl hover:opacity-90 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-slate-900 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            SPACE9: The Opening To Exciting Australia Live Casino Championship
          </h2>

          <p className="text-base mb-8 leading-relaxed">
            SPACE9 is a thrilling online casino tournaments site where you can also find the prestigious Australia Live Casino Championship. We have everything from a seasoned player who risks high stakes to someone new in the world of gambling. Playing at SPACE9, you will experience electrifying gaming times which may result in life-changing jackpots.
          </p>

          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            SPACE9 Tournaments: Success, Fun And Thrill Combined As One
          </h3>

          <p className="text-base mb-6 leading-relaxed">
            We appreciate what competition means and that is why we provide an array of online casino championships catering for different tastes and wallets. Look below:
          </p>

          <ul className="list-disc list-inside space-y-4 mb-8 ml-6">
            <li className="text-base">
              <strong>Non-Stop Action:</strong> Immerse yourself in daily, weekly and monthly tournaments including numerous of your favorite online casino games. From the perpetual fascination of fruit machines to the tactical profundity that comes with table games like blackjack and poker there is a championship that suits every gamer.
            </li>
            <li className="text-base">
              <strong>Free rolls and Buy-Ins:</strong> Enjoy the thrill of competition without putting a hole in your pocket. SPACE9 regularly invites you to participate in free roll tournaments where the player takes all but also real money is won. Also, several buy-in tournaments are provided for you to enter for bigger prize pools.
            </li>
            <li className="text-base">
              <strong>Level Up Your Skills:</strong> Participating in championships enables one to become better at gaming as he/she plays against other players. Study tactics, build up your intuition, challenge yourself aiming for top positions.
            </li>
            <li className="text-base">
              <strong>Leader boards and Recognition:</strong> Check out our interactive leader boards to track your progress and see how you compare with other participants. The exhilaration of climbing through the ranks and gaining prominence among comrades enhances the SPACE9 tournament experience.
            </li>
            <li className="text-base">
              <strong>Life-Changing Wins:</strong> The prize pools offered by SPACE9 events can change lives forever. Just imagine how it feels when you convert just a little investment into a jackpot large enough to make all your dreams come true!
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            The Australia Live Casino Championship
          </h3>

          <p className="text-base mb-6 leading-relaxed">
            Australia Live Casino Championship (ALCC) is the ultimate occasion for Australia's best casino enthusiasts, SPACE9. It brings together topmost players in the country who compete for the final bragging right and a life-changing grand prize.
          </p>

          <ol className="list-decimal list-inside space-y-4 mb-8 ml-6">
            <li className="text-base">
              <strong>Qualification Tournaments:</strong> ALCC is not an exclusive preserve of its invited elite. SPACE9 holds a series of online qualification tournaments throughout the year. Get your light to shine and take your seat at this prestigious live event.
            </li>
            <li className="text-base">
              <strong>Live Casino Ambiance:</strong> Feel the unparalleled thrill of a live casino atmosphere. ALCC draws you away from the virtual world into the gaming frenzy with all its associated sights, sounds and excitements.
            </li>
            <li className="text-base">
              <strong>Unforgettable Experience:</strong> Not only is it a tournament but ALCC turns out to be one unforgettable experience. Here you can mix with other high rollers, establish connections with those who matter in business while also creating memories worth cherishing forever.
            </li>
          </ol>

          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Join The SPACE9 Universe Today
          </h3>

          <p className="text-base leading-relaxed">
            Do you feel like embarking on an exciting online gambling journey with chances of winning some life-changing prizes? Open a SPACE9 account now and get access to many thrilling championship tournaments as well as the prestigious Australia Live Casino Championship. Experience unforgettable moments at our casino with diversified games, thrilling contests, and fair play which is always adhered to. So why wait more? Connect with SPACE9 members now and start living the dream!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
