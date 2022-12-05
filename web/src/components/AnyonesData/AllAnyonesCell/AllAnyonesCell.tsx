import type { Profiles } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UpdateAllAnyones from '../UpdateAllAnyones/UpdateAllAnyones'

//TODO Update with Anyones not Profiles
export const QUERY = gql`
  query Profiles {
    profiles {
      id
      importedData
      hivemind {
        id
        name
      }
    }
  }
`

export const Loading = () => <div></div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ profiles }: CellSuccessProps<Profiles>) => {
  return <UpdateAllAnyones anyones={profiles} />
}
