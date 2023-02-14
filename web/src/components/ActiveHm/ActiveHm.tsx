import { useState } from 'react'

import { LinkIcon } from '@heroicons/react/20/solid'

import ConnectWallet from 'src/components/ConnectWallet/ConnectWallet'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

import PassDetails from '../PassDetails/PassDetails'

const ActiveHm = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  const [chooseAnyoneOpen, setChooseAnyoneOpen] = useState(false)

  const openChoose = () => {
    setChooseAnyoneOpen(!chooseAnyoneOpen)
  }
  return (
    <>
      <div className="mb-6">
        <div className=" mx-auto block w-96">
          <img
            className=" mb-1 mr-4 inline-block h-32 w-32 rounded-full align-top"
            src={anyone.profiles[0].importedData.pfp.url}
            alt=""
          />
          <div className="inline-block w-[62%]">
            <h3 className="mt-0 text-4xl font-semibold text-white">
              {anyone.displayName}
            </h3>
            <p className="mt-[-2px] mb-3 text-xs text-gray">
              be:{anyone.officialName}
              <LinkIcon className="ml-[2px] inline h-3 w-3 " />
            </p>
            <p className=" text-sm text-white">
              {anyone.profiles[0].importedData.profile.bio.text}
            </p>
          </div>
        </div>

        <div className="mt-1 text-center">
          <div className="mt-[-7px]">
            {/* <span className="mr-3 inline-block text-xs text-gray">
              <span className="text-sm text-white">50</span> Members
            </span> */}
            <button onClick={openChoose}>
              <PassDetails />
            </button>
            {chooseAnyoneOpen && (
              <span className="mr-3 inline-block text-xs text-gray">
                <span className="text-sm text-gray">
                  DAO address - 0x0db9...0b46{' '}
                </span>
              </span>
            )}
          </div>

          {/* {anyone.officialName == 'ttris' && (
            <button className="focus:ring-indigo-500 mb-1 mt-2 inline-flex items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
              CLAIM PASS
            </button>
          )} */}

          {/* <button className="mb-1 mt-2 inline-flex h-[34px] w-52 items-center justify-center rounded-lg bg-gradient-to-r from-[#2f3cc9] to-[#ad52dd] px-4 text-sm text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
            Connect Wallet
          </button> */}
          <ConnectWallet showWhenConnected={false} />

          {/* <button className="focus:ring-indigo-500 mb-1 mt-2 inline-flex w-52 items-center justify-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
            Connect Wallet
          </button> */}
        </div>
      </div>
    </>
  )
}

export default ActiveHm
