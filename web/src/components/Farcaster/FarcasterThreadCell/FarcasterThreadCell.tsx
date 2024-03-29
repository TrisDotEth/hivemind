import type { getThreadCasts } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ContentFeed from '../../ContentFeed/ContentFeed'

export const QUERY = gql`
  query getThreadCasts($threadHash: String!) {
    getThreadCasts(threadHash: $threadHash) {
      activity {
        author {
          username
          displayName
          fid
          pfp {
            url
            verified
          }
        }
        parentAuthor {
          displayName
        }
        reactions {
          count
        }
        recasts {
          count
        }
        replies {
          count
        }
        text
        timestamp
        threadHash
        hash
      }
    }
  }
`

export const Loading = () => (
  <div className="mb-10 space-y-4 text-center">
    {/* TODO - Sort out a proper loading icon */}
    <img
      className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif"
      // src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
      alt=""
    />
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (farcasterCasts: CellSuccessProps<getThreadCasts>) => {
  return (
    <>
      <ContentFeed farcasterCasts={farcasterCasts.getThreadCasts} />
    </>
  )
}
