import { render } from '@redwoodjs/testing/web'

import UpdateFarcasterProfiles from './UpdateFarcasterProfiles'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateFarcasterProfiles', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateFarcasterProfiles />)
    }).not.toThrow()
  })
})
