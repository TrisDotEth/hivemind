import { useState } from 'react'

import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
// import { HashNavigation } from 'swiper'
import { FreeMode, Navigation, Thumbs, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { navigate, routes } from '@redwoodjs/router'

import AddAnyone from 'src/components/ChangeAnyone/AddAnyone/AddAnyone'
import SearchAnyone from 'src/components/ChangeAnyone/SearchAnyone/SearchAnyone'
import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

import LSAProfile from './LSAProfile/LSAProfile'

const LargeSelectAnyone = () => {
  const anyones = useAllAnyonesStore((state) => state.anyones)
  const anyone = useAnyoneStore((state) => state.anyone)
  const setAnyoneStore = useAnyoneStore((state) => state.addAnyone)
  //Annoying that it seemes to have to be done this way. No easy way of checking to see if you are clicking on the active slide with many bugs.
  const [lastActiveSlideBeforeClick, setlastActiveSlideBeforeClick] =
    useState(0)
  const changeAnyone = async (activeId) => {
    const newAnyone = await anyones.find((anyone) => anyone.id === activeId)
    setAnyoneStore(newAnyone)
  }

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children

  const Foo = (isActive) => {
    console.log('isActive = ' + isActive)
  }
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)

  return (
    <div className="w-full text-white">
      {/* <span className="text-white ">LARGE LAGEADGSFGSDF</span> */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        // navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        slideToClickedSlide={true}
        modules={[Controller]}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        className="mySwiper2"
        // onSlideChange={(swiper) => {
        //   // debugger
        //   if (secondSwiper) {
        //     // debugger
        //     secondSwiper.slideTo(swiper.realIndex)
        //   }
        // }}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          flap
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setSecondSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        centeredSlides={true}
        slideToClickedSlide={true}
        watchSlidesProgress={true}
        modules={[Controller, FreeMode]}
        // controller={{ control: firstSwiper }}
        className="mySwiper"
        onSlideChange={(swiper) => {
          if (firstSwiper) {
            // debugger
            firstSwiper.slideTo(swiper.realIndex)
          }
        }}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default LargeSelectAnyone
