import { render } from '@redwoodjs/testing/web'

import UpdateAllHmsContext from './UpdateAllHmsContext'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateAllHmsContext', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateAllHmsContext />)
    }).not.toThrow()
  })
})
