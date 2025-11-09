import { Mail, Phone, Facebook, Send, Banknote } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white">
      <div style={{ maxWidth: '1087px' }} className="mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F47b974d627d040ceb1812c1a024d4cee"
              alt="SPACE9"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              SPACE9 is a popular online casino in Australia and slot game platform that offers a
              wide range of games, including slot games, table games, and arcade games.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Payment Support</h3>
            <div className="bg-slate-800 p-6 rounded">
              <p className="text-gray-300 text-sm mb-4">
                We support multiple secure payment methods:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-3 bg-slate-700 rounded hover:bg-slate-600 transition-colors">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F03d729d9c0a3496da92a68527e678e08"
                    alt="Visa"
                    className="h-8 mb-2"
                  />
                  <span className="text-xs text-gray-300">Visa</span>
                </div>

                <div className="flex flex-col items-center p-3 bg-slate-700 rounded hover:bg-slate-600 transition-colors">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F7f2bfd517d8f4e2e80d1fd76a6875843"
                    alt="Mastercard"
                    className="h-8 mb-2"
                  />
                  <span className="text-xs text-gray-300">Mastercard</span>
                </div>

                <div className="flex flex-col items-center p-3 bg-slate-700 rounded hover:bg-slate-600 transition-colors">
                  <Banknote size={32} className="text-amber-500 mb-2" />
                  <span className="text-xs text-gray-300">Bank Transfer</span>
                </div>

                <div className="flex flex-col items-center p-3 bg-slate-700 rounded hover:bg-slate-600 transition-colors">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fdb030dba93fe4f3c81143d911699409e"
                    alt="Amopay"
                    style={{ height: '20px', width: '100px', margin: '11px 0 8px' }}
                  />
                  <span className="text-xs text-gray-300">Amopay</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Available Games</h3>
            <div className="space-y-2 text-gray-400 text-sm" style={{ marginRight: '2px' }}>
              <p>✓ Slots & Keno</p>
              <p>✓ Live Dealer Games</p>
              <p>✓ Sports Betting</p>
              <p>✓ Table Games</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
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

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.facebook.com/profile.php?id=100093505265984"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition-colors"
              title="Follow us on Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://t.me/+HplU5b6JfLBmNjk1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition-colors"
              title="Join us on Telegram"
            >
              <Send size={24} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <a href="/faq" className="text-gray-400 hover:text-amber-500 transition-colors">
              FAQ
            </a>
            <a href="/compliance" className="text-gray-400 hover:text-amber-500 transition-colors">
              Compliance
            </a>
            <a href="/about" className="text-gray-400 hover:text-amber-500 transition-colors">
              About Us
            </a>
            <a href="/blog" className="text-gray-400 hover:text-amber-500 transition-colors">
              Blog
            </a>
            <a href="/guides/responsible-gaming" className="text-gray-400 hover:text-amber-500 transition-colors">
              Responsible Gaming
            </a>
            <a href="/guides/self-exclusion-guide" className="text-gray-400 hover:text-amber-500 transition-colors">
              Self-Exclusion
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            COPYRIGHT © SPACE9 Casino. All rights reserved. Responsible Gaming.
          </p>

          <div className="text-gray-600 text-xs mt-4 space-y-2">
            <p>
              ⚠️ Players must be 18+ years old to access this site. SPACE9 is committed to responsible gambling.
            </p>
            <p>
              🆘 Need help? Call Gambler's Help: <span className="font-semibold">1800 858 858</span>
            </p>
            <p>
              <a href="https://www.betstop.com.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-500">
                Register with BetStop
              </a> for national self-exclusion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
