// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AddAnyone> = (args) => {
//   return <AddAnyone {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import AddAnyone from './AddAnyone'

export const generated = () => {
  return <AddAnyone />
}

export default {
  title: 'Components/AddAnyone',
  component: AddAnyone,
} as ComponentMeta<typeof AddAnyone>
