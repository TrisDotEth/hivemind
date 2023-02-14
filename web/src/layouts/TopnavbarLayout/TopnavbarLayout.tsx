import { useContext, useState } from 'react'

import { SquaresPlusIcon } from '@heroicons/react/24/outline'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { WalletIcon } from '@heroicons/react/24/solid'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { useLocation } from '@redwoodjs/router'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AllAnyonesCell from 'src/components/AnyonesData/AllAnyonesCell'
import ChangeAnyone from 'src/components/ChangeAnyone/ChangeAnyone'
import ConnectWallet from 'src/components/ConnectWallet/ConnectWallet'
import UpdateFarcasterProfiles from 'src/components/Farcaster/UpdateFarcasterProfiles/UpdateFarcasterProfiles'
import Tagline from 'src/components/Tagline/Tagline'
import { DevModeContext } from 'src/providers/context/DevModeContext'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'
import { useChooseAnyoneOpenStore } from 'src/providers/store/ChooseAnyoneOpen'

// Notes
// - Dev mode disabled
// - Might be worth moving things into their own components? Not sure yet

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
//   'DAO controled farcaster profiles'
// ]

const TopnavbarLayout = ({ children }: TopnavbarLayoutProps) => {
  const chooseAnyoneOpen = useChooseAnyoneOpenStore(
    (state) => state.chooseAnyoneOpen
  )
  const changeChooseAnyoneOpen = useChooseAnyoneOpenStore(
    (state) => state.changeChooseAnyoneOpen
  )

  //Enable dev mode
  const devMode = useContext(DevModeContext)
  // Based on https://tailwindui.com/components/application-ui/navigation/navbars#component-d833265bea66e95da3b499411d4d49b3

  //Open and close ChooseAnyone
  //DEV
  const [currentScrollPosition, setcurrentScrollPosition] = useState(0)
  const [previousScrollPosition, setpreviousScrollPosition] = useState(0)

  //END DEV
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const openChoose = () => {
    changeChooseAnyoneOpen(!chooseAnyoneOpen)
  }
  useScrollPosition(
    ({ prevPos, currPos }) => {
      setcurrentScrollPosition(currPos.y)
      setpreviousScrollPosition(prevPos.y)
      // let isShow = currPos.y > prevPos.y
      let isShow
      // Hide <ChooseAnyone> if passing an arb px limit TODO(Can be done better), and is only scrolling down
      if (currPos.y < -174 && currPos.y < prevPos.y) {
        isShow = currPos.y > prevPos.y
        changeChooseAnyoneOpen(isShow)
      }
      // if (isShow !== hideOnScroll) changeChooseAnyoneOpen(isShow)
    },
    [hideOnScroll]
  )

  //Get the current Anyone
  const anyone = useAnyoneStore((state) => state.anyone)

  //TODO this is so dirty - Check if a profile page
  const { pathname } = useLocation()
  const homepage = pathname.length < 2 ? true : false
  console.log('TopNav Rendered')
  return (
    <>
      <MetaTags title="be:Anyone" description={'be:Anyone'} />
      {/* <span className="fixed top-0 z-50 h-4 w-8 bg-primary-dark text-xs text-white">
        c{currentScrollPosition}
        <br />p{previousScrollPosition}
        <br />
        isShow-{chooseAnyoneOpen ? 't' : 'f'}
      </span> */}
      <div className="mx-auto min-h-full max-w-5xl">
        <header className="sticky top-0 z-10 w-full px-2">
          <div className="flex h-11 justify-between">
            <div className="flex flex-1">
              <div className="flex flex-shrink-0 items-center">
                {/* Check to see if it's not on the home page */}
                {/* {!homepage && (
                  <Link to={routes.home()}>
                    <ArrowSmallLeftIcon className="h-6 w-6 text-white" />
                  </Link>
                )} */}
                <QuestionMarkCircleIcon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="block w-auto pt-2 text-base font-medium text-white">
                  <button
                    onClick={openChoose}
                    // className="rounded-full bg-[rgba(0,0,0,0.3)] p-1"
                  >
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
                  </button>
                </h1>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
              <div className="flex-shrink-0">
                <ConnectWallet />
                {/* <WalletIcon className="h-6 w-6 text-white" /> */}
                {/* Enable Dev mode */}
                {/* <button onClick={() => devMode.setDevMode(!devMode.devMode)}>
                  <SquaresPlusIcon className="h-6 w-6 text-white" />
                </button> */}
              </div>
            </div>
          </div>
        </header>
        <Tagline fadeOut={!chooseAnyoneOpen} />
        {/* {chooseAnyoneOpen && <ChangeAnyone large={homepage} anyone={anyone} />} */}
        <ChangeAnyone
          large={homepage}
          anyone={anyone}
          fadeOut={!chooseAnyoneOpen}
        />

        <main className="mt-10 bg-black">{children}</main>
      </div>
    </>
  )
}

export default TopnavbarLayout
