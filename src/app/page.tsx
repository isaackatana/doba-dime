import Link from 'next/link'
import Layout from './components/Layout'

export default function Home() {
  return (
    <Layout
      title="Doba Dime | Music Distribution for African Artists"
      description="Distribute your music globally, track royalties in real-time, and get paid directly via M-Pesa. Join thousands of African musicians growing their careers with Doba Dime."
      keywords="Doba Dime, African music, music distribution Kenya, M-Pesa payouts, Spotify Africa, Apple Music distribution, music monetization, independent artists Africa"
    >
      <div className="min-h-screen bg-gray-100 text-gray-800">

        {/* Hero Section */}
        <section className="bg-blue-700 text-white text-center py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">Empowering African Musicians</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Upload your music, track your royalties in real-time, and get paid directly via M-Pesa. Built for the modern independent artist.
            </p>
            <Link href="/register" className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Get Started Free
            </Link>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Why Doba Dime?</h2>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="p-6 bg-gray-50 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">🎵 Easy Music Upload</h3>
                <p>Upload your tracks in minutes with our artist-first dashboard.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">📊 Real-Time Royalties</h3>
                <p>See where your music is playing and how much you're earning—instantly.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">💸 M-Pesa Payouts</h3>
                <p>Withdraw earnings locally to your phone via M-Pesa. No bank needed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-100 py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-12 text-left">
              <div>
                <div className="text-5xl mb-4 text-blue-600">1️⃣</div>
                <h4 className="text-xl font-semibold mb-2">Create an Account</h4>
                <p>Sign up for free and set up your artist profile.</p>
              </div>
              <div>
                <div className="text-5xl mb-4 text-blue-600">2️⃣</div>
                <h4 className="text-xl font-semibold mb-2">Upload Your Music</h4>
                <p>Submit your songs and albums—we handle delivery to all platforms.</p>
              </div>
              <div>
                <div className="text-5xl mb-4 text-blue-600">3️⃣</div>
                <h4 className="text-xl font-semibold mb-2">Track & Get Paid</h4>
                <p>See real-time royalties and get payouts via M-Pesa. Simple and fast.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white text-center py-16 px-4">
          <h3 className="text-2xl font-bold mb-4">Ready to launch your music career?</h3>
          <p className="mb-6">Join thousands of African artists distributing music globally and earning locally.</p>
          <Link href="/register" className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-200">
            Join Now – It's Free
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-white text-center py-6 text-sm text-gray-500">
          <p>© 2025 Doba Dime. All rights reserved.</p>
          <p className="mt-2">
            Built with ❤️ in Africa. <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </p>
        </footer>

      </div>
    </Layout>
  )
}
