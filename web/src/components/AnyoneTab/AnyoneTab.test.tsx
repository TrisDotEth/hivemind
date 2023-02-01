import { render } from '@redwoodjs/testing/web'

import AnyoneTab from './AnyoneTab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnyoneTab', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnyoneTab />)
    }).not.toThrow()
  })
})
