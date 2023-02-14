import type { ComponentMeta } from '@storybook/react'

import RedditprofilePage from './RedditprofilePage'

export const generated = () => {
  return <RedditprofilePage />
}

export default {
  title: 'Pages/RedditprofilePage',
  component: RedditprofilePage,
} as ComponentMeta<typeof RedditprofilePage>
