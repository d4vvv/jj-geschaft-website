import { getStoryblokApi } from '@/lib/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dlaczego warto?',
}

const fetchWhyPage = async () => {
  const client = getStoryblokApi()
  const response = await client.getStory('why', {
    version: 'draft',
  })

  return response.data.story
}

export default async function WhyUsPage() {
  const story = await fetchWhyPage()

  return <StoryblokStory story={story} />
}
