// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AnyoneTab> = (args) => {
//   return <AnyoneTab {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import AnyoneTab from './AnyoneTab'

export const generated = () => {
  return <AnyoneTab />
}

export default {
  title: 'Components/AnyoneTab',
  component: AnyoneTab,
} as ComponentMeta<typeof AnyoneTab>
