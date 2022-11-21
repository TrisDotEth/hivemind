import { useContext, useState } from 'react'

import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'

import { HivemindContext } from 'src/providers/context/HivemindContext'

import Time from '../Time/Time'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ContentFeed = ({ farcasterCasts }) => {
  const [feed, setFeed] = useState('foryou')
  const latestActive = () => {
    setFeed('latest')
  }
  const foryouActive = () => {
    setFeed('foryou')
  }

  const hivemind = useContext(HivemindContext)
  return (
    <div>
      <div className="flex justify-center">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={foryouActive}
            className={classNames(
              feed === 'foryou' ? ' text-white' : ' text-gray hover:text-white',
              'flex whitespace-nowrap px-1 pt-1 pb-2 font-medium'
            )}
          >
            {hivemind.activeHmData.displayName}&apos;s Feed
            <span
              className={classNames(
                feed === 'foryou' ? 'text-indigo-600 bg-primary' : 'text-gray',
                'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium text-white md:inline-block'
              )}
            ></span>
          </button>
          <button
            onClick={latestActive}
            className={classNames(
              feed === 'latest' ? ' text-white' : ' text-gray hover:text-white',
              'flex whitespace-nowrap px-1 pt-1 pb-2 font-medium'
            )}
          >
            Latest
            <span
              className={classNames(
                feed === 'latest' ? 'text-indigo-600 bg-primary' : 'text-gray',
                'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium text-white md:inline-block'
              )}
            ></span>
          </button>
        </nav>
      </div>

      <ul className="divide-gray-200 divide-y">
        {farcasterCasts.getActivity.activity.map((casts) => (
          <li key={casts.body.sequence} className="py-3">
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
                  {/* <p className="text-gray-400 pl-1 text-sm text-gray">• Cast</p> */}
                  <p className="text-gray-400 pl-1 text-sm text-gray">
                    • <Time time={casts.body.publishedAt} />
                  </p>
                </div>
                <p className="text-gray-700 text-sm text-white">
                  {casts.body.data.text}
                </p>
                <div className=" mt-2 flex justify-between space-x-8 border-b border-gray-dark pt-1 pb-2">
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
                    {/* <span className="inline-flex items-center text-sm text-gray">
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
                    </span> */}
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
