import type { ComponentMeta } from '@storybook/react'

import ConnectsuccessPage from './ConnectsuccessPage'

export const generated = () => {
  return <ConnectsuccessPage />
}

export default {
  title: 'Pages/ConnectsuccessPage',
  component: ConnectsuccessPage,
} as ComponentMeta<typeof ConnectsuccessPage>
