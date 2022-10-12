import type { FindHivemindById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindHivemindById($id: Int!) {
    hivemind: hivemind(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Hivemind not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ hivemind }: CellSuccessProps<FindHivemindById>) => {
  return <h1>{hivemind.name + ' -active'}</h1>
}
