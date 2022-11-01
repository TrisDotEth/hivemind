import React, { useState, useEffect } from 'react'

import { gql, useQuery } from '@apollo/client'

//Context applied following this guide - https://community.redwoodjs.com/t/react-context-in-redwoodjs/2572
const AllHivemindsContext = React.createContext({
  allHmData: [{ id: 0 }],
})

const QUERY = gql`
  query FindHiveminds {
    hiveminds {
      id
    }
  }
`
const getAllHms = () => {
  const { loading, error, data } = useQuery(QUERY, {})
  return data
}

const AllHivemindsContextProvider = ({ children }) => {
  const [allHmData, setallHmData] = useState([{ id: 0 }])
  const allHms = getAllHms()

  useEffect(() => {
    if (allHms) {
      setallHmData(allHms.hiveminds)
    }
  }, [allHms])

  return (
    <AllHivemindsContext.Provider
      value={{
        allHmData: allHmData,
      }}
    >
      {children}
    </AllHivemindsContext.Provider>
  )
}

export { AllHivemindsContext, AllHivemindsContextProvider }
