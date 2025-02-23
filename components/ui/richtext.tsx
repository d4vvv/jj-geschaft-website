import { ISbRichtext, renderRichText } from '@storyblok/react'
import clsx from 'clsx'
import { FC } from 'react'

interface RichTextProps {
  richText: ISbRichtext
  className?: string
}

export const RichText: FC<RichTextProps> = ({ richText, className }) => {
  return (
    <div
      className={clsx(
        '[&>p]:mb-4 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:list-outside [&>ul]:px-4 [&>ul]:gap-2 [&>ul>li]:mb-2',
        className
      )}
      dangerouslySetInnerHTML={{
        __html: renderRichText(richText) as string,
      }}
    />
  )
}
