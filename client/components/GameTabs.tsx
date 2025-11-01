import { useState } from 'react';

const games = {
  SLOT: [
    { name: '918Kiss', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F30b34eeea7084fce90b4ce290d32729f' },
    { name: 'Mega888', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F27d6602ccbba4749b213708f79a1ad42' },
    { name: '3win8', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F61d697c070a144bf9f3d8081afecd385' },
    { name: 'Asia Gaming', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F9dbdd46287764327b9d8f227f2cddbf1' },
    { name: 'XE88', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fa815d03fda4c4dec8b1174a623f35858' },
    { name: 'ACE333', img: 'https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc99977d699d4409aa40275a70cf3f5db' },
  ],
};

export default function GameTabs() {
  const [activeTab, setActiveTab] = useState<'SLOT'>('SLOT');

  return (
    <section className="bg-gradient-to-b from-blue-950 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all bg-amber-500 text-black shadow-lg`}
            disabled
          >
            SLOT
          </button>
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
