import { useState } from 'react'

import { LinkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

import FarcasterHomeCell from 'src/components/Farcaster/FarcasterHomeCell'
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
    <div className="test mb-6 mt-1 text-center">
      {/* <h2 className="mx-auto flex w-fit text-center text-2xl font-semibold leading-[22px] text-white">
        {anyoneNoContent.displayName}
      </h2> */}
      <button className="focus:ring-indigo-500 absolute left-0 right-0 bottom-[10.5rem] m-auto mb-1 mt-2 inline-flex w-fit items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
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
        <span className="pr-1"> be:{anyoneNoContent.officialName}</span>
        <LinkIcon className="mt-[-2px] inline h-3 w-3" />
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
      <div className="mb-2 flex w-full justify-center pt-60">
        <h3 className=" text-white">
          {anyoneNoContent.shortName}'s Home
          <span className="inline-block pl-3 text-gray">
            {anyoneNoContent.shortName}'s DAO
          </span>
        </h3>
      </div>
      <FarcasterHomeCell userName={anyone.profiles[0].importedData.username} />
    </div>
  )
}

export default LsaProfile
