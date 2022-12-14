import { useContext, useState } from 'react'

import { SquaresPlusIcon } from '@heroicons/react/24/outline'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { MetaTags } from '@redwoodjs/web'

import AllAnyonesCell from 'src/components/AnyonesData/AllAnyonesCell'
import ChangeAnyone from 'src/components/ChangeAnyone/ChangeAnyone'
import ConnectWallet from 'src/components/ConnectWallet/ConnectWallet'
import UpdateFarcasterProfiles from 'src/components/Farcaster/UpdateFarcasterProfiles/UpdateFarcasterProfiles'
import UpdateFarcasterProfilesCell from 'src/components/Farcaster/UpdateFarcasterProfilesCell'
import { DevModeContext } from 'src/providers/context/DevModeContext'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

type TopnavbarLayoutProps = {
  children?: React.ReactNode
}

// const tagArr = [
//   'Simple Character DAOs',
//   'Post as a DAO.',
//   'Post as someone else',
//   'Post as your DAO',
//   'Be the Character',
//   'Be a Character',
//   'Character DAOs',
//   'DAO Voices',
//   'Consensus content',
//   'Simple character DAOs',
//   'Simple social DAOs',
//   'Tiny simple social DAOs',
//   "A DAO's singular voice",
//   'Be part of something',
//   "This is just some fun, this won't be in the live version",
//   'What else could be a good tag?',
//   'The easiest way to contribute to a DAO',
//   "A DAO's single voice",
//   'Be anyone',
// ]

const TopnavbarLayout = ({ children }: TopnavbarLayoutProps) => {
  // const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     tagArr.length - 2 >= index ? setIndex(index + 1) : setIndex(0)
  //   }, 5000000)
  //   return () => clearInterval(interval)
  // })

  const devMode = useContext(DevModeContext)
  // Based on https://tailwindui.com/components/application-ui/navigation/navbars#component-d833265bea66e95da3b499411d4d49b3

  //START
  const [chooseAnyoneOpen, setChooseAnyoneOpen] = useState(true)
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const [logoAnyone, setLogoAnyone] = useState(true)
  const openChoose = () => {
    setChooseAnyoneOpen(true)
  }
  const anyone = useAnyoneStore((state) => state.anyone)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setChooseAnyoneOpen(isShow)
      if (isShow !== hideOnScroll) setLogoAnyone(false)
    },
    [hideOnScroll]
  )

  return (
    <>
      <MetaTags title="be:Anyone" description={'be:Anyone'} />
      <UpdateFarcasterProfiles />
      <AllAnyonesCell />
      {/* <UpdateFarcasterProfilesCell input="g"></UpdateFarcasterProfilesCell> */}
      {chooseAnyoneOpen && hideOnScroll && <ChangeAnyone />}
      <header className=" fixed bottom-0 w-full bg-black">
        <div className="mx-auto max-w-5xl px-2">
          <div className="flex h-11 justify-between">
            <div className="flex flex-1">
              <div className="flex flex-shrink-0 items-center">
                <button onClick={() => devMode.setDevMode(!devMode.devMode)}>
                  <SquaresPlusIcon className="h-6 w-6 text-black" />
                </button>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="block w-auto pt-2 text-base font-medium text-white">
                  <button onClick={openChoose}>
                    <span>be:</span>
                    {logoAnyone && <span>Anyone</span>}
                    {!logoAnyone && (
                      <span>
                        <img
                          className=" mx-1 inline-block h-6 w-6 rounded-full"
                          alt="Profile"
                          // @ts-expect-error Hardcoded for now, should move to own DB? TODO
                          src={anyone.profiles[0].importedData.pfp.url}
                        ></img>
                        {anyone.shortName}
                      </span>
                    )}
                  </button>
                </h1>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
              <div className="flex-shrink-0">
                <ConnectWallet />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl bg-black px-4 pt-4">
        {/* <h2 className=" text-center text-4xl font-medium text-primary">
          {tagArr[index]}
        </h2> */}
        {children}
      </main>
    </>
  )
}

export default TopnavbarLayout
