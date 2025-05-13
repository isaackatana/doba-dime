// components/Layout.tsx
import Head from 'next/head'
import { ReactNode } from 'react'

interface LayoutProps {
  title?: string
  description?: string
  keywords?: string
  children: ReactNode
}

export default function Layout({ title, description, keywords, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Doba Dime | Music for Africa'}</title>
        <meta name="description" content={description || 'Doba Dime helps African musicians distribute music globally and earn through M-Pesa.'} />
        <meta name="keywords" content={keywords || 'Doba Dime, music distribution, M-Pesa, African music, royalties'} />
      </Head>
      <main>{children}</main>
    </>
  )
}