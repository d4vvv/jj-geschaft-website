import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { StoryblokImage } from '@/types/storyblok-image'
import { FC } from 'react'

interface HeroProps {
  blok: {
    header: string
    heroImage: StoryblokImage
    description: string
  }
}

export const Hero: FC<HeroProps> = ({
  blok: { header, heroImage, description },
}) => {
  return (
    <section className='relative h-[600px] w-full'>
      <div className='absolute inset-0'>
        <Image
          src={heroImage.filename}
          alt='Luksusowy apartament'
          className='h-[600px] w-full object-cover brightness-50'
          layout='fill'
          objectFit='cover'
          priority
        />
      </div>
      <div className='relative items-center container px-4 flex flex-col h-full w-full justify-end pb-16'>
        <div className=' text-white'>
          <h1 className='text-3xl font-semibold tracking-tight sm:text-6xl max-w-3xl'>
            {header}
          </h1>
          <p className='mt-6 font-light text-sm leading-6 sm:text-base sm:leading-7 max-w-5xl'>
            {description}
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
  )
}
