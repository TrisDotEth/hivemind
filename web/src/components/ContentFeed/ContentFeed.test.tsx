import { render } from '@redwoodjs/testing/web'

import ContentFeed from './ContentFeed'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContentFeed', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContentFeed />)
    }).not.toThrow()
  })
})
