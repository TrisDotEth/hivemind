import type { getCasts } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query getCasts($userName: String!){
    getCasts(userName:$userName){
      avatar
      displayName
      username
      type
      casts {
        text
        publishedAt
      }
  }
}
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

//needs TS
export const Success = (farcasterCasts) => {
  debugger;
  return <h1>{farcasterCasts.getCasts.avatar}</h1>

}
