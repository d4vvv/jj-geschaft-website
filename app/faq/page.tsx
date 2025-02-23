import { getStoryblokApi } from '@/lib/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
}

const fetchWhyPage = async () => {
  const client = getStoryblokApi()
  const response = await client.getStory('faq', {
    version: 'draft',
  })

  return response.data.story
}

export default async function FAQ() {
  const story = await fetchWhyPage()

  return <StoryblokStory story={story} />
}
