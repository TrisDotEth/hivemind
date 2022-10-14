import { useState, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import ActionBox from 'src/components/ActionBox/ActionBox'
import ActiveHm from 'src/components/ActiveHm/ActiveHm'
import ChangeHm from 'src/components/ChangeHm/ChangeHm'
import ConnectWallet from 'src/components/ConnectWallet/ConnectWallet'

const tagArr = [
  "A DAO's singular voice",
  'Be part of something',
  "This is just some fun, this won't be in the live version",
  'What else could be a good tag?',
  'The easiest way to contribute to a DAO',
  "A DAO's single voice",
  'Be anyone',
]

const HomePage = () => {
  //For the rotating tags - TODO not for prod
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      tagArr.length - 2 >= index ? setIndex(index + 1) : setIndex(0)
    }, 500000)
    return () => clearInterval(interval)
  })
  //End rotating tags

  return (
    <>
      <MetaTags
        title="Hivemind"
        description="Hivemind - A DAO's singular voice"
      />
      <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Hivemind</span>
            <span className="block text-indigo-600 xl:inline">
              {tagArr[index]}
            </span>
          </h1>
        </div>
        <ActionBox />
        <ActiveHm />
        <ChangeHm />
        <ConnectWallet />
      </main>
    </>
  )
}

export default HomePage
