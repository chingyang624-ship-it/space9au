'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionItem } from '@/components/ui/accordion';

const faqs = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'What is SPACE9?',
        a: 'SPACE9 is Australia\'s trusted online casino and pokies guide. We provide expert strategies, game reviews, and comprehensive information to help Australian players make informed decisions about online gaming.',
      },
      {
        q: 'Is online gambling legal in Australia?',
        a: 'Online gambling is regulated by the Interactive Gambling Act 2001. While some forms of online gambling are legal for Australians, regulations vary by state. We recommend verifying local laws in your jurisdiction before participating.',
      },
      {
        q: 'Do you offer gambling services directly?',
        a: 'No. SPACE9 is an informational resource only. We do not operate a casino or accept bets. We provide guides and information to help you understand online gaming options.',
      },
      {
        q: 'How do I get started with online pokies?',
        a: 'To play online pokies: 1) Choose a licensed online casino, 2) Create an account with valid ID verification, 3) Make a deposit, 4) Select your favorite pokie game, 5) Set a budget and play responsibly.',
      },
    ],
  },
  {
    category: 'Pokies & Games',
    items: [
      {
        q: 'What is RTP and why does it matter?',
        a: 'RTP (Return to Player) is a percentage indicating how much a pokie pays back to players over time. For example, a 95% RTP means the game returns 95% of wagered money. Higher RTP is generally better for players. Check game details for RTP information.',
      },
      {
        q: 'How do pokies work?',
        a: 'Modern pokies use Random Number Generators (RNG) to ensure fair, unpredictable outcomes. Each spin is independent - previous results don\'t affect future spins. You select your bet, spin, and win if symbols match payline combinations.',
      },
      {
        q: 'Can I improve my chances of winning?',
        a: 'Pokies are games of chance with no skill element. You cannot improve odds through strategy. However, you can: choose high RTP games, use bankroll management, take breaks, and play for entertainment only.',
      },
      {
        q: 'What\'s the difference between pokies and table games?',
        a: 'Pokies are machine-based games of pure chance. Table games like blackjack, roulette, and poker involve more strategy elements. Both have house edges, but table games may offer slightly better odds with optimal strategy.',
      },
    ],
  },
  {
    category: 'Bonuses & Promotions',
    items: [
      {
        q: 'What is a welcome bonus?',
        a: 'A welcome bonus is a promotional offer for new players. It typically includes matched deposit bonuses (casino matches your deposit) or free spins. Always read terms and conditions regarding wagering requirements and withdrawal limits.',
      },
      {
        q: 'What are wagering requirements?',
        a: 'Wagering requirements specify how many times you must play through bonus money before withdrawing. For example, a 30x requirement on a $100 bonus means wagering $3,000. Always check before claiming bonuses.',
      },
      {
        q: 'Are free spins worth it?',
        a: 'Free spins can be valuable but read the terms carefully. Check the game restrictions, wagering requirements, and maximum win caps. Free spins are worthwhile if you would play anyway, but don\'t trigger wagering requirements you can\'t meet.',
      },
      {
        q: 'How do VIP programs work?',
        a: 'VIP programs reward loyal players with benefits like cashback, exclusive bonuses, faster withdrawals, and dedicated support. Loyalty points accumulate with play and can be redeemed for rewards.',
      },
    ],
  },
  {
    category: 'Payments & Withdrawals',
    items: [
      {
        q: 'What payment methods are accepted?',
        a: 'Most Australian online casinos accept: Credit/debit cards, PayID/Osko, bank transfers, e-wallets, and cryptocurrency. The fastest method is typically PayID for deposits and withdrawals.',
      },
      {
        q: 'How long do withdrawals take?',
        a: 'Processing times vary: PayID (instant to 2 hours), bank transfer (1-3 business days), cards (3-5 days). Your bank may add additional processing time.',
      },
      {
        q: 'Are my payment details safe?',
        a: 'Licensed casinos use 256-bit SSL encryption and comply with PCI DSS security standards. Your payment data is encrypted and protected. Never share login credentials or use unsecured networks.',
      },
      {
        q: 'Can I withdraw my winnings anytime?',
        a: 'Generally yes, but subject to: account verification, anti-money laundering checks, and wagering requirement completion (if bonuses were claimed). Most casinos process withdrawals within stated timeframes.',
      },
    ],
  },
  {
    category: 'Responsible Gaming',
    items: [
      {
        q: 'How much should I budget for gaming?',
        a: 'Set a strict budget you can afford to lose entirely. A common guideline is 1-5% of monthly entertainment budget. Never borrow money to gamble, and never chase losses.',
      },
      {
        q: 'What\'s the best bankroll management strategy?',
        a: 'Divide your budget into sessions. For example, if you have $100 for the week, play 4 sessions of $25. Only use money you allocated for entertainment, not bills or essential expenses.',
      },
      {
        q: 'What warning signs indicate problem gambling?',
        a: 'Red flags include: gambling more than intended, hiding gambling, missing work/family obligations, using borrowed money, or feeling anxious without gambling. Seek help immediately if you notice these patterns.',
      },
      {
        q: 'Where can I get help for problem gambling?',
        a: 'Free resources: Gambler\'s Help (1800 858 858), National Gambling Helpline, Gamblers Anonymous Australia, and BetStop (national self-exclusion). All services are confidential.',
      },
      {
        q: 'What is BetStop?',
        a: 'BetStop is Australia\'s national self-exclusion register. Registering blocks access to participating online gambling sites for 6-12 months. It\'s a free tool for self-control.',
      },
    ],
  },
  {
    category: 'Account & Security',
    items: [
      {
        q: 'What documents do I need to verify my account?',
        a: 'Typically: valid ID (driver\'s license, passport), proof of address (utility bill, bank statement), and proof of payment method. Requirements vary by casino and AML regulations.',
      },
      {
        q: 'Why does verification take so long?',
        a: 'Verification protects against fraud and money laundering. Casinos must comply with strict AML/KYC regulations. Most verifications complete within 24-48 hours.',
      },
      {
        q: 'Is my personal data safe?',
        a: 'Licensed casinos protect data with encryption, firewalls, and regular security audits. Your data is never sold. Always use strong passwords and enable two-factor authentication if available.',
      },
      {
        q: 'What should I do if my account is compromised?',
        a: 'Contact casino support immediately. Change your password, enable two-factor authentication, and monitor your account. Never share login details via email or phone calls.',
      },
    ],
  },
  {
    category: 'Games & Providers',
    items: [
      {
        q: 'Who are the best game providers?',
        a: 'Top providers include Pragmatic Play, Microgaming, NetEnt, Playtech, JILI, BNG, and others. These companies must be licensed and audited for fairness.',
      },
      {
        q: 'Are online pokies fair?',
        a: 'Licensed casinos using certified RNG software are fair. Independent auditors test games regularly. Only play at licensed casinos with certification from reputable testing bodies.',
      },
      {
        q: 'What\'s the difference between classic and video pokies?',
        a: 'Classic pokies have 3 reels and simple gameplay. Video pokies have 5+ reels, multiple paylines, animations, and bonus features. Video pokies offer more excitement but similar house edges.',
      },
      {
        q: 'Can I play live casino games?',
        a: 'Yes. Licensed online casinos offer live dealer games (blackjack, roulette, baccarat) streamed in real-time. These require higher stakes but offer authentic casino experiences.',
      },
    ],
  },
];

export default function FAQClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-700">
            Find answers to common questions about online pokies, casinos, bonuses, and responsible gaming in Australia.
          </p>
        </section>

        {faqs.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{section.category}</h2>
            <Accordion className="space-y-4">
              {section.items.map((item, itemIdx) => (
                <AccordionItem
                  key={itemIdx}
                  value={`${idx}-${itemIdx}`}
                  trigger={<span className="font-semibold">{item.q}</span>}
                >
                  <div className="text-gray-700">{item.a}</div>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}

        <section className="bg-amber-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Still Have Questions?</h2>
          <p className="text-gray-700 mb-4">
            Can't find the answer you're looking for? Our support team is available 24/7 to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@space9.com"
              className="inline-block bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition"
            >
              Email Support
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-amber-700 text-amber-700 px-6 py-3 rounded-lg hover:bg-amber-50 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
