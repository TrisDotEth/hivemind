import { render } from '@redwoodjs/testing/web'

import HivemindPage from './HivemindPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HivemindPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HivemindPage />)
    }).not.toThrow()
  })
})
