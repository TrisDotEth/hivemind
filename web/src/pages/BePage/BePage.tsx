import { useLocation } from '@redwoodjs/router'

import ActionBox from 'src/components/ActionBox/ActionBox'
import ActiveHm from 'src/components/ActiveHm/ActiveHm'
import FarcasterCastsCell from 'src/components/Farcaster/FarcasterCastsCell'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

const BePage = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  const { pathname } = useLocation()
  return (
    <>
      <div className="text-white">
        {/* <AnyoneTab anyone={anyone} location="home" /> */}
        {/* <FarcasterHomeCell
          userName={anyone.profiles[0].importedData.username}
        /> */}
        <ActiveHm />
        {/* TODO directly manipulating the url like this is going to come back to bite me... */}
        <ActionBox reply={null} networkLocation="farcaster" />
        <FarcasterCastsCell
          userName={pathname.slice(4).slice(0).toLowerCase()}
          anyone={anyone}
        />
      </div>
    </>
  )
}

export default BePage
