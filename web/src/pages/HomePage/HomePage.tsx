import ActiveHm from 'src/components/ActiveHm/ActiveHm'
// import FarcasterCastsCell from 'src/components/Farcaster/FarcasterCastsCell'
import FarcasterHomeCell from 'src/components/Farcaster/FarcasterHomeCell'
// import FarcasterUserCell from 'src/components/FarcasterUserCell'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

import 'swiper/css'

const HomePage = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  // const farcasterName = anyone.officialName ? anyone.officialName : 'tris'
  // debugger

  return (
    <>
      {/* <ActiveHm /> */}
      {/* <FarcasterUserCell profileId={8} /> */}
      <div className="mb-2 flex w-full justify-center">
        <img
          className="mr-1 mt-1 h-5 w-5 rounded-full"
          src={anyone.profiles[0].importedData.pfp.url}
          alt=""
        />
        <h1 className="text-lg text-white">{anyone.displayName}'s Home</h1>
      </div>
      <FarcasterHomeCell userName={anyone.profiles[0].importedData.username} />
    </>
  )
}

export default HomePage
