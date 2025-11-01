import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function BK8EsportsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is esports betting legal in Malaysia?',
      answer: 'While online gambling laws in Malaysia are complex, many Malaysians legally access licensed offshore sites like BK8.',
    },
    {
      question: 'What esports games can I bet on at BK8?',
      answer: 'You can bet on Dota 2, League of Legends, CS:GO, Mobile Legends, PUBG Mobile, and Valorant among others. Visit our Top Esports Titles to Bet in BK8 guide for more information.',
    },
    {
      question: 'Can I watch live esports matches while betting?',
      answer: 'Yes. Many providers at BK8 offer integrated live match tracking and streaming features.',
    },
    {
      question: 'How are esports odds calculated?',
      answer: 'Odds are based on real-time performance data, past results, team strength, and betting trends—similar to traditional sports betting.',
    },
    {
      question: 'Which provider offers the best esports coverage at BK8?',
      answer: 'TF Gaming and IM Esports are top-tier options, each offering unique features and extensive game coverage. Besides that, BK8 also offers many bonuses and promotions to encourage users to continue betting.',
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          FAQs
        </h2>

        <div className="max-w-3xl">
          {faqs.map((faq, index) => (
            <details
              key={index}
              open={index === openIndex}
              className="border border-gray-200 rounded-lg mb-4"
            >
              <summary
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="flex items-center justify-between w-full p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-500 transition-transform ${
                    index === openIndex ? 'rotate-180' : ''
                  }`}
                />
              </summary>
              <div className="px-4 pb-4 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
