import { render } from '@redwoodjs/testing/web'

import ActiveHm from './ActiveHm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ActiveHm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActiveHm />)
    }).not.toThrow()
  })
})
