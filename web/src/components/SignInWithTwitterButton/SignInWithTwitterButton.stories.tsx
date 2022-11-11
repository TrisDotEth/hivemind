// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SignInWithTwitterButton> = (args) => {
//   return <SignInWithTwitterButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SignInWithTwitterButton from './SignInWithTwitterButton'

export const generated = () => {
  return <SignInWithTwitterButton />
}

export default {
  title: 'Components/SignInWithTwitterButton',
  component: SignInWithTwitterButton,
} as ComponentMeta<typeof SignInWithTwitterButton>
