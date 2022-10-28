import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline'

const ContentTest1 = ({ farcasterCasts }) => {
  // debugger
  return (
    <div>
      {/* START OF DIV */}

      <main className="lg:col-span-9 xl:col-span-6">
        {/* <div className="px-4 sm:px-0">
          <div className="sm:hidden">
            <label htmlFor="question-tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="question-tabs"
              className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav
              className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
              aria-label="Tabs"
            >
              {tabs.map((tab, tabIdx) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  aria-current={tab.current ? 'page' : undefined}
                  className={classNames(
                    tab.current
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700',
                    tabIdx === 0 ? 'rounded-l-lg' : '',
                    tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                    'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
                  )}
                >
                  <span>{tab.name}</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      tab.current ? 'bg-rose-500' : 'bg-transparent',
                      'absolute inset-x-0 bottom-0 h-0.5'
                    )}
                  />
                </a>
              ))}
            </nav>
          </div>
        </div> */}
        <div className="mt-4">
          <h1 className="sr-only">Recent casts</h1>
          <ul className="divide-y divide-gray-200">
            {farcasterCasts.getActivity.activity.map((casts) => (
              <li
                key={casts.body.sequence}
                className="bg-white px-4 py-6 sm:p-6"
              >
                <article
                  aria-labelledby={'question-title-' + casts.body.sequence}
                >
                  <div>
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={casts.meta.avatar}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="-" className="hover:underline">
                            {casts.meta.displayName}
                          </a>
                        </p>
                        {/* <p className="text-sm text-gray-500">
                          <a href={question.href} className="hover:underline">
                            <time dateTime={question.datetime}>
                              {question.date}
                            </time>
                          </a>
                        </p> */}
                      </div>
                    </div>
                    {/* <h2
                      id={'question-title-' + casts.sequence}
                      className="mt-4 text-base font-medium text-gray-900"
                    >
                      Title!
                      {casts.sequence}
                    </h2> */}
                  </div>

                  <div
                    className="mt-2 space-y-4 text-sm text-gray-700"
                    dangerouslySetInnerHTML={{ __html: casts.body.data.text }}
                  />
                  <div className="mt-4 flex justify-between space-x-8">
                    <div className="flex space-x-6">
                      <span className="inline-flex items-center text-sm">
                        <button
                          type="button"
                          className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                        >
                          <HeartIcon className="h-5 w-5" aria-hidden="true" />
                          <span className="font-medium text-gray-900">
                            {casts.meta.reactions.count}
                          </span>
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
                          <span className="font-medium text-gray-900">
                            {casts.meta.numReplyChildren}
                          </span>
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
                          <span className="font-medium text-gray-900">
                            {casts.meta.recasts.count}
                          </span>
                          <span className="sr-only">recasts</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* END OF DIV */}
    </div>
  )
}

export default ContentTest1
