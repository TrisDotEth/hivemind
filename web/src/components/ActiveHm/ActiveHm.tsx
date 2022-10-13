import { useContext } from 'react'

import { HivemindContext } from 'src/providers/context/HivemindContext'

const ActiveHm = () => {
  const hivemind = useContext(HivemindContext)
  return <h1>{'Hivemind is - ' + hivemind.activeHmData.name}</h1>
}

export default ActiveHm
