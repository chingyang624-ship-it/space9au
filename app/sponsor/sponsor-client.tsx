'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SponsorClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sponsorship Programs</h1>
          <p className="text-xl text-gray-300">
            Partner with SPACE9 Casino - Australia's Leading Online Gaming Platform
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Sponsor with SPACE9?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                SPACE9 Casino is Australia's #1 trusted online gaming platform, reaching thousands
                of active players daily. Our sponsorship opportunities offer exceptional visibility
                and partnership benefits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Brand Visibility</h3>
                <p className="text-gray-700">
                  Get exposure to our engaged audience of casino enthusiasts and gaming
                  professionals across Australia.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Partnerships</h3>
                <p className="text-gray-700">
                  Develop meaningful partnerships that align with your brand values and business
                  objectives.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Marketing Support</h3>
                <p className="text-gray-700">
                  We provide comprehensive marketing support to maximize the impact of your
                  sponsorship investment.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Measurable Results</h3>
                <p className="text-gray-700">
                  Track your sponsorship performance with detailed analytics and reporting.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Get in Touch</h3>
              <p className="text-gray-700 mb-6">
                Ready to explore sponsorship opportunities with SPACE9 Casino? Contact our
                partnerships team to discuss your requirements.
              </p>
              <a
                href="mailto:partnerships@space9.com"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Partnerships Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
