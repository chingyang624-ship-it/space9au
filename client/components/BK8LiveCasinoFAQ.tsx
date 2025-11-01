import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function BK8LiveCasinoFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is BK8 legal for live casino Malaysia play?",
      answer:
        "Yes, BK8 is licensed and regulated, offering a legal and trusted live casino environment for Malaysian players.",
    },
    {
      question: "What are the most popular live casino games Malaysia players enjoy?",
      answer:
        "Top live casino online games include Live Baccarat, Lightning Roulette, Blackjack, Sic Bo, and Dragon Tiger.",
    },
    {
      question: "Can I chat with real dealers while playing?",
      answer:
        "Absolutely. All BK8 live casino tables have chat features that allow you to interact with the dealer and other players.",
    },
    {
      question: "Is there a minimum bet for bk8 live casino tables?",
      answer:
        "Yes, minimum bets vary by provider and game type but generally start from as low as RM5.",
    },
    {
      question: "Do live games work well on mobile devices?",
      answer:
        "Yes, all live games are mobile-optimized for smooth play on both smartphones and tablets.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          FAQs
        </h2>

        <div className="space-y-3 max-w-3xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 transition-transform flex-shrink-0 ml-4 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-300">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
