import { useState } from 'react'

import clsx from 'clsx'
import 'swiper/css'
import { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { navigate, routes } from '@redwoodjs/router'

import AddAnyone from 'src/components/ChangeAnyone/AddAnyone/AddAnyone'
import SearchAnyone from 'src/components/ChangeAnyone/SearchAnyone/SearchAnyone'
import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStoreWithoutContent } from 'src/providers/store/AllAnyonesStore'
import { useChooseAnyoneOpenStore } from 'src/providers/store/ChooseAnyoneOpen'
import { useSwiperStore } from 'src/providers/store/SwiperStore'

import LSAProfile from './LSAProfile/LSAProfile'

const LargeSelectAnyone = ({ anyone }) => {
  const anyones = useAllAnyonesStore((state) => state.anyones)
  const setAnyoneStore = useAnyoneStore((state) => state.addAnyone)
  const setAnyoneStoreWithoutContent = useAnyoneStoreWithoutContent(
    (state) => state.addAnyoneWithoutContent
  )
  const changeChooseAnyoneOpen = useChooseAnyoneOpenStore(
    (state) => state.changeChooseAnyoneOpen
  )
  //DEV changeChooseAnyoneOpen(true)
  //Annoying that it seemes to have to be done this way. No easy way of checking to see if you are clicking on the active slide with many bugs.
  const [lastActiveSlideBeforeClick, setlastActiveSlideBeforeClick] =
    useState(0)
  const changeAnyone = (activeId) => {
    const newAnyone = anyones.find((anyone) => anyone.id === activeId)
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
        // slideToClickedSlide={true}
        // watchSlidesProgress={true}
        // modules={[Controller]}
        hashNavigation={true}
        initialSlide={3}
        className="mySwiper"
        onSlideChange={(swiper) => {
          if (swiper.clickedIndex != swiper.realIndex) {
            setlastActiveSlideBeforeClick(swiper.previousIndex)
          }
          const index = swiper.realIndex
          //Skip over addAnyone slide
          if (index == 1) return true
          // @ts-expect-error Should be an HTML type thing?
          const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
          // TODO Make into guards?
          if (firstSwiper !== false) {
            if (!firstSwiper.destroyed) {
              firstSwiper.slideTo(swiper.realIndex)
            }
          }
          changeAnyoneWithoutContent(activeId)
          changeAnyone(activeId)
        }}
        onTransitionEnd={(swiper) => {
          const index = swiper.realIndex
          const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
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
                    <div className="mt-2 grid justify-center">
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
                      {isActive && (
                        <p className="mt-1 w-[80vw] text-sm text-white">
                          {anyone.profiles[0].importedData.profile.bio.text}
                        </p>
                      )}
                    </div>
                  </div>
                </ConditionalWrapper>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default LargeSelectAnyone
