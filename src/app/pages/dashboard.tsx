import Layout from '../components/Layout'
import Link from 'next/link'

export default function Dashboard() {
  // Example user data (replace with real data later)
  const uploadedSongs = [
    { title: 'Nairobi Nights', streams: 10234, earnings: 1243.50 },
    { title: 'Coastal Vibes', streams: 5322, earnings: 589.00 },
  ]

  const totalEarnings = uploadedSongs.reduce((sum, song) => sum + song.earnings, 0)

  return (
    <Layout
      title="Doba Dime | Dashboard"
      description="View your distributed music, royalties, and earnings."
    >
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Your Dashboard</h1>

        <div className="max-w-4xl mx-auto">
          {/* Total earnings */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Total Royalties</h2>
            <p className="text-2xl font-bold text-green-600">KSh {totalEarnings.toFixed(2)}</p>
          </div>

          {/* Uploaded music list */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Songs</h2>
            <ul className="space-y-4">
              {uploadedSongs.map((song, idx) => (
                <li key={idx} className="border-b pb-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-medium">{song.title}</p>
                      <p className="text-sm text-gray-500">{song.streams} streams</p>
                    </div>
                    <p className="text-green-600 font-semibold">KSh {song.earnings.toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Upload music button */}
          <div className="text-center mt-6">
            <Link
              href="/upload"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
            >
              Upload New Music
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
