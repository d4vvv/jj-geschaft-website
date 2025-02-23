import { BookOpenText, HandCoins, House, UserRound } from 'lucide-react'
import { WhyCard } from './why-card'
import { FC } from 'react'
import { whyBlock } from '@/types/whyBlock'

interface WhySectionProps {
  blok: {
    header: string
    whyBlocks: whyBlock[]
  }
}

const iconsMap = {
  house: <House size={36} />,
  hand: <HandCoins size={36} />,
  user: <UserRound size={36} />,
  book: <BookOpenText size={36} />,
}

export const WhySection: FC<WhySectionProps> = ({
  blok: { header, whyBlocks },
}) => {
  return (
    <div className='container px-4 pt-16 pb-8'>
      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl text-center mb-16 sm:text-start'>
        {header}
      </h1>
      <div className='gap-4 grid md:gap-8 md:grid-cols-2'>
        {whyBlocks.map(whyBlock => (
          <WhyCard
            key={whyBlock._uid}
            title={whyBlock.header}
            description={whyBlock.description}
            icon={iconsMap[whyBlock.icon]}
          />
        ))}
      </div>
    </div>
  )
}
