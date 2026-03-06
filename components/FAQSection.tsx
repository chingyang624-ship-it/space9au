'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is SPACE9 Casino safe and secure?',
      answer:
        'Yes, SPACE9 utilizes advanced SSL encryption to protect your personal data and financial transactions. We partner only with certified and audited game providers to ensure fair play and random outcomes. Your security and privacy are our top priorities.',
    },
    {
      question: 'Can I play pokies for real money on my mobile?',
      answer:
        'Absolutely. The SPACE9 platform is fully optimized for mobile browsers, and we also offer a dedicated app for iOS and Android for a seamless mobile casino experience. You can enjoy all your favorite pokies and casino games anytime, anywhere.',
    },
    {
      question: 'How long do withdrawals take at SPACE9?',
      answer:
        'Withdrawal times depend on the chosen payment method. E-wallet and PayID transactions are typically processed within 24 hours, ensuring you get your winnings as quickly as possible. Bank transfers may take 1-3 business days depending on your bank.',
    },
    {
      question: 'What payment methods does SPACE9 accept?',
      answer:
        'SPACE9 accepts multiple secure payment methods including PayID, bank transfers, credit cards (Visa and Mastercard), and e-wallets. All payment processing is encrypted and PCI-DSS compliant for maximum security.',
    },
    {
      question: 'Are there wagering requirements on casino bonuses?',
      answer:
        'Yes, most bonuses come with wagering requirements that must be met before you can withdraw winnings. We recommend reviewing the specific terms of each promotion on our Promotions page to understand the requirements.',
    },
    {
      question: 'Is online pokies gambling legal in Australia?',
      answer:
        'Online gambling regulations in Australia are complex and vary by state. It is legal for Australian residents to play at licensed international online casinos. SPACE9 is committed to responsible gaming and complies with all applicable regulations. Always check your local laws.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
          Frequently Asked Questions (FAQ)
        </h2>

        <p className="text-gray-700 text-center mb-12 text-lg">
          Find answers to common questions about SPACE9, our games, bonuses, and responsible gaming.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:border-amber-400 transition-colors">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 bg-white hover:bg-slate-50 flex items-center justify-between transition-colors text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-amber-600 flex-shrink-0 transition-transform ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Still have questions?</h3>
          <p className="text-gray-700 mb-4">
            Our 24/7 customer support team is here to help. Contact us anytime for assistance with account issues,
            game rules, or responsible gaming resources.
          </p>
          <a
            href="mailto:support@space9.com"
            className="text-blue-600 hover:text-blue-700 font-semibold underline"
          >
            Email us at support@space9.com
          </a>
        </div>
      </div>
    </section>
  );
}
