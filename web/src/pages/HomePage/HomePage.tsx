// import { Swiper, SwiperSlide } from 'swiper/react'

import ActionBox from 'src/components/ActionBox/ActionBox'
import ActiveHm from 'src/components/ActiveHm/ActiveHm'
import FarcasterCastsCell from 'src/components/FarcasterCastsCell'
import FarcasterUserCell from 'src/components/FarcasterUserCell'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

import 'swiper/css'

const HomePage = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  const farcasterName = anyone.username ? anyone.username : 'tris'

  return (
    <>
      <ActiveHm />
      {/* <FarcasterUserCell profileId={1} /> */}

      {farcasterName !== 'add' && (
        <div>
          <FarcasterUserCell profileId={8} />
          <FarcasterCastsCell userName={farcasterName} />
        </div>
      )}
    </>
  )
}

export default HomePage
