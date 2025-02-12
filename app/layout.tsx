import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import type React from 'react' // Import React

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JJ Geschaft',
  description: 'Znajdź swoje wymarzone mieszkanie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pl'>
      <body className={inter.className}>
        <div className='flex min-h-screen flex-col'>
          <Navbar />
          <main className='flex-1 flex flex-col items-center'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
