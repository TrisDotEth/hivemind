import { render } from '@redwoodjs/testing/web'

import ConnectWallet from './ConnectWallet'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConnectWallet', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConnectWallet />)
    }).not.toThrow()
  })
})
