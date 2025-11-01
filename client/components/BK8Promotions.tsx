const promotions = [
  {
    title: '288% "Have You BK8?" Welcome Bonus',
    description:
      "New players can claim a huge 288% welcome bonus on their first deposit. Whether you're into slots, sports, or live casino games, this offer gives you a solid bankroll to get started.",
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Instant-Birthday-Cash-Bonus.png',
  },
  {
    title: 'Claim 188 Slots Free Spins',
    description: 'Enjoy 188 free spins on popular slot games. A great way to explore new titles and win real cash without spending your own.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Claim-188-Slots-Free-Spins.png',
  },
  {
    title: 'Instant Birthday Cash Bonus',
    description:
      'Celebrate your birthday with a special treat from BK8. Just verify your identity, and your birthday cash will be instantly credited to your account.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Instant-Birthday-Cash-Bonus.png',
  },
  {
    title: 'You Play, We Pay',
    description:
      'This promo acts like cashback — the more you play, the more you get back. Great for regulars who want to stretch their bankrolls further.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/You-Play-We-Pay-a-kind-of-extra-financial-boost-to-start-betting.png',
  },
  {
    title: 'BK8 App Exclusive Daily Reload Bonus',
    description:
      'Using the mobile app? You get daily reload bonuses just for playing. These exclusive offers keep your balance topped up and your gameplay going strong.',
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Daily-Reload-Bonus.png',
  },
  {
    title: 'Weekly Rescue Bonus',
    description:
      "BK8 offers a weekly rebate if your week didn't go as planned. It's a little financial push to help you bounce back and keep playing with confidence.",
    image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Weekly-Rescue-Bonus.png',
  },
];

export default function BK8Promotions() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          BK8 Bonuses and Promotions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{promo.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
