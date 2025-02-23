import { ISbRichtext } from '@storyblok/react'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { FC } from 'react'
import { RichText } from './ui/richtext'

interface QuestionProps {
  question: string
  answer: ISbRichtext
  _uid: string
}

export const Question: FC<QuestionProps> = ({ question, answer, _uid }) => {
  return (
    <AccordionItem value={_uid}>
      <AccordionTrigger>
        <span className='pr-4 text-start'>{question}</span>
      </AccordionTrigger>
      <AccordionContent>
        <RichText richText={answer} />
      </AccordionContent>
    </AccordionItem>
  )
}
