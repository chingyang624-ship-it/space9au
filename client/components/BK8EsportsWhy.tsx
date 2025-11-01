export default function BK8EsportsWhy() {
  const features = [
    {
      title: 'Localized Platform',
      description: 'BK8 supports MYR deposits and Malaysian e-wallets like DuitNow and Touch \'n Go.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Localized-Platform.png',
    },
    {
      title: 'Wide Esports Coverage',
      description: 'From mainstream to mobile titles, every major event is available to bet on.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Wide-Esports-Coverage.png',
    },
    {
      title: 'Live Betting Options',
      description: 'Place wagers in real-time during matches.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Live-Betting-Options.png',
    },
    {
      title: 'Secure and Licensed',
      description: 'BK8 is fully licensed and uses encrypted transactions for all payments.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Secure-and-Licensed.png',
    },
    {
      title: 'Esports-focused Providers',
      description: 'Access top-tier odds and markets from platforms like TF Gaming and IM Esports.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Esports-focused-Providers.png',
    },
    {
      title: 'Exclusive BK8 Esports Promotions',
      description: 'Stay ahead with bonus offers designed just for esports fans.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Exciting-Promotions.png',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How BK8 Became the Best Esports Casino Malaysia
          </h2>
          <p className="text-gray-700 text-lg">
            BK8 isn't just another online gambling platform, it's one of the most recognized names in the Malaysian gaming scene. Here's why it's considered the best esports casino in Malaysia:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
