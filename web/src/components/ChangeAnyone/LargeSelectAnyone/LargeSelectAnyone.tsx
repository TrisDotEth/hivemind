import { useState } from 'react'

import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
// import { HashNavigation } from 'swiper'
import TimeAgo from 'javascript-time-ago'
import { FreeMode, Navigation, Thumbs, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { navigate, routes } from '@redwoodjs/router'

import AddAnyone from 'src/components/ChangeAnyone/AddAnyone/AddAnyone'
import SearchAnyone from 'src/components/ChangeAnyone/SearchAnyone/SearchAnyone'
import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStoreWithoutContent } from 'src/providers/store/AllAnyonesStore'

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
  const changeAnyone = async (activeId) => {
    const newAnyone = await anyones.find((anyone) => anyone.id === activeId)
    // setAnyoneStoreWithoutContent(newAnyone)
    setAnyoneStore(newAnyone)
  }

  const changeAnyoneWithoutContent = async (activeId) => {
    const newAnyone = await anyones.find((anyone) => anyone.id === activeId)
    setAnyoneStoreWithoutContent(newAnyone)
    // setAnyoneStore(newAnyone)
  }

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children

  const Foo = (isActive) => {
    console.log('isActive = ' + isActive)
  }
  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)

  return (
    <div className="w-full text-white">
      {/* <span className="text-white ">LARGE LAGEADGSFGSDF</span> */}
      <Swiper
        onSwiper={setSecondSwiper}
        spaceBetween={0}
        slidesPerView={5}
        // freeMode={true}
        centeredSlides={true}
        slideToClickedSlide={true}
        watchSlidesProgress={true}
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
          if (firstSwiper) {
            firstSwiper.slideTo(swiper.realIndex)
          }
          // TODO this can be brought back for a massive increase in speed. The issue was having a call go out to pull all of their posts each time
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
            className=" text-center"
          >
            {({ isActive }) => (
              <div
                className={clsx(
                  // 'mx-2',
                  'inline-block',
                  'items-center',
                  'text-gray',
                  {
                    'relative h-20 w-20': isActive,
                    'inline-block w-12': !isActive,
                  }
                )}
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
                  <img
                    className={clsx('mx-auto', 'rounded-full', {
                      'h-20 w-20': isActive,
                      'h-10 w-10': !isActive,
                    })}
                    alt="Profile"
                    // @ts-expect-error Hardcoded for now, should move to own DB? TODO
                    src={anyone.profiles[0].importedData.pfp.url}
                  ></img>
                  <div className="mt-1 flex justify-center">
                    <span
                      className={clsx(
                        'mx-auto',
                        'flex',
                        'w-fit',
                        'text-center',

                        {
                          'text-white': isActive,
                          'text-2xl': isActive,
                          'font-semibold': isActive,
                          'text-[10px]': !isActive,
                          'leading-[12px]': !isActive,
                          'leading-[22px]': isActive,
                        }
                      )}
                    >
                      {anyone.displayName}
                    </span>
                  </div>
                </ConditionalWrapper>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        slidesPerView={1}
        initialSlide={3}
        // navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        slideToClickedSlide={true}
        centeredSlides={true}
        modules={[Controller]}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        className="mySwiper2 overflow-x-clip"
        onTransitionEnd={(swiper) => {
          console.log('Slider has stopped moving TRANSITION END')

          if (firstSwiper) {
            // debugger
            const index = swiper.realIndex
            const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
            // firstSwiper.slideTo(swiper.realIndex)

            //Wait for the transition to end before fetching content so it's not downloading it 1000 times
            // changeAnyone(activeId)
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
            className="h-[300px] text-center"
          >
            {({ isActive }) => (
              // <div
              //   className={clsx(
              //     // 'mx-2',
              //     'inline-block',
              //     'items-center',
              //     'text-gray',
              //     {
              //       'relative h-12 w-12': isActive,
              //       'inline-block w-12': !isActive,
              //     }
              //   )}
              // >
              <ConditionalWrapper
                condition={isActive}
                wrapper={(children) => <div>{children}</div>}
              >
                <LSAProfile />
              </ConditionalWrapper>
              // </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default LargeSelectAnyone