import { render } from '@redwoodjs/testing/web'

import UpdateHmContext from './UpdateHmContext'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateHmContext', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateHmContext />)
    }).not.toThrow()
  })
})
