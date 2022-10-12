// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ChangeHm> = (args) => {
//   return <ChangeHm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ChangeHm from './ChangeHm'

export const generated = () => {
  return <ChangeHm />
}

export default {
  title: 'Components/ChangeHm',
  component: ChangeHm,
} as ComponentMeta<typeof ChangeHm>
