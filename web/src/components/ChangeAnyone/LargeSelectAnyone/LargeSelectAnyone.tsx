import { useState } from 'react'

import clsx from 'clsx'
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

import { navigate, routes } from '@redwoodjs/router'

import AddAnyone from 'src/components/ChangeAnyone/AddAnyone/AddAnyone'
import SearchAnyone from 'src/components/ChangeAnyone/SearchAnyone/SearchAnyone'
import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStoreWithoutContent } from 'src/providers/store/AllAnyonesStore'
import { useSwiperStore } from 'src/providers/store/SwiperStore'

import LSAProfile from './LSAProfile/LSAProfile'

const LargeSelectAnyone = () => {
  const anyones = useAllAnyonesStore((state) => state.anyones)
  const anyone = useAnyoneStore((state) => state.anyone)
  const setAnyoneStore = useAnyoneStore((state) => state.addAnyone)
  const setAnyoneStoreWithoutContent = useAnyoneStoreWithoutContent(
    (state) => state.addAnyoneWithoutContent
  )
  //Annoying that it seemes to have to be done this way. No easy way of checking to see if you are clicking on the active slide with many bugs.
  const [lastActiveSlideBeforeClick, setlastActiveSlideBeforeClick] =
    useState(0)
  const changeAnyone = (activeId) => {
    console.time('a')
    const newAnyone = anyones.find((anyone) => anyone.id === activeId)
    console.timeEnd('a')
    console.time('setAnyone')
    setAnyoneStore(newAnyone)
    console.timeEnd('setAnyone')
  }

  const changeAnyoneWithoutContent = (activeId) => {
    const newAnyone = anyones.find((anyone) => anyone.id === activeId)
    console.time('setAnyoneNoContent')
    setAnyoneStoreWithoutContent(newAnyone)
    console.timeEnd('setAnyoneNoContent')
  }

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children

  const addSecondSwiper = useSwiperStore((state) => state.addSecondSwiper)
  const firstSwiper = useSwiperStore((state) => state.firstSwiper)

  return (
    <div className="w-full text-white">
      {/* <span className="text-white ">LARGE LAGEADGSFGSDF</span> */}
      <Swiper
        onSwiper={addSecondSwiper}
        spaceBetween={0}
        slidesPerView={5}
        speed={100}
        // freeMode={true}
        centeredSlides={true}
        slideToClickedSlide={true}
        // watchSlidesProgress={true}
        modules={[Controller]}
        hashNavigation={true}
        initialSlide={3}
        // controller={{ control: firstSwiper }}
        className="mySwiper"
        // onSlideChange={(swiper) => {
        //   // if (firstSwiper) {
        //   //   // debugger
        //   //   firstSwiper.slideTo(swiper.realIndex)
        //   // }
        // }}
        onSlideChange={(swiper) => {
          if (swiper.clickedIndex != swiper.realIndex) {
            setlastActiveSlideBeforeClick(swiper.previousIndex)
          }
          const index = swiper.realIndex
          //Skip over addAnyone slide
          if (index == 1) return true
          // @ts-expect-error Should be an HTML type thing?
          const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
          // debugger
          if (!firstSwiper == null) {
            firstSwiper.slideTo(swiper.realIndex)
          }
          // TODO this can be brought back for a massive increase in speed. The issue was having a call go out to pull all of their posts each time
          changeAnyoneWithoutContent(activeId)
          // changeAnyone(activeId)
        }}
        onTransitionEnd={(swiper) => {
          // console.log('Slider has stopped moving TRANSITION END')

          // debugger
          const index = swiper.realIndex
          const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
          // firstSwiper.slideTo(swiper.realIndex)

          //Wait for the transition to end before fetching content so it's not downloading it 1000 times
          // changeAnyone(activeId)
          // changeAnyoneWithoutContent(activeId)
        }}
        onClick={(swiper) => {
          if (lastActiveSlideBeforeClick != swiper.previousIndex) {
            setlastActiveSlideBeforeClick(swiper.previousIndex)
          } else {
            navigate(routes.be({ name: anyone.officialName }))
          }
        }}
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
            className="text-center"
          >
            {({ isActive }) => (
              <div
              // className={clsx(
              //   // 'mx-2',
              //   'inline-block',
              //   'items-center',
              //   'text-gray',
              //   {
              //     'relative left-[27px] ': isActive,
              //     'left-0 inline-block': !isActive,
              //   }
              // )}
              >
                {/* <ConditionalWrapper
                condition={isActive}
                wrapper={(children) => (
                  <Link to={routes.home()}>{children}</Link>
                )}
              > */}
                <ConditionalWrapper
                  condition={isActive}
                  wrapper={(children) => <div>{children}</div>}
                >
                  <div
                    className={clsx(
                      // 'mx-2',
                      'items-center',
                      'text-gray',
                      'width-full',
                      {
                        'relative ': isActive,
                        'left-0 inline-block': !isActive,
                      }
                    )}
                  >
                    <div className="flex justify-center">
                      <span className="mx-auto flex w-fit text-center">
                        <img
                          className={clsx('max-w-none rounded-full', {
                            'm-0 h-20 w-20': isActive,
                            'mx-auto h-10 w-10': !isActive,
                          })}
                          alt="Profile"
                          // @ts-expect-error Hardcoded for now, should move to own DB? TODO
                          src={anyone.profiles[0].importedData.pfp.url}
                        ></img>
                      </span>
                    </div>
                    <div className="mt-2 flex justify-center">
                      <span
                        className={clsx(
                          'mx-auto',
                          'flex',
                          'w-fit',
                          'text-center',

                          {
                            'text-white': isActive,
                            'whitespace-nowrap text-2xl': isActive,
                            'font-semibold': isActive,
                            'text-[10px]': !isActive,
                            'leading-[12px]': !isActive,
                            'leading-[24px]': isActive,
                            // hidden: isActive,
                          }
                        )}
                      >
                        {anyone.displayName}
                      </span>
                    </div>
                  </div>
                </ConditionalWrapper>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        slidesPerView={1}
        initialSlide={3}
        // navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        // slideToClickedSlide={true}
        // centeredSlides={true}
        // scrollbar={true}
        // mousewheel={true}
        modules={[Controller]}
        onSwiper={setFirstSwiper}
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
        onTransitionEnd={(swiper) => {
          console.log('Slider has stopped moving TRANSITION END')

          if (firstSwiper) {
            // debugger
            const index = swiper.realIndex
            const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
            // firstSwiper.slideTo(swiper.realIndex)

            //Wait for the transition to end before fetching content so it's not downloading it 1000 times
            changeAnyone(activeId)
          }
        }}
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
            <LSAProfile />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  )
}

export default LargeSelectAnyone
