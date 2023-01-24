import { useState } from 'react'

import { LinkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

import FarcasterHomeCell from 'src/components/Farcaster/FarcasterHomeCell'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'
import { useAnyoneStoreWithoutContent } from 'src/providers/store/AllAnyonesStore'

import LSAProfileChrome from './LSAProfileChrome/LSAProfileChrome'

// import PassDetails from '../PassDetails/PassDetails'

const LsaProfile = ({ isActive, anyone }) => {
  return (
    <div className="mb-6 mt-1">
      <LSAProfileChrome anyone={anyone} />

      <div className="mb-2 flex w-full justify-center pt-16">
        <h3 className=" text-white">
          {anyone.shortName}&apos;s Home
          <span className="inline-block pl-3 text-gray">
            {anyone.shortName}DAO
          </span>
        </h3>
      </div>
      {isActive && (
        <FarcasterHomeCell
          userName={anyone.profiles[0].importedData.username}
        />
      )}
      {/* <FarcasterHomeCell userName={anyone.profiles[0].importedData.username} /> */}
    </div>
  )
}

export default LsaProfile
