import { useState } from 'react';
import BK8Header from '@/components/BK8Header';
import BK8Features from '@/components/BK8Features';
import BK8GameCategories from '@/components/BK8GameCategories';
import BK8Promotions from '@/components/BK8Promotions';
import BK8VIPProgram from '@/components/BK8VIPProgram';
import BK8MobileApp from '@/components/BK8MobileApp';
import BK8FAQ from '@/components/BK8FAQ';
import BK8Footer from '@/components/BK8Footer';

export default function BK8() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <BK8Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Hero Content Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            BK8: Best Trusted Online Casino Betting Site in Malaysia
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            Welcome to BK8, your premier destination for top-tier online casino entertainment in Asia.{' '}
            <a href="https://bk8mycasino.com/" className="text-blue-600 hover:underline">
              Bk8mycasino.com
            </a>{' '}
            is officially authorized and licensed by BK8 and operates under the regulation of the Malta Gaming Authority. With a powerful mix of exciting games, secure gameplay, and generous promotions, BK8 Malaysia has quickly become the go-to choice for players looking for a premium gambling experience.
          </p>
        </div>
      </section>

      <BK8Features />
      <BK8GameCategories />
      <BK8Promotions />
      <BK8VIPProgram />
      <BK8MobileApp />
      <BK8FAQ />
      <BK8Footer />
    </div>
  );
}
