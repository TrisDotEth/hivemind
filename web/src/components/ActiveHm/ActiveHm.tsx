import { useState } from 'react'

import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

import PassDetails from '../PassDetails/PassDetails'

const ActiveHm = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  const [chooseAnyoneOpen, setChooseAnyoneOpen] = useState(false)

  const openChoose = () => {
    setChooseAnyoneOpen(!chooseAnyoneOpen)
  }
  return (
    <>
      <div className="mb-6 text-center">
        <div className="flex items-center">
          <img
            className="mx-auto mb-1 h-20 w-20 rounded-full"
            src={anyone.profiles[0].importedData.pfp.url}
            alt=""
          />
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-4 text-white">
          {anyone.displayName}
        </h3>
        <p className="mt-[-2px] text-xs text-gray">be:{anyone.officialName}</p>

        <div className="mt-1 text-center">
          <p className="text-sm text-white">
            {anyone.profiles[0].importedData.profile.bio.text}
          </p>
          <div className="mt-[-7px]">
            {/* <span className="mr-3 inline-block text-xs text-gray">
              <span className="text-sm text-white">50</span> Members
            </span> */}
            <button onClick={openChoose}>
              <PassDetails />
            </button>
            {chooseAnyoneOpen && (
              <span className="mr-3 inline-block text-xs text-gray">
                <span className="text-sm text-gray">
                  DAO address - 0x0db9...0b46{' '}
                </span>
              </span>
            )}
          </div>

          {anyone.officialName == 'ttris' && (
            <button className="focus:ring-indigo-500 mb-1 mt-2 inline-flex items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
              CLAIM PASS
            </button>
          )}

          {/* <button className="focus:ring-indigo-500 mb-1 mt-2 inline-flex items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
            CLAIM PASS
          </button> */}
        </div>
      </div>
    </>
  )
}

export default ActiveHm
