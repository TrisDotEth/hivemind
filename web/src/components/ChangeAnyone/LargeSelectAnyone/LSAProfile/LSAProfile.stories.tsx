// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LsaProfile> = (args) => {
//   return <LsaProfile {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LsaProfile from './LsaProfile'

export const generated = () => {
  return <LsaProfile />
}

export default {
  title: 'Components/LsaProfile',
  component: LsaProfile,
} as ComponentMeta<typeof LsaProfile>
