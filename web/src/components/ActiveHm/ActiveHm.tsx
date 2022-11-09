import { useContext, useState } from 'react'

import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

import ChangeHm from 'src/components/ChangeHm/ChangeHm'
import { HivemindContext } from 'src/providers/context/HivemindContext'

const ActiveHm = () => {
  const hivemind = useContext(HivemindContext)
  const [isContextVisible, setIsContextVisible] = useState(false)
  const handleContextPress = () => {
    setIsContextVisible((isVisible) => !isVisible)
  }
  return (
    <>
      <div className="mb-4 text-center">
        <div className="flex items-center">
          {/* //py-12 pl-0 & py-12 pr-0 to make the chevron button bigger */}
          <ChangeHm>
            <ChevronLeftIcon className="h-5 w-5 pl-0 text-gray"></ChevronLeftIcon>
          </ChangeHm>
          <img
            className="mx-auto mb-1 h-20 w-20 rounded-full"
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
          <p className="font-regular mb-1 text-sm text-gray">
            {hivemind.activeHmData.profile.bio.text}
          </p>
          <div className="font-regular text-sm text-gray">
            <span className="text-white">1</span>
            <span> cast a day / </span>
            <span className="text-white">farcasterUsername</span>
            {/* <button className="float-right " onClick={handleContextPress}>
              <span className="inline-flex">
                CONTRACT{' '}
                <ChevronDownIcon className="h-5 w-5 "></ChevronDownIcon>
              </span>
            </button>
            {isContextVisible && (
              <span className="float-right mr-1">
                {hivemind.activeHmData.rules[0].text}
              </span>
            )} */}

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
