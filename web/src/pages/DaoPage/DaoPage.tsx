import { useLocation } from '@redwoodjs/router'

import ActiveHm from 'src/components/ActiveHm/ActiveHm'
import AnyoneTab from 'src/components/AnyoneTab/AnyoneTab'
import FarcasterCastsCell from 'src/components/Farcaster/FarcasterCastsCell'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

const DaoPage = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  const { pathname } = useLocation()
  return (
    <div className="text-white">
      <AnyoneTab anyone={anyone} location="DAO" />
      <ActiveHm />
      {/* TODO directly manipulating the url like this is going to come back to bite me... */}
      <FarcasterCastsCell
        userName={pathname.slice(4).slice(0, -4).toLowerCase()}
        anyone={anyone}
      />
    </div>
  )
}

export default DaoPage
