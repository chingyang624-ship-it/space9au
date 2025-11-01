export default function BK8LiveCasinoProviders() {
  const providers = [
    {
      name: "Evolution",
      logo: "https://bk8mycasino.com/wp-content/uploads/2025/06/EG.png",
      description: "Evolution is the gold standard in live casino software. Known for game shows like Crazy Time and Lightning Roulette, as well as premium blackjack and baccarat tables, Evolution brings innovative features and multi-language dealers. Their real-time streaming is flawless, making them a top choice for players across live casino online Malaysia.",
    },
    {
      name: "Microgaming",
      logo: "https://bk8mycasino.com/wp-content/uploads/2025/06/microgaming-logo-300x212.png",
      description: "Microgaming's live tables offer a clean, reliable interface with classic games like roulette, blackjack, and baccarat. The streams are smooth, the betting system is intuitive, and mobile performance is top-notch.",
    },
    {
      name: "AE Casino",
      logo: "https://bk8mycasino.com/wp-content/uploads/2025/06/AE-casino.png",
      description: "AE Casino, also known as AE Sexy, is wildly popular in Southeast Asia. With attractive live dealers fluent in Mandarin and Malay, the tables feel personal and localized. AE Casino focuses on games like Sexy Baccarat, which blends engaging gameplay with a high-energy presentation, perfect for the live game online casino Malaysia crowd.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Trusted Live Casino Providers at BK8
        </h2>
        <p className="text-gray-700 text-lg mb-12 max-w-3xl">
          To guarantee a high-quality experience, BK8 live casino partners with only the most reputable live gaming providers. Here are the main ones:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {providers.map((provider) => (
            <div key={provider.name} className="flex flex-col">
              <div className="mb-6 flex justify-center">
                <img
                  src={provider.logo}
                  alt={`${provider.name} logo`}
                  className="max-h-24 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {provider.name}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {provider.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
