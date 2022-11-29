import { render } from '@redwoodjs/testing/web'

import SelectAnyone from './SelectAnyone'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SelectAnyone', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SelectAnyone />)
    }).not.toThrow()
  })
})
