import { useLocation } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ActionBox from 'src/components/ActionBox/ActionBox'
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
        <ActionBox />
        <FarcasterCastsCell userName={pathname.slice(4).toLowerCase()} />
      </div>
    </>
  )
}

export default BePage
