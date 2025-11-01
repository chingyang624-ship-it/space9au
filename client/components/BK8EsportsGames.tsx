export default function BK8EsportsGames() {
  const games = [
    {
      title: 'Dota 2',
      description: 'This team-based MOBA (Multiplayer Online Battle Arena) is known for high-stakes tournaments like The International. BK8 offers markets such as match winner, map winner, total kills, and handicap bets.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Dota-2.jpg',
    },
    {
      title: 'CS:GO (Counter-Strike: Global Offensive)',
      description: 'A tactical FPS game with intense round-based play. You can bet on round winners, bomb defusals, map victories, and even pistol rounds in events like the BLAST Premier and ESL Pro League.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/CS_GO-Counter-Strike_-Global-Offensive.jpg',
    },
    {
      title: 'League of Legends (LoL)',
      description: 'BK8 covers global LoL tournaments including LCK, LPL, MSI, and Worlds. Betting options include first blood, team to slay the first dragon, match winner, and total kills.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/League-of-Legends-LoL.jpg',
    },
    {
      title: 'Mobile Legends & PUBG Mobile',
      description: 'Mobile-first games are huge in Southeast Asia, especially in esports betting Malaysia. BK8 lets you place bets on team winners, MVPs, and survival rank in regional and global tournaments.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Mobile-Legends-PUBG-Mobile.jpg',
    },
    {
      title: 'Valorant',
      description: 'This fast-growing tactical shooter is known for its vibrant pro scene and high-paced matches. You can bet on total rounds, map outcomes, and top fraggers in events like VCT and Valorant Challengers.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Valorant.jpg',
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Top Esports Betting Games on BK8
          </h2>
          <p className="text-gray-700 text-lg">
            BK8 online casino features the most popular and competitive games in the global esports scene. Whether you're into team battles or one-on-one shooters, you'll find the perfect game to bet on here:
          </p>
        </div>

        <div className="space-y-12">
          {games.map((game, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {game.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
