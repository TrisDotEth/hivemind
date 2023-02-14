import { render } from '@redwoodjs/testing/web'

import RedditPage from './RedditPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RedditPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedditPage />)
    }).not.toThrow()
  })
})
