import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import LinkifyIt from 'linkify-it'
//http://markdown-it.github.io/linkify-it/doc/

import { Link, routes } from '@redwoodjs/router'

import Time from '../Time/Time'

const ContentFeedHome = ({ farcasterCasts }) => {
  const detectImage = (content) => {
    //detect imgur regex https://regex101.com/r/qI4lY7/3

    const regex5 = /(https?:\/\/i\.imgur\.com\/(.*?)(?:[#\/].*|$))/m // eslint-disable-line

    const imageLink = regex5.exec(content)

    const linkify = new LinkifyIt()
    const links = linkify.match(content)
    const contentProcessing = { image: null, content: content, linkUrl: null }

    if (imageLink) {
      contentProcessing.content = contentProcessing.content.replace(
        imageLink[0],
        ''
      )
      contentProcessing.image = imageLink[0]
    }
    if (links) {
      contentProcessing.content = contentProcessing.content.replace(
        links[0].raw,
        ''
      )
      contentProcessing.linkUrl = links[0].url
    }

    return contentProcessing
  }
  return (
    <div>
      <ul className="divide-gray-200">
        {farcasterCasts.activity.map((casts) => {
          const { image, content, linkUrl } = detectImage(casts.text)
          console.log(image)
          return (
            <li
              key={casts.timestamp}
              className="z-10 border-b border-gray-dark py-3 px-4"
            >
              {/* I removed overflow hidden from here */}
              <div
                className="[grid-template-columns:1fr 1fr] grid space-x-3"
                style={{ gridTemplateColumns: '0fr 1fr' }}
              >
                <Link
                  to={routes.be({ name: casts.author.username })}
                  className="w-12"
                >
                  <img
                    className="mt-1 h-12 w-12 rounded-full"
                    src={casts.author.pfp.url}
                    alt=""
                  />
                </Link>

                <div className="grid items-center space-y-1">
                  <Link to={routes.thread({ threadHash: casts.threadHash })}>
                    <div className="flex items-center ">
                      <h3 className="text-sm font-semibold text-white">
                        {casts.author.displayName}
                      </h3>
                      {/* <p className="text-gray-400 pl-1 text-sm text-gray">• Cast</p> */}
                      {casts.parentAuthor && (
                        <p className="text-gray-400 pl-1 text-sm text-gray">
                          • replying to {casts.parentAuthor.displayName}
                        </p>
                      )}
                      <p className="text-gray-400 pl-1 text-sm text-gray">
                        •
                        <Time time={casts.timestamp} />
                      </p>
                    </div>
                    <p className="text-gray-700 text-sm text-white">
                      {content}
                    </p>
                  </Link>
                  {linkUrl && (
                    <a
                      className="text-gray-700 text-sm text-white underline"
                      href={linkUrl}
                    >
                      {linkUrl}
                    </a>
                  )}
                  {image && (
                    <img
                      src={image}
                      alt="imgur"
                      className="relative left-[-20%] mt-4 h-full w-screen max-w-[100vw]"
                      // className="relative left-1/2 right-1/2 mx-[-50vw] h-full w-screen max-w-[100vw]"
                    ></img>
                  )}

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

export default ContentFeedHome
