import { render } from '@redwoodjs/testing/web'

import ContentTest2 from './ContentTest2'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContentTest2', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContentTest2 />)
    }).not.toThrow()
  })
})
