import { useState } from 'react'

import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'
import { useLocation } from '@redwoodjs/router'

import ActionBox from '../ActionBox/ActionBox'
import Time from '../Time/Time'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ContentFeed = ({ farcasterCasts }) => {
  const { pathname } = useLocation()

  const threadPage = pathname.includes('/thread')
  //Work out if a reply
  const reply = () => {
    if (threadPage) {
      const reply = {
        fid: farcasterCasts.activity[0].author.fid,
        hash: farcasterCasts.activity[0].hash,
      }
      return reply
    }
  }

  const [feed, setFeed] = useState('foryou')
  const latestActive = () => {
    setFeed('latest')
  }
  const foryouActive = () => {
    setFeed('foryou')
  }
  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children
  return (
    <div>
      {/* <div className="flex justify-center">
        <nav className="-mb-px flex space-x-3" aria-label="Tabs">
          <button
            onClick={foryouActive}
            className={classNames(
              feed === 'foryou' ? ' text-white' : ' text-gray hover:text-white',
              'flex whitespace-nowrap px-1 pt-1 pb-2 font-medium'
            )}
          >
            For {anyone.displayName}
            <span
              className={classNames(
                feed === 'foryou' ? 'text-indigo-600 bg-primary' : 'text-gray',
                'ml-1 hidden rounded-full py-0.5 px-2.5 text-xs font-medium text-white md:inline-block'
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
                'ml-1 hidden rounded-full py-0.5 px-2.5 text-xs font-medium text-white md:inline-block'
              )}
            ></span>
          </button>
        </nav>
      </div> */}

      <ActionBox reply={reply()} />
      <ul className="divide-gray-200 mt-[-10px]">
        {farcasterCasts.activity.map((casts) => {
          console.log('foo')
          // const replyTo = casts.parentAuthor.displayName ? true : false
          return (
            <li
              key={casts.timestamp}
              className="z-10 border-b border-gray-dark py-3 px-4"
            >
              <div className="flex space-x-3 overflow-hidden">
                <Link
                  to={routes.be({ name: casts.author.username })}
                  className="contents"
                >
                  <img
                    className="h-6 w-6 rounded-full"
                    src={casts.author.pfp.url}
                    alt=""
                  />
                </Link>

                <div className="flex-1 space-y-1">
                  <ConditionalWrapper
                    condition={!threadPage}
                    wrapper={(children) => (
                      <Link
                        to={routes.thread({ threadHash: casts.threadHash })}
                      >
                        {children}
                      </Link>
                    )}
                  >
                    <div className="flex items-center ">
                      <h3 className="text-sm text-white">
                        {casts.author.displayName}
                      </h3>
                      {/* <p className="text-gray-400 pl-1 text-sm text-gray">• Cast</p> */}
                      {/* {replyTo && (
                        <p className="text-gray-400 pl-1 text-sm text-gray">
                          • replying to {casts.parentAuthor.displayName}
                        </p>
                      )} */}
                      <p className="text-gray-400 pl-1 text-sm text-gray">
                        • <Time time={casts.timestamp} />
                      </p>
                    </div>
                    <p className="text-gray-700 text-sm text-white">
                      {casts.text}
                    </p>
                  </ConditionalWrapper>
                  {/* <div className=" mt-2 flex justify-between space-x-8 border-b border-gray-dark pt-1 pb-2"> */}
                  <div className=" mt-2 flex justify-between space-x-8 pt-1 pb-2">
                    <div className="flex space-x-6">
                      <span className="inline-flex items-center text-sm text-gray">
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-500 inline-flex space-x-2"
                        >
                          <HeartIcon className="h-5 w-5 " aria-hidden="true" />
                          <span>{casts.reactions.count}</span>
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
                          <span>{casts.replies.count}</span>
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
          )
        })}
      </ul>
    </div>
  )
}

export default ContentFeed
