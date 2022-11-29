// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SearchAnyone> = (args) => {
//   return <SearchAnyone {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SearchAnyone from './SearchAnyone'

export const generated = () => {
  return <SearchAnyone />
}

export default {
  title: 'Components/SearchAnyone',
  component: SearchAnyone,
} as ComponentMeta<typeof SearchAnyone>
