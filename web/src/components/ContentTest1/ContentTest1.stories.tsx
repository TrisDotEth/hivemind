// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ContentTest1> = (args) => {
//   return <ContentTest1 {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ContentTest1 from './ContentTest1'

export const generated = () => {
  return <ContentTest1 />
}

export default {
  title: 'Components/ContentTest1',
  component: ContentTest1,
} as ComponentMeta<typeof ContentTest1>
