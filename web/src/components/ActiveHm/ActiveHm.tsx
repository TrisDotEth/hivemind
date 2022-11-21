import { useContext } from 'react'

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'

import ChangeHm from 'src/components/ChangeHm/ChangeHm'
import { HivemindContext } from 'src/providers/context/HivemindContext'

const ActiveHm = () => {
  const hivemind = useContext(HivemindContext)
  return (
    <>
      <div className="mb-6 text-center">
        <div className="flex items-center">
          <ChangeHm>
            <ChevronLeftIcon className="h-5 w-5 pl-0 text-gray"></ChevronLeftIcon>
          </ChangeHm>
          <img
            className="mx-auto mb-1 h-24 w-24 rounded-full"
            src={hivemind.activeHmData.avatar.url}
            alt=""
          />
          <ChangeHm>
            <ChevronRightIcon className="h-5 w-5 pr-0 text-gray"></ChevronRightIcon>
          </ChangeHm>
        </div>
        <h3 className="mb-2 space-y-1 text-xl font-semibold leading-6 text-white">
          {hivemind.activeHmData.displayName}
        </h3>

        <div className="text-center">
          {/* <p className="font-regular mb-1 text-sm text-gray">
            {hivemind.activeHmData.profile.bio.text}
          </p> */}
          <button className="focus:ring-indigo-500 mb-1 inline-flex items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
            CLAIM PASS
          </button>
          <div className="font-regular text-sm text-gray ">
            <span className="text-white">1 cast</span>
            <span> a day / </span>
            <span className="text-white">Pass</span>

            {hivemind.activeHmData.username === 'add' && (
              <span className="float-right mr-1">
                Time to add the cool stuff!
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ActiveHm
