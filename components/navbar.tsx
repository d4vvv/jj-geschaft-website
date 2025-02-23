'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const routes = [
  { href: '/', label: 'Strona główna' },
  { href: '/dlaczego-warto', label: 'Dlaczego warto?' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Navbar() {
  return (
    <header className='border-b w-full'>
      <div className='container flex h-16 items-center justify-between px-4 max-w-none'>
        <Link href='/' className='flex items-center space-x-2'>
          <span className='text-xl font-bold'>Immosystem</span>
        </Link>
        <nav className='hidden md:flex md:items-center md:space-x-6'>
          {routes.map(route => (
            <Link
              key={route.href}
              href={route.href}
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='outline' size='icon'>
              <Menu className='h-6 w-6' />
            </Button>
          </SheetTrigger>
          <SheetContent side='right'>
            <nav className='flex flex-col space-y-4'>
              {routes.map(route => (
                <SheetClose key={route.href} asChild>
                  <Link
                    key={route.href}
                    href={route.href}
                    className='text-sm font-medium transition-colors hover:text-primary'
                  >
                    {route.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
