'use client';

import { useState } from 'react';

const games = {
  SLOT: [
    {
      name: 'Pragmatic Play',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
    {
      name: 'JILI',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
    {
      name: 'BNG',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
    {
      name: '3oaks',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
    {
      name: 'Imperium Games',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
    {
      name: 'Vpower',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
  ],
  LIVE: [
    {
      name: 'Sexy Baccarat',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
    {
      name: 'Pragmatic Live',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
    {
      name: 'CT855',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
    {
      name: 'Playtech',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
    {
      name: 'Allbet',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
  ],
  SPORTS: [
    {
      name: 'SBObet',
      img: 'https://static.gwvkyk.com/media/12a7014a98396747659d3.png',
    },
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
