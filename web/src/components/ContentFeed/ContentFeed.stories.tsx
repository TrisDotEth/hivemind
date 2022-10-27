// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ContentFeed> = (args) => {
//   return <ContentFeed {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ContentFeed from './ContentFeed'

export const generated = () => {
  return <ContentFeed />
}

export default {
  title: 'Components/ContentFeed',
  component: ContentFeed,
} as ComponentMeta<typeof ContentFeed>
