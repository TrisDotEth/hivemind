import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TopnavbarLayout from './TopnavbarLayout'

export const generated: ComponentStory<typeof TopnavbarLayout> = (args) => {
  return <TopnavbarLayout {...args} />
}

export default {
  title: 'Layouts/TopnavbarLayout',
  component: TopnavbarLayout,
} as ComponentMeta<typeof TopnavbarLayout>
