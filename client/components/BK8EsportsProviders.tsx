export default function BK8EsportsProviders() {
  const providers = [
    {
      title: 'TF Gaming',
      description: 'One of the leading names in esports betting sites, TF Gaming offers in-depth coverage of top esports titles, real-time odds updates and market analysis, and an enhanced user interface tailored to esports fans. It\'s especially popular for games like LoL, Dota 2, and CS:GO.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/tf-gaming-e1750920305779.png',
    },
    {
      title: 'IM Esports',
      description: 'A part of the well-established IM platform, IM Esports delivers wide-ranging esports markets, rapid bet settlement, and clean layout with responsive performance. Its focus on Asian tournaments makes it ideal for online esports betting Malaysia players.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/IM-esports-logo-1.png',
    },
    {
      title: 'BK8 Esports Platform',
      description: 'Developed in-house, the BK8 esports section is optimized for both beginners and advanced bettors. It supports fast deposits in MYR, offers exclusive BK8-only promotions, and features a lightweight design for mobile and desktop. This custom platform is perfect for those who want a simple, high-performing esports betting site.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/03/BK8_Blue150.png',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted Esports Betting Providers at BK8
          </h2>
          <p className="text-gray-700 text-lg">
            When it comes to placing real-money bets, you want to know you're using platforms that are reliable and built for esports. BK8 partners with the industry's most trusted esports-focused providers:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow hover:shadow-lg transition-shadow">
              <div className="mb-6 flex justify-center">
                <img
                  src={provider.image}
                  alt={provider.title}
                  className="h-20 object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">
                {provider.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                {provider.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
