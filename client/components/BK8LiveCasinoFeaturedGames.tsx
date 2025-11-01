export default function BK8LiveCasinoFeaturedGames() {
  const games = [
    {
      title: "Lightning Baccarat",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-lightning-baccarat.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Super Sic Bo",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-super-sic-bo.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "BK8 Salon Privé Baccarat",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-salon-prive-baccarat.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Speed Roulette",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-speed-roulette.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Thai Baccarat",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-thai-baccarat.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Korean Speed Baccarat",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-korean-speed-baccarat.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Dragon Tiger",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-dragon-tiger.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "French Gold Roulette",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-french-gold-roulette.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Lightning Roulette",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-lightning-roulette.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Live Blackjack",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-live-blackjack.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Craps",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-craps.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Japanese Baccarat",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-japanese-baccarat.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Speed Baccarat",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-live-speed-baccarat.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Free Bet Blackjack",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-free-bet-blackjack.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Infinite Blackjack",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-infinite-blackjack.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      title: "Lightning Blackjack",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-lightning-blackjack.webp",
      link: "https://bk8mycasino.com/go/livecasino",
    },
  ];

  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {games.map((game) => (
            <a
              key={game.title}
              href={game.link}
              target="_blank"
              rel="sponsored noopener"
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full bg-black/60 py-3 px-3">
                  <p className="text-white text-xs md:text-sm font-semibold truncate">
                    {game.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
