export default function BK8LiveCasinoProviderShowcase() {
  const providerCards = [
    {
      name: "Evolution Live Casino",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-evo.webp",
      badge: "Hot",
      badgeColor: "bg-orange-500",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      name: "AE Live Casino",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-ug.webp",
      badge: "Hot",
      badgeColor: "bg-orange-500",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      name: "WM Live Casino",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-wm.webp",
      badge: "New",
      badgeColor: "bg-red-600",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      name: "Dragon Live Casino",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-dg.webp",
      badge: "Hot",
      badgeColor: "bg-orange-500",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      name: "Microgaming Live Casino",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-mg.webp",
      badge: "Hot",
      badgeColor: "bg-orange-500",
      link: "https://bk8mycasino.com/go/livecasino",
    },
    {
      name: "BBin Live Casino",
      image: "https://bk8mycasino.com/wp-content/uploads/2023/08/casino-binl.webp",
      badge: null,
      badgeColor: null,
      link: "https://bk8mycasino.com/go/livecasino",
    },
  ];

  return (
    <section className="bg-gray-100 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {providerCards.map((provider) => (
            <a
              key={provider.name}
              href={provider.link}
              target="_blank"
              rel="sponsored noopener"
              className="relative group"
            >
              {provider.badge && (
                <div
                  className={`absolute top-2 right-2 ${provider.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full z-10`}
                >
                  {provider.badge}
                </div>
              )}
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full h-auto rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
