import { ContactDataBlock as IContactDataBlock } from '@/types/contact-data-block'
import { FC } from 'react'
import { ContactDataBlock } from './contact-data-block'
import { ContactForm } from './contact-form'

interface ContactSectionProps {
  blok: {
    header: string
    data: IContactDataBlock[]
  }
}

export const ContactSection: FC<ContactSectionProps> = ({
  blok: { header, data },
}) => {
  return (
    <div className='container px-4 py-16'>
      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl text-center mb-16'>
        {header}
      </h1>
      <div className='grid gap-8 md:grid-cols-2'>
        <div>
          <div className='grid gap-6'>
            {data.map(({ header, content, icon }) => (
              <ContactDataBlock
                key={header}
                header={header}
                content={content}
                icon={icon}
              />
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
