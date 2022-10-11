import { render } from '@redwoodjs/testing/web'

import ActionBox from './ActionBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ActionBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActionBox />)
    }).not.toThrow()
  })
})
