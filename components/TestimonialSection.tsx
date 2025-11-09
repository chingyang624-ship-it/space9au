'use client';

import { Star } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Sydney',
      rating: 5,
      text: 'SPACE9 has been my go-to for safe and fair gaming. The responsible gambling tools are excellent and the customer service is responsive 24/7. Highly recommended!',
    },
    {
      name: 'James T.',
      location: 'Melbourne',
      rating: 5,
      text: 'Loved the variety of pokies and the fast PayID withdrawals. Received my winnings in less than 2 hours. Great experience overall.',
    },
    {
      name: 'Emma L.',
      location: 'Brisbane',
      rating: 5,
      text: 'SPACE9 guides helped me understand RTP and bankroll management. Now I play more responsibly and enjoy it even more. Thank you!',
    },
    {
      name: 'Michael D.',
      location: 'Perth',
      rating: 5,
      text: 'The best online casino experience I\'ve had. Transparent practices, instant deposits, and games are fair. Been playing for 6 months, never had an issue.',
    },
  ];

  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          What Australian Players Say
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Real feedback from our community of responsible gaming enthusiasts across Australia.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-slate-700 p-6 rounded-lg border border-amber-500 border-opacity-30 hover:border-opacity-50 transition">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-200 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}, Australia</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-amber-600 to-amber-700 p-8 rounded-lg border-2 border-amber-400 text-center">
          <p className="text-white mb-3">
            <strong>Join thousands of satisfied Australian players</strong>
          </p>
          <p className="text-amber-50 mb-6">
            Experience secure, fair gaming with expert guides and responsible gaming tools.
          </p>
          <a
            href="/promotions"
            className="inline-block bg-white text-amber-700 font-bold px-8 py-3 rounded-lg hover:bg-amber-50 transition"
          >
            Claim Your Welcome Bonus Today
          </a>
        </div>
      </div>
    </section>
  );
}
