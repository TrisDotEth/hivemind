import type { ComponentMeta } from '@storybook/react'

import DaoPage from './DaoPage'

export const generated = () => {
  return <DaoPage />
}

export default {
  title: 'Pages/DaoPage',
  component: DaoPage,
} as ComponentMeta<typeof DaoPage>
