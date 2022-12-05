import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

import PassDetails from '../PassDetails/PassDetails'

const ActiveHm = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  return (
    <>
      <div className="mb-6 text-center">
        <div className="flex items-center">
          <img
            className="mx-auto mb-1 h-16 w-16 rounded-full"
            src={anyone.avatar.url}
            alt=""
          />
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-4 text-white">
          {anyone.displayName}
        </h3>
        <p className="mt-[-2px] text-xs text-gray">be:{anyone.username}</p>

        <div className="mt-1 text-center">
          <p className="text-sm text-white">{anyone.profile.bio.text}</p>
          <div className="mt-[-7px]">
            <span className="mr-3 inline-block text-xs text-gray">
              <span className="text-sm text-white">50</span> Members
            </span>
            <PassDetails />
          </div>

          <button className="focus:ring-indigo-500 mb-1 mt-2 inline-flex items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
            CLAIM PASS
          </button>
        </div>
      </div>
    </>
  )
}

export default ActiveHm
