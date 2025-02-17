// import { Hero } from '@/components/Hero'
// import { LandingPage } from '@/components/LandingPage'
import { Hero } from '@/components/hero'
import { LandingPage } from '@/components/landing-page'
import { OurOffer } from '@/components/our-offer'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: LandingPage,
    hero: Hero,
    ourOffer: OurOffer,
  },
  enableFallbackComponent: true,
})
