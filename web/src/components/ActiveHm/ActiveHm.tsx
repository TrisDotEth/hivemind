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
      <span>{'Hivemind name is - ' + hivemind.activeHmData.name}</span>
      <br></br>
      <span>{'About info is - ' + hivemind.activeHmData.aboutInformation}</span>
    </>
  )
}

export default ActiveHm
