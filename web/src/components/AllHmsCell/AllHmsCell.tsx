import type { FindHiveminds } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ActiveHmCell from '../ActiveHmCell/ActiveHmCell'
import UpdateAllHmsContext from '../UpdateAllHmsContext/UpdateAllHmsContext'


export const QUERY = gql`
  query FindHiveminds {
    hiveminds {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ hiveminds }: CellSuccessProps<FindHiveminds>) => {
  return (
    <UpdateAllHmsContext data={hiveminds}/>
  )
}
