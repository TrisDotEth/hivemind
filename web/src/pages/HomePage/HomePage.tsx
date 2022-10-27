import { useState, useEffect, useContext } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import { MetaTags } from '@redwoodjs/web'

import ActionBox from 'src/components/ActionBox/ActionBox'
import ActiveHm from 'src/components/ActiveHm/ActiveHm'
import ChangeHm from 'src/components/ChangeHm/ChangeHm'
import ConnectWallet from 'src/components/ConnectWallet/ConnectWallet'
import FarcasterCastsCell from 'src/components/FarcasterCastsCell'
import { HivemindContext } from 'src/providers/context/HivemindContext'

import 'swiper/css'

const tagArr = [
  'Simple character DAOs',
  'Simple social DAOs',
  'Tiny simple social DAOs',
  "A DAO's singular voice",
  'Be part of something',
  "This is just some fun, this won't be in the live version",
  'What else could be a good tag?',
  'The easiest way to contribute to a DAO',
  "A DAO's single voice",
  'Be anyone',
]

const HomePage = () => {
  //For the rotating tags - TODO not for prod
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      tagArr.length - 2 >= index ? setIndex(index + 1) : setIndex(0)
    }, 5000000)
    return () => clearInterval(interval)
  })
  //End rotating tags
  const f = useContext(HivemindContext).setActiveHmData
  const flap = () => {
    f({
      __typename: 'Hivemind',
      id: 8,
      name: 'Tris',
      profileImageURL: 'https://cdn.filestackcontent.com/4LTarcuERwbrGJeGAJD9',
      aboutInformation: 'This is what h/tris is all about',
    })
  }

  return (
    <>
      <MetaTags
        title="Hivemind"
        description="Hivemind - A DAO's singular voice"
      />
      <main className="mx-auto mt-4 max-w-7xl px-4 sm:mt-8">
        <div className="mb-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Hivemind</span>
            <span className="block text-2xl text-indigo-600">
              {tagArr[index]}
            </span>
          </h1>
        </div>
        <Swiper
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
        </Swiper>

        <ActionBox />
        {/* HACK Has to be removed */}
        <br></br>
        <ChangeHm />

        <ConnectWallet />
        <FarcasterCastsCell
          userName={useContext(HivemindContext).activeHmData.farcasterName}
        />
      </main>
    </>
  )
}

export default HomePage
