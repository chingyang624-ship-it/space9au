'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SelfExclusionClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Self-Exclusion Guide: BetStop & How to Take a Gambling Break
          </h1>
          
          <div className="text-gray-600 mb-8 border-b pb-6">
            <p className="text-lg">
              Complete guide to self-exclusion in Australia. Learn how to use BetStop, casino programs, and state-based tools to control your gambling.
            </p>
          </div>

          <section className="mb-10 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">🆘 Need Help Right Now?</h2>
            <p className="text-gray-700 mb-4">If you're struggling with problem gambling:</p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Gambler's Help (Victoria):</strong> 1800 858 858</p>
              <p><strong>National Gambling Helpline:</strong> 1800 858 858</p>
              <p><strong>Gamblers Anonymous:</strong> www.gamblersanonymous.org.au</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What is Self-Exclusion?</h2>
            <p className="text-gray-700 mb-4">
              Self-exclusion is a voluntary tool that restricts your access to online and offline gambling. When you self-exclude:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Your account(s) are blocked from login and deposits</li>
              <li>You cannot access gaming sites for a set period</li>
              <li>You receive regular reminders about your exclusion</li>
              <li>The process is reversible (can be cancelled at the end of the period)</li>
              <li>It's often paired with counselling or support services</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What is BetStop?</h2>
            <p className="text-gray-700 mb-4">
              BetStop is Australia's national self-exclusion program. It's a government-backed tool that allows you to exclude from participating online gambling sites for 6 or 12 months.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Key Facts About BetStop:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Free service:</strong> No cost to register</li>
                <li><strong>National coverage:</strong> Works across participating Australian licensed casinos</li>
                <li><strong>Duration:</strong> 6-month or 12-month exclusion</li>
                <li><strong>Website:</strong> www.betstop.com.au</li>
                <li><strong>Binding:</strong> Casinos cannot override your exclusion</li>
                <li><strong>No refunds:</strong> Existing funds are forfeited</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Register with BetStop</h2>
            
            <ol className="list-decimal list-inside text-gray-700 space-y-4 ml-2">
              <li>
                <strong>Visit BetStop.com.au:</strong> Go to the official BetStop website.
              </li>
              <li>
                <strong>Create an Account:</strong> Register with your email and personal details.
              </li>
              <li>
                <strong>Choose Your Period:</strong> Select 6 months or 12 months of exclusion.
              </li>
              <li>
                <strong>Link Your Accounts:</strong> List all online gambling accounts you want excluded.
              </li>
              <li>
                <strong>Confirm Your Details:</strong> Verify your information and complete registration.
              </li>
              <li>
                <strong>You're Registered:</strong> Participating casinos will block your accounts immediately.
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Types of Self-Exclusion Programs</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-slate-900 mb-2">National Self-Exclusion (BetStop)</h3>
                <p className="text-gray-700">
                  Covers most licensed online casinos across Australia. One registration protects you across multiple sites.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-slate-900 mb-2">State-Based Programs</h3>
                <p className="text-gray-700">
                  Individual states may have their own self-exclusion registers for land-based venues. Check your state's regulations.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-slate-900 mb-2">Casino-Specific Self-Exclusion</h3>
                <p className="text-gray-700">
                  Individual casinos offer their own self-exclusion. Useful if you want to exclude from specific sites only.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-slate-900 mb-2">Third-Party Programs</h3>
                <p className="text-gray-700">
                  Organizations like Gambler's Help can assist with self-exclusion and provide counselling support.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Self-Exclude from a Specific Casino</h2>
            
            <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-2">
              <li>
                <strong>Log Into Your Account:</strong> Access your casino account.
              </li>
              <li>
                <strong>Find Account Settings:</strong> Look for "Responsible Gaming" or "Self-Exclusion" in settings.
              </li>
              <li>
                <strong>Select Self-Exclusion:</strong> Choose the self-exclusion option.
              </li>
              <li>
                <strong>Choose Duration:</strong> Select 6, 12, or 24 months.
              </li>
              <li>
                <strong>Confirm Your Decision:</strong> You may be asked why or offered support resources.
              </li>
              <li>
                <strong>Verify Exclusion:</strong> Your account will be locked immediately.
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Self-Exclusion vs. Account Suspension</h2>
            
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left font-bold">Factor</th>
                  <th className="border p-3 text-left font-bold">Self-Exclusion</th>
                  <th className="border p-3 text-left font-bold">Account Suspension</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Purpose</td>
                  <td className="border p-3">Help you control gambling</td>
                  <td className="border p-3">Temporary account lock</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Duration</td>
                  <td className="border p-3">6-24 months fixed</td>
                  <td className="border p-3">Can vary or be permanent</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Cancellation</td>
                  <td className="border p-3">Not before time ends</td>
                  <td className="border p-3">Can be appealed</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Funds</td>
                  <td className="border p-3">Forfeited typically</td>
                  <td className="border p-3">Usually returned</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Self-Exclude?</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">✓ Take Control Back</h3>
                <p className="text-gray-700 text-sm">
                  Self-exclusion removes temptation and takes the decision out of your hands. You can't "just quickly" gamble.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">✓ Create Accountability</h3>
                <p className="text-gray-700 text-sm">
                  The formal process makes your commitment real. It's harder to ignore a registered exclusion.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">✓ Give Yourself Time</h3>
                <p className="text-gray-700 text-sm">
                  A forced break helps break the habit cycle and gives you time to find healthier coping strategies.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">✓ Reduce Harm</h3>
                <p className="text-gray-700 text-sm">
                  Self-exclusion prevents further losses while you address underlying issues with professional help.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">✓ Protect Family & Finances</h3>
                <p className="text-gray-700 text-sm">
                  A documented exclusion shows commitment to protecting your finances and relationships.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What to Do After Self-Excluding</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-slate-900">Seek Professional Help</h3>
                <p className="text-gray-700">
                  Contact Gambler's Help (1800 858 858) or Gamblers Anonymous for counselling. Professional support significantly improves outcomes.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-slate-900">Find Healthier Activities</h3>
                <p className="text-gray-700">
                  Replace gambling time with exercise, hobbies, or social activities. Build new habits during the exclusion period.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-slate-900">Address Underlying Issues</h3>
                <p className="text-gray-700">
                  Gambling is often a symptom of stress, depression, or anxiety. Address root causes with professional help.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-slate-900">Manage Your Finances</h3>
                <p className="text-gray-700">
                  Recovery time is a chance to rebuild financial stability. Create a budget and savings plan.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-slate-900">Rebuild Relationships</h3>
                <p className="text-gray-700">
                  Use the break to repair trust with family and friends. Their support is crucial for long-term recovery.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-amber-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Self-exclusion is a powerful tool for taking control of gambling habits</li>
              <li>BetStop is Australia's national self-exclusion program (www.betstop.com.au)</li>
              <li>Durations range from 6-24 months; cannot be cancelled mid-period</li>
              <li>Self-exclude from specific casinos directly or use BetStop for national coverage</li>
              <li>Always pair self-exclusion with professional counselling for best results</li>
              <li>Gambler's Help: 1800 858 858 (24/7 free support)</li>
              <li>Recovery takes time—use the break to build healthier habits</li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
