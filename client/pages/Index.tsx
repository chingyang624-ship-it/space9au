import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GameTabs from '@/components/GameTabs';
import ContentSection from '@/components/ContentSection';
import Footer from '@/components/Footer';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <GameTabs />
      <ContentSection />
      <Footer />
    </div>
  );
}
