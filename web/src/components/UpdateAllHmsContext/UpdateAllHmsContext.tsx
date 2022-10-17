import { useContext, useEffect } from 'react'
import { AllHivemindsContext } from 'src/providers/context/AllHivemindsContext'

const UpdateAllHmsContext = (data) => {
  const setallHmData = useContext(AllHivemindsContext).setallHmData
  useEffect(() => {
    setallHmData(data.data)
  }, [data.data, setallHmData])

    return <></>
}

export default UpdateAllHmsContext
