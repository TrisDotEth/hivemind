import { useLocation } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ActiveHm from 'src/components/ActiveHm/ActiveHm'
import FarcasterCastsCell from 'src/components/Farcaster/FarcasterCastsCell'
// import FarcasterUserCell from 'src/components/FarcasterUserCell'

const BePage = () => {
  const { pathname } = useLocation()
  return (
    <>
      <div className="text-white">
        {/* <FarcasterUserCell profileId={8} /> */}
        <ActiveHm />
        <FarcasterCastsCell userName={pathname.slice(4).toLowerCase()} />
      </div>
    </>
  )
}

export default BePage
