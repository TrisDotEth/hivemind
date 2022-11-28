import type { ComponentMeta } from '@storybook/react'

import BePage from './BePage'

export const generated = () => {
  return <BePage />
}

export default {
  title: 'Pages/BePage',
  component: BePage,
} as ComponentMeta<typeof BePage>
