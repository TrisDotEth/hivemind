import { render } from '@redwoodjs/testing/web'

import BePage from './BePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BePage />)
    }).not.toThrow()
  })
})
