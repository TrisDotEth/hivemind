import { render } from '@redwoodjs/testing/web'

import UpdateCurrentAnyone from './UpdateCurrentAnyone'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateCurrentAnyone', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateCurrentAnyone />)
    }).not.toThrow()
  })
})
