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
      {/* <ActiveHm /> */}
      {/* <FarcasterUserCell profileId={8} /> */}
      <div className="mb-2 flex w-full justify-center pt-60">
        {/* <img
          className="mr-1 mt-1 h-5 w-5 rounded-full"
          src={anyoneNoContent.profiles[0].importedData.pfp.url}
          alt=""
        /> */}
        {/* <h3 className=" text-white">
          {anyoneNoContent.shortName}'s Home
          <span className="inline-block pl-3 text-gray">
            {anyoneNoContent.shortName}'s DAO
          </span>
        </h3> */}
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          slidesPerView={1}
          initialSlide={3}
          spaceBetween={200}
          // navigation={true}
          // thumbs={{ swiper: thumbsSwiper }}
          // slideToClickedSlide={true}
          // centeredSlides={true}
          // scrollbar={true}
          // mousewheel={true}
          modules={[Controller]}
          onSwiper={addFirstSwiper}
          controller={{ control: secondSwiper }}
          className="mySwiper2"
          // onSlideChange={(swiper) => {
          //   // if (swiper.clickedIndex != swiper.realIndex) {
          //   //   setlastActiveSlideBeforeClick(swiper.previousIndex)
          //   // }
          //   const index = swiper.realIndex
          //   //Skip over addAnyone slide
          //   if (index == 1) return true
          //   // @ts-expect-error Should be an HTML type thing?
          //   // const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
          //   if (secondSwiper) {
          //     secondSwiper.slideTo(swiper.realIndex)
          //   }
          //   // TODO this can be brought back for a massive increase in speed. The issue was having a call go out to pull all of their posts each time
          //   // changeAnyoneWithoutContent(activeId)
          // }}
          // onTransitionEnd={(swiper) => {
          //   console.log('Slider has stopped moving TRANSITION END')

          //   if (firstSwiper) {
          //     // debugger
          //     const index = swiper.realIndex
          //     const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
          //     // firstSwiper.slideTo(swiper.realIndex)

          //     //Wait for the transition to end before fetching content so it's not downloading it 1000 times
          //     changeAnyone(activeId)
          //   }
          // }}
          // onSlideChange={(swiper) => {
          //   if (firstSwiper) {
          //     // debugger
          //     const index = swiper.realIndex
          //     const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
          //     // firstSwiper.slideTo(swiper.realIndex)

          //     //Wait for the transition to end before fetching content so it's not downloading it 1000 times
          //     changeAnyone(activeId)
          //   }
          // }}
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
              className="h-[3000px] text-center"
            >
              {/* <LSAProfile /> */}
              {({ isActive }) => <LSAProfile isActive={isActive} />}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <FarcasterHomeCell userName={anyone.profiles[0].importedData.username} /> */}
    </>
  )
}

export default HomePage
