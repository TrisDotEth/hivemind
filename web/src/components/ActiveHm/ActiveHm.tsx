import { useContext } from 'react'

import { HivemindContext } from 'src/providers/context/HivemindContext'

const ActiveHm = () => {
  const hivemind = useContext(HivemindContext)
  return (
    <>
      <a
        href={hivemind.activeHmData.profileImageURL}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={hivemind.activeHmData.profileImageURL}
          style={{ maxWidth: '50px' }}
          alt="profile"
        />
      </a>
      <h1>{'Hivemind is - ' + hivemind.activeHmData.name}</h1>
    </>
  )
}

export default ActiveHm
