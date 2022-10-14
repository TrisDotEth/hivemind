import { useState, useContext, useEffect } from 'react'

import { ethers } from 'ethers'

import { isBrowser } from '@redwoodjs/prerender/browserUtils'

import { WalletContext } from 'src/providers/context/WalletContext'

//TS not seeing .ethereum
declare let window: any

const ConnectWallet = () => {
  const WalletContextObject = useContext(WalletContext)
  // const setActiveWalletData = WalletContextObject.setActiveWalletData
  const [connectText, setConnectText] = useState('Connect Wallet')

  const connect = async () => {
    if (!isBrowser) return false
    if (!window.ethereum) {
      WalletContextObject.setActiveWalletData({
        address: 'Please install Metamask',
      })
      return false
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    const ensname = await provider.lookupAddress(address)

    WalletContextObject.setActiveWalletData({
      signer,
      provider,
      address,
      ensname,
    })
  }

  useEffect(() => {
    connect()
    if (WalletContextObject.activeWalletData.ensname) {
      setConnectText(WalletContextObject.activeWalletData.ensname)
    } else {
      setConnectText(WalletContextObject.activeWalletData.address)
    }
  }, [
    WalletContextObject.activeWalletData.address,
    WalletContextObject.activeWalletData.ensname,
  ])

  // const setActiveWalletData = useContext(WalletContext).setActiveWalletData
  // useEffect(() => {
  //   setActiveWalletData(data.data)
  // }, [data.data, setActiveWalletData])

  return (
    <div>
      <h2>{'ConnectWallet'}</h2>
      <button
        onClick={connect}
        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {connectText}
      </button>
    </div>
  )
}

export default ConnectWallet
