'use client';

import { Shield, Award, CheckCircle } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    {
      icon: Shield,
      title: 'IAGR Licensed',
      description: 'Fully licensed and regulated by the Interactive Gambling Regulatory Authority',
    },
    {
      icon: Award,
      title: 'eCOGRA Certified',
      description: 'Independent audit certification ensuring fair games and player protection',
    },
    {
      icon: CheckCircle,
      title: '256-bit SSL Encryption',
      description: 'Bank-level security protecting all player data and transactions',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Certifications & Security
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div key={idx} className="p-6 rounded-lg bg-slate-800 border border-amber-500">
                <Icon className="text-amber-400 mb-4" size={40} />
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-800 p-8 rounded-lg border border-amber-400">
          <h3 className="text-2xl font-bold mb-6">Trust & Safety Standards</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-amber-400 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-300">18+ Age Verification Required</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-amber-400 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-300">Responsible Gaming Tools Available</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-amber-400 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-300">Regular Security Audits</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-amber-400 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-300">Player Funds Protection</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-amber-400 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-300">Fair Game Certification</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-amber-400 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-300">24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
