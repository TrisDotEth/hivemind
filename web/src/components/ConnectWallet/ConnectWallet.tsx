import { useState } from 'react'

import { ConnectKitButton } from 'connectkit'

//TODO SO HACK AND BAD!
const ConnectWallet = ({ showWhenConnected }) => {
  const [connected, setConnected] = useState(false)
  let button

  //IF the props say the button should be shown when connected
  if (showWhenConnected) {
    //And it's connected
    if (connected) {
      button = (
        <ConnectKitButton.Custom>
          {({ isConnected, show, truncatedAddress, ensName }) => {
            return (
              <button
                onClick={show}
                className="rounded-full border border-white bg-black py-px  px-2 text-sm font-semibold text-white "
              >
                {isConnected ? ensName ?? truncatedAddress : 'Connect'}
              </button>
            )
          }}
        </ConnectKitButton.Custom>
      )
    } else {
      button = (
        <ConnectKitButton.Custom>
          {({ isConnected }) => {
            if (isConnected) {
              setConnected(true)
            }
            return null
          }}
        </ConnectKitButton.Custom>
      )
    }
  }
  //If the props say the button should not be shown when connected
  else {
    //And it's not connected
    if (!connected) {
      button = (
        <ConnectKitButton.Custom>
          {({ isConnected, show, truncatedAddress, ensName }) => {
            if (isConnected) {
              setConnected(true)
            }
            return (
              <button
                onClick={show}
                className="mb-1 mt-2 inline-flex h-[34px] w-52 items-center justify-center rounded-lg bg-gradient-to-r from-[#2f3cc9] to-[#ad52dd] px-4 text-sm text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {isConnected ? ensName ?? truncatedAddress : 'Connect Wallet'}
              </button>
            )
          }}
        </ConnectKitButton.Custom>
      )
    } else {
      button = null
    }
  }

  return <>{button}</>
}

export default ConnectWallet
