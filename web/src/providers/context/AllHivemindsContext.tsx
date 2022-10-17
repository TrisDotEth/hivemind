import React, { useState } from 'react'

//Context applied following this guide - https://community.redwoodjs.com/t/react-context-in-redwoodjs/2572
const AllHivemindsContext = React.createContext({
  allHmData: [{ id: 0 }],
  //@ts-expect-error big rabbithole I went down here, this really seems inelegant. TS thinks Dispatch is not detected on the React object, which is true when you use a debugger, it registers as undefined on the object which can't be good,..
  setallHmData: React.Dispatch<React.SetStateAction<string>>,
})

const AllHivemindsContextProvider = ({ children }) => {
  const [allHmData, setallHmData] = useState([{ id: 0 }])
  // debugger;
  return (
    <AllHivemindsContext.Provider
      value={{
        allHmData: allHmData,
        setallHmData: setallHmData,
      }}
    >
      {children}
    </AllHivemindsContext.Provider>
  )
}

export { AllHivemindsContext, AllHivemindsContextProvider }
