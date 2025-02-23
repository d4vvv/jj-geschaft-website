import { ISbRichtext } from '@storyblok/react'

export interface ContactDataBlock {
  _uid: string
  header: string
  content: ISbRichtext
  icon: 'city' | 'location' | 'phone' | 'email'
}
