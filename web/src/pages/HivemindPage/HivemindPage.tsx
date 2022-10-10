import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HivemindPage = () => {
  return (
    <>
      <MetaTags title="Hivemind" description="Hivemind page" />

      <h1>HivemindPage</h1>
      <p>
        Find me in <code>./web/src/pages/HivemindPage/HivemindPage.tsx</code>
      </p>
      <p>
        My default route is named <code>hivemind</code>, link to me with `
        <Link to={routes.hivemind()}>Hivemind</Link>`
      </p>
    </>
  )
}

export default HivemindPage
