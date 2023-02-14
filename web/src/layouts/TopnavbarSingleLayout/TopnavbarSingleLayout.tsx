import { useState } from 'react'

import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { MetaTags } from '@redwoodjs/web'

import ChangeAnyone from 'src/components/ChangeAnyone/ChangeAnyone'
import ConnectWallet from 'src/components/ConnectWallet/ConnectWallet'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'
import { useChooseAnyoneOpenStore } from 'src/providers/store/ChooseAnyoneOpen'

type TopnavbarSingleLayoutProps = {
  children?: React.ReactNode
}

const TopnavbarSingleLayout = ({ children }: TopnavbarSingleLayoutProps) => {
  //Get the current Anyone
  const anyone = useAnyoneStore((state) => state.anyone)

  //START CHANGE LOGO
  const chooseAnyoneOpen = useChooseAnyoneOpenStore(
    (state) => state.chooseAnyoneOpen
  )

  const changeChooseAnyoneOpen = useChooseAnyoneOpenStore(
    (state) => state.changeChooseAnyoneOpen
  )

  useScrollPosition(({ prevPos, currPos }) => {
    const pixOffset = -174
    if (currPos.y < pixOffset && currPos.y < prevPos.y) {
      changeChooseAnyoneOpen(false)
    }
    if (currPos.y > pixOffset && currPos.y > prevPos.y) {
      changeChooseAnyoneOpen(true)
    }
  })
  //END CHANGE LOGO

  console.log('TopNavSingle Rendered')
  return (
    <>
      <MetaTags title="be:Anyone" description={'be:Anyone'} />
      <div className="mx-auto min-h-full max-w-5xl">
        <header className="sticky top-0 z-10 w-full px-2">
          <div className="flex h-11 justify-between">
            <div className="flex flex-1">
              <div className="flex flex-shrink-0 items-center">
                <QuestionMarkCircleIcon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="block w-auto pt-2 text-base font-medium text-white">
                  {/* <button
                    onClick={openChoose}
                    // className="rounded-full bg-[rgba(0,0,0,0.3)] p-1"
                  > */}
                  <span style={{ textShadow: '#222 1px 1px 5px' }}>be:</span>
                  {chooseAnyoneOpen && (
                    <span style={{ textShadow: '#222 1px 1px 5px' }}>
                      Anyone
                    </span>
                  )}
                  {!chooseAnyoneOpen && (
                    <span>
                      <img
                        className=" mx-1 inline-block h-6 w-6 rounded-full drop-shadow-xl"
                        alt="Profile"
                        // @ts-expect-error Hardcoded for now, should move to own DB? TODO
                        src={anyone.profiles[0].importedData.pfp.url}
                      ></img>
                      <span style={{ textShadow: '#222 1px 1px 5px' }}>
                        {anyone.shortName}
                      </span>
                    </span>
                  )}
                  {/* </button> */}
                </h1>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
              <div className="flex-shrink-0">
                <ConnectWallet />
              </div>
            </div>
          </div>
        </header>
        {/* {chooseAnyoneOpen && <ChangeAnyone large={homepage} anyone={anyone} />} */}
        {/* <ChangeAnyone
          large={false}
          anyone={anyone}
          fadeOut={!chooseAnyoneOpen}
        /> */}

        <main className="mt-10 min-h-[99999px] bg-black">{children}</main>
      </div>
    </>
  )
}

export default TopnavbarSingleLayout
