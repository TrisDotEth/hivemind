import ActiveHm from 'src/components/ActiveHm/ActiveHm'
// import FarcasterCastsCell from 'src/components/Farcaster/FarcasterCastsCell'
import FarcasterHomeCell from 'src/components/Farcaster/FarcasterHomeCell'
// import FarcasterUserCell from 'src/components/FarcasterUserCell'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStoreWithoutContent } from 'src/providers/store/AllAnyonesStore'

import 'swiper/css'

const HomePage = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  const anyoneNoContent = useAnyoneStoreWithoutContent(
    (state) => state.anyoneNoContent
  )

  return (
    <>
      {/* <ActiveHm /> */}
      {/* <FarcasterUserCell profileId={8} /> */}
      <div className="mb-2 flex w-full justify-center pt-60">
        {/* <img
          className="mr-1 mt-1 h-5 w-5 rounded-full"
          src={anyoneNoContent.profiles[0].importedData.pfp.url}
          alt=""
        /> */}
        <h3 className=" text-white">
          {anyoneNoContent.shortName}'s Home{' '}
          <span className=" text-gray">{anyoneNoContent.shortName}'s Mind</span>
        </h3>
      </div>
      <FarcasterHomeCell userName={anyone.profiles[0].importedData.username} />
    </>
  )
}

export default HomePage
