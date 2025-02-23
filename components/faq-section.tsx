import { ISbRichtext } from '@storyblok/react'
import { FC } from 'react'
import { Question } from './question'
import { Accordion } from './ui/accordion'

interface FAQSectionProps {
  blok: {
    header: string
    questions: {
      question: string
      answer: ISbRichtext
      _uid: string
    }[]
  }
}

export const FAQSection: FC<FAQSectionProps> = ({
  blok: { header, questions },
}) => {
  return (
    <div className='container px-4 py-16'>
      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl text-center mb-16'>
        {header}
      </h1>
      <div className='max-w-3xl mx-auto'>
        <Accordion type='single' collapsible>
          {questions.map(({ question, answer, _uid }) => (
            <Question
              question={question}
              answer={answer}
              _uid={_uid}
              key={_uid}
            />
          ))}
        </Accordion>
      </div>
    </div>
  )
}
