import { ISbRichtext, renderRichText } from '@storyblok/react'
import { FC } from 'react'

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
      <div
        className='[&>*]:mb-4'
        dangerouslySetInnerHTML={{
          __html: renderRichText(text) as string,
        }}
      ></div>
    </div>
  )
}
