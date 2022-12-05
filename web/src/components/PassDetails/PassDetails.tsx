import { ChevronDownIcon } from '@heroicons/react/24/outline'

const PassDetails = () => {
  return (
    <div className="font-regular inline-block text-xs text-gray ">
      <span>
        1 cast a day / pass <ChevronDownIcon className="inline h-3 w-3" />
      </span>

      {/* {anyone.username === 'add' && (
              <span className="float-right mr-1">
                Time to add the cool stuff!
              </span>
            )} */}
    </div>
  )
}

export default PassDetails
