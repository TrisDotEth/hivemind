import { useState } from 'react'
import React from 'react'

//Context applied following this guide - https://community.redwoodjs.com/t/react-context-in-redwoodjs/2572
const HivemindContext = React.createContext()

const HivemindContextProvider = ({ children }) => {
  const [state, setState] = useState(1)
  return (
    <HivemindContext.Provider value={[state, setState]}>
      {children}
    </HivemindContext.Provider>
  )
}

export { HivemindContext, HivemindContextProvider }
