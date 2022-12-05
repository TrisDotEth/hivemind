import { render } from '@redwoodjs/testing/web'

import PassDetails from './PassDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PassDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PassDetails />)
    }).not.toThrow()
  })
})
