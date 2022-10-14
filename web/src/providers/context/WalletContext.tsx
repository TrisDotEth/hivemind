import React, { useState } from 'react'

//Context applied following this guide - https://community.redwoodjs.com/t/react-context-in-redwoodjs/2572
const WalletContext = React.createContext({
  activeWalletData: {
    signer: {},
    provider: {},
    address: 'Connect Wallet',
    ensname: '',
  },
  //@ts-expect-error big rabbithole I went down here, this really seems inelegant. TS thinks Dispatch is not detected on the React object, which is true when you use a debugger, it registers as undefined on the object which can't be good,..
  setActiveWalletData: React.Dispatch<React.SetStateAction<string>>,
})

const WalletContextProvider = ({ children }) => {
  const [activeWalletData, setActiveWalletData] = useState({
    signer: {},
    provider: {},
    address: 'Connect Wallet',
    ensname: '',
  })
  return (
    <WalletContext.Provider
      value={{
        activeWalletData: activeWalletData,
        setActiveWalletData: setActiveWalletData,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export { WalletContext, WalletContextProvider }
