import { render } from '@redwoodjs/testing/web'

import ChangeAnyone from './ChangeAnyone'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChangeAnyone', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChangeAnyone />)
    }).not.toThrow()
  })
})
