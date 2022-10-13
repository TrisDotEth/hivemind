import { useState } from 'react'

//@ts-expect-error rwcellissue
import ActiveHmCell from '../ActiveHmCell/ActiveHmCell'

const ChangeHm = () => {
  // const { activeHmID, setActiveHm } = useContext(HivemindContext)
  const [toggle, setToggle] = useState(1)

  //hack for now, will be built out later
  const changeHm = () => {
    setToggle(toggle == 1 ? 2 : 1)
  }
  return (
    <>
      <button
        onClick={changeHm}
        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Change Hivemind
      </button>
      <ActiveHmCell id={toggle} />
    </>
  )
}

export default ChangeHm
