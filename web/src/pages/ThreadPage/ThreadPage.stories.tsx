import type { ComponentMeta } from '@storybook/react'

import ThreadPage from './ThreadPage'

export const generated = () => {
  return <ThreadPage />
}

export default {
  title: 'Pages/ThreadPage',
  component: ThreadPage,
} as ComponentMeta<typeof ThreadPage>
