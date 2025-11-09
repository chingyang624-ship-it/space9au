'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SponsorClient() {
  const [showBannerModal, setShowBannerModal] = useState(true);

  const tournaments = [
    {
      title: 'Topuria',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F47b974d627d040ceb1812c1a024d4cee',
    },
    {
      title: 'Champion 1',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F47b974d627d040ceb1812c1a024d4cee',
    },
    {
      title: 'Champion 2',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F47b974d627d040ceb1812c1a024d4cee',
    },
    {
      title: 'RANDHEW',
      image:
        'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F47b974d627d040ceb1812c1a024d4cee',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Brand Ambassador Modal Banner */}
      {showBannerModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-lg max-w-4xl w-full max-h-96 flex overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={() => setShowBannerModal(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/40 p-2 rounded-full"
            >
              <X size={24} />
            </button>

            {/* Left Image Section */}
            <div className="hidden md:flex w-1/3 bg-black">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F47b974d627d040ceb1812c1a024d4cee"
                alt="Ilia Topuria"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content Section */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="45" stroke="#f59e0b" strokeWidth="2" />
                  <text x="50" y="55" textAnchor="middle" fill="#f59e0b" fontSize="20" fontWeight="bold">
                    9
                  </text>
                </svg>
                <span className="text-amber-500 font-bold text-sm">SPACE9</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">ILIA TOPURIA</h2>
              <p className="text-amber-400 font-bold text-lg mb-4">SPACE9 Brand Ambassador 2023/24</p>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                ILIA TOPURIA IS A GEORGIAN AND SPANISH PROFESSIONAL MIXED MARTIAL ARTIST. HE CURRENTLY
                COMPETES IN THE FEATHERWEIGHT DIVISION IN THE ULTIMATE FIGHTING CHAMPIONSHIP, WHERE HE IS
                THE CURRENT UFC FEATHERWEIGHT CHAMPION.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tournament Cards Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            SPACE9: The Opening To Exciting Australia Live Casino Championship
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {tournaments.map((tournament, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={tournament.image}
                  alt={tournament.title}
                  className="w-full h-48 object-cover"
                />
                <div className="bg-slate-50 p-4 text-center">
                  <h3 className="font-bold text-slate-900">{tournament.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            SPACE9 is thrilled to bring you an exciting new platform where you can participate in live casino
            championships. We have everything from a seeded player who risks high stakes to someone new in the world
            of gambling. Playing at SPACE9, you will experience electrifying gaming venues which may result in
            life-changing payouts.
          </p>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">SPACE9 Tournaments: Success, Fun And Thrill Combined As One</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Non-Stop Action</h3>
              <p className="text-gray-300 mb-4">
                Immerse yourself in daily, weekly and monthly tournaments including numerous of your favorite
                online casino games. Each tournament is designed with precision and popularity that comes with
                table limits and order. There is a championship that suits every gamer.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Free rolls and Buy-Ins</h3>
              <p className="text-gray-300 mb-4">
                Enjoy the thrill of competition without putting a hole in your pocket. SPACE9 regularly invites
                you to participate in free roll tournaments where the player takes all but also real money in wins.
                Also, several buy-in tournaments are provided for you to enter for bigger prize pools.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Leader boards and Recognition</h3>
              <p className="text-gray-300 mb-4">
                Check out the interactive leader boards to track your progress and see how you compete against
                other participants. The thrill of being mentioned on the leaderboards and achieving among
                comrades enhances the SPACE9 tournament experience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Life-Changing Wins</h3>
              <p className="text-gray-300">
                The prize pools offered by SPACE9 events can change lives forever. Just imagine how it feels when
                you convert just a little investment into a jackpot large enough to make all your dreams come true!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Australia Live Casino Championship */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            The Australia Live Casino Championship
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Qualification Tournaments</h3>
              <p className="text-gray-700">
                AUC is not an exclusive preserve of its invited elite. SPACE9 holds a series of online
                qualification tournaments throughout the year. Get your light to shine and take your seat at the
                prestigious live event. Feel the unparalleled thrill of a live casino atmosphere. AUC draws you
                away from the virtual environment of the gaming lobby with all its automated sights, sounds and
                implements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Live Casino Ambience</h3>
              <p className="text-gray-700">
                You can mix with other high rollers, establish connections with those who matter in business while
                also creating memories worth cherishing forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="bg-gradient-to-b from-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Join The SPACE9 Universe Today</h2>
          <p className="text-xl text-gray-300 mb-12">
            Do you feel like embarking on an exciting online gambling journey with chances of winning some
            life-changing prizes? Open a SPACE9 account now and get access to many thrilling championship
            tournaments as well as the prestigious Australia Live Casino Championship. So why wait? Connect with
            SPACE9 members now and start living the dream!
          </p>
          <a
            href="https://space9au.com/RFGOOGLESEO99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-lg transition-colors text-lg"
          >
            Join Now & Start Winning
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
