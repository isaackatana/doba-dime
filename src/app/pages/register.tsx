import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setError('')

    // Example of simple form validation
    if (!name || !email || !password) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    // Normally you would send this to your backend or a registration API
    try {
      // Replace this with actual API call to register the user
      console.log('User registered:', { name, email, password })
      // Redirect to the login page after successful registration
      // window.location.href = "/login";
    } catch (err) {
      setError('Registration failed. Please try again later.')
      setLoading(false)
    }
  }

  return (
    <Layout
      title="Doba Dime | Register"
      description="Sign up to distribute your music globally and get paid via M-Pesa with Doba Dime."
    >
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-6">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-300"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}
