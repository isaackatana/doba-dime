import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      <Head>
        <title>Doba Dime - Distribute Your Music Globally</title>
        <meta name="description" content="Doba Dime helps African musicians distribute their music globally, track royalties, and get paid via M-Pesa." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Distribute Your Music Globally</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Upload your tracks, track royalties, and get paid via M-Pesa. Built for African musicians.
        </p>
        <Link
          href="/upload"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          aria-label="Get started with uploading your music"
        >
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Doba Dime?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Fast Uploads",
              desc: "Easily upload MP3s and cover art. No technical setup needed.",
            },
            {
              title: "Royalty Tracking",
              desc: "Monitor streams and payouts in real-time through your dashboard.",
            },
            {
              title: "M-Pesa Integration",
              desc: "Get paid in Kenya instantly with M-Pesa withdrawals.",
            },
            {
              title: "Keep 90% Royalties",
              desc: "We believe in fairness. Artists keep the majority of earnings.",
            },
            {
              title: "Analytics Dashboard",
              desc: "View listener stats, downloads, and platform reach with ease.",
            },
            {
              title: "Built for Africa",
              desc: "Doba Dime is made by Africans, for African creators.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Distribution Information */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Where Will Your Music Go?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Once you upload your music to Doba Dime, we distribute it to all the major streaming platforms so you can reach listeners worldwide.
        </p>
        <ul className="text-lg text-gray-700 list-inside mb-8">
          <li>🎵 Spotify</li>
          <li>🎧 Apple Music</li>
          <li>🎶 Tidal</li>
          <li>📱 Deezer</li>
          <li>📀 Amazon Music</li>
          <li>🎬 YouTube Music</li>
          <li>🎧 SoundCloud</li>
          <li>🌍 And many more...</li>
        </ul>
        <p className="text-lg text-gray-700 mb-6">
          We ensure your music is available on the most popular platforms globally, from Africa to the rest of the world.
        </p>
        <Link
          href="/upload"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          aria-label="Upload Your Music Now"
        >
          Upload Your First Track
        </Link>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Your Music Out There?</h2>
        <p className="text-lg text-gray-700 mb-6">Join hundreds of African artists distributing music worldwide with Doba Dime.</p>
        <Link
          href="/upload"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          aria-label="Upload your first track"
        >
          Upload Your First Track
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        <p>© 2025 Doba Dime. Built for African Music.</p>
        <div className="mt-4">
          <Link href="https://facebook.com/dobadime" className="text-blue-600 hover:text-blue-800 mx-2" aria-label="Facebook">
            Facebook
          </Link>
          <Link href="https://twitter.com/dobadime" className="text-blue-600 hover:text-blue-800 mx-2" aria-label="Twitter">
            Twitter
          </Link>
          <Link href="https://instagram.com/dobadime" className="text-blue-600 hover:text-blue-800 mx-2" aria-label="Instagram">
            Instagram
          </Link>
        </div>
      </footer>
    </main>
  )
}
