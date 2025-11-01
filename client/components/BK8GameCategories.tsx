const gameCategories = [
  {
    title: 'Live Casino',
    description:
      'BK8 online casino features a live casino games section powered by top providers like Evolution and Playtech. Enjoy the thrill of real-time gaming with professional dealers hosting games like Baccarat, Roulette, Blackjack, and more.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Live-casino.jpg',
    link: 'https://bk8mycasino.com/casino/',
  },
  {
    title: 'Online Slots',
    description:
      'With hundreds of online slot games from leading developers like Pragmatic Play, Spadegaming, and NetEnt, BK8 Malaysia offers endless spinning fun. From classic fruit machines to jackpot slots, every spin brings a new chance to win.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Slots.jpg',
    link: 'https://bk8mycasino.com/slots/',
  },
  {
    title: 'Sports Betting',
    description:
      "BK8's sportsbook covers all the popular sports such as football, basketball, tennis, badminton, and more. Bet pre-match or live with competitive odds and numerous betting options, including Asian Handicap and Over/Under.",
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Sport-betting.jpg',
    link: 'https://bk8mycasino.com/sports/',
  },
  {
    title: 'Esports Betting',
    description:
      'Experience the next-gen thrill of esports betting on titles like Dota 2, League of Legends, and CS:GO. With real-time odds and in-play markets, BK8 Casino keeps you ahead in this rapidly growing segment.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Esports.jpg',
    link: 'https://bk8mycasino.com/esports/',
  },
  {
    title: 'Fishing Games',
    description:
      'BK8 casino Malaysia features fan-favorite fishing games like Fishing War and Monkey King Fishing. Easy to play, visually stunning, and loaded with bonus features, they offer great casual fun and rewards.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Fishing.jpg',
    link: 'https://bk8mycasino.com/fishing/',
  },
  {
    title: 'Lottery',
    description:
      'Try your luck with BK8\'s selection of lottery games, including Magnum and Damacai-style 4D draws. Fast, easy, and rewarding, just choose your lucky numbers and wait for the win.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/08/Lottery.jpg',
    link: 'https://bk8mycasino.com/casino-review/bk8-lottery-online-casino-games/',
  },
];

export default function BK8GameCategories() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Explore BK8 Casino Games
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gameCategories.map((game, idx) => (
            <a
              key={idx}
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{game.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{game.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
