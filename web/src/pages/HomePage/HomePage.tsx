import { useState } from 'react'

import clsx from 'clsx'

// import FarcasterCastsCell from 'src/components/Farcaster/FarcasterCastsCell'
// import FarcasterUserCell from 'src/components/FarcasterUserCell'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
// import { HashNavigation } from 'swiper'
import TimeAgo from 'javascript-time-ago'
import {
  FreeMode,
  Scrollbar,
  Mousewheel,
  Navigation,
  Thumbs,
  Controller,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import AddAnyone from 'src/components/ChangeAnyone/AddAnyone/AddAnyone'
import LSAProfile from 'src/components/ChangeAnyone/LargeSelectAnyone/LSAProfile/LSAProfile'
import SearchAnyone from 'src/components/ChangeAnyone/SearchAnyone/SearchAnyone'
import FarcasterHomeCell from 'src/components/Farcaster/FarcasterHomeCell'
import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStoreWithoutContent } from 'src/providers/store/AllAnyonesStore'
import { useSwiperStore } from 'src/providers/store/SwiperStore'

import 'swiper/css'

const HomePage = () => {
  const anyones = useAllAnyonesStore((state) => state.anyones)

  const addFirstSwiper = useSwiperStore((state) => state.addFirstSwiper)
  const secondSwiper = useSwiperStore((state) => state.secondSwiper)
  return (
    <>
      <div className="mb-2 flex w-full justify-center">
        <Swiper
          slidesPerView={1}
          initialSlide={3}
          spaceBetween={200}
          modules={[Controller]}
          onSwiper={addFirstSwiper}
          controller={{ control: secondSwiper }}
          className="mySwiper2"
          // enabled={false}
        >
          <SwiperSlide key={'SearchAnyone'} className=" text-center">
            <SearchAnyone />
          </SwiperSlide>
          <SwiperSlide key={'AddAnyone'} className=" text-center">
            <AddAnyone />
          </SwiperSlide>
          {anyones.map((anyone) => (
            <SwiperSlide
              key={anyone.id}
              data-hash={anyone.displayName}
              data-anyoneid={anyone.id}
            >
              {({ isActive }) => (
                <LSAProfile isActive={isActive} anyone={anyone} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default HomePage
