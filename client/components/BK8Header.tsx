import { useState } from 'react';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BK8HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function BK8Header({ mobileMenuOpen, setMobileMenuOpen }: BK8HeaderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navItems = [
    { label: 'Slots', href: '#slots' },
    { label: 'Live Casino', href: '#live' },
    { label: 'Esports', href: '#esports' },
    { label: 'Sports', href: '#sports' },
    { label: 'Fishing', href: '#fishing' },
    { label: 'Blog', href: '#blog' },
  ];

  const slides = [
    {
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/03/BETA-ALL-GresiniAnnouncement-2000x525-en-1-1200x349.jpg',
      alt: 'GresiniAnnouncement',
    },
    {
      image: 'https://bk8mycasino.com/wp-content/uploads/2023/09/BK8-Burnley-FC-Partnership-1200x349.webp',
      alt: 'Burnley FC Partnership',
    },
    {
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/03/banner20250124082758635-1200x349.webp',
      alt: 'Banner 1',
    },
    {
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/03/banner20250228093805642-1200x349.webp',
      alt: 'Banner 2',
    },
    {
      image: 'https://bk8mycasino.com/wp-content/uploads/2025/03/banner20241024105658074-1200x349.webp',
      alt: 'Banner 3',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="https://bk8mycasino.com/wp-content/uploads/2024/05/bk8logo.gif"
                  alt="BK8 Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Auth Buttons and Mobile Menu */}
            <div className="flex items-center gap-2 md:gap-4">
              <a
                href="https://bk8mycasino.com/go/register"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                Join Now
              </a>
              <a
                href="https://bk8mycasino.com/go/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-blue-600 rounded font-semibold border border-blue-600 hover:bg-blue-50 transition-colors text-sm"
              >
                Login
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Carousel */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, idx) => (
                <div key={idx} className="min-w-full flex-shrink-0">
                  <img src={slide.image} alt={slide.alt} className="w-full h-auto" />
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentSlide ? 'bg-blue-600' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
