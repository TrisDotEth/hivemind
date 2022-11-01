import React, { useState } from 'react'

//Context applied following this guide - https://community.redwoodjs.com/t/react-context-in-redwoodjs/2572
const HivemindContext = React.createContext({
  activeHmData: {
    name: 'Design',
    farcasterName: 'tris',
    profileImageURL: '',
    aboutInformation: '',
  },
  //@ts-expect-error big rabbithole I went down here, this really seems inelegant. TS thinks Dispatch is not detected on the React object, which is true when you use a debugger, it registers as undefined on the object which can't be good,..
  setActiveHmData: React.Dispatch<React.SetStateAction<string>>,
})

const HivemindContextProvider = ({ children }) => {
  const [activeHmData, setActiveHmData] = useState({
    name: 'Design',
    farcasterName: 'tris',
    profileImageURL: '',
    aboutInformation: '',
  })
  return (
    <HivemindContext.Provider
      value={{
        activeHmData: activeHmData,
        setActiveHmData: setActiveHmData,
      }}
    >
      {children}
    </HivemindContext.Provider>
  )
}

export { HivemindContext, HivemindContextProvider }
