import { render } from '@redwoodjs/testing/web'

import LsaProfile from './LsaProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LsaProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LsaProfile />)
    }).not.toThrow()
  })
})
