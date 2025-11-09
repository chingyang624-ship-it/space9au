'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ComplianceClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Compliance & Responsible Gaming
          </h1>
          <p className="text-lg text-gray-700">
            SPACE9 is committed to promoting responsible gaming and maintaining the highest standards of legal compliance across all Australian markets.
          </p>
        </section>

        {/* Age Restrictions */}
        <section className="mb-12 border-b pb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">⚠️ Age Restrictions</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
            <p className="text-lg font-semibold text-amber-900">
              You must be 18 years or older to access this site and participate in online gambling.
            </p>
          </div>
          <p className="text-gray-700 mb-3">
            Online gambling is strictly regulated in Australia. By accessing SPACE9, you confirm that:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You are 18 years of age or older</li>
            <li>You comply with all local laws and regulations in your jurisdiction</li>
            <li>You understand the risks associated with online gambling</li>
            <li>You are not accessing this site from a restricted jurisdiction</li>
          </ul>
        </section>

        {/* Responsible Gaming */}
        <section className="mb-12 border-b pb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">🎯 Responsible Gaming</h2>
          <p className="text-gray-700 mb-4">
            Gambling should be entertainment only, never a source of income. SPACE9 is dedicated to promoting responsible gaming practices among all our users.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-blue-900 mb-3">Tips for Responsible Gaming:</h3>
            <ul className="space-y-2 text-blue-900">
              <li>✓ Set strict spending limits and stick to them</li>
              <li>✓ Never chase losses</li>
              <li>✓ Take regular breaks</li>
              <li>✓ Never gamble when stressed, depressed, or under the influence</li>
              <li>✓ Keep gaming as a form of entertainment</li>
              <li>✓ Understand the odds - the house always has an edge</li>
            </ul>
          </div>
        </section>

        {/* Problem Gambling Support */}
        <section className="mb-12 border-b pb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">🆘 Problem Gambling Support</h2>
          <p className="text-gray-700 mb-4">
            If you or someone you know is struggling with problem gambling, help is available:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Gambler's Help</h3>
              <p className="text-gray-700 mb-3">Victoria's counselling and support service for problem gambling</p>
              <p className="text-amber-700 font-semibold">1800 858 858 (Free, 24/7)</p>
              <p className="text-sm text-gray-600 mt-2">www.gamblinghelponline.org.au</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">National Gambling Helpline</h3>
              <p className="text-gray-700 mb-3">Free confidential counselling across Australia</p>
              <p className="text-amber-700 font-semibold">1800 858 858</p>
              <p className="text-sm text-gray-600 mt-2">www.ncpg.org.au</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Gamblers Anonymous</h3>
              <p className="text-gray-700 mb-3">Peer support groups for gambling addiction</p>
              <p className="text-amber-700 font-semibold">www.gamblersanonymous.org.au</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Self-Exclusion Options</h3>
              <p className="text-gray-700 mb-3">Register on BetStop self-exclusion register</p>
              <p className="text-amber-700 font-semibold">www.betstop.com.au</p>
              <p className="text-sm text-gray-600 mt-2">National self-exclusion program</p>
            </div>
          </div>
        </section>

        {/* Legal Compliance */}
        <section className="mb-12 border-b pb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">⚖️ Legal Compliance</h2>
          <p className="text-gray-700 mb-4">
            Online gambling in Australia is regulated by various state and federal authorities. SPACE9 operates in compliance with all applicable regulations.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-slate-900 mb-2">Interactive Gambling Act 2001</h3>
              <p className="text-gray-700 text-sm">
                SPACE9 complies with the Interactive Gambling Act 2001 and amendments, which regulate online gambling in Australia.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-slate-900 mb-2">State Regulations</h3>
              <p className="text-gray-700 text-sm">
                Individual states maintain additional gambling regulations. Users should verify compliance with their local jurisdiction.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-slate-900 mb-2">Licensing & Verification</h3>
              <p className="text-gray-700 text-sm">
                All partner casinos featured on SPACE9 are properly licensed and regulated by recognized gaming authorities.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy & Data Protection */}
        <section className="mb-12 border-b pb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">🔒 Privacy & Data Protection</h2>
          <p className="text-gray-700 mb-4">
            Your privacy and data security are paramount. SPACE9 implements industry-standard encryption and security measures to protect your information.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>All transactions are encrypted with SSL 256-bit security</li>
            <li>Personal data is never sold to third parties</li>
            <li>Cookies are used solely for functionality and analytics</li>
            <li>GDPR compliant data handling practices</li>
            <li>Regular security audits and compliance checks</li>
          </ul>
        </section>

        {/* Disclaimer */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">📋 Disclaimer</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-gray-700 text-sm mb-3">
              SPACE9 is an informational resource about online casinos and pokies. We do not offer gambling services directly. We are not licensed gaming operators.
            </p>
            <p className="text-gray-700 text-sm mb-3">
              Users are solely responsible for verifying the legality of online gambling in their jurisdiction before participating. By using SPACE9, you acknowledge that you have read this disclaimer and agree to comply with all applicable laws.
            </p>
            <p className="text-gray-700 text-sm">
              SPACE9 is not liable for losses incurred through online gambling. Please gamble responsibly and only with funds you can afford to lose.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-amber-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Questions About Compliance?</h2>
          <p className="text-gray-700 mb-4">
            For inquiries about SPACE9's compliance practices or responsible gaming commitments, please contact us:
          </p>
          <p className="text-amber-700 font-semibold">
            Email: support@space9.com
          </p>
          <p className="text-gray-700 text-sm mt-2">
            We are available 24/7 to address your concerns.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
