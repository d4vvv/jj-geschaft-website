interface WhyCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export const WhyCard: React.FC<WhyCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className='flex flex-col items-center text-center px-8 py-16 bg-neutral-100 rounded-lg break-inside-avoid-column justify-center'>
      <div className='rounded-lg bg-primary/20 h-24 w-24 flex justify-center items-center mb-4'>
        {icon}
      </div>
      <h3 className='text-xl font-bold text-primary'>{title}</h3>
      <p className='mt-6 text-muted-foreground text-pretty'>{description}</p>
    </div>
  )
}
