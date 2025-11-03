import { useState } from 'react';

const games = {
  SLOT: [
    { name: 'Pragmatic Play', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fd88d036a7edd4ba18e44373fab8d52a0' },
    { name: 'JILI', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F53d139d6af9f445e9da33f0e70f0fe45' },
    { name: 'BNG', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F26ecf2e5fdbc4502a9bfeb7ccca6408e' },
    { name: '3oaks', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F14a8643d1b804b77a9dd20cb24f0d4f9' },
    { name: 'Imperium Games', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc69c2fbd014940f1993cd48bc87a7f7f' },
    { name: 'Vpower', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F59cda8595ac74f058c1c556476a5be37' },
  ],
  LIVE: [
    { name: 'Evolution', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F5f7a8d9e1b2c3d4e5f6a7b8c9d0e1f2g' },
    { name: 'AE Casino', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p' },
    { name: 'WM Casino', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q' },
  ],
  SPORTS: [
    { name: 'SBObet', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r' },
    { name: 'Maxbet', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s' },
    { name: 'Pinnacle', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t' },
  ],
};

const tabConfig = [
  { key: 'SLOT', label: 'Hottest Slots Provider In SPACE9' },
  { key: 'LIVE', label: 'Live Casino Providers' },
  { key: 'SPORTS', label: 'Sports Betting Providers' },
];

export default function GameTabs() {
  const [activeTab, setActiveTab] = useState('SLOT');

  return (
    <section className="bg-gradient-to-b from-blue-950 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabConfig.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${
                activeTab === tab.key
                  ? 'bg-amber-500 text-black shadow-lg'
                  : 'bg-slate-700 text-amber-500 hover:bg-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games['SLOT'].map((game, idx) => (
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
                loading="lazy"
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
