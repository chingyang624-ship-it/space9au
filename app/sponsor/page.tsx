import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SPACE9 Casino Sponsorships - Partner With Us",
  description:
    "Join SPACE9 Casino as a sponsor or partner. Explore sponsorship opportunities and partnership programs with Australia's #1 online gaming platform.",
  openGraph: {
    title: "SPACE9 Casino Sponsorships",
    description: "Sponsorship and partnership opportunities with SPACE9 Casino",
    url: "https://space9au.net/sponsor",
    type: "website",
  },
};

export default function Sponsor() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-b from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Partner With SPACE9 Casino
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Explore sponsorship and partnership opportunities with Australia's
            leading online gaming platform
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Sponsorship Opportunities
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Why Partner With SPACE9?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Australia's #1 trusted online casino platform</li>
                  <li>✓ Millions of active users and engaged community</li>
                  <li>✓ Premium brand association and visibility</li>
                  <li>✓ Customized sponsorship packages</li>
                  <li>✓ Multi-channel marketing exposure</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Partnership Options
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-amber-50 rounded">
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Events & Sports Sponsorship
                    </h4>
                    <p className="text-gray-700">
                      Partner with SPACE9 to sponsor major sporting events and
                      esports tournaments
                    </p>
                  </div>

                  <div className="p-4 bg-amber-50 rounded">
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Brand Partnerships
                    </h4>
                    <p className="text-gray-700">
                      Collaborate with SPACE9 for co-marketing initiatives and
                      brand collaborations
                    </p>
                  </div>

                  <div className="p-4 bg-amber-50 rounded">
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Affiliate Programs
                    </h4>
                    <p className="text-gray-700">
                      Join our affiliate network and earn competitive
                      commissions
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Interested in Partnering With Us?
                </h3>
                <p className="text-gray-700 mb-6">
                  Contact our partnership team to discuss custom sponsorship
                  opportunities
                </p>
                <a
                  href="mailto:partnership@space9.com"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
