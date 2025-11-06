export default function HeroSection() {
  return (
    <section
      className="relative py-12 md:py-20"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2F80c0097d9d0c4ec2a9c2cdef62bddaf1)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
              <p>
                SPACE9 Pokies Tips & Casino Guides – Master the Strategy to Win
                More
              </p>
            </h1>
            <div
              className="text-gray-300 text-lg leading-relaxed mb-6"
              onClick={() =>
                window.open("https://space9au.com/RFGOOGLESEO99", "_blank")
              }
              style={{ cursor: "pointer", pointerEvents: "auto" }}
            >
              <p>
                Welcome to{" "}
                <strong>
                  SPACE9 – Australia's Expert Casino & Pokies Guide Hub
                </strong>
                . Discover proven betting strategies, bankroll management tips,
                and game selection techniques from industry experts. Learn how
                to maximize your wins at online pokies, master live dealer
                games, and make smart sports betting decisions. Our
                comprehensive guides are designed for Australian players seeking
                to improve their gaming skills and win rate.
                <br />
                <br />
                Unlock winning strategies at{" "}
                <a
                  href="https://space9au.com?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener"
                  style={{ textDecoration: "underline" }}
                >
                  <b>SPACE9 Casino</b>
                </a>{" "}
                – featuring PayID deposits, exclusive bonuses, and 24/7 expert
                support.
                <br />
              </p>
            </div>
          </div>

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
