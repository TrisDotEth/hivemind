import { render } from '@redwoodjs/testing/web'

import TopnavbarSingleLayout from './TopnavbarSingleLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TopnavbarSingleLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopnavbarSingleLayout />)
    }).not.toThrow()
  })
})
