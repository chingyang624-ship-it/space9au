import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is BK8 a legal and licensed online casino in Malaysia?',
    answer:
      'Yes, BK8 is fully licensed and regulated by a recognized international gaming authority. The platform operates legally and adheres to strict standards for security, fairness, and responsible gaming.',
  },
  {
    question: 'What types of casino games can I play on BK8 Malaysia?',
    answer:
      'BK8 offers a wide variety of games, including live casino tables, online slots, sports betting, eSports betting, fishing games, and lottery. All games are powered by trusted and reputable providers.',
  },
  {
    question: 'How do I register for a BK8 account?',
    answer:
      'To register, visit the official BK8 Malaysia website, click on the "Join Now" or "Register" button, fill out the required information, and submit your registration. Once verified, you can log in and start playing.',
  },
  {
    question: 'How can I deposit money into my BK8 account?',
    answer:
      'Deposits can be made via local bank transfers, e-wallets (Touch n Go, Boost, GrabPay), and cryptocurrencies. Simply log in, go to the cashier or wallet section, choose your preferred method, and follow the instructions.',
  },
  {
    question: 'What are the withdrawal methods and how long do they take?',
    answer:
      'Withdrawals can be made via local bank transfers or e-wallets. Processing time is typically within 15 minutes to a few hours, depending on the payment method and bank verification.',
  },
  {
    question: 'Is there a BK8 mobile app?',
    answer:
      'Yes, BK8 has a dedicated mobile app available for both Android and iOS devices. It offers full access to games, promotions, and account management features for on-the-go convenience.',
  },
  {
    question: 'How Do I Claim the BK8 Casino Free Bonus?',
    answer:
      'You can claim free bonuses by registering an account and visiting the promotions page. Follow the terms listed for each promotion, such as minimum deposits or game eligibility, and the bonus will be credited to your account.',
  },
  {
    question: 'Is it safe to play and share personal information on BK8?',
    answer:
      'Yes, BK8 uses advanced SSL encryption and follows strict data protection protocols to ensure your personal and financial details are kept secure at all times.',
  },
  {
    question: 'What is the minimum deposit amount to start playing?',
    answer:
      'The minimum deposit amount varies slightly depending on the payment method, but generally starts from as low as RM10, making it accessible to all players.',
  },
  {
    question: 'How does BK8 ensure fair play and game integrity?',
    answer:
      'All games at BK8 are regularly tested and certified by independent auditors to ensure fairness and compliance with industry standards. The platform uses certified random number generators and maintains transparency in all gaming operations.',
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
      >
        <span className="text-left font-semibold text-gray-900">{question}</span>
        <ChevronDown
          size={20}
          className={`text-gray-600 flex-shrink-0 ml-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function BK8FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
