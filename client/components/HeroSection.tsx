export default function HeroSection() {
  return (
    <section className="relative py-12 md:py-20" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F80c0097d9d0c4ec2a9c2cdef62bddaf1)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
              <p>SPACE9 Betting Tips & Guides – Learn How to Win with Expert Strategies</p>
            </h1>
            <div className="text-gray-300 text-lg leading-relaxed mb-6" onClick={() => window.open('https://space9au.com/RFGOOGLESEO99', '_blank')} style={{ cursor: 'pointer', pointerEvents: 'auto' }}>
              <p>
                Welcome to <strong>SPACE9 Betting Tips & Casino Guides</strong>, your go-to source for learning how to play smarter and win more. Here, we share expert insights on online pokies, sports betting strategies, and live casino tactics designed for Aussie players. Whether you're spinning the reels, placing your next wager, or exploring new PayID casinos, our guides help you make every move count.
                <br />
                <br />
                Ready to explore the SPACE9 universe? Visit <a href="https://space9au.com?utm_source=chatgpt.com" target="_blank" rel="noopener" style={{ textDecoration: 'underline' }}><b>SPACE9 Casino</b></a> for exclusive promotions, fast PayID deposits, and a truly next-gen gaming experience.
                <br />
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F47b974d627d040ceb1812c1a024d4cee"
              alt="SPACE9"
              loading="lazy"
              className="w-full max-w-md h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
