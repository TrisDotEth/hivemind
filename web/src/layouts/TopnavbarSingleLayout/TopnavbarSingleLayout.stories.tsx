import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TopnavbarSingleLayout from './TopnavbarSingleLayout'

export const generated: ComponentStory<typeof TopnavbarSingleLayout> = (args) => {
  return <TopnavbarSingleLayout {...args} />
}

export default {
  title: 'Layouts/TopnavbarSingleLayout',
  component: TopnavbarSingleLayout,
} as ComponentMeta<typeof TopnavbarSingleLayout>
