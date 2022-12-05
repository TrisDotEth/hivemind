// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PassDetails> = (args) => {
//   return <PassDetails {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PassDetails from './PassDetails'

export const generated = () => {
  return <PassDetails />
}

export default {
  title: 'Components/PassDetails',
  component: PassDetails,
} as ComponentMeta<typeof PassDetails>
