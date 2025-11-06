import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "SPACE9 Casino Promotions & Bonuses - Welcome Bonus, Free Spins & Exclusive Offers",
  description:
    "Unlock exclusive SPACE9 promotions: welcome bonuses, free spins on pokies, live casino bonuses, VIP rewards & sports betting deals. Maximize Australian casino winnings with SPACE9's best exclusive offers today.",
  openGraph: {
    title: "SPACE9 Casino Promotions & Bonuses",
    description:
      "Exclusive casino promotions, bonuses, and rewards for SPACE9 players. Welcome offers, free spins, VIP programs, and more.",
    url: "https://space9au.net/promotions",
    type: "website",
  },
};

export default function Promotions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-b from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            SPACE9 Casino Promotions & Bonuses
          </h1>
          <p className="text-xl text-gray-300 text-center">
            Unlock exclusive promotions and maximize your winning potential
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            <div className="text-center">
              <a
                href="https://space9au.com/RFGOOGLESEO99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F8c45d351165444cea245ced7b4f94797"
                  alt="VIP Program Check-in Program"
                  className="w-full max-w-2xl rounded hover:opacity-90 transition-opacity"
                />
              </a>
            </div>

            <div className="text-center">
              <a
                href="https://space9au.com/RFGOOGLESEO99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fe1b12944b47c421e9e50fcebf6828c1d"
                  alt="Every Deposit Get Free Lucky Wheel Spin"
                  className="w-full max-w-2xl rounded hover:opacity-90 transition-opacity"
                />
              </a>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Why Choose SPACE9 Promotions?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Exclusive welcome bonuses for new players</li>
                <li>✓ Regular free spins on popular pokies</li>
                <li>✓ VIP rewards program with premium benefits</li>
                <li>✓ Cashback and reload bonuses</li>
                <li>✓ Sports betting promotions and odds boosts</li>
                <li>✓ Live casino bonus offers</li>
              </ul>
            </div>

            <div className="text-center pt-8">
              <a
                href="https://space9au.com/RFGOOGLESEO99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Claim Your Bonus Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
