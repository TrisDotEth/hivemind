import type { ComponentMeta } from '@storybook/react'

import HivemindPage from './HivemindPage'

export const generated = () => {
  return <HivemindPage />
}

export default {
  title: 'Pages/HivemindPage',
  component: HivemindPage,
} as ComponentMeta<typeof HivemindPage>
