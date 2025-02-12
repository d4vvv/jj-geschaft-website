import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import heroImage from '@/public/heroImage.jpg'

export default function Home() {
  return (
    <>
      <section className='relative h-[600px] w-full'>
        <div className='absolute inset-0'>
          <Image
            src={heroImage}
            alt='Luksusowy apartament'
            className='h-[600px] w-full object-cover brightness-50'
            priority
          />
        </div>
        <div className='relative items-center container px-4 flex flex-col h-full w-full justify-end pb-16'>
          <div className=' text-white'>
            <h1 className='text-3xl font-semibold tracking-tight sm:text-6xl max-w-3xl'>
              Inwestuj w nieruchomości w Wiedniu!
            </h1>
            <p className='mt-6 font-light text-sm leading-6 sm:text-base sm:leading-7 max-w-5xl'>
              Wiedeń to jedno z najlepszych miast do inwestowania w
              nieruchomości. Stolica Austrii łączy bogatą historię z nowoczesną
              infrastrukturą, oferując stabilne warunki gospodarcze i prawne.
              Dzięki dynamicznemu wzrostowi populacji i stałemu zapotrzebowaniu
              na mieszkania, zakup nieruchomości w Wiedniu to bezpieczna i
              przyszłościowa inwestycja.
            </p>
            <div className='mt-10 flex gap-x-6 gap-y-4 flex-col sm:flex-row'>
              <Button asChild size='lg' className='text-lg'>
                <Link href='/kontakt'>Skontaktuj się z nami</Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='text-white border-white hover:text-white'
              >
                <Link href='/dlaczego-warto'>Dowiedz się więcej</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className='py-24'>
        <div className='container px-4'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-8 '>
            Nasza oferta
          </h2>
          <p className=''>
            Oferujemy Państwu wprowadzenie na rynek nieruchomości w Austrii, a w
            szczególności w kraju federalnym Wiedeń. Ponadto mozwmy zapewnić
            Państwu dostęp do austriackiego rynku finansowego, w tym możliwość
            uzyskania finansowania na niskich stopach procentowych w euro - bez
            konieczności zarabiania w euro Zachęcamy do kontaktu w celu
            uzyskania dalszych informacji.
          </p>
        </div>
      </section>
    </>
  )
}
