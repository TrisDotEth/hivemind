// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LsaProfileChrome> = (args) => {
//   return <LsaProfileChrome {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LsaProfileChrome from './LsaProfileChrome'

export const generated = () => {
  return <LsaProfileChrome />
}

export default {
  title: 'Components/LsaProfileChrome',
  component: LsaProfileChrome,
} as ComponentMeta<typeof LsaProfileChrome>
