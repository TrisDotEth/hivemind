import type { getActivity } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ContentFeed from '../../ContentFeed/ContentFeed'

export const QUERY = gql`
  query getActivity($userName: String!) {
    getActivity(userName: $userName) {
      activity {
        meta {
          displayName
          avatar
          isVerifiedAvatar
          reactions {
            count
            type
          }
          recasts {
            count
          }
          numReplyChildren
          replyParentUsername {
            username
            address
          }
        }
        body {
          type
          publishedAt
          sequence
          address
          username
          data {
            text
          }
        }
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

//needs TS
export const Success = (farcasterCasts: CellSuccessProps<getActivity>) => {
  return (
    <>
      <ContentFeed farcasterCasts={farcasterCasts} />
    </>
  )
}
