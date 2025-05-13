import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    // Logic to register user (e.g., store in a database)
    res.status(200).json({ message: 'User registered successfully!' })
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
