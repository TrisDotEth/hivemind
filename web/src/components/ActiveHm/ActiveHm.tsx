import { useContext } from 'react'

import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

import ChangeHm from 'src/components/ChangeHm/ChangeHm'
import { HivemindContext } from 'src/providers/context/HivemindContext'

const ActiveHm = () => {
  const hivemind = useContext(HivemindContext)
  return (
    <>
      <div className="mb-4 text-center">
        <div className="flex items-center">
          <ChangeHm>
            <ChevronLeftIcon className="h-5 w-5 text-gray "></ChevronLeftIcon>
          </ChangeHm>
          <img
            className="mx-auto mb-1 h-20 w-20 rounded-full"
            src={hivemind.activeHmData.profileImageURL}
            alt=""
          />
          <ChangeHm>
            <ChevronRightIcon className="h-5 w-5 text-gray "></ChevronRightIcon>
          </ChangeHm>
        </div>
        <h3 className="mb-2 space-y-1 text-xl font-semibold leading-6 text-white">
          {hivemind.activeHmData.name}
        </h3>
        <div className="text-left">
          <p className="font-regular mb-1 text-sm text-gray">
            {hivemind.activeHmData.aboutInformation}
          </p>
          <div className="font-regular text-sm text-gray">
            <span className="text-white">1</span>
            <span> cast a day / </span>
            <span className="text-white">farcasterUsername</span>
            <span className="float-right inline-flex ">
              CONTEXT <ChevronDownIcon className="h-5 w-5 "></ChevronDownIcon>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActiveHm
