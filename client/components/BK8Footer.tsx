import { Link } from 'react-router-dom';

export default function BK8Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="https://bk8mycasino.com/wp-content/uploads/2024/05/bk8logo.gif"
              alt="BK8"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              BK8 Malaysia is a premier online casino offering world-class gaming experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Promotions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Responsible Gaming
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-semibold text-white mb-4">Payment Methods</h3>
            <div className="grid grid-cols-2 gap-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded h-10 flex items-center justify-center text-xs text-gray-500"
                >
                  Payment {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; 2024 BK8 Malaysia. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-gray-500 text-xs border-t border-gray-800 pt-8">
          <p>
            BK8 is a licensed and regulated online gaming operator. Please gamble responsibly. If you or someone you know has a gambling problem, please contact the National Council on Problem Gambling (NCPG) at 1-800-6-2273 (toll-free).
          </p>
        </div>
      </div>
    </footer>
  );
}
