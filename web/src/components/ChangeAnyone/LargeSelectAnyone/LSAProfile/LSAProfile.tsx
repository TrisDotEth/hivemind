import { useState } from 'react'

import clsx from 'clsx'

import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStoreWithoutContent } from 'src/providers/store/AllAnyonesStore'

// import PassDetails from '../PassDetails/PassDetails'

const LsaProfile = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  const [chooseAnyoneOpen, setChooseAnyoneOpen] = useState(false)

  const openChoose = () => {
    setChooseAnyoneOpen(!chooseAnyoneOpen)
  }
  const anyoneNoContent = useAnyoneStoreWithoutContent(
    (state) => state.anyoneNoContent
  )
  return (
    <div className="test mb-6 mt-10 text-center">
      <button className="focus:ring-indigo-500 absolute left-0 right-0 bottom-[10rem] m-auto mb-1 mt-2 inline-flex w-fit items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
        <span className="mr-1">be: </span>
        <img
          className="mx-auto h-5 w-5 rounded-full"
          alt="Profile"
          // @ts-expect-error Hardcoded for now, should move to own DB? TODO
          src={anyoneNoContent.profiles[0].importedData.pfp.url}
        ></img>
        <span className="ml-1"> {anyoneNoContent.shortName}</span>
      </button>
      {/* <span
        className="
          mx-auto
          flex
          w-fit
          text-center
          text-lg
          leading-[12px] text-white"
      >
        {anyone.displayName}asdf
      </span> */}
      {/* <h3 className="mt-2 text-lg font-semibold leading-4 text-white">
        {anyoneNoContent.displayName}
      </h3> */}
      <p className="mt-[-2px] text-xs text-gray">
        be:{anyoneNoContent.officialName}
      </p>

      <div className="mt-1 text-center">
        <p className="text-sm text-white">
          {anyoneNoContent.profiles[0].importedData.profile.bio.text}
        </p>
        {/* <div className="mt-[-7px]">
          <span className="mr-3 inline-block text-xs text-gray">
              <span className="text-sm text-white">50</span> Members
            </span>
          <button onClick={openChoose}><PassDetails /></button>
          {chooseAnyoneOpen && (
            <span className="mr-3 inline-block text-xs text-gray">
              <span className="text-sm text-gray">
                DAO address - 0x0db9...0b46{' '}
              </span>
            </span>
          )}
        </div> */}

        {/* {anyone.officialName == 'ttris' && (
          <button className="focus:ring-indigo-500 mb-1 mt-2 inline-flex items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
            CLAIM PASS
          </button>
        )} */}

        {/* <button className="focus:ring-indigo-500 mb-1 mt-2 inline-flex items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
            CLAIM PASS
          </button> */}
      </div>
    </div>
  )
}

export default LsaProfile
