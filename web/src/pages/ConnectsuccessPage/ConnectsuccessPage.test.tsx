import { render } from '@redwoodjs/testing/web'

import ConnectsuccessPage from './ConnectsuccessPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ConnectsuccessPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConnectsuccessPage />)
    }).not.toThrow()
  })
})
