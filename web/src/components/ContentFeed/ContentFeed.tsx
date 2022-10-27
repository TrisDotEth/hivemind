import { useState } from 'react'

import ContentTest1 from '../ContentTest1/ContentTest1'
import ContentTest2 from '../ContentTest2/ContentTest2'

const ContentFeed = ({ farcasterCasts }) => {
  const [index, setIndex] = useState(0)

  const change = () => {
    index == 0 ? setIndex(index + 1) : setIndex(0)
  }

  return (
    <div>
      <button
        onClick={change}
        className="mt-2 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Change feed style
      </button>
      <div style={index == 0 ? { display: 'none' } : {}}>
        <ContentTest1 farcasterCasts={farcasterCasts} />
      </div>
      <div style={index == 1 ? { display: 'none' } : {}}>
        <ContentTest2 farcasterCasts={farcasterCasts} />
      </div>
    </div>
  )
}

export default ContentFeed
