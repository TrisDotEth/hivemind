import clsx from 'clsx'
import 'swiper/css'
// import { HashNavigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Link, routes } from '@redwoodjs/router'

import AddAnyone from 'src/components/ChangeAnyone/AddAnyone/AddAnyone'
import SearchAnyone from 'src/components/ChangeAnyone/SearchAnyone/SearchAnyone'
import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

const SelectAnyone = () => {
  const anyones = useAllAnyonesStore((state) => state.anyones)
  const setAnyoneStore = useAnyoneStore((state) => state.addAnyone)
  const changeAnyone = async (activeId) => {
    const newAnyone = await anyones.find((anyone) => anyone.id === activeId)
    setAnyoneStore(newAnyone)
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
        className="overflow-x-clip"
        // modules={[HashNavigation]}
        onSlideChange={(swiper) => {
          const index = swiper.realIndex
          //Skip over addAnyone slide
          if (index == 1) return true
          // debugger
          // const activeSlide = swiper.slides[index].dataset.hash
          // @ts-expect-error Should be an HTML type thing?
          const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
          changeAnyone(activeId)
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
                  'mx-2',
                  'inline-block',
                  'w-12',
                  'items-center',
                  'text-gray',
                  {
                    'relative top-[-10px]': isActive,
                    'inline-block': !isActive,
                  }
                )}
              >
                <img
                  className={clsx('mx-auto', 'rounded-full', {
                    't h-12 w-12': isActive,
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
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SelectAnyone
