// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UpdateCurrentAnyone> = (args) => {
//   return <UpdateCurrentAnyone {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import UpdateCurrentAnyone from './UpdateCurrentAnyone'

export const generated = () => {
  return <UpdateCurrentAnyone />
}

export default {
  title: 'Components/UpdateCurrentAnyone',
  component: UpdateCurrentAnyone,
} as ComponentMeta<typeof UpdateCurrentAnyone>
