import { render } from '@redwoodjs/testing/web'

import SignInWithTwitterButton from './SignInWithTwitterButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SignInWithTwitterButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignInWithTwitterButton />)
    }).not.toThrow()
  })
})
