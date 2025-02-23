import { ISbRichtext, renderRichText } from '@storyblok/react'
import { FC } from 'react'

interface RichTextProps {
  richText: ISbRichtext
}

export const RichText: FC<RichTextProps> = ({ richText }) => {
  return (
    <div
      className='[&>p]:mb-4 [&>ul]:list-disc list-outside px-4 gap-2 [&>ul>li]:mb-2'
      dangerouslySetInnerHTML={{
        __html: renderRichText(richText) as string,
      }}
    />
  )
}
