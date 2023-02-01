import { render } from '@redwoodjs/testing/web'

import DaoPage from './DaoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DaoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DaoPage />)
    }).not.toThrow()
  })
})
