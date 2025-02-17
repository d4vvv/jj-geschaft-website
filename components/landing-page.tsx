import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LandingPage = (props: any) => {
  return (
    <main
      {...storyblokEditable(props.blok)}
      className='flex-1 flex flex-col items-center'
    >
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {props.blok.body.map((blok: any) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}
