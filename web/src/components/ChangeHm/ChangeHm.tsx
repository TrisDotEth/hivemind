import { useState, useContext } from 'react'

//@ts-expect-error rwcellissue
import { AllHivemindsContext } from 'src/providers/context/AllHivemindsContext'

import ActiveHmCell from '../ActiveHmCell/ActiveHmCell'

const ChangeHm = ({ children }) => {
  const [Increment, setIncrement] = useState(0)
  const allHms = useContext(AllHivemindsContext).allHmData.map(({ id }) => ({
    id,
  }))

  const changeHm = () => {
    if (allHms.length - 2 >= Increment) {
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

      <ActiveHmCell id={allHms[Increment].id} />
    </>
  )
}

export default ChangeHm
