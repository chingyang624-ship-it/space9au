import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F47b974d627d040ceb1812c1a024d4cee"
              alt="UFO9"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              SPACE9 is a popular online casino in Malaysia and slot game platform that offers a wide range of games, including slot games, table games, and arcade games.
            </p>
          </div>

          {/* Payment Support */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Payment Support</h3>
            <div className="bg-slate-800 p-6 rounded">
              <p className="text-gray-300 text-sm">
                We support multiple payment methods for your convenience including local bank transfers, e-wallets, and cryptocurrencies.
              </p>
            </div>
          </div>

          {/* Available Games */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Available Games</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>✓ Slots & Keno</p>
              <p>✓ Live Dealer Games</p>
              <p>✓ Sports Betting</p>
              <p>✓ Table Games</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="mailto:support@space9.com"
              className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors"
            >
              <Mail size={18} />
              <span>support@space9.com</span>
            </a>
            <a
              href="tel:+61234567890"
              className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors"
            >
              <Phone size={18} />
              <span>24/7 Support Available</span>
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            COPYRIGHT © UFO9 Casino. All rights reserved. Responsible Gaming.
          </p>

          <p className="text-gray-600 text-xs mt-4">
            UFO9 Casino is licensed and regulated. Players must be 18+ to participate. Please gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
