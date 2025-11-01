export default function BK8LiveCasinoGames() {
  const games = [
    {
      title: "Live Baccarat",
      image: "https://bk8mycasino.com/wp-content/uploads/2025/06/Live-Baccarat-1024x579.jpeg",
      description:
        "Loved for its simplicity, Live Baccarat remains a favorite among live casino Malaysia fans. BK8 offers traditional tables, No-Commission Baccarat, and even squeeze options for those who enjoy a little drama.",
      link: "https://bk8mycasino.com/casino/how-to-win-baccarat/",
    },
    {
      title: "Live Blackjack",
      image: "https://bk8mycasino.com/wp-content/uploads/2025/06/Live-Blackjack-1024x579.jpeg",
      description:
        "Think fast and play smart. Live Blackjack lets you take on the dealer with side bets, insurance, and multi-seat options. Choose from standard or VIP tables and interact with real dealers in a high-energy environment.",
      link: "https://bk8mycasino.com/casino/how-to-play-blackjack-online-casino-game-in-bk8/",
    },
    {
      title: "Live Roulette",
      image: "https://bk8mycasino.com/wp-content/uploads/2025/06/Live-Roulette-1024x579.jpeg",
      description:
        "A true casino classic. BK8 features multiple live roulette styles, including European, French, and the electrifying Lightning Roulette. Watch the ball spin on a real wheel and bet in real-time with others at the table.",
      link: "https://bk8mycasino.com/casino/how-to-play-roulette/",
    },
    {
      title: "Live Poker",
      image: "https://bk8mycasino.com/wp-content/uploads/2025/06/Live-Poker-1024x579.jpeg",
      description:
        "Poker fans can enjoy live dealer versions like Casino Hold'em and Caribbean Stud. These games combine the best of live interaction with real strategy and payout potential.",
      link: "https://bk8mycasino.com/casino/texas-holdem-poker/",
    },
    {
      title: "Sic Bo",
      image: "https://bk8mycasino.com/wp-content/uploads/2025/06/Sic-Bo-1024x579.jpeg",
      description:
        "This traditional dice game is a huge hit in Asia. With clear visual interfaces, fast rounds, and multipliers, Live Sic Bo gives you a great blend of strategy and chance.",
      link: "https://bk8mycasino.com/casino/how-to-play-sic-bo-online-best-strategy-guide/",
    },
    {
      title: "Dragon Tiger",
      image: "https://bk8mycasino.com/wp-content/uploads/2025/06/Dragon-Tiger-1024x579.jpeg",
      description:
        "Lightning-fast and straightforward, Dragon Tiger is a two-card showdown between the 'Dragon' and the 'Tiger.' It's popular with players who want to enjoy quick, exciting bets.",
      link: "https://bk8mycasino.com/go/livecasino",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Top Live Casino Online Games Available on BK8
        </h2>
        <p className="text-gray-700 text-lg mb-12 max-w-3xl">
          BK8 casino offers a wide selection of live casino games Malaysia players love. Here's a breakdown of the top live dealer games you'll find on the platform:
        </p>

        <div className="space-y-12">
          {games.map((game, index) => (
            <div
              key={game.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-auto rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {game.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {game.description}
                </p>
                <a
                  href={game.link}
                  target="_blank"
                  rel="sponsored noopener"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-700 text-lg">
            From table staples to fast-paced showdowns, BK8 covers every type of live casino games Malaysia players are looking for.
          </p>
        </div>
      </div>
    </section>
  );
}
