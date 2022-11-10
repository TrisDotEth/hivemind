import { useContext } from 'react'

// import { Swiper, SwiperSlide } from 'swiper/react'

import ActionBox from 'src/components/ActionBox/ActionBox'
import ActiveHm from 'src/components/ActiveHm/ActiveHm'
import FarcasterCastsCell from 'src/components/FarcasterCastsCell'
import { HivemindContext } from 'src/providers/context/HivemindContext'

import 'swiper/css'

const HomePage = () => {
  // const f = useContext(HivemindContext).setActiveHmData
  // const flap = () => {
  //   f({
  //     __typename: 'Hivemind',
  //     id: 8,
  //     name: 'Tris',
  //     profileImageURL: 'https://cdn.filestackcontent.com/4LTarcuERwbrGJeGAJD9',
  //     aboutInformation: 'This is what h/tris is all about',
  //   })
  // }

  const setFarcasterName =
    useContext(HivemindContext).activeHmData.farcasterName
  const farcasterName = setFarcasterName ? setFarcasterName : 'tris'

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
      <ActionBox />
      <span>hi</span>
      <FarcasterCastsCell userName={farcasterName} />
    </>
  )
}

export default HomePage
