import { FAQSection } from '@/components/faq-section'
import { Hero } from '@/components/hero'
import { OurOffer } from '@/components/our-offer'
import { PriceSection } from '@/components/price-section'
import { StoryblokPage } from '@/components/storyblok-page'
import { WhySection } from '@/components/why-section'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: StoryblokPage,
    hero: Hero,
    ourOffer: OurOffer,
    whySection: WhySection,
    priceSection: PriceSection,
    faqSection: FAQSection,
  },
  enableFallbackComponent: true,
})
