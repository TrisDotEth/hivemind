import type { FindHivemindById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UpdateHmContext from '../UpdateHmContext/UpdateHmContext'

export const QUERY = gql`
  query FindHivemindById($id: Int!) {
    hivemind: hivemind(id: $id) {
      id
      name
      profileImageURL
      aboutInformation
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Hivemind not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ hivemind }: CellSuccessProps<FindHivemindById>) => {
  return <UpdateHmContext data={hivemind} />
}
