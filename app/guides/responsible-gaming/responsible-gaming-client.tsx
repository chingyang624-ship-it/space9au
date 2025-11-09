'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedGuides from '@/components/RelatedGuides';

export default function ResponsibleGamingClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Responsible Gaming Guide: Gamble Safely & Stay in Control
          </h1>
          
          <div className="text-gray-600 mb-8 border-b pb-6">
            <p className="text-lg">
              Complete guide to safe, responsible online gambling. Learn strategies to stay in control and resources for help.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What is Responsible Gambling?</h2>
            <p className="text-gray-700 mb-4">
              Responsible gambling means playing for entertainment within your means, understanding the risks, and maintaining control. It's about:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Playing with money you can afford to lose</li>
              <li>Viewing gambling as entertainment, not a way to earn money</li>
              <li>Keeping gaming in perspective and maintaining other life priorities</li>
              <li>Understanding the odds and knowing the house always has an edge</li>
              <li>Being aware of time and money spent gambling</li>
            </ul>
          </section>

          <section className="mb-10 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">🎯 Safe Gambling Checklist</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" checked className="mt-1" disabled />
                <div>
                  <h3 className="font-bold text-slate-900">Set a Budget</h3>
                  <p className="text-gray-700 text-sm">Decide how much you can afford to lose before you start</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" checked className="mt-1" disabled />
                <div>
                  <h3 className="font-bold text-slate-900">Set Time Limits</h3>
                  <p className="text-gray-700 text-sm">Decide how long you'll play and stick to it</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" checked className="mt-1" disabled />
                <div>
                  <h3 className="font-bold text-slate-900">Use Deposit Limits</h3>
                  <p className="text-gray-700 text-sm">Set maximum daily/weekly/monthly deposit limits with casinos</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" checked className="mt-1" disabled />
                <div>
                  <h3 className="font-bold text-slate-900">Never Chase Losses</h3>
                  <p className="text-gray-700 text-sm">If you lose your budget, stop. Don't increase bets to recover losses</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" checked className="mt-1" disabled />
                <div>
                  <h3 className="font-bold text-slate-900">Take Regular Breaks</h3>
                  <p className="text-gray-700 text-sm">Step away from gambling regularly, especially if stressed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" checked className="mt-1" disabled />
                <div>
                  <h3 className="font-bold text-slate-900">Gamble When Sober</h3>
                  <p className="text-gray-700 text-sm">Never gamble when under the influence of alcohol or drugs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" checked className="mt-1" disabled />
                <div>
                  <h3 className="font-bold text-slate-900">Understand the Odds</h3>
                  <p className="text-gray-700 text-sm">Remember: you're more likely to lose than win. The house always has an edge</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" checked className="mt-1" disabled />
                <div>
                  <h3 className="font-bold text-slate-900">Separate Finances</h3>
                  <p className="text-gray-700 text-sm">Use a separate account for gambling funds; never mix with bills or savings</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Warning Signs of Problem Gambling</h2>
            
            <p className="text-gray-700 mb-6">
              If you notice any of these signs in yourself or someone else, seek help immediately:
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <h3 className="font-bold text-red-900 mb-3">Personal Warning Signs:</h3>
              <ul className="list-disc list-inside text-red-900 space-y-1">
                <li>Gambling more often or for longer periods than intended</li>
                <li>Unable to reduce or control gambling despite trying</li>
                <li>Neglecting work, family, or other commitments because of gambling</li>
                <li>Gambling to escape problems or negative feelings</li>
                <li>Lying to family members about gambling habits or losses</li>
                <li>Increasing bet amounts to maintain excitement</li>
                <li>Feeling restless or irritable when not gambling</li>
                <li>Borrowing money to gamble or pay off gambling debts</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-bold text-red-900 mb-3">External Warning Signs:</h3>
              <ul className="list-disc list-inside text-red-900 space-y-1">
                <li>Preoccupation with gambling topics</li>
                <li>Sudden mood changes or depression</li>
                <li>Missing work, school, or social events</li>
                <li>Inability to meet financial obligations</li>
                <li>Relationship problems due to gambling</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Getting Help: Resources Available</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border-2 border-amber-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Gambler's Help Victoria</h3>
                <p className="text-gray-700 text-sm mb-3">Free confidential counselling and support</p>
                <p className="text-amber-700 font-semibold text-lg">1800 858 858</p>
                <p className="text-gray-600 text-xs mt-3">Available 24 hours, 7 days a week</p>
              </div>

              <div className="border-2 border-amber-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">National Gambling Helpline</h3>
                <p className="text-gray-700 text-sm mb-3">Australia-wide free counselling</p>
                <p className="text-amber-700 font-semibold text-lg">1800 858 858</p>
                <p className="text-gray-600 text-xs mt-3">Professional counsellors available</p>
              </div>

              <div className="border-2 border-amber-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Gamblers Anonymous</h3>
                <p className="text-gray-700 text-sm mb-3">Peer support groups</p>
                <p className="text-amber-700 font-semibold">www.gamblersanonymous.org.au</p>
                <p className="text-gray-600 text-xs mt-3">Regular meetings across Australia</p>
              </div>

              <div className="border-2 border-amber-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">BetStop Self-Exclusion</h3>
                <p className="text-gray-700 text-sm mb-3">National self-exclusion register</p>
                <p className="text-amber-700 font-semibold">www.betstop.com.au</p>
                <p className="text-gray-600 text-xs mt-3">6-12 month exclusion option</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Bankroll Management Strategies</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The 1% Rule</h3>
                <p className="text-gray-700 mb-3">
                  Limit each bet to 1% of your total bankroll. This helps preserve your budget over time.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                  <p className="text-sm"><strong>Example:</strong> If you have $200 budget, max bet is $2 per spin</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Session-Based Limits</h3>
                <p className="text-gray-700 mb-3">
                  Divide your weekly/monthly budget into smaller sessions. Stop when the session ends, win or lose.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                  <p className="text-sm"><strong>Example:</strong> $100/week = 4 sessions of $25 each, 1 hour per session</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Win/Loss Limits</h3>
                <p className="text-gray-700 mb-3">
                  Set a win goal and loss limit. If you hit either, stop playing immediately.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                  <p className="text-sm"><strong>Example:</strong> Win limit $50, loss limit $40—stop when either is reached</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-amber-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Remember These Golden Rules</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Gamble for fun, not profit.</strong> No gambling system can beat the house edge.</li>
              <li><strong>Only bet what you can lose.</strong> Never use money for bills, rent, or savings.</li>
              <li><strong>Set strict limits and stick to them.</strong> Discipline is your best tool.</li>
              <li><strong>Take regular breaks.</strong> Gambling non-stop increases the risk of problems.</li>
              <li><strong>Never chase losses.</strong> This is how small losses become big problems.</li>
              <li><strong>Seek help early.</strong> The sooner you address a problem, the easier recovery is.</li>
            </ul>
          </section>
        </article>
      </main>
      <RelatedGuides currentPage="/guides/responsible-gaming" />
      <Footer />
    </div>
  );
}
