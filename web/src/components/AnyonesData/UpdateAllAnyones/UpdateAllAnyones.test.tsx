import { render } from '@redwoodjs/testing/web'

import UpdateAllAnyones from './UpdateAllAnyones'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateAllAnyones', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateAllAnyones />)
    }).not.toThrow()
  })
})
