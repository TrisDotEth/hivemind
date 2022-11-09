// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Faq> = (args) => {
//   return <Faq {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Faq from './Faq'

export const generated = () => {
  return <Faq />
}

export default {
  title: 'Components/Faq',
  component: Faq,
} as ComponentMeta<typeof Faq>
