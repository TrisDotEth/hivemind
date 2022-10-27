import { useContext } from 'react'

import { HivemindContext } from 'src/providers/context/HivemindContext'

const ActiveHm = () => {
  const hivemind = useContext(HivemindContext)
  return (
    <>
      <div className="mb-10 space-y-4 text-center">
        <img
          className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
          src={hivemind.activeHmData.profileImageURL}
          alt=""
        />
        <div className="space-y-2">
          <div className="text-xs font-medium lg:text-sm">
            <h3 className="space-y-1 text-lg font-medium leading-6">
              {hivemind.activeHmData.name}
            </h3>
            <p>{hivemind.activeHmData.aboutInformation}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActiveHm
