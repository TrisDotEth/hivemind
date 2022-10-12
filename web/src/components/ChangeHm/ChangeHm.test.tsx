import { render } from '@redwoodjs/testing/web'

import ChangeHm from './ChangeHm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChangeHm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChangeHm />)
    }).not.toThrow()
  })
})
