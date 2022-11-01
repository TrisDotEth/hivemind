import { render } from '@redwoodjs/testing/web'

import TopnavbarLayout from './TopnavbarLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TopnavbarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopnavbarLayout />)
    }).not.toThrow()
  })
})
