import type { FindHivemindById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Hivemind from 'src/components/Hivemind/Hivemind'

export const QUERY = gql`
  query FindHivemindById($id: Int!) {
    hivemind: hivemind(id: $id) {
      id
      name
      profileImageURL
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Hivemind not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ hivemind }: CellSuccessProps<FindHivemindById>) => {
  return <Hivemind hivemind={hivemind} />
}
