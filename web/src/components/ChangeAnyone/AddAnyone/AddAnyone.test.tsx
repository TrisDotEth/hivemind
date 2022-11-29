import { render } from '@redwoodjs/testing/web'

import AddAnyone from './AddAnyone'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddAnyone', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddAnyone />)
    }).not.toThrow()
  })
})
