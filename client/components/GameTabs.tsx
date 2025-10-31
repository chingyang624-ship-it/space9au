import { useState } from 'react';

const games = {
  SLOT: [
    { name: '918Kiss', img: 'https://ufo9au.net/wp-content/uploads/2024/02/games918kiss-1-1024x379.jpg' },
    { name: 'Mega888', img: 'https://ufo9au.net/wp-content/uploads/2024/02/gamesmega888-1024x379.jpg' },
    { name: '3win8', img: 'https://ufo9au.net/wp-content/uploads/2024/02/3win38-1024x379.jpg' },
    { name: 'Asia Gaming', img: 'https://ufo9au.net/wp-content/uploads/2024/02/AG-1024x379.jpg' },
    { name: 'XE88', img: 'https://ufo9au.net/wp-content/uploads/2024/02/xe888-1024x379.jpg' },
    { name: 'ACE333', img: 'https://ufo9au.net/wp-content/uploads/2024/02/ace33-1024x379.jpg' },
  ],
  LIVE: [
    { name: 'CT855 Live Casino', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4b9a379072bf4f25a5d0c628d3ac1634' },
    { name: 'YB Official', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fec2c129b50e748a5ad29b17a850cc3d7' },
    { name: 'WON Casino', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F2217295b66c84449a3b2f33f8832e4f8' },
    { name: 'Big Gaming', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4b3bf20b7c734bb89768181d084a09a8' },
    { name: 'Sexy Baccarat', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fcf307976c70e4130b31429757f66b939' },
  ],
  SPORTS: [
    { name: 'WWBET Sports', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5bc7be0b30e24f5cbed2b96cc6d066ab' },
  ],
};

export default function GameTabs() {
  const [activeTab, setActiveTab] = useState<'SLOT' | 'LIVE' | 'SPORTS'>('SLOT');

  return (
    <section className="bg-gradient-to-b from-blue-950 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {(['SLOT', 'LIVE', 'SPORTS'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${
                activeTab === tab
                  ? 'bg-amber-500 text-black shadow-lg'
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games[activeTab].map((game, idx) => (
            <a
              key={idx}
              href="https://space9au.com/RFGOOGLESEO99"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={game.img}
                alt={game.name}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-center px-4">{game.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
