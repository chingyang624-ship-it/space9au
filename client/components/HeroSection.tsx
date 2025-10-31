export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
              UFO9 Casino – No.1 Trusted Online Casino Application in Australia
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Welcome to UFO9 Casino Official Website. UFO9 Casino is an online gaming platform that offers a diverse range of gambling activities including slots, sports games, and live casino dealer sessions. It distinguishes itself with a futuristic, UFO-themed interface.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://ufo9au.net/wp-content/uploads/2024/01/imgpsh_fullsize_anim.png"
              alt="UFO9 Games"
              className="w-full max-w-md h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
