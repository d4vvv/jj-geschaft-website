import { ISbRichtext } from '@storyblok/react'
import { FC } from 'react'
import { RichText } from './ui/richtext'

interface PriceSectionProps {
  blok: {
    header: string
    text: ISbRichtext
  }
}

export const PriceSection: FC<PriceSectionProps> = ({
  blok: { header, text },
}) => {
  return (
    <div className='container px-4'>
      <h2 className='text-4xl font-bold tracking-tight sm:text-5xl text-center mb-16 sm:text-start mt-8 md:mt-16'>
        {header}
      </h2>
      <div className='mb-8'>TABELKA</div>
      <RichText richText={text} />
    </div>
  )
}
