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
      <img src={farcasterCasts.getCasts.avatar} alt="" />
      <br />
      <h1>{farcasterCasts.getCasts.displayName}</h1>
      <br />
      <h1>{farcasterCasts.getCasts.userName}</h1>
      <br />
      <h1>{farcasterCasts.getCasts.followerCount}</h1>
      <br />
      <h1>{farcasterCasts.getCasts.followingCount}</h1>
      <br />
      <h1>{farcasterCasts.getCasts.bioText}</h1>
      <ul>
        {farcasterCasts.getCasts.casts.map((casts) => (
          <li key={casts.sequence}>
            {casts.text}
            <br />
            <h1>{casts.replyParentAddress}</h1>
            <h1>{casts.replyParentUsername}</h1>
            <br />
            <h1>{casts.sequence}</h1>
            <span>--------</span>
          </li>
        ))}
      </ul>
    </>
  )
}
