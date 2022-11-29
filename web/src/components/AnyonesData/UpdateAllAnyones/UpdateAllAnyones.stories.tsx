// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UpdateAllAnyones> = (args) => {
//   return <UpdateAllAnyones {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import UpdateAllAnyones from './UpdateAllAnyones'

export const generated = () => {
  return <UpdateAllAnyones />
}

export default {
  title: 'Components/UpdateAllAnyones',
  component: UpdateAllAnyones,
} as ComponentMeta<typeof UpdateAllAnyones>
