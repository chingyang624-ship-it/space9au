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
    <section className="py-16 bg-gradient-to-b from-blue-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Certifications & Security
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div key={idx} className="bg-slate-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition border border-amber-500 border-opacity-30">
                <Icon className="text-amber-400 mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-800 bg-opacity-50 p-8 rounded-lg border-2 border-amber-400 border-opacity-50">
          <h3 className="text-2xl font-bold text-white mb-4">Trust & Safety Standards</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-200">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>18+ Age Verification Required</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Responsible Gaming Tools Available</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Regular Security Audits</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Player Funds Protection</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Fair Game Certification</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>24/7 Customer Support</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
