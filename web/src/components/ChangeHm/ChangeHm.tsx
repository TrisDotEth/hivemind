import { useState } from 'react'

import FarcasterUserCell from 'src/components/FarcasterUserCell'
import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'

const ChangeHm = ({ children }) => {
  const [Increment, setIncrement] = useState(0)

  const anyones = useAllAnyonesStore((state) => state.anyones)
  const changeHm = () => {
    if (anyones.anyones.length - 2 >= Increment) {
      setIncrement(Increment + 1)
    } else {
      setIncrement(0)
    }
  }
  //TODO change hack of hardcoding classname
  return (
    <>
      <button onClick={changeHm} className="py-12">
        {children}
      </button>
      <FarcasterUserCell profileId={anyones.anyones[Increment].id} />
    </>
  )
}

export default ChangeHm
