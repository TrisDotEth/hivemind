import type { FindHiveminds } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Hiveminds from 'src/components/Hivemind/Hiveminds'

export const QUERY = gql`
  query FindHiveminds {
    hiveminds {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No hiveminds yet. '}
      <Link
        to={routes.newHivemind()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ hiveminds }: CellSuccessProps<FindHiveminds>) => {
  return <Hiveminds hiveminds={hiveminds} />
}
