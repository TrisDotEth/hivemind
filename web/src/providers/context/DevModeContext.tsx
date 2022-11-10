import React, { useState } from 'react'

//Context applied following this guide - https://community.redwoodjs.com/t/react-context-in-redwoodjs/2572
const DevModeContext = React.createContext({
  devMode: false,
  //@ts-expect-error big rabbithole I went down here, this really seems inelegant. TS thinks Dispatch is not detected on the React object, which is true when you use a debugger, it registers as undefined on the object which can't be good,..
  setDevMode: React.Dispatch<React.SetStateAction<boolean>>,
})

const DevModeContextProvider = ({ children }) => {
  const [devMode, setDevMode] = useState(false)
  return (
    <DevModeContext.Provider
      value={{
        devMode,
        setDevMode,
      }}
    >
      {children}
    </DevModeContext.Provider>
  )
}

export { DevModeContext, DevModeContextProvider }
