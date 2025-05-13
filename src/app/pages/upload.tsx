import { useState } from 'react'
import Layout from '../components/Layout'

export default function UploadMusic() {
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    if (!title || !genre || !audioFile || !coverImage) {
      setMessage('Please fill in all fields and upload both files.')
      setLoading(false)
      return
    }

    // Simulate upload logic (to be replaced with real API logic)
    console.log('Uploading:', { title, genre, audioFile, coverImage })
    setTimeout(() => {
      setMessage('Upload successful!')
      setLoading(false)
      setTitle('')
      setGenre('')
      setAudioFile(null)
      setCoverImage(null)
    }, 2000)
  }

  return (
    <Layout
      title="Doba Dime | Upload Music"
      description="Upload your music, cover art, and metadata to distribute your tracks globally."
    >
      <div className="min-h-screen bg-gray-100 py-10 px-6 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-lg p-8 rounded-lg shadow-md"
          encType="multipart/form-data"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">Upload New Track</h1>

          {message && <p className="text-center mb-4 text-green-600">{message}</p>}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Track Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Genre</label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Audio File (MP3)</label>
            <input
              type="file"
              accept=".mp3,audio/*"
              onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
              required
              className="block w-full"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Cover Art (JPG/PNG)</label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
              required
              className="block w-full"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {loading ? 'Uploading...' : 'Upload Track'}
          </button>
        </form>
      </div>
    </Layout>
  )
}
