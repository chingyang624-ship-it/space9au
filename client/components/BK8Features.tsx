export default function BK8Features() {
  const features = [
    {
      title: 'Customer Support',
      description:
        'BK8 Malaysia provides reliable, around-the-clock customer service through live chat, WhatsApp, and email in multiple languages, ensuring quick, polite, and professional responses for a smooth experience.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Customer-Support.png',
    },
    {
      title: 'User-Friendly Interface',
      description:
        'BK8 features a user-friendly interface designed for seamless play across both desktop and mobile platforms, ensuring easy navigation and smooth gameplay.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/User-Friendly-Interface.png',
    },
    {
      title: 'Multiple Payment Options',
      description:
        'BK8 supports a wide range of payment methods, including local Malaysian bank transfers, e-wallets, and cryptocurrency, allowing users to deposit and withdraw funds with ease through fast transactions, minimal delays, and no hidden charges.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Multiple-Payment-Options.png',
    },
    {
      title: 'Licensed and Secure',
      description:
        'BK8 Casino Malaysia is fully licensed by a recognized international regulator, ensuring that every game is tested for fairness, every transaction is encrypted, and your data, money, and trust are always protected.',
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/06/Licensed-and-Secure.png',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Why Choose BK8 Malaysia?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-6">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-32 h-32 flex-shrink-0 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
