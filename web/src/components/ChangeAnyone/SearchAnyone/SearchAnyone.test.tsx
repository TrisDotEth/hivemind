import { render } from '@redwoodjs/testing/web'

import SearchAnyone from './SearchAnyone'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SearchAnyone', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchAnyone />)
    }).not.toThrow()
  })
})
