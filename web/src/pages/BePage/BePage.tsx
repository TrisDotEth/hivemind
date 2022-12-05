import { useLocation } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ActiveHm from 'src/components/ActiveHm/ActiveHm'
import AllAnyonesCell from 'src/components/AnyonesData/AllAnyonesCell'
import FarcasterCastsCell from 'src/components/FarcasterCastsCell'
import FarcasterUserCell from 'src/components/FarcasterUserCell'

const BePage = () => {
  const { pathname } = useLocation()
  return (
    <>
      <MetaTags title="Be" description="Be page" />
      <div className="text-white">
        {/* <h1>BePage</h1>
        <br />
        <h2>Anyone is {JSON.stringify(anyone)}</h2>
        <br />
        <h2>All Anyones are {JSON.stringify(anyones)}</h2> */}
        <AllAnyonesCell></AllAnyonesCell>
        <FarcasterUserCell profileId={8} />
        <ActiveHm />
        <FarcasterCastsCell userName={pathname.slice(4).toLowerCase()} />
      </div>
    </>
  )
}

export default BePage
