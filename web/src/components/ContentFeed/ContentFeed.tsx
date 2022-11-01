import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline'

import Time from '../Time/Time'

const ContentFeed = ({ farcasterCasts }) => {
  return (
    <div>
      <h3 className="relative top-1 left-9 text-xs font-semibold text-gray">
        LATEST ACTIONS
      </h3>
      <ul className="divide-gray-200 divide-y">
        {farcasterCasts.getActivity.activity.map((casts) => (
          <li
            key={casts.body.sequence}
            className="border-bottom-2 border-primary-dark py-3"
          >
            <div className="flex space-x-3 overflow-hidden">
              <img
                className="h-6 w-6 rounded-full"
                src={casts.meta.avatar}
                alt=""
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center ">
                  <h3 className="text-sm text-white">
                    {casts.meta.displayName}
                  </h3>
                  <p className="text-gray-400 pl-1 text-sm text-gray">• Cast</p>
                  <p className="text-gray-400 pl-1 text-sm text-gray">
                    • <Time time={casts.body.publishedAt} />
                  </p>
                </div>
                <p className="text-gray-700 text-sm text-white">
                  {casts.body.data.text}
                </p>
                <div className="mt-2 flex justify-between space-x-8 pt-1">
                  <div className="flex space-x-6">
                    <span className="inline-flex items-center text-sm text-gray">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-500 inline-flex space-x-2"
                      >
                        <HeartIcon className="h-5 w-5 " aria-hidden="true" />
                        <span>{casts.meta.reactions.count}</span>
                        <span className="sr-only">likes</span>
                      </button>
                    </span>
                    <span className="inline-flex items-center text-sm text-gray">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-500 inline-flex space-x-2"
                      >
                        <ChatBubbleLeftIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        <span>{casts.meta.numReplyChildren}</span>
                        <span className="sr-only">replies</span>
                      </button>
                    </span>
                    <span className="inline-flex items-center text-sm text-gray">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-500 inline-flex space-x-2"
                      >
                        <ArrowPathRoundedSquareIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        <span>{casts.meta.recasts.count}</span>
                        <span className="sr-only">recasts</span>
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

export default ContentFeed
