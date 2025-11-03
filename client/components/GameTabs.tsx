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
    { name: 'Sexy Baccarat', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe97cc2a1c15844659ed5f21bc7b20515' },
    { name: 'Pragmatic Live', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F378dcae426164267ac7af7609fb72ae2' },
    { name: 'CT855', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F4b7dcd62237b4259aae1e13d84873c97' },
    { name: 'Playtech', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fef96abd17d28422cb2777df40b596834' },
    { name: 'Allbet', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F96121ce0b00c45aa87e16df7fa59d4ca' },
  ],
  SPORTS: [
    { name: 'SBObet', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F817d5a4e776940aab86a35c3731c8bbd' },
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
          {games[activeTab as keyof typeof games].map((game, idx) => (
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
