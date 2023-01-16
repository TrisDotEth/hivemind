import { render } from '@redwoodjs/testing/web'

import LargeSelectAnyone from './LargeSelectAnyone'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LargeSelectAnyone', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LargeSelectAnyone />)
    }).not.toThrow()
  })
})
