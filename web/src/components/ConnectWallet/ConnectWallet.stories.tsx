// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ConnectWallet> = (args) => {
//   return <ConnectWallet {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ConnectWallet from './ConnectWallet'

export const generated = () => {
  return <ConnectWallet />
}

export default {
  title: 'Components/ConnectWallet',
  component: ConnectWallet,
} as ComponentMeta<typeof ConnectWallet>
