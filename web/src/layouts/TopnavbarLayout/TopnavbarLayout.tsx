import { useState, useEffect, useContext } from 'react'

import { Bars3Icon } from '@heroicons/react/24/outline'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ConnectWallet from 'src/components/ConnectWallet/ConnectWallet'
import SignInWithTwitterButton from 'src/components/SignInWithTwitterButton'
import { DevModeContext } from 'src/providers/context/DevModeContext'

type TopnavbarLayoutProps = {
  children?: React.ReactNode
}

const tagArr = [
  'Simple Character DAOs',
  'Character DAOs',
  'DAO Voices',
  'Consensus content',
  'Simple character DAOs',
  'Simple social DAOs',
  'Tiny simple social DAOs',
  "A DAO's singular voice",
  'Be part of something',
  "This is just some fun, this won't be in the live version",
  'What else could be a good tag?',
  'The easiest way to contribute to a DAO',
  "A DAO's single voice",
  'Be anyone',
]

const TopnavbarLayout = ({ children }: TopnavbarLayoutProps) => {
  const [index, setIndex] = useState(0)
  const { isAuthenticated, currentUser, logOut, loading } = useAuth()

  useEffect(() => {
    const interval = setInterval(() => {
      tagArr.length - 2 >= index ? setIndex(index + 1) : setIndex(0)
    }, 5000000)
    return () => clearInterval(interval)
  })

  const devMode = useContext(DevModeContext)
  // Based on https://tailwindui.com/components/application-ui/navigation/navbars#component-d833265bea66e95da3b499411d4d49b3

  return (
    <>
      <MetaTags title="BeanyOne" description={'Hivemind - ' + tagArr[index]} />
      <header className="border-b-2 border-primary bg-primary">
        <div className="mx-auto max-w-5xl px-2">
          <div className="flex h-12 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="block w-auto font-semibold text-white">
                  <button onClick={() => devMode.setDevMode(!devMode.devMode)}>
                    Be Anyone
                  </button>
                </h1>
              </div>
            </div>
            <div className="flex items-center">
              {isAuthenticated ? (
                <div>
                  <button type="button" onClick={logOut}>
                    <Bars3Icon className="h-5 w-5 pr-0 text-white"></Bars3Icon>
                  </button>
                </div>
              ) : (
                <SignInWithTwitterButton />
              )}
              {/* <div className="flex-shrink-0">
                <ConnectWallet />
              </div> */}
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl bg-black px-4 pt-4">
        <h2 className=" text-center text-4xl font-semibold text-primary">
          {tagArr[index]}
        </h2>
        {children}
      </main>
    </>
  )
}

export default TopnavbarLayout
