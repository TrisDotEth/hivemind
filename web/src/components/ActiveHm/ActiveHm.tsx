import { useContext } from 'react'

import ActiveHmCell from 'src/components/ActiveHmCell/ActiveHmCell'
import { HivemindContext } from 'src/providers/context/HivemindContext'

const ActiveHm = () => {
  const activeHmID = useContext(HivemindContext)
  return <ActiveHmCell id={activeHmID[0]} />
}

export default ActiveHm
