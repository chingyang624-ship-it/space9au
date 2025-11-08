'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Promotion', href: '/promotions' },
    { label: 'Top up', href: 'https://space9au.com/RFGOOGLESEO99' },
    { label: 'Sponsor', href: '/sponsor' },
  ];

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#1a1a2e' }}>
      <div style={{
        background: 'linear-gradient(to right, #000000, #1e3a5f, #000000)',
        borderBottom: '2px solid #f59e0b',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
      }}>
        <div className="mx-auto px-4 py-4" style={{ maxWidth: '100%' }}>
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc0a592f10b9e4c43978276155259ccc9"
                  alt="SPACE9 Casino"
                  style={{ height: '40px', width: 'auto' }}
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isExternal = item.href.startsWith('http');
                return isExternal ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 font-semibold text-sm uppercase hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-amber-500 font-semibold text-sm uppercase hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
              <a
                href="https://space9au.com/RFGOOGLESEO99"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 md:px-6 py-2 bg-blue-900 text-white rounded-lg border border-amber-400 font-semibold hover:bg-blue-800 transition-colors inline-block cursor-pointer text-xs md:text-sm"
              >
                Register
              </a>
              <a
                href="https://space9au.com/RFGOOGLESEO99"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 md:px-6 py-2 bg-blue-500 text-white rounded-lg border border-amber-400 font-semibold hover:bg-blue-600 transition-colors inline-block cursor-pointer text-xs md:text-sm"
              >
                Login
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-amber-500 p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-amber-500">
            <nav className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => {
                const isExternal = item.href.startsWith('http');
                return isExternal ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 font-semibold py-2 hover:text-amber-400 transition-colors cursor-pointer block"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-amber-500 font-semibold py-2 hover:text-amber-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
