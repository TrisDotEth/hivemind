import ActiveHm from 'src/components/ActiveHm/ActiveHm'
import FarcasterCastsCell from 'src/components/Farcaster/FarcasterCastsCell'
// import FarcasterUserCell from 'src/components/FarcasterUserCell'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

import 'swiper/css'

const HomePage = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  // const farcasterName = anyone.officialName ? anyone.officialName : 'tris'
  // debugger

  return (
    <>
      <ActiveHm />
      {/* <FarcasterUserCell profileId={8} /> */}
      <FarcasterCastsCell userName={anyone.profiles[0].importedData.username} />
    </>
  )
}

export default HomePage
