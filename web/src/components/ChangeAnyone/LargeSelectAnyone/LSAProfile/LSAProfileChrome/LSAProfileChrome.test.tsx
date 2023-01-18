import { render } from '@redwoodjs/testing/web'

import LsaProfileChrome from './LsaProfileChrome'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LsaProfileChrome', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LsaProfileChrome />)
    }).not.toThrow()
  })
})
