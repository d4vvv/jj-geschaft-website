import Link from 'next/link'
import { Building2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className='border-t'>
      <div className='container flex flex-col items-center gap-4 px-4 py-8 md:flex-row md:justify-between md:gap-0 max-w-none'>
        <div className='flex items-center space-x-2'>
          <Building2 className='h-6 w-6' />
          <span className='text-xl font-bold'>Premium Nieruchomości</span>
        </div>
        <nav className='flex flex-col items-center gap-4 md:flex-row md:gap-6'>
          <Link
            href='/polityka-prywatnosci'
            className='text-sm hover:underline'
          >
            Polityka Prywatności
          </Link>
          <Link href='/regulamin' className='text-sm hover:underline'>
            Regulamin
          </Link>
        </nav>
        <div className='text-sm text-muted-foreground'>
          © {new Date().getFullYear()} Premium Nieruchomości. Wszelkie prawa
          zastrzeżone.
        </div>
      </div>
    </footer>
  )
}
