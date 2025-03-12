import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="py-16 px-6 md:py-24 md:px-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
            John Yang
          </h1>
          <p className="text-xl text-gray-600 mb-10 font-light">
            Curating exceptional Chinese antiquities for over a decade
          </p>
          <Link
            href="/collection"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 transition duration-300"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-serif text-center mb-12 text-gray-800">
          Discover Our Heritage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 border border-gray-100">
            <h3 className="font-serif text-xl mb-3 text-gray-800">Porcelain</h3>
            <p className="text-gray-600 mb-4">
              Exquisite pieces from the Ming and Qing dynasties, featuring
              delicate craftsmanship and historical significance.
            </p>
            <Link
              href="/collection"
              className="text-amber-700 hover:text-amber-900"
            >
              View Collection →
            </Link>
          </div>
          <div className="bg-white p-6 border border-gray-100">
            <h3 className="font-serif text-xl mb-3 text-gray-800">Jade</h3>
            <p className="text-gray-600 mb-4">
              Symbolic artifacts of prosperity and longevity, hand-carved with
              precision and artistic merit.
            </p>
            <Link
              href="/collection"
              className="text-amber-700 hover:text-amber-900"
            >
              View Collection →
            </Link>
          </div>
          <div className="bg-white p-6 border border-gray-100">
            <h3 className="font-serif text-xl mb-3 text-gray-800">Bronze</h3>
            <p className="text-gray-600 mb-4">
              Traditional vessels and scholarly objects that showcase
              China&apos;s sophisticated metallurgical history.
            </p>
            <Link
              href="/collection"
              className="text-amber-700 hover:text-amber-900"
            >
              View Collection →
            </Link>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 px-6 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif mb-6 text-center text-gray-800">
            My Philosophy
          </h2>
          <p className="text-gray-700 mb-8 text-center">
            I personally select each piece for its historical significance and
            artistic value, connecting collectors in the United States and China
            with authentic treasures that tell the story of China&apos;s rich
            cultural heritage.
          </p>
          <div className="flex justify-center">
            <Link
              href="/about"
              className="text-amber-700 hover:text-amber-900 font-medium"
            >
              Learn more about my expertise →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl italic text-gray-600 mb-6">
            &quot;John&apos;s knowledge of Chinese antiquities and commitment to
            authenticity has made him our trusted advisor for building our
            collection.&quot;
          </blockquote>
          <p className="text-gray-700">— James Chen, Collector</p>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4 md:mb-0">
            Pennsylvania, United States
          </p>
          <p className="text-gray-700">
            <Link
              href="mailto:your-email@example.com"
              className="hover:text-amber-700"
            >
              your-email@example.com
            </Link>{" "}
            |
            <Link href="tel:+1234567890" className="hover:text-amber-700 ml-2">
              123-456-7890
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
