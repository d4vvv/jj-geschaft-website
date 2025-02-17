import { FC } from 'react'

interface OurOfferProps {
  blok: {
    header: string
    text: string
  }
}

export const OurOffer: FC<OurOfferProps> = ({ blok: { header, text } }) => {
  return (
    <section className='py-24'>
      <div className='container px-4'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-8 '>
          {header}
        </h2>
        <p>{text}</p>
      </div>
    </section>
  )
}
