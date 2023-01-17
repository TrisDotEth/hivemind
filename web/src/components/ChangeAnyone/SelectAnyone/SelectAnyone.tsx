import { useState } from 'react'

import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/pagination'
// import { HashNavigation } from 'swiper'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { navigate, routes } from '@redwoodjs/router'

import AddAnyone from 'src/components/ChangeAnyone/AddAnyone/AddAnyone'
import SearchAnyone from 'src/components/ChangeAnyone/SearchAnyone/SearchAnyone'
import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

const SelectAnyone = () => {
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

  return (
    <div className="w-full text-white">
      <Swiper
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={5}
        slideToClickedSlide={true}
        hashNavigation={true}
        initialSlide={3}
        // watchSlidesProgress={true}
        className="overflow-x-clip"
        // modules={[HashNavigation]}
        onBeforeSlideChangeStart={(swiper) => {
          // console.log('2active index is ' + swiper.realIndex)
          // console.log('2clicked index is ' + swiper.clickedIndex)
        }}
        onSlideChange={(swiper) => {
          console.log('SLIDE active index is ' + swiper.realIndex)
          console.log('SLIDE clicked index is ' + swiper.clickedIndex)
          console.log('SLIDE previous index is ' + swiper.previousIndex)

          if (swiper.clickedIndex != swiper.realIndex) {
            // setlastActiveSlideBeforeClick(swiper.realIndex)
            setlastActiveSlideBeforeClick(swiper.previousIndex)

            // if (lastActiveSlideBeforeClick != swiper.previousIndex) {
            //   setlastActiveSlideBeforeClick(swiper.previousIndex)
            // }
          }
          console.log('SLIDE state index is ' + lastActiveSlideBeforeClick)
          console.log('------')

          const index = swiper.realIndex
          //Skip over addAnyone slide
          if (index == 1) return true
          // debugger
          // const activeSlide = swiper.slides[index].dataset.hash
          // @ts-expect-error Should be an HTML type thing?
          const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
          changeAnyone(activeId)
        }}
        onClick={(swiper) => {
          console.log('active index is ' + swiper.realIndex)
          console.log('clicked index is ' + swiper.clickedIndex)
          console.log('previous index is ' + swiper.previousIndex)
          // debugger
          console.log('state index is ' + lastActiveSlideBeforeClick)
          console.log('------')
          if (lastActiveSlideBeforeClick != swiper.previousIndex) {
            setlastActiveSlideBeforeClick(swiper.previousIndex)
          } else {
            console.log('Route')
            console.log('------')
            console.log(anyone)

            navigate(routes.be({ name: anyone.officialName }))
          }
          // if (swiper.previousIndex == lastActiveSlideBeforeClick) {
          //   console.log('Route')
          // }
          // if (swiper.activeIndex == lastActiveSlideBeforeClick) {
          //   console.log('Route')
          // }
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
                    'relative h-12 w-12': isActive,
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
                      'h-12 w-12': isActive,
                      'h-10 w-10': !isActive,
                    })}
                    alt="Profile"
                    // @ts-expect-error Hardcoded for now, should move to own DB? TODO
                    src={anyone.profiles[0].importedData.pfp.url}
                  ></img>
                  <div>
                    <span
                      className={clsx(
                        'mx-auto',
                        'flex',
                        'w-fit',
                        'text-center',
                        'text-[10px]',
                        'leading-[12px]',
                        {
                          'text-white': isActive,
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
    </div>
  )
}

export default SelectAnyone
