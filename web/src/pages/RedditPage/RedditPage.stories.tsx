import type { ComponentMeta } from '@storybook/react'

import RedditPage from './RedditPage'

export const generated = () => {
  return <RedditPage />
}

export default {
  title: 'Pages/RedditPage',
  component: RedditPage,
} as ComponentMeta<typeof RedditPage>
