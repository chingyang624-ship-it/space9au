import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Go Home
            </Link>
            <p className="text-gray-600">
              or{" "}
              <Link href="/blog" className="text-amber-600 hover:text-amber-700">
                Browse Our Blog
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
