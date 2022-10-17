import { useState, useContext } from 'react'

//@ts-expect-error rwcellissue
import ActiveHmCell from '../ActiveHmCell/ActiveHmCell'
import { AllHivemindsContext } from 'src/providers/context/AllHivemindsContext'

const ChangeHm = () => {
  const [Increment, setIncrement] = useState(0)
  const allHms = useContext(AllHivemindsContext).allHmData.map(({id}) => ({ id}))

  const changeHm = () => {
    if (allHms.length-2 >= Increment) {
      setIncrement(Increment+1)
    } else {
      setIncrement(0)
    }
  }

  return (
    <>
      <button
        onClick={changeHm}
        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Change Hivemind
      </button>
      <ActiveHmCell id={allHms[Increment].id} />
    </>
  )
}

export default ChangeHm
