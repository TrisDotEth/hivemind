import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AddAnyonePage = () => {
  return (
    <>
      <MetaTags title="AddAnyone" description="AddAnyone page" />

      <h1 className="text-white">AddAnyonePage</h1>
      <p>
        Find me in <code>./web/src/pages/AddAnyonePage/AddAnyonePage.tsx</code>
      </p>
      <p>
        My default route is named <code>addAnyone</code>, link to me with `
        <Link to={routes.addAnyone()}>AddAnyone</Link>`
      </p>
    </>
  )
}

export default AddAnyonePage
