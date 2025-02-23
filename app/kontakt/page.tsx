import { getStoryblokApi } from '@/lib/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'

const fetchContactPage = async () => {
  const client = getStoryblokApi()
  const response = await client.getStory('contact', {
    version: 'draft',
  })

  return response.data.story
}

export default async function Contact() {
  const story = await fetchContactPage()

  return <StoryblokStory story={story} />
}
