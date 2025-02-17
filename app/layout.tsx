import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import type React from 'react' // Import React
import { StoryblokProvider } from '@/components/storyblok-provider'

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
    <StoryblokProvider>
      <html lang='pl'>
        <body className={inter.className}>
          <div className='flex min-h-screen flex-col'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </StoryblokProvider>
  )
}
