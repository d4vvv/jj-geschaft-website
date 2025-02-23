import { ContactDataBlock as IContactDataBlock } from '@/types/contact-data-block'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { FC } from 'react'
import { RichText } from './ui/richtext'

const iconsMap = {
  city: <Building2 className='h-6 w-6 text-primary' />,
  location: <MapPin className='h-6 w-6 text-primary' />,
  phone: <Phone className='h-6 w-6 text-primary' />,
  email: <Mail className='h-6 w-6 text-primary' />,
}

export const ContactDataBlock: FC<Omit<IContactDataBlock, '_uid'>> = ({
  header,
  content,
  icon,
}) => {
  return (
    <div className='flex items-center gap-4'>
      {iconsMap[icon]}
      <div>
        <h3 className='font-bold'>{header}</h3>
        <RichText richText={content} className='text-muted-foreground' />
      </div>
    </div>
  )
}
