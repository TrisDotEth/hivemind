import { render } from '@redwoodjs/testing/web'

import ContentTest1 from './ContentTest1'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContentTest1', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContentTest1 />)
    }).not.toThrow()
  })
})
