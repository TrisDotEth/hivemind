import clsx from 'clsx'
import 'swiper/css'
// import { HashNavigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import FarcasterUserCell from 'src/components/FarcasterUserCell'
import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

const SelectAnyone = () => {
  const anyones = useAllAnyonesStore((state) => state.anyones)
  const setAnyoneStore = useAnyoneStore((state) => state.addAnyone)
  const changeAnyone = async (activeId) => {
    const newAnyone = await anyones.find(
      (anyone) => anyone.hivemind.id === activeId
    )
    setAnyoneStore(newAnyone.importedData)
  }

  return (
    <div className="w-full text-white">
      <Swiper
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={3}
        slideToClickedSlide={true}
        hashNavigation={true}
        className="overflow-x-clip"
        // modules={[HashNavigation]}
        onSlideChange={(swiper) => {
          const index = swiper.realIndex
          // const activeSlide = swiper.slides[index].dataset.hash
          const activeId = parseInt(swiper.slides[index].dataset.anyoneid)
          changeAnyone(activeId)
        }}
      >
        {anyones.map((anyone) => (
          <SwiperSlide
            key={anyone.id}
            data-hash={anyone.importedData.displayName}
            data-anyoneid={anyone.hivemind.id}
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
                  src={anyone.importedData.avatar.url}
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
                    {anyone.importedData.displayName}
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
