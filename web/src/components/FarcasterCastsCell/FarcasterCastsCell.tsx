import type { getCasts } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ContentFeed from '../ContentFeed/ContentFeed'

export const QUERY = gql`
  query getCasts($userName: String!) {
    getCasts(userName: $userName) {
      avatar
      displayName
      username
      followerCount
      followingCount
      bioText
      casts {
        text
        publishedAt
        replyParentAddress
        replyParentUsername
        sequence
      }
    }
  }
`

export const Loading = () => <div>Loading...??</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

//needs TS
export const Success = (farcasterCasts: CellSuccessProps<getCasts>) => {
  return (
    <>
      <ContentFeed farcasterCasts={farcasterCasts} />
    </>
  )
}
