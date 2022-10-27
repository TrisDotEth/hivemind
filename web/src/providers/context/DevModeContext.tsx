import React, { useState } from 'react'

//Context applied following this guide - https://community.redwoodjs.com/t/react-context-in-redwoodjs/2572
const DevModeContext = React.createContext({ devMode: false })

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
