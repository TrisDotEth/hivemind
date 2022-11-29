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
      {/* <Swiper
        spaceBetween={50}
        onSlideChange={() => {
          flap()
        }}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        <SwiperSlide>
          <ActiveHm />
        </SwiperSlide>
        <SwiperSlide>
          <ActiveHm />
        </SwiperSlide>
        <SwiperSlide>
          <ActiveHm />
        </SwiperSlide>
        <SwiperSlide>
          <ActiveHm />
        </SwiperSlide>
      </Swiper> */}

      <ActiveHm />

      {/* <FarcasterUserCell profileId={1} /> */}

      {farcasterName !== 'add' && (
        <div>
          <ActionBox />
          <FarcasterCastsCell userName={farcasterName} />
        </div>
      )}
    </>
  )
}

export default HomePage
