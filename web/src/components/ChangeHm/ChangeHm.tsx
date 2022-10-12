import { useContext } from 'react'

import { HivemindContext } from 'src/providers/context/HivemindContext'

const ChangeHm = () => {
  const [context, setContext] = useContext(HivemindContext)

  //hack for now, will be built out later
  const changeHm = () => {
    const toggle = context == 1 ? 2 : 1
    setContext(toggle)
  }
  return (
    <button
      onClick={changeHm}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Change Hivemind
    </button>
  )
}

export default ChangeHm
