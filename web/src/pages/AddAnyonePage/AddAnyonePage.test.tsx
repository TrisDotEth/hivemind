import { render } from '@redwoodjs/testing/web'

import AddAnyonePage from './AddAnyonePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AddAnyonePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddAnyonePage />)
    }).not.toThrow()
  })
})
