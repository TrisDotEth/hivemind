import type { ComponentMeta } from '@storybook/react'

import AddAnyonePage from './AddAnyonePage'

export const generated = () => {
  return <AddAnyonePage />
}

export default {
  title: 'Pages/AddAnyonePage',
  component: AddAnyonePage,
} as ComponentMeta<typeof AddAnyonePage>
