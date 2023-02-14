import { render } from '@redwoodjs/testing/web'

import RedditprofilePage from './RedditprofilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RedditprofilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedditprofilePage />)
    }).not.toThrow()
  })
})
