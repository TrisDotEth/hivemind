import { ChevronDownIcon } from '@heroicons/react/24/outline'

import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

const PassDetails = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  return (
    <div className="font-regular inline-block text-xs text-gray ">
      {anyone.officialName == 'Tris' && (
        <span>
          3 casts a day / ENSName <ChevronDownIcon className="inline h-3 w-3" />
        </span>
      )}
      {anyone.officialName == 'ttris' && (
        <span>
          20 casts a day / pass <ChevronDownIcon className="inline h-3 w-3" />
        </span>
      )}
      {anyone.officialName == 'barmstrong' && (
        <span>
          1 cast a day / BoredApe <ChevronDownIcon className="inline h-3 w-3" />
        </span>
      )}
      {anyone.officialName == 'vbuterin' && (
        <span>
          1 cast & 3 replies a day / cryptopunk{' '}
          <ChevronDownIcon className="inline h-3 w-3" />
        </span>
      )}

      {/* {anyone.username === 'add' && (
              <span className="float-right mr-1">
                Time to add the cool stuff!
              </span>
            )} */}
    </div>
  )
}

export default PassDetails
