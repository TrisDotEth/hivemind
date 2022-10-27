import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline'

const ContentTest2 = ({ farcasterCasts }) => {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {farcasterCasts.getCasts.casts.map((casts) => (
          <li key={casts.sequence} className="py-4">
            <div className="flex space-x-3">
              <img
                className="h-6 w-6 rounded-full"
                src={farcasterCasts.getCasts.avatar}
                alt=""
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center ">
                  <h3 className="text-sm ">
                    {farcasterCasts.getCasts.displayName}
                  </h3>
                  <p className="pl-2 text-sm text-gray-400">• 12m</p>
                </div>
                <p className="text-sm text-gray-700">{casts.text}</p>
                <div className="mt-2 flex justify-between space-x-8 pt-1">
                  <div className="flex space-x-6">
                    <span className="inline-flex items-center text-sm">
                      <button
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <HeartIcon className="h-5 w-5" aria-hidden="true" />
                        <span>44</span>
                        <span className="sr-only">likes</span>
                      </button>
                    </span>
                    <span className="inline-flex items-center text-sm">
                      <button
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <ChatBubbleLeftIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        <span>• 12m</span>
                        <span className="sr-only">replies</span>
                      </button>
                    </span>
                    <span className="inline-flex items-center text-sm">
                      <button
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <ArrowPathRoundedSquareIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        <span>44</span>
                        <span className="sr-only">views</span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentTest2
