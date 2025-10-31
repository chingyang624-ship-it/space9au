import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Promotion', href: '/promotions' },
    { label: 'Top up', href: 'https://space9au.com/RFGOOGLESEO99' },
    { label: 'Sponsor', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-black via-blue-900 to-black border-b border-amber-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Fc0a592f10b9e4c43978276155259ccc9"
                  alt="SPACE9 Casino"
                  className="h-12 w-auto md:h-16"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-amber-500 font-semibold text-sm uppercase hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Auth Buttons Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <button className="px-6 py-2 bg-blue-900 text-white rounded-lg border border-amber-400 font-semibold hover:bg-blue-800 transition-colors">
                Register
              </button>
              <a
                href="https://space9au.com/login"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg border border-amber-400 font-semibold hover:bg-blue-600 transition-colors inline-block cursor-pointer"
              >
                Login
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-amber-500 p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-amber-500">
            <nav className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-amber-500 font-semibold py-2 hover:text-amber-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t border-amber-500">
                <button className="flex-1 px-4 py-2 bg-blue-900 text-white rounded border border-amber-400 font-semibold hover:bg-blue-800 transition-colors text-sm">
                  Register
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded border border-amber-400 font-semibold hover:bg-blue-600 transition-colors text-sm">
                  Login
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
