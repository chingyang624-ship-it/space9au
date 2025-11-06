import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About SPACE9 Casino - Australia's #1 Trusted Online Gaming Platform",
  description:
    "Discover SPACE9 Casino - Australia's #1 trusted online gaming platform since 2024. Secure PayID pokies, live dealer games, expert guides, 24/7 support.",
  openGraph: {
    title: "About SPACE9 Casino",
    description:
      "Australia's #1 trusted online gaming platform with PayID pokies, live dealer games, and expert support",
    url: "https://space9au.net/about",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-b from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            SPACE9: Your Trusted Gateway To High Wins
          </h1>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
            <p>
              SPACE9 is Australia's number one online casino of 2024! We've
              ascended the charts by constantly delivering secure and enjoyable
              gaming that is out of this world. Whether you are a seasoned
              cosmopolitan or a novice spaceman taking her tentative steps into
              space, SPACE9 has it all for everyone who would like to have
              unforgettable galactic trip at any time.
            </p>

            <p>
              At SPACE9, we are proud to offer an extensive range of the most
              thrilling casinos games in Milky Way galaxy. Get involved with
              pokies that have stunning graphics and exciting features, find
              your way to the riches through blackjack or go on a journey full
              of possibilities from our wide selection of table games. We cater
              for every kind of gambler and with our ever increasing library
              there is always another planet to discover.
            </p>

            <p>
              But SPACE9 isn't all about the games (although they are pretty
              darn stellar). We also strive to offer excellent customer service
              and unbeatable rewards. Our customer care team is always ready to
              help you with any inquiries you may have while our loyal program
              provides lavish prizes for your dedication. So, come on, space
              captain; get ready to take off with SPACE9!
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-12 mb-6">
            Explore A Universe Of Casino Games
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
            <p>
              Ready yourself for a cosmic journey in the world of online casino
              games on SPACE9! Our list of pokies stretches over light years,
              with classic fruits and feature-filled video slots that will make
              you spin with exhilaration.
            </p>

            <p>
              Try your luck at blackjack or test yourself at roulette; all
              against dealers. We also provide several other specialty versions
              including baccarat and poker for players seeking something
              different. In any case, SPACE9 has a game that will definitely
              skyrocket your chances of winning.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
