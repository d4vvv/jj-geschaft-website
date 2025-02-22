import { getStoryblokApi } from '@/lib/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'

const fetchLandingPage = async () => {
  const client = getStoryblokApi()
  const response = await client.getStory('why', {
    version: 'draft',
  })

  return response.data.story
}

export default async function WhyUsPage() {
  const story = await fetchLandingPage()

  return <StoryblokStory story={story} />
}
