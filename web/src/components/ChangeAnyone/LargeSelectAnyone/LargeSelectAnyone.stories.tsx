// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LargeSelectAnyone> = (args) => {
//   return <LargeSelectAnyone {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LargeSelectAnyone from './LargeSelectAnyone'

export const generated = () => {
  return <LargeSelectAnyone />
}

export default {
  title: 'Components/LargeSelectAnyone',
  component: LargeSelectAnyone,
} as ComponentMeta<typeof LargeSelectAnyone>
